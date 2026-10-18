export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xs border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-2xs transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-100 hover:shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:border-neutral-300 dark:hover:bg-neutral-900 dark:focus-visible:outline-neutral-50 ${className}`}
    >
      {children}
    </a>
  );
}
