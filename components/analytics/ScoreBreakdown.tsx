"use client";

import { ScoreBreakdown as ScoreBreakdownType } from "@/lib/analytics-types";
import { CheckCircle2, ShieldAlert, Cpu, GitPullRequest, Activity, Award, Star } from "lucide-react";

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
    { key: "growth", label: "Growth / Momentum", icon: TrendingUpIcon, data: scoreBreakdown.growth },
    { key: "repositoryQuality", label: "Repository Quality", icon: CheckCircle2, data: scoreBreakdown.repositoryQuality },
  ];

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-lg font-bold text-white font-mono tracking-tight">
            Transparent Score Breakdown
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">
            Weighted composite scoring across 7 verified public GitHub signals
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800">
          Deterministic Algorithm
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {signals.map(({ key, label, icon: Icon, data }) => {
          const scoreColor =
            data.score >= 80
              ? "bg-emerald-500"
              : data.score >= 60
              ? "bg-cyan-500"
              : data.score >= 40
              ? "bg-amber-500"
              : "bg-rose-500";

          return (
            <div
              key={key}
              className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 shadow-inner transition-all hover:border-neutral-700"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-white font-mono">
                      {label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Weight: {data.weight}%
                    </span>
                    <span className="text-sm font-black font-mono text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                      {data.score}/100
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden my-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${scoreColor}`}
                    style={{ width: `${Math.max(3, data.score)}%` }}
                  />
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-sans mb-3">
                  {data.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400 flex items-start gap-1.5">
                <span className="text-emerald-400 mt-0.5">ℹ</span>
                <span>{data.dataContribution}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TrendingUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      polyline points="22 7 13.5 15.5 8.5 10.5 2 17"
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
