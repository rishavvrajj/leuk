import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Beliefs() {
  const beliefs = [
    {
      title: "Craft deserves a stage.",
      description:
        "The internet should reward the thing made well, not the thing made loudest.",
    },
    {
      title: "A portfolio should breathe.",
      description:
        "Your work changes daily. A PDF written once can’t keep up.",
    },
    {
      title: "Your work belongs to you.",
      description:
        "No setup marathons. No maintenance tax. No gatekeepers.",
    },
    {
      title: "Simplicity is respect.",
      description:
        "The work is complex enough. The frame around it shouldn’t be.",
    },
  ];

  return (
    <SectionShell id="beliefs" contentClassName="p-4 sm:p-8 lg:p-12">
      <SectionHeading
        eyebrow="Philosophy"
        title="What we believe."
        description="Leuk exists to give your work a home. Growth should be visible. Progress should be celebrated. Builders should be able to look back at their journey with pride, not only at what they shipped, but at how far they’ve come."
      />
      <div className="mt-8 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {beliefs.map((belief) => (
          <article
            key={belief.title}
            className="rounded-xs border border-neutral-200/80 bg-white p-4 sm:p-8 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-300"
          >
            <h3 className="text-base font-semibold tracking-tight text-neutral-950 sm:text-xl dark:text-neutral-50">
              {belief.title}
            </h3>
            <p className="mt-2 sm:mt-3 text-pretty text-xs sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {belief.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <SecondaryButton href={'/rishavvrajj'}>See Leuk in action</SecondaryButton>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
          Built for the work behind the work.
        </p>
      </div>
    </SectionShell>
  );
}
