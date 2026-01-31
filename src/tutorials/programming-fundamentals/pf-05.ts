import { VideoOutline } from "../types";

export const pf05: VideoOutline = {
  episodeId: "pf-05",
  seriesId: "programming-fundamentals",
  title: "Komentar & Struktur Kode",
  description: "Belajar menulis komentar dalam code dan memahami struktur kode yang rapi. Komentar membantu kita dan orang lain memahami code.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: Hello World di 3 bahasa",
        "Hari ini: komentar dan struktur code",
        "Kenapa ini penting?",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Komentar?",
      talkingPoints: [
        "Catatan untuk manusia, diabaikan oleh komputer",
        "Menjelaskan 'kenapa' bukan 'apa'",
        "Membantu diri sendiri di masa depan",
        "Membantu orang lain yang baca code kamu",
        "Code ditulis sekali, dibaca berkali-kali",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Komentar di Python",
      talkingPoints: [
        "Single line: # (hash/pagar)",
        "Multi-line: \"\"\" triple quotes \"\"\"",
        "Docstring: dokumentasi function/class",
        "Contoh penggunaan yang baik",
      ],
      notes: "Live coding: berbagai jenis komentar Python",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Komentar di JavaScript",
      talkingPoints: [
        "Single line: // (double slash)",
        "Multi-line: /* ... */",
        "JSDoc: /** ... */ untuk dokumentasi",
        "Sama dengan banyak bahasa lain (C, C++, Java)",
      ],
      notes: "Live coding: berbagai jenis komentar JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "15:00",
      title: "Komentar di Java",
      talkingPoints: [
        "Single line: // (sama dengan JS)",
        "Multi-line: /* ... */",
        "Javadoc: /** ... */ untuk dokumentasi API",
        "Javadoc bisa generate HTML documentation",
      ],
      notes: "Live coding: berbagai jenis komentar Java",
      showOnScreen: "code",
    },
    {
      timestamp: "20:00",
      title: "Best Practices Komentar",
      talkingPoints: [
        "Jelaskan 'kenapa' bukan 'apa'",
        "BAD: // tambah 1 ke counter",
        "GOOD: // increment untuk tracking loop iteration",
        "Jangan over-comment obvious code",
        "Update komentar saat code berubah",
        "Self-documenting code > banyak komentar",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "23:00",
      title: "Struktur Kode yang Rapi",
      talkingPoints: [
        "Indentation: spasi di awal baris",
        "Python: WAJIB! Bagian dari syntax",
        "JS/Java: convention, tapi sangat penting",
        "Consistent: pilih 2 atau 4 spasi, stick with it",
        "Naming: variabel dan function yang jelas",
        "camelCase vs snake_case vs PascalCase",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "26:00",
      title: "Naming Conventions",
      talkingPoints: [
        "Python: snake_case (nama_variabel)",
        "JavaScript: camelCase (namaVariabel)",
        "Java: camelCase untuk variabel, PascalCase untuk class",
        "Deskriptif: userAge bukan x",
        "Konsisten dalam satu project",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Tambahkan komentar ke Hello World",
        "Jelaskan apa yang dilakukan setiap baris",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: komentar dan struktur",
        "Next episode: Variables - menyimpan data",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Komentar & Struktur Kode",
      subtitle: "Programming Fundamentals - Episode 5",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Ini komentar satu baris

"""
Ini komentar
multiple baris (docstring)
"""

def greet(name):
    """
    Function untuk menyapa user.
    Parameter: name (string)
    Return: greeting message
    """
    return f"Hello, {name}!"`,
      title: "comments.py",
      highlightLines: [1, 3, 4, 5, 6, 9, 10, 11, 12],
      showAtFrame: 9000,
      hideAtFrame: 14400,
    },
    {
      code: `// Ini komentar satu baris

/*
 * Ini komentar
 * multiple baris
 */

/**
 * Function untuk menyapa user
 * @param {string} name - Nama user
 * @returns {string} Greeting message
 */
function greet(name) {
    return \`Hello, \${name}!\`;
}`,
      title: "comments.js",
      highlightLines: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12],
      showAtFrame: 18000,
      hideAtFrame: 23400,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Tambahkan komentar untuk menjelaskan struktur Finance Tracker",
    starterCode: `print("Welcome to Finance Tracker!")`,
    newCode: `# Finance Tracker App
# Aplikasi sederhana untuk mencatat pemasukan dan pengeluaran
# Dibuat untuk belajar programming fundamentals

print("Welcome to Finance Tracker!")
# TODO: Akan ditambahkan fitur-fitur berikut:
# - Input pemasukan
# - Input pengeluaran
# - Hitung saldo`,
    explanation: [
      "Komentar menjelaskan tujuan aplikasi",
      "TODO comments untuk planning fitur",
      "Struktur yang jelas memudahkan development",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan tentang komentar di Python, JavaScript, dan Java. Minta user menulis komentar yang menjelaskan 'kenapa' bukan 'apa'. Jangan beri jawaban.",
  },
};
