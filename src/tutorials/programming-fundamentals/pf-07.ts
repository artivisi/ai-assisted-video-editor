import { VideoOutline } from "../types";

export const pf07: VideoOutline = {
  episodeId: "pf-07",
  seriesId: "programming-fundamentals",
  title: "Data Types & Typing Systems",
  description: "Memahami perbedaan static vs dynamic typing dan strong vs weak typing. Mempelajari tipe data dasar dan masalah floating point precision.",
  duration: 2700, // 45 minutes
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: variables sebagai tempat simpan data",
        "Hari ini: bagaimana bahasa menangani tipe data",
        "Konsep penting: typing systems",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Kenapa Perlu Tipe Data?",
      talkingPoints: [
        "Komputer perlu tahu cara menangani data",
        "Angka 5 vs teks '5' - berbeda!",
        "Operasi berbeda untuk tipe berbeda",
        "5 + 3 = 8 (matematika)",
        "'5' + '3' = '53' (gabung teks)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Static vs Dynamic Typing",
      talkingPoints: [
        "KAPAN tipe data dicek?",
        "Static typing: dicek saat COMPILE (sebelum jalan)",
        "Dynamic typing: dicek saat RUNTIME (saat jalan)",
        "Analogi: static = cek KTP sebelum masuk gedung",
        "Analogi: dynamic = cek KTP di dalam ruangan",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "07:00",
      title: "Dynamic Typing Demo",
      talkingPoints: [
        "Python dan JavaScript = dynamic",
        "Variable bisa ganti tipe",
        "x = 10, lalu x = 'hello' → OK!",
        "Fleksibel, tapi error baru ketahuan saat runtime",
      ],
      notes: "Live coding: demo dynamic typing di Python & JS",
      showOnScreen: "code",
    },
    {
      timestamp: "10:00",
      title: "Static Typing Demo",
      talkingPoints: [
        "Java = static typing",
        "int x = 10; x = 'hello'; → COMPILE ERROR!",
        "Error ketahuan sebelum program jalan",
        "Lebih strict, tapi lebih aman",
        "IDE bisa bantu autocomplete",
      ],
      notes: "Live coding: demo static typing error di Java",
      showOnScreen: "code",
    },
    {
      timestamp: "13:00",
      title: "Strong vs Weak Typing",
      talkingPoints: [
        "BAGAIMANA bahasa menangani operasi antar tipe berbeda?",
        "Strong: tidak otomatis konversi, error jika tipe tidak cocok",
        "Weak: otomatis konversi (type coercion)",
        "Python & Java = strong",
        "JavaScript = weak",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "16:00",
      title: "JavaScript Type Coercion (Weak Typing)",
      talkingPoints: [
        "'5' + 3 = '53' (concatenation, 3 jadi string)",
        "'5' - 3 = 2 (subtraction, '5' jadi number)",
        "Konsisten? TIDAK! Ini quirk JavaScript",
        "'5' * 2 = 10",
        "'5' + + '3' = '53' ... atau 8?",
        "Penting untuk tahu, sering jadi bug",
      ],
      notes: "Live coding: demo JavaScript coercion quirks",
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Python Strong Typing Demo",
      talkingPoints: [
        "'5' + 3 → TypeError!",
        "Harus explicit: int('5') + 3 = 8",
        "Atau: '5' + str(3) = '53'",
        "Lebih predictable, tidak ada surprise",
      ],
      notes: "Live coding: Python type errors",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Typing Matrix Summary",
      talkingPoints: [
        "Static + Strong = Java (paling strict)",
        "Dynamic + Strong = Python (fleksibel tapi predictable)",
        "Dynamic + Weak = JavaScript (paling fleksibel, bisa surprising)",
        "Masing-masing ada tradeoff",
        "Tidak ada yang 'terbaik', tergantung use case",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "25:00",
      title: "Tipe Data Primitif",
      talkingPoints: [
        "Integer/int: bilangan bulat (42, -10, 0)",
        "Float/Double: bilangan desimal (3.14, -0.5)",
        "String/str: teks ('hello', \"world\")",
        "Boolean/bool: true atau false",
        "Ini fondasi, ada tipe lain yang lebih complex",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Data Types di Python",
      talkingPoints: [
        "int, float, str, bool",
        "type() untuk cek tipe",
        "Python otomatis tentukan tipe",
        "int dan float: arbitrary precision (bisa sangat besar)",
      ],
      notes: "Live coding: berbagai tipe data Python",
      showOnScreen: "code",
    },
    {
      timestamp: "31:00",
      title: "Data Types di JavaScript",
      talkingPoints: [
        "number (int dan float digabung!)",
        "string, boolean",
        "typeof untuk cek tipe",
        "null vs undefined (keduanya ada!)",
        "NaN = Not a Number (tapi typeof = 'number' 🤯)",
      ],
      notes: "Live coding: JavaScript types termasuk null/undefined",
      showOnScreen: "code",
    },
    {
      timestamp: "35:00",
      title: "Data Types di Java",
      talkingPoints: [
        "Primitive: int, double, boolean, char, byte, short, long, float",
        "Reference: String, Array, Object",
        "Primitive vs Reference penting di Java",
        "Wrapper classes: Integer, Double (untuk collections)",
      ],
      notes: "Live coding: berbagai tipe data Java",
      showOnScreen: "code",
    },
    {
      timestamp: "38:00",
      title: "Floating Point Problem",
      talkingPoints: [
        "0.1 + 0.2 = ? Seharusnya 0.3...",
        "Tapi hasil: 0.30000000000000004!",
        "Bukan bug, ini cara komputer simpan desimal",
        "Binary floating point tidak bisa represent 0.1 exactly",
        "Seperti 1/3 = 0.333... di desimal",
        "Masalah di SEMUA bahasa (Python, JS, Java)",
      ],
      notes: "Live coding: demo 0.1 + 0.2 di ketiga bahasa",
      showOnScreen: "code",
    },
    {
      timestamp: "41:00",
      title: "Solusi: BigDecimal (Java)",
      talkingPoints: [
        "Untuk aplikasi finansial: HARUS precise!",
        "Rp 0.01 error × 1 juta transaksi = Rp 10.000 hilang",
        "Java punya BigDecimal untuk precision",
        "BigDecimal('0.1') + BigDecimal('0.2') = 0.3 exactly",
        "Python: decimal.Decimal module",
        "JavaScript: library seperti decimal.js",
        "Tradeoff: lebih lambat, tapi accurate",
      ],
      notes: "Live coding: BigDecimal di Java",
      showOnScreen: "code",
    },
    {
      timestamp: "43:00",
      title: "Challenge: Type Coercion Quiz",
      talkingPoints: [
        "Prediksi output dari beberapa expression",
        "Test pemahaman tentang typing",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "44:00",
      title: "Outro",
      talkingPoints: [
        "Recap: static/dynamic, strong/weak",
        "Java = static + strong",
        "Python = dynamic + strong",
        "JavaScript = dynamic + weak",
        "Next episode: Number Systems",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Data Types & Typing Systems",
      subtitle: "Programming Fundamentals - Episode 7",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
    {
      title: "Static vs Dynamic",
      subtitle: "Kapan tipe dicek?",
      showAtFrame: 7200, // 4:00
      hideAtFrame: 8100,
    },
    {
      title: "Strong vs Weak",
      subtitle: "Bagaimana tipe dihandle?",
      showAtFrame: 23400, // 13:00
      hideAtFrame: 24300,
    },
  ],

  references: [
    {
      label: "JavaScript Equality Table",
      url: "dorey.github.io/JavaScript-Equality-Table",
    },
    {
      label: "Python Type Hints",
      url: "docs.python.org/3/library/typing.html",
    },
  ],

  codeSnippets: [
    {
      code: `# Python - Dynamic Typing
x = 10          # x adalah int
print(type(x))  # <class 'int'>

x = "hello"     # x sekarang string - OK!
print(type(x))  # <class 'str'>

x = 3.14        # x sekarang float - OK!
print(type(x))  # <class 'float'>`,
      title: "dynamic_typing.py",
      highlightLines: [2, 5, 8],
      showAtFrame: 12600, // 7:00
      hideAtFrame: 18000,
    },
    {
      code: `// Java - Static Typing
int x = 10;
System.out.println(x);  // 10

x = "hello";  // COMPILE ERROR!
// Type mismatch: cannot convert String to int

// Harus buat variable baru dengan tipe berbeda
String y = "hello";`,
      title: "StaticTyping.java",
      highlightLines: [5, 6],
      showAtFrame: 18000, // 10:00
      hideAtFrame: 23400,
    },
    {
      code: `// JavaScript - Weak Typing (Type Coercion)

console.log("5" + 3);    // "53" (string)
console.log("5" - 3);    // 2 (number)
console.log("5" * 2);    // 10 (number)

// Lebih aneh lagi...
console.log([] + []);     // "" (empty string)
console.log([] + {});     // "[object Object]"
console.log({} + []);     // 0 atau "[object Object]"

// Triple equals untuk strict comparison
console.log(5 == "5");    // true (coercion)
console.log(5 === "5");   // false (strict)`,
      title: "type_coercion.js",
      highlightLines: [3, 4, 13, 14],
      showAtFrame: 28800, // 16:00
      hideAtFrame: 34200,
    },
    {
      code: `# Python - Strong Typing

result = "5" + 3  # TypeError!
# TypeError: can only concatenate str to str

# Harus explicit conversion
result = int("5") + 3     # 8 (number)
result = "5" + str(3)     # "53" (string)

# Predictable, no surprises!`,
      title: "strong_typing.py",
      highlightLines: [3, 4, 7, 8],
      showAtFrame: 34200, // 19:00
      hideAtFrame: 39600,
    },
    {
      code: `# Floating Point Problem - ALL LANGUAGES!

# Python
print(0.1 + 0.2)  # 0.30000000000000004

# JavaScript
// console.log(0.1 + 0.2)  // 0.30000000000000004

# Java
// System.out.println(0.1 + 0.2)  // 0.30000000000000004

# Kenapa? Binary tidak bisa represent 0.1 exactly
# 0.1 dalam binary = 0.0001100110011... (infinite)
# Seperti 1/3 = 0.333... dalam decimal`,
      title: "floating_point_problem.py",
      highlightLines: [4, 7, 10],
      showAtFrame: 68400, // 38:00
      hideAtFrame: 73800,
    },
    {
      code: `// Java - BigDecimal untuk precision

import java.math.BigDecimal;

public class PrecisionDemo {
    public static void main(String[] args) {
        // WRONG - masih floating point!
        BigDecimal wrong = new BigDecimal(0.1);

        // CORRECT - dari String
        BigDecimal a = new BigDecimal("0.1");
        BigDecimal b = new BigDecimal("0.2");
        BigDecimal sum = a.add(b);

        System.out.println(sum);  // 0.3 exactly!

        // Untuk uang: selalu pakai BigDecimal
        BigDecimal harga = new BigDecimal("99999.99");
        BigDecimal qty = new BigDecimal("1000000");
        BigDecimal total = harga.multiply(qty);
        // Rp 99,999,990,000.00 - precise!
    }
}`,
      title: "BigDecimalDemo.java",
      highlightLines: [8, 11, 12, 13, 15],
      showAtFrame: 73800, // 41:00
      hideAtFrame: 77400,
    },
    {
      code: `# Python - decimal module untuk precision

from decimal import Decimal

# WRONG - dari float, masih imprecise
wrong = Decimal(0.1)  # Decimal('0.10000000000000000555...')

# CORRECT - dari string
a = Decimal("0.1")
b = Decimal("0.2")
result = a + b

print(result)  # 0.3 exactly!

# Untuk aplikasi finansial
harga = Decimal("99999.99")
qty = Decimal("1000000")
total = harga * qty
print(f"Total: Rp {total:,.2f}")`,
      title: "decimal_precision.py",
      highlightLines: [6, 9, 10, 11, 13],
      showAtFrame: 75600, // 42:00
      hideAtFrame: 77400,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Memahami pentingnya tipe data yang tepat untuk aplikasi keuangan",
    starterCode: `saldo = 0
pemasukan = 0
pengeluaran = 0`,
    newCode: `# PENTING: Untuk uang, gunakan tipe data yang tepat!
# Python: Gunakan Decimal untuk presisi
from decimal import Decimal

saldo = Decimal("0.00")
pemasukan = Decimal("0.00")
pengeluaran = Decimal("0.00")

# Contoh kenapa penting:
# float: 0.1 + 0.2 = 0.30000000000000004
# Decimal: Decimal("0.1") + Decimal("0.2") = Decimal("0.3")

# Untuk aplikasi keuangan, error Rp 0.01 x 1 juta = Rp 10.000!`,
    explanation: [
      "Aplikasi keuangan HARUS menggunakan Decimal, bukan float",
      "Floating point errors bisa menyebabkan kerugian finansial",
      "Selalu inisialisasi Decimal dari string, bukan float",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal tentang typing systems. Minta user memprediksi output dari operasi antar tipe berbeda di Python, JavaScript, dan Java. Jangan beri jawaban.",
  },
};
