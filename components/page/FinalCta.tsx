import { SectionShell } from "@/components/ui/SectionShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function FinalCta() {
  return (
    <SectionShell contentClassName="p-8">
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
    </SectionShell>
  );
}
