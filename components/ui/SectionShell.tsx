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
      className={`w-full scroll-mt-24 border border-neutral-200/80 bg-white/95 shadow-2xs backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95 ${className}`}
    >
      {children}
    </section>
  );
}
