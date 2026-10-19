"use client";

import { useEffect, useState, use } from "react";
import { ComparisonResult } from "@/lib/analytics-types";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { ComparisonTable } from "@/components/analytics/ComparisonTable";
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { SectionShell } from "@/components/ui/SectionShell";
import { AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ left: string; right: string }>;
}

export default function CompareDashboardPage({ params }: PageProps) {
  const { left, right } = use(params);
  const [comparison, setComparison] = useState<ComparisonResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComparison = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/analytics/compare?left=${encodeURIComponent(left)}&right=${encodeURIComponent(right)}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch comparison data");
        }

        setComparison(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (left && right) {
      fetchComparison();
    }
  }, [left, right]);

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
                Analyzing and comparing @{left} and @{right}...
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

  if (error || !comparison) {
    return (
      <main className="relative flex w-full flex-col items-center min-h-screen bg-neutral-100 dark:bg-neutral-950 font-sans">
        <Pattern />
        <div className="z-10 flex w-full flex-col items-center">
          <SectionSeparator />
          <AnalyticsNavBar />
          <SectionSeparator />
          <SectionShell contentClassName="flex flex-col items-center justify-center p-8 sm:p-16">
            <div className="max-w-md w-full rounded-xs border border-neutral-200/80 bg-white p-8 text-center space-y-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="h-12 w-12 rounded-xs bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto dark:bg-rose-950/60 dark:border-rose-900 dark:text-rose-400">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-lg font-normal font-sans text-neutral-950 dark:text-neutral-50">Comparison Failed</h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                {error || `Could not compare @${left} and @${right}. Please check the usernames or rate limits.`}
              </p>
              <div className="pt-4 flex items-center justify-center">
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-mono transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
                >
                  <ArrowLeft size={14} /> Try Another Pair
                </Link>
              </div>
            </div>
          </SectionShell>
          <SectionSeparator />
          <Footer />
          <SectionSeparator />
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
        <SectionShell contentClassName="p-6 sm:p-12 space-y-8">
          <ComparisonTable comparison={comparison} />
        </SectionShell>

        <SectionSeparator />
        <Footer />
        <SectionSeparator />
      </div>
    </main>
  );
}
