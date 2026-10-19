import { SectionShell } from "@/components/ui/SectionShell";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function SocialProof() {
  return (
    <SectionShell containerClassName="h-auto" contentClassName="px-4 sm:px-8 py-6 sm:py-8">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between w-full">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Built for people who build.
          </h2>
          <p className="mt-2 sm:mt-3 text-pretty text-xs sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            From first repos to open-source maintainers, Leuk is for developers
            whose work deserves more than a static résumé.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <SecondaryButton href={'/rishavvrajj'}>Explore profiles</SecondaryButton>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            See what a GitHub handle becomes.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}