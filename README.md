# HUT RI 81 Kedep - Landing Page Kemerdekaan 🇮🇩

Selamat datang di repositori resmi **Landing Page Peringatan Hari Kemerdekaan Republik Indonesia Ke-81 (HUT RI 81)** untuk **Kp. Kedep, RT 01/RW 19, Desa Tlajung Udik, Gunungputri**. 

Proyek ini dibangun untuk mempublikasikan rangkaian acara, jadwal lomba, struktur panitia, serta informasi penting lainnya dengan desain yang elegan, modern, dan sangat interaktif. Mengusung tema kemerdekaan *"Pemuda Berkarya Warga Bersatu Indonesia Maju"*.

---

## 🌟 Fitur Utama

- **Desain Patriotik & Modern:** Menggunakan perpaduan warna Merah Putih (Indo-Red & Indo-White) dipadukan dengan *Glassmorphism UI*.
- **Responsive Navigation:** Navbar dinamis yang menyesuaikan efek transparansi ketika dilakukan *scroll*, serta menu *hamburger* yang optimal di perangkat *mobile*.
- **Hero Section Animatif:** Heading menggunakan animasi halus dari Framer Motion.
- **Katalog Lomba Terkategori:** Penggunaan desain tab/grid khusus untuk memudahkan warga melihat perlombaan berdasarkan kategori usia (Balita, Anak-anak, Remaja, Ibu-ibu, Bapak-bapak).
- **Jadwal Interaktif (Timeline):** Rancangan *rundown* acara vertikal dengan indikator status acara dari pagi hingga penutupan.
- **Struktur Kepanitiaan (Org Chart):** Representasi visual hierarki panitia yang dilengkapi fitur avatar otomatis atau *fallback* inisial huruf.
- **Dukungan Kustomisasi Foto:** Sangat mudah untuk mengubah dan menambahkan gambar dokumentasi warga secara lokal.

---

## 🛠️ Tech Stack

Aplikasi ini dibangun menggunakan arsitektur *Front-End* modern:
- **[React 19](https://react.dev/)** - Library UI Core
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS Framework untuk penataan gaya yang sangat cepat
- **[Framer Motion](https://www.framer.com/motion/)** - Library untuk transisi dan animasi kompleks yang mulus
- **[Lucide React](https://lucide.dev/)** - Koleksi ikon SVG yang konsisten dan rapi

---

## 🚀 Panduan Instalasi Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di mesin Anda.

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** (rekomendasi versi 18.x atau terbaru) dan **npm** di komputer Anda.

### Langkah-langkah

1. **Clone Repositori**
   ```bash
   git clone https://github.com/username-anda/panitia-01.git
   cd panitia-01
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara otomatis di `http://localhost:5173`. Perubahan kode akan dimuat secara *real-time* (HMR).

4. **Build untuk Production**
   Jika Anda ingin mempublikasikan situs ini, jalankan perintah *build*:
   ```bash
   npm run build
   ```
   Hasil dari kompilasi akan tersimpan di dalam folder `dist/`.

---

## 📁 Struktur Direktori

```text
panitia-01/
├── public/
│   └── images/               # Tempat menyimpan foto kustom Anda (perayaan, lomba, kepanitiaan)
├── src/
│   ├── components/           # Komponen UI Reusable
│   │   ├── About.jsx         # Section Filosofi & Galeri Warga
│   │   ├── Footer.jsx        # Area Kontak, Copyright, dan Tautan Eksternal (WA, IG)
│   │   ├── Hero.jsx          # Banner Atas
│   │   ├── Lomba.jsx         # Daftar Lomba (Tabbed Interface)
│   │   ├── Navbar.jsx        # Navigasi Atas
│   │   ├── Panitia.jsx       # Bagan Struktur Organisasi Panitia
│   │   └── Schedule.jsx      # Rundown/Timeline Acara
│   ├── App.jsx               # Entry Point Komponen Utama
│   ├── index.css             # Konfigurasi Tailwind v4 & Variabel Tema
│   └── main.jsx              # Render React DOM
└── package.json              # Konfigurasi dan skrip NPM
```

---

## 🎨 Kustomisasi Visual

### 1. Mengubah Gambar Seksi Tentang
Cukup ganti atau masukkan foto ke direktori `public/images/` dengan rincian nama berikut:
- `foto-perayaan.jpg`
- `foto-gotongroyong.jpg`
- `foto-lomba.jpg`
- `foto-kebersamaan.jpg`

### 2. Mengubah Foto Panitia
Untuk memunculkan foto wajah panitia, simpan foto berbentuk rasio persegi ke dalam folder `public/images/` dengan penamaan:
`panitia-[nama_kecil_spasi_diganti_strip].jpg`
*Contoh:* Untuk nama panitia **Yusuf**, nama *file* harus `panitia-yusuf.jpg`. Jika *file* foto belum ada, web otomatis akan memunculkan alfabet awal nama mereka (Contoh: "Y").

---

## 🤝 Komite & Pemuda Kedep

Proyek ini tidak akan berjalan tanpa kontribusi aktif dari **Pemuda RT 01/RW 19 Kp. Kedep**. 
Jika Anda memiliki pertanyaan seputar donasi atau sponsor, jangan ragu untuk menghubungi melalui:
- **WhatsApp:** +62 838-3411-0545
- **Instagram:** [@pemuda.pemudi.cihuyy](https://www.instagram.com/pemuda.pemudi.cihuyy)

---
*Dibuat dengan semangat kemerdekaan 🇮🇩 © 2026 Pemuda RT 01/RW 019.*
