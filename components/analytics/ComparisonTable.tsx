"use client";

import { ComparisonResult } from "@/lib/analytics-types";
import Image from "next/image";
import Link from "next/link";
import { Star, GitFork, Award, Activity, Cpu, ShieldCheck, CheckCircle2, Flame, TrendingUp, Zap, BarChart3 } from "lucide-react";

interface ComparisonTableProps {
  comparison: ComparisonResult;
}

export function ComparisonTable({ comparison }: ComparisonTableProps) {
  const { left, right, categoryComparisons } = comparison;

  return (
    <div className="space-y-12">
      {/* Side by Side Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[left, right].map((dev, idx) => (
          <div
            key={dev.username}
            className="relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <Image
                  src={dev.avatarUrl}
                  alt={dev.name || dev.username}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-0.5 whitespace-nowrap">
                  Candidate #{idx + 1}
                </div>
                <h3 className="text-lg font-normal text-neutral-950 dark:text-white font-sans truncate">
                  {dev.name || dev.username}
                </h3>
                <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                  @{dev.username}
                </span>
                <div className="flex items-center gap-3 mt-1 text-xs font-mono text-neutral-500 whitespace-nowrap">
                  <span>{dev.followers} followers</span>
                  <span>{dev.publicRepos} repos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 py-4 border-y border-neutral-200 dark:border-neutral-800 mb-6">
              <div className="flex flex-col items-center whitespace-nowrap">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Score</span>
                <span className="text-2xl font-normal font-mono text-neutral-950 dark:text-white mt-0.5">
                  {dev.leukAnalyticsScore}
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-normal">Grade {dev.letterGrade}</span>
              </div>
              <div className="flex flex-col items-center border-x border-neutral-200 dark:border-neutral-800 px-2 whitespace-nowrap">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Stars</span>
                <span className="text-xl font-normal font-mono text-amber-600 dark:text-amber-400 mt-0.5">
                  {dev.totalStars}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Total Impact</span>
              </div>
              <div className="flex flex-col items-center whitespace-nowrap">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Consistency</span>
                <span className="text-xl font-normal font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {dev.scoreBreakdown.consistency.score}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">/100</span>
              </div>
            </div>

            <Link
              href={`/analyze/${dev.username}`}
              className="text-xs font-mono text-neutral-950 dark:text-white font-normal hover:underline inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>View Full Analytics Dashboard →</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

      {/* Comparative Executive Assessment Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <BarChart3 size={18} />
            </div>
            <div>
              <h3 className="text-sm font-normal text-neutral-950 dark:text-white font-sans">
                Comparative Executive Assessment
              </h3>
              <p className="text-[11px] font-mono text-neutral-500">
                Professional engineering evaluation and comparative metrics breakdown
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                📊 Technical & Activity Analysis
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                {comparison.recommendations.roast}
              </p>
            </div>

            <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-neutral-200/60 dark:border-neutral-800/60 pt-4 lg:pt-0 lg:pl-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-950 dark:text-white block">
                🎯 Engineering Evaluation & Conclusion
              </span>
              <div className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed space-y-1">
                {comparison.recommendations.verdict.split("\n\n").map((para, i) => {
                  const parts = para.split(/\*\*([^*]+)\*\*/g);
                  return (
                    <p key={i}>
                      {parts.map((part, j) => (
                        j % 2 === 1 ? (
                          <strong key={j} className="font-semibold text-neutral-950 dark:text-white">{part}</strong>
                        ) : (
                          part
                        )
                      ))}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

      {/* 7-Dimension Score Breakdown Comparison */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-normal text-neutral-950 dark:text-white font-sans tracking-tight">
            Dimension-by-Dimension Head-to-Head
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
            Comparing consistency, impact, originality, breadth, collaboration, growth, and hygiene
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {categoryComparisons.map((cat) => (
            <div
              key={cat.category}
              className="py-4 border-b border-neutral-200 dark:border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="w-full sm:w-1/3">
                <span className="text-xs font-normal text-neutral-950 dark:text-white font-sans block">
                  {cat.label}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {cat.commentary}
                </span>
              </div>

              <div className="w-full sm:w-1/2 flex items-center gap-4">
                <div className="flex-1 text-right">
                  <div className="text-xs font-mono text-neutral-500 mb-1">
                    @{left.username}: <span className={`font-normal ${cat.winner === "left" ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-neutral-950 dark:text-white"}`}>{cat.leftScore}/100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex justify-end">
                    <div
                      className={`h-full rounded-full ${cat.winner === "left" ? "bg-emerald-500" : "bg-neutral-400 dark:bg-neutral-600"}`}
                      style={{ width: `${Math.max(4, cat.leftScore)}%` }}
                    />
                  </div>
                </div>

                <span className="text-xs font-mono text-neutral-400">vs</span>

                <div className="flex-1">
                  <div className="text-xs font-mono text-neutral-500 mb-1">
                    @{right.username}: <span className={`font-normal ${cat.winner === "right" ? "text-cyan-600 dark:text-cyan-400 font-bold" : "text-neutral-950 dark:text-white"}`}>{cat.rightScore}/100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${cat.winner === "right" ? "bg-cyan-500" : "bg-neutral-400 dark:bg-neutral-600"}`}
                      style={{ width: `${Math.max(4, cat.rightScore)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

      {/* Activity & Velocity Comparison */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-normal text-neutral-950 dark:text-white font-sans tracking-tight">
            Activity & Momentum Comparison
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
            90-day commit velocity, active streak span, and original vs fork ratio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[left, right].map((dev, idx) => (
            <div key={dev.username} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800/60">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Candidate #{idx + 1} — @{dev.username}
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  {dev.activityMetrics.momentumTrend.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500">90d Pushes</span>
                  <div className="text-xl font-normal font-mono text-neutral-950 dark:text-white mt-0.5">
                    {dev.activityMetrics.last90DaysPushes}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500">Active Streak</span>
                  <div className="text-xl font-normal font-mono text-neutral-950 dark:text-white mt-0.5">
                    {dev.activityMetrics.longestStreakDays}d
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500">Original %</span>
                  <div className="text-xl font-normal font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {dev.activityMetrics.originalRepoPercentage}%
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-600 dark:text-neutral-300 font-sans pt-2">
                {dev.activityMetrics.last90DaysPushes > 10 ? "High commit activity across multiple repositories." : "Moderate activity window with focused commit intervals."}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20"/>

      {/* Language & Technical Stack Comparison Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h3 className="text-xl font-normal text-neutral-950 dark:text-white font-sans tracking-tight">
              Language & Technical Stack Comparison
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
              Side-by-side language distribution and technical ecosystem comparison
            </p>
          </div>
        </div>

        {/* Stack comparison breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-3">
            <span className="text-sm font-normal text-neutral-950 dark:text-white font-sans block truncate">
              {left.name || left.username} — Top Languages
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {Object.keys(left.languageBreakdown).length > 0 ? (
                Object.entries(left.languageBreakdown)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 6)
                  .map(([lang, pct]) => (
                    <div key={lang} className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-xs font-mono flex items-center gap-2 whitespace-nowrap">
                      <span className="font-normal text-neutral-950 dark:text-white">{lang}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-normal">{pct}%</span>
                    </div>
                  ))
              ) : (
                <span className="text-xs font-mono text-neutral-400">No language data recorded</span>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-sm font-normal text-neutral-950 dark:text-white font-sans block truncate">
              {right.name || right.username} — Top Languages
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {Object.keys(right.languageBreakdown).length > 0 ? (
                Object.entries(right.languageBreakdown)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 6)
                  .map(([lang, pct]) => (
                    <div key={lang} className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-xs font-mono flex items-center gap-2 whitespace-nowrap">
                      <span className="font-normal text-neutral-950 dark:text-white">{lang}</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-normal">{pct}%</span>
                    </div>
                  ))
              ) : (
                <span className="text-xs font-mono text-neutral-400">No language data recorded</span>
              )}
            </div>
          </div>
        </div>

        {/* Contextual Conclusion Box */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
          <h4 className="text-sm font-normal text-neutral-950 dark:text-white font-sans flex items-center gap-2">
            <span>⚖️ Contextual Comparison Conclusion</span>
          </h4>
          <p className="text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
            {comparison.recommendations.contextualConclusion}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
            <span className="text-neutral-950 dark:text-white font-normal whitespace-nowrap">Language Overlap:</span>
            {comparison.languageOverlap.length > 0 ? (
              comparison.languageOverlap.map((lang) => (
                <span key={lang} className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
                  {lang}
                </span>
              ))
            ) : (
              <span className="text-neutral-400">None (Disjoint stacks)</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
