import { SectionShell } from "@/components/ui/SectionShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Hero() {
  return (
    <SectionShell id="Home" containerClassName="h-160" className="flex items-center" contentClassName="flex items-center justify-center">
      <div className="mx-auto max-w-4xl text-center space-y-6 px-4">
        <p className="inline-flex items-center gap-4 bg-neutral-50 px-3.5 py-1 rounded-xl text-xs tracking-wide text-neutral-600 shadow-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-2.5 w-2.5 font-pally rounded-full bg-emerald-500" />
          living developer profile
        </p>

        <h1 className="text-7xl w-4xl leading-[1.1] tracking-tighter text-neutral-950 dark:text-neutral-50">
          Your work is already speaking.
          <span className="block text-neutral-500 italic dark:text-neutral-600">
            Let it be <span className="text-emerald-400 font-pally">heard.</span>
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
  );
}
