import { VideoOutline } from "../types";

export const pf13: VideoOutline = {
  episodeId: "pf-13",
  seriesId: "programming-fundamentals",
  title: "Else-If & Nested Conditions",
  description: "Mempelajari multiple conditions dengan else-if dan switch-case. Juga nested conditions untuk logika kompleks.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: if-else untuk 2 pilihan",
        "Bagaimana kalau lebih dari 2?",
        "Hari ini: else-if dan switch",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Multiple Conditions",
      talkingPoints: [
        "Contoh: grade A, B, C, D, E",
        "Tidak cukup if-else saja",
        "Perlu else-if chain",
        "Dicek berurutan dari atas",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Else-If di Python",
      talkingPoints: [
        "elif (bukan else if)",
        "Bisa banyak elif",
        "else di akhir untuk default",
        "Urutan penting! Cek dari paling spesifik",
      ],
      notes: "Live coding: grade converter Python",
      showOnScreen: "code",
    },
    {
      timestamp: "11:00",
      title: "Else-If di JavaScript & Java",
      talkingPoints: [
        "else if (dua kata)",
        "Syntax sama untuk keduanya",
        "Curly braces untuk tiap block",
      ],
      notes: "Live coding: grade converter JS",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Switch-Case",
      talkingPoints: [
        "Alternatif untuk banyak kondisi",
        "Lebih cocok untuk exact match",
        "JavaScript dan Java punya switch",
        "Python 3.10+: match-case",
        "break penting di JS/Java!",
      ],
      notes: "Live coding: day of week dengan switch",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Nested Conditions",
      talkingPoints: [
        "If di dalam if",
        "Untuk logika yang lebih kompleks",
        "Hati-hati: jangan terlalu dalam",
        "Max 2-3 level, lebih = refactor",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Best Practices",
      talkingPoints: [
        "Early return untuk kurangi nesting",
        "Guard clauses di awal",
        "Readable > clever",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Konversi nilai ke grade (A/B/C/D/E)",
        "Di ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: else-if dan switch",
        "Next episode: Loops - pengulangan!",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Else-If & Switch",
      subtitle: "Programming Fundamentals - Episode 13",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Grade Converter
nilai = 85

if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
elif nilai >= 60:
    grade = "D"
else:
    grade = "E"

print(f"Nilai {nilai} = Grade {grade}")`,
      title: "grade.py",
      highlightLines: [4, 6, 8, 10, 12],
      showAtFrame: 9000,
      hideAtFrame: 19800,
    },
    {
      code: `// JavaScript Switch-Case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    // ... dst
    default:
        dayName = "Invalid";
}

console.log(dayName);  // "Rabu"`,
      title: "switch.js",
      highlightLines: [6, 7, 8, 16, 17],
      showAtFrame: 28800,
      hideAtFrame: 39600,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Kategorisasi transaksi: pemasukan, pengeluaran, atau transfer",
    starterCode: `if saldo >= pengeluaran:
    saldo -= pengeluaran`,
    newCode: `from decimal import Decimal

saldo = Decimal("1000000")

# Menu transaksi dengan else-if
print("Pilih jenis transaksi:")
print("1. Pemasukan")
print("2. Pengeluaran")
print("3. Transfer")

pilihan = "2"  # Simulasi input user
jumlah = Decimal("500000")

if pilihan == "1":
    # Pemasukan
    saldo += jumlah
    print(f"Pemasukan Rp {jumlah:,.2f} berhasil")
elif pilihan == "2":
    # Pengeluaran - perlu cek saldo
    if saldo >= jumlah:
        saldo -= jumlah
        print(f"Pengeluaran Rp {jumlah:,.2f} berhasil")
    else:
        print("Saldo tidak cukup!")
elif pilihan == "3":
    # Transfer - perlu cek saldo + biaya admin
    biaya_admin = Decimal("2500")
    total = jumlah + biaya_admin
    if saldo >= total:
        saldo -= total
        print(f"Transfer Rp {jumlah:,.2f} + admin Rp {biaya_admin:,.2f}")
    else:
        print("Saldo tidak cukup untuk transfer + biaya admin")
else:
    print("Pilihan tidak valid!")

print(f"Saldo akhir: Rp {saldo:,.2f}")`,
    explanation: [
      "elif untuk multiple choice menu",
      "Nested if untuk validasi dalam setiap pilihan",
      "else untuk handle pilihan invalid",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan else-if dan nested conditions. Minta user membuat program dengan multiple conditions seperti grade converter atau menu selection. Jangan beri jawaban.",
  },
};
