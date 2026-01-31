import { VideoOutline } from "../types";

export const pf09: VideoOutline = {
  episodeId: "pf-09",
  seriesId: "programming-fundamentals",
  title: "Type Conversion & String Operations",
  description: "Belajar mengkonversi tipe data dan operasi dasar pada string. Memahami implicit vs explicit conversion.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: data types dan typing systems",
        "Hari ini: konversi antar tipe data",
        "Plus: operasi string dasar",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Kenapa Perlu Konversi Tipe?",
      talkingPoints: [
        "Input dari user selalu string",
        "Perlu konversi ke number untuk matematika",
        "Gabung string dengan number untuk output",
        "Data dari file/API perlu dikonversi",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Type Conversion di Python",
      talkingPoints: [
        "int() - konversi ke integer",
        "float() - konversi ke float",
        "str() - konversi ke string",
        "bool() - konversi ke boolean",
        "Contoh: int('42') = 42",
      ],
      notes: "Live coding: berbagai konversi Python",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Type Conversion di JavaScript",
      talkingPoints: [
        "parseInt(), parseFloat() - ke number",
        "String() atau .toString() - ke string",
        "Number() - ke number",
        "Boolean() - ke boolean",
        "Shortcut: +'42' = 42 (unary plus)",
      ],
      notes: "Live coding: berbagai konversi JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Type Conversion di Java",
      talkingPoints: [
        "Integer.parseInt() - string ke int",
        "Double.parseDouble() - string ke double",
        "String.valueOf() - apapun ke string",
        "Casting: (int) 3.14 = 3",
        "Wrapper classes: Integer, Double, etc.",
      ],
      notes: "Live coding: berbagai konversi Java",
      showOnScreen: "code",
    },
    {
      timestamp: "21:00",
      title: "String Concatenation",
      talkingPoints: [
        "Menggabungkan string",
        "Python: + atau f-string",
        "JavaScript: + atau template literal",
        "Java: + atau StringBuilder",
        "f-string dan template literal lebih readable",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Conversion Errors",
      talkingPoints: [
        "int('hello') → Error!",
        "parseInt('hello') → NaN (JavaScript)",
        "Selalu validate input sebelum convert",
        "try-catch untuk handle error",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Buat program: input umur, hitung tahun lahir",
        "Gabungkan output ke kalimat",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: konversi tipe dan string",
        "Next episode: Operators (matematika)",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Type Conversion & Strings",
      subtitle: "Programming Fundamentals - Episode 9",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Type Conversion
umur_str = "25"
umur_int = int(umur_str)      # 25 (integer)
umur_float = float(umur_str)  # 25.0 (float)

harga = 99.99
harga_str = str(harga)        # "99.99"

# f-string untuk gabung
nama = "Budi"
pesan = f"Halo {nama}, umur {umur_int} tahun"`,
      title: "conversion.py",
      showAtFrame: 7200,
      hideAtFrame: 18000,
    },
    {
      code: `// JavaScript Type Conversion
let umurStr = "25";
let umurInt = parseInt(umurStr);    // 25
let umurFloat = parseFloat(umurStr); // 25

// Shortcut dengan unary plus
let angka = +"42";  // 42 (number)

// Template literal untuk gabung
let nama = "Budi";
let pesan = \`Halo \${nama}, umur \${umurInt} tahun\`;`,
      title: "conversion.js",
      showAtFrame: 18000,
      hideAtFrame: 28800,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Konversi input user (string) ke Decimal untuk perhitungan keuangan",
    starterCode: `saldo = Decimal("0.00")
nama_user = "Budi"`,
    newCode: `from decimal import Decimal

saldo = Decimal("0.00")
nama_user = "Budi"

# Simulasi input dari user (selalu string)
input_pemasukan = "500000"
input_pengeluaran = "150000"

# Konversi ke Decimal untuk kalkulasi
pemasukan = Decimal(input_pemasukan)
pengeluaran = Decimal(input_pengeluaran)

# Update saldo
saldo = saldo + pemasukan - pengeluaran

# Konversi ke string untuk output
print(f"Halo, {nama_user}!")
print(f"Saldo saat ini: Rp {saldo:,.2f}")`,
    explanation: [
      "Input dari user selalu berupa string",
      "Harus konversi ke Decimal sebelum kalkulasi",
      "f-string dengan format :,.2f untuk tampilan currency",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan type conversion. Minta user mengkonversi string ke number dan sebaliknya, termasuk handling error untuk input invalid. Jangan beri jawaban.",
  },
};
