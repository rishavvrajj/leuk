import { SectionShell } from "@/components/ui/SectionShell";

export function Footer() {
  const links = [
    { label: "X", href: "https://x.com/rishavvrajj" },
    { label: "GitHub", href: "https://github.com/rishavvrajj" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rishavv-rajj/",
    },
    { label: "Get started", href: '/rishavvrajj' },
  ];

  return (
    <SectionShell as="footer" className="border border-neutral-200/80 dark:border-neutral-800" contentClassName="px-4 py-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <p className="font-mono text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          Leuk
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Your work, made visible.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
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
