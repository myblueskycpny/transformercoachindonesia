"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const programLinks = [
  { href: "/business", label: "Life Coaching" },
  { href: "/business", label: "Business Coaching" },
  { href: "/business", label: "Corporate Training" },
  { href: "/business", label: "Seminar & Workshop" },
  { href: "/events", label: "Event & Sertifikasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpeg"
              alt="Transformer Coach Indonesia"
              width={52}
              height={52}
              className="rounded-xl object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm leading-tight text-accent">Transformer Coach</span>
              <span className="text-[10px] leading-tight text-muted">Indonesia</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              Tentang Kami
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProgramOpen(true)}
              onMouseLeave={() => setProgramOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors">
                Program Kami
                <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform ${programOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-xl shadow-lg py-2">
                  {programLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-muted hover:text-accent hover:bg-primary-bg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/articles"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/gallery"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              Dokumentasi
            </Link>
            <Link
              href="/faq"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-muted hover:text-accent rounded-lg hover:bg-primary-bg transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/ceo"
              className="px-4 py-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Coach
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-accent rounded-lg hover:bg-primary-bg">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">Tentang Kami</Link>

            <div>
              <button
                onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg"
              >
                Program Kami
                <svg className={`w-3.5 h-3.5 transition-transform ${mobileProgramOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProgramOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {programLinks.map((link) => (
                    <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/articles" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">Articles</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">FAQ</Link>
            <Link href="/gallery" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">Dokumentasi</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted rounded-lg hover:bg-primary-bg">Hubungi Kami</Link>

            <hr className="my-2 border-border" />
            <Link href="/ceo" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-semibold text-primary rounded-lg hover:bg-primary-bg">Coach</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-semibold text-white bg-primary text-center rounded-xl">Daftar Sekarang</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
