import { VideoOutline } from "../types";

export const pf12: VideoOutline = {
  episodeId: "pf-12",
  seriesId: "programming-fundamentals",
  title: "If-Else - Membuat Keputusan",
  description: "Mempelajari conditional statements untuk membuat program yang bisa mengambil keputusan berdasarkan kondisi.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: comparison dan logical operators",
        "Hari ini: if-else statements",
        "Program yang bisa 'berpikir'",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Conditional?",
      talkingPoints: [
        "Program mengambil keputusan berdasarkan kondisi",
        "Analogi: lampu lalu lintas",
        "Jika merah → berhenti",
        "Jika hijau → jalan",
        "Cabang dalam alur program",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "If-Else di Python",
      talkingPoints: [
        "if kondisi: (dengan colon)",
        "Indentation WAJIB - bagian dari syntax",
        "else: untuk kondisi sebaliknya",
        "Tidak perlu parentheses",
        "Tidak perlu curly braces",
      ],
      notes: "Live coding: if-else Python",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "If-Else di JavaScript",
      talkingPoints: [
        "if (kondisi) { }",
        "Parentheses WAJIB untuk kondisi",
        "Curly braces untuk block code",
        "else { } untuk kondisi sebaliknya",
        "Indentation untuk readability",
      ],
      notes: "Live coding: if-else JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "If-Else di Java",
      talkingPoints: [
        "Sama dengan JavaScript",
        "if (kondisi) { }",
        "Harus dalam method/function",
        "Semicolon setelah statements",
      ],
      notes: "Live coding: if-else Java",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Perbandingan Syntax",
      talkingPoints: [
        "Python: no parens, colon, indentation",
        "JS/Java: parens, curly braces",
        "Python paling ringkas",
        "JS/Java lebih explicit",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "24:00",
      title: "Common Mistakes",
      talkingPoints: [
        "= vs == (assignment vs comparison)",
        "Python: lupa colon",
        "Python: indentation salah",
        "JS: lupa curly braces",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Cek lulus/tidak lulus (nilai >= 60)",
        "Di ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: if-else untuk keputusan",
        "Next episode: else-if untuk multiple kondisi",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "If-Else Statements",
      subtitle: "Programming Fundamentals - Episode 12",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python If-Else
umur = 18

if umur >= 17:
    print("Boleh buat SIM")
else:
    print("Belum boleh buat SIM")

# Dengan logical operator
punya_ktp = True
if umur >= 17 and punya_ktp:
    print("Syarat lengkap!")`,
      title: "if_else.py",
      highlightLines: [4, 5, 6, 7, 11, 12],
      showAtFrame: 9000,
      hideAtFrame: 21600,
    },
    {
      code: `// JavaScript If-Else
let umur = 18;

if (umur >= 17) {
    console.log("Boleh buat SIM");
} else {
    console.log("Belum boleh buat SIM");
}

// Dengan logical operator
let punyaKtp = true;
if (umur >= 17 && punyaKtp) {
    console.log("Syarat lengkap!");
}`,
      title: "if_else.js",
      highlightLines: [4, 5, 6, 7, 12, 13],
      showAtFrame: 21600,
      hideAtFrame: 32400,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Cek saldo sebelum transaksi pengeluaran",
    starterCode: `saldo = Decimal("1000000")
pengeluaran = Decimal("500000")`,
    newCode: `from decimal import Decimal

saldo = Decimal("1000000")

# Cek saldo sebelum pengeluaran
pengeluaran = Decimal("1500000")

if saldo >= pengeluaran:
    saldo -= pengeluaran
    print(f"Transaksi berhasil!")
    print(f"Saldo tersisa: Rp {saldo:,.2f}")
else:
    kekurangan = pengeluaran - saldo
    print(f"Saldo tidak cukup!")
    print(f"Kekurangan: Rp {kekurangan:,.2f}")`,
    explanation: [
      "if-else untuk cek saldo sebelum transaksi",
      "Mencegah saldo negatif",
      "Memberikan feedback yang informatif ke user",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan if-else. Minta user membuat program dengan kondisi sederhana seperti cek genap/ganjil, positif/negatif, lulus/tidak lulus. Jangan beri jawaban.",
  },
};
