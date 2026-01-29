import { VideoOutline } from "../types";

export const pf02: VideoOutline = {
  episodeId: "pf-02",
  seriesId: "programming-fundamentals",
  title: "Setup GitHub & Codespaces",
  description: "Membuat akun GitHub, repository pertama, dan setup development environment menggunakan GitHub Codespaces. Tidak perlu install apapun di komputer!",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap episode sebelumnya",
        "Hari ini: setup environment untuk coding",
        "Good news: tidak perlu install apapun!",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Kenapa GitHub?",
      talkingPoints: [
        "Portfolio code kamu (seperti LinkedIn untuk programmer)",
        "Kolaborasi dengan developer lain",
        "Standar industri - hampir semua perusahaan pakai Git",
        "Gratis! Ada GitHub Education untuk pelajar",
        "Bonus: GitHub Copilot AI assistant",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "06:00",
      title: "Buat Akun GitHub",
      talkingPoints: [
        "Buka github.com",
        "Klik Sign Up",
        "Masukkan email, password, username",
        "Username = identitas kamu di dunia programming",
        "Verifikasi email",
        "Setup profile (foto, bio)",
      ],
      notes: "Screen recording: proses signup step by step",
      showOnScreen: "demo",
    },
    {
      timestamp: "10:00",
      title: "Apa Itu Repository?",
      talkingPoints: [
        "Repository = folder project di cloud",
        "Menyimpan semua file code kamu",
        "Version control: bisa lihat history perubahan",
        "Public vs Private repository",
        "Public: semua orang bisa lihat (portfolio)",
        "Private: hanya kamu yang bisa akses",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "13:00",
      title: "Buat Repository Pertama",
      talkingPoints: [
        "Klik tombol '+' → New repository",
        "Nama: 'belajar-programming'",
        "Description: 'Belajar programming dengan Python, Java, dan JavaScript'",
        "Pilih Public (untuk portfolio)",
        "Centang 'Add README file'",
        "Klik Create repository",
      ],
      notes: "Screen recording: buat repository baru",
      showOnScreen: "demo",
    },
    {
      timestamp: "17:00",
      title: "Apa Itu GitHub Codespaces?",
      talkingPoints: [
        "VS Code di browser - IDE professional",
        "Semua bahasa sudah terinstall (Python, Java, Node.js)",
        "Tidak perlu install apapun di komputer kamu",
        "Bisa diakses dari mana saja (sekolah, warnet, HP)",
        "Free tier: 60 jam/bulan (lebih dari cukup)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "20:00",
      title: "Launch Codespaces",
      talkingPoints: [
        "Buka repository yang baru dibuat",
        "Klik tombol hijau 'Code'",
        "Tab 'Codespaces' → Create codespace on main",
        "Tunggu loading (pertama kali agak lama)",
        "Welcome to VS Code in browser!",
      ],
      notes: "Screen recording: launch codespaces",
      showOnScreen: "demo",
    },
    {
      timestamp: "22:00",
      title: "Tour Interface Codespaces",
      talkingPoints: [
        "File Explorer (kiri): folder dan file",
        "Editor (tengah): tulis code di sini",
        "Terminal (bawah): jalankan command",
        "Extensions (kiri): tambah fitur",
        "Source Control (kiri): Git integration",
      ],
      notes: "Screen recording: tour interface dengan highlight",
      showOnScreen: "demo",
    },
    {
      timestamp: "24:00",
      title: "Test Environment",
      talkingPoints: [
        "Buka Terminal (Ctrl+` atau menu Terminal)",
        "Ketik: python --version → Python 3.x ✓",
        "Ketik: node --version → Node.js ✓",
        "Ketik: java --version → Java ✓",
        "Semua sudah ready! Tidak perlu install apapun",
      ],
      notes: "Screen recording: test command di terminal",
      showOnScreen: "demo",
    },
    {
      timestamp: "27:00",
      title: "Save & Stop Codespaces",
      talkingPoints: [
        "Auto-save: perubahan otomatis tersimpan",
        "Tapi perlu 'push' ke GitHub (akan dipelajari)",
        "Stop Codespaces saat tidak dipakai",
        "Klik nama Codespaces di kiri bawah → Stop Codespace",
        "Hemat quota free tier",
        "Next time: Codespaces → resume",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: GitHub account + Codespaces ready",
        "Homework: explore interface Codespaces",
        "Next episode: AI untuk Belajar Programming",
        "Jangan lupa subscribe!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Setup GitHub & Codespaces",
      subtitle: "Programming Fundamentals - Episode 2",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "Free: 60 jam/bulan",
      subtitle: "GitHub Codespaces",
      showAtFrame: 30600, // 17:00
      hideAtFrame: 31500,
    },
  ],

  references: [
    {
      label: "GitHub Signup",
      url: "github.com/signup",
    },
    {
      label: "GitHub Codespaces",
      url: "github.com/features/codespaces",
    },
    {
      label: "GitHub Education",
      url: "education.github.com",
    },
  ],
};
