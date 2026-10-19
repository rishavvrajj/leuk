export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <p className="mb-6 inline-flex items-center gap-4 bg-neutral-50 px-3.5 py-1 rounded-xl text-xs tracking-wide text-neutral-600 shadow-lg border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-2.5 w-2.5 font-pally rounded-full bg-emerald-500" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl dark:text-neutral-50">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
