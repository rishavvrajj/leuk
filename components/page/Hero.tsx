import { SectionShell } from "@/components/ui/SectionShell";
import Link from "next/link";

export function Hero() {
  return (
    <SectionShell id="home" containerClassName="h-auto lg:h-160" className="flex items-center py-8 sm:py-12 lg:py-0" contentClassName="flex items-center justify-center p-4 sm:p-8">
      <div className="mx-auto max-w-4xl text-center space-y-4 sm:space-y-6 px-2 sm:px-4">
        <p className="inline-flex items-center gap-2 sm:gap-4 bg-neutral-50 px-3 py-1 sm:px-3.5 rounded-xl text-[11px] sm:text-xs tracking-wide text-neutral-600 shadow-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 font-pally rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">GitHub Analytics & Comparison Platform</span>
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl w-full max-w-4xl lg:w-4xl leading-[1.1] tracking-tighter text-neutral-950 dark:text-neutral-50 mx-auto">
          Your work is already speaking.
          <span className="block text-neutral-500 italic dark:text-neutral-600">
            Let it be <span className="text-emerald-400 font-pally">heard.</span>
          </span>
        </h1>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/analyze"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl border border-neutral-950 bg-neutral-950 px-6 py-3.5 sm:px-8 sm:py-4 text-xs font-mono font-bold text-white shadow-xs transition-all hover:bg-neutral-800 dark:border-neutral-50 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Analyze Profile →
          </Link>
          <Link
            href="/compare"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl border border-neutral-300 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-xs font-mono font-bold text-neutral-950 shadow-xs transition-all hover:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-50"
          >
            Compare Profiles →
          </Link>
        </div>

        <p className="mt-3 sm:mt-4 font-mono text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-500">
          Drop in any GitHub handle. Generate deep metrics & AI insights.
        </p>
      </div>
    </SectionShell>
  );
}
