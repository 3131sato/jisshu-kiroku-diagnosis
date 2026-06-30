const TERAKOYA_URL = "https://terakoya-nine.vercel.app/";

export default function CTASection() {
  return (
    <div className="mt-10 rounded-2xl border border-rose-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="inline-block rounded-full bg-rose-100 px-3 py-1 text-sm font-bold text-rose-600">
        参加費 無料
      </p>
      <h3 className="mt-3 text-xl font-bold text-zinc-800 sm:text-2xl">
        診断結果を、ひとりで抱えなくて大丈夫です
      </h3>
      <p className="mt-3 leading-7 text-zinc-600">
        実習記録で止まる理由は、人によって違います。情報収集で止まる人、SOAPのAで止まる人、看護問題で迷う人、指導者さんに聞かれると固まる人、記録をためこんで限界になる人。
        <br />
        「てらこや」無料コミュニティでは、今回の診断結果をもとに、実習記録や看護過程の相談ができます。個人情報が分からない範囲で、考え方や整理の仕方をお伝えします。
      </p>
      <a
        href={TERAKOYA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-rose-600"
      >
        無料の「てらこや」コミュニティに参加する
      </a>
      <p className="mt-4 text-sm leading-6 text-zinc-500">
        自分の患者さんの場合まで一緒に整理したい方には、7日間の個別サポートや月額の個別伴走サポートもご用意しています（詳しくはてらこやページでご案内しています）。
        まずは無料コミュニティで、困ったときに戻れる場所を持っておいてください。
      </p>
    </div>
  );
}
