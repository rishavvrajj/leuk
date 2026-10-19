"use client";

import { useEffect, useState, use } from "react";
import { UserAnalytics } from "@/lib/analytics-types";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader";
import { ScoreBreakdown } from "@/components/analytics/ScoreBreakdown";
import { ActivityChart } from "@/components/analytics/ActivityChart";
import { LanguageAllocation } from "@/components/analytics/LanguageAllocation";
import { TopRepositories } from "@/components/analytics/TopRepositories";
import { RecruiterInsights } from "@/components/analytics/RecruiterInsights";
import { Terminal, AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ username: string }>;
}

export default function AnalyticsDashboardPage({ params }: PageProps) {
  const { username } = use(params);
  const [analytics, setAnalytics] = useState<UserAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = async (fresh = false) => {
    if (fresh) setRefreshing(true);
    else setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/analytics/${username}${fresh ? "?fresh=true" : ""}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch analytics");
      }

      setAnalytics(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchAnalytics();
    }
  }, [username]);

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
        <AnalyticsNavBar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <Loader2 size={36} className="animate-spin text-emerald-400" />
          <p className="text-xs font-mono text-neutral-400">
            Analyzing public GitHub signals for @{username}...
          </p>
        </div>
      </main>
    );
  }

  if (error || !analytics) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
        <AnalyticsNavBar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-center space-y-4 shadow-2xl">
            <div className="h-12 w-12 rounded-2xl bg-rose-950 border border-rose-800 text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle size={24} />
            </div>
            <h2 className="text-lg font-bold font-mono text-white">Analytics Generation Failed</h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {error || `Could not generate analytics for @${username}. Please check the username or API rate limits.`}
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Link
                href="/analyze"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-200 transition-colors"
              >
                <ArrowLeft size={14} /> Try Another Username
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans">
      <AnalyticsNavBar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-8">
        <AnalyticsHeader
          analytics={analytics}
          onRefresh={() => fetchAnalytics(true)}
          isRefreshing={refreshing}
        />

        <ScoreBreakdown scoreBreakdown={analytics.scoreBreakdown} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActivityChart metrics={analytics.activityMetrics} username={analytics.username} />
          <LanguageAllocation languageBreakdown={analytics.languageBreakdown} />
        </div>

        <TopRepositories repos={analytics.repos} />

        <RecruiterInsights insights={analytics.recruiterInsights} />
      </div>
    </main>
  );
}
