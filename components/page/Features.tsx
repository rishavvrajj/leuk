import { LucideGitBranchPlus, Terminal, RefreshCw, Lock } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Features() {
  const features = [
    {
      icon: LucideGitBranchPlus,
      title: "Real work, not résumés",
      description:
        "Leuk reads the public work you’ve already shipped and arranges it into a living profile — no bullet points, no noise.",
    },
    {
      icon: Terminal,
      title: "Zero setup",
      description:
        "Drop in your GitHub handle. No database, no dashboards to feed, no profile to babysit. That was the hard part.",
    },
    {
      icon: RefreshCw,
      title: "Updates itself",
      description:
        "Every push, star, and contribution becomes part of your story. Your presence moves the way you do.",
    },
    {
      icon: Lock,
      title: "Private by default",
      description:
        "Nothing is stored, nothing is sold. Leuk reads only what you’ve already made public. Everything else is yours.",
    },
  ];

  return (
    <div className="relative w-full flex  bg-neutral-100/60 dark:bg-neutral-950/30">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <SectionShell id="Features" className="relative min-w-7xl bg-neutral-100/95 backdrop-blur dark:bg-neutral-950/95">
        <div className="absolute w-px right-0 h-full bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-300 dark:via-neutral-600 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-px left-0 h-full bg-linear-to-b from-neutral-200 dark:from-neutral-800 via-neutral-300 dark:via-neutral-600 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="p-8">
          <SectionHeading
            eyebrow="Features"
            title="Work only. No noise."
            description="Everything in Leuk is built around one idea: your work deserves to be read."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-xs border border-neutral-200/80 bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-md sm:p-8 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xs border border-neutral-200 bg-neutral-50/50 text-neutral-700 transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-950">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex w-lg max-w-full">
              <PrimaryButton>
                Create yours
              </PrimaryButton>
            </div>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
              Public work in. Living profile out.
            </p>
          </div>
        </div>
      </SectionShell>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}
