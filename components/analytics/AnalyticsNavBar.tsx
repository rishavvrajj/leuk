"use client";

import Link from "next/link";
import { Terminal, BarChart2, GitCompare, ArrowLeft } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function AnalyticsNavBar() {
  return (
    <SectionShell
      as="header"
      containerClassName="sticky top-0 z-200 h-16 border-b border-neutral-200 bg-neutral-900/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90"
      contentClassName="flex items-center justify-between h-full w-full px-4 sm:px-8"
    >
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white transition-colors hover:text-neutral-300"
        >
          <Terminal size={18} aria-hidden="true" />
          <span>Leuk <span className="text-emerald-400 font-mono text-xs px-1.5 py-0.5 bg-emerald-950/85 border border-emerald-800 rounded">Analytics</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/analyze"
            className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
          >
            <BarChart2 size={14} className="text-emerald-400" />
            <span>Analyze</span>
          </Link>
          <Link
            href="/compare"
            className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
          >
            <GitCompare size={14} className="text-emerald-400" />
            <span>Compare</span>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded border border-neutral-800 bg-neutral-900"
        >
          <ArrowLeft size={13} />
          <span>Back to Portfolio</span>
        </Link>

        <ThemeToggle />
      </div>
    </SectionShell>
  );
}
