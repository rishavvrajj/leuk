import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export function FinalCta() {
  return (
    <SectionShell contentClassName="p-8">
      <SectionHeading
        eyebrow="Get started"
        title={
          <>
            Your next commit
            <span className="block text-neutral-500 dark:text-neutral-400">
              could be your next introduction.
            </span>
          </>
        }
        description="Turn the work you’ve already done into deep analytics and insights that speak for themselves."
      />

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
    </SectionShell>
  );
}
