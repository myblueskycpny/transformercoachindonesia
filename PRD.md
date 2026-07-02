# Product Requirements Document (PRD): Transformer Coach Indonesia

## 1. Ikhtisar Produk (Product Overview)
**Nama Proyek:** Transformer Coach Indonesia
**Domain:** `transformercoachindonesia.com`
**Tujuan:** Membangun platform digital untuk *personal branding* dan layanan *coaching* profesional. Website ini akan menampilkan profil CEO, layanan bisnis, jadwal seminar/event, artikel motivasi, serta menjadi sarana komunikasi bagi calon klien.

---

## 2. Arsitektur Informasi & Menu (Berdasarkan Kebutuhan)
Struktur menu website didesain sesuai dengan referensi yang diberikan:

1.  **Home:** Halaman utama yang merangkum *value proposition*, profil singkat, layanan unggulan, dan *call-to-action* (CTA) ke seminar atau kontak.
2.  **About Us:** Menjelaskan visi, misi, dan latar belakang berdirinya Transformer Coach Indonesia.
3.  **Our CEO:** Halaman profil khusus yang menyoroti rekam jejak, portofolio, dan pengalaman CEO sebagai pelatih/motivator.
4.  **Our Business:** Daftar layanan *coaching*, konsultasi, atau program korporat yang ditawarkan.
5.  **Frequently Asked Questions (FAQ):** Daftar pertanyaan yang sering diajukan beserta jawabannya.
6.  **Event Seminar:** *(Fokus Utama)* Katalog jadwal seminar, workshop, atau acara mendatang. Terdapat detail acara, lokasi, waktu, dan opsi pendaftaran/pemesanan tiket.
7.  **Articles Motivation:** Blog atau rubrik artikel yang berisi tulisan motivasi, tips pengembangan diri, dan *thought leadership*.
8.  **Contact:** Informasi kontak (Email, WhatsApp, Alamat) dan formulir interaktif untuk mengirim pesan.

---

## 3. Fase 1: Spesifikasi MVP (Minimum Viable Product)
Fokus pada MVP adalah **kecepatan peluncuran (speed to market)**, **biaya rendah**, dan **kemudahan pengelolaan konten**.

### Rekomendasi Tech Stack MVP:
*   **Frontend Framework:** **Next.js (React)** atau **Astro**. (Sangat cepat, SEO-friendly, dan modern).
*   **Styling:** **Tailwind CSS**. (Mempercepat proses *styling* UI yang responsif).
*   **Content Management System (CMS):** **Sanity.io** atau **Strapi** (Headless CMS). Memudahkan Anda dan tim untuk menulis *Articles Motivation* dan menambahkan *Event Seminar* tanpa perlu mengerti coding.
*   **Form / Contact:** **Formspree** atau **EmailJS**. (Formulir kontak langsung terkirim ke email Anda tanpa perlu membuat server *backend* khusus).
*   **Hosting:** **Vercel** atau **Netlify**. (Gratis untuk MVP, otomatis *deploy*, dan memiliki Global CDN bawaan yang sangat cepat).

> [!TIP]
> Dengan stack ini, website MVP Anda bisa selesai dalam 1-2 minggu, memiliki skor SEO 100/100, dan Anda tidak perlu membayar biaya server bulanan di awal (menggunakan *free tier*).

---

## 4. Fase 2: Skala Lanjutan (Proper, Scalable, Secure, Modular)
Ketika *traffic* membludak, bisnis membesar, dan Anda butuh sistem tiket seminar sendiri, arsitektur website harus di- *upgrade* ke level *Enterprise*.

### 4.1 Infrastruktur & Keamanan (Anti-Retas & Anti-DDoS)
*   **Web Application Firewall (WAF) & Anti-DDoS:** **Cloudflare (Pro/Enterprise)**. Cloudflare akan berada di barisan terdepan untuk menangkis serangan DDoS, memblokir *bot* berbahaya, mencegah SQL Injection, dan menyembunyikan IP server asli Anda.
*   **Cloud Provider:** **Amazon Web Services (AWS)** atau **Google Cloud Platform (GCP)**. Menggunakan layanan terkelola agar server otomatis bertambah jika *traffic* naik (Auto-Scaling).

### 4.2 Tech Stack Skala Lanjutan
*   **Frontend:** Tetap menggunakan **Next.js**, namun di-*hosting* di AWS Amplify atau Vercel Pro.
*   **Backend (Microservices/Modular):** **Node.js (NestJS)** atau **Go (Golang)**. Menggunakan arsitektur *microservices* sehingga fitur (misalnya: Modul Blog dan Modul Tiket Event) berjalan secara independen. Jika modul tiket *down*, website utama tetap menyala.
*   **Database:**
    *   **PostgreSQL** (Managed via AWS RDS) untuk data transaksional yang aman (user, transaksi tiket, jadwal event).
    *   **Redis** untuk *caching* (membuat loading data 10x lebih cepat).
*   **Payment Gateway Integration:** **Midtrans** atau **Xendit** untuk menerima pembayaran tiket *Event Seminar* secara otomatis via Virtual Account, Kartu Kredit, atau e-Wallet (GoPay/OVO).
*   **Authentication & Security:** 
    *   Implementasi **OAuth 2.0 / JWT** untuk sistem login peserta seminar.
    *   **Rate Limiting** pada API untuk mencegah *brute-force login* atau *spamming*.

### 4.3 Praktik Keamanan Standar Industri (Proper Security)
1.  **Enkripsi End-to-End:** Wajib HTTPS/TLS 1.3.
2.  **Backup Otomatis:** Database di-*backup* otomatis setiap hari (Point-in-time recovery).
3.  **Vulnerability Scanning:** Secara rutin mengecek *library* yang usang atau rentan menggunakan alat seperti SonarQube.
4.  **Content Security Policy (CSP):** Mengamankan *frontend* dari serangan *Cross-Site Scripting* (XSS).

---

## 5. Catatan dan Keputusan (User Notes & Decisions)
Berdasarkan diskusi awal, berikut adalah beberapa keputusan penting yang akan memandu proses eksekusi:

1.  **Arah Desain Visual:** Mengusung gaya *Modern, Estetik, dan Profesional* layaknya startup teknologi (penggunaan *whitespace* yang baik, tipografi modern, animasi mikro yang halus, dan palet warna yang premium).
2.  **Status Domain:** Domain `transformercoachindonesia.com` **sudah dibeli** dan siap digunakan untuk proses deployment.
3.  **Pendekatan Eksekusi:** Kita akan mulai membangun **Versi MVP**, namun arsitektur kodenya dirancang dengan prinsip *forward-compatible*. Artinya, struktur proyek Next.js akan dibuat modular sehingga saat beralih ke *Phase 2* (Advanced Architecture), kita tidak perlu membuat ulang sistem dari nol, melainkan hanya menambahkan *microservices* dan integrasi yang dibutuhkan.
