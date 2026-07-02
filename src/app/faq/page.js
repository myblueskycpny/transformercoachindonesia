const faqs = [
  {
    q: "Apa itu Transformer Coach Indonesia?",
    a: "Transformer Coach Indonesia adalah platform digital untuk personal branding dan layanan coaching profesional yang menampilkan profil CEO, layanan bisnis, jadwal seminar, artikel motivasi, serta sarana komunikasi bagi calon klien.",
  },
  {
    q: "Apa saja layanan yang ditawarkan?",
    a: "Kami menawarkan Life Transformation Coaching, Business Coaching & Consulting, Corporate Training, Pension & Financial Planning, Psychotherapy & Mental Wellness, serta Seminar & Public Speaking.",
  },
  {
    q: "Siapa yang bisa mengikuti program coaching?",
    a: "Program kami terbuka untuk individu dari berbagai latar belakang — profesional, pengusaha, karyawan, mahasiswa, dan siapa pun yang ingin mengembangkan potensi diri dan mencapai tujuan hidup.",
  },
  {
    q: "Apakah sesi coaching dilakukan secara online atau offline?",
    a: "Kami menyediakan sesi coaching secara online (via Zoom/Google Meet) maupun offline (tatap muka) tergantung pada kebutuhan dan lokasi klien.",
  },
  {
    q: "Berapa durasi sesi coaching?",
    a: "Durasi sesi bervariasi tergantung program yang dipilih. Untuk sesi individu biasanya 60-90 menit per sesi, sementara workshop dan training dapat berlangsung dari setengah hari hingga beberapa hari.",
  },
  {
    q: "Bagaimana cara mendaftar event seminar?",
    a: "Anda dapat mendaftar melalui halaman Event Seminar di website kami. Pilih acara yang diminati, klik daftar, dan ikuti petunjuk pembayaran jika ada.",
  },
  {
    q: "Apakah sertifikasi yang dimiliki coach terjamin?",
    a: "Para coach kami memiliki sertifikasi profesional dari lembaga terkemuka seperti BNSP, Dale Carnegie, dan berbagai lembaga sertifikasi internasional lainnya.",
  },
  {
    q: "Bagaimana cara menghubungi Transformer Coach Indonesia?",
    a: "Anda dapat menghubungi kami melalui halaman Contact, email ke info@transformercoachindonesia.com, atau WhatsApp di +62 812-3456-7890.",
  },
];

export default function Faq() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              FAQ
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Pertanyaan yang sering diajukan tentang layanan coaching dan program Transformer Coach Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-white open:border-primary/20 open:shadow-sm transition-all">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-sm font-medium text-accent pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-muted-light shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
