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
    <SectionShell id="HowItWorks" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
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
              className="group border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
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
            Try your GitHub handle
          </PrimaryButton>
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
          No setup marathons. No content calendar. No maintenance tax.
        </p>
      </div>
    </SectionShell>
  );
}