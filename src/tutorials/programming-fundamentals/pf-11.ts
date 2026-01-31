import { VideoOutline } from "../types";

export const pf11: VideoOutline = {
  episodeId: "pf-11",
  seriesId: "programming-fundamentals",
  title: "Comparison & Logical Operators",
  description: "Mempelajari operator perbandingan dan logika. Fondasi untuk membuat keputusan dalam program.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: arithmetic operators",
        "Hari ini: comparison dan logical operators",
        "Fondasi untuk if-else dan loops",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Comparison Operators",
      talkingPoints: [
        "== (sama dengan)",
        "!= (tidak sama dengan)",
        "> < >= <= (lebih/kurang dari)",
        "Hasil: boolean (true/false)",
        "Sama di semua bahasa",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "06:00",
      title: "Equality: == vs ===",
      talkingPoints: [
        "Python: == untuk value comparison",
        "JavaScript: == vs === (strict equality)",
        "5 == '5' → true (JS, dengan coercion)",
        "5 === '5' → false (JS, strict)",
        "SELALU pakai === di JavaScript!",
        "Java: == untuk primitives, .equals() untuk objects",
      ],
      notes: "Live coding: demo equality quirks",
      showOnScreen: "code",
    },
    {
      timestamp: "13:00",
      title: "Logical Operators",
      talkingPoints: [
        "AND: kedua kondisi harus true",
        "OR: salah satu kondisi true",
        "NOT: kebalikan dari kondisi",
        "Python: and, or, not",
        "JavaScript & Java: &&, ||, !",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "17:00",
      title: "Logical Operators Demo",
      talkingPoints: [
        "true AND true = true",
        "true AND false = false",
        "true OR false = true",
        "NOT true = false",
        "Contoh: umur >= 17 AND punya_ktp",
      ],
      notes: "Live coding: kombinasi kondisi",
      showOnScreen: "code",
    },
    {
      timestamp: "21:00",
      title: "Truthy & Falsy Values",
      talkingPoints: [
        "Nilai yang dianggap false tanpa explicit boolean",
        "Python: 0, '', [], None, False",
        "JavaScript: 0, '', null, undefined, NaN, false",
        "Java: hanya boolean bisa jadi kondisi",
        "Berguna untuk cek empty/null",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "25:00",
      title: "Short-Circuit Evaluation",
      talkingPoints: [
        "AND: stop jika ketemu false",
        "OR: stop jika ketemu true",
        "Berguna untuk guard conditions",
        "user && user.name (cek null dulu)",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Cek eligibility: umur >= 17 AND punya KTP",
        "Di ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: comparison dan logical operators",
        "Next episode: if-else statements!",
        "Keep practicing!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Comparison & Logical",
      subtitle: "Programming Fundamentals - Episode 11",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `// JavaScript Equality Quirks
console.log(5 == "5");    // true (coercion!)
console.log(5 === "5");   // false (strict)

console.log(0 == false);  // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

// ALWAYS use === in JavaScript!`,
      title: "equality.js",
      highlightLines: [2, 3, 11],
      showAtFrame: 10800,
      hideAtFrame: 23400,
    },
    {
      code: `# Python Logical Operators
umur = 20
punya_ktp = True
punya_sim = False

# AND - kedua harus true
boleh_nyetir = umur >= 17 and punya_sim
print(boleh_nyetir)  # False

# OR - salah satu true
punya_id = punya_ktp or punya_sim
print(punya_id)  # True

# NOT - kebalikan
belum_dewasa = not (umur >= 18)
print(belum_dewasa)  # False`,
      title: "logical.py",
      highlightLines: [7, 11, 15],
      showAtFrame: 30600,
      hideAtFrame: 45000,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Validasi input: cek apakah angka valid dan positif",
    starterCode: `pemasukan = Decimal("500000")
pengeluaran = Decimal("150000")`,
    newCode: `from decimal import Decimal

# Validasi input transaksi
def validasi_jumlah(jumlah_str):
    # Cek apakah bukan string kosong
    if not jumlah_str:
        return False

    # Cek apakah angka positif
    try:
        jumlah = Decimal(jumlah_str)
        return jumlah > 0  # Harus positif
    except:
        return False

# Penggunaan
input_user = "500000"
if validasi_jumlah(input_user):
    print("Input valid!")
else:
    print("Input tidak valid!")

# Comparison operators untuk cek saldo
saldo = Decimal("1000000")
pengeluaran = Decimal("500000")

cukup_saldo = saldo >= pengeluaran  # True
print(f"Saldo cukup: {cukup_saldo}")`,
    explanation: [
      "Comparison operators untuk validasi (> 0, >= saldo)",
      "Logical operators: not untuk cek empty string",
      "Boolean result dari validasi",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan comparison dan logical operators. Minta user membuat kondisi kompleks dengan and, or, not. Jangan beri jawaban.",
  },
};
