"use client";

import { RecruiterInsights as RecruiterInsightsType } from "@/lib/analytics-types";
import { CheckCircle, AlertTriangle, HelpCircle, Briefcase, Sparkles } from "lucide-react";

interface RecruiterInsightsProps {
  insights: RecruiterInsightsType;
}

export function RecruiterInsights({ insights }: RecruiterInsightsProps) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-lg font-bold text-white font-mono tracking-tight flex items-center gap-2">
            <Briefcase size={18} className="text-emerald-400" />
            <span>Recruiter & Technical Evaluation Panel</span>
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">
            Derived exclusively from public GitHub signals and repository metadata
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800">
          Public Signals Only
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Technical Strengths */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
          <h3 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-emerald-400" />
            <span>Likely Technical Strengths</span>
          </h3>
          <div className="space-y-4">
            {insights.technicalStrengths.map((item, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500 pl-3">
                <div className="text-xs font-bold text-white font-mono">
                  {item.strength}
                </div>
                <div className="text-xs text-neutral-400 font-sans mt-1 leading-relaxed">
                  {item.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caveats */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
          <h3 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-400" />
            <span>Potential Caveats & Risk Factors</span>
          </h3>
          <div className="space-y-3">
            {insights.caveats.map((caveat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                <span className="text-amber-400 font-bold mt-0.5">⚠</span>
                <span>{caveat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Signals */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
          <h3 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
            <CheckCircle size={16} className="text-cyan-400" />
            <span>Collaboration & Ecosystem Signals</span>
          </h3>
          <div className="space-y-3">
            {insights.collaborationSignals.map((sig, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                <span>{sig}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Interview Questions */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
          <h3 className="text-sm font-bold text-white font-mono mb-4 flex items-center gap-2">
            <HelpCircle size={16} className="text-purple-400" />
            <span>Suggested Interview Questions</span>
          </h3>
          <div className="space-y-3">
            {insights.suggestedInterviewQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                <span className="text-purple-400 font-bold font-mono">Q{idx + 1}.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
