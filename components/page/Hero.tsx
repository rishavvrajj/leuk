import { SectionShell } from "@/components/ui/SectionShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Hero() {

  return (
    <div className="relative w-full flex h-160">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell id="Home" className="relative min-w-7xl bg-neutral-100/95 backdrop-blur dark:bg-neutral-950/95 flex items-center ">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <p className="inline-flex items-center gap-4 bg-neutral-50 px-3.5 py-1 rounded-xl font-mono text-xs capitalize tracking-widest text-neutral-600 shadow-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            A living developer profile
          </p>

          <h1 className="text-3xl w-4xl font-extralight leading-[1.1] tracking-tighter text-neutral-950 sm:text-6xl md:text-7xl dark:text-neutral-50">
            Your work is already speaking.
            <span className="block text-neutral-500 italic dark:text-neutral-600">
              Let it be <span className="text-emerald-400">heard.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center">
            <div className="flex w-lg max-w-full">
              <PrimaryButton>
                Create your profile
              </PrimaryButton>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs text-neutral-500 dark:text-neutral-500">
            Drop in a GitHub handle. That’s it.
          </p>
        </div>
      </SectionShell>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}
