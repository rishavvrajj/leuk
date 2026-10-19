"use client";

import { RecruiterInsights as RecruiterInsightsType } from "@/lib/analytics-types";
import { CheckCircle, AlertTriangle, HelpCircle, Sparkles } from "lucide-react";

interface RecruiterInsightsProps {
  insights: RecruiterInsightsType;
}

export function RecruiterInsights({ insights }: RecruiterInsightsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Technical Strengths */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-sans mb-4 flex items-center gap-2">
          <Sparkles size={16} className="text-emerald-500" />
          <span>Likely Technical Strengths</span>
        </h3>
        <div className="space-y-4">
          {insights.technicalStrengths.map((item, idx) => (
            <div key={idx} className="border-l-2 border-emerald-500 pl-3">
              <div className="text-xs font-bold text-neutral-950 dark:text-white font-mono">
                {item.strength}
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-sans mt-1 leading-relaxed">
                {item.evidence}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caveats */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-sans mb-4 flex items-center gap-2">
          <AlertTriangle size={16} className="text-neutral-500" />
          <span>Potential Caveats & Risk Factors</span>
        </h3>
        <div className="space-y-3">
          {insights.caveats.map((caveat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans py-2">
              <span className="text-neutral-500 font-bold mt-0.5">⚠</span>
              <span>{caveat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Signals */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-sans mb-4 flex items-center gap-2">
          <CheckCircle size={16} className="text-emerald-500" />
          <span>Collaboration & Ecosystem Signals</span>
        </h3>
        <div className="space-y-3">
          {insights.collaborationSignals.map((sig, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans py-2">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span>{sig}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Interview Questions */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-sans mb-4 flex items-center gap-2">
          <HelpCircle size={16} className="text-emerald-500" />
          <span>Suggested Interview Questions</span>
        </h3>
        <div className="space-y-3">
          {insights.suggestedInterviewQuestions.map((q, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans py-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">Q{idx + 1}.</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
