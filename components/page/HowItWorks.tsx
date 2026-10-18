import { useState } from "react";
import { Terminal, Layers, RefreshCw } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function HowItWorks() {
  const [userName, setUserName] = useState('');

  const steps = [
    {
      icon: Terminal,
      title: "Drop in your handle",
      description: "Paste your GitHub username. Nothing else is required.",
    },
    {
      icon: Layers,
      title: "Leuk reads public work",
      description:
        "Repos, contributions, languages, and public activity become the raw material.",
    },
    {
      icon: RefreshCw,
      title: "Get a living profile",
      description:
        "A readable page that evolves as your work evolves — without extra upkeep.",
    },
  ];

  return (
    <div className="relative w-full flex">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell id="HowItWorks" className="relative min-w-7xl bg-white/95 backdrop-blur dark:bg-neutral-950/95 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              One handle.
              <span className="block text-neutral-500 dark:text-neutral-400">
                A living profile.
              </span>
            </>
          }
          description="Enter your GitHub username. Leuk reads the public work you’ve already created and arranges it into a profile that evolves with you."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group rounded-xs border border-neutral-200/80 bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-neutral-200 bg-neutral-50/50 text-neutral-700 transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-950">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <div className="flex w-lg max-w-full">
            <PrimaryButton>
              Try your GitHub handle
            </PrimaryButton>
          </div>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            No setup marathons. No content calendar. No maintenance tax.
          </p>
        </div>
      </SectionShell>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}