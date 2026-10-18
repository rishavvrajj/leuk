export function ExternalLinkIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
