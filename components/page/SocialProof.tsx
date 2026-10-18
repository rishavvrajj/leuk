import { SectionShell } from "@/components/ui/SectionShell";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function SocialProof() {
  return (
    <SectionShell containerClassName="h-42" contentClassName="px-6 sm:px-12 py-6 flex items-center justify-between">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between w-full">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl dark:text-neutral-50">
            Built for people who build.
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
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
