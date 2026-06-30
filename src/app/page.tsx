import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <main className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm sm:p-10">
        <p className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-bold text-rose-600">
          看護学生さん向け・無料診断
        </p>
        <h1 className="mt-4 text-2xl font-bold leading-snug text-zinc-800 sm:text-3xl">
          実習記録が終わらない理由がわかる
          <br />
          <span className="text-rose-500">5タイプ診断シート</span>
        </h1>
        <p className="mt-5 leading-7 text-zinc-600">
          全10問の質問に答えるだけで、あなたが記録で止まる理由と、今日から見るべきポイントがわかります。
          <br />
          回答に応じて質問が変わるので、自分に合った診断結果が出てきます。
        </p>
        <ul className="mt-6 space-y-2 text-sm text-zinc-500">
          <li>・所要時間の目安：約2〜3分</li>
          <li>・回答は保存・送信されません</li>
          <li>・最後まで無料で診断できます</li>
        </ul>
        <Link
          href="/diagnosis"
          className="mt-8 flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-rose-600"
        >
          診断をはじめる
        </Link>
      </main>
    </div>
  );
}
