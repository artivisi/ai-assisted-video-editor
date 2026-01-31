import { VideoOutline } from "../types";

export const pf27: VideoOutline = {
  episodeId: "pf-27",
  seriesId: "programming-fundamentals",
  title: "Debugging Techniques",
  description: "Mempelajari teknik debugging: print debugging, using debugger, dan reading error messages.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: error handling dengan try-catch",
        "Hari ini: menemukan dan memperbaiki bugs",
        "Essential skill untuk semua programmer",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Bug?",
      talkingPoints: [
        "Bug = perilaku program tidak sesuai harapan",
        "Bukan selalu error/crash",
        "Bisa: wrong output, infinite loop, etc",
        "Debugging = proses menemukan dan fix bug",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Print Debugging",
      talkingPoints: [
        "Cara paling simple dan universal",
        "Print nilai variable di berbagai titik",
        "Trace alur eksekusi program",
        "Semua bahasa bisa pakai",
        "Cukup untuk banyak kasus",
      ],
      notes: "Live coding: print debugging",
      showOnScreen: "code",
    },
    {
      timestamp: "11:00",
      title: "Reading Error Messages",
      talkingPoints: [
        "Error message adalah clue!",
        "Baca dari bawah ke atas (stack trace)",
        "Cari: tipe error, file, line number",
        "Google error message jika bingung",
        "Stack Overflow adalah teman",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "15:00",
      title: "Using Debugger - VS Code",
      talkingPoints: [
        "Lebih powerful dari print",
        "Breakpoints: pause di line tertentu",
        "Step over: jalankan line, lanjut",
        "Step into: masuk ke function",
        "Watch: monitor nilai variable",
      ],
      notes: "Demo VS Code debugger",
      showOnScreen: "demo",
    },
    {
      timestamp: "21:00",
      title: "Common Bugs & Fixes",
      talkingPoints: [
        "Off-by-one error: index atau loop boundary salah",
        "Null/undefined errors: akses property dari null",
        "Type errors: operasi dengan tipe salah",
        "Logic errors: kondisi if salah",
        "Infinite loop: kondisi while tidak pernah false",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "25:00",
      title: "Debugging Mindset",
      talkingPoints: [
        "Reproduce bug secara konsisten",
        "Isolate: cari kode yang bermasalah",
        "Form hypothesis, test, iterate",
        "Jangan random change - understand first",
        "Take breaks if stuck",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Debug kode yang ada bug",
        "Temukan dan fix 3 bugs",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: debugging techniques",
        "Next episode: File I/O",
        "Everyone writes bugs - debugging is the skill!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Debugging Techniques",
      subtitle: "Programming Fundamentals - Episode 27",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Print Debugging Example
def calculate_average(numbers):
    print(f"Input: {numbers}")  # Debug: cek input

    total = 0
    for i, num in enumerate(numbers):
        total += num
        print(f"  i={i}, num={num}, total={total}")  # Debug

    average = total / len(numbers)
    print(f"Average: {average}")  # Debug: cek output

    return average

# Bug: empty list akan crash
# Fix: tambah check di awal
def calculate_average_fixed(numbers):
    if not numbers:
        print("Warning: empty list")  # Debug
        return 0
    return sum(numbers) / len(numbers)`,
      title: "debug.py",
      highlightLines: [3, 8, 11, 19, 20],
      showAtFrame: 9000,
      hideAtFrame: 19800,
    },
    {
      code: `// Common Bug: Off-by-one Error

// BUG: loop satu kali kurang
function printArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {  // BUG!
        console.log(arr[i]);
    }
}

// FIX: gunakan < arr.length
function printArrayFixed(arr) {
    for (let i = 0; i < arr.length; i++) {  // FIXED
        console.log(arr[i]);
    }
}

// BUG: null reference
let user = null;
console.log(user.name);  // TypeError!

// FIX: null check
if (user && user.name) {
    console.log(user.name);
}`,
      title: "common_bugs.js",
      highlightLines: [5, 12, 19, 22, 23],
      showAtFrame: 37800,
      hideAtFrame: 48600,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Debugging Finance Tracker: menemukan dan memperbaiki bugs",
    starterCode: `# Finance Tracker dengan beberapa bugs`,
    newCode: `from decimal import Decimal

# BUGGY VERSION - cari dan perbaiki!
def hitung_saldo_buggy(transaksi):
    saldo = 0  # BUG 1: harus Decimal("0")

    for i in range(len(transaksi)):  # BUG 2: bisa pakai for trx in transaksi
        trx = transaksi[i]

        if trx["jenis"] == "masuk":
            saldo = saldo + trx["jumlah"]
        if trx["jenis"] == "keluar":  # BUG 3: harusnya elif
            saldo = saldo - trx["jumlah"]

    return saldo  # BUG 4: tidak handle empty list

# FIXED VERSION
def hitung_saldo(transaksi):
    """Hitung saldo dari list transaksi"""
    print(f"DEBUG: Processing {len(transaksi)} transaksi")  # Debug

    if not transaksi:
        print("DEBUG: Empty list, returning 0")
        return Decimal("0")

    saldo = Decimal("0")

    for trx in transaksi:
        print(f"DEBUG: {trx['jenis']} {trx['jumlah']}")  # Debug

        if trx["jenis"] == "masuk":
            saldo += trx["jumlah"]
        elif trx["jenis"] == "keluar":
            saldo -= trx["jumlah"]

        print(f"DEBUG: Saldo sekarang: {saldo}")  # Debug

    return saldo

# Test dengan berbagai kasus
test_cases = [
    [],  # Empty list
    [{"jenis": "masuk", "jumlah": Decimal("1000")}],  # Single
    [{"jenis": "masuk", "jumlah": Decimal("1000")},
     {"jenis": "keluar", "jumlah": Decimal("500")}],  # Mixed
]

for i, test in enumerate(test_cases):
    print(f"\\n=== Test Case {i+1} ===")
    result = hitung_saldo(test)
    print(f"Result: {result}")`,
    explanation: [
      "Print debugging untuk trace execution flow",
      "Test dengan berbagai edge cases",
      "Fix bugs satu per satu dengan systematic approach",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal debugging. Berikan kode dengan bugs dan minta user menemukan serta memperbaikinya. Jangan beri jawaban.",
  },
};
