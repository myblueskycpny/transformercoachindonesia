import Link from "next/link";

const articles = [
  {
    title: "Cara Mencapai Financial Freedom di Usia Muda",
    tag: "Financial",
    date: "10 Juni 2026",
    excerpt: "Pelajari langkah-langkah praktis untuk mencapai kebebasan finansial sebelum usia 40 tahun, mulai dari mindset hingga strategi investasi.",
    readTime: "5 min read",
  },
  {
    title: "Mengatasi Mental Blocks dalam Bisnis",
    tag: "Mindset",
    date: "5 Juni 2026",
    excerpt: "Mental blocks adalah hambatan terbesar dalam kesuksesan bisnis. Simak cara mengidentifikasi dan mengatasinya dengan teknik NLP.",
    readTime: "7 min read",
  },
  {
    title: "Leadership di Era Digital: Tantangan dan Strategi",
    tag: "Leadership",
    date: "28 Mei 2026",
    excerpt: "Bagaimana menjadi pemimpin efektif di era digital? Artikel ini membahas tantangan kepemimpinan modern dan cara menghadapinya.",
    readTime: "6 min read",
  },
  {
    title: "Manfaat Life Coaching untuk Pengembangan Karir",
    tag: "Coaching",
    date: "20 Mei 2026",
    excerpt: "Life coaching bukan hanya untuk mereka yang bermasalah, tetapi juga untuk profesional yang ingin mengoptimalkan potensi karir.",
    readTime: "4 min read",
  },
  {
    title: "Teknik NLP untuk Meningkatkan Percaya Diri",
    tag: "NLP",
    date: "15 Mei 2026",
    excerpt: "Neuro-Linguistic Programming menawarkan teknik-teknik powerful untuk meningkatkan rasa percaya diri dan mengatasi kecemasan.",
    readTime: "6 min read",
  },
  {
    title: "Pentingnya Perencanaan Pensiun Sejak Dini",
    tag: "Financial",
    date: "8 Mei 2026",
    excerpt: "Jangan tunggu pensiun untuk merencanakan masa depan. Mulai perencanaan pensiun Anda sekarang dengan panduan ini.",
    readTime: "5 min read",
  },
];

export default function Articles() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Articles
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Articles Motivation</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Kumpulan artikel motivasi, tips pengembangan diri, dan thought leadership dari para coach profesional kami.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group p-6 lg:p-8 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-light">{article.date}</span>
                  <span className="text-xs text-border">•</span>
                  <span className="text-xs text-muted-light">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-semibold hover:underline"
                >
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
