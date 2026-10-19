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
          <div className="text-2xl font-normal text-neutral-950 dark:text-white font-mono">
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
          <div className="text-2xl font-normal text-neutral-950 dark:text-white font-mono">
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
          <div className="text-2xl font-normal text-neutral-950 dark:text-white font-mono">
            {metrics.longestStreakDays} days
          </div>
          <div className="text-[11px] font-mono text-neutral-500 mt-1">
            Continuous activity span
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-mono">Original / Fork</span>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-normal">
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
        <h3 className="text-sm font-normal text-neutral-950 dark:text-white font-sans mb-4">
          Period-over-Period Velocity Delta
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono text-neutral-600 dark:text-neutral-300 mb-1">
              <span>Last 90 Days</span>
              <span className="font-normal text-neutral-950 dark:text-white">{metrics.last90DaysPushes} events</span>
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
              <span className="font-normal text-neutral-950 dark:text-white">{metrics.prev90DaysPushes} events</span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-neutral-400 dark:bg-neutral-600 rounded-full transition-all"
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

        <div className="mt-6 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {diff > 0 ? (
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight size={18} />
              </div>
            ) : diff < 0 ? (
              <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                <ArrowDownRight size={18} />
              </div>
            ) : (
              <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                <Minus size={18} />
              </div>
            )}
            <div>
              <div className="text-xs font-normal text-neutral-950 dark:text-white font-sans">
                {diff > 0 ? `Momentum Accelerating (+${diff} pushes)` : diff < 0 ? `Momentum Decreasing (${diff} pushes)` : "Velocity Stable"}
              </div>
              <div className="text-[11px] font-mono text-neutral-500">
                Comparing current 90-day activity window against prior baseline.
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-normal font-mono text-neutral-950 dark:text-white">
              {metrics.momentumTrend.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
