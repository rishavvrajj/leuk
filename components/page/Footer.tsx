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
    <div className="relative w-full flex">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-900 z-100"></div>
      </div>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
      <footer className="relative min-w-7xl border border-neutral-200/80 bg-white/95 backdrop-blur-md w-full px-4 py-4 sm:px-6 dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="flex items-center justify-between">
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
        </div>
      </footer>
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}