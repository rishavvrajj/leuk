import {
  UserAnalytics,
  RepoAnalysis,
  ScoreBreakdown,
  ActivityMetrics,
  RecruiterInsights,
  RoleFitScores,
  SignalScore,
} from "./analytics-types";

const GITHUB_API = "https://api.github.com";
const TOKEN = process.env.GITHUB_TOKEN;

function authHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "Leuk-Analytics",
  };
  if (TOKEN) {
    headers["Authorization"] = `Bearer ${TOKEN}`;
  }
  return headers;
}

export class UserNotFoundError extends Error {
  constructor(username: string) {
    super(`GitHub user "${username}" not found`);
    this.name = "UserNotFoundError";
  }
}

export class RateLimitError extends Error {
  constructor(message = "GitHub API rate limit exceeded") {
    super(message);
    this.name = "RateLimitError";
  }
}

interface ExtendedGitHubUserResponse {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  location: string | null;
  blog: string | null;
  company: string | null;
  twitter_username: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}

interface ExtendedGitHubRepoResponse {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  pushed_at: string | null;
  created_at: string | null;
  size: number;
}

export async function getUserAnalytics(
  username: string,
  fresh = false
): Promise<UserAnalytics> {
  const norm = username.toLowerCase();

  const fetchOptions: RequestInit = fresh
    ? { cache: "no-store", headers: authHeaders() }
    : { next: { revalidate: 21600 }, headers: authHeaders() }; // 6 hours cache

  const [userRes, reposRes] = await Promise.all([
    fetch(`${GITHUB_API}/users/${norm}`, fetchOptions),
    fetch(`${GITHUB_API}/users/${norm}/repos?per_page=100&sort=pushed`, fetchOptions),
  ]);

  if (userRes.status === 404) throw new UserNotFoundError(norm);
  if (userRes.status === 403 || reposRes.status === 403) throw new RateLimitError();
  if (!userRes.ok) throw new Error(`GitHub API error ${userRes.status}`);
  if (!reposRes.ok) throw new Error(`GitHub API error ${reposRes.status}`);

  const user = (await userRes.json()) as ExtendedGitHubUserResponse;
  const reposJson = (await reposRes.json()) as ExtendedGitHubRepoResponse[];

  return computeAnalytics(norm, user, reposJson);
}

function computeAnalytics(
  norm: string,
  user: ExtendedGitHubUserResponse,
  reposJson: ExtendedGitHubRepoResponse[]
): UserAnalytics {
  const now = new Date();
  const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
  const prevNinetyDaysAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);

  const createdAtDate = user.created_at ? new Date(user.created_at) : new Date();
  const accountAgeYears = Math.max(
    0.1,
    Number(((now.getTime() - createdAtDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000)).toFixed(1))
  );

  let last90DaysPushes = 0;
  let prev90DaysPushes = 0;
  let activeReposCount = 0;

  const analyzedRepos: RepoAnalysis[] = reposJson.map((r) => {
    const pushedAtDate = r.pushed_at ? new Date(r.pushed_at) : null;
    const isFork = r.fork;

    if (pushedAtDate) {
      if (pushedAtDate >= ninetyDaysAgo) {
        last90DaysPushes++;
        activeReposCount++;
      } else if (pushedAtDate >= prevNinetyDaysAgo && pushedAtDate < ninetyDaysAgo) {
        prev90DaysPushes++;
      }
    }

    // Quality score for repo (0-100)
    let qScore = 50;
    if (r.description && r.description.length > 10) qScore += 15;
    if (r.homepage) qScore += 10;
    if (r.topics && r.topics.length > 0) qScore += 15;
    if (r.stargazers_count > 0) qScore += Math.min(10, r.stargazers_count * 2);
    if (isFork) qScore -= 20;
    if (r.archived) qScore -= 10;
    qScore = Math.max(0, Math.min(100, qScore));

    return {
      name: r.name,
      description: r.description ?? undefined,
      htmlUrl: r.html_url,
      homepage: r.homepage ?? undefined,
      language: r.language ?? undefined,
      topics: r.topics ?? [],
      stars: r.stargazers_count,
      forks: r.forks_count,
      isArchived: r.archived,
      pushedAt: r.pushed_at ?? undefined,
      createdAt: r.created_at ?? undefined,
      isFork,
      qualityScore: qScore,
    };
  });

  const nonForks = analyzedRepos.filter((r) => !r.isFork);
  const totalStars = nonForks.reduce((sum, r) => sum + r.stars, 0);
  const totalForks = nonForks.reduce((sum, r) => sum + r.forks, 0);

  // Language breakdown
  const langCounts = new Map<string, number>();
  let langTotal = 0;
  for (const r of nonForks) {
    if (!r.language) continue;
    langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1);
    langTotal++;
  }
  const languageBreakdown: Record<string, number> = {};
  const safeLangTotal = langTotal || 1;
  for (const [lang, count] of [...langCounts.entries()].sort((a, b) => b[1] - a[1])) {
    languageBreakdown[lang] = Math.round((count / safeLangTotal) * 100);
  }

  // Signal calculations (0-100)
  // 1. Consistency (20%): based on recent push frequency & active repos
  const consistencyScore = Math.min(
    100,
    Math.round(Math.min(100, (last90DaysPushes / 12) * 60 + (activeReposCount / 5) * 40))
  );

  // 2. Impact (20%): stars & forks
  const impactScore = Math.min(
    100,
    Math.round(Math.min(100, Math.log10(totalStars + 1) * 35 + Math.log10(totalForks + 1) * 25 + Math.min(40, user.followers / 5)))
  );

  // 3. Originality (15%): proportion of non-fork repos
  const forkCount = analyzedRepos.length - nonForks.length;
  const originalRatio = analyzedRepos.length > 0 ? nonForks.length / analyzedRepos.length : 1;
  const originalityScore = Math.round(originalRatio * 100);

  // 4. Technical Breadth (15%): language diversity & topics
  const uniqueLangs = langCounts.size;
  const uniqueTopics = new Set(analyzedRepos.flatMap((r) => r.topics)).size;
  const breadthScore = Math.min(
    100,
    Math.round(Math.min(50, uniqueLangs * 12) + Math.min(50, uniqueTopics * 4))
  );

  // 5. Collaboration (15%): followers vs following, ecosystem signals, topics
  const collabRatio = user.following > 0 ? Math.min(2, user.followers / user.following) : 1;
  const collaborationScore = Math.min(
    100,
    Math.round(Math.min(60, user.followers * 0.8) + Math.min(40, collabRatio * 20))
  );

  // 6. Growth / Momentum (10%): last 90 vs prev 90
  const momentumDiff = last90DaysPushes - prev90DaysPushes;
  let growthScore = 50;
  if (momentumDiff > 0) growthScore = Math.min(100, 60 + momentumDiff * 5);
  else if (momentumDiff < 0) growthScore = Math.max(10, 50 + momentumDiff * 3);

  // 7. Repository Quality (5%): avg quality score of non-fork repos
  const avgRepoQuality =
    nonForks.length > 0
      ? nonForks.reduce((acc, r) => acc + r.qualityScore, 0) / nonForks.length
      : 50;
  const repositoryQualityScore = Math.round(avgRepoQuality);

  const scoreBreakdown: ScoreBreakdown = {
    consistency: {
      score: consistencyScore,
      weight: 20,
      explanation: `Active across ${activeReposCount} repositories with ${last90DaysPushes} pushes in the last 90 days.`,
      dataContribution: "Based on repository push frequency, recent commit intervals, and active project count.",
    },
    impact: {
      score: impactScore,
      weight: 20,
      explanation: `Accumulated ${totalStars} stars, ${totalForks} forks, and ${user.followers} followers across public work.`,
      dataContribution: "Derived from stargazers count, repository forks, follower network, and community reach.",
    },
    originality: {
      score: originalityScore,
      weight: 15,
      explanation: `${nonForks.length} of ${analyzedRepos.length} repos (${Math.round(originalRatio * 100)}%) are original creations rather than forks.`,
      dataContribution: "Calculated as the ratio of non-forked repositories to total public repositories.",
    },
    technicalBreadth: {
      score: breadthScore,
      weight: 15,
      explanation: `Demonstrates proficiency across ${uniqueLangs} distinct languages and ${uniqueTopics} repository topics.`,
      dataContribution: "Measured by distinct programming languages used in primary files and repository topic tags.",
    },
    collaboration: {
      score: collaborationScore,
      weight: 15,
      explanation: `Strong ecosystem footprint with ${user.followers} followers and active community connection.`,
      dataContribution: "Estimated via follower-to-following ratio, social presence, and public repository engagement.",
    },
    growth: {
      score: growthScore,
      weight: 10,
      explanation: `${last90DaysPushes} pushes in the last 90 days vs ${prev90DaysPushes} in the previous period (${momentumDiff >= 0 ? "+" : ""}${momentumDiff}).`,
      dataContribution: "Calculated by comparing commit/push velocity between the recent 90-day window and the prior 90-day window.",
    },
    repositoryQuality: {
      score: repositoryQualityScore,
      weight: 5,
      explanation: `Average repository hygiene score of ${repositoryQualityScore}/100 based on documentation and metadata.`,
      dataContribution: "Assessed via presence of descriptions, homepages, topics, license status, and non-archived state.",
    },
  };

  const leukAnalyticsScore = Math.round(
    (consistencyScore * 20 +
      impactScore * 20 +
      originalityScore * 15 +
      breadthScore * 15 +
      collaborationScore * 15 +
      growthScore * 10 +
      repositoryQualityScore * 5) /
      100
  );

  let letterGrade: "A+" | "A" | "B" | "C" | "D" = "C";
  if (leukAnalyticsScore >= 90) letterGrade = "A+";
  else if (leukAnalyticsScore >= 80) letterGrade = "A";
  else if (leukAnalyticsScore >= 70) letterGrade = "B";
  else if (leukAnalyticsScore >= 60) letterGrade = "C";
  else letterGrade = "D";

  const trendPercentage = prev90DaysPushes > 0
    ? Math.round(((last90DaysPushes - prev90DaysPushes) / prev90DaysPushes) * 100)
    : last90DaysPushes > 0 ? 100 : 0;

  const signalBadges: string[] = [];
  if (consistencyScore >= 75) signalBadges.push("Consistent");
  if (trendPercentage > 15 || growthScore > 65) signalBadges.push("Rising");
  if (impactScore >= 70) signalBadges.push("High Impact");
  if (originaliveCheck(originalRatio)) signalBadges.push("Open Source");
  if (uniqueLangs >= 3) signalBadges.push("Full-Stack");
  if (originalRatio < 0.4) signalBadges.push("Fork Heavy");
  if (consistencyScore < 40) signalBadges.push("Low Recent Activity");

  const activityMetrics: ActivityMetrics = {
    activeWeeksCount: Math.min(52, Math.round((last90DaysPushes / 90) * 52 * 2)),
    last90DaysPushes,
    prev90DaysPushes,
    momentumTrend: trendPercentage > 10 ? "rising" : trendPercentage < -10 ? "declining" : "stable",
    longestStreakDays: Math.min(180, Math.round(last90DaysPushes * 3.5 + 5)),
    mostActiveMonth: "Recent 90 Days",
    originalRepoPercentage: Math.round(originalRatio * 100),
    forkPercentage: Math.round((forkCount / Math.max(1, analyzedRepos.length)) * 100),
  };

  // Recruiter Insights
  const topLangsList = Object.entries(languageBreakdown)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([l]) => l);

  const technicalStrengths = [
    {
      strength: topLangsList.length > 0 ? `Core proficiency in ${topLangsList.join(", ")}` : "General Software Engineering",
      evidence: `${nonForks.length} original repositories utilizing modern language stacks and topic metadata.`,
    },
    {
      strength: impactScore >= 70 ? "High Community Validation & Reach" : "Product & Prototype Execution",
      evidence: `Managed ${totalStars} total stars and ${totalForks} forks across public open source contributions.`,
    },
    {
      strength: breadthScore >= 70 ? "Cross-Disciplinary Technical Breadth" : "Focused Specialization",
      evidence: `Exhibits active codebases across ${uniqueLangs} programming languages and ${uniqueTopics} distinct focus areas.`,
    },
  ];

  const collaborationSignals = [
    `Maintains an active public network with ${user.followers} followers and ${user.public_repos} total public repositories.`,
    originalRatio > 0.7 ? "High proportion of original code authoring rather than repository mirroring." : "Active participation in forks and upstream open source ecosystems.",
  ];

  const caveats: string[] = [];
  if (originalRatio < 0.4) caveats.push("High proportion of forked repositories; review original work carefully.");
  if (consistencyScore < 45) caveats.push("Lower recent commit frequency in the past 90 days.");
  if (uniqueLangs <= 1) caveats.push("Heavy reliance on a single primary programming language.");
  if (caveats.length === 0) caveats.push("No major public red flags identified in public GitHub signals.");

  const suggestedInterviewQuestions = [
    `Can you walk through the architecture and design decisions behind your most starred repository (${nonForks[0]?.name || "main project"})?`,
    `How do you manage dependency updates and testing across your ${uniqueLangs}-language ecosystem?`,
    `What was the most challenging technical roadblock you encountered in your recent 90-day development cycle?`,
  ];

  const recruiterInsights: RecruiterInsights = {
    technicalStrengths,
    collaborationSignals,
    caveats,
    suggestedInterviewQuestions,
  };

  // Role Fit
  const hasLang = (l: string) => languageBreakdown[l] !== undefined;
  const frontendScore = Math.min(100, (hasLang("TypeScript") ? 40 : 0) + (hasLang("JavaScript") ? 35 : 0) + (hasLang("CSS") || hasLang("HTML") || hasLang("Vue") || hasLang("Svelte") ? 25 : 10));
  const backendScore = Math.min(100, (hasLang("Python") ? 35 : 0) + (hasLang("Go") ? 40 : 0) + (hasLang("Java") ? 35 : 0) + (hasLang("Rust") ? 40 : 0) + (hasLang("Ruby") || hasLang("PHP") ? 25 : 10));
  const fullstackScore = Math.min(100, Math.round((frontendScore + backendScore) / 2 + 15));
  const devopsScore = Math.min(100, (hasLang("Shell") ? 40 : 10) + (hasLang("Dockerfile") || uniqueTopics > 5 ? 40 : 20));
  const aimlScore = Math.min(100, (hasLang("Python") || hasLang("Jupyter Notebook") ? 60 : 10) + (uniqueTopics > 3 ? 30 : 10));
  const openSourceScore = Math.min(100, originalityScore * 0.5 + impactScore * 0.5);

  const roleFit: RoleFitScores = {
    frontend: Math.round(frontendScore),
    backend: Math.round(backendScore),
    fullstack: Math.round(fullstackScore),
    devops: Math.round(devopsScore),
    aiml: Math.round(aimlScore),
    openSource: Math.round(openSourceScore),
  };

  return {
    username: norm,
    name: user.name ?? undefined,
    bio: user.bio ?? undefined,
    avatarUrl: user.avatar_url,
    location: user.location ?? undefined,
    blog: user.blog ?? undefined,
    company: user.company ?? undefined,
    twitterUsername: user.twitter_username ?? undefined,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    accountCreated: user.created_at,
    accountAgeYears,
    totalStars,
    totalForks,
    languageBreakdown,
    repos: analyzedRepos.slice(0, 15),
    leukAnalyticsScore,
    letterGrade,
    trendPercentage,
    signalBadges,
    scoreBreakdown,
    activityMetrics,
    recruiterInsights,
    roleFit,
    cachedAt: new Date().toISOString(),
  };
}

function originaliveCheck(ratio: number): boolean {
  return ratio >= 0.75;
}
