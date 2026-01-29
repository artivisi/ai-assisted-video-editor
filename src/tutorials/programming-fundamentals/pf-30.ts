import { VideoOutline } from "../types";

export const pf30: VideoOutline = {
  episodeId: "pf-30",
  seriesId: "programming-fundamentals",
  title: "Project: Todo List App",
  description: "Final project kedua: membuat todo list app dengan CRUD operations dan file persistence.",
  duration: 1800,
  fps: 30,

  outline: [
    {
      timestamp: "00:00",
      title: "Intro",
      talkingPoints: [
        "Project 2: Todo List App",
        "More complex: CRUD + file storage",
        "Real-world application pattern",
      ],
      showOnScreen: "webcam",
    },
    {
      timestamp: "02:00",
      title: "Project Overview",
      talkingPoints: [
        "Features: Add, List, Complete, Delete",
        "Save to file (persist data)",
        "Load on startup",
        "Menu-driven interface",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "04:00",
      title: "Buat Repository",
      talkingPoints: [
        "Nama: todo-list-app",
        "Create codespace",
        "Kita akan fokus di Python",
        "Tapi tunjukkan snippet JS dan Java",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "06:00",
      title: "Data Structure",
      talkingPoints: [
        "Todo item: {id, text, completed}",
        "List of todos",
        "Save sebagai JSON",
        "Auto-increment ID",
      ],
      showOnScreen: "slide",
    },
    {
      timestamp: "09:00",
      title: "Core Functions",
      talkingPoints: [
        "add_todo(text)",
        "list_todos()",
        "complete_todo(id)",
        "delete_todo(id)",
        "save_todos() / load_todos()",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "14:00",
      title: "Implement Add & List",
      talkingPoints: [
        "Add: append to list dengan new ID",
        "List: print semua dengan status",
        "[] untuk incomplete, [x] untuk complete",
      ],
      notes: "Live coding: add dan list",
      showOnScreen: "code",
    },
    {
      timestamp: "18:00",
      title: "Implement Complete & Delete",
      talkingPoints: [
        "Find todo by ID",
        "Complete: set completed = True",
        "Delete: remove from list",
        "Handle ID not found",
      ],
      notes: "Live coding: complete dan delete",
      showOnScreen: "code",
    },
    {
      timestamp: "22:00",
      title: "File Persistence",
      talkingPoints: [
        "save_todos(): write JSON to file",
        "load_todos(): read JSON from file",
        "Call load on startup",
        "Call save after every change",
      ],
      notes: "Live coding: file persistence",
      showOnScreen: "code",
    },
    {
      timestamp: "26:00",
      title: "Main Menu Loop",
      talkingPoints: [
        "Display menu options",
        "Get user choice",
        "Call appropriate function",
        "Loop until quit",
      ],
      showOnScreen: "code",
    },
    {
      timestamp: "28:00",
      title: "Commit & Review",
      talkingPoints: [
        "git add, commit, push",
        "Concepts: lists, dicts, functions, file I/O, loops",
        "Ideas for enhancement",
      ],
      showOnScreen: "demo",
    },
    {
      timestamp: "29:00",
      title: "Outro",
      talkingPoints: [
        "Todo List complete!",
        "Next project: Number Guessing Game",
        "You're building real apps!",
      ],
      showOnScreen: "webcam",
    },
  ],

  lowerThirds: [
    {
      title: "Project: Todo List",
      subtitle: "Programming Fundamentals - Episode 30",
      showAtFrame: 90,
      hideAtFrame: 270,
    },
  ],

  codeSnippets: [
    {
      code: `# Todo List App - Python
import json

FILENAME = "todos.json"
todos = []

def load_todos():
    global todos
    try:
        with open(FILENAME, "r") as f:
            todos = json.load(f)
    except FileNotFoundError:
        todos = []

def save_todos():
    with open(FILENAME, "w") as f:
        json.dump(todos, f, indent=2)

def add_todo(text):
    new_id = max([t["id"] for t in todos], default=0) + 1
    todos.append({"id": new_id, "text": text, "completed": False})
    save_todos()
    print(f"Added: {text}")

def list_todos():
    if not todos:
        print("No todos yet!")
        return
    for todo in todos:
        status = "[x]" if todo["completed"] else "[ ]"
        print(f"{todo['id']}. {status} {todo['text']}")`,
      title: "todo.py",
      highlightLines: [8, 9, 10, 11, 16, 17, 20, 21, 22, 29, 30],
      showAtFrame: 16200,
      hideAtFrame: 39600,
    },
  ],
};
