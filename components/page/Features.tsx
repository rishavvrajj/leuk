import { LucideGitBranchPlus, Terminal, RefreshCw, Lock } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Features() {
  const features = [
    {
      icon: LucideGitBranchPlus,
      title: "Real work, not résumés",
      description:
        "Leuk reads the public work you’ve already shipped and arranges it into a living profile, no bullet points, no noise.",
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
    <SectionShell id="features" contentClassName="p-4 sm:p-8 lg:p-12">
      <SectionHeading
        eyebrow="Features"
        title="Work only. No noise."
        description="Everything in Leuk is built around one idea: your work deserves to be read."
      />

      <div className="mt-8 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="group rounded-xs border border-neutral-200/80 bg-white p-4 sm:p-8 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
            >
              <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xs border border-neutral-200 bg-neutral-50/50 text-neutral-700 transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-50 dark:group-hover:text-neutral-950">
                <Icon size={16} aria-hidden="true" />
              </span>

              <h3 className="mt-4 sm:mt-6 text-base sm:text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                {feature.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-pretty text-xs sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}