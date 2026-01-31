import { VideoOutline } from "../types";

export const pf04: VideoOutline = {
  episodeId: "pf-04",
  seriesId: "programming-fundamentals",
  title: "Hello World - Program Pertamamu",
  description: "Menulis program pertama 'Hello World' dalam 3 bahasa: Python, JavaScript, dan Java. Memahami struktur dasar program dan cara menjalankannya.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: GitHub & Codespaces sudah ready",
        "Hari ini: program pertama kamu!",
        "Tradisi 'Hello World' dalam programming",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Tradisi Hello World",
      talkingPoints: [
        "Sejak 1978 (buku 'The C Programming Language')",
        "Program pertama yang ditulis saat belajar bahasa baru",
        "Memastikan environment berjalan dengan benar",
        "Simple tapi penting!",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Hello World in Python",
      talkingPoints: [
        "Buat file baru: hello.py",
        "Ketik: print(\"Hello, World!\")",
        "Hanya 1 baris! Python sangat ringkas",
        "print() = function untuk menampilkan output",
        "String dalam tanda kutip (\" atau ')",
        "Run: python hello.py",
      ],
      notes: "Live coding: buat dan jalankan hello.py",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Hello World in JavaScript",
      talkingPoints: [
        "Buat file baru: hello.js",
        "Ketik: console.log(\"Hello, World!\");",
        "console.log() = function untuk output",
        "Semicolon (;) di akhir - optional tapi recommended",
        "Run: node hello.js",
        "Node.js = JavaScript di luar browser",
      ],
      notes: "Live coding: buat dan jalankan hello.js",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Hello World in Java",
      talkingPoints: [
        "Buat file baru: Hello.java (huruf kapital!)",
        "Java 25: syntax sudah disederhanakan!",
        "void main() - entry point program",
        "println() - function untuk output",
        "Tidak perlu class dan public static lagi",
        "Run: java Hello.java",
      ],
      notes: "Live coding: buat dan jalankan Hello.java",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Perbandingan 3 Bahasa",
      talkingPoints: [
        "Python: 1 baris",
        "JavaScript: 1 baris + semicolon",
        "Java 25: 3 baris (simplified!)",
        "Java dulu verbose, sekarang lebih simple",
        "Semua bahasa terus berkembang",
        "Konsep dasar tetap sama",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "24:00",
      title: "Challenge",
      talkingPoints: [
        "Ganti 'World' dengan nama kamu",
        "Coba di ketiga bahasa",
        "Experiment: hapus tanda kutip, lihat error-nya",
        "Belajar dari error adalah bagian dari programming!",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "26:00",
      title: "Save ke GitHub",
      talkingPoints: [
        "Sekarang kita simpan code ke GitHub",
        "Buka Terminal",
        "git add . (tambah semua file)",
        "git commit -m \"Hello World in 3 languages\"",
        "git push (upload ke GitHub)",
        "Cek di github.com - file sudah ada!",
      ],
      notes: "Screen recording: git workflow",
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Selamat! Program pertamamu sudah jadi",
        "Code sudah tersimpan di GitHub (portfolio!)",
        "Next episode: Komentar & struktur code",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Hello World",
      subtitle: "Programming Fundamentals - Episode 4",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  references: [
    {
      label: "Repository",
      url: "github.com/[username]/belajar-programming",
    },
  ],

  codeSnippets: [
    {
      code: `print("Hello, World!")`,
      title: "hello.py",
      showAtFrame: 7200, // 4:00
      hideAtFrame: 9000,
    },
    {
      code: `console.log("Hello, World!");`,
      title: "hello.js",
      showAtFrame: 18000, // 10:00
      hideAtFrame: 19800,
    },
    {
      code: `void main() {
    println("Hello, World!");
}`,
      title: "Hello.java",
      highlightLines: [2],
      showAtFrame: 28800, // 16:00
      hideAtFrame: 32400,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Print welcome message untuk Finance Tracker app",
    newCode: `# Python
print("Welcome to Finance Tracker!")

// JavaScript
console.log("Welcome to Finance Tracker!");

// Java
void main() {
    println("Welcome to Finance Tracker!");
}`,
    explanation: [
      "Ini adalah starting point dari aplikasi Finance Tracker",
      "Setiap program dimulai dengan output sederhana",
      "Kita akan tambahkan fitur di setiap episode",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan tentang print statement. Minta user untuk print berbagai pesan dengan variasi tanda kutip single dan double. Jangan beri jawaban.",
  },
};
