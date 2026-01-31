import { VideoOutline } from "../types";

export const pf19: VideoOutline = {
  episodeId: "pf-19",
  seriesId: "programming-fundamentals",
  title: "Scope & Return Values",
  description: "Mempelajari scope (visibility) variables dan cara return values dari functions.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: parameters dan arguments",
        "Hari ini: scope dan return",
        "Penting untuk avoid bugs",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Scope?",
      talkingPoints: [
        "Di mana variable bisa diakses",
        "Analogi: ruangan dalam rumah",
        "Variable di dapur tidak terlihat dari kamar",
        "Scope = visibility boundary",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Local vs Global Scope",
      talkingPoints: [
        "Global: di luar function, bisa diakses semua",
        "Local: di dalam function, hanya dalam function",
        "Local variable 'shadow' global",
        "Best practice: minimize global variables",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "08:00",
      title: "Scope di Python",
      talkingPoints: [
        "LEGB rule: Local, Enclosing, Global, Built-in",
        "global keyword untuk akses global",
        "Tapi hindari pakai global",
      ],
      notes: "Live coding: scope Python",
      showOnScreen: "code",
    },
    {
      timestamp: "13:00",
      title: "Scope di JavaScript",
      talkingPoints: [
        "var: function scope (hoisted)",
        "let/const: block scope (curly braces)",
        "SELALU pakai let/const, hindari var",
        "Hoisting bisa bikin bug",
      ],
      notes: "Live coding: var vs let scope",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Scope di Java",
      talkingPoints: [
        "Block scope dengan curly braces",
        "Class-level (instance variables)",
        "Method-level (local variables)",
        "Paling predictable dari ketiga bahasa",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "21:00",
      title: "Return Values",
      talkingPoints: [
        "Function bisa return nilai",
        "Return menghentikan function",
        "Bisa return early untuk guard clause",
        "Void function tidak return (atau return None)",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "Return Multiple Values",
      talkingPoints: [
        "Python: return tuple, unpack saat assign",
        "JavaScript: return object atau array",
        "Java: return object atau buat class",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Function yang return min dan max dari list",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: scope dan return",
        "Next episode: Arrays/Lists!",
        "See you!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Scope & Return",
      subtitle: "Programming Fundamentals - Episode 19",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Scope
total = 0  # Global variable

def add_to_total(x):
    result = x + 1  # Local variable
    return result

# result tidak bisa diakses di sini
# print(result)  # NameError!

# Return multiple values
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([3, 1, 4, 1, 5])
print(f"Min: {minimum}, Max: {maximum}")`,
      title: "scope.py",
      highlightLines: [1, 5, 12, 15],
      showAtFrame: 14400,
      hideAtFrame: 32400,
    },
    {
      code: `// JavaScript Scope
let globalVar = "global";

function example() {
    let localVar = "local";

    if (true) {
        let blockVar = "block";  // only in this block
        var funcVar = "function"; // available in whole function
    }

    console.log(funcVar);   // "function" - var is function-scoped
    // console.log(blockVar); // Error! - let is block-scoped
}

// var vs let
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 - var leaks out!

for (let j = 0; j < 3; j++) {}
// console.log(j);  // Error! - let stays in block`,
      title: "scope.js",
      highlightLines: [8, 9, 12, 17, 18],
      showAtFrame: 23400,
      hideAtFrame: 37800,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Function dengan return multiple values: laporan keuangan",
    starterCode: `def hitung_saldo():
    return saldo`,
    newCode: `from decimal import Decimal

transaksi = [
    {"jenis": "masuk", "jumlah": Decimal("5000000"), "keterangan": "Gaji"},
    {"jenis": "keluar", "jumlah": Decimal("500000"), "keterangan": "Makan"},
    {"jenis": "keluar", "jumlah": Decimal("300000"), "keterangan": "Transport"},
]

def buat_laporan():
    """
    Buat laporan keuangan lengkap.

    Returns:
        tuple: (total_masuk, total_keluar, saldo, jumlah_transaksi)
    """
    total_masuk = Decimal("0")
    total_keluar = Decimal("0")

    for trx in transaksi:
        if trx["jenis"] == "masuk":
            total_masuk += trx["jumlah"]
        else:
            total_keluar += trx["jumlah"]

    saldo = total_masuk - total_keluar
    jumlah_transaksi = len(transaksi)

    return total_masuk, total_keluar, saldo, jumlah_transaksi

# Unpack return values
masuk, keluar, saldo, jml = buat_laporan()

print("=== Laporan Keuangan ===")
print(f"Total Pemasukan:   Rp {masuk:>12,.2f}")
print(f"Total Pengeluaran: Rp {keluar:>12,.2f}")
print(f"Saldo:             Rp {saldo:>12,.2f}")
print(f"Jumlah Transaksi:  {jml}")`,
    explanation: [
      "Return tuple untuk multiple values",
      "Unpack tuple ke beberapa variable",
      "Local variables tidak pollute global scope",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan scope dan return. Minta user membuat function dengan local variables dan return multiple values. Jangan beri jawaban.",
  },
};
