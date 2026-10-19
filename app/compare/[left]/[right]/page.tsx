"use client";

import { useEffect, useState, use } from "react";
import { ComparisonResult } from "@/lib/analytics-types";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { ComparisonTable } from "@/components/analytics/ComparisonTable";
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
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
        <AnalyticsNavBar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <Loader2 size={36} className="animate-spin text-emerald-400" />
          <p className="text-xs font-mono text-neutral-400">
            Analyzing and comparing @{left} and @{right}...
          </p>
        </div>
      </main>
    );
  }

  if (error || !comparison) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
        <AnalyticsNavBar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full rounded-3xl border border-neutral-800 bg-neutral-900 p-8 text-center space-y-4 shadow-2xl">
            <div className="h-12 w-12 rounded-2xl bg-rose-950 border border-rose-800 text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle size={24} />
            </div>
            <h2 className="text-lg font-bold font-mono text-white">Comparison Failed</h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {error || `Could not compare @${left} and @${right}. Please check the usernames or rate limits.`}
            </p>
            <div className="pt-4 flex items-center justify-center">
              <Link
                href="/compare"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-200 transition-colors"
              >
                <ArrowLeft size={14} /> Try Another Pair
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
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight mb-2">
            Side-by-Side Comparison: @{left} vs @{right}
          </h1>
          <p className="text-xs font-mono text-neutral-400">
            {comparison.summaryComparison}
          </p>
        </div>

        <ComparisonTable comparison={comparison} />
      </div>
    </main>
  );
}
