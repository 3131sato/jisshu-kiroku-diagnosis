import { QuestionNode } from "@/lib/types";

export default function QuestionCard({
  node,
  onSelect,
}: {
  node: QuestionNode;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-lg font-bold leading-relaxed text-zinc-800 sm:text-xl">
        {node.text}
      </h2>

      <div className="mt-6 space-y-3">
        {node.choices.map((choice, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            className="w-full rounded-xl border border-zinc-200 px-4 py-4 text-left transition-colors hover:border-rose-300 hover:bg-rose-50"
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
