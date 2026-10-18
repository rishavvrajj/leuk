import { Terminal, Layers, RefreshCw } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function HowItWorks() {
  const steps = [
    {
      icon: Terminal,
      title: "Drop in your handle",
      description: "Paste your GitHub username. Nothing else is required.",
      className: "col-span-1"
    },
    {
      icon: Layers,
      title: "Leuk reads public work",
      description: "Repos, contributions, languages, and public activity become the raw material.",
      className: "col-span-1"
    },
    {
      icon: RefreshCw,
      title: "Get a living profile",
      description: "A beautifully typeset, high-performance public page that updates automatically as your work evolves. New repositories, contributions, and projects are reflected in real time keeping your portfolio fresh without any maintenance tax.",
      className: "col-span-2"
    },
  ];


  return (
    <SectionShell id="HowItWorks" contentClassName="p-8">
      <div className="grid grid-cols-2">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className={`group ${step.className} p-4 space-y-2 cursor-pointer rounded-xs transition-all duration-200`}
            >
              <div className="flex items-center gap-2 px-0.5">
                <Icon size={16} aria-hidden="true" />
                <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                  {step.title}
                </h3>
              </div>
              <p className="px-0.5 text-md leading-relaxed text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
              <div
                className="h-42 w-full bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0.5px)] bg-[size:8px_8px] opacity-80"
                style={{ '--pattern-fg': 'var(--foreground)' } as React.CSSProperties}
              />
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}