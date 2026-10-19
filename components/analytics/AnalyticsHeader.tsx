"use client";

import Image from "next/image";
import { UserAnalytics } from "@/lib/analytics-types";
import { MapPin, Building, Calendar, Users, GitFork, Star, TrendingUp, TrendingDown, Award } from "lucide-react";

interface AnalyticsHeaderProps {
  analytics: UserAnalytics;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export function AnalyticsHeader({ analytics, onRefresh, isRefreshing }: AnalyticsHeaderProps) {
  const gradeColor =
    analytics.letterGrade === "A+" || analytics.letterGrade === "A"
      ? "text-emerald-400 bg-emerald-950/80 border-emerald-800"
      : analytics.letterGrade === "B"
      ? "text-cyan-400 bg-cyan-950/80 border-cyan-800"
      : "text-amber-400 bg-amber-950/80 border-amber-800";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-800 shadow-xl">
            <Image
              src={analytics.avatarUrl}
              alt={analytics.name || analytics.username}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
              priority
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                {analytics.name || analytics.username}
              </h1>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700">
                @{analytics.username}
              </span>
              {analytics.twitterUsername && (
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900">
                  @{analytics.twitterUsername}
                </span>
              )}
            </div>

            {analytics.bio && (
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
                {analytics.bio}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-1">
              {analytics.location && (
                <div className="flex items-center gap-1">
                  <MapPin size={13} className="text-neutral-500" />
                  <span>{analytics.location}</span>
                </div>
              )}
              {analytics.company && (
                <div className="flex items-center gap-1">
                  <Building size={13} className="text-neutral-500" />
                  <span>{analytics.company}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar size={13} className="text-neutral-500" />
                <span>{analytics.accountAgeYears} yrs account age</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {analytics.signalBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border bg-neutral-800/80 border-neutral-700 text-neutral-200 shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Score Card Section */}
        <div className="flex flex-row sm:flex-row items-center gap-5 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-5 shadow-inner w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Leuk Analytics Score
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tighter">
                {analytics.leukAnalyticsScore}
              </span>
              <span className="text-xs font-mono text-neutral-400">/100</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-neutral-400">
              {analytics.trendPercentage >= 0 ? (
                <span className="flex items-center text-emerald-400 gap-0.5">
                  <TrendingUp size={12} /> +{analytics.trendPercentage}%
                </span>
              ) : (
                <span className="flex items-center text-rose-400 gap-0.5">
                  <TrendingDown size={12} /> {analytics.trendPercentage}%
                </span>
              )}
              <span>vs prev 90d</span>
            </div>
          </div>

          <div className="h-12 w-px bg-neutral-800 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Grade
            </span>
            <div
              className={`mt-1 flex h-12 w-12 items-center justify-center rounded-xl border text-xl font-bold font-mono shadow-md ${gradeColor}`}
            >
              {analytics.letterGrade}
            </div>
          </div>

          <div className="h-12 w-px bg-neutral-800 hidden sm:block" />

          <div className="flex flex-col gap-1 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <Users size={13} className="text-neutral-500" />
              <span>{analytics.followers} followers</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork size={13} className="text-neutral-500" />
              <span>{analytics.publicRepos} public repos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={13} className="text-neutral-500" />
              <span>{analytics.totalStars} total stars</span>
            </div>
          </div>
        </div>
      </div>

      {onRefresh && (
        <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
          <span>Cached at: {new Date(analytics.cachedAt).toLocaleTimeString()}</span>
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            {isRefreshing ? "Refreshing Analytics..." : "Refresh Live Data"}
          </button>
        </div>
      )}
    </div>
  );
}
