import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Problem() {
  const [userName, setUserName] = useState('');

  return (
    <div className="relative w-full flex">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell className="relative min-w-7xl bg-white/95 backdrop-blur dark:bg-neutral-950/95 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-pretty text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Your GitHub already tells the story. It just needs a better frame.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <div className="flex w-lg max-w-full">
            <PrimaryButton>
              Make your work visible
            </PrimaryButton>
          </div>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            No dashboard to maintain. No profile to babysit.
          </p>
        </div>
      </SectionShell>
      <div className="w-full h-full bg-neutral-100 dark:bg-neutral-950/30"></div>
    </div>
  );
}