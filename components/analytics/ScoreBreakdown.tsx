"use client";

import { ScoreBreakdown as ScoreBreakdownType } from "@/lib/analytics-types";
import { CheckCircle2, Cpu, GitPullRequest, Activity, Award, Star, TrendingUp } from "lucide-react";

interface ScoreBreakdownProps {
  scoreBreakdown: ScoreBreakdownType;
}

export function ScoreBreakdown({ scoreBreakdown }: ScoreBreakdownProps) {
  const signals = [
    { key: "consistency", label: "Consistency", icon: Activity, data: scoreBreakdown.consistency },
    { key: "impact", label: "Impact", icon: Star, data: scoreBreakdown.impact },
    { key: "originality", label: "Originality", icon: Award, data: scoreBreakdown.originality },
    { key: "technicalBreadth", label: "Technical Breadth", icon: Cpu, data: scoreBreakdown.technicalBreadth },
    { key: "collaboration", label: "Collaboration", icon: GitPullRequest, data: scoreBreakdown.collaboration },
    { key: "growth", label: "Growth / Momentum", icon: TrendingUp, data: scoreBreakdown.growth },
    { key: "repositoryQuality", label: "Repository Quality", icon: CheckCircle2, data: scoreBreakdown.repositoryQuality },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {signals.map(({ key, label, icon: Icon, data }) => {
        const scoreColor = data.score >= 50 ? "bg-emerald-500" : "bg-neutral-600 dark:bg-neutral-400";

        return (
          <div
            key={key}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-xl text-neutral-700 dark:text-neutral-300 shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-normal text-neutral-950 dark:text-white font-sans truncate">
                    {label}
                  </span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Wt: {data.weight}%
                  </span>
                  <span className="text-sm font-normal font-mono text-neutral-950 dark:text-white">
                    {data.score}/100
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden my-3">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${scoreColor}`}
                  style={{ width: `${Math.max(4, data.score)}%` }}
                />
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans mb-3">
                {data.explanation}
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5 min-w-0">
              <span className="text-emerald-500 font-normal shrink-0">ℹ</span>
              <span className="truncate">{data.dataContribution}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
