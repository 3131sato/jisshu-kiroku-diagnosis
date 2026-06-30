import { notFound } from "next/navigation";
import Link from "next/link";
import { typeContents } from "@/lib/typeContent";
import { TypeId } from "@/lib/types";
import CTASection from "@/components/CTASection";

const VALID_TYPE_IDS: TypeId[] = [
  "info-lost",
  "soap-a-stop",
  "problem-mess",
  "report-freeze",
  "record-overload",
];

export function generateStaticParams() {
  return VALID_TYPE_IDS.map((typeId) => ({ typeId }));
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ typeId: string }>;
}) {
  const { typeId } = await params;

  if (!VALID_TYPE_IDS.includes(typeId as TypeId)) {
    notFound();
  }

  const content = typeContents[typeId as TypeId];

  return (
    <div className="flex flex-1 justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        <p className="text-center text-sm font-bold text-rose-500">
          診断結果
        </p>
        <h1 className="mt-2 text-center text-2xl font-bold leading-snug text-zinc-800 sm:text-3xl">
          {content.catch}
        </h1>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-zinc-800">あなたの傾向</h2>
          <p className="mt-3 leading-7 text-zinc-600">{content.description}</p>

          <h2 className="mt-8 text-lg font-bold text-zinc-800">
            今日から見るポイント
          </h2>
          <ul className="mt-3 space-y-3">
            {content.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl bg-rose-50 p-3 text-sm leading-6 text-zinc-700"
              >
                <span className="font-bold text-rose-400">{i + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-bold text-zinc-800">
            てらこやで相談できること
          </h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {content.terakoyaHelp.map((item, i) => (
              <li
                key={i}
                className="rounded-xl border border-rose-100 px-3 py-2 text-sm text-zinc-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CTASection />

        <div className="mt-6 text-center">
          <Link
            href="/diagnosis"
            className="text-sm font-medium text-zinc-500 underline underline-offset-4 hover:text-rose-500"
          >
            もう一度診断する
          </Link>
        </div>
      </div>
    </div>
  );
}
