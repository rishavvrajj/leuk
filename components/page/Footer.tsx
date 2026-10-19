import { SectionShell } from "@/components/ui/SectionShell";

export function Footer() {
  const links = [
    { label: "X", href: "https://x.com/rishavvrajj" },
    { label: "GitHub", href: "https://github.com/rishavvrajj" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rishavv-rajj/",
    },
    { label: "Get started", href: '/analyze' },
  ];

  return (
    <SectionShell as="footer" className="border border-neutral-200/80 dark:border-neutral-800" contentClassName="px-4 py-6 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
        <p className="font-mono text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          Leuk
        </p>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
          Your work, made visible.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 sm:gap-x-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined
                }
                className="text-xs sm:text-sm whitespace-nowrap text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </SectionShell>
  );
}
