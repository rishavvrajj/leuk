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
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-mono">Last 90d Pushes</span>
            <Activity size={16} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-neutral-950 dark:text-white font-mono">
            {metrics.last90DaysPushes}
          </div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">
            Active commit velocity
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-mono">Previous 90d</span>
            <Calendar size={16} className="text-cyan-500" />
          </div>
          <div className="text-2xl font-bold text-neutral-950 dark:text-white font-mono">
            {metrics.prev90DaysPushes}
          </div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">
            Prior baseline period
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-mono">Active Streak</span>
            <Flame size={16} className="text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-neutral-950 dark:text-white font-mono">
            {metrics.longestStreakDays} days
          </div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">
            Continuous activity span
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-mono">Original / Fork</span>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              {metrics.originalRepoPercentage}%
            </div>
          </div>
          <div className="flex h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden my-2">
            <div
              className="bg-emerald-500 h-full"
              style={{ width: `${metrics.originalRepoPercentage}%` }}
            />
            <div
              className="bg-cyan-500 h-full"
              style={{ width: `${metrics.forkPercentage}%` }}
            />
          </div>
          <div className="text-[11px] font-mono text-neutral-500 flex justify-between">
            <span>{metrics.originalRepoPercentage}% Original</span>
            <span>{metrics.forkPercentage}% Forks</span>
          </div>
        </div>
      </div>

      {/* Visual comparison bar */}
      <div>
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-sans mb-4">
          Period-over-Period Velocity Delta
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono text-neutral-600 dark:text-neutral-300 mb-1">
              <span>Last 90 Days</span>
              <span className="font-bold text-neutral-950 dark:text-white">{metrics.last90DaysPushes} events</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(
                      6,
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
            <div className="flex justify-between text-xs font-mono text-neutral-600 dark:text-neutral-300 mb-1">
              <span>Previous 90 Days</span>
              <span className="font-bold text-neutral-950 dark:text-white">{metrics.prev90DaysPushes} events</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(
                      6,
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

        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1.5">
            {diff > 0 ? (
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 gap-1 font-bold">
                <ArrowUpRight size={14} /> Momentum is accelerating (+{diff} events)
              </span>
            ) : diff < 0 ? (
              <span className="flex items-center text-amber-600 dark:text-amber-400 gap-1 font-bold">
                <ArrowDownRight size={14} /> Momentum has moderated ({diff} events)
              </span>
            ) : (
              <span className="flex items-center text-neutral-500 gap-1 font-bold">
                <Minus size={14} /> Momentum is stable
              </span>
            )}
          </div>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-neutral-950 dark:text-white font-bold hover:underline"
          >
            Verify on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
