export function SectionShell({
  id,
  children,
  className = "",
  containerClassName = "",
  contentClassName = "",
  as: Component = "section",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
  as?: "section" | "footer" | "div" | "header";
}) {
  return (
    <div className={`relative w-full flex ${containerClassName}`}>
      {/* Top and bottom horizontal rails */}
      <div className="absolute h-full w-full pointer-events-none">
        <div className="absolute w-full h-px top-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
        <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-neutral-200 dark:from-neutral-950/20 via-neutral-400 dark:via-neutral-400 to-neutral-200 dark:to-neutral-950/20 z-100"></div>
      </div>

      {/* Left side background fill */}
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>

      {/* Centered container shell */}
      <Component
        id={id}
        className={`relative w-full min-w-7xl h-full shadow-2xs backdrop-blur-md bg-neutral-100/95 dark:bg-neutral-950/95 ${className}`}
      >
        <div className="absolute w-px h-full left-0 bg-linear-to-b from-neutral-100 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-100 dark:to-neutral-800 z-100"></div>
        <div className="absolute w-px h-full right-0 bg-linear-to-b from-neutral-100 dark:from-neutral-800 via-neutral-400 dark:via-neutral-400 to-neutral-100 dark:to-neutral-800 z-100"></div>
        <div className={`w-full h-full ${contentClassName}`}>
          {children}
        </div>
      </Component>

      {/* Right side background fill */}
      <div className="w-full h-full bg-neutral-100/60 dark:bg-neutral-950/30"></div>
    </div>
  );
}
