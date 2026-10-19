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
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { SectionShell } from "@/components/ui/SectionShell";
import { AlertCircle, Loader2, ArrowLeft } from "lucide-react";
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
      <main className="relative flex w-full flex-col items-center h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-950 font-sans">
        <Pattern />
        <div className="z-10 flex w-full h-full flex-col justify-between">
          <div>
            <SectionSeparator />
            <AnalyticsNavBar />
          </div>

          <SectionSeparator />
          <SectionShell containerClassName="h-[calc(100vh-14rem)] w-full" className="flex items-center w-full h-full" contentClassName="flex items-center justify-center p-6 sm:p-12 w-full h-full">
            <div className="flex flex-col items-center justify-center">
              <Loader2 size={36} className="animate-spin text-emerald-500 mb-4" />
              <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                Analyzing public GitHub signals for @{username}...
              </p>
            </div>
          </SectionShell>

          <div>
            <SectionSeparator />
            <Footer />
            <SectionSeparator />
          </div>
        </div>
      </main>
    );
  }

  if (error || !analytics) {
    return (
      <main className="relative flex w-full flex-col items-center h-screen overflow-hidden bg-neutral-100 dark:bg-neutral-950 font-sans">
        <Pattern />
        <div className="z-10 flex w-full h-full flex-col justify-between">
          <div>
            <SectionSeparator />
            <AnalyticsNavBar />
          </div>

          <SectionSeparator />
          <SectionShell containerClassName="h-[calc(100vh-14rem)] w-full" className="flex items-center w-full h-full" contentClassName="flex items-center justify-center p-6 sm:p-12 w-full h-full">
            <div className="max-w-md w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 text-center space-y-4 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto dark:bg-rose-950/60 dark:border-rose-900 dark:text-rose-400">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-lg font-bold text-neutral-950 dark:text-white font-sans">Analytics Generation Failed</h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-mono">
                {error || `Could not generate analytics for @${username}. Please check the username or API rate limits.`}
              </p>
              <div className="pt-4 flex items-center justify-center">
                <Link
                  href="/analyze"
                  className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-mono font-bold transition-colors dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-sm"
                >
                  <ArrowLeft size={14} /> Try Another Username
                </Link>
              </div>
            </div>
          </SectionShell>

          <div>
            <SectionSeparator />
            <Footer />
            <SectionSeparator />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex w-full flex-col items-center min-h-screen bg-neutral-100 dark:bg-neutral-950 font-sans">
      <Pattern />

      <div className="z-10 flex w-full flex-col items-center">
        <SectionSeparator />
        <AnalyticsNavBar />

        <SectionSeparator />
        <SectionShell contentClassName="p-6 sm:p-12 space-y-16">
          <AnalyticsHeader
            analytics={analytics}
            onRefresh={() => fetchAnalytics(true)}
            isRefreshing={refreshing}
          />

          <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

          <ScoreBreakdown scoreBreakdown={analytics.scoreBreakdown} />

          <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

          <ActivityChart metrics={analytics.activityMetrics} username={analytics.username} />

          <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

          <LanguageAllocation languageBreakdown={analytics.languageBreakdown} />

          <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

          <TopRepositories repos={analytics.repos} />

          <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

          <RecruiterInsights insights={analytics.recruiterInsights} />
        </SectionShell>

        <SectionSeparator />
        <Footer />
        <SectionSeparator />
      </div>
    </main>
  );
}
