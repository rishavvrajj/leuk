import { LucideGitBranchPlus, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Profiles() {
  const featuredHandles = [
    "torvalds",
    "karpathy",
    "mattpocock",
    "kunal-kushwaha",
  ];

  return (
    <SectionShell id="profiles" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <SectionHeading
        eyebrow="Showcase"
        title="Developer profiles."
        description="Quick stats from featured developers, showing top repository stars and language activity. Explore real GitHub profiles rendered through Leuk — from legendary maintainers to active open-source contributors."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredHandles.map((handle) => (
          <a
            key={handle}
            href={`/${handle}`}
            target="_blank"
            rel="noreferrer noopener"
            className="group border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                <LucideGitBranchPlus size={18} aria-hidden="true" />
              </span>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-neutral-50"
              />
            </div>

            <p className="mt-6 font-mono text-sm font-medium text-neutral-950 dark:text-neutral-50">
              @{handle}
            </p>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
              View public GitHub profile
            </p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <PrimaryButton href={'/rishavvrajj'}>Explore profiles</PrimaryButton>
        <p className="text-center font-mono text-xs text-neutral-500 dark:text-neutral-500">
          Featured profiles include torvalds, karpathy, mattpocock, and
          kunal-kushwaha.
        </p>
      </div>
    </SectionShell>
  );
}