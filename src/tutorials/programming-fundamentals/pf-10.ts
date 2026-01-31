import { VideoOutline } from "../types";

export const pf10: VideoOutline = {
  episodeId: "pf-10",
  seriesId: "programming-fundamentals",
  title: "Arithmetic & Assignment Operators",
  description: "Mempelajari operator matematika dan assignment. Termasuk modulo, increment/decrement, dan operator shorthand.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: type conversion",
        "Hari ini: operator - simbol untuk operasi",
        "Matematika dasar dalam programming",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Arithmetic Operators",
      talkingPoints: [
        "+ (tambah), - (kurang), * (kali), / (bagi)",
        "Sama di semua bahasa!",
        "% modulo (sisa bagi) - sangat berguna",
        "** power (Python) vs Math.pow (JS/Java)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "06:00",
      title: "Modulo Operator (%)",
      talkingPoints: [
        "Mengembalikan sisa pembagian",
        "10 % 3 = 1 (10 dibagi 3 = 3 sisa 1)",
        "Use case: cek genap/ganjil (n % 2)",
        "Use case: wrap around (jam, index array)",
        "Use case: kelipatan (n % 5 == 0)",
      ],
      notes: "Live coding: contoh modulo",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Integer Division",
      talkingPoints: [
        "Python: // untuk integer division",
        "7 // 2 = 3 (bukan 3.5)",
        "JavaScript: Math.floor(7 / 2)",
        "Java: 7 / 2 = 3 (int / int = int)",
        "Hati-hati dengan pembagian!",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Assignment Operators",
      talkingPoints: [
        "= assignment dasar",
        "+= -= *= /= shorthand",
        "x += 5 sama dengan x = x + 5",
        "Lebih singkat dan readable",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "20:00",
      title: "Increment & Decrement",
      talkingPoints: [
        "++ dan -- (JavaScript & Java only)",
        "i++ sama dengan i = i + 1",
        "Python tidak punya, pakai i += 1",
        "Pre vs Post increment (++i vs i++)",
        "Dalam loop biasanya tidak masalah",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "Operator Precedence",
      talkingPoints: [
        "Urutan operasi: PEMDAS/BODMAS",
        "Parentheses, Exponents, Multiply/Divide, Add/Subtract",
        "2 + 3 * 4 = 14 (bukan 20)",
        "Gunakan parentheses untuk clarity",
        "(2 + 3) * 4 = 20",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Hitung luas dan keliling persegi panjang",
        "Input: panjang dan lebar",
        "Output: luas dan keliling",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: arithmetic dan assignment operators",
        "Next episode: comparison dan logical operators",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Arithmetic & Assignment",
      subtitle: "Programming Fundamentals - Episode 10",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Modulo - sisa pembagian
print(10 % 3)   # 1 (10 = 3*3 + 1)
print(15 % 5)   # 0 (15 = 5*3 + 0)

# Cek genap/ganjil
angka = 7
if angka % 2 == 0:
    print("Genap")
else:
    print("Ganjil")

# Wrap around (0-11 untuk jam)
jam = 14
jam_12 = jam % 12  # 2 (2 PM)`,
      title: "modulo.py",
      highlightLines: [2, 3, 7, 14],
      showAtFrame: 10800,
      hideAtFrame: 21600,
    },
    {
      code: `// Assignment operators
let x = 10;

x += 5;   // x = x + 5 = 15
x -= 3;   // x = x - 3 = 12
x *= 2;   // x = x * 2 = 24
x /= 4;   // x = x / 4 = 6

// Increment/Decrement (JS & Java)
let i = 0;
i++;      // i = 1
i--;      // i = 0

// Python tidak punya ++
# i += 1  # gunakan ini`,
      title: "assignment.js",
      highlightLines: [4, 5, 6, 7, 11, 12],
      showAtFrame: 28800,
      hideAtFrame: 43200,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Implementasi operasi dasar: tambah pemasukan, kurang pengeluaran",
    starterCode: `saldo = Decimal("0.00")
pemasukan = Decimal("500000")
pengeluaran = Decimal("150000")`,
    newCode: `from decimal import Decimal

saldo = Decimal("0.00")
total_pemasukan = Decimal("0.00")
total_pengeluaran = Decimal("0.00")

# Tambah pemasukan
gaji = Decimal("5000000")
total_pemasukan += gaji  # shorthand: total_pemasukan = total_pemasukan + gaji
saldo += gaji

# Kurang pengeluaran
makan = Decimal("500000")
transport = Decimal("300000")
total_pengeluaran += makan
total_pengeluaran += transport
saldo -= makan
saldo -= transport

print(f"Total Pemasukan:   Rp {total_pemasukan:>15,.2f}")
print(f"Total Pengeluaran: Rp {total_pengeluaran:>15,.2f}")
print(f"Saldo:             Rp {saldo:>15,.2f}")`,
    explanation: [
      "+= dan -= untuk update saldo secara singkat",
      "Track total_pemasukan dan total_pengeluaran terpisah",
      "Format {:>15,.2f} untuk alignment dan thousand separator",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan arithmetic operators. Minta user menghitung dengan modulo, division, dan shorthand operators. Jangan beri jawaban.",
  },
};
