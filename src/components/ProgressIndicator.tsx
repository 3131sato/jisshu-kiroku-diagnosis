export default function ProgressIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm font-medium text-zinc-500">
        <span>
          質問 {current} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-rose-100">
        <div
          className="h-2 rounded-full bg-rose-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
