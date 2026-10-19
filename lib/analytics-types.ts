export interface RepoAnalysis {
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
  createdAt?: string;
  isFork: boolean;
  qualityScore: number;
}

export interface SignalScore {
  score: number; // 0-100
  weight: number; // percentage e.g. 20
  explanation: string;
  dataContribution: string;
}

export interface ScoreBreakdown {
  consistency: SignalScore;
  impact: SignalScore;
  originality: SignalScore;
  technicalBreadth: SignalScore;
  collaboration: SignalScore;
  growth: SignalScore;
  repositoryQuality: SignalScore;
}

export interface ActivityMetrics {
  activeWeeksCount: number;
  last90DaysPushes: number;
  prev90DaysPushes: number;
  momentumTrend: "rising" | "stable" | "declining";
  longestStreakDays: number;
  mostActiveMonth: string;
  originalRepoPercentage: number;
  forkPercentage: number;
}

export interface RecruiterInsights {
  technicalStrengths: { strength: string; evidence: string }[];
  collaborationSignals: string[];
  caveats: string[];
  suggestedInterviewQuestions: string[];
}

export interface UserAnalytics {
  username: string;
  name?: string;
  bio?: string;
  avatarUrl: string;
  location?: string;
  blog?: string;
  company?: string;
  twitterUsername?: string;
  followers: number;
  following: number;
  publicRepos: number;
  accountCreated?: string;
  accountAgeYears: number;
  totalStars: number;
  totalForks: number;
  languageBreakdown: Record<string, number>;
  repos: RepoAnalysis[];
  leukAnalyticsScore: number; // 0-100
  letterGrade: "A+" | "A" | "B" | "C" | "D";
  trendPercentage: number; // e.g. +14% vs previous 90 days
  signalBadges: string[];
  scoreBreakdown: ScoreBreakdown;
  activityMetrics: ActivityMetrics;
  recruiterInsights: RecruiterInsights;
  cachedAt: string;
}

export interface CategoryComparison {
  category: string;
  label: string;
  leftScore: number;
  rightScore: number;
  winner: "left" | "right" | "tie";
  commentary: string;
}

export interface ComparisonResult {
  left: UserAnalytics;
  right: UserAnalytics;
  summaryComparison: string;
  languageOverlap: string[];
  recommendations: {
    leftKeyStrengths: string[];
    rightKeyStrengths: string[];
    contextualConclusion: string;
    winner: string;
    verdict: string;
    roast: string;
  };
  categoryComparisons: CategoryComparison[];
}
