import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "22+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Perusahaan & Institusi" },
  { value: "10K+", label: "Klien Terbantu" },
  { value: "100+", label: "Program Coaching" },
];

const services = [
  {
    title: "Life Transformation Coaching",
    desc: "Sesi coaching one-on-one untuk menemukan tujuan hidup, mengatasi mental blocks, dan merancang masa depan.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Business Coaching & Consulting",
    desc: "Konsultasi strategi bisnis, pengembangan kepemimpinan, dan optimasi operasional untuk pertumbuhan.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Corporate Training",
    desc: "Program training korporat untuk meningkatkan kompetensi SDM dan membangun budaya perusahaan.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Seminar & Public Speaking",
    desc: "Seminar motivasi dan inspirasi untuk perusahaan, institusi pendidikan, dan komunitas.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Psychotherapy & Mental Wellness",
    desc: "Terapi dengan pendekatan NLP, Hypnotherapy, dan EFT untuk mengatasi trauma dan mental blocks.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Pension & Financial Planning",
    desc: "Konsultasi perencanaan pensiun dan finansial untuk mencapai kebebasan finansial.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const testimonials = [
  {
    name: "Tasya Billa Miftahul Jannah",
    text: "Mengikuti CV Review memberikan insight baru untukku dalam melihat CV bukan hanya sebagai daftar pengalaman, tetapi sebagai representasi value dan kontribusi yang bisa diberikan kepada perusahaan.",
    initials: "TB",
  },
  {
    name: "Amsal Simanungkalit",
    text: "Coachnya sabar dan mau mengarahkan disaat saya mengalami kendala. Pembawaan coach tenang dan ramah, sehingga saya juga merasa tenang saat sesi coaching.",
    initials: "AS",
  },
  {
    name: "Rina Wijaya",
    text: "Sesi Life Coaching benar-benar mengubah perspektif saya tentang hidup. Saya jadi lebih fokus dan punya tujuan yang jelas. Sangat direkomendasikan!",
    initials: "RW",
  },
];

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
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary border border-primary-light text-white text-xs font-semibold mb-6 shadow-lg shadow-primary/30">
                Achieve Financial Freedom
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Ambil Langkah Pertama untuk{" "}
                <span className="text-primary-light">Kesuksesanmu!</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Bersama coach dan mentor profesional, rancang strategi untuk memaksimalkan potensi dan kekuatanmu di area personal, korporasi, dan bisnis.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
                <Link
                  href="/business"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Personal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/business"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-all"
                >
                  Corporate
                </Link>
                <Link
                  href="/business"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-all"
                >
                  Business
                </Link>
              </div>

              <p className="text-sm text-zinc-500 mb-8">
                Kami telah mendampingi banyak individu mengambil langkah pertama menuju potensi terbaiknya.
              </p>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                Memberi pelatihan dengan Multiprespektif dengan trainer yang berpengalaman sebagai CEO di korporasi, praktisi sebagai serial entrepreneur, sekaligus sebagai akademisi dan Life coach.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/event-documentation/docs-1 (1).jpeg"
                  alt="Event Documentation"
                  width={800}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-primary/20 backdrop-blur border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">22+</div>
                  <div className="text-[10px] text-zinc-400">Tahun</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl bg-accent-light/80 backdrop-blur border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-[10px] text-zinc-400">Klien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Image
              src="/logo.jpeg"
              alt="Transformer Coach Indonesia"
              width={160}
              height={160}
              className="mx-auto rounded-3xl shadow-xl shadow-primary/10"
              priority
            />
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mt-6 mb-3">Tentang Kami</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4 leading-tight">
                Manfaat Coaching bersama Transformer Coach
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Raih potensi terbaik Anda dengan coaching bersama Transformer Coach Indonesia! Kami membantu Anda meningkat dan berkembang secara personal dan profesional, mentransformasi kehidupan menuju versi terbaik diri Anda, serta membentuk masa depan yang lebih cerah dan penuh makna.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Pelajari
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/founders/ceo-1.jpeg" alt="Coaching Session" width={300} height={400} className="w-full h-56 object-cover object-top rounded-2xl" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/founders/ceo-replacement.jpeg" alt="Training" width={300} height={250} className="w-full h-40 object-cover object-top rounded-2xl" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/founders/co-founder-1.jpeg" alt="Workshop" width={300} height={400} className="w-full h-56 object-cover object-top rounded-2xl" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/founders/ceo-3.jpeg" alt="Seminar" width={300} height={400} className="w-full h-56 object-cover object-top rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Testimonial</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Cerita dari Para Klien</h2>
            <p className="text-muted leading-relaxed">
              Simak cerita seru dan pengalaman nyata setelah mengikuti coaching di platform kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 lg:p-8 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-accent">{t.name}</div>
                    <div className="text-xs text-muted">Happy Coachee</div>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
            >
              Lihat Semua Testimonial
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Articles</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Dapatkan Ilmu Baru</h2>
            <p className="text-muted leading-relaxed">
              Kembangkan dirimu lewat pembelajaran yang relevan dan fleksibel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <article key={article.title} className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all bg-white">
                <div className="h-44 bg-gradient-to-br from-primary/5 to-primary-bg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded">
                      {article.tag}
                    </span>
                    <span className="text-xs text-muted-light">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-accent mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
            >
              Lihat Semua Artikel
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Layanan</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Layanan Terbaik Untukmu</h2>
            <p className="text-muted leading-relaxed">
              Raih tujuanmu lebih cepat dengan bantuan coach dan layanan unggulan kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-accent mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Mitra</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Mitra & Kolaborasi</h2>
            <p className="text-muted leading-relaxed">
              Telah dipercaya oleh berbagai institusi pemerintahan dan perusahaan terkemuka di Indonesia.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-white border border-border flex items-center justify-center p-3 hover:shadow-md hover:border-primary/20 transition-all">
                <Image
                  src={`/mitra/1 (${i + 1}).jpeg`}
                  alt={`Mitra ${i + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent to-accent-light rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Siap untuk Transformasi?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Jadwalkan sesi coaching atau daftar seminar kami hari ini dan mulai perjalanan transformasi Anda menuju versi terbaik diri Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-600 text-zinc-300 font-semibold hover:bg-zinc-800 hover:border-zinc-500 transition-all"
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
