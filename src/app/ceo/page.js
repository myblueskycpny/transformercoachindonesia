import Image from "next/image";
import Link from "next/link";

const suciptoFu = {
  name: "Sucipto Fu",
  alias: "Mr. BEST",
  role: "CEO - Founder, Lead Trainer",
  tagline: "CEO of Semesta Group",
  roles: ["Business & Life Coach", "Executive", "Serial Entrepreneur & Investor", "Trainer & Psycho Therapist"],
  experience: "Memiliki pengalaman di perusahaan nasional dan multinasional selama lebih dari 22 tahun dengan posisi terakhir sebagai Managing Director dan CEO.",
  entrepreneurship: "Memiliki beberapa lini bisnis mulai dari Jasa (Service), Perdagangan (Trading), hingga Manufaktur (Manufacture).",
  photos: ["/founders/ceo-1.jpeg", "/founders/ceo-replacement.jpeg", "/founders/ceo-3.jpeg"],
  certifications: [
    "Certified Business Coach",
    "Certified Money Coach",
    "Certified Life Coach",
    "Practitioner of NLP (Neuro-Linguistic Programming)",
    "Practitioner of Hypnotherapy",
    "Practitioner of EFT (Emotional Freedom Techniques)",
  ],
  education: [
    { degree: "Doctor of Business Administration (2023 - 2025)", school: "Swiss School of Business Management, Swiss" },
    { degree: "Master of Business Administration (2003 - 2005)", school: "Leicester University, Inggris" },
    { degree: "Bachelor of Science in Business Administration (1996 - 2000)", school: "University of Phoenix, USA" },
  ],
};

const daniBudiman = {
  name: "Dani Budiman",
  credentials: "SE., M.MBA",
  role: "COO - Co-Founder, Trainer",
  tagline: "Your Partner in Upgrading Your Life Skill",
  tag: "Life Transformation Coach & Pension Consultant",
  linkedin: "https://linkedin.com/in/danibudiman",
  instagram: "https://instagram.com/danibudiman",
  photo: "/founders/co-founder-1.jpeg",
  background: "Mantan karyawan yang berhasil membangun karir dari bawah hingga mencapai jajaran Direksi. Setelah berbagai pengalaman jatuh bangun dalam bisnis, mengambil keputusan untuk pensiun dini. Kini dikenal sebagai pengusaha sukses di sektor Pendidikan, Properti, dan Digital.",
  activeSince: "Sejak 2015 aktif sebagai Life Transformation Coach serta Konsultan & Perencana Bisnis bersertifikat.",
  certifications: [
    "BNSP - Motivator & Trainer (Motivator Academy)",
    "Dale Carnegie Training",
    "Dream Coach",
    "Certified Transformation Life Coach (REBT) - Transformation Services, Inc.",
    "Certified Mindset Coach - Transformation Services, Inc.",
    "Certified Master Business Coach - Transformation Services, Inc.",
  ],
  government: [
    "Kementerian Pertahanan RI",
    "Kementerian Perhubungan RI",
    "Kementerian Agama RI",
  ],
  partners: [
    "Astra", "Yamaha", "AXA Insurance", "Mandiri",
    "Bank Syariah Indonesia (BSI)", "Tunas Toyota",
    "PT Sari Kreasi Boga", "Rajasaland",
    "Sharon Residence", "Delsharaya Land",
    "MultraLand", "Cinity (Cikarang International City)",
    "Aslip Protection",
  ],
};

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-base font-semibold text-accent mb-3 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function CeoPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Leadership
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Our Leadership</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Mengenal para pendiri dan coach di balik Transformer Coach Indonesia —
              profesional dengan pengalaman multinational dan sertifikasi internasional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full mb-4">
                CEO - Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-accent">Sucipto Fu (Mr. BEST)</h2>
              <p className="text-primary font-medium mt-1">Lead Trainer</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {suciptoFu.photos.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Sucipto Fu - ${i + 1}`}
                  width={i === 0 ? 600 : 400}
                  height={i === 0 ? 600 : 400}
                  className={`rounded-2xl object-cover object-top w-full ${i === 0 ? "lg:row-span-2 lg:h-full" : "lg:h-80"}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <Section title="Professional Overview">
                  <div className="space-y-3">
                    <p className="text-sm text-muted leading-relaxed">
                      <strong className="text-accent">Professional Eksekutif:</strong> {suciptoFu.experience}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      <strong className="text-accent">Serial Entrepreneur & Investor:</strong> {suciptoFu.entrepreneurship}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      <strong className="text-accent">Coach & Trainer:</strong> Berpengalaman dan memiliki passion tinggi dalam membantu perusahaan serta individu untuk membuka potensi penuh mereka.
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      <strong className="text-accent">Therapist:</strong> Berdedikasi membantu banyak individu untuk mengatasi hambatan mental (mental blocks) dan trauma.
                    </p>
                  </div>
                </Section>

                <Section title="Pendidikan Formal">
                  <ul className="space-y-3">
                    {suciptoFu.education.map((edu) => (
                      <li key={edu.degree} className="p-3 rounded-xl bg-section-alt border border-border">
                        <p className="text-sm font-medium text-accent">{edu.degree}</p>
                        <p className="text-xs text-muted mt-0.5">{edu.school}</p>
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>

              <div>
                <Section title="Sertifikasi Profesional">
                  <ul className="space-y-2">
                    {suciptoFu.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </div>

            <div className="border-t border-border pt-16">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full mb-4">
                  COO - Co-Founder
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-accent">Dani Budiman SE., M.MBA</h2>
                <p className="text-primary font-medium mt-1">Trainer</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="grid grid-cols-2 gap-3">
                  <Image
                    src="/founders/co-founder-1.jpeg"
                    alt="Dani Budiman"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover object-top w-full h-80"
                  />
                  <Image
                    src="/founders/co-founder-2.jpeg"
                    alt="Dani Budiman 2"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover object-top w-full h-80"
                  />
                </div>
                <div>
                  <Section title="About Dani Budiman">
                    <p className="text-sm text-muted leading-relaxed">{daniBudiman.background}</p>
                    <p className="text-sm text-muted leading-relaxed mt-3">{daniBudiman.activeSince}</p>
                  </Section>

                  <Section title="Social Media">
                    <div className="flex gap-3">
                      <a href={daniBudiman.linkedin} className="text-sm text-primary hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        LinkedIn
                      </a>
                      <a href={daniBudiman.instagram} className="text-sm text-primary hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        Instagram
                      </a>
                    </div>
                  </Section>

                  <Section title="Sertifikasi Profesional">
                    <ul className="space-y-2">
                      {daniBudiman.certifications.map((cert) => (
                        <li key={cert} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Portofolio & Kemitraan">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-accent mb-2">Institusi Pemerintahan:</p>
                      <div className="flex flex-wrap gap-2">
                        {daniBudiman.government.map((inst) => (
                          <span key={inst} className="text-xs bg-section-alt text-accent px-3 py-1 rounded-full border border-border">
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent mb-2">Mitra Strategis:</p>
                      <div className="flex flex-wrap gap-2">
                        {daniBudiman.partners.map((p) => (
                          <span key={p} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary/10">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Kerjasama</span>
          <h2 className="text-2xl font-bold text-accent mb-4">Work With Us</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Jadwalkan sesi coaching atau konsultasi dengan para founder dan coach profesional kami.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
