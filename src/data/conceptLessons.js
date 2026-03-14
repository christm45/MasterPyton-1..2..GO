// ──────────────────────────────────────────────────────────
// CONCEPT LESSONS
// 3 Beginner (c01-c03) + 5 Intermediate (c04-c08) + 2 Advanced (c09-c10)
// ──────────────────────────────────────────────────────────

export const conceptLessons = [

  // ==================== BEGINNER c01 ====================
  {
    id: "c01",
    title: "Match-Case Statements",
    difficulty: "beginner",
    order: 41,
    description: "Use Python 3.10+ structural pattern matching with match/case for cleaner conditional logic",
    duration: "12 min",
    content: `Python 3.10 introduced **structural pattern matching** with the \`match\`/\`case\` statement. It's like a supercharged version of if/elif chains.

## Basic match/case Syntax

\`\`\`python
command = "quit"

match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "quit":
        print("Goodbye!")
    case _:
        print("Unknown command")
\`\`\`

The \`_\` is the **wildcard pattern** — it matches anything and acts like the \`else\` in an if/elif chain.

## How It Works

1. Python evaluates the expression after \`match\`
2. It checks each \`case\` pattern **from top to bottom**
3. The **first** matching case runs its block
4. If nothing matches and there's a \`case _:\`, that runs
5. If nothing matches and there's no wildcard, nothing happens

## OR Patterns with |

You can combine multiple patterns using \`|\` (pipe):

\`\`\`python
day = "Saturday"

match day:
    case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
        print("Weekday")
    case "Saturday" | "Sunday":
        print("Weekend!")
    case _:
        print("Not a valid day")
\`\`\`

## Matching with Values and Guards

You can add \`if\` guards for more specific conditions:

\`\`\`python
status_code = 404

match status_code:
    case 200:
        print("OK")
    case 301 | 302:
        print("Redirect")
    case 404:
        print("Not Found")
    case code if 500 <= code < 600:
        print(f"Server Error: {code}")
    case _:
        print("Unknown status")
\`\`\`

## Matching with Variables

When a case uses a simple name (not a constant), it **captures** the value:

\`\`\`python
point = (3, 7)

match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"On x-axis at {x}")
    case (0, y):
        print(f"On y-axis at {y}")
    case (x, y):
        print(f"Point at ({x}, {y})")
\`\`\`

## match/case vs if/elif

| Feature | if/elif | match/case |
|---------|---------|------------|
| Simple comparisons | Good | Good |
| OR conditions | \`or\` keyword | \`\\|\` pipe |
| Pattern destructuring | Not built-in | Built-in |
| Readability for many cases | Gets messy | Very clean |
| Python version | All versions | 3.10+ only |

> **Tip:** Use \`match/case\` when you have many discrete values to check — it's much cleaner than long if/elif chains!`,
    codeExample: "# =============================================\n# Match-Case Statements Demo\n# =============================================\n\n# Basic match/case\nprint(\"=== Basic Match ===\")\ncommand = \"start\"\nmatch command:\n    case \"start\":\n        print(\"Starting the engine...\")\n    case \"stop\":\n        print(\"Stopping the engine...\")\n    case _:\n        print(\"Unknown command\")\n\n# OR patterns with |\nprint(\"\\n=== Day Categorization ===\")\ndays = [\"Monday\", \"Saturday\", \"Wednesday\", \"Sunday\"]\nfor day in days:\n    match day:\n        case \"Monday\" | \"Tuesday\" | \"Wednesday\" | \"Thursday\" | \"Friday\":\n            print(f\"{day}: Weekday\")\n        case \"Saturday\" | \"Sunday\":\n            print(f\"{day}: Weekend!\")\n\n# Matching status codes\nprint(\"\\n=== Status Codes ===\")\ncodes = [200, 301, 404, 500]\nfor code in codes:\n    match code:\n        case 200:\n            print(f\"{code}: OK\")\n        case 301 | 302:\n            print(f\"{code}: Redirect\")\n        case 404:\n            print(f\"{code}: Not Found\")\n        case c if 500 <= c < 600:\n            print(f\"{c}: Server Error\")\n        case _:\n            print(f\"{code}: Unknown\")\n\n# Matching tuples (structural)\nprint(\"\\n=== Point Matching ===\")\npoints = [(0, 0), (5, 0), (0, 3), (2, 7)]\nfor point in points:\n    match point:\n        case (0, 0):\n            print(\"Origin\")\n        case (x, 0):\n            print(f\"On x-axis at x={x}\")\n        case (0, y):\n            print(f\"On y-axis at y={y}\")\n        case (x, y):\n            print(f\"Point at ({x}, {y})\")",
    exercise: {
      title: "Day-of-Week Categorizer",
      description: "Use match/case to categorize days of the week. For each day, print whether it's a weekday or weekend, and also print a fun activity suggestion based on the specific day.",
      starterCode: `# =============================================
# EXERCISE: Day-of-Week Categorizer
# =============================================

# STEP 1: Categorize each day as "Weekday" or "Weekend"
days = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"]

print("=== Day Categories ===")
for day in days:
    # TODO: Use match/case with OR patterns
    # For weekdays (Mon-Fri), print: "<day>: Weekday"
    # For weekends (Sat-Sun), print: "<day>: Weekend"
    pass

# STEP 2: Activity suggestions for specific days
print("\\n=== Activity Suggestions ===")
activity_days = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"]

for day in activity_days:
    # TODO: Use match/case to suggest activities:
    # "Monday" -> "Start the week strong!"
    # "Wednesday" -> "Midweek push!"
    # "Friday" -> "Almost there!"
    # "Saturday" | "Sunday" -> "Enjoy your weekend!"
    # _ (anything else) -> "Just another day"
    pass

# STEP 3: Grade classifier using match/case with guards
print("\\n=== Grade Classifier ===")
scores = [95, 82, 71, 55]

for score in scores:
    # TODO: Use match/case with guard conditions:
    # score >= 90 -> "A"
    # score >= 80 -> "B"
    # score >= 70 -> "C"
    # anything else -> "F"
    # Print: "Score <score>: Grade <grade>"
    pass
`,
      solution: `# =============================================
# EXERCISE: Day-of-Week Categorizer
# =============================================

# STEP 1: Categorize each day as "Weekday" or "Weekend"
days = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"]

print("=== Day Categories ===")
for day in days:
    match day:
        case "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday":
            print(f"\{day}: Weekday")
        case "Saturday" | "Sunday":
            print(f"\{day}: Weekend")

# STEP 2: Activity suggestions for specific days
print("\\n=== Activity Suggestions ===")
activity_days = ["Monday", "Wednesday", "Friday", "Saturday", "Sunday"]

for day in activity_days:
    match day:
        case "Monday":
            print(f"\{day}: Start the week strong!")
        case "Wednesday":
            print(f"\{day}: Midweek push!")
        case "Friday":
            print(f"\{day}: Almost there!")
        case "Saturday" | "Sunday":
            print(f"\{day}: Enjoy your weekend!")
        case _:
            print(f"\{day}: Just another day")

# STEP 3: Grade classifier using match/case with guards
print("\\n=== Grade Classifier ===")
scores = [95, 82, 71, 55]

for score in scores:
    match score:
        case s if s >= 90:
            print(f"Score \{score}: Grade A")
        case s if s >= 80:
            print(f"Score \{score}: Grade B")
        case s if s >= 70:
            print(f"Score \{score}: Grade C")
        case _:
            print(f"Score \{score}: Grade F")
`,
      hint: "Use match/case with | for OR patterns. For guards, use case s if s >= 90: syntax to capture and test the value.",
      tests: [
        { name: "Monday is a Weekday", expected: "Monday: Weekday", hint: "Monday should match the weekday pattern with |" },
        { name: "Saturday is Weekend", expected: "Saturday: Weekend", hint: "Saturday should match 'Saturday' | 'Sunday'" },
        { name: "Sunday is Weekend", expected: "Sunday: Weekend", hint: "Sunday should match the weekend pattern" },
        { name: "Monday activity", expected: "Monday: Start the week strong!", hint: "Match 'Monday' specifically to suggest the activity" },
        { name: "Saturday activity", expected: "Saturday: Enjoy your weekend!", hint: "Use 'Saturday' | 'Sunday' for the weekend activity" },
        { name: "Grade A for 95", expected: "Score 95: Grade A", hint: "Use a guard: case s if s >= 90:" },
        { name: "Grade B for 82", expected: "Score 82: Grade B", hint: "Use a guard: case s if s >= 80:" },
        { name: "Grade C for 71", expected: "Score 71: Grade C", hint: "Use a guard: case s if s >= 70:" },
        { name: "Grade F for 55", expected: "Score 55: Grade F", hint: "The wildcard _ catches everything below 70" }
      ],
      hints: [
        "For Step 1: Use match day: then case \"Monday\" | \"Tuesday\" | ... | \"Friday\": for weekdays and case \"Saturday\" | \"Sunday\": for weekends",
        "For Step 2: Each specific day gets its own case, but Saturday and Sunday share one with the | operator",
        "For Step 3: Use case s if s >= 90: to capture the score into s and test it — order matters, check highest grade first!"
      ]
    }
  },

  // ==================== BEGINNER c02 ====================
  {
    id: "c02",
    title: "2D Lists & Matrices",
    difficulty: "beginner",
    order: 42,
    description: "Work with lists of lists to represent grids, tables, and matrices in Python",
    duration: "12 min",
    content: `A **2D list** (or matrix) is simply a list that contains other lists. Each inner list represents a row.

## Creating a 2D List

\`\`\`python
# A 3x3 grid
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
\`\`\`

Think of it as a table with rows and columns:

| | Col 0 | Col 1 | Col 2 |
|---|---|---|---|
| **Row 0** | 1 | 2 | 3 |
| **Row 1** | 4 | 5 | 6 |
| **Row 2** | 7 | 8 | 9 |

## Accessing Elements: [row][col]

\`\`\`python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[0][0])   # 1 — first row, first col
print(grid[1][2])   # 6 — second row, third col
print(grid[2][1])   # 8 — third row, second col
print(grid[0])      # [1, 2, 3] — entire first row
\`\`\`

## Traversing with Nested Loops

\`\`\`python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Method 1: Using indices
for row in range(len(grid)):
    for col in range(len(grid[row])):
        print(grid[row][col], end=" ")
    print()

# Method 2: Direct iteration
for row in grid:
    for value in row:
        print(value, end=" ")
    print()
\`\`\`

## Building Grids Dynamically

\`\`\`python
# Create a 3x4 grid filled with zeros
rows, cols = 3, 4
grid = []
for i in range(rows):
    row = []
    for j in range(cols):
        row.append(0)
    grid.append(row)

# Using list comprehension (more Pythonic)
grid = [[0 for _ in range(cols)] for _ in range(rows)]
\`\`\`

## Common Operations

\`\`\`python
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Sum all elements
total = 0
for row in grid:
    total += sum(row)
print(f"Total: {total}")       # 45

# Sum a specific row
print(f"Row 1 sum: {sum(grid[1])}")   # 15

# Sum a specific column
col_sum = sum(grid[row][1] for row in range(len(grid)))
print(f"Col 1 sum: {col_sum}")        # 15

# Sum the main diagonal
diag_sum = sum(grid[i][i] for i in range(len(grid)))
print(f"Diagonal sum: {diag_sum}")    # 15 (1+5+9)
\`\`\`

## Modifying Elements

\`\`\`python
grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

grid[1][1] = 5   # Set center to 5
grid[0][2] = 3   # Set top-right to 3

for row in grid:
    print(row)
# [0, 0, 3]
# [0, 5, 0]
# [0, 0, 0]
\`\`\`

> **Tip:** When creating a grid, NEVER do \`[[0]*3]*3\` — this creates 3 references to the SAME row! Changes to one row affect all. Always use nested loops or list comprehension.`,
    codeExample: "# =============================================\n# 2D Lists & Matrices Demo\n# =============================================\n\n# Creating and printing a 3x3 grid\nprint(\"=== 3x3 Grid ===\")\ngrid = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\nfor row in grid:\n    for val in row:\n        print(f\"{val:3}\", end=\"\")\n    print()\n\n# Accessing elements\nprint(\"\\n=== Access Elements ===\")\nprint(f\"grid[0][0] = {grid[0][0]}\")\nprint(f\"grid[1][2] = {grid[1][2]}\")\nprint(f\"grid[2][1] = {grid[2][1]}\")\n\n# Sum operations\nprint(\"\\n=== Sums ===\")\ntotal = sum(sum(row) for row in grid)\nprint(f\"Total sum: {total}\")\n\ndiag = sum(grid[i][i] for i in range(3))\nprint(f\"Diagonal sum: {diag}\")\n\n# Building a grid dynamically\nprint(\"\\n=== Dynamic 4x4 Grid ===\")\nsize = 4\nmultiplication = [[i * j for j in range(1, size+1)] for i in range(1, size+1)]\nfor row in multiplication:\n    for val in row:\n        print(f\"{val:4}\", end=\"\")\n    print()",
    exercise: {
      title: "Grid Builder & Analyzer",
      description: "Create a 3x3 grid manually, print it formatted, and calculate the diagonal sum. Then build a dynamic grid and find its properties.",
      starterCode: `# =============================================
# EXERCISE: Grid Builder & Analyzer
# =============================================

# STEP 1: Create a 3x3 grid with values 1-9
# Row 0: [1, 2, 3]
# Row 1: [4, 5, 6]
# Row 2: [7, 8, 9]
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# STEP 2: Print the grid formatted (each number padded to 3 spaces)
print("=== 3x3 Grid ===")
# TODO: Use nested loops to print each value with f"{val:3}" formatting
# Each row on its own line, no trailing space issues

# STEP 3: Calculate and print the main diagonal sum (top-left to bottom-right)
# The diagonal elements are grid[0][0], grid[1][1], grid[2][2]
# TODO: Calculate diagonal_sum

print(f"Diagonal sum: {diagonal_sum}")

# STEP 4: Calculate and print the total sum of all elements
# TODO: Calculate total_sum

print(f"Total sum: {total_sum}")

# STEP 5: Build a 3x3 grid where each cell = row_index + col_index
print("\\n=== Sum Grid ===")
sum_grid = []
# TODO: Use nested loops to build sum_grid
# Row 0: [0, 1, 2]
# Row 1: [1, 2, 3]
# Row 2: [2, 3, 4]

for row in sum_grid:
    print(row)
`,
      solution: `# =============================================
# EXERCISE: Grid Builder & Analyzer
# =============================================

# STEP 1: Create a 3x3 grid with values 1-9
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# STEP 2: Print the grid formatted
print("=== 3x3 Grid ===")
for row in grid:
    for val in row:
        print(f"\{val:3}", end="")
    print()

# STEP 3: Calculate and print the main diagonal sum
diagonal_sum = sum(grid[i][i] for i in range(3))
print(f"Diagonal sum: \{diagonal_sum}")

# STEP 4: Calculate and print the total sum
total_sum = sum(sum(row) for row in grid)
print(f"Total sum: \{total_sum}")

# STEP 5: Build a 3x3 grid where each cell = row_index + col_index
print("\\n=== Sum Grid ===")
sum_grid = []
for i in range(3):
    row = []
    for j in range(3):
        row.append(i + j)
    sum_grid.append(row)

for row in sum_grid:
    print(row)
`,
      hint: "For the diagonal, grid[0][0] + grid[1][1] + grid[2][2] gives 1 + 5 + 9 = 15. Use a loop: sum(grid[i][i] for i in range(3)).",
      tests: [
        { name: "Grid header prints", expected: "=== 3x3 Grid ===", hint: "Print the header exactly as shown" },
        { name: "Diagonal sum is 15", expected: "Diagonal sum: 15", hint: "The main diagonal is 1 + 5 + 9 = 15" },
        { name: "Total sum is 45", expected: "Total sum: 45", hint: "Sum of 1 through 9 = 45" },
        { name: "Sum Grid header", expected: "=== Sum Grid ===", hint: "Print the Sum Grid header" },
        { name: "Sum grid row 0", expected: "[0, 1, 2]", hint: "Row 0: 0+0=0, 0+1=1, 0+2=2" },
        { name: "Sum grid row 1", expected: "[1, 2, 3]", hint: "Row 1: 1+0=1, 1+1=2, 1+2=3" },
        { name: "Sum grid row 2", expected: "[2, 3, 4]", hint: "Row 2: 2+0=2, 2+1=3, 2+2=4" }
      ],
      hints: [
        "For Step 2: Use two nested for loops — outer loops over rows, inner loops over values. Use print(f\"{val:3}\", end=\"\") and print() for newlines",
        "For Step 3: diagonal_sum = sum(grid[i][i] for i in range(3)) sums elements where row index equals column index",
        "For Step 5: Build each row with a loop: for j in range(3): row.append(i + j), then append the row to sum_grid"
      ]
    }
  },

  // ==================== BEGINNER c03 ====================
  {
    id: "c03",
    title: "The Random Module",
    difficulty: "beginner",
    order: 43,
    description: "Generate random numbers, make random choices, and use seeds for reproducible results",
    duration: "10 min",
    content: `Python's \`random\` module lets you generate pseudo-random numbers, pick random items, and shuffle sequences.

## Core Functions

### random.randint(a, b) — Random Integer

\`\`\`python
import random

# Random integer between a and b (inclusive!)
roll = random.randint(1, 6)    # Like rolling a die
print(roll)                     # Could be 1, 2, 3, 4, 5, or 6
\`\`\`

### random.random() — Random Float

\`\`\`python
import random

# Random float between 0.0 and 1.0
value = random.random()
print(value)   # Something like 0.7483...
\`\`\`

### random.choice(sequence) — Pick One

\`\`\`python
import random

colors = ["red", "blue", "green", "yellow"]
pick = random.choice(colors)
print(pick)   # One random color
\`\`\`

### random.shuffle(list) — Shuffle In-Place

\`\`\`python
import random

cards = [1, 2, 3, 4, 5]
random.shuffle(cards)     # Modifies the list directly
print(cards)              # e.g., [3, 1, 5, 2, 4]
\`\`\`

### random.sample(sequence, k) — Pick Multiple

\`\`\`python
import random

lottery = random.sample(range(1, 50), k=6)
print(lottery)   # 6 unique numbers from 1-49
\`\`\`

## Seeds — Making Randomness Reproducible

A **seed** initializes the random number generator to a known state. Same seed → same sequence every time.

\`\`\`python
import random

random.seed(42)
print(random.randint(1, 100))   # Always 82 with seed 42
print(random.randint(1, 100))   # Always 77
print(random.randint(1, 100))   # Always 7

# Reset the seed — same sequence again!
random.seed(42)
print(random.randint(1, 100))   # 82 again!
\`\`\`

## Why Seeds Matter

| Without Seed | With Seed |
|---|---|
| Different results each run | Same results every run |
| Good for games, real apps | Good for testing, debugging |
| Truly unpredictable | Fully reproducible |

## Practical Example: Random Password

\`\`\`python
import random

random.seed(7)
chars = "abcdefghijklmnopqrstuvwxyz0123456789"
password = ""
for _ in range(8):
    password += random.choice(chars)
print(password)  # Same password every time with seed 7
\`\`\`

> **Tip:** Always use \`random.seed()\` in tests and exercises so your random outputs are predictable and verifiable!`,
    codeExample: "import random\n\n# =============================================\n# The Random Module Demo\n# =============================================\n\n# Set seed for reproducibility\nrandom.seed(42)\n\nprint(\"=== randint ===\")\nfor i in range(5):\n    print(f\"Roll {i+1}: {random.randint(1, 6)}\")\n\nprint(\"\\n=== random() ===\")\nfor i in range(3):\n    print(f\"Float {i+1}: {random.random():.4f}\")\n\nprint(\"\\n=== choice ===\")\nfruits = [\"apple\", \"banana\", \"cherry\", \"date\", \"elderberry\"]\nfor i in range(3):\n    print(f\"Pick {i+1}: {random.choice(fruits)}\")\n\nprint(\"\\n=== shuffle ===\")\nnums = [1, 2, 3, 4, 5]\nrandom.shuffle(nums)\nprint(f\"Shuffled: {nums}\")\n\nprint(\"\\n=== sample ===\")\nlottery = random.sample(range(1, 50), k=5)\nprint(f\"Lottery numbers: {lottery}\")\n\n# Demonstrating seed reset\nprint(\"\\n=== Seed Reset ===\")\nrandom.seed(42)\nprint(f\"First with seed 42: {random.randint(1, 100)}\")\nrandom.seed(42)\nprint(f\"Again with seed 42: {random.randint(1, 100)}\")",
    exercise: {
      title: "Seeded Random Generator",
      description: "Use random.seed(42) to generate specific, deterministic random outputs. Since the seed is fixed, the outputs will always be the same.",
      starterCode: `import random

# =============================================
# EXERCISE: Seeded Random Generator
# =============================================

# STEP 1: Set seed to 42 and generate 3 random integers between 1-100
random.seed(42)
print("=== Three Random Integers ===")
# TODO: Generate and print 3 random integers using random.randint(1, 100)
# Print format: "Num 1: <value>"


# STEP 2: Pick 3 random colors from the list
print("\\n=== Random Colors ===")
colors = ["red", "blue", "green", "yellow", "purple", "orange"]
# TODO: Use random.choice(colors) three times
# Print format: "Color 1: <value>"


# STEP 3: Shuffle a list of numbers and print it
print("\\n=== Shuffled List ===")
numbers = [10, 20, 30, 40, 50]
# TODO: Shuffle the numbers list and print it
# Print format: "Shuffled: [...]"


# STEP 4: Generate a random sample of 3 items from a range
print("\\n=== Random Sample ===")
# TODO: Use random.sample(range(1, 20), k=3) and print it
# Print format: "Sample: [...]"

`,
      solution: `import random

# =============================================
# EXERCISE: Seeded Random Generator
# =============================================

# STEP 1: Set seed to 42 and generate 3 random integers between 1-100
random.seed(42)
print("=== Three Random Integers ===")
print(f"Num 1: \{random.randint(1, 100)}")
print(f"Num 2: \{random.randint(1, 100)}")
print(f"Num 3: \{random.randint(1, 100)}")

# STEP 2: Pick 3 random colors from the list
print("\\n=== Random Colors ===")
colors = ["red", "blue", "green", "yellow", "purple", "orange"]
print(f"Color 1: \{random.choice(colors)}")
print(f"Color 2: \{random.choice(colors)}")
print(f"Color 3: \{random.choice(colors)}")

# STEP 3: Shuffle a list of numbers and print it
print("\\n=== Shuffled List ===")
numbers = [10, 20, 30, 40, 50]
random.shuffle(numbers)
print(f"Shuffled: \{numbers}")

# STEP 4: Generate a random sample of 3 items from a range
print("\\n=== Random Sample ===")
sample = random.sample(range(1, 20), k=3)
print(f"Sample: \{sample}")
`,
      hint: "Set random.seed(42) once at the top. Then each call to randint, choice, shuffle, sample will produce the same results every time. With seed 42, randint(1,100) gives 82, 77, then 7.",
      tests: [
        { name: "Random integers header", expected: "=== Three Random Integers ===", hint: "Print the header exactly as shown" },
        { name: "First random int is 82", expected: "Num 1: 82", hint: "With seed(42), randint(1,100) first gives 82" },
        { name: "Second random int is 77", expected: "Num 2: 77", hint: "The second randint(1,100) with seed 42 gives 77" },
        { name: "Third random int is 7", expected: "Num 3: 7", hint: "The third randint(1,100) with seed 42 gives 7" },
        { name: "Random colors header", expected: "=== Random Colors ===", hint: "Print the colors header" },
        { name: "Shuffled list header", expected: "=== Shuffled List ===", hint: "Print the shuffled list header" },
        { name: "Random sample header", expected: "=== Random Sample ===", hint: "Print the sample header" }
      ],
      hints: [
        "Set random.seed(42) once at the beginning — all subsequent random calls will be deterministic",
        "Use random.randint(1, 100) for integers, random.choice(colors) for picking from a list",
        "random.shuffle(numbers) modifies the list in-place — just print the list after shuffling"
      ]
    }
  },

  // ==================== INTERMEDIATE c04 ====================
  {
    id: "c04",
    title: "Modules, Imports & __name__",
    difficulty: "intermediate",
    order: 16,
    description: "Understand Python's module system, import styles, and the if __name__ == '__main__' pattern",
    duration: "12 min",
    content: `In Python, every \`.py\` file is a **module**. Modules let you organize code into reusable files.

## Import Styles

### 1. import module

\`\`\`python
import math

print(math.pi)          # 3.14159...
print(math.sqrt(16))    # 4.0
\`\`\`

You must use the module name as a prefix.

### 2. from module import name

\`\`\`python
from math import pi, sqrt

print(pi)          # 3.14159... — no prefix needed!
print(sqrt(16))    # 4.0
\`\`\`

### 3. from module import * (Avoid!)

\`\`\`python
from math import *     # Imports EVERYTHING

print(pi)              # Works, but...
# Problem: You can't tell where names came from
# Problem: May overwrite your own variables!
\`\`\`

### 4. import as (Aliases)

\`\`\`python
import math as m

print(m.pi)        # Shorter prefix
print(m.sqrt(16))  # 4.0
\`\`\`

## The \`__name__\` Variable

Every Python module has a special variable \`__name__\`:

- When a file is **run directly**: \`__name__\` is \`"__main__"\`
- When a file is **imported**: \`__name__\` is the module's name

\`\`\`python
# my_module.py
print(f"__name__ is: {__name__}")

def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    # This code ONLY runs when the file is executed directly
    # NOT when it's imported by another file
    print(greet("World"))
\`\`\`

## Why \`if __name__ == "__main__":\` Matters

\`\`\`python
# utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# Without the guard, this runs on import too!
if __name__ == "__main__":
    print("Testing utils...")
    print(add(2, 3))        # 5
    print(multiply(4, 5))   # 20
\`\`\`

| Scenario | \`__name__\` value | Guard code runs? |
|---|---|---|
| \`python utils.py\` | \`"__main__"\` | Yes |
| \`import utils\` | \`"utils"\` | No |

## Module Best Practices

1. **Use specific imports** — \`from math import sqrt\` is better than \`import *\`
2. **Use aliases for long names** — \`import numpy as np\`
3. **Always use the guard** — Put test/demo code inside \`if __name__ == "__main__":\`
4. **One responsibility per module** — Keep modules focused

> **Tip:** The \`if __name__ == "__main__":\` pattern is one of the most important Python idioms. It separates reusable code from script behavior.`,
    codeExample: "# =============================================\n# Modules, Imports & __name__ Demo\n# =============================================\n\n# Different import styles\nimport math\nfrom collections import Counter\nimport random as rng\n\nprint(\"=== Import Styles ===\")\nprint(f\"math.pi = {math.pi:.4f}\")\nprint(f\"math.sqrt(144) = {math.sqrt(144)}\")\n\n# Counter from collections (from...import style)\nwords = [\"apple\", \"banana\", \"apple\", \"cherry\", \"banana\", \"apple\"]\ncounts = Counter(words)\nprint(f\"\\nWord counts: {dict(counts)}\")\nprint(f\"Most common: {counts.most_common(1)}\")\n\n# Alias import\nrng.seed(99)\nprint(f\"\\nRandom (aliased): {rng.randint(1, 10)}\")\n\n# __name__ variable\nprint(\"\\n=== __name__ Variable ===\")\nprint(f\"Current __name__: {__name__}\")\nprint(f\"math module __name__: {math.__name__}\")\n\n# Demonstrating the guard pattern\nprint(\"\\n=== Guard Pattern ===\")\nif __name__ == \"__main__\":\n    print(\"This code is running directly (not imported)\")\n    print(\"In a real module, put your test code here!\")\n\n# Showing module attributes\nprint(\"\\n=== Module Info ===\")\nprint(f\"math has {len(dir(math))} attributes\")\nuseful = [x for x in dir(math) if not x.startswith('_')]\nprint(f\"Public functions: {useful[:8]}...\")",
    exercise: {
      title: "Module Explorer",
      description: "Practice different import styles and understand __name__. Demonstrate how Python's module system works with practical examples.",
      starterCode: `# =============================================
# EXERCISE: Module Explorer
# =============================================

# STEP 1: Import math normally and print pi rounded to 4 decimals
# TODO: import math

print("=== Import Styles ===")
print(f"Pi: {math.pi:.4f}")

# STEP 2: From math, import sqrt and ceil specifically
# TODO: from math import sqrt, ceil

print(f"sqrt(256): {sqrt(256)}")
print(f"ceil(3.2): {ceil(3.2)}")

# STEP 3: Import random with alias 'rng'
# TODO: import random as rng

rng.seed(10)
print(f"Random number: {rng.randint(1, 50)}")

# STEP 4: Print the current __name__ value
print("\\n=== __name__ ===")
# TODO: Print the value of __name__
print(f"__name__ = {__name__}")

# STEP 5: Demonstrate the guard pattern
# TODO: Write if __name__ == "__main__": and print a message
print("\\n=== Guard Pattern ===")

`,
      solution: `# =============================================
# EXERCISE: Module Explorer
# =============================================

# STEP 1: Import math normally and print pi rounded to 4 decimals
import math

print("=== Import Styles ===")
print(f"Pi: \{math.pi:.4f}")

# STEP 2: From math, import sqrt and ceil specifically
from math import sqrt, ceil

print(f"sqrt(256): \{sqrt(256)}")
print(f"ceil(3.2): \{ceil(3.2)}")

# STEP 3: Import random with alias 'rng'
import random as rng

rng.seed(10)
print(f"Random number: \{rng.randint(1, 50)}")

# STEP 4: Print the current __name__ value
print("\\n=== __name__ ===")
print(f"__name__ = \{__name__}")

# STEP 5: Demonstrate the guard pattern
print("\\n=== Guard Pattern ===")
if __name__ == "__main__":
    print("Running as main script!")
    print("Guard check passed!")
`,
      hint: "Use 'import math' for Step 1, 'from math import sqrt, ceil' for Step 2, and 'import random as rng' for Step 3. __name__ will be '__main__' when running directly.",
      tests: [
        { name: "Import styles header", expected: "=== Import Styles ===", hint: "Print the header exactly as shown" },
        { name: "Pi to 4 decimals", expected: "Pi: 3.1416", hint: "Use math.pi with :.4f formatting" },
        { name: "sqrt(256) = 16.0", expected: "sqrt(256): 16.0", hint: "sqrt(256) returns 16.0 as a float" },
        { name: "ceil(3.2) = 4", expected: "ceil(3.2): 4", hint: "ceil rounds up to 4" },
        { name: "__name__ header", expected: "=== __name__ ===", hint: "Print the __name__ header" },
        { name: "__name__ is __main__", expected: "__name__ = __main__", hint: "When running directly, __name__ is __main__" },
        { name: "Guard pattern header", expected: "=== Guard Pattern ===", hint: "Print the guard pattern header" },
        { name: "Guard check message", expected: "Running as main script!", hint: "Inside the if __name__ == '__main__': block, print this message" }
      ],
      hints: [
        "Step 1: 'import math' gives you access to math.pi, math.sqrt, etc. Use :.4f in the f-string for 4 decimal places",
        "Step 2: 'from math import sqrt, ceil' lets you call sqrt() and ceil() directly without the math. prefix",
        "Step 5: Write 'if __name__ == \"__main__\":' and indent the print statement inside it"
      ]
    }
  },

  // ==================== INTERMEDIATE c05 ====================
  {
    id: "c05",
    title: "Magic Methods (Dunder Methods)",
    difficulty: "intermediate",
    order: 17,
    description: "Make your classes work with built-in Python functions using special double-underscore methods",
    duration: "15 min",
    content: `**Magic methods** (also called **dunder methods** — double underscore) are special methods that let your classes work with Python's built-in functions and operators.

## Why Magic Methods?

Without magic methods, your objects can't work with \`print()\`, \`len()\`, \`+\`, \`==\`, or other built-in features. Magic methods bridge that gap.

## __str__ and __repr__ — String Representations

\`\`\`python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        # Human-readable — used by print()
        return f"{self.title} by {self.author}"

    def __repr__(self):
        # Developer-readable — used in debugger/console
        return f"Book('{self.title}', '{self.author}')"

b = Book("1984", "Orwell")
print(b)          # 1984 by Orwell  (__str__)
print(repr(b))    # Book('1984', 'Orwell')  (__repr__)
\`\`\`

## __len__ — Support len()

\`\`\`python
class Playlist:
    def __init__(self, name, songs):
        self.name = name
        self.songs = songs

    def __len__(self):
        return len(self.songs)

p = Playlist("Chill", ["Song A", "Song B", "Song C"])
print(len(p))   # 3
\`\`\`

## __eq__ and __lt__ — Comparisons

\`\`\`python
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def __eq__(self, other):
        return self.grade == other.grade

    def __lt__(self, other):
        return self.grade < other.grade

s1 = Student("Alice", 95)
s2 = Student("Bob", 87)
print(s1 == s2)   # False
print(s1 < s2)    # False (95 is not less than 87)
\`\`\`

## __add__ — Support + Operator

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(v3)   # Vector(4, 6)
\`\`\`

## __getitem__ — Support Indexing []

\`\`\`python
class Shelf:
    def __init__(self, items):
        self.items = items

    def __getitem__(self, index):
        return self.items[index]

s = Shelf(["Book A", "Book B", "Book C"])
print(s[0])    # Book A
print(s[-1])   # Book C
\`\`\`

## Common Magic Methods Reference

| Method | Triggered By | Example |
|--------|-------------|---------|
| \`__str__\` | \`print(obj)\`, \`str(obj)\` | Human-readable string |
| \`__repr__\` | \`repr(obj)\`, console | Developer string |
| \`__len__\` | \`len(obj)\` | Return integer |
| \`__eq__\` | \`obj == other\` | Return True/False |
| \`__lt__\` | \`obj < other\` | Return True/False |
| \`__add__\` | \`obj + other\` | Return new object |
| \`__getitem__\` | \`obj[key]\` | Return value |
| \`__contains__\` | \`item in obj\` | Return True/False |

> **Tip:** Always implement \`__repr__\` — it's used as a fallback when \`__str__\` is not defined, and it's invaluable for debugging.`,
    codeExample: "# =============================================\n# Magic Methods (Dunder Methods) Demo\n# =============================================\n\nclass Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"Vector({self.x}, {self.y})\"\n\n    def __repr__(self):\n        return f\"Vector({self.x}, {self.y})\"\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\n    def __len__(self):\n        # Return the magnitude as an integer\n        return int((self.x ** 2 + self.y ** 2) ** 0.5)\n\n    def __getitem__(self, index):\n        if index == 0:\n            return self.x\n        elif index == 1:\n            return self.y\n        raise IndexError(\"Vector index out of range\")\n\nprint(\"=== Vector Magic Methods ===\")\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\n\nprint(f\"v1 = {v1}\")\nprint(f\"v2 = {v2}\")\nprint(f\"v1 + v2 = {v1 + v2}\")\nprint(f\"v1 == v2: {v1 == v2}\")\nprint(f\"v1 == Vector(3, 4): {v1 == Vector(3, 4)}\")\nprint(f\"len(v1): {len(v1)}\")\nprint(f\"v1[0]: {v1[0]}\")\nprint(f\"v1[1]: {v1[1]}\")",
    exercise: {
      title: "Build a Vector Class",
      description: "Create a Vector class with magic methods that supports addition, string representation, length, and equality checking.",
      starterCode: `# =============================================
# EXERCISE: Build a Vector Class
# =============================================

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # TODO: __str__ — return "Vector(x, y)"

    # TODO: __add__ — return new Vector with added components

    # TODO: __eq__ — return True if both x and y match

    # TODO: __len__ — return int of magnitude: sqrt(x^2 + y^2)


# Test your Vector class
print("=== Vector Operations ===")
v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = Vector(3, 4)

# Test __str__
print(f"v1 = {v1}")
print(f"v2 = {v2}")

# Test __add__
v4 = v1 + v2
print(f"v1 + v2 = {v4}")

# Test __eq__
print(f"v1 == v2: {v1 == v2}")
print(f"v1 == v3: {v1 == v3}")

# Test __len__
print(f"len(v1): {len(v1)}")
print(f"len(v2): {len(v2)}")
`,
      solution: `# =============================================
# EXERCISE: Build a Vector Class
# =============================================

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector(\{self.x}, \{self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return int((self.x ** 2 + self.y ** 2) ** 0.5)


# Test your Vector class
print("=== Vector Operations ===")
v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = Vector(3, 4)

# Test __str__
print(f"v1 = \{v1}")
print(f"v2 = \{v2}")

# Test __add__
v4 = v1 + v2
print(f"v1 + v2 = \{v4}")

# Test __eq__
print(f"v1 == v2: \{v1 == v2}")
print(f"v1 == v3: \{v1 == v3}")

# Test __len__
print(f"len(v1): \{len(v1)}")
print(f"len(v2): \{len(v2)}")
`,
      hint: "__str__ returns a formatted string. __add__ creates a new Vector. __eq__ compares x and y. __len__ uses the Pythagorean theorem: int(sqrt(x² + y²)).",
      tests: [
        { name: "Vector header", expected: "=== Vector Operations ===", hint: "Print the header exactly as shown" },
        { name: "v1 string representation", expected: "v1 = Vector(3, 4)", hint: "__str__ should return 'Vector(x, y)'" },
        { name: "v2 string representation", expected: "v2 = Vector(1, 2)", hint: "__str__ should return 'Vector(1, 2)'" },
        { name: "v1 + v2 addition", expected: "v1 + v2 = Vector(4, 6)", hint: "__add__ should add x's and y's: (3+1, 4+2) = (4, 6)" },
        { name: "v1 != v2", expected: "v1 == v2: False", hint: "__eq__ checks if both x and y match — (3,4) != (1,2)" },
        { name: "v1 == v3", expected: "v1 == v3: True", hint: "Both v1 and v3 are Vector(3, 4) so they're equal" },
        { name: "len(v1) = 5", expected: "len(v1): 5", hint: "sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5" },
        { name: "len(v2) = 2", expected: "len(v2): 2", hint: "sqrt(1² + 2²) = sqrt(5) ≈ 2.236 → int = 2" }
      ],
      hints: [
        "For __str__: return f\"Vector({self.x}, {self.y})\" — this is what print() will use",
        "For __add__: return Vector(self.x + other.x, self.y + other.y) — creates a new Vector, don't modify self!",
        "For __len__: return int((self.x ** 2 + self.y ** 2) ** 0.5) — the int() truncates the square root to an integer"
      ]
    }
  },

  // ==================== INTERMEDIATE c06 ====================
  {
    id: "c06",
    title: "Polymorphism & Duck Typing",
    difficulty: "intermediate",
    order: 18,
    description: "Write flexible code where different classes share the same interface through polymorphism",
    duration: "12 min",
    content: `**Polymorphism** means "many forms" — the ability for different classes to be used through the same interface. Python embraces this through **duck typing**.

## What Is Duck Typing?

> "If it walks like a duck and quacks like a duck, then it must be a duck."

Python doesn't care about an object's **type** — it cares about its **behavior**. If an object has the method you're calling, it works!

\`\`\`python
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Duck:
    def speak(self):
        return "Quack!"

# All three have speak() — polymorphism!
animals = [Dog(), Cat(), Duck()]
for animal in animals:
    print(animal.speak())
\`\`\`

## Polymorphism with Functions

\`\`\`python
def make_it_speak(animal):
    # This works with ANY object that has a speak() method
    print(animal.speak())

make_it_speak(Dog())     # Woof!
make_it_speak(Cat())     # Meow!
make_it_speak(Duck())    # Quack!
\`\`\`

## Polymorphism with Built-in Functions

Python's built-in functions are polymorphic by design:

\`\`\`python
# len() works with many types
print(len("hello"))       # 5 — string
print(len([1, 2, 3]))     # 3 — list
print(len({"a": 1}))      # 1 — dict

# + works differently for different types
print(1 + 2)              # 3 — addition
print("hi " + "there")    # "hi there" — concatenation
print([1] + [2])          # [1, 2] — list joining
\`\`\`

## Polymorphism with Inheritance

\`\`\`python
class Shape:
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

# Same method name, different behavior
shapes = [Rectangle(5, 3), Circle(4)]
for shape in shapes:
    print(f"Area: {shape.area():.2f}")
\`\`\`

## Duck Typing vs Strict Typing

| Duck Typing (Python) | Strict Typing (Java/C++) |
|---|---|
| No interface declaration needed | Must declare interfaces |
| Just implement the method | Must explicitly inherit |
| More flexible | More rigid but safer |
| Errors at runtime | Errors at compile time |

## Practical Example: Unified Processing

\`\`\`python
class CSVExporter:
    def export(self, data):
        return ",".join(str(x) for x in data)

class JSONExporter:
    def export(self, data):
        return str({"data": data})

def save_report(exporter, data):
    # Works with ANY exporter that has export()
    result = exporter.export(data)
    print(f"Exported: {result}")

save_report(CSVExporter(), [1, 2, 3])
save_report(JSONExporter(), [1, 2, 3])
\`\`\`

> **Tip:** Favor duck typing in Python. Don't check types with \`isinstance()\` unless you truly need to — just call the method and let Python handle it!`,
    codeExample: "# =============================================\n# Polymorphism & Duck Typing Demo\n# =============================================\n\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} says: Woof!\"\n    def __str__(self):\n        return f\"Dog({self.name})\"\n\nclass Cat:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} says: Meow!\"\n    def __str__(self):\n        return f\"Cat({self.name})\"\n\nclass Bird:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} says: Tweet!\"\n    def __str__(self):\n        return f\"Bird({self.name})\"\n\n# Polymorphic function\ndef introduce(animal):\n    print(f\"{animal} -> {animal.speak()}\")\n\nprint(\"=== Polymorphism in Action ===\")\nanimals = [Dog(\"Rex\"), Cat(\"Whiskers\"), Bird(\"Tweety\")]\nfor animal in animals:\n    introduce(animal)\n\n# Built-in polymorphism\nprint(\"\\n=== Built-in Polymorphism ===\")\nthings = [\"hello\", [1, 2, 3], {\"a\": 1, \"b\": 2}]\nfor thing in things:\n    print(f\"len({thing}) = {len(thing)}\")\n\n# Shape polymorphism\nprint(\"\\n=== Shapes ===\")\nclass Rectangle:\n    def area(self):\n        return 5 * 3\n    def __str__(self):\n        return \"Rectangle(5x3)\"\n\nclass Circle:\n    def area(self):\n        return 3.14159 * 4 ** 2\n    def __str__(self):\n        return \"Circle(r=4)\"\n\nfor shape in [Rectangle(), Circle()]:\n    print(f\"{shape}: area = {shape.area():.2f}\")",
    exercise: {
      title: "Animal Orchestra",
      description: "Create animal classes that each have a speak() method, then process them all polymorphically through a single function.",
      starterCode: `# =============================================
# EXERCISE: Animal Orchestra
# =============================================

# STEP 1: Create a Dog class with speak() returning "Woof!"
# TODO: Define Dog class with __init__(self, name) and speak()

# STEP 2: Create a Cat class with speak() returning "Meow!"
# TODO: Define Cat class with __init__(self, name) and speak()

# STEP 3: Create a Cow class with speak() returning "Moo!"
# TODO: Define Cow class with __init__(self, name) and speak()

# STEP 4: Create a function that takes any animal and prints its sound
def animal_sound(animal):
    # TODO: Print "<name> says: <sound>"
    pass

# STEP 5: Create a list of animals and process them
print("=== Animal Orchestra ===")
animals = []
# TODO: Add Dog("Rex"), Cat("Luna"), Cow("Bessie") to the list

for animal in animals:
    animal_sound(animal)

# STEP 6: Show that the same function works with all types
print("\\n=== Type Check ===")
for animal in animals:
    print(f"{animal.name} is a {type(animal).__name__}")
`,
      solution: `# =============================================
# EXERCISE: Animal Orchestra
# =============================================

# STEP 1: Create a Dog class with speak() returning "Woof!"
class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "Woof!"

# STEP 2: Create a Cat class with speak() returning "Meow!"
class Cat:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "Meow!"

# STEP 3: Create a Cow class with speak() returning "Moo!"
class Cow:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "Moo!"

# STEP 4: Create a function that takes any animal and prints its sound
def animal_sound(animal):
    print(f"\{animal.name} says: \{animal.speak()}")

# STEP 5: Create a list of animals and process them
print("=== Animal Orchestra ===")
animals = [Dog("Rex"), Cat("Luna"), Cow("Bessie")]

for animal in animals:
    animal_sound(animal)

# STEP 6: Show that the same function works with all types
print("\\n=== Type Check ===")
for animal in animals:
    print(f"\{animal.name} is a \{type(animal).__name__}")
`,
      hint: "Each class needs __init__(self, name) and speak(). The animal_sound function just calls animal.speak() — it doesn't need to know the type!",
      tests: [
        { name: "Orchestra header", expected: "=== Animal Orchestra ===", hint: "Print the header exactly" },
        { name: "Dog speaks", expected: "Rex says: Woof!", hint: "Dog's speak() should return 'Woof!'" },
        { name: "Cat speaks", expected: "Luna says: Meow!", hint: "Cat's speak() should return 'Meow!'" },
        { name: "Cow speaks", expected: "Bessie says: Moo!", hint: "Cow's speak() should return 'Moo!'" },
        { name: "Type check header", expected: "=== Type Check ===", hint: "Print the type check header" },
        { name: "Dog type", expected: "Rex is a Dog", hint: "type(animal).__name__ gives the class name" },
        { name: "Cat type", expected: "Luna is a Cat", hint: "type(animal).__name__ returns 'Cat' for a Cat instance" },
        { name: "Cow type", expected: "Bessie is a Cow", hint: "type(animal).__name__ returns 'Cow' for a Cow instance" }
      ],
      hints: [
        "Each class has the same structure: __init__ stores name, speak() returns the sound string",
        "animal_sound(animal) uses f\"{animal.name} says: {animal.speak()}\" — it works with any object that has .name and .speak()",
        "type(animal).__name__ gives you the class name as a string — 'Dog', 'Cat', or 'Cow'"
      ]
    }
  },

  // ==================== INTERMEDIATE c07 ====================
  {
    id: "c07",
    title: "Static Methods & Class Methods",
    difficulty: "intermediate",
    order: 19,
    description: "Understand the difference between instance methods, class methods, and static methods in Python",
    duration: "12 min",
    content: `Python classes have three types of methods: **instance methods**, **class methods**, and **static methods**. Each serves a different purpose.

## Instance Methods (Regular)

The most common type — they access instance data via \`self\`:

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):        # instance method — uses self
        return f"{self.name} says Woof!"

d = Dog("Rex")
print(d.bark())   # Rex says Woof!
\`\`\`

## Class Methods (@classmethod)

Use \`cls\` instead of \`self\` — they work with the **class itself**, not instances:

\`\`\`python
class Dog:
    count = 0

    def __init__(self, name):
        self.name = name
        Dog.count += 1

    @classmethod
    def get_count(cls):
        return f"Total dogs: {cls.count}"

    @classmethod
    def from_string(cls, dog_string):
        # Factory method — alternative constructor
        name = dog_string.split("-")[0]
        return cls(name)

d1 = Dog("Rex")
d2 = Dog.from_string("Luna-Labrador")
print(Dog.get_count())    # Total dogs: 2
\`\`\`

### When to Use @classmethod:
- **Factory methods** — alternative ways to create objects
- **Accessing/modifying class-level state**
- When the method needs the class itself (\`cls\`), not an instance

## Static Methods (@staticmethod)

They don't access \`self\` or \`cls\` — they're just utility functions that logically belong to the class:

\`\`\`python
class MathHelper:
    @staticmethod
    def is_even(n):
        return n % 2 == 0

    @staticmethod
    def fahrenheit_to_celsius(f):
        return (f - 32) * 5 / 9

print(MathHelper.is_even(4))                 # True
print(MathHelper.fahrenheit_to_celsius(98))  # 36.666...
\`\`\`

### When to Use @staticmethod:
- **Utility functions** related to the class
- **No need for self or cls**
- Could be a regular function, but logically belongs with the class

## Comparison Table

| Feature | Instance Method | Class Method | Static Method |
|---------|----------------|--------------|---------------|
| Decorator | None | \`@classmethod\` | \`@staticmethod\` |
| First param | \`self\` | \`cls\` | None |
| Access instance? | Yes | No | No |
| Access class? | Yes (via self) | Yes (via cls) | No |
| Call on instance? | Yes | Yes | Yes |
| Call on class? | No | Yes | Yes |

## Real-World Example: Date Class

\`\`\`python
class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    def __str__(self):
        return f"{self.year}-{self.month:02d}-{self.day:02d}"

    @classmethod
    def from_string(cls, date_string):
        year, month, day = map(int, date_string.split("-"))
        return cls(year, month, day)

    @staticmethod
    def is_valid(year, month, day):
        return 1 <= month <= 12 and 1 <= day <= 31 and year > 0

d1 = Date(2025, 3, 15)
d2 = Date.from_string("2025-12-25")
print(d1)                            # 2025-03-15
print(d2)                            # 2025-12-25
print(Date.is_valid(2025, 13, 1))    # False
\`\`\`

> **Tip:** If a method doesn't use \`self\`, consider \`@classmethod\` or \`@staticmethod\`. If it doesn't use \`cls\` either, make it \`@staticmethod\`.`,
    codeExample: "# =============================================\n# Static Methods & Class Methods Demo\n# =============================================\n\nclass Employee:\n    raise_rate = 1.05   # 5% raise\n    count = 0\n\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        Employee.count += 1\n\n    # Instance method — uses self\n    def apply_raise(self):\n        self.salary = int(self.salary * self.raise_rate)\n        return self.salary\n\n    # Class method — uses cls\n    @classmethod\n    def set_raise_rate(cls, rate):\n        cls.raise_rate = rate\n\n    @classmethod\n    def from_string(cls, emp_str):\n        name, salary = emp_str.split(\"-\")\n        return cls(name, int(salary))\n\n    # Static method — uses neither\n    @staticmethod\n    def is_workday(day):\n        return day.lower() not in [\"saturday\", \"sunday\"]\n\n    def __str__(self):\n        return f\"{self.name}: ${self.salary}\"\n\nprint(\"=== Employee Demo ===\")\ne1 = Employee(\"Alice\", 50000)\ne2 = Employee.from_string(\"Bob-60000\")  # Factory method\n\nprint(f\"Created: {e1}\")\nprint(f\"Created: {e2}\")\nprint(f\"Employee count: {Employee.count}\")\n\nprint(f\"\\nIs Monday a workday? {Employee.is_workday('Monday')}\")\nprint(f\"Is Sunday a workday? {Employee.is_workday('Sunday')}\")\n\ne1.apply_raise()\nprint(f\"\\nAfter 5% raise: {e1}\")",
    exercise: {
      title: "Date Class with Methods",
      description: "Build a Date class that uses a class method as a factory (from_string) and a static method for validation (is_valid).",
      starterCode: `# =============================================
# EXERCISE: Date Class with Methods
# =============================================

class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    # TODO: __str__ — return "YYYY-MM-DD" (month and day zero-padded to 2 digits)

    # TODO: @classmethod from_string(cls, date_string)
    # Parse "YYYY-MM-DD" string and return a new Date object

    # TODO: @staticmethod is_valid(year, month, day)
    # Return True if year > 0, 1 <= month <= 12, 1 <= day <= 31


# Test the Date class
print("=== Date Class ===")

# Create using constructor
d1 = Date(2025, 3, 15)
print(f"Date 1: {d1}")

# Create using class method factory
d2 = Date.from_string("2025-12-25")
print(f"Date 2: {d2}")

d3 = Date.from_string("2024-07-04")
print(f"Date 3: {d3}")

# Validate using static method
print("\\n=== Validation ===")
print(f"2025-03-15 valid? {Date.is_valid(2025, 3, 15)}")
print(f"2025-13-01 valid? {Date.is_valid(2025, 13, 1)}")
print(f"2025-00-15 valid? {Date.is_valid(2025, 0, 15)}")
print(f"2025-06-32 valid? {Date.is_valid(2025, 6, 32)}")
`,
      solution: `# =============================================
# EXERCISE: Date Class with Methods
# =============================================

class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    def __str__(self):
        return f"\{self.year}-\{self.month:02d}-\{self.day:02d}"

    @classmethod
    def from_string(cls, date_string):
        year, month, day = map(int, date_string.split("-"))
        return cls(year, month, day)

    @staticmethod
    def is_valid(year, month, day):
        return year > 0 and 1 <= month <= 12 and 1 <= day <= 31


# Test the Date class
print("=== Date Class ===")

# Create using constructor
d1 = Date(2025, 3, 15)
print(f"Date 1: \{d1}")

# Create using class method factory
d2 = Date.from_string("2025-12-25")
print(f"Date 2: \{d2}")

d3 = Date.from_string("2024-07-04")
print(f"Date 3: \{d3}")

# Validate using static method
print("\\n=== Validation ===")
print(f"2025-03-15 valid? \{Date.is_valid(2025, 3, 15)}")
print(f"2025-13-01 valid? \{Date.is_valid(2025, 13, 1)}")
print(f"2025-00-15 valid? \{Date.is_valid(2025, 0, 15)}")
print(f"2025-06-32 valid? \{Date.is_valid(2025, 6, 32)}")
`,
      hint: "Use :02d in f-strings to zero-pad numbers. from_string splits on '-' and uses map(int, ...). is_valid checks ranges with boolean conditions.",
      tests: [
        { name: "Date class header", expected: "=== Date Class ===", hint: "Print the header exactly" },
        { name: "Date 1 formatted", expected: "Date 1: 2025-03-15", hint: "__str__ should format with zero-padded month/day" },
        { name: "Date 2 from string", expected: "Date 2: 2025-12-25", hint: "from_string should parse '2025-12-25' correctly" },
        { name: "Date 3 from string", expected: "Date 3: 2024-07-04", hint: "from_string should parse '2024-07-04' correctly" },
        { name: "Valid date", expected: "2025-03-15 valid? True", hint: "Year > 0, month 1-12, day 1-31 — all valid" },
        { name: "Invalid month 13", expected: "2025-13-01 valid? False", hint: "Month 13 is out of range (1-12)" },
        { name: "Invalid month 0", expected: "2025-00-15 valid? False", hint: "Month 0 is out of range (1-12)" },
        { name: "Invalid day 32", expected: "2025-06-32 valid? False", hint: "Day 32 is out of range (1-31)" }
      ],
      hints: [
        "For __str__: use f\"{self.year}-{self.month:02d}-{self.day:02d}\" — :02d pads single digits with a leading zero",
        "For from_string: split the string on '-', convert each part to int with map(int, ...), then return cls(year, month, day)",
        "For is_valid: return year > 0 and 1 <= month <= 12 and 1 <= day <= 31"
      ]
    }
  },

  // ==================== INTERMEDIATE c08 ====================
  {
    id: "c08",
    title: "Multiple & Multi-level Inheritance",
    difficulty: "intermediate",
    order: 20,
    description: "Master single, multiple, and multi-level inheritance with MRO and the diamond problem",
    duration: "12 min",
    content: `Python supports **single**, **multiple**, and **multi-level** inheritance. Understanding how they work (and their quirks) is essential for OOP.

## Single Inheritance (Review)

\`\`\`python
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof!"

d = Dog()
print(d.speak())   # Woof!
\`\`\`

## Multi-level Inheritance

A chain: Grandparent → Parent → Child

\`\`\`python
class Animal:
    def breathe(self):
        return "Breathing"

class Dog(Animal):
    def bark(self):
        return "Woof!"

class Puppy(Dog):
    def play(self):
        return "Playing!"

p = Puppy()
print(p.breathe())   # Breathing (from Animal)
print(p.bark())      # Woof! (from Dog)
print(p.play())      # Playing! (from Puppy)
\`\`\`

## Multiple Inheritance

A class inherits from **multiple** parent classes:

\`\`\`python
class Flyer:
    def fly(self):
        return "Flying!"

class Swimmer:
    def swim(self):
        return "Swimming!"

class Duck(Flyer, Swimmer):
    def quack(self):
        return "Quack!"

d = Duck()
print(d.fly())     # Flying! (from Flyer)
print(d.swim())    # Swimming! (from Swimmer)
print(d.quack())   # Quack! (from Duck)
\`\`\`

## The Diamond Problem

When two parents share a common grandparent:

\`\`\`
      A
     / \\
    B   C
     \\ /
      D
\`\`\`

\`\`\`python
class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

class C(A):
    def greet(self):
        return "Hello from C"

class D(B, C):
    pass

d = D()
print(d.greet())   # Hello from B — why?
\`\`\`

## MRO — Method Resolution Order

Python uses the **C3 Linearization** algorithm to determine which method to call:

\`\`\`python
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)
\`\`\`

The order is: D → B → C → A → object

Python searches **left to right** in the parent list, then up.

## super() with Multiple Inheritance

\`\`\`python
class A:
    def __init__(self):
        print("A init")

class B(A):
    def __init__(self):
        print("B init")
        super().__init__()

class C(A):
    def __init__(self):
        print("C init")
        super().__init__()

class D(B, C):
    def __init__(self):
        print("D init")
        super().__init__()

d = D()
# D init → B init → C init → A init
# super() follows MRO, not just the immediate parent!
\`\`\`

## Best Practices

1. **Prefer composition over inheritance** when possible
2. **Keep hierarchies shallow** — deep trees get confusing
3. **Use MRO** to understand method resolution: \`ClassName.__mro__\`
4. **Always use super()** — don't call parent classes directly

> **Tip:** Check MRO with \`ClassName.__mro__\` or \`ClassName.mro()\` when debugging inheritance issues.`,
    codeExample: "# =============================================\n# Multiple & Multi-level Inheritance Demo\n# =============================================\n\n# Multi-level: Animal -> Dog -> Puppy\nprint(\"=== Multi-level Inheritance ===\")\nclass Animal:\n    def breathe(self):\n        return \"Breathing\"\n\nclass Dog(Animal):\n    def bark(self):\n        return \"Woof!\"\n\nclass Puppy(Dog):\n    def play(self):\n        return \"Playing!\"\n\np = Puppy()\nprint(f\"Puppy breathe: {p.breathe()}\")\nprint(f\"Puppy bark: {p.bark()}\")\nprint(f\"Puppy play: {p.play()}\")\n\n# Multiple Inheritance\nprint(\"\\n=== Multiple Inheritance ===\")\nclass Flyer:\n    def move(self):\n        return \"Flying\"\n\nclass Swimmer:\n    def move(self):\n        return \"Swimming\"\n\nclass FlyingFish(Flyer, Swimmer):\n    pass\n\nff = FlyingFish()\nprint(f\"FlyingFish move: {ff.move()}\")\nprint(f\"MRO: {[c.__name__ for c in FlyingFish.__mro__]}\")\n\n# Diamond Problem\nprint(\"\\n=== Diamond Problem ===\")\nclass A:\n    def greet(self):\n        return \"Hello from A\"\n\nclass B(A):\n    def greet(self):\n        return \"Hello from B\"\n\nclass C(A):\n    def greet(self):\n        return \"Hello from C\"\n\nclass D(B, C):\n    pass\n\nd = D()\nprint(f\"D.greet(): {d.greet()}\")\nprint(f\"D MRO: {[c.__name__ for c in D.__mro__]}\")",
    exercise: {
      title: "Inheritance Hierarchy Builder",
      description: "Build a class hierarchy demonstrating multi-level and multiple inheritance. Explore MRO and how Python resolves method calls.",
      starterCode: `# =============================================
# EXERCISE: Inheritance Hierarchy Builder
# =============================================

# STEP 1: Create a base class Vehicle with a describe() method
# TODO: class Vehicle with describe() returning "I am a vehicle"

# STEP 2: Create LandVehicle(Vehicle) with drive() returning "Driving on land"
# TODO: class LandVehicle

# STEP 3: Create WaterVehicle(Vehicle) with sail() returning "Sailing on water"
# TODO: class WaterVehicle

# STEP 4: Create AmphibiousVehicle(LandVehicle, WaterVehicle) — multiple inheritance
# TODO: class AmphibiousVehicle with a describe() returning "I am amphibious!"

# Test the hierarchy
print("=== Vehicle Hierarchy ===")

car = LandVehicle()
print(f"Car: {car.describe()}")
print(f"Car: {car.drive()}")

boat = WaterVehicle()
print(f"Boat: {boat.describe()}")
print(f"Boat: {boat.sail()}")

amp = AmphibiousVehicle()
print(f"Amphibious: {amp.describe()}")
print(f"Amphibious: {amp.drive()}")
print(f"Amphibious: {amp.sail()}")

# STEP 5: Print the MRO for AmphibiousVehicle
print("\\n=== Method Resolution Order ===")
mro_names = [c.__name__ for c in AmphibiousVehicle.__mro__]
print(f"MRO: {mro_names}")
`,
      solution: `# =============================================
# EXERCISE: Inheritance Hierarchy Builder
# =============================================

# STEP 1: Create a base class Vehicle with a describe() method
class Vehicle:
    def describe(self):
        return "I am a vehicle"

# STEP 2: Create LandVehicle(Vehicle) with drive()
class LandVehicle(Vehicle):
    def drive(self):
        return "Driving on land"

# STEP 3: Create WaterVehicle(Vehicle) with sail()
class WaterVehicle(Vehicle):
    def sail(self):
        return "Sailing on water"

# STEP 4: Create AmphibiousVehicle(LandVehicle, WaterVehicle)
class AmphibiousVehicle(LandVehicle, WaterVehicle):
    def describe(self):
        return "I am amphibious!"

# Test the hierarchy
print("=== Vehicle Hierarchy ===")

car = LandVehicle()
print(f"Car: \{car.describe()}")
print(f"Car: \{car.drive()}")

boat = WaterVehicle()
print(f"Boat: \{boat.describe()}")
print(f"Boat: \{boat.sail()}")

amp = AmphibiousVehicle()
print(f"Amphibious: \{amp.describe()}")
print(f"Amphibious: \{amp.drive()}")
print(f"Amphibious: \{amp.sail()}")

# STEP 5: Print the MRO for AmphibiousVehicle
print("\\n=== Method Resolution Order ===")
mro_names = [c.__name__ for c in AmphibiousVehicle.__mro__]
print(f"MRO: \{mro_names}")
`,
      hint: "Vehicle is the base. LandVehicle and WaterVehicle inherit from Vehicle. AmphibiousVehicle inherits from both. Check MRO with __mro__.",
      tests: [
        { name: "Hierarchy header", expected: "=== Vehicle Hierarchy ===", hint: "Print the header exactly" },
        { name: "Car describe", expected: "Car: I am a vehicle", hint: "LandVehicle inherits describe() from Vehicle" },
        { name: "Car drive", expected: "Car: Driving on land", hint: "LandVehicle has its own drive() method" },
        { name: "Boat describe", expected: "Boat: I am a vehicle", hint: "WaterVehicle inherits describe() from Vehicle" },
        { name: "Boat sail", expected: "Boat: Sailing on water", hint: "WaterVehicle has its own sail() method" },
        { name: "Amphibious describe", expected: "Amphibious: I am amphibious!", hint: "AmphibiousVehicle overrides describe()" },
        { name: "Amphibious drive", expected: "Amphibious: Driving on land", hint: "AmphibiousVehicle inherits drive() from LandVehicle" },
        { name: "Amphibious sail", expected: "Amphibious: Sailing on water", hint: "AmphibiousVehicle inherits sail() from WaterVehicle" },
        { name: "MRO header", expected: "=== Method Resolution Order ===", hint: "Print the MRO header" },
        { name: "MRO output", expected: "MRO: ['AmphibiousVehicle', 'LandVehicle', 'WaterVehicle', 'Vehicle', 'object']", hint: "MRO follows C3 linearization: D -> B -> C -> A -> object" }
      ],
      hints: [
        "Vehicle is the base: class Vehicle: with describe(self) returning 'I am a vehicle'",
        "LandVehicle(Vehicle) adds drive(), WaterVehicle(Vehicle) adds sail() — both inherit describe() from Vehicle",
        "AmphibiousVehicle(LandVehicle, WaterVehicle) inherits from both — it overrides describe() and inherits drive() and sail()"
      ]
    }
  },

  // ==================== ADVANCED c09 ====================
  {
    id: "c09",
    title: "Exception Handling Deep Dive",
    difficulty: "advanced",
    order: 16,
    description: "Master try/except/else/finally, custom exceptions, and exception chaining for robust Python code",
    duration: "12 min",
    content: `Exception handling is crucial for writing robust Python code. Let's go beyond basic try/except to master the complete pattern.

## The Complete Pattern: try/except/else/finally

\`\`\`python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    # Runs ONLY if no exception occurred
    print(f"Result: {result}")
finally:
    # ALWAYS runs, exception or not
    print("Cleanup complete")
\`\`\`

### Flow Diagram:

| Block | When it runs |
|-------|-------------|
| \`try\` | Always attempted |
| \`except\` | Only if exception matches |
| \`else\` | Only if NO exception |
| \`finally\` | ALWAYS (even with return!) |

## Catching Multiple Exception Types

\`\`\`python
def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "Error: division by zero"
    except TypeError:
        return "Error: invalid types"
    except Exception as e:
        return f"Error: {e}"
    else:
        return f"Result: {result}"

print(safe_divide(10, 3))      # Result: 3.333...
print(safe_divide(10, 0))      # Error: division by zero
print(safe_divide("10", 2))    # Result: 5.0 (strings can divide!)
\`\`\`

## Custom Exceptions

Create your own exception classes by inheriting from \`Exception\`:

\`\`\`python
class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

class AgeError(ValidationError):
    pass

class NameError_(ValidationError):
    pass

def validate_age(age):
    if not isinstance(age, int):
        raise AgeError("age", "must be an integer")
    if age < 0 or age > 150:
        raise AgeError("age", f"{age} is not a valid age")
    return True
\`\`\`

## The raise Statement

\`\`\`python
# Raise a new exception
raise ValueError("Invalid input")

# Re-raise the current exception (inside except block)
try:
    risky_operation()
except ValueError:
    print("Logging the error...")
    raise   # Re-raises the same exception
\`\`\`

## Exception Hierarchy

Python's exceptions form a hierarchy:

\`\`\`
BaseException
 ├── SystemExit
 ├── KeyboardInterrupt
 └── Exception
      ├── ValueError
      ├── TypeError
      ├── KeyError
      ├── IndexError
      ├── ZeroDivisionError
      ├── FileNotFoundError
      ├── AttributeError
      └── ... (many more)
\`\`\`

## Exception Chaining

\`\`\`python
try:
    int("abc")
except ValueError as original:
    raise RuntimeError("Failed to process data") from original
\`\`\`

This preserves the original exception as the **cause**.

## Best Practices

1. **Catch specific exceptions** — never bare \`except:\`
2. **Use else** for code that should only run on success
3. **Use finally** for cleanup (closing files, connections)
4. **Create custom exceptions** for your application's domain
5. **Don't silence exceptions** — log them at minimum

> **Tip:** The \`else\` block is often overlooked but very useful — it clearly separates "success" code from "error handling" code.`,
    codeExample: "# =============================================\n# Exception Handling Deep Dive Demo\n# =============================================\n\n# Complete try/except/else/finally\nprint(\"=== Complete Pattern ===\")\n\ndef divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print(f\"  Cannot divide {a} by zero!\")\n        return None\n    except TypeError as e:\n        print(f\"  Type error: {e}\")\n        return None\n    else:\n        print(f\"  {a} / {b} = {result:.2f}\")\n        return result\n    finally:\n        print(\"  [division attempt complete]\")\n\ndivide(10, 3)\ndivide(10, 0)\ndivide(\"10\", \"2\")\n\n# Custom exceptions\nprint(\"\\n=== Custom Exceptions ===\")\n\nclass ValidationError(Exception):\n    def __init__(self, field, message):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\ndef validate_score(score):\n    if not isinstance(score, (int, float)):\n        raise ValidationError(\"score\", \"must be a number\")\n    if score < 0 or score > 100:\n        raise ValidationError(\"score\", f\"{score} out of range (0-100)\")\n    return True\n\ntest_scores = [85, -5, 150, 92]\nfor score in test_scores:\n    try:\n        validate_score(score)\n        print(f\"  Score {score}: Valid\")\n    except ValidationError as e:\n        print(f\"  Score {score}: INVALID - {e.message}\")\n\n# Catching multiple types\nprint(\"\\n=== Multiple Except ===\")\ntest_cases = [(\"10\", 2), (10, 0), ([1], 2)]\nfor a, b in test_cases:\n    try:\n        print(f\"  {a} / {b} = {a / b}\")\n    except ZeroDivisionError:\n        print(f\"  {a} / {b} -> ZeroDivisionError\")\n    except TypeError:\n        print(f\"  {a} / {b} -> TypeError\")",
    exercise: {
      title: "Robust Input Validator",
      description: "Build a validation system with custom exceptions that handles various error cases using the complete try/except/else/finally pattern.",
      starterCode: `# =============================================
# EXERCISE: Robust Input Validator
# =============================================

# STEP 1: Create a custom ValidationError exception
# TODO: class ValidationError(Exception) with field and message attributes

# STEP 2: Create a validate_age function
# - If age is not an int, raise ValidationError("age", "must be an integer")
# - If age < 0, raise ValidationError("age", "cannot be negative")
# - If age > 150, raise ValidationError("age", "unrealistic age")
# - Otherwise return True

# STEP 3: Create a validate_name function
# - If name is not a string, raise ValidationError("name", "must be a string")
# - If len(name) == 0, raise ValidationError("name", "cannot be empty")
# - If len(name) < 2, raise ValidationError("name", "too short")
# - Otherwise return True

# STEP 4: Test the validators with try/except/else/finally
print("=== Age Validation ===")
test_ages = [25, -5, 200, 17]

for age in test_ages:
    # TODO: Use try/except/else to validate each age
    # On success: print "Age <age>: Valid"
    # On error: print "Age <age>: INVALID - <message>"
    pass

print("\\n=== Name Validation ===")
test_names = ["Alice", "", "B", "Charlie"]

for name in test_names:
    # TODO: Use try/except/else to validate each name
    # On success: print "Name '<name>': Valid"
    # On error: print "Name '<name>': INVALID - <message>"
    pass

# STEP 5: Combined validation with finally
print("\\n=== Full Validation ===")
records = [
    {"name": "Alice", "age": 30},
    {"name": "", "age": 25},
    {"name": "Bob", "age": -1},
    {"name": "Charlie", "age": 45}
]

for record in records:
    # TODO: Validate both name and age
    # Print "Record: Valid - <name>, age <age>" on success
    # Print "Record: INVALID - <error message>" on failure
    # Print "---" in finally block
    pass
`,
      solution: `# =============================================
# EXERCISE: Robust Input Validator
# =============================================

# STEP 1: Create a custom ValidationError exception
class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"\{field}: \{message}")

# STEP 2: Create a validate_age function
def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError("age", "must be an integer")
    if age < 0:
        raise ValidationError("age", "cannot be negative")
    if age > 150:
        raise ValidationError("age", "unrealistic age")
    return True

# STEP 3: Create a validate_name function
def validate_name(name):
    if not isinstance(name, str):
        raise ValidationError("name", "must be a string")
    if len(name) == 0:
        raise ValidationError("name", "cannot be empty")
    if len(name) < 2:
        raise ValidationError("name", "too short")
    return True

# STEP 4: Test the validators
print("=== Age Validation ===")
test_ages = [25, -5, 200, 17]

for age in test_ages:
    try:
        validate_age(age)
    except ValidationError as e:
        print(f"Age \{age}: INVALID - \{e.message}")
    else:
        print(f"Age \{age}: Valid")

print("\\n=== Name Validation ===")
test_names = ["Alice", "", "B", "Charlie"]

for name in test_names:
    try:
        validate_name(name)
    except ValidationError as e:
        print(f"Name '\{name}': INVALID - \{e.message}")
    else:
        print(f"Name '\{name}': Valid")

# STEP 5: Combined validation with finally
print("\\n=== Full Validation ===")
records = [
    {"name": "Alice", "age": 30},
    {"name": "", "age": 25},
    {"name": "Bob", "age": -1},
    {"name": "Charlie", "age": 45}
]

for record in records:
    try:
        validate_name(record["name"])
        validate_age(record["age"])
    except ValidationError as e:
        print(f"Record: INVALID - \{e.message}")
    else:
        print(f"Record: Valid - \{record['name']}, age \{record['age']}")
    finally:
        print("---")
`,
      hint: "Create ValidationError with field and message attributes. Each validate function raises ValidationError with specific messages. Use try/except/else to handle success and failure separately.",
      tests: [
        { name: "Age header", expected: "=== Age Validation ===", hint: "Print the age validation header" },
        { name: "Age 25 valid", expected: "Age 25: Valid", hint: "25 is a valid age" },
        { name: "Age -5 invalid", expected: "Age -5: INVALID - cannot be negative", hint: "Negative ages should raise ValidationError" },
        { name: "Age 200 invalid", expected: "Age 200: INVALID - unrealistic age", hint: "Ages over 150 should be rejected" },
        { name: "Name header", expected: "=== Name Validation ===", hint: "Print the name validation header" },
        { name: "Name Alice valid", expected: "Name 'Alice': Valid", hint: "Alice is a valid name" },
        { name: "Empty name invalid", expected: "Name '': INVALID - cannot be empty", hint: "Empty strings should be rejected" },
        { name: "Short name invalid", expected: "Name 'B': INVALID - too short", hint: "Single character names are too short" },
        { name: "Full validation header", expected: "=== Full Validation ===", hint: "Print the full validation header" },
        { name: "Alice record valid", expected: "Record: Valid - Alice, age 30", hint: "Both name and age are valid for Alice" },
        { name: "Empty name record", expected: "Record: INVALID - cannot be empty", hint: "Empty name fails validation first" },
        { name: "Negative age record", expected: "Record: INVALID - cannot be negative", hint: "Bob's age of -1 is invalid" }
      ],
      hints: [
        "ValidationError needs __init__(self, field, message) — store both as attributes and call super().__init__(f\"{field}: {message}\")",
        "In validate_age, check isinstance(age, int) first, then check ranges. Each condition raises with a specific message",
        "In the combined validation, validate_name runs first — if it fails, validate_age never runs. The finally block always prints '---'"
      ]
    }
  },

  // ==================== ADVANCED c10 ====================
  {
    id: "c10",
    title: "Multithreading Basics",
    difficulty: "advanced",
    order: 17,
    description: "Understand threading concepts, thread creation, synchronization, and thread safety in Python",
    duration: "12 min",
    content: `**Multithreading** allows your program to run multiple tasks concurrently. Python's \`threading\` module provides the tools.

## What Is a Thread?

A **thread** is a lightweight unit of execution within a process. Multiple threads share the same memory space.

| Concept | Description |
|---------|-------------|
| **Thread** | A separate flow of execution |
| **Main thread** | The thread your program starts in |
| **Concurrent** | Multiple tasks in progress (not necessarily simultaneously) |
| **Parallel** | Multiple tasks running at the exact same time |

## Creating Threads

\`\`\`python
import threading

def task(name, count):
    for i in range(count):
        print(f"{name}: step {i+1}")

# Create a thread
t = threading.Thread(target=task, args=("Worker", 3))
t.start()     # Begin execution
t.join()      # Wait for it to finish
print("Done!")
\`\`\`

## Thread.join() — Waiting for Completion

\`\`\`python
import threading

def slow_task(name):
    result = 0
    for i in range(1000000):
        result += i
    print(f"{name} finished with result: {result}")

t1 = threading.Thread(target=slow_task, args=("Thread-1",))
t2 = threading.Thread(target=slow_task, args=("Thread-2",))

t1.start()
t2.start()

t1.join()  # Wait for t1
t2.join()  # Wait for t2

print("All threads done!")
\`\`\`

## Daemon Threads

**Daemon threads** are background threads that automatically die when the main program exits:

\`\`\`python
import threading

def background_task():
    while True:
        print("Background work...")

t = threading.Thread(target=background_task, daemon=True)
t.start()
# Main thread exits → daemon thread is killed
\`\`\`

## Thread Safety & Race Conditions

When multiple threads access shared data, **race conditions** can occur:

\`\`\`python
import threading

# UNSAFE — race condition!
counter = 0

def increment():
    global counter
    for _ in range(100000):
        counter += 1  # Not atomic!
\`\`\`

## Locks — Preventing Race Conditions

\`\`\`python
import threading

lock = threading.Lock()
counter = 0

def safe_increment():
    global counter
    for _ in range(100000):
        with lock:          # Acquire and release automatically
            counter += 1    # Only one thread at a time

t1 = threading.Thread(target=safe_increment)
t2 = threading.Thread(target=safe_increment)
t1.start(); t2.start()
t1.join(); t2.join()
print(f"Counter: {counter}")   # Always 200000
\`\`\`

## The GIL (Global Interpreter Lock)

Python has a **GIL** that prevents true parallel execution of Python bytecode. This means:

| Task Type | Threading Useful? | Better Alternative |
|-----------|-------------------|-------------------|
| I/O-bound (network, files) | Yes! | asyncio |
| CPU-bound (math, processing) | Not much | multiprocessing |

## Common Threading Patterns

\`\`\`python
import threading

# Pattern: Worker pool simulation
def worker(worker_id, tasks):
    for task in tasks:
        print(f"Worker {worker_id}: processing {task}")

# Simulate concurrent processing
tasks = ["task_a", "task_b", "task_c"]
threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i, [tasks[i]]))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
\`\`\`

> **Tip:** In Pyodide (browser Python), threading is single-threaded. We simulate the concepts here, but in a real Python environment, threads run concurrently.`,
    codeExample: "# =============================================\n# Multithreading Basics Demo\n# =============================================\n# Note: In Pyodide, threads run sequentially.\n# We demonstrate the concepts and API.\n\nimport threading\n\n# Basic thread creation\nprint(\"=== Basic Threading ===\")\n\ndef greet(name, times):\n    for i in range(times):\n        print(f\"{name}: Hello #{i+1}\")\n\nt1 = threading.Thread(target=greet, args=(\"Thread-A\", 3))\nt2 = threading.Thread(target=greet, args=(\"Thread-B\", 3))\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()\nprint(\"Both threads complete!\")\n\n# Thread info\nprint(\"\\n=== Thread Info ===\")\nprint(f\"Main thread: {threading.main_thread().name}\")\nprint(f\"Active threads: {threading.active_count()}\")\nprint(f\"Current thread: {threading.current_thread().name}\")\n\n# Simulating shared resource with lock\nprint(\"\\n=== Lock Demo ===\")\nlock = threading.Lock()\nshared_list = []\n\ndef safe_append(items):\n    for item in items:\n        with lock:\n            shared_list.append(item)\n            print(f\"Added: {item} -> List: {shared_list}\")\n\nt1 = threading.Thread(target=safe_append, args=([\"a\", \"b\"],))\nt2 = threading.Thread(target=safe_append, args=([\"x\", \"y\"],))\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()\n\nprint(f\"Final list: {shared_list}\")",
    exercise: {
      title: "Threading Concepts Explorer",
      description: "Explore threading concepts by creating threads, using locks for synchronization, and understanding thread lifecycle. Note: In Pyodide, threads execute sequentially but the API and concepts are the same.",
      starterCode: `# =============================================
# EXERCISE: Threading Concepts Explorer
# =============================================
import threading

# STEP 1: Create a simple worker function
# It should print "<name>: Task <i+1> complete" for each task number
def worker(name, num_tasks):
    # TODO: Loop num_tasks times, printing progress
    pass

# STEP 2: Create and run two threads
print("=== Worker Threads ===")
# TODO: Create Thread t1 with worker("Alpha", 3)
# TODO: Create Thread t2 with worker("Beta", 3)
# TODO: Start both, then join both

print("All workers done!")

# STEP 3: Thread information
print("\\n=== Thread Info ===")
# TODO: Print the main thread name
# TODO: Print the current thread name
# TODO: Print the active thread count

# STEP 4: Safe counter with Lock
print("\\n=== Safe Counter ===")
counter = 0
lock = threading.Lock()

def safe_increment(name, amount):
    global counter
    # TODO: Loop 'amount' times, incrementing counter with lock
    # After the loop, print "<name> finished. Counter: <counter>"
    pass

# TODO: Create two threads: t1 increments 5 times, t2 increments 5 times
# Start and join both

print(f"Final counter: {counter}")
`,
      solution: `# =============================================
# EXERCISE: Threading Concepts Explorer
# =============================================
import threading

# STEP 1: Create a simple worker function
def worker(name, num_tasks):
    for i in range(num_tasks):
        print(f"\{name}: Task \{i+1} complete")

# STEP 2: Create and run two threads
print("=== Worker Threads ===")
t1 = threading.Thread(target=worker, args=("Alpha", 3))
t2 = threading.Thread(target=worker, args=("Beta", 3))

t1.start()
t2.start()
t1.join()
t2.join()

print("All workers done!")

# STEP 3: Thread information
print("\\n=== Thread Info ===")
print(f"Main thread: \{threading.main_thread().name}")
print(f"Current thread: \{threading.current_thread().name}")
print(f"Active threads: \{threading.active_count()}")

# STEP 4: Safe counter with Lock
print("\\n=== Safe Counter ===")
counter = 0
lock = threading.Lock()

def safe_increment(name, amount):
    global counter
    for _ in range(amount):
        with lock:
            counter += 1
    print(f"\{name} finished. Counter: \{counter}")

t1 = threading.Thread(target=safe_increment, args=("Counter-A", 5))
t2 = threading.Thread(target=safe_increment, args=("Counter-B", 5))

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Final counter: \{counter}")
`,
      hint: "Create threads with threading.Thread(target=func, args=(...)). Always call start() then join(). Use 'with lock:' for thread-safe operations on shared data.",
      tests: [
        { name: "Worker header", expected: "=== Worker Threads ===", hint: "Print the header exactly" },
        { name: "Alpha task 1", expected: "Alpha: Task 1 complete", hint: "Worker 'Alpha' should print its first task" },
        { name: "Alpha task 3", expected: "Alpha: Task 3 complete", hint: "Worker 'Alpha' should complete 3 tasks" },
        { name: "Beta task 1", expected: "Beta: Task 1 complete", hint: "Worker 'Beta' should print its first task" },
        { name: "All workers done", expected: "All workers done!", hint: "Print this after joining both threads" },
        { name: "Thread info header", expected: "=== Thread Info ===", hint: "Print the thread info header" },
        { name: "Safe counter header", expected: "=== Safe Counter ===", hint: "Print the safe counter header" },
        { name: "Counter-A finished", expected: "Counter-A finished. Counter: 5", hint: "Counter-A increments 5 times" },
        { name: "Counter-B finished", expected: "Counter-B finished. Counter: 10", hint: "Counter-B increments 5 more times (total 10)" },
        { name: "Final counter is 10", expected: "Final counter: 10", hint: "5 + 5 = 10 total increments" }
      ],
      hints: [
        "Create threads with threading.Thread(target=worker, args=(\"Alpha\", 3)) — don't forget the comma in single-element tuples!",
        "Always start() threads before join(). join() blocks until the thread finishes",
        "Use 'with lock:' to safely increment the counter — this acquires and releases the lock automatically"
      ]
    }
  }

];
