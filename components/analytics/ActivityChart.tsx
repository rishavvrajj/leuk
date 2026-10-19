"use client";

import { ActivityMetrics } from "@/lib/analytics-types";
import { Activity, Flame, Calendar, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

interface ActivityChartProps {
  metrics: ActivityMetrics;
  username: string;
}

export function ActivityChart({ metrics, username }: ActivityChartProps) {
  const diff = metrics.last90DaysPushes - metrics.prev90DaysPushes;

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-lg font-bold text-white font-mono tracking-tight">
            Momentum & Activity Analysis
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">
            Velocity comparison across 180-day rolling windows
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-neutral-300 bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700">
            Trend: {metrics.momentumTrend.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono">Last 90 Days Pushes</span>
            <Activity size={16} className="text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {metrics.last90DaysPushes}
          </div>
          <div className="text-[11px] font-mono text-neutral-400 mt-1">
            Active commit velocity
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono">Previous 90 Days</span>
            <Calendar size={16} className="text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {metrics.prev90DaysPushes}
          </div>
          <div className="text-[11px] font-mono text-neutral-400 mt-1">
            Prior baseline period
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono">Estimated Streak</span>
            <Flame size={16} className="text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {metrics.longestStreakDays} days
          </div>
          <div className="text-[11px] font-mono text-neutral-400 mt-1">
            Continuous activity span
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-mono">Original vs Fork</span>
            <div className="text-xs font-mono text-emerald-400 font-bold">
              {metrics.originalRepoPercentage}%
            </div>
          </div>
          <div className="flex h-2 w-full rounded-full bg-neutral-800 overflow-hidden my-2">
            <div
              className="bg-emerald-500 h-full"
              style={{ width: `${metrics.originalRepoPercentage}%` }}
            />
            <div
              className="bg-cyan-600 h-full"
              style={{ width: `${metrics.forkPercentage}%` }}
            />
          </div>
          <div className="text-[11px] font-mono text-neutral-400 flex justify-between">
            <span>{metrics.originalRepoPercentage}% Original</span>
            <span>{metrics.forkPercentage}% Forks</span>
          </div>
        </div>
      </div>

      {/* Visual comparison bar */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6">
        <h3 className="text-sm font-bold text-white font-mono mb-4">
          Period-over-Period Velocity Delta
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono text-neutral-300 mb-1">
              <span>Last 90 Days</span>
              <span className="font-bold text-white">{metrics.last90DaysPushes} events</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(
                      5,
                      (metrics.last90DaysPushes /
                        Math.max(1, metrics.last90DaysPushes, metrics.prev90DaysPushes)) *
                        100
                    )
                  )}%`,
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-neutral-300 mb-1">
              <span>Previous 90 Days</span>
              <span className="font-bold text-white">{metrics.prev90DaysPushes} events</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-cyan-600 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(
                      5,
                      (metrics.prev90DaysPushes /
                        Math.max(1, metrics.last90DaysPushes, metrics.prev90DaysPushes)) *
                        100
                    )
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            {diff > 0 ? (
              <span className="flex items-center text-emerald-400 gap-1">
                <ArrowUpRight size={14} /> Momentum is accelerating (+{diff} events)
              </span>
            ) : diff < 0 ? (
              <span className="flex items-center text-amber-400 gap-1">
                <ArrowDownRight size={14} /> Momentum has slowed ({diff} events)
              </span>
            ) : (
              <span className="flex items-center text-neutral-400 gap-1">
                <Minus size={14} /> Momentum is steady
              </span>
            )}
          </div>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-emerald-400 hover:underline"
          >
            Verify on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
