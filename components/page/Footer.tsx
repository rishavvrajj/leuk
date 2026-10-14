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
    <footer className="w-full border border-neutral-200 bg-white px-4 py-10 sm:px-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            Leuk
          </p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
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
      </div>

      <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
          © 2026 Leuk.
        </p>
      </div>
    </footer>
  );
}