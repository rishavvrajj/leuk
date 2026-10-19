"use client";

import Image from "next/image";
import Link from "next/link";
import { UserAnalytics } from "@/lib/analytics-types";
import { MapPin, Building, Calendar, Users, GitFork, Star, TrendingUp, TrendingDown, RefreshCw, GitCompare, Share2, Award, Activity, Cpu } from "lucide-react";

interface AnalyticsHeaderProps {
  analytics: UserAnalytics;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export function AnalyticsHeader({ analytics, onRefresh, isRefreshing }: AnalyticsHeaderProps) {
  const gradeColor = "text-emerald-600 dark:text-emerald-400 font-bold";

  return (
    <div className="space-y-6">
      {/* Main Profile & Score Banner */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-xl border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-lg shrink-0">
              <Image
                src={analytics.avatarUrl}
                alt={analytics.name || analytics.username}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 96px"
                priority
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight font-sans">
                  {analytics.name || analytics.username}
                </h1>
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                  @{analytics.username}
                </span>
                {analytics.twitterUsername && (
                  <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800">
                    @{analytics.twitterUsername}
                  </span>
                )}
              </div>

              {analytics.bio && (
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
                  {analytics.bio}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                {analytics.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-neutral-400" />
                    <span>{analytics.location}</span>
                  </div>
                )}
                {analytics.company && (
                  <div className="flex items-center gap-1">
                    <Building size={13} className="text-neutral-400" />
                    <span>{analytics.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar size={13} className="text-neutral-400" />
                  <span>{analytics.accountAgeYears} yrs account age</span>
                </div>
              </div>

              {/* Signal Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {analytics.signalBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono border bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-2xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Score Display Card */}
          <div className="flex flex-row sm:flex-row items-center gap-6 p-6 shadow-sm justify-start border-l border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                Leuk Score
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black font-mono text-neutral-950 dark:text-white tracking-tighter">
                  {analytics.leukAnalyticsScore}
                </span>
                <span className="text-xs font-mono text-neutral-500">/100</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
                {analytics.trendPercentage >= 0 ? (
                  <span className="flex items-center text-emerald-600 dark:text-emerald-400 gap-0.5 font-bold">
                    <TrendingUp size={12} /> +{analytics.trendPercentage}%
                  </span>
                ) : (
                  <span className="flex items-center text-neutral-600 dark:text-neutral-400 gap-0.5 font-bold">
                    <TrendingDown size={12} /> {analytics.trendPercentage}%
                  </span>
                )}
                <span>vs prev 90d</span>
              </div>
            </div>

            <div className="h-14 w-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block" />

            <div className="flex flex-col items-center">
              <div
                className={`flex h-14 w-14 items-center justify-center text-4xl font-bold font-mono ${gradeColor}`}
              >
                {analytics.letterGrade}
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                Grade
              </span>
            </div>

            <div className="h-14 w-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block" />

            <div className="flex flex-col gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Users size={13} className="text-neutral-400" />
                <span>{analytics.followers} followers</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork size={13} className="text-neutral-400" />
                <span>{analytics.publicRepos} public repos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={13} className="text-neutral-400" />
                <span>{analytics.totalStars} total stars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
