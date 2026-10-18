export function SectionSeparator() {
  const line = "from-neutral-200 dark:from-neutral-800 via-neutral-300 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20";

  return (
    <div className="relative flex h-8 w-full bg-neutral-100/60 dark:bg-neutral-950/30">
      {/* Top full-width strip */}
      <div className="h-full w-full bg-neutral-100/80 dark:bg-neutral-950/80" />

      {/* Middle centered rails */}
      <div className="relative mx-auto flex h-full min-w-7xl">
        <div className={`h-full w-px bg-linear-to-b ${line} z-10`} />
        <div className={`ml-auto h-full w-px bg-linear-to-b ${line} z-10`} />
      </div>

      {/* Bottom full-width strip */}
      <div className="h-full w-full bg-neutral-100/80 dark:bg-neutral-950/80" />
    </div>
  );
}