"use client";

import { useState } from "react";
import { ComparisonResult } from "@/lib/analytics-types";
import Image from "next/image";
import { Star, GitFork, Award, Activity, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ComparisonTableProps {
  comparison: ComparisonResult;
}

type RoleFitKey = "frontend" | "backend" | "fullstack" | "devops" | "aiml" | "openSource";

export function ComparisonTable({ comparison }: ComparisonTableProps) {
  const [selectedRole, setSelectedRole] = useState<RoleFitKey>("fullstack");

  const { left, right } = comparison;

  const roleLabels: { key: RoleFitKey; label: string }[] = [
    { key: "fullstack", label: "Full-Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "devops", label: "DevOps" },
    { key: "aiml", label: "AI / ML" },
    { key: "openSource", label: "Open Source" },
  ];

  return (
    <div className="space-y-8">
      {/* Side by Side Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[left, right].map((dev, idx) => (
          <div
            key={dev.username}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-neutral-800 text-[11px] font-mono text-neutral-300 rounded-bl-2xl border-l border-b border-neutral-700">
              Candidate #{idx + 1}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800">
                <Image
                  src={dev.avatarUrl}
                  alt={dev.name || dev.username}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">
                  {dev.name || dev.username}
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  @{dev.username}
                </span>
                <div className="flex items-center gap-3 mt-1 text-xs font-mono text-neutral-400">
                  <span>{dev.followers} followers</span>
                  <span>{dev.publicRepos} repos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Score</span>
                <span className="text-2xl font-black font-mono text-white mt-0.5">
                  {dev.leukAnalyticsScore}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Grade {dev.letterGrade}</span>
              </div>
              <div className="flex flex-col items-center border-x border-neutral-800 px-2">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Stars</span>
                <span className="text-xl font-bold font-mono text-amber-400 mt-0.5">
                  {dev.totalStars}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Total Impact</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono uppercase text-neutral-500">Consistency</span>
                <span className="text-xl font-bold font-mono text-cyan-400 mt-0.5">
                  {dev.scoreBreakdown.consistency.score}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">/100</span>
              </div>
            </div>

            <a
              href={`/analyze/${dev.username}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 text-xs font-mono text-white hover:bg-neutral-700 transition-colors"
            >
              <span>View Full Analytics Dashboard →</span>
            </a>
          </div>
        ))}
      </div>

      {/* Role Fit Filter Section */}
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
          <div>
            <h3 className="text-lg font-bold text-white font-mono tracking-tight">
              Role-Fit & Stack Comparison
            </h3>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              Select a target engineering profile to compare capability alignment
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
            {roleLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedRole === key
                    ? "bg-emerald-500 text-neutral-950 font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Role fit comparison bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4 bg-neutral-950/70 p-5 rounded-2xl border border-neutral-800">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white font-mono">
                {left.name || left.username}
              </span>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {left.roleFit[selectedRole]} / 100
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all"
                style={{ width: `${left.roleFit[selectedRole]}%` }}
              />
            </div>
            <div className="text-[11px] font-mono text-neutral-400">
              Alignment score for {roleLabels.find((r) => r.key === selectedRole)?.label} role based on language breakdown and repository topics.
            </div>
          </div>

          <div className="space-y-4 bg-neutral-950/70 p-5 rounded-2xl border border-neutral-800">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white font-mono">
                {right.name || right.username}
              </span>
              <span className="text-sm font-bold text-cyan-400 font-mono">
                {right.roleFit[selectedRole]} / 100
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all"
                style={{ width: `${right.roleFit[selectedRole]}%` }}
              />
            </div>
            <div className="text-[11px] font-mono text-neutral-400">
              Alignment score for {roleLabels.find((r) => r.key === selectedRole)?.label} role based on language breakdown and repository topics.
            </div>
          </div>
        </div>

        {/* Contextual Conclusion Box */}
        <div className="rounded-2xl border border-emerald-800/80 bg-emerald-950/30 p-6">
          <h4 className="text-sm font-bold text-emerald-400 font-mono mb-2 flex items-center gap-2">
            <span>⚖️ Contextual Comparison Conclusion</span>
          </h4>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-4">
            {comparison.recommendations.contextualConclusion}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-emerald-900/50 text-[11px] font-mono text-neutral-400">
            <span className="text-neutral-300 font-bold">Language Overlap:</span>
            {comparison.languageOverlap.length > 0 ? (
              comparison.languageOverlap.map((lang) => (
                <span key={lang} className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-neutral-800">
                  {lang}
                </span>
              ))
            ) : (
              <span className="text-neutral-500">None (Disjoint stacks)</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
