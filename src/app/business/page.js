import Link from "next/link";

const services = [
  {
    title: "Life Transformation Coaching",
    tag: "Coaching",
    desc: "Sesi coaching one-on-one untuk membantu Anda menemukan tujuan hidup, mengatasi hambatan mental, dan merancang masa depan yang selaras dengan potensi penuh Anda.",
    features: ["Sesi individu private", "Assesment kepribadian", "Perencanaan tujuan jangka panjang", "Follow-up berkala"],
  },
  {
    title: "Business Coaching & Consulting",
    tag: "Consulting",
    desc: "Konsultasi dan coaching untuk pengusaha dan korporasi dalam merancang strategi bisnis, meningkatkan kinerja tim, dan mencapai pertumbuhan berkelanjutan.",
    features: ["Strategi bisnis & pemasaran", "Pengembangan kepemimpinan", "Manajemen perubahan", "Optimasi operasional"],
  },
  {
    title: "Corporate Training",
    tag: "Training",
    desc: "Program training korporat yang dirancang khusus untuk meningkatkan kompetensi SDM, membangun budaya perusahaan yang kuat, dan mendorong inovasi.",
    features: ["Workshop interaktif", "Team building", "Leadership development", "Soft skills training"],
  },
  {
    title: "Pension & Financial Planning",
    tag: "Financial",
    desc: "Konsultasi perencanaan pensiun dan finansial untuk membantu Anda mencapai kebebasan finansial dan masa depan yang aman.",
    features: ["Perencanaan pensiun dini", "Manajemen keuangan pribadi", "Strategi investasi", "Perlindungan aset"],
  },
  {
    title: "Psychotherapy & Mental Wellness",
    tag: "Therapy",
    desc: "Sesi terapi untuk membantu individu mengatasi trauma, mental blocks, dan hambatan psikologis dengan pendekatan NLP, Hypnotherapy, dan EFT.",
    features: ["NLP (Neuro-Linguistic Programming)", "Hypnotherapy", "EFT (Emotional Freedom Techniques)", "Conseling psikologis"],
  },
  {
    title: "Seminar & Public Speaking",
    tag: "Event",
    desc: "Seminar motivasi dan inspirasi untuk perusahaan, institusi pendidikan, dan komunitas dengan tema pengembangan diri dan kepemimpinan.",
    features: ["Seminar motivasi", "Keynote speaking", "Workshop publik", "Webinar online"],
  },
];

export default function Business() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Our Business
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Our Business</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Layanan coaching, konsultasi, dan program pengembangan diri yang dirancang untuk
              membantu individu dan organisasi mencapai potensi penuh mereka.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 lg:p-8 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded mb-3">
                  {service.tag}
                </span>
                <h3 className="text-lg font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted">
                      <svg className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-4">Tertarik dengan Layanan Kami?</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Hubungi kami untuk diskusi lebih lanjut tentang kebutuhan coaching dan training Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
          >
            Schedule a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
