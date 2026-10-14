import { useState, useEffect } from "react";
import { LucideGitBranchPlus, Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#Home" },
  { label: "Features", href: "#Features" },
  { label: "Beliefs", href: "#Beliefs" },
  { label: "Profiles", href: "#profiles" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sync open state on mount or similar if needed, or initialize lazily
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className="w-full border border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95"
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a
            href="#Home"
            className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50"
          >
            <Terminal size={18} aria-hidden="true" />
            Leuk
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/rishavvrajj/leuk"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Leuk on GitHub"
              className="inline-flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-300 dark:hover:text-neutral-50"
            >
              <LucideGitBranchPlus size={18} aria-hidden="true" />
            </a>

            <ThemeToggle />

            <a
              href={'/rishavvrajj'}
              className="hidden min-h-10 items-center border border-neutral-950 bg-neutral-950 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:inline-flex dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-300"
            >
              Demo
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 md:hidden dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-300 dark:hover:text-neutral-50"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-navigation"
            className="border-t border-neutral-200 px-4 py-3 md:hidden dark:border-neutral-800"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-neutral-100 py-3 text-sm text-neutral-700 transition-colors last:border-b-0 hover:text-neutral-950 dark:border-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={'/rishavvrajj'}
                className="mt-3 inline-flex min-h-11 items-center justify-center border border-neutral-950 bg-neutral-950 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-300"
              >
                Demo
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}