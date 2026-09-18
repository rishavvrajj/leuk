interface StatCardProps {
  label: string;
  value: number | string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-4 transition-colors hover:border-zinc-700/80 hover:bg-zinc-900/40">
      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
        {label}
      </span>
      <span className="mt-2 block text-2xl font-semibold tabular-nums tracking-tight text-zinc-100">
        {value}
      </span>
    </div>
  );
}
