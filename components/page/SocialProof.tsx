import { SectionShell } from "@/components/ui/SectionShell";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function SocialProof() {
  return (
    <div className="relative w-full flex h-42">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell className="relative w-full min-w-7xl mx-auto bg-neutral-100/95 backdrop-blur dark:bg-neutral-950/95 px-6 sm:px-12 py-6 flex items-center justify-between">
        <div className="absolute w-px h-full left-0 bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-800 z-100"></div>
        <div className="absolute w-px h-full right-0 bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-800 z-100"></div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
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
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}