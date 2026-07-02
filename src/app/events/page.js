import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  ...Array.from({ length: 10 }, (_, i) => ({
    src: `/event-documentation/1 (${i + 1}).jpeg`,
    alt: `Event Documentation ${i + 1}`,
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    src: `/event-documentation/docs-1 (${i + 1}).jpeg`,
    alt: `Event Documentation ${i + 1}`,
  })),
];

const events = [
  {
    title: "Financial Freedom Workshop",
    date: "15 Juli 2026",
    time: "09:00 - 16:00 WIB",
    location: "Jakarta Convention Center",
    type: "Workshop",
    desc: "Workshop intensif tentang strategi mencapai kebebasan finansial melalui perencanaan keuangan, investasi, dan mindset transformation.",
    price: "Rp 350.000",
  },
  {
    title: "Leadership Transformation Seminar",
    date: "22 Agustus 2026",
    time: "08:00 - 17:00 WIB",
    location: "Hotel Indonesia Kempinski, Jakarta",
    type: "Seminar",
    desc: "Seminar kepemimpinan untuk eksekutif dan manajer yang ingin mengembangkan kemampuan memimpin tim dan organisasi.",
    price: "Rp 500.000",
  },
  {
    title: "Life Coaching Certification",
    date: "5-7 September 2026",
    time: "09:00 - 17:00 WIB",
    location: "Bandung",
    type: "Certification",
    desc: "Program sertifikasi life coaching 3 hari untuk Anda yang ingin menjadi coach profesional bersertifikat.",
    price: "Rp 2.500.000",
  },
  {
    title: "Mindset Reset Bootcamp",
    date: "10 Oktober 2026",
    time: "08:00 - 18:00 WIB",
    location: "Puncak, Bogor",
    type: "Bootcamp",
    desc: "Bootcamp 1 hari untuk mereset mindset, mengatasi mental blocks, dan membangun kebiasaan baru yang produktif.",
    price: "Rp 450.000",
  },
  {
    title: "Corporate Training: Team Building",
    date: "20 November 2026",
    time: "09:00 - 16:00 WIB",
    location: "Surabaya",
    type: "Training",
    desc: "Program team building untuk perusahaan yang ingin memperkuat kerjasama tim dan meningkatkan produktivitas.",
    price: "Hubungi Kami",
  },
  {
    title: "Year-End Reflection & Planning",
    date: "12 Desember 2026",
    time: "09:00 - 15:00 WIB",
    location: "Online (Zoom)",
    type: "Webinar",
    desc: "Webinar refleksi akhir tahun dan perencanaan tujuan untuk menyambut tahun baru dengan strategi yang jelas.",
    price: "Free",
  },
];

export default function Events() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Event
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Event Seminar</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Jadwal seminar, workshop, dan acara mendatang. Daftar sekarang dan mulai perjalanan transformasi Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event) => (
              <div key={event.title} className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all">
                <div className="h-2 bg-gradient-to-r from-primary to-primary-light" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded">
                      {event.type}
                    </span>
                    <span className="text-xs font-semibold text-accent">{event.price}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {event.desc}
                  </p>
                  <div className="space-y-2 text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    Register Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Dokumentasi</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Galeri Event</h2>
            <p className="text-muted leading-relaxed">
              Dokumentasi kegiatan seminar, workshop, dan coaching yang telah kami selenggarakan.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="group relative rounded-xl overflow-hidden bg-zinc-100 aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
