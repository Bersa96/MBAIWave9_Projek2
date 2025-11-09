# Gemini AI Chatbot

Aplikasi web chatbot sederhana yang menggunakan Google Gemini API. Proyek ini memiliki backend yang dibangun dengan Node.js dan Express, serta frontend yang dibuat menggunakan Vanilla JavaScript.

## Fitur

- Antarmuka chat yang bersih, sederhana, dan responsif.
- Interaksi real-time dengan Google Gemini API untuk mendapatkan respons cerdas.
- Backend Express yang efisien untuk menangani permintaan chat.
- Frontend ringan yang dibangun sepenuhnya dengan Vanilla JavaScript (tanpa framework).
- Menampilkan status "Thinking..." saat bot sedang memproses respons.
- Menjaga riwayat percakapan untuk memberikan konteks pada model AI.
- Penanganan error yang informatif jika gagal mendapatkan respons dari server.

## Teknologi yang Digunakan

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: Google Gemini API via library `@google/genai`

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:

- Node.js (versi 18.x atau yang lebih baru direkomendasikan)
- npm (biasanya terinstal bersama Node.js)

Anda juga memerlukan **API Key** dari Google. Anda bisa mendapatkannya secara gratis dari Google AI Studio.

## Instalasi dan Setup

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek ini di lingkungan lokal Anda.

1.  **Clone Repositori**

    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

    _(Ganti `https://github.com/username/repo-name.git` dengan URL repositori Anda)_

2.  **Instal Dependensi**

    Jalankan perintah berikut di terminal untuk menginstal semua dependensi yang dibutuhkan oleh server Node.js.

    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variable**

    Buat file baru bernama `.env` di direktori root proyek. Salin dan tempel konten berikut ke dalamnya:

    ```env
    GOOGLE_API_KEY="GANTI_DENGAN_API_KEY_ANDA"
    ```

    Ganti `GANTI_DENGAN_API_KEY_ANDA` dengan API Key Google Gemini yang telah Anda peroleh.

## Menjalankan Aplikasi

1.  **Jalankan Server**

    Gunakan perintah berikut untuk memulai server Express:

    ```bash
    npm start
    ```

    Server akan berjalan di `http://localhost:3000`.

2.  **Buka Aplikasi di Browser**

    Buka browser web Anda dan kunjungi alamat http://localhost:3000. Anda akan melihat antarmuka chatbot dan bisa langsung mulai berinteraksi.

## Struktur Proyek

```
gemini-chatbot-api/
├── public/
│   ├── index.html      # Struktur HTML halaman chat
│   ├── style.css       # Styling untuk antarmuka chat
│   └── script.js       # Logika frontend untuk interaksi dan DOM
├── .env                # Menyimpan variabel lingkungan (API Key)
├── index.js            # File utama server Express.js
├── package.json        # Daftar dependensi dan skrip proyek
└── README.md           # Dokumentasi proyek
```

## API Endpoint

Proyek ini mengekspos satu endpoint utama untuk fungsionalitas chat.

### `POST /api/chat`

Menerima riwayat percakapan dan mengembalikan respons yang dihasilkan oleh model Gemini.

- **Request Body**:

  ```json
  {
    "message": [
      { "role": "user", "text": "<pesan_pengguna>" },
      { "role": "model", "text": "<respons_sebelumnya>" }
    ]
  }
  ```

- **Success Response (200 OK)**:
  ```json
  {
    "result": "<respons_dari_gemini>"
  }
  ```
