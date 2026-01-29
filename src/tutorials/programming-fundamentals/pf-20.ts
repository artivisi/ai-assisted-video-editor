import { VideoOutline } from "../types";

export const pf20: VideoOutline = {
  episodeId: "pf-20",
  seriesId: "programming-fundamentals",
  title: "Arrays/Lists - Kumpulan Data",
  description: "Mempelajari arrays dan lists untuk menyimpan kumpulan data. Indexing, creating, dan basic operations.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: functions dan scope",
        "Hari ini: data structures!",
        "Menyimpan banyak data sekaligus",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Apa Itu Array/List?",
      talkingPoints: [
        "Kumpulan data dalam satu variable",
        "Analogi: daftar belanja",
        "Diakses dengan index (nomor urut)",
        "Bisa simpan banyak item",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "List di Python",
      talkingPoints: [
        "Dibuat dengan square brackets []",
        "Bisa campur tipe (tapi hindari)",
        "Dynamic: bisa grow/shrink",
        "list.append() untuk tambah",
      ],
      notes: "Live coding: Python lists",
      showOnScreen: "code",
    },
    {
      timestamp: "12:00",
      title: "Array di JavaScript",
      talkingPoints: [
        "Dibuat dengan []",
        "Bisa campur tipe (dynamic)",
        "array.push() untuk tambah",
        "Similar dengan Python list",
      ],
      notes: "Live coding: JavaScript arrays",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Array di Java",
      talkingPoints: [
        "Fixed size: String[] arr = new String[5]",
        "Atau: String[] arr = {'a', 'b', 'c'}",
        "Dynamic: ArrayList<String>",
        "Harus satu tipe (generics)",
      ],
      notes: "Live coding: Java arrays dan ArrayList",
      showOnScreen: "code",
    },
    {
      timestamp: "23:00",
      title: "Indexing (Zero-Based)",
      talkingPoints: [
        "Index mulai dari 0, bukan 1!",
        "arr[0] = item pertama",
        "arr[1] = item kedua",
        "Common mistake: off-by-one error",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "25:00",
      title: "Negative Indexing (Python)",
      talkingPoints: [
        "Python only!",
        "arr[-1] = item terakhir",
        "arr[-2] = item kedua dari belakang",
        "Sangat berguna",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Buat array/list of fruits",
        "Print first dan last item",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: arrays untuk kumpulan data",
        "Next episode: array operations",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Arrays & Lists",
      subtitle: "Programming Fundamentals - Episode 20",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python List
fruits = ["apel", "jeruk", "mangga"]

# Akses dengan index (mulai dari 0!)
print(fruits[0])   # "apel"
print(fruits[1])   # "jeruk"
print(fruits[-1])  # "mangga" (terakhir)

# Tambah item
fruits.append("durian")
print(fruits)  # ["apel", "jeruk", "mangga", "durian"]

# Length
print(len(fruits))  # 4`,
      title: "lists.py",
      highlightLines: [5, 6, 7, 10],
      showAtFrame: 9000,
      hideAtFrame: 21600,
    },
    {
      code: `// Java Array vs ArrayList
import java.util.ArrayList;

// Fixed-size Array
String[] fruits = {"apel", "jeruk", "mangga"};
System.out.println(fruits[0]);  // "apel"
// fruits.add("durian");  // ERROR! fixed size

// Dynamic ArrayList
ArrayList<String> fruitList = new ArrayList<>();
fruitList.add("apel");
fruitList.add("jeruk");
fruitList.add("mangga");
fruitList.add("durian");  // OK! dynamic

System.out.println(fruitList.get(0));  // "apel"
System.out.println(fruitList.size());  // 4`,
      title: "Arrays.java",
      highlightLines: [5, 10, 11, 12, 13, 14],
      showAtFrame: 32400,
      hideAtFrame: 45000,
    },
  ],
};
