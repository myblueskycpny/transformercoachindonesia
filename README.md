# Transformer Coach Indonesia

Website resmi **Transformer Coach Indonesia** — perusahaan konsultan bisnis, transformasi diri, dan pelatihan profesional berbasis di Jakarta, Indonesia.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Formspree · Vercel

---

## Panduan Lengkap: Clone → Setup → Deploy

### 1. Clone

```bash
git clone https://github.com/myblueskycpny/transformercoachindonesia.git
cd transformercoachindonesia
```

### 2. Install

```bash
npm install
```

Atau dengan package manager lain: `yarn`, `pnpm`, `bun`.

### 3. Jalankan (Lokal)

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) — setiap perubahan akan reload otomatis.

### 4. Production Build (Lokal)

```bash
npm run build
npm start
```

### 5. Linting

```bash
npm run lint
```

### 6. Konfigurasi Form Kontak (Opsional)

Buka `src/app/contact/page.js` dan ganti `your-form-id` dengan ID Formspree kamu:

```js
action="https://formspree.io/f/YOUR_FORM_ID"
```

> **Catatan:** Tidak ada environment variable yang wajib diisi. Proyek ini zero-env.

---

### 7. Deploy ke Vercel

#### Opsi A — Via Git (Rekomendasi)

1. Push repo ke GitHub
2. Buka [vercel.com/new](https://vercel.com/new)
3. Import repo `myblueskycpny/transformercoachindonesia`
4. **Framework preset:** Next.js (terdeteksi otomatis)
5. Klik **Deploy** — selesai.

#### Opsi B — Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

#### Opsi C — Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/myblueskycpny/transformercoachindonesia)

---

## Struktur Proyek

```
src/
├── app/               # App Router pages
│   ├── about/page.js
│   ├── articles/page.js
│   ├── business/page.js
│   ├── ceo/page.js
│   ├── contact/page.js
│   ├── events/page.js
│   ├── faq/page.js
│   ├── gallery/page.js
│   ├── layout.js      # Root layout (Navbar + Footer + WA)
│   ├── page.js        # Homepage
│   └── globals.css    # Tailwind v4
└── components/
    ├── Navbar.js
    ├── Footer.js
    └── WhatsAppButton.js
```

## Halaman

| Route        | Halaman                  |
| ------------ | ------------------------ |
| `/`          | Home (hero, stats, testimoni, layanan, artikel, mitra) |
| `/about`     | Visi, misi, nilai, program |
| `/business`  | 6 layanan bisnis         |
| `/ceo`       | Profil CEO & COO         |
| `/articles`  | 6 artikel motivasi       |
| `/events`    | 6 event + galeri foto    |
| `/gallery`   | Galeri foto + lightbox   |
| `/faq`       | 8 FAQ accordion          |
| `/contact`   | Form kontak + info       |
