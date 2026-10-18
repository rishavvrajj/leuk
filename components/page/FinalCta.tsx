import { SectionShell } from "@/components/ui/SectionShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function FinalCta() {
  return (
    <div className="relative w-full flex bg-neutral-100/60 dark:bg-neutral-950/30">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell className="relative min-w-7xl bg-neutral-100/95 backdrop-blur dark:bg-neutral-950/95">
        <div className="absolute w-px h-full left-0 bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-800 z-100"></div>
        <div className="absolute w-px h-full right-0 bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-800 z-100"></div>
        <div className="p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-neutral-50">
              Your next commit
              <span className="block text-neutral-500 dark:text-neutral-400">
                could be your next introduction.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
              Turn the work you’ve already done into a profile that keeps working
              for you.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-500 dark:text-neutral-500">
              No forms. No rehearsing. No pretending. Just your GitHub, arranged
              into something people can actually read.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <div className="flex w-lg max-w-full">
                <PrimaryButton>
                  Create your Leuk profile
                </PrimaryButton>
              </div>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
                Free to try. Public work only.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}
