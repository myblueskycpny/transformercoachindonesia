import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Tentang Kami
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Tentang Transformer Coach Indonesia
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Platform digital untuk personal branding dan layanan coaching profesional, menampilkan profil CEO, layanan bisnis, jadwal seminar, artikel motivasi, dan sarana komunikasi bagi calon klien.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Visi & Misi</span>
              <h2 className="text-3xl font-bold text-accent mb-6">Our Vision & Mission</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-border bg-white">
                  <h3 className="text-lg font-semibold text-accent mb-2">Vision</h3>
                  <p className="text-muted leading-relaxed">
                    Menjadi mitra transformasi terdepan di Indonesia yang membantu individu dan organisasi
                    mencapai potensi penuh mereka melalui coaching, training, dan pengembangan diri.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-border bg-white">
                  <h3 className="text-lg font-semibold text-accent mb-2">Mission</h3>
                  <p className="text-muted leading-relaxed">
                    Menyediakan layanan coaching profesional berkualitas tinggi, membangun ekosistem
                    pembelajaran berkelanjutan, dan menciptakan dampak positif bagi masyarakat Indonesia
                    melalui pengembangan sumber daya manusia.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Nilai Kami</span>
              <h2 className="text-3xl font-bold text-accent mb-6">Our Values</h2>
              <div className="space-y-4">
                {[
                  { title: "Integrity", desc: "Kami menjunjung tinggi kejujuran dan etika dalam setiap interaksi" },
                  { title: "Excellence", desc: "Kami berkomitmen pada kualitas terbaik dalam setiap layanan" },
                  { title: "Transformation", desc: "Kami percaya pada kekuatan perubahan positif yang berkelanjutan" },
                  { title: "Empowerment", desc: "Kami memberdayakan individu untuk mengambil kendali atas masa depan mereka" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-primary-bg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent text-sm">{item.title}</h3>
                      <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Program Kami</span>
            <h2 className="text-3xl font-bold text-accent mb-4">Program Pendampingan Transformasi</h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">Dengan Tahapan:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Psikoterapi", desc: "Menata ulang emosi dan mental" },
              { title: "Coaching", desc: "Meningkatkan kesadaran dan potensi diri" },
              { title: "Training", desc: "Pembekalan knowledge, tools dan strategi" },
              { title: "Mentoring", desc: "Pendampingan untuk implementasi" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all text-center">
                <h3 className="text-lg font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Perjalanan Kami</span>
          <h2 className="text-3xl font-bold text-accent mb-4">Our Journey</h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Berawal dari pengalaman eksekutif dan coaching selama puluhan tahun, Transformer Coach Indonesia
            didirikan untuk menjembatani kesenjangan antara potensi dan pencapaian — membantu individu dan
            organisasi merancang strategi bisnis serta masa depan yang selaras dengan tujuan hidup.
          </p>
          <Link
            href="/ceo"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
          >
            Meet Our CEO
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
