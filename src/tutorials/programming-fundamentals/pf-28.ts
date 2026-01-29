import { VideoOutline } from "../types";

export const pf28: VideoOutline = {
  episodeId: "pf-28",
  seriesId: "programming-fundamentals",
  title: "Reading & Writing Files",
  description: "Mempelajari cara membaca dan menulis file. Text files dan JSON.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: debugging techniques",
        "Hari ini: file I/O",
        "Program yang bisa simpan dan load data",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Kenapa File I/O?",
      talkingPoints: [
        "Data persist setelah program selesai",
        "Load configuration dari file",
        "Save user data",
        "Process data dalam file (CSV, JSON, etc)",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "File I/O di Python",
      talkingPoints: [
        "open() untuk buka file",
        "with statement untuk auto-close",
        "Modes: r (read), w (write), a (append)",
        "read(), readline(), readlines()",
        "write() untuk menulis",
      ],
      notes: "Live coding: Python file I/O",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "File I/O di JavaScript (Node.js)",
      talkingPoints: [
        "require('fs') untuk file system",
        "readFileSync() / writeFileSync()",
        "Async versions: readFile(), writeFile()",
        "Specify encoding: 'utf8'",
      ],
      notes: "Live coding: Node.js file I/O",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "File I/O di Java",
      talkingPoints: [
        "Files class (modern way)",
        "Files.readString(), Files.writeString()",
        "BufferedReader untuk large files",
        "Try-with-resources untuk auto-close",
      ],
      notes: "Live coding: Java file I/O",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "Working with JSON",
      talkingPoints: [
        "JSON: universal data format",
        "Python: json.load(), json.dump()",
        "JS: JSON.parse(), JSON.stringify()",
        "Java: Jackson atau Gson library",
        "Sangat penting untuk APIs",
      ],
      notes: "Live coding: JSON read/write",
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Simple note-taking app",
        "Save notes to file, load on start",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: file I/O dan JSON",
        "Next episode: Project Calculator!",
        "Ready for final projects!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Reading & Writing Files",
      subtitle: "Programming Fundamentals - Episode 28",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python File I/O

# Write to file
with open("notes.txt", "w") as f:
    f.write("Belajar Python\\n")
    f.write("File I/O\\n")

# Read from file
with open("notes.txt", "r") as f:
    content = f.read()
    print(content)

# JSON
import json

data = {"nama": "Budi", "umur": 25}

# Write JSON
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["nama"])  # "Budi"`,
      title: "file_io.py",
      highlightLines: [4, 5, 10, 11, 19, 20, 24, 25],
      showAtFrame: 9000,
      hideAtFrame: 27000,
    },
    {
      code: `// JavaScript (Node.js) File I/O
const fs = require('fs');

// Write to file (sync)
fs.writeFileSync('notes.txt', 'Belajar JavaScript\\nFile I/O\\n');

// Read from file (sync)
const content = fs.readFileSync('notes.txt', 'utf8');
console.log(content);

// JSON
const data = { nama: "Budi", umur: 25 };

// Write JSON
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

// Read JSON
const loaded = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.log(loaded.nama);  // "Budi"`,
      title: "file_io.js",
      highlightLines: [5, 8, 15, 18],
      showAtFrame: 21600,
      hideAtFrame: 39600,
    },
  ],
};
