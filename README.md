# PyMaster - Learn Python Programming

A full-featured, interactive Python learning platform built with React and packaged as a native Android app using Capacitor. Learn Python from scratch with 60+ lessons, a live code editor powered by Pyodide (WebAssembly Python), 50+ quizzes, and real-time progress tracking.

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run in Browser](#run-in-browser)
  - [Build Android APK](#build-android-apk)
  - [Install on Phone](#install-on-phone)
- [How It Works](#how-it-works)
- [Lesson Categories](#lesson-categories)
- [Smart Check Code Analyzer](#smart-check-code-analyzer)
- [Configuration](#configuration)
- [Scripts Reference](#scripts-reference)
- [License](#license)

---

## Features

### Interactive Lessons (60+)
- **20 Beginner Lessons** - Hello World, variables, strings, loops, functions, lists, dictionaries, file I/O, and more
- **10 Intermediate Lessons** - List comprehensions, decorators, generators, regex, error handling
- **10 Advanced Lessons** - Metaclasses, async/await, design patterns, concurrency, memory management
- **10 Data Science Lessons** - NumPy, pandas, data visualization, statistics, machine learning basics
- **10 Library Lessons** - Popular Python packages and their real-world usage
- Each lesson includes code examples, explanations, tips, and interactive exercises

### Live Python Code Editor
- Full **Monaco Editor** (same editor engine as VS Code) with Python syntax highlighting
- **Run Python directly in the app** using Pyodide (Python compiled to WebAssembly - no server needed)
- Bracket pair colorization, line numbers, word wrap, auto-layout
- Output console with copy-to-clipboard support
- "Try in Editor" buttons in lessons to instantly load code examples
- Keyboard shortcut: `Ctrl+Enter` to run code

### Smart Check - Real-Time Code Analyzer
- Detects **30+ common Python mistakes** as you type, before you even run the code
- Three severity levels: Errors, Warnings, and Tips
- **Auto-fix suggestions** with one-click "Fix" and "Fix All" buttons
- Inline Monaco editor markers (squiggly underlines) for visual feedback
- Expandable explanations for each diagnostic
- Detects issues like:
  - Missing colons after `if`, `for`, `while`, `def`, `class`
  - Indentation errors
  - Undefined variables and unused imports
  - Mutable default arguments
  - Comparison vs assignment mistakes (`=` vs `==`)
  - f-string syntax errors
  - Bracket mismatches
  - And many more

### Quizzes (50+)
- One quiz per lesson with **8 multiple-choice questions** each
- Instant feedback with correct/wrong highlighting
- Detailed explanations for every answer
- Score tracking and persistence
- Results displayed as percentage with performance ratings

### Progress Dashboard
- Tracks completed lessons and quiz scores in **localStorage**
- Completion rates broken down by difficulty level (Beginner, Intermediate, Advanced, Data, Library)
- Visual progress bars with color coding
- Recent activity feed showing last completed lessons and quizzes
- Average quiz score calculation
- Full progress reset option

### Interactive Exercises
- Hands-on coding challenges embedded in each lesson
- Built-in test runner that validates your solution against expected outputs
- Progressive hint system (up to 3 hints per exercise)
- Celebration animation on successful completion
- Solution reveal option when stuck

### Mobile-First Design
- Fully responsive layout from desktop to small mobile screens
- Collapsible sidebar with hamburger menu on mobile
- Touch-optimized interface
- Safe area support for devices with notches
- Dark futuristic theme with glowing accents (cyan, purple, green, pink)
- Animated matrix code background

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite 5** | Build tool and dev server |
| **Monaco Editor** | Code editor component (VS Code engine) |
| **Pyodide 0.24.1** | Python interpreter compiled to WebAssembly |
| **Capacitor 6** | Native Android app wrapper |
| **Lucide React** | Icon library |
| **localStorage** | Client-side progress persistence |

---

## Project Structure

```
learn python/
├── android/                    # Native Android project (Capacitor)
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── java/com/pymaster/learninghub/
│   │   │   │   └── MainActivity.java
│   │   │   ├── res/            # Android resources (icons, splash, styles)
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   ├── gradle/
│   ├── build.gradle
│   ├── variables.gradle
│   └── gradlew / gradlew.bat
├── src/
│   ├── components/
│   │   ├── App.jsx             # Main app with routing and state
│   │   ├── CodeEditor.jsx      # Monaco editor + Pyodide integration
│   │   ├── Dashboard.jsx       # Progress tracking dashboard
│   │   ├── InteractiveExercise.jsx  # In-lesson coding exercises
│   │   ├── LessonView.jsx      # Lesson list + detail renderer
│   │   ├── MatrixBackground.jsx # Animated background effect
│   │   ├── QuizView.jsx        # Quiz engine with scoring
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   └── Welcome.jsx         # Home/landing page
│   ├── data/
│   │   ├── lessons.js          # Lesson aggregator (all difficulties)
│   │   ├── beginnerChallenges.js  # Beginner interactive exercises
│   │   ├── dataLessons.js      # Data science lesson content
│   │   ├── dataQuizzes.js      # Data science quiz questions
│   │   ├── libraryLessons.js   # Library lesson content
│   │   ├── libraryQuizzes.js   # Library quiz questions
│   │   └── quizzes.js          # Quiz aggregator (all difficulties)
│   ├── hooks/
│   │   ├── useCodeAnalyzer.js  # Smart Check engine (30+ rules)
│   │   ├── useProgress.js      # localStorage progress management
│   │   └── usePyodide.js       # Pyodide Python runtime loader
│   ├── main.jsx                # Entry point with error boundary
│   └── styles.css              # Complete app styling (2300+ lines)
├── capacitor.config.json       # Capacitor configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite build configuration
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js 18+** and **npm**
- **Java JDK 17** (for Android builds)
- **Android SDK** (via Android Studio) - for building the APK
- **adb** (Android Debug Bridge) - for installing on a phone

### Installation

```bash
# Clone the repository
git clone https://github.com/christm45/MasterPyton-1..2..GO.git
cd MasterPyton-1..2..GO

# Install dependencies
npm install
```

### Run in Browser

```bash
# Start the development server
npm run dev
```

Opens at `http://localhost:3000` with hot module replacement.

### Build Android APK

```bash
# Build web assets and sync to Android project
npm run android:sync

# Open in Android Studio (for full IDE experience)
npm run android:open

# Or build the APK directly via command line
cd android
./gradlew assembleDebug
```

The debug APK will be at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Install on Phone

Connect your Android phone via USB with **USB Debugging** enabled, then:

```bash
# Install the APK
adb install -r android/app/build/outputs/apk/debug/app-debug.apk

# Optionally copy the APK file to the phone's Downloads folder
adb push android/app/build/outputs/apk/debug/app-debug.apk /sdcard/Download/PyMaster.apk
```

---

## How It Works

### Python Execution
The app uses **Pyodide** - a full CPython interpreter compiled to WebAssembly. When you click "Run" in the code editor:

1. Pyodide is loaded from CDN on first use (~10MB download, cached by the browser)
2. Your Python code runs entirely client-side in the WebView/browser
3. stdout/stderr are captured and displayed in the output console
4. No server or internet needed after initial Pyodide load

### Android App
The Android app is built with **Capacitor**, which wraps the web app in a native Android WebView:

- App ID: `com.pymaster.learninghub`
- Min SDK: 22 (Android 5.1+)
- Target SDK: 34 (Android 14)
- Internet permission for loading Pyodide and Monaco from CDN
- localStorage persists across app sessions
- Dark status bar and navigation bar matching the app theme

### Progress Tracking
All progress is stored in `localStorage` under the key `pymaster-progress`:
- Completed lesson IDs
- Quiz scores with timestamps
- Last active date

Progress persists across browser sessions and Android app restarts. Use the Dashboard's reset button to clear all data.

---

## Lesson Categories

| Category | Count | Topics |
|---|---|---|
| **Beginner** | 20 | Hello World, Variables, Strings, Numbers, Booleans, Lists, Tuples, Dictionaries, Sets, If/Else, For Loops, While Loops, Functions, Scope, Modules, File I/O, Exceptions, OOP Basics, Inheritance, List Comprehensions |
| **Intermediate** | 10 | Advanced OOP, Decorators, Generators, Context Managers, Regular Expressions, Functional Programming, Error Handling Patterns, Data Structures, Algorithms, Testing |
| **Advanced** | 10 | Metaclasses, Descriptors, Async/Await, Concurrency, Memory Management, Design Patterns, Type Hints, C Extensions, Profiling, Python Internals |
| **Data Science** | 10 | NumPy, Pandas, Matplotlib, Data Cleaning, Statistics, Scikit-learn, Data Visualization, Time Series, Feature Engineering, ML Pipelines |
| **Libraries** | 10 | Requests, BeautifulSoup, Flask, SQLAlchemy, Pillow, Celery, Click, Pytest, Logging, Packaging |

---

## Smart Check Code Analyzer

The built-in static analyzer runs in real-time as you type and catches common Python mistakes before execution. It operates entirely client-side using pattern matching and AST-like analysis.

### Detection Rules Include:

| Category | Examples |
|---|---|
| **Syntax Errors** | Missing colons, unclosed brackets, invalid indentation |
| **Type Errors** | String/number concatenation without conversion |
| **Logic Errors** | Assignment in conditions (`=` instead of `==`), unreachable code |
| **Style Warnings** | Mutable default arguments, bare `except`, unused variables |
| **Best Practices** | f-string suggestions, proper comparison operators, naming conventions |

Each diagnostic includes:
- Severity level (Error / Warning / Tip)
- Line and column location
- Human-readable explanation
- One-click auto-fix (where applicable)

---

## Configuration

### `capacitor.config.json`
```json
{
  "appId": "com.pymaster.learninghub",
  "appName": "PyMaster",
  "webDir": "dist",
  "server": {
    "androidScheme": "https"
  },
  "android": {
    "allowMixedContent": true,
    "captureInput": true,
    "webContentsDebuggingEnabled": true
  }
}
```

### `vite.config.js`
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

---

## Scripts Reference

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite` | Start local dev server on port 3000 |
| `npm run build` | `vite build` | Production build to `dist/` |
| `npm run preview` | `vite preview` | Preview the production build locally |
| `npm run android:sync` | `build + cap sync` | Build web assets and sync to Android project |
| `npm run android:open` | `cap open android` | Open Android project in Android Studio |
| `npm run android:run` | `build + sync + run` | Full build, sync, and run on connected device |

---

## License

This project is open source and available for personal and educational use.
