import { SectionShell } from "@/components/ui/SectionShell";
import Link from "next/link";

export function Hero() {
  return (
    <SectionShell id="Home" containerClassName="h-160" className="flex items-center" contentClassName="flex items-center justify-center">
      <div className="mx-auto max-w-4xl text-center space-y-6 px-4">
        <p className="inline-flex items-center gap-4 bg-neutral-50 px-3.5 py-1 rounded-xl text-xs tracking-wide text-neutral-600 shadow-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-2.5 w-2.5 font-pally rounded-full bg-emerald-500" />
          GitHub Analytics & Comparison Platform
        </p>

        <h1 className="text-7xl w-4xl leading-[1.1] tracking-tighter text-neutral-950 dark:text-neutral-50">
          Your work is already speaking.
          <span className="block text-neutral-500 italic dark:text-neutral-600">
            Let it be <span className="text-emerald-400 font-pally">heard.</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/analyze"
            className="inline-flex items-center justify-center gap-2 rounded-4xl border border-neutral-950 bg-neutral-950 px-8 py-4 text-xs font-mono font-bold text-white shadow-xs transition-all hover:bg-neutral-800 dark:border-neutral-50 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Analyze Profile →
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center gap-2 rounded-4xl border border-neutral-300 bg-white px-8 py-4 text-xs font-mono font-bold text-neutral-950 shadow-xs transition-all hover:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-50"
          >
            Compare Profiles →
          </Link>
        </div>

        <p className="mt-4 font-mono text-xs text-neutral-500 dark:text-neutral-500">
          Drop in any GitHub handle. Generate deep metrics & AI insights.
        </p>
      </div>
    </SectionShell>
  );
}
