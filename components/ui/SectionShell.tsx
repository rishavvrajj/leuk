export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 shadow-2xs backdrop-blur-md dark:bg-neutral-950/95 ${className}`}
    >
        <div className="absolute w-px h-full left-0 bg-linear-to-b from-neutral-200 dark:from-neutral-900 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-900 z-100"></div>
        <div className="absolute w-px h-full right-0 bg-linear-to-b from-neutral-200 dark:from-neutral-900 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-900 z-100"></div>
      {children}
    </section>
  );
}
