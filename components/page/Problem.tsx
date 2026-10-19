import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Problem() {
  return (
    <SectionShell contentClassName="py-8 px-4 sm:p-8 lg:p-12">
      <SectionHeading
        eyebrow="The problem"
        title={
          <>
            You ship constantly.
            <span className="block text-neutral-500 dark:text-neutral-400">
              Your profile doesn’t.
            </span>
          </>
        }
        description="Most portfolios go stale the moment they’re published. Bullet points age. PDFs collect dust. Meanwhile, your best work keeps moving forward."
      />

      <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-center text-pretty text-xs sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 px-2">
        Your GitHub already tells the story. It just needs a better frame.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 px-2">
        <div className="flex w-full sm:w-lg max-w-full">
          <PrimaryButton>
            Make your work visible
          </PrimaryButton>
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
          No dashboard to maintain. No profile to babysit.
        </p>
      </div>
    </SectionShell>
  );
}
