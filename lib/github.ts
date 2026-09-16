export interface Repo {
  name: string;
  description?: string;
  htmlUrl: string;
  homepage?: string;
  language?: string;
  topics: string[];
  stars: number;
  forks: number;
  isArchived: boolean;
  pushedAt?: string;
}

export interface Portfolio {
  username: string;
  name?: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  blog?: string;
  company?: string;
  twitterUsername?: string;
  followers: number;
  publicRepos: number;
  totalStars: number;
  languageBreakdown: Record<string, number>;
  repos: Repo[];
}

/** Minimal shape of the GitHub `GET /users/:username` response we consume. */
interface GitHubUserResponse {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  location: string | null;
  blog: string | null;
  company: string | null;
  twitter_username: string | null;
  followers: number;
  public_repos: number;
}

/** Minimal shape of an entry in `GET /users/:username/repos`. */
interface GitHubRepoResponse {
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
}

const GITHUB_API = "https://api.github.com";

// Optional token from env — raises the unauthenticated rate limit from
// 60 req/hr to 5000 req/hr. The app works fine without it.
const TOKEN = process.env.GITHUB_TOKEN;

function authHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    // Inoffensive UA helps avoid spurious 403 "must provide User-Agent" blocks
    "User-Agent": "Leuk",
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

async function buildPortfolio(
  norm: string,
  user: GitHubUserResponse,
  reposJson: GitHubRepoResponse[]
): Promise<Portfolio> {
  // Drop forked repositories before computing stats.
  const nonForks = reposJson.filter((r) => r.fork === false);

  const totalStars = nonForks.reduce((sum, r) => sum + r.stargazers_count, 0);

  // languageBreakdown: percentage of repos per language, sorted desc.
  const langCounts = new Map<string, number>();
  for (const r of nonForks) {
    if (!r.language) continue;
    langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1);
  }
  const repoTotal = nonForks.length || 1;
  const languageBreakdown: Record<string, number> = {};
  for (const [lang, count] of [...langCounts.entries()].sort(
    (a, b) => b[1] - a[1]
  )) {
    languageBreakdown[lang] = Math.round((count / repoTotal) * 100);
  }

  const repos: Repo[] = nonForks
    .map((r) => ({
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
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 12);

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
    publicRepos: user.public_repos,
    totalStars,
    languageBreakdown,
    repos,
  };
}

function assertStatus(userRes: Response, reposRes: Response, norm: string) {
  if (userRes.status === 404) throw new UserNotFoundError(norm);
  if (userRes.status === 403 || reposRes.status === 403)
    throw new RateLimitError();
  // Redirect codes (301/302) can happen for renamed accounts — surface them.
  if (!userRes.ok) throw new Error(`GitHub API error ${userRes.status}`);
  if (!reposRes.ok) throw new Error(`GitHub API error ${reposRes.status}`);
}

export async function getPortfolio(username: string): Promise<Portfolio> {
  const norm = username.toLowerCase();

  const [userRes, reposRes] = await Promise.all([
    fetch(`${GITHUB_API}/users/${norm}`, {
      headers: authHeaders(),
      next: { revalidate: 3600, tags: [`portfolio:${norm}`] },
    }),
    fetch(`${GITHUB_API}/users/${norm}/repos?per_page=100&sort=pushed`, {
      headers: authHeaders(),
      next: { revalidate: 3600, tags: [`portfolio:${norm}`] },
    }),
  ]);

  assertStatus(userRes, reposRes, norm);
  const user = (await userRes.json()) as GitHubUserResponse;
  const reposJson = (await reposRes.json()) as GitHubRepoResponse[];
  return buildPortfolio(norm, user, reposJson);
}

/** Side-effect-free refetch used by the refresh route: bypasses cache entirely. */
export async function getPortfolioFresh(
  username: string
): Promise<Portfolio> {
  const norm = username.toLowerCase();

  const [userRes, reposRes] = await Promise.all([
    fetch(`${GITHUB_API}/users/${norm}`, {
      headers: authHeaders(),
      cache: "no-store",
    }),
    fetch(`${GITHUB_API}/users/${norm}/repos?per_page=100&sort=pushed`, {
      headers: authHeaders(),
      cache: "no-store",
    }),
  ]);

  assertStatus(userRes, reposRes, norm);
  const user = (await userRes.json()) as GitHubUserResponse;
  const reposJson = (await reposRes.json()) as GitHubRepoResponse[];
  return buildPortfolio(norm, user, reposJson);
}