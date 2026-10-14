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
        <p className="mb-4 inline-flex items-center gap-2 border border-neutral-200 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
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
