import { VideoOutline } from "../types";

export const pf18: VideoOutline = {
  episodeId: "pf-18",
  seriesId: "programming-fundamentals",
  title: "Parameters & Arguments",
  description: "Mempelajari cara passing data ke functions: parameters, arguments, default values, dan variadic functions.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Recap: function basics",
        "Hari ini: parameters lebih dalam",
        "Cara passing data ke function",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Parameter vs Argument",
      talkingPoints: [
        "Parameter: variable di definisi function",
        "Argument: nilai yang dipass saat call",
        "def sapa(nama): → nama adalah parameter",
        "sapa('Budi') → 'Budi' adalah argument",
        "Sering dipakai bergantian",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "05:00",
      title: "Multiple Parameters",
      talkingPoints: [
        "Function bisa punya banyak parameter",
        "Dipisah dengan koma",
        "Urutan penting saat call",
        "Terlalu banyak = code smell",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "09:00",
      title: "Default Parameters",
      talkingPoints: [
        "Nilai default jika tidak dipass",
        "Python: def sapa(nama, greeting='Halo')",
        "JavaScript: function sapa(nama, greeting = 'Halo')",
        "Java: tidak punya, pakai method overloading",
      ],
      notes: "Live coding: default params",
      showOnScreen: "code",
    },
    {
      timestamp: "15:00",
      title: "Java Method Overloading",
      talkingPoints: [
        "Java: multiple methods dengan nama sama",
        "Berbeda di jumlah/tipe parameter",
        "Cara Java handle 'default' params",
      ],
      notes: "Live coding: method overloading Java",
      showOnScreen: "code",
    },
    {
      timestamp: "19:00",
      title: "Named Arguments",
      talkingPoints: [
        "Pass argument dengan nama",
        "Urutan tidak penting",
        "Python: sapa(greeting='Hi', nama='Budi')",
        "JavaScript: pass object { nama: 'Budi' }",
        "Java: tidak support langsung",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "23:00",
      title: "Variable Arguments",
      talkingPoints: [
        "Terima jumlah argument yang tidak pasti",
        "Python: *args (tuple), **kwargs (dict)",
        "JavaScript: ...args (rest parameter)",
        "Java: Type... args (varargs)",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "27:00",
      title: "Challenge & Git",
      talkingPoints: [
        "Function dengan default greeting",
        "git add, commit, push",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Recap: parameters dan arguments",
        "Next episode: scope dan return values",
        "Keep coding!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Parameters & Arguments",
      subtitle: "Programming Fundamentals - Episode 18",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Python Default & Named Parameters

# Default parameter
def sapa(nama, greeting="Halo"):
    return f"{greeting}, {nama}!"

print(sapa("Budi"))           # "Halo, Budi!"
print(sapa("Budi", "Hi"))     # "Hi, Budi!"

# Named arguments (keyword arguments)
print(sapa(greeting="Hey", nama="Ani"))  # "Hey, Ani!"

# Variable arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15`,
      title: "parameters.py",
      highlightLines: [4, 8, 11, 14],
      showAtFrame: 16200,
      hideAtFrame: 34200,
    },
    {
      code: `// Java Method Overloading
public class Greeter {

    // Method 1: hanya nama
    public static String sapa(String nama) {
        return sapa(nama, "Halo");  // call method 2
    }

    // Method 2: nama + greeting
    public static String sapa(String nama, String greeting) {
        return greeting + ", " + nama + "!";
    }

    public static void main(String[] args) {
        System.out.println(sapa("Budi"));         // "Halo, Budi!"
        System.out.println(sapa("Budi", "Hi"));   // "Hi, Budi!"
    }
}`,
      title: "Greeter.java",
      highlightLines: [5, 6, 10, 11],
      showAtFrame: 34200,
      hideAtFrame: 41400,
    },
  ],
};
