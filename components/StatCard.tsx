interface StatCardProps {
  label: string;
  value: number | string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="px-2 border-l-2 border-zinc-800/60">
      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
        {label}
      </span>
      <span className="mt-1 block text-xl font-semibold tabular-nums tracking-tight text-zinc-100">
        {value}
      </span>
    </div>
  );
}
