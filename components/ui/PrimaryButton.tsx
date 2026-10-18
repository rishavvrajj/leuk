import { useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

export function PrimaryButton({
  href,
  children,
  className = "",
  showInput = true,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  showInput?: boolean;
}) {
  const [userName, setUserName] = useState('');

  if (!showInput) {
    return (
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-2 rounded-4xl border border-neutral-950 bg-neutral-950 px-6 py-3 text-xs font-medium text-white shadow-xs transition-all duration-200 hover:bg-neutral-800 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:border-neutral-50 dark:bg-neutral-300 dark:text-neutral-950 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-50 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <div className="flex flex-col w-full bg-neutral-900 p-4 sm:p-5 rounded-3xl sm:rounded-4xl shadow-xl border border-neutral-800 dark:bg-neutral-900/20 dark:border-neutral-800">
      <input
        type="text"
        placeholder="Enter GitHub username (e.g. torvalds)"
        onChange={(event) => setUserName(event.target.value)}
        className="w-full text-xs bg-transparent py-2 text-white focus:outline-none placeholder:text-neutral-500 font-mono"
      />
      <div className="mt-3 flex items-center justify-between w-full pt-3 border-t border-neutral-800/80">
        <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
          <Terminal size={16} className="text-neutral-500" />
          <span>auto-detect public repos</span>
        </div>
        <a
          href={href || `/${userName}`}
          className={`group inline-flex items-center justify-center gap-2 rounded-3xl border border-neutral-50 bg-neutral-50 px-5 py-2.5 text-xs font-medium text-neutral-950 shadow-xs transition-all duration-200 hover:bg-neutral-200 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-50 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 ${className}`}
        >
          {children}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
