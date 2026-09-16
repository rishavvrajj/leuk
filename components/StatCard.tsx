interface StatCardProps {
  icon: string;
  label: string;
  value: number | string;
}

export default function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur transition hover:border-emerald-500">
      <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-zinc-500">
        <span aria-hidden>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-3 text-3xl font-bold tabular-nums text-zinc-50">
        {value}
      </div>
    </div>
  );
}