import { VideoOutline } from "../types";

export const pf17: VideoOutline = {
  episodeId: "pf-17",
  seriesId: "programming-fundamentals",
  title: "Functions - Kode yang Reusable",
  description: "Mempelajari functions/methods untuk membuat kode yang reusable dan terorganisir.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: loops dan patterns",
        "Hari ini: functions!",
        "Salah satu konsep terpenting",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Function?",
      talkingPoints: [
        "Blok kode yang bisa dipanggil berkali-kali",
        "Analogi: mesin kopi",
        "Input: kopi, air",
        "Process: seduh",
        "Output: secangkir kopi",
        "Reusable tanpa copy-paste",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Function di Python",
      talkingPoints: [
        "def nama_function(params):",
        "return untuk mengembalikan nilai",
        "Indentation untuk body",
        "Call dengan nama(args)",
      ],
      notes: "Live coding: function pertama Python",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Function di JavaScript",
      talkingPoints: [
        "function nama(params) { }",
        "Arrow function: const nama = (params) => { }",
        "return untuk mengembalikan nilai",
        "Arrow function lebih modern",
      ],
      notes: "Live coding: function JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Method di Java",
      talkingPoints: [
        "public static returnType nama(params) { }",
        "Harus deklarasi return type",
        "void jika tidak return apapun",
        "Harus dalam class",
        "Lebih verbose tapi explicit",
      ],
      notes: "Live coding: method Java",
      showOnScreen: "code",
    },
    {
      timestamp: "24:00",
      title: "Function vs Method",
      talkingPoints: [
        "Function: standalone (Python, JS)",
        "Method: milik class/object (Java)",
        "Secara konsep sama",
        "Di Java semua adalah method",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "26:00",
      title: "Kenapa Function Penting?",
      talkingPoints: [
        "Reusability: tulis sekali, pakai berkali-kali",
        "Organization: kode lebih rapi",
        "Testing: mudah dites per function",
        "DRY: Don't Repeat Yourself",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Buat function hitung_luas_persegi(sisi)",
        "Di ketiga bahasa",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: function untuk reusable code",
        "Next episode: parameters & arguments",
        "Functions are your friends!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Functions",
      subtitle: "Programming Fundamentals - Episode 17",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Function
def sapa(nama):
    return f"Halo, {nama}!"

# Panggil function
pesan = sapa("Budi")
print(pesan)  # "Halo, Budi!"

# Function dengan multiple params
def hitung_luas(panjang, lebar):
    return panjang * lebar

luas = hitung_luas(10, 5)
print(f"Luas: {luas}")  # 50`,
      title: "functions.py",
      highlightLines: [2, 3, 6, 10, 11],
      showAtFrame: 9000,
      hideAtFrame: 21600,
    },
    {
      code: `// JavaScript Functions

// Regular function
function sapa(nama) {
    return \`Halo, \${nama}!\`;
}

// Arrow function (modern)
const sapa2 = (nama) => {
    return \`Halo, \${nama}!\`;
};

// Arrow function shorthand
const sapa3 = (nama) => \`Halo, \${nama}!\`;

// Call function
console.log(sapa("Budi"));
console.log(sapa3("Ani"));`,
      title: "functions.js",
      highlightLines: [4, 9, 14],
      showAtFrame: 21600,
      hideAtFrame: 34200,
    },
    {
      code: `// Java Method
public class Functions {

    // Method dengan return value
    public static String sapa(String nama) {
        return "Halo, " + nama + "!";
    }

    // Method tanpa return (void)
    public static void cetakSapa(String nama) {
        System.out.println("Halo, " + nama + "!");
    }

    public static void main(String[] args) {
        String pesan = sapa("Budi");
        System.out.println(pesan);

        cetakSapa("Ani");
    }
}`,
      title: "Functions.java",
      highlightLines: [5, 10, 15, 18],
      showAtFrame: 34200,
      hideAtFrame: 43200,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Refactor ke functions: tambah_transaksi(), hitung_saldo()",
    starterCode: `# Kode sebelumnya masih procedural (tidak ada function)`,
    newCode: `from decimal import Decimal

# Data global (nanti akan diperbaiki dengan OOP)
transaksi = []

def tambah_transaksi(jenis, jumlah, keterangan=""):
    """Tambah transaksi baru ke daftar"""
    transaksi.append({
        "jenis": jenis,
        "jumlah": Decimal(str(jumlah)),
        "keterangan": keterangan
    })
    return True

def hitung_saldo():
    """Hitung saldo dari semua transaksi"""
    saldo = Decimal("0")
    for trx in transaksi:
        if trx["jenis"] == "masuk":
            saldo += trx["jumlah"]
        else:
            saldo -= trx["jumlah"]
    return saldo

def tampilkan_transaksi():
    """Tampilkan semua transaksi"""
    for i, trx in enumerate(transaksi, 1):
        jenis = "+" if trx["jenis"] == "masuk" else "-"
        print(f"{i}. {jenis} Rp {trx['jumlah']:>12,.2f} - {trx['keterangan']}")

# Penggunaan
tambah_transaksi("masuk", 5000000, "Gaji")
tambah_transaksi("keluar", 500000, "Makan")
tampilkan_transaksi()
print(f"Saldo: Rp {hitung_saldo():,.2f}")`,
    explanation: [
      "Kode lebih terorganisir dengan functions",
      "Setiap function punya satu tanggung jawab",
      "Mudah di-test dan di-maintain",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan functions. Minta user membuat function sederhana dengan parameter dan return value. Jangan beri jawaban.",
  },
};
