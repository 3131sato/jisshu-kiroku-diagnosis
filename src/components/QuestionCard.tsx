import { QuestionNode } from "@/lib/types";

export default function QuestionCard({
  node,
  selectedIndex,
  onSelect,
  onNext,
}: {
  node: QuestionNode;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
}) {
  const selected = selectedIndex !== null ? node.choices[selectedIndex] : null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-lg font-bold leading-relaxed text-zinc-800 sm:text-xl">
        {node.text}
      </h2>

      <div className="mt-6 space-y-3">
        {node.choices.map((choice, i) => {
          const isSelected = selectedIndex === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              disabled={selectedIndex !== null}
              className={`w-full rounded-xl border px-4 py-4 text-left transition-colors ${
                isSelected
                  ? "border-rose-400 bg-rose-50 text-rose-700"
                  : selectedIndex === null
                  ? "border-zinc-200 hover:border-rose-300 hover:bg-rose-50"
                  : "border-zinc-100 text-zinc-400"
              }`}
            >
              {choice.label}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-6 rounded-xl bg-rose-50 p-4 text-sm leading-7 text-rose-700">
          {selected.explanation}
        </div>
      )}

      {selected && (
        <button
          type="button"
          onClick={onNext}
          className="mt-6 flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-rose-600"
        >
          次の質問に進む
        </button>
      )}
    </div>
  );
}
