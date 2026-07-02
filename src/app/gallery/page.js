"use client";

import Image from "next/image";
import { useState } from "react";

const photos = Array.from({ length: 10 }, (_, i) => `/event-documentation/1 (${i + 1}).jpeg`).concat(
  Array.from({ length: 5 }, (_, i) => `/event-documentation/docs-1 (${i + 1}).jpeg`)
);

const categories = ["Semua", "Event", "Dokumentasi"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selected, setSelected] = useState(null);

  const filtered = activeCategory === "Semua"
    ? photos
    : activeCategory === "Event"
    ? photos.filter((_, i) => i < 10)
    : photos.filter((_, i) => i >= 10);

  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              Gallery
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">Foto Dokumentasi</h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Dokumentasi kegiatan coaching, seminar, workshop, dan event Transformer Coach Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-section-alt text-muted hover:text-accent border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted py-12">Belum ada foto untuk kategori ini.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setSelected(i)}
                  className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all focus:outline-none"
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected(selected === 0 ? filtered.length - 1 : selected - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected(selected === filtered.length - 1 ? 0 : selected + 1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-4xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[selected]}
              alt={`Dokumentasi ${selected + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
              {selected + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
