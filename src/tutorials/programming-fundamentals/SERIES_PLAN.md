# Programming Fundamentals Series Plan

## Target Audience
- Zero coding knowledge
- Can use computer for basic tasks (browser, social media)
- No technical background assumed

## Teaching Approach
- Teach concepts using Python, Java, and JavaScript side-by-side
- Show how the same principle applies across languages
- Highlight quirks and differences between languages
- Use relatable real-world analogies
- Hands-on coding in every episode

## Development Environment
**GitHub Codespaces** - Online IDE, no local installation needed!

| What | Why |
|------|-----|
| GitHub Account | Store code, portfolio, collaboration |
| GitHub Codespaces | VS Code in browser, all languages pre-installed |
| Repository per project | Version control from day 1 |

**Benefits:**
- Zero installation headaches
- Consistent environment for all students
- Access from any computer (sekolah, warnet, HP)
- Learn Git/GitHub from the start
- Free tier sufficient for learning

---

## Episode List

### Module 1: Introduction & Setup (Episodes 1-2)

#### Episode 1: Apa Itu Programming?
**Duration:** 45 min

**Outline:**
- [00:00] Intro & perkenalan series
- [02:00] Apa itu programming? (analogi: resep masak, instruksi ke asisten)
- [07:00] Kenapa belajar programming di 2026?
  - Otomasi pekerjaan repetitif
  - Karir di tech industry
  - Problem solving skill
  - AI tidak menggantikan programmer, tapi programmer yang pakai AI
- [12:00] Apa itu programming language?
  - Analogi: bahasa manusia (Indonesia, English, Japanese)
  - Kenapa banyak bahasa? (sejarah singkat, use case berbeda)
- [17:00] Bahasa Populer di 2026
  - Berdasarkan TIOBE Index, Stack Overflow Survey, GitHub Stats
  - Top 10: Python, JavaScript, Java, C#, C++, TypeScript, Go, Rust, PHP, Swift
  - Python #1: AI boom, data science, beginner-friendly
  - JavaScript: masih dominan di web (frontend wajib)
  - Java: enterprise, Android, banking systems
  - Rising stars: Go (cloud/DevOps), Rust (system programming)
- [21:00] Kenapa Pilih Python, Java, JavaScript?
  - Ketiganya di Top 5 paling banyak dipakai
  - Mewakili spektrum typing systems:
    - Python: dynamic + strong typing
    - JavaScript: dynamic + weak typing (banyak quirks)
    - Java: static + strong typing (strict)
  - Jika paham ketiganya, bahasa lain akan mudah dipelajari
- [25:00] Kenapa Tidak PHP?
  - PHP sangat populer di Indonesia (hosting murah, diajarkan di SMK)
  - Powers WordPress & Laravel
  - Tapi: hanya untuk web (kurang versatile)
  - Tapi: inkonsistensi naming (strpos vs str_replace)
  - Tapi: tidak mengajarkan typing concepts dengan jelas
  - Jika sudah paham Python/Java/JS, PHP akan sangat mudah
- [27:00] Bahasa Lain yang Perlu Diketahui
  - C/C++: low-level, game engines, embedded systems
  - C#: mirip Java, game (Unity), Windows apps
  - Go: simple syntax, cloud-native, Kubernetes
  - Rust: memory-safe C++, systems programming
  - TypeScript: JavaScript + static typing
  - Swift/Kotlin: iOS dan Android native
- [30:00] Kenapa Belajar 3 Bahasa Sekaligus?
  - Konsep universal, syntax berbeda
  - Versatility: web, mobile, backend, data science
- [33:00] Overview 3 bahasa kita
  - Python: simple, data science, AI, scripting
  - Java: enterprise, Android, strongly typed
  - JavaScript: web, frontend, backend (Node.js)
- [37:00] Apa yang akan dipelajari di series ini (31 episodes)
- [40:00] Outro & next episode preview

**Infographics:**
- Diagram: "Code → Compiler/Interpreter → Machine"
- Language popularity chart 2026 (TIOBE/GitHub data)
- Typing systems matrix (static/dynamic × strong/weak)
- Comparison table: Python vs Java vs JavaScript
- Career paths diagram

---

#### Episode 2: Setup GitHub & Codespaces
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Kenapa GitHub?
  - Portfolio code kamu
  - Kolaborasi dengan developer lain
  - Standar industri
  - Gratis untuk pelajar
- [06:00] Buat akun GitHub
  - github.com → Sign up
  - Verifikasi email
  - Setup profile
- [10:00] Apa itu Repository?
  - Analogi: folder project di cloud
  - Public vs Private
- [13:00] Buat repository pertama
  - Nama: "belajar-programming"
  - Add README.md
  - Initialize repository
- [17:00] Apa itu GitHub Codespaces?
  - VS Code di browser
  - Semua bahasa sudah terinstall
  - Tidak perlu install apapun di komputer
- [20:00] Launch Codespaces
  - Klik "Code" → "Codespaces" → "Create codespace"
  - Tour interface (mirip VS Code)
  - Terminal sudah ready
- [24:00] Test environment
  - `python --version` ✓
  - `node --version` ✓
  - `java --version` ✓
  - Semua sudah siap!
- [27:00] Cara save & close Codespaces
  - Auto-save ke repository
  - Stop codespace saat tidak dipakai (hemat quota)
- [29:00] Outro

**Infographics:**
- GitHub signup flow
- Codespaces interface tour (labeled screenshot)
- Repository structure diagram

---

### Module 2: AI & First Program (Episodes 3-5)

#### Episode 3: AI untuk Belajar Programming
**Duration:** 40 min

**Outline:**
- [00:00] Intro - AI sebagai tool belajar
- [02:00] AI Tools untuk Programming
  - ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)
  - GitHub Copilot - langsung di editor
  - Semua bisa dipakai gratis (ada limit)
- [05:00] AI sebagai Tutor vs AI sebagai Cheat
  - Tutor: membantu MEMAHAMI
  - Cheat: mengerjakan UNTUK kamu
  - Analogi: personal trainer vs steroid
- [08:00] DO: Minta Penjelasan Konsep
  - "Jelaskan apa itu variable seperti aku anak SD"
  - AI sangat bagus untuk explain WHY
- [12:00] DO: Generate Latihan/Exercise
  - "Buat 5 soal latihan tentang if-else, jangan beri jawaban"
  - Kerjakan sendiri, baru minta review
- [16:00] DO: Minta Penjelasan Error
  - Copy-paste error message, minta PENJELASAN bukan SOLUSI
- [20:00] DO: Minta Analogi & Contoh
- [23:00] DO: Code Review setelah kamu tulis sendiri
- [26:00] DON'T: Minta Solusi Langsung
  - Copy-paste = illusion of learning
- [29:00] DON'T: Copy Tanpa Paham
- [32:00] DON'T: Skip Struggle (bingung itu normal!)
- [35:00] Prompt Template untuk Series Ini
  - Setiap episode akan ada AI Prompt untuk homework
- [39:00] Outro

**Infographics:**
- AI Tools comparison table
- DO vs DON'T checklist
- Prompt template examples

---

> **Git Workflow:** Mulai dari Episode 4, setiap akhir episode students akan:
> 1. Save files (auto-save in Codespaces)
> 2. Buka Terminal → `git add .` → `git commit -m "pesan"` → `git push`
> 3. Cek repository di GitHub (reinforcement)

#### Episode 4: Hello World - Program Pertamamu
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Tradisi "Hello World" dalam programming
- [04:00] Hello World in Python
  ```python
  print("Hello, World!")
  ```
  - Penjelasan: function print(), string dengan quotes
  - Run: `python hello.py`
- [10:00] Hello World in JavaScript
  ```javascript
  console.log("Hello, World!");
  ```
  - Penjelasan: console.log(), semicolon (optional tapi recommended)
  - Run: `node hello.js`
- [16:00] Hello World in Java
  ```java
  public class Hello {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }
  ```
  - Penjelasan: class, main method, System.out.println
  - Kenapa Java lebih panjang? (structure, OOP from start)
  - Run: `java Hello.java`
- [22:00] Perbandingan 3 bahasa
  - Python: paling ringkas
  - JavaScript: medium
  - Java: paling verbose, tapi explicit
- [24:00] Challenge: Ganti "World" dengan nama kamu
- [26:00] Save ke GitHub (first commit!)
  ```bash
  git add .
  git commit -m "Hello World in 3 languages"
  git push
  ```
  - Cek di github.com → repository kamu
- [29:00] Outro

**Infographics:**
- Side-by-side code comparison
- Anatomy of Hello World (labeled)
- Git workflow: add → commit → push

---

#### Episode 5: Komentar & Struktur Kode
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu komentar? (catatan untuk manusia, diabaikan komputer)
- [05:00] Komentar di Python
  ```python
  # Ini komentar satu baris
  """
  Ini komentar
  multiple baris
  """
  ```
- [10:00] Komentar di JavaScript
  ```javascript
  // Ini komentar satu baris
  /*
   * Ini komentar
   * multiple baris
   */
  ```
- [15:00] Komentar di Java
  ```java
  // Ini komentar satu baris
  /*
   * Ini komentar
   * multiple baris
   */
  /** Ini Javadoc comment */
  ```
- [20:00] Best practices komentar
  - Kapan perlu komentar (why, bukan what)
  - Kapan tidak perlu (self-documenting code)
- [23:00] Struktur kode yang rapi
  - Indentation (Python wajib, lainnya convention)
  - Naming conventions
- [27:00] Challenge: Tambahkan komentar ke Hello World
- [29:00] Outro

**Infographics:**
- Comment syntax comparison table
- Good vs Bad comment examples

---

### Module 3: Variables & Data Types (Episodes 6-9)

#### Episode 6: Variables - Menyimpan Data
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu variable? (analogi: kotak penyimpanan dengan label)
- [05:00] Variables di Python
  ```python
  nama = "Budi"
  umur = 25
  tinggi = 175.5
  sudah_menikah = False
  ```
  - Dynamic typing (tidak perlu deklarasi tipe)
- [12:00] Variables di JavaScript
  ```javascript
  let nama = "Budi";
  const umur = 25;
  var tinggi = 175.5;  // old style, avoid
  let sudahMenikah = false;
  ```
  - let vs const vs var
  - camelCase convention
- [19:00] Variables di Java
  ```java
  String nama = "Budi";
  int umur = 25;
  double tinggi = 175.5;
  boolean sudahMenikah = false;
  ```
  - Static typing (wajib deklarasi tipe)
  - Kenapa ini berguna? (error lebih awal)
- [26:00] Naming conventions summary
- [28:00] Challenge: Buat variables untuk profil kamu
- [29:00] Outro

**Infographics:**
- Variable as box analogy illustration
- Naming convention comparison table

---

#### Episode 7: Data Types & Typing Systems
**Duration:** 45 min

**Outline:**
- [00:00] Intro
- [02:00] Kenapa perlu tipe data? (komputer perlu tahu cara handle)

**Part 1: Typing Systems**
- [04:00] Static vs Dynamic Typing
  - Static: tipe dicek saat COMPILE (Java)
  - Dynamic: tipe dicek saat RUNTIME (Python, JS)
  - Analogi: static = cek KTP sebelum masuk, dynamic = cek di dalam
  ```python
  # Python (dynamic) - OK, tipe berubah
  x = 10
  x = "hello"  # tidak error
  ```
  ```java
  // Java (static) - ERROR!
  int x = 10;
  x = "hello";  // compile error
  ```
- [10:00] Strong vs Weak Typing
  - Strong: tidak otomatis konversi tipe (Python, Java)
  - Weak: otomatis konversi tipe / coercion (JavaScript)
  ```python
  # Python (strong) - ERROR
  "5" + 3  # TypeError!
  ```
  ```javascript
  // JavaScript (weak) - coercion terjadi
  "5" + 3   // "53" (string concatenation)
  "5" - 3   // 2 (numeric subtraction) WTF!
  ```
- [16:00] Summary: Typing Matrix
  |          | Strong | Weak |
  |----------|--------|------|
  | Static   | Java   | C    |
  | Dynamic  | Python | JavaScript |
  - Masing-masing ada tradeoff
  - Java: strict, error cepat ketahuan
  - Python: fleksibel tapi predictable
  - JavaScript: sangat fleksibel tapi bisa surprising

**Part 2: Data Types**
- [20:00] Tipe data dasar (primitive types)
  - Integer (bilangan bulat)
  - Float/Double (bilangan desimal)
  - String (teks)
  - Boolean (true/false)
- [23:00] Data types di Python
  ```python
  angka = 42          # int
  desimal = 3.14      # float
  teks = "hello"      # str
  benar = True        # bool
  print(type(angka))  # <class 'int'>
  ```
- [28:00] Data types di JavaScript
  ```javascript
  let angka = 42;           // number
  let desimal = 3.14;       // number (sama!)
  let teks = "hello";       // string
  let benar = true;         // boolean
  console.log(typeof angka); // "number"
  ```
  - JavaScript tidak bedakan int dan float
  - null vs undefined
- [33:00] Data types di Java
  ```java
  int angka = 42;
  double desimal = 3.14;
  String teks = "hello";
  boolean benar = true;
  // byte, short, long, float juga ada
  ```
  - Primitive vs Reference types
  - Wrapper classes (Integer, Double, etc.)

**Part 3: Floating Point Precision**
- [38:00] Floating Point Problem
  ```python
  print(0.1 + 0.2)  # 0.30000000000000004 !!!
  ```
  - Bukan bug, ini cara komputer simpan desimal
  - Binary tidak bisa represent 0.1 exactly
  - Seperti 1/3 = 0.333... di desimal
  - Masalah di SEMUA bahasa
- [41:00] Solusi: BigDecimal (Java) & Decimal (Python)
  ```java
  BigDecimal a = new BigDecimal("0.1");
  BigDecimal b = new BigDecimal("0.2");
  BigDecimal sum = a.add(b);  // 0.3 exactly!
  ```
  - Untuk aplikasi finansial: HARUS precise
  - Python: decimal.Decimal module
  - JavaScript: library decimal.js
  - Tradeoff: lebih lambat, tapi accurate
- [43:00] Challenge: Prediksi output (type coercion quiz)
- [44:00] Outro

**Infographics:**
- Static vs Dynamic typing diagram
- Strong vs Weak typing with examples
- Typing matrix (2x2 grid)
- Data types comparison table
- JavaScript coercion quirks cheat sheet
- Floating point visualization (binary representation)
- BigDecimal usage cheat sheet

---

#### Episode 8: Number Systems: Binary, Octal, Decimal, Hexadecimal
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Decimal (Base 10)
  - Yang kita pakai sehari-hari
  - 10 digits: 0-9
  - Positional notation
- [05:00] Binary (Base 2)
  - Bahasa komputer: hanya 0 dan 1
  - Conversion: 1011 binary = 11 decimal
  - Kenapa binary? Elektronik on/off
  - 1 bit = 1 binary digit, 8 bits = 1 byte
- [10:00] Binary dan Integer Limits
  - 8-bit unsigned: 0-255
  - 32-bit signed int: -2,147,483,648 sampai 2,147,483,647
  - Kenapa integer ada batasnya
- [13:00] Hexadecimal (Base 16)
  - 16 digits: 0-9, A-F
  - FF hex = 255 decimal
  - Compact way to represent binary
  - 2 hex digits = 1 byte
- [16:00] Hexadecimal dalam Programming
  - Color codes: #FF0000 = Red
  - Memory addresses: 0x7fff5fbff8c0
  - Unicode: \u0041 = 'A'
- [19:00] Octal (Base 8)
  - 8 digits: 0-7
  - Unix file permissions: chmod 755
  - 7 = rwx, 5 = r-x
- [22:00] Konversi di Code
  ```python
  # Python
  bin(255)  # '0b11111111'
  hex(255)  # '0xff'
  int('FF', 16)  # 255
  ```
  ```javascript
  // JavaScript
  (255).toString(2)  // '11111111'
  parseInt('FF', 16)  // 255
  ```
- [26:00] Practice & Git
- [29:00] Outro

**Infographics:**
- Number systems comparison table
- Binary to decimal conversion steps
- Hex color wheel
- Integer limits visualization

---

#### Episode 9: Type Conversion & String Operations
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Kenapa perlu konversi tipe?
- [04:00] Type conversion di Python
  ```python
  umur_str = "25"
  umur_int = int(umur_str)
  harga = 99.99
  harga_str = str(harga)
  ```
- [10:00] Type conversion di JavaScript
  ```javascript
  let umurStr = "25";
  let umurInt = parseInt(umurStr);
  let harga = 99.99;
  let hargaStr = String(harga);
  // Quirk: "5" + 3 = "53", "5" - 3 = 2
  ```
  - JavaScript type coercion quirks
- [17:00] Type conversion di Java
  ```java
  String umurStr = "25";
  int umurInt = Integer.parseInt(umurStr);
  double harga = 99.99;
  String hargaStr = String.valueOf(harga);
  ```
- [22:00] String concatenation
  ```python
  # Python
  nama = "Budi"
  pesan = "Halo, " + nama + "!"
  pesan = f"Halo, {nama}!"  # f-string
  ```
  ```javascript
  // JavaScript
  let nama = "Budi";
  let pesan = "Halo, " + nama + "!";
  let pesan = `Halo, ${nama}!`;  // template literal
  ```
  ```java
  // Java
  String nama = "Budi";
  String pesan = "Halo, " + nama + "!";
  ```
- [27:00] Challenge: Gabungkan data profil jadi kalimat
- [29:00] Outro

**Infographics:**
- Type conversion cheat sheet
- String concatenation comparison

---

### Module 4: Operators (Episodes 10-11)

#### Episode 10: Arithmetic & Assignment Operators
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Arithmetic operators (sama di semua bahasa)
  - `+` `-` `*` `/`
  - `%` (modulo/sisa bagi)
  - `**` (Python) vs `Math.pow()` (JS/Java)
- [08:00] Contoh praktis: kalkulator sederhana
- [14:00] Assignment operators
  - `=` `+=` `-=` `*=` `/=`
  - `++` `--` (JS & Java only, tidak ada di Python)
- [20:00] Integer division quirks
  - Python: `//` untuk integer division
  - JavaScript: `Math.floor(a/b)`
  - Java: `int / int` = int (otomatis)
- [25:00] Operator precedence (urutan operasi)
- [28:00] Challenge: Hitung luas & keliling
- [29:00] Outro

**Infographics:**
- Operator table with examples
- Precedence chart

---

#### Episode 11: Comparison & Logical Operators
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Comparison operators
  - `==` `!=` `>` `<` `>=` `<=`
- [06:00] Equality quirks
  - Python: `==` untuk value
  - JavaScript: `==` vs `===` (strict equality)
  - Java: `==` vs `.equals()` untuk objects
- [14:00] Logical operators
  - Python: `and` `or` `not`
  - JavaScript & Java: `&&` `||` `!`
- [20:00] Truthy & Falsy values
  - Python: `0, "", [], None` = falsy
  - JavaScript: `0, "", null, undefined, NaN` = falsy
  - Java: hanya `boolean` bisa jadi condition
- [25:00] Combining conditions
- [28:00] Challenge: Cek eligibility (umur >= 17 AND punya KTP)
- [29:00] Outro

**Infographics:**
- Comparison operators table
- Truthy/Falsy cheat sheet

---

### Module 5: Control Flow - Conditionals (Episodes 12-13)

#### Episode 12: If-Else - Membuat Keputusan
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu conditional? (analogi: lampu lalu lintas)
- [05:00] If-else di Python
  ```python
  umur = 18
  if umur >= 17:
      print("Boleh buat SIM")
  else:
      print("Belum boleh buat SIM")
  ```
  - Indentation adalah bagian dari syntax!
- [12:00] If-else di JavaScript
  ```javascript
  let umur = 18;
  if (umur >= 17) {
      console.log("Boleh buat SIM");
  } else {
      console.log("Belum boleh buat SIM");
  }
  ```
- [18:00] If-else di Java
  ```java
  int umur = 18;
  if (umur >= 17) {
      System.out.println("Boleh buat SIM");
  } else {
      System.out.println("Belum boleh buat SIM");
  }
  ```
- [23:00] Perbandingan syntax
  - Python: no parentheses, colon, indentation
  - JS/Java: parentheses, curly braces
- [26:00] Single-line if (ternary preview)
- [28:00] Challenge: Cek lulus/tidak lulus (nilai >= 60)
- [29:00] Outro

**Infographics:**
- Flowchart of if-else
- Syntax comparison side-by-side

---

#### Episode 13: Else-If & Nested Conditions
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Multiple conditions dengan else-if
- [05:00] Else-if di Python
  ```python
  nilai = 85
  if nilai >= 90:
      grade = "A"
  elif nilai >= 80:
      grade = "B"
  elif nilai >= 70:
      grade = "C"
  else:
      grade = "D"
  ```
- [11:00] Else-if di JavaScript
  ```javascript
  if (nilai >= 90) {
      grade = "A";
  } else if (nilai >= 80) {
      grade = "B";
  } // ...
  ```
- [16:00] Else-if di Java (sama dengan JS)
- [19:00] Switch-case (Java & JavaScript)
  ```java
  switch (day) {
      case 1: dayName = "Senin"; break;
      case 2: dayName = "Selasa"; break;
      // ...
      default: dayName = "Invalid";
  }
  ```
  - Python 3.10+ punya match-case
- [24:00] Nested if (if di dalam if)
- [27:00] Best practices: hindari terlalu dalam
- [28:00] Challenge: Konversi nilai ke grade
- [29:00] Outro

**Infographics:**
- Grade conversion flowchart
- Switch vs if-else comparison

---

### Module 6: Control Flow - Loops (Episodes 14-16)

#### Episode 14: For Loop - Pengulangan Terukur
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu loop? (analogi: repetisi workout)
- [05:00] For loop di Python
  ```python
  for i in range(5):
      print(i)  # 0, 1, 2, 3, 4

  fruits = ["apel", "jeruk", "mangga"]
  for fruit in fruits:
      print(fruit)
  ```
- [12:00] For loop di JavaScript
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }

  let fruits = ["apel", "jeruk", "mangga"];
  for (let fruit of fruits) {
      console.log(fruit);
  }
  ```
- [19:00] For loop di Java
  ```java
  for (int i = 0; i < 5; i++) {
      System.out.println(i);
  }

  String[] fruits = {"apel", "jeruk", "mangga"};
  for (String fruit : fruits) {
      System.out.println(fruit);
  }
  ```
- [25:00] Perbandingan syntax for loop
- [28:00] Challenge: Print 1-10
- [29:00] Outro

**Infographics:**
- For loop flowchart
- range() vs traditional for comparison

---

#### Episode 15: While Loop & Loop Control
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] While loop: loop dengan kondisi
- [05:00] While di Python
  ```python
  count = 0
  while count < 5:
      print(count)
      count += 1
  ```
- [10:00] While di JavaScript & Java (syntax mirip)
- [15:00] Infinite loop & cara menghindarinya
- [18:00] Break & Continue
  ```python
  for i in range(10):
      if i == 5:
          break  # keluar dari loop
      if i == 3:
          continue  # skip iterasi ini
      print(i)
  ```
- [24:00] Do-while (Java & JavaScript only)
  ```java
  do {
      // execute at least once
  } while (condition);
  ```
- [27:00] When to use for vs while
- [28:00] Challenge: Guess the number game (while loop)
- [29:00] Outro

**Infographics:**
- While loop flowchart
- Break vs Continue illustration

---

#### Episode 16: Nested Loops & Common Patterns
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Nested loops (loop dalam loop)
- [05:00] Contoh: Print multiplication table
  ```python
  for i in range(1, 11):
      for j in range(1, 11):
          print(f"{i} x {j} = {i*j}")
  ```
- [12:00] Contoh: Pattern printing (bintang segitiga)
- [18:00] Common loop patterns
  - Accumulator pattern (sum, count)
  - Search pattern (find item)
  - Filter pattern (collect matching items)
- [25:00] Performance consideration (nested loops = O(n²))
- [28:00] Challenge: Print pattern
- [29:00] Outro

**Infographics:**
- Nested loop visualization
- Common patterns cheat sheet

---

### Module 7: Functions (Episodes 17-19)

#### Episode 17: Functions - Kode yang Reusable
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu function? (analogi: mesin kopi)
- [05:00] Function di Python
  ```python
  def sapa(nama):
      return f"Halo, {nama}!"

  pesan = sapa("Budi")
  print(pesan)
  ```
- [12:00] Function di JavaScript
  ```javascript
  function sapa(nama) {
      return `Halo, ${nama}!`;
  }

  // Arrow function
  const sapa = (nama) => `Halo, ${nama}!`;
  ```
- [19:00] Function (method) di Java
  ```java
  public static String sapa(String nama) {
      return "Halo, " + nama + "!";
  }
  ```
  - Return type harus dideklarasikan
- [25:00] Void functions (tidak return value)
- [28:00] Challenge: Buat function hitung luas persegi
- [29:00] Outro

**Infographics:**
- Function anatomy diagram
- Function as black box illustration

---

#### Episode 18: Parameters & Arguments
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Parameter vs Argument
- [04:00] Multiple parameters
- [08:00] Default parameters
  ```python
  def sapa(nama, greeting="Halo"):
      return f"{greeting}, {nama}!"
  ```
  ```javascript
  function sapa(nama, greeting = "Halo") {
      return `${greeting}, ${nama}!`;
  }
  ```
- [15:00] Java: method overloading instead of defaults
  ```java
  public static String sapa(String nama) {
      return sapa(nama, "Halo");
  }
  public static String sapa(String nama, String greeting) {
      return greeting + ", " + nama + "!";
  }
  ```
- [20:00] Variable number of arguments
  - Python: `*args`, `**kwargs`
  - JavaScript: rest parameters `...args`
  - Java: varargs `String... args`
- [26:00] Named arguments (Python & JS)
- [28:00] Challenge: Function dengan multiple params
- [29:00] Outro

**Infographics:**
- Parameters vs Arguments diagram
- Default params comparison

---

#### Episode 19: Scope & Return Values
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu scope? (visibility of variables)
- [05:00] Local vs Global scope
  ```python
  total = 0  # global

  def add(x):
      result = x + 1  # local
      return result
  ```
- [12:00] Scope di JavaScript
  - var: function scope
  - let/const: block scope
  - Hoisting behavior
- [18:00] Scope di Java
  - Block scope dengan curly braces
  - Class-level vs method-level
- [22:00] Return multiple values
  - Python: return tuple
  - JavaScript: return object/array
  - Java: return object or use out parameters
- [26:00] Best practices: minimize global variables
- [28:00] Challenge: Fix scope bugs
- [29:00] Outro

**Infographics:**
- Scope visualization (nested boxes)
- Hoisting diagram (JS)

---

### Module 8: Data Structures (Episodes 20-23)

#### Episode 20: Arrays/Lists - Kumpulan Data
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu array/list? (analogi: daftar belanja)
- [05:00] List di Python
  ```python
  fruits = ["apel", "jeruk", "mangga"]
  fruits.append("durian")
  print(fruits[0])  # apel
  print(len(fruits))  # 4
  ```
- [12:00] Array di JavaScript
  ```javascript
  let fruits = ["apel", "jeruk", "mangga"];
  fruits.push("durian");
  console.log(fruits[0]);
  console.log(fruits.length);
  ```
- [18:00] Array di Java
  ```java
  // Fixed size array
  String[] fruits = {"apel", "jeruk", "mangga"};

  // Dynamic: ArrayList
  ArrayList<String> fruitList = new ArrayList<>();
  fruitList.add("apel");
  ```
- [24:00] Zero-based indexing
- [26:00] Negative indexing (Python only)
- [28:00] Challenge: Manage todo list
- [29:00] Outro

**Infographics:**
- Array indexing visualization
- List methods comparison table

---

#### Episode 21: Array Operations & Methods
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Common operations: add, remove, find
- [05:00] Python list methods
  ```python
  fruits.append(x)
  fruits.insert(i, x)
  fruits.remove(x)
  fruits.pop()
  fruits.sort()
  x in fruits  # check existence
  ```
- [12:00] JavaScript array methods
  ```javascript
  fruits.push(x);
  fruits.splice(i, 0, x);  // insert
  fruits.splice(i, 1);     // remove
  fruits.pop();
  fruits.sort();
  fruits.includes(x);
  ```
- [19:00] Java ArrayList methods
  ```java
  fruits.add(x);
  fruits.add(i, x);
  fruits.remove(i);
  fruits.remove(x);
  Collections.sort(fruits);
  fruits.contains(x);
  ```
- [25:00] Slicing (Python & JS)
- [28:00] Challenge: Array manipulation
- [29:00] Outro

**Infographics:**
- Array methods comparison table
- Slicing visualization

---

#### Episode 22: Dictionaries/Objects - Key-Value Pairs
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu dictionary/object? (analogi: kamus, phonebook)
- [05:00] Dictionary di Python
  ```python
  person = {
      "nama": "Budi",
      "umur": 25,
      "kota": "Jakarta"
  }
  print(person["nama"])
  person["email"] = "budi@email.com"
  ```
- [12:00] Object di JavaScript
  ```javascript
  let person = {
      nama: "Budi",
      umur: 25,
      kota: "Jakarta"
  };
  console.log(person.nama);
  console.log(person["nama"]);
  person.email = "budi@email.com";
  ```
- [19:00] HashMap di Java
  ```java
  HashMap<String, Object> person = new HashMap<>();
  person.put("nama", "Budi");
  person.put("umur", 25);
  System.out.println(person.get("nama"));
  ```
  - Or use a class (preview OOP)
- [25:00] Iterating over dictionaries
- [28:00] Challenge: Build a contact book
- [29:00] Outro

**Infographics:**
- Dictionary visualization (key → value)
- Syntax comparison table

---

#### Episode 23: Sets & Tuples
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Sets: unique values only
  ```python
  colors = {"red", "green", "blue", "red"}  # only 3 items
  ```
- [08:00] Sets di ketiga bahasa
- [14:00] Set operations: union, intersection, difference
- [18:00] Tuples (Python) - immutable list
  ```python
  point = (10, 20)
  x, y = point  # unpacking
  ```
- [22:00] When to use what?
  - List/Array: ordered, duplicates OK
  - Set: unique items, fast lookup
  - Tuple: fixed data, immutable
  - Dict/Object: key-value mapping
- [27:00] Immutability benefits
- [28:00] Challenge: Remove duplicates from list
- [29:00] Outro

**Infographics:**
- Data structure decision tree
- Set operations Venn diagram

---

### Module 9: String Manipulation (Episodes 24-25)

#### Episode 24: String Methods
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Strings sebagai array of characters
- [05:00] Common string methods di Python
  ```python
  s = "Hello World"
  s.upper()
  s.lower()
  s.split(" ")
  s.strip()
  s.replace("World", "Python")
  s.find("World")
  ```
- [12:00] String methods di JavaScript
- [18:00] String methods di Java
- [24:00] String immutability
- [27:00] StringBuilder (Java) for efficiency
- [28:00] Challenge: Process user input
- [29:00] Outro

**Infographics:**
- String methods comparison table
- String indexing visualization

---

#### Episode 25: Regular Expressions Intro
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu regex? (pattern matching)
- [05:00] Basic patterns
  - `.` `*` `+` `?`
  - `\d` `\w` `\s`
  - `[]` `^` `$`
- [12:00] Regex di Python
  ```python
  import re
  pattern = r"\d{4}-\d{2}-\d{2}"
  re.match(pattern, "2024-01-15")
  ```
- [18:00] Regex di JavaScript
  ```javascript
  let pattern = /\d{4}-\d{2}-\d{2}/;
  pattern.test("2024-01-15");
  ```
- [22:00] Regex di Java
- [25:00] Common use cases: validation (email, phone)
- [28:00] Challenge: Validate email format
- [29:00] Outro

**Infographics:**
- Regex cheat sheet
- Pattern matching visualization

---

### Module 10: Error Handling (Episodes 26-27)

#### Episode 26: Exceptions & Try-Catch
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Apa itu error/exception? (things go wrong)
- [05:00] Common errors
  - SyntaxError
  - TypeError
  - ValueError/NumberFormatException
  - IndexError/ArrayIndexOutOfBounds
- [10:00] Try-catch di Python
  ```python
  try:
      result = 10 / 0
  except ZeroDivisionError:
      print("Cannot divide by zero")
  finally:
      print("Always runs")
  ```
- [17:00] Try-catch di JavaScript
  ```javascript
  try {
      throw new Error("Something went wrong");
  } catch (e) {
      console.log(e.message);
  } finally {
      console.log("Always runs");
  }
  ```
- [23:00] Try-catch di Java
- [27:00] When to use try-catch
- [28:00] Challenge: Handle user input errors
- [29:00] Outro

**Infographics:**
- Exception handling flowchart
- Common exceptions table

---

#### Episode 27: Debugging Techniques
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Print debugging
- [06:00] Using debugger di VS Code
  - Breakpoints
  - Step over/into/out
  - Watch variables
- [15:00] Reading error messages
- [20:00] Common bugs & how to fix
  - Off-by-one errors
  - Null/undefined errors
  - Type errors
- [25:00] Debugging mindset
- [28:00] Challenge: Fix buggy code
- [29:00] Outro

**Infographics:**
- VS Code debugger interface guide
- Error message anatomy

---

### Module 11: File I/O (Episode 28)

#### Episode 28: Reading & Writing Files
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Kenapa perlu file I/O?
- [05:00] File I/O di Python
  ```python
  # Write
  with open("data.txt", "w") as f:
      f.write("Hello World")

  # Read
  with open("data.txt", "r") as f:
      content = f.read()
  ```
- [12:00] File I/O di JavaScript (Node.js)
  ```javascript
  const fs = require("fs");
  fs.writeFileSync("data.txt", "Hello World");
  const content = fs.readFileSync("data.txt", "utf8");
  ```
- [18:00] File I/O di Java
- [23:00] JSON files
- [27:00] Best practices (close files, error handling)
- [28:00] Challenge: Simple note-taking app
- [29:00] Outro

**Infographics:**
- File modes (r, w, a) explanation
- JSON structure

---

### Module 12: Final Projects (Episodes 29-32)

#### Episode 29: Project - Calculator App
**Duration:** 30 min

**Outline:**
- [00:00] Intro & project overview
- [02:00] Buat repository baru: "calculator-app"
- [05:00] Planning the calculator
- [10:00] Implementation di Python
- [17:00] Implementation di JavaScript
- [24:00] Implementation di Java
- [27:00] Commit & push ke GitHub
- [28:00] Comparison & review
- [29:00] Outro

---

#### Episode 30: Project - Todo List App
**Duration:** 30 min

**Outline:**
- [00:00] Intro & project overview
- [02:00] Buat repository: "todo-list-app"
- [05:00] Features: add, list, complete, delete
- [08:00] Implementation (choose 1 language, show snippets of others)
- [22:00] Save to file
- [25:00] Commit changes progressively (good Git habits)
- [28:00] Ideas for enhancement
- [29:00] Outro

---

#### Episode 31: Project - Number Guessing Game
**Duration:** 30 min

**Outline:**
- [00:00] Intro & project overview
- [02:00] Buat repository: "guessing-game"
- [05:00] Game logic
- [10:00] Implementation with loops, conditionals, functions
- [20:00] Add features: difficulty levels, score tracking
- [26:00] Final commit & review Git history
- [28:00] Wrap up
- [29:00] Outro

---

#### Episode 32: Series Wrap-Up & Next Steps
**Duration:** 30 min

**Outline:**
- [00:00] Intro
- [02:00] Recap semua yang dipelajari
- [10:00] Apa yang sudah bisa kamu lakukan
- [15:00] Next learning paths
  - Python: Data Science, Web (Django/Flask), Automation
  - JavaScript: Frontend (React), Backend (Node.js), Mobile (React Native)
  - Java: Android, Enterprise (Spring), Big Data
- [22:00] Resources untuk belajar lanjut
- [25:00] Tips for continuous learning
- [28:00] Thank you & goodbye
- [29:00] Outro

**Infographics:**
- Learning roadmap diagram
- Resource list

---

## Production Notes

### Per-Episode Template
1. Intro bumper (5 sec)
2. Topic overview with infographic
3. Python implementation + explanation
4. JavaScript implementation + comparison
5. Java implementation + comparison
6. Side-by-side comparison slide
7. Challenge/exercise
8. Outro bumper (5 sec)

### Infographic Style Guide
- Dark theme (matches code editor)
- Monospace font for code
- Syntax highlighting colors
- Side-by-side language comparisons
- Animated bullet points

### Code Display
- Use CodeHighlight component
- Show line numbers
- Highlight important lines
- Large font for readability

### Camera Switching Pattern
- Intro/outro: webcam fullscreen
- Explanation: webcam fullscreen or PIP
- Coding: screen with webcam PIP
- Comparison slides: screen only
