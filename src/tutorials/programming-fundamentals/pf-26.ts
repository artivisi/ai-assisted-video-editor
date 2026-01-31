import { VideoOutline } from "../types";

export const pf26: VideoOutline = {
  episodeId: "pf-26",
  seriesId: "programming-fundamentals",
  title: "Exceptions & Try-Catch",
  description: "Mempelajari error handling dengan try-catch untuk membuat program yang robust.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: regex untuk pattern matching",
        "Hari ini: error handling",
        "Program yang tidak crash saat ada error",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Exception?",
      talkingPoints: [
        "Error yang terjadi saat program jalan",
        "Berbeda dengan syntax error (compile time)",
        "Contoh: bagi dengan nol, file tidak ada",
        "Tanpa handling: program crash",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Common Exceptions",
      talkingPoints: [
        "ZeroDivisionError / ArithmeticException",
        "TypeError / ClassCastException",
        "ValueError / NumberFormatException",
        "IndexError / ArrayIndexOutOfBounds",
        "FileNotFoundError / IOException",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "09:00",
      title: "Try-Catch di Python",
      talkingPoints: [
        "try: kode yang mungkin error",
        "except: handle error",
        "finally: selalu dijalankan",
        "else: jika tidak ada error",
        "Bisa catch specific exception",
      ],
      notes: "Live coding: try-except Python",
      showOnScreen: "code",
    },
    {
      timestamp: "16:00",
      title: "Try-Catch di JavaScript",
      talkingPoints: [
        "try { } catch (error) { }",
        "finally { } untuk cleanup",
        "throw new Error() untuk raise",
        "error.message untuk pesan",
      ],
      notes: "Live coding: try-catch JavaScript",
      showOnScreen: "code",
    },
    {
      timestamp: "21:00",
      title: "Try-Catch di Java",
      talkingPoints: [
        "try { } catch (ExceptionType e) { }",
        "Bisa multiple catch blocks",
        "finally untuk cleanup",
        "Checked vs Unchecked exceptions",
      ],
      notes: "Live coding: try-catch Java",
      showOnScreen: "code",
    },
    {
      timestamp: "25:00",
      title: "Best Practices",
      talkingPoints: [
        "Catch specific exceptions, bukan semua",
        "Jangan silent catch (empty catch block)",
        "Log atau handle dengan proper",
        "Use finally untuk cleanup resources",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "28:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Handle user input errors",
        "Catch ValueError saat convert string ke int",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: try-catch untuk error handling",
        "Next episode: Debugging techniques",
        "Handle errors gracefully!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Exceptions & Try-Catch",
      subtitle: "Programming Fundamentals - Episode 26",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Try-Except
def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    finally:
        print("Division attempted")

print(divide(10, 2))   # 5.0
print(divide(10, 0))   # None (with error message)

# Handle user input
try:
    age = int(input("Umur: "))
    print(f"Tahun lahir: {2024 - age}")
except ValueError:
    print("Error: Masukkan angka yang valid")`,
      title: "exceptions.py",
      highlightLines: [3, 6, 7, 9, 17, 20],
      showAtFrame: 16200,
      hideAtFrame: 28800,
    },
    {
      code: `// JavaScript Try-Catch
function parseJSON(str) {
    try {
        const data = JSON.parse(str);
        return data;
    } catch (error) {
        console.log("Error parsing JSON:", error.message);
        return null;
    } finally {
        console.log("Parse attempted");
    }
}

console.log(parseJSON('{"name":"Budi"}'));  // {name: "Budi"}
console.log(parseJSON('invalid json'));      // null

// Throw custom error
function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return age;
}`,
      title: "exceptions.js",
      highlightLines: [4, 6, 7, 9, 19, 20],
      showAtFrame: 28800,
      hideAtFrame: 45000,
    },
  ],

  caseStudy: {
    title: "Finance Tracker",
    episodeGoal: "Error handling untuk semua operasi Finance Tracker",
    starterCode: `def tambah_transaksi(jenis, jumlah, keterangan=""):`,
    newCode: `from decimal import Decimal, InvalidOperation

class FinanceTrackerError(Exception):
    """Custom exception untuk Finance Tracker"""
    pass

class InvalidTransactionError(FinanceTrackerError):
    """Error untuk transaksi tidak valid"""
    pass

class InsufficientBalanceError(FinanceTrackerError):
    """Error untuk saldo tidak cukup"""
    pass

def tambah_transaksi(jenis, jumlah, keterangan=""):
    """Tambah transaksi dengan proper error handling"""
    try:
        # Validasi jenis
        if jenis not in ["masuk", "keluar"]:
            raise InvalidTransactionError(f"Jenis '{jenis}' tidak valid")

        # Konversi jumlah
        jumlah_decimal = Decimal(str(jumlah))

        if jumlah_decimal <= 0:
            raise InvalidTransactionError("Jumlah harus positif")

        # Proses transaksi...
        return True

    except InvalidOperation:
        raise InvalidTransactionError("Format jumlah tidak valid")

def proses_pengeluaran(jumlah, saldo):
    """Proses pengeluaran dengan cek saldo"""
    if jumlah > saldo:
        raise InsufficientBalanceError(
            f"Saldo tidak cukup. Saldo: {saldo}, Dibutuhkan: {jumlah}"
        )
    return saldo - jumlah

# Penggunaan dengan try-except
try:
    tambah_transaksi("keluar", "abc123")  # Invalid
except InvalidTransactionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")`,
    explanation: [
      "Custom exception classes untuk error yang spesifik",
      "try-except untuk handle berbagai jenis error",
      "Error messages yang informatif untuk debugging",
    ],
  },

  aiPrompts: {
    exercisePrompt: "Buat 5 soal latihan try-except. Minta user handle berbagai jenis exception seperti ValueError, ZeroDivisionError, dan custom exceptions. Jangan beri jawaban.",
  },
};
