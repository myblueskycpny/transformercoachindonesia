# Transformer Coach Indonesia

Website resmi **Transformer Coach Indonesia** — perusahaan konsultan bisnis, transformasi diri, dan pelatihan profesional yang berbasis di Jakarta, Indonesia.

Dibangun dengan [Next.js](https://nextjs.org) (App Router), [React 19](https://react.dev), dan [Tailwind CSS v4](https://tailwindcss.com).

## Fitur

-   Landing page dengan hero, statistik, testimoni, layanan, artikel, dan mitra
-   Halaman About, Business, CEO/Founder, Articles, Events, Gallery, FAQ, Contact
-   Form kontak terintegrasi dengan [Formspree](https://formspree.io)
-   Floating WhatsApp CTA
-   Galeri foto dengan lightbox
-   Desain responsif (mobile-first)
-   SEO & metadata lengkap
-   Keamanan HTTP headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

## Persyaratan

-   **Node.js** v18.17 atau lebih baru
-   **npm**, **yarn**, **pnpm**, atau **bun**

## Setup & Menjalankan di Lokal

1.  **Clone repositori**

    ```bash
    git clone https://github.com/danidiamondland-cpu/transformercoachindonesia.git
    cd transformercoachindonesia
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

3.  **Jalankan development server**

    ```bash
    npm run dev
    # atau
    yarn dev
    # atau
    pnpm dev
    # atau
    bun dev
    ```

4.  Buka [http://localhost:3000](http://localhost:3000) di browser.

Halaman akan otomatis reload jika ada perubahan kode.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Struktur Folder

```
src/
├── app/
│   ├── about/page.js       # /about
│   ├── articles/page.js    # /articles
│   ├── business/page.js    # /business
│   ├── ceo/page.js         # /ceo
│   ├── contact/page.js     # /contact
│   ├── events/page.js      # /events
│   ├── faq/page.js         # /faq
│   ├── gallery/page.js     # /gallery
│   ├── globals.css         # Tailwind v4 entry
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── WhatsAppButton.js
public/
├── event-documentation/    # Foto dokumentasi event
├── founders/               # Foto CEO & founder
└── mitra/                  # Logo mitra/partner
```

## Konfigurasi Environment

Proyek ini **tidak memerlukan environment variables** untuk berjalan.

Untuk form kontoh, buka `src/app/contact/page.js` dan ganti endpoint Formspree:

```js
action="https://formspree.io/f/YOUR_FORM_ID"
```

## Deploy ke Vercel

### Opsi 1: Deploy Otomatis via Git

1. Push repositori ke GitHub/GitLab/Bitbucket.
2. Masuk ke [Vercel](https://vercel.com) dan klik **Add New → Project**.
3. Import repositori ini.
4. Vercel akan mendeteksi Next.js secara otomatis — **tidak perlu ubah pengaturan**.
5. Klik **Deploy**.

### Opsi 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Opsi 3: Deploy Langsung

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/danidiamondland-cpu/transformercoachindonesia)

## Tech Stack

| Teknologi            | Deskripsi                          |
| -------------------- | ---------------------------------- |
| Next.js 16           | React framework (App Router)       |
| React 19             | UI library                         |
| Tailwind CSS v4      | Utility-first CSS                  |
| Formspree            | Backend form handler               |
| Vercel               | Hosting & deployment               |

## Kontak

-   **Email:** info@transformercoachindonesia.com
-   **WhatsApp:** +62 819-5320-1881
-   **Website:** [transformercoachindonesia.com](https://transformercoachindonesia.com)
