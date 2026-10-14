import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Problem() {
  const [userName, setUserName] = useState('');

  return (
    <SectionShell className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
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
          <input
            type="text"
            placeholder="Enter GitHub username"
            onChange={(event) => setUserName(event.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 text-sm focus:outline-none focus:ring-0 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />
          <PrimaryButton
            className="right-0 top-0 h-full w-md"
            href={`/${userName}`}
          >
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