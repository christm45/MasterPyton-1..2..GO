// ──────────────────────────────────────────────────────────
// ADDITIONAL LESSONS A
// 5 Beginner (b21-b25) + 5 Intermediate (i11-i15) lessons
// ──────────────────────────────────────────────────────────

export const additionalLessonsA = [

  // ==================== BEGINNER b21 ====================
  {
    id: "b21",
    title: "Type Conversions & Casting",
    difficulty: "beginner",
    order: 36,
    description: "Convert between int, float, str, and bool with Python's casting functions",
    duration: "10 min",
    content: `Python lets you convert one data type to another using built-in functions. This is called **type casting**.

## The Four Main Casting Functions

| Function | Converts to | Example |
|----------|-------------|---------|
| \`int()\` | Integer | \`int("42")\` → \`42\` |
| \`float()\` | Float | \`float("3.14")\` → \`3.14\` |
| \`str()\` | String | \`str(100)\` → \`"100"\` |
| \`bool()\` | Boolean | \`bool(1)\` → \`True\` |

## int() — Convert to Integer

\`\`\`python
# From float — truncates (removes decimal, does NOT round)
print(int(3.9))      # 3  (not 4!)
print(int(-2.7))     # -2

# From string — string must be a valid integer
print(int("42"))     # 42
print(int("007"))    # 7

# From bool
print(int(True))     # 1
print(int(False))    # 0
\`\`\`

## float() — Convert to Float

\`\`\`python
print(float(10))       # 10.0
print(float("3.14"))   # 3.14
print(float("42"))     # 42.0
print(float(True))     # 1.0
\`\`\`

## str() — Convert to String

\`\`\`python
print(str(42))        # "42"
print(str(3.14))      # "3.14"
print(str(True))      # "True"
print(str([1, 2, 3])) # "[1, 2, 3]"
\`\`\`

## bool() — Convert to Boolean

\`\`\`python
# "Falsy" values — these become False:
print(bool(0))        # False
print(bool(0.0))      # False
print(bool(""))       # False
print(bool([]))       # False
print(bool(None))     # False

# Everything else is "Truthy" — becomes True:
print(bool(1))        # True
print(bool(-5))       # True
print(bool("hello"))  # True
print(bool([1, 2]))   # True
\`\`\`

## Common Conversion Errors

\`\`\`python
# These will CRASH your program:
# int("hello")      # ValueError — not a number!
# int("3.14")       # ValueError — has a decimal point!
# int("")           # ValueError — empty string!

# Safe approach: convert string to float first, then to int
print(int(float("3.14")))  # 3 — works!
\`\`\`

> **Tip:** When reading user input, it always comes as a string. Use \`int()\` or \`float()\` to convert it to a number before doing math.`,
    codeExample: "# =============================================\n# Type Conversions & Casting Demo\n# =============================================\n\n# int() conversions\nprint(\"=== int() ===\")\nprint(int(3.9))       # 3 — truncates decimal\nprint(int(\"42\"))      # 42 — string to int\nprint(int(True))      # 1\n\n# float() conversions\nprint(\"\\n=== float() ===\")\nprint(float(10))      # 10.0\nprint(float(\"3.14\"))  # 3.14\n\n# str() conversions\nprint(\"\\n=== str() ===\")\nprint(str(42))        # \"42\"\nprint(str(3.14))      # \"3.14\"\n\n# bool() conversions\nprint(\"\\n=== bool() ===\")\nprint(bool(0))        # False\nprint(bool(42))       # True\nprint(bool(\"\"))       # False\nprint(bool(\"hello\"))  # True\n\n# Practical: safe string-to-int with decimal\nprint(\"\\n=== Practical ===\")\nvalue = \"7.85\"\nresult = int(float(value))\nprint(f\"'{value}' as int: {result}\")",
    exercise: {
      title: "Type Conversion Workshop",
      description: "Convert between different types and print the results. Follow each step carefully to see how Python casts values.",
      starterCode: `# =============================================
# EXERCISE: Type Conversion Workshop
# =============================================

# STEP 1: Convert the string "99" to an integer and print it
text_num = "99"
as_int = int(text_num)
print(f"String to int: {as_int}")

# STEP 2: Convert the float 7.85 to an integer and print it
decimal = 7.85
# TODO: convert decimal to int and store in 'truncated'

print(f"Float to int: {truncated}")

# STEP 3: Convert the integer 42 to a string, concatenate with " is the answer"
num = 42
# TODO: convert num to string and concatenate with " is the answer", store in 'message'

print(f"Int to string: {message}")

# STEP 4: Check the bool value of various inputs
# TODO: print the bool() of 0, then print the bool() of "hello"
print(f"bool(0): {bool(0)}")
print(f"bool('hello'): {bool('hello')}")

# STEP 5: Convert "3.14" to a float, then to an int
pi_str = "3.14"
# TODO: convert pi_str to float, then to int, store in 'pi_int'

print(f"'3.14' as int: {pi_int}")
`,
      solution: `# =============================================
# EXERCISE: Type Conversion Workshop
# =============================================

# STEP 1: Convert the string "99" to an integer and print it
text_num = "99"
as_int = int(text_num)
print(f"String to int: {as_int}")

# STEP 2: Convert the float 7.85 to an integer and print it
decimal = 7.85
truncated = int(decimal)
print(f"Float to int: {truncated}")

# STEP 3: Convert the integer 42 to a string, concatenate with " is the answer"
num = 42
message = str(num) + " is the answer"
print(f"Int to string: {message}")

# STEP 4: Check the bool value of various inputs
print(f"bool(0): {bool(0)}")
print(f"bool('hello'): {bool('hello')}")

# STEP 5: Convert "3.14" to a float, then to an int
pi_str = "3.14"
pi_int = int(float(pi_str))
print(f"'3.14' as int: {pi_int}")
`,
      hint: "Use int(), float(), str(), and bool() to convert between types. Remember int() truncates floats — it doesn't round!",
      tests: [
        { name: "String to int conversion", expected: "String to int: 99", hint: "Use int(text_num) to convert '99' to 99" },
        { name: "Float to int truncation", expected: "Float to int: 7", hint: "int(7.85) truncates to 7, not rounds to 8" },
        { name: "Int to string concatenation", expected: "Int to string: 42 is the answer", hint: "Use str(42) + ' is the answer'" },
        { name: "bool(0) is False", expected: "bool(0): False", hint: "0 is a falsy value so bool(0) returns False" },
        { name: "bool('hello') is True", expected: "bool('hello'): True", hint: "Non-empty strings are truthy" },
        { name: "String to float to int", expected: "'3.14' as int: 3", hint: "First float('3.14') gives 3.14, then int(3.14) gives 3" }
      ],
      hints: [
        "For step 2: truncated = int(decimal) — int() removes the decimal part without rounding",
        "For step 3: message = str(num) + ' is the answer' — you must convert the number to a string before concatenating",
        "For step 5: pi_int = int(float(pi_str)) — convert to float first, then to int"
      ]
    }
  },

  // ==================== BEGINNER b22 ====================
  {
    id: "b22",
    title: "Nested Loops",
    difficulty: "beginner",
    order: 37,
    description: "Master loops inside loops to work with grids and tables",
    duration: "12 min",
    content: `A **nested loop** is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.

## How Nested Loops Work

\`\`\`python
# The outer loop runs 3 times
# For EACH outer iteration, the inner loop runs 3 times
# Total iterations: 3 × 3 = 9

for i in range(1, 4):        # outer: 1, 2, 3
    for j in range(1, 4):    # inner: 1, 2, 3
        print(f"({i},{j})", end=" ")
    print()  # new line after each row
\`\`\`

**Output:**
\`\`\`
(1,1) (1,2) (1,3)
(2,1) (2,2) (2,3)
(3,1) (3,2) (3,3)
\`\`\`

## Multiplication Table

\`\`\`python
# Print a 5×5 multiplication table
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:4}", end="")  # :4 pads to 4 characters
    print()
\`\`\`

**Output:**
\`\`\`
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
\`\`\`

## Pattern Printing

\`\`\`python
# Print a right triangle of stars
for row in range(1, 6):
    for col in range(row):
        print("*", end="")
    print()
\`\`\`

**Output:**
\`\`\`
*
**
***
****
*****
\`\`\`

## Nested Loop with Lists

\`\`\`python
# Process a 2D grid (list of lists)
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in grid:
    for item in row:
        print(item, end=" ")
    print()
\`\`\`

> **Tip:** Be careful with nested loops — a loop inside a loop can run many times. A 100×100 nested loop runs 10,000 times!`,
    codeExample: "# =============================================\n# Nested Loops — Patterns and Tables\n# =============================================\n\n# Simple 3x3 grid of coordinates\nprint(\"=== Coordinate Grid ===\")\nfor row in range(1, 4):\n    for col in range(1, 4):\n        print(f\"({row},{col})\", end=\" \")\n    print()\n\n# Star triangle\nprint(\"\\n=== Star Triangle ===\")\nfor i in range(1, 6):\n    print(\"*\" * i)\n\n# Mini multiplication table\nprint(\"\\n=== 5x5 Multiplication Table ===\")\nfor i in range(1, 6):\n    for j in range(1, 6):\n        print(f\"{i*j:4}\", end=\"\")\n    print()",
    exercise: {
      title: "Build a Multiplication Table",
      description: "Print a multiplication table from 1 to 5. Each row should show the products separated by tabs. Include a header row.",
      starterCode: `# =============================================
# EXERCISE: Multiplication Table (1-5)
# =============================================
# Your output should look like:
#     1   2   3   4   5
# 1   1   2   3   4   5
# 2   2   4   6   8  10
# 3   3   6   9  12  15
# 4   4   8  12  16  20
# 5   5  10  15  20  25

# STEP 1: Print the header row
# TODO: print the column headers (1 through 5) with proper spacing
print("   ", end="")
for col in range(1, 6):
    print(f"{col:4}", end="")
print()

# STEP 2: Print each row of the table
# TODO: For each row number (1-5), print the row label
#       then the products for each column
for row in range(1, 6):
    # Print the row number label
    pass  # TODO: replace this with your code
`,
      solution: `# =============================================
# EXERCISE: Multiplication Table (1-5)
# =============================================

# STEP 1: Print the header row
print("   ", end="")
for col in range(1, 6):
    print(f"{col:4}", end="")
print()

# STEP 2: Print each row of the table
for row in range(1, 6):
    print(f"{row:<4}", end="")
    for col in range(1, 6):
        print(f"{row*col:4}", end="")
    print()
`,
      hint: "Use two nested for loops: the outer for each row (1-5), the inner for each column (1-5). Print row*col with formatting.",
      tests: [
        { name: "Header row present", expected: "   1   2   3   4   5", hint: "Print column numbers with 4-char width using f\"{col:4}\"" },
        { name: "Row 1 is correct", expected: "1   1   2   3   4   5", hint: "Row 1: 1×1=1, 1×2=2, 1×3=3, 1×4=4, 1×5=5" },
        { name: "Row 3 is correct", expected: "3   3   6   9  12  15", hint: "Row 3: 3×1=3, 3×2=6, 3×3=9, 3×4=12, 3×5=15" },
        { name: "Row 5 is correct", expected: "5   5  10  15  20  25", hint: "Row 5: 5×1=5, 5×2=10, 5×3=15, 5×4=20, 5×5=25" }
      ],
      hints: [
        "The header: print(\"   \", end=\"\") then loop col 1-5 printing f\"{col:4}\"",
        "Each row starts with the row number: print(f\"{row:<4}\", end=\"\")",
        "Inner loop: for col in range(1, 6): print(f\"{row*col:4}\", end=\"\") then print() for newline"
      ]
    }
  },

  // ==================== BEGINNER b23 ====================
  {
    id: "b23",
    title: "Tuple Basics",
    difficulty: "beginner",
    order: 38,
    description: "Learn about immutable sequences — packing, unpacking, and when to use tuples",
    duration: "10 min",
    content: `A **tuple** is an ordered, **immutable** sequence. Once created, you cannot change its elements.

## Creating Tuples

\`\`\`python
# Using parentheses
point = (3, 4)
colors = ("red", "green", "blue")

# Without parentheses (tuple packing)
coordinates = 10, 20, 30

# Single-element tuple needs a trailing comma!
single = (42,)        # This IS a tuple
not_tuple = (42)      # This is just the number 42
\`\`\`

## Accessing Tuple Elements

\`\`\`python
fruits = ("apple", "banana", "cherry", "date")

print(fruits[0])      # "apple"
print(fruits[-1])     # "date"
print(fruits[1:3])    # ("banana", "cherry")
print(len(fruits))    # 4
\`\`\`

## Tuple Unpacking

\`\`\`python
# Assign each element to a separate variable
point = (3, 4)
x, y = point
print(x)  # 3
print(y)  # 4

# Works with any number of elements
name, age, city = ("Alice", 25, "Paris")
print(f"{name} is {age} from {city}")
\`\`\`

## Tuples Are Immutable

\`\`\`python
colors = ("red", "green", "blue")
# colors[0] = "yellow"   # TypeError! Can't change a tuple

# But you CAN create a new tuple
new_colors = ("yellow",) + colors[1:]
print(new_colors)  # ("yellow", "green", "blue")
\`\`\`

## Tuples vs Lists

| Feature | Tuple | List |
|---------|-------|------|
| Syntax | \`(1, 2, 3)\` | \`[1, 2, 3]\` |
| Mutable? | No | Yes |
| Speed | Faster | Slower |
| Use case | Fixed data | Changing data |
| Dict key? | Yes | No |

## Useful Tuple Methods

\`\`\`python
nums = (1, 2, 3, 2, 4, 2)
print(nums.count(2))    # 3 — how many 2s
print(nums.index(3))    # 2 — position of first 3
\`\`\`

> **Tip:** Use tuples for data that should not change — like coordinates, RGB colors, or database records.`,
    codeExample: "# =============================================\n# Tuple Basics Demo\n# =============================================\n\n# Creating tuples\npoint = (3, 4)\ncolors = (\"red\", \"green\", \"blue\")\nprint(f\"Point: {point}\")\nprint(f\"Colors: {colors}\")\n\n# Tuple unpacking\nx, y = point\nprint(f\"\\nUnpacked: x={x}, y={y}\")\n\n# Accessing elements\nprint(f\"\\nFirst color: {colors[0]}\")\nprint(f\"Last color: {colors[-1]}\")\nprint(f\"Slice: {colors[1:]}\")\n\n# Tuple methods\nnums = (1, 2, 3, 2, 4, 2)\nprint(f\"\\nCount of 2: {nums.count(2)}\")\nprint(f\"Index of 3: {nums.index(3)}\")\n\n# Tuples as dict keys\nlocations = {}\nlocations[(40.7, -74.0)] = \"New York\"\nlocations[(51.5, -0.1)] = \"London\"\nprint(f\"\\nLocations: {locations}\")",
    exercise: {
      title: "Working with Coordinate Tuples",
      description: "Use tuples to represent 2D coordinates. Calculate distances and midpoints between points.",
      starterCode: `# =============================================
# EXERCISE: Coordinate Tuples
# =============================================

# STEP 1: Create two point tuples
point_a = (1, 2)
point_b = (4, 6)
print(f"Point A: {point_a}")
print(f"Point B: {point_b}")

# STEP 2: Unpack the coordinates
# TODO: unpack point_a into ax, ay and point_b into bx, by
ax, ay = point_a
bx, by = point_b

# STEP 3: Calculate the distance between the points
# Distance = sqrt((bx-ax)^2 + (by-ay)^2)
# TODO: calculate distance (use ** 0.5 for square root)

print(f"Distance: {distance}")

# STEP 4: Calculate the midpoint
# Midpoint = ((ax+bx)/2, (ay+by)/2)
# TODO: create a tuple called midpoint

print(f"Midpoint: {midpoint}")

# STEP 5: Create a tuple of 3 points and loop through them
points = (point_a, point_b, (0, 0))
# TODO: loop through points and print each one
for point in points:
    x, y = point
    print(f"  ({x}, {y})")
`,
      solution: `# =============================================
# EXERCISE: Coordinate Tuples
# =============================================

# STEP 1: Create two point tuples
point_a = (1, 2)
point_b = (4, 6)
print(f"Point A: {point_a}")
print(f"Point B: {point_b}")

# STEP 2: Unpack the coordinates
ax, ay = point_a
bx, by = point_b

# STEP 3: Calculate the distance between the points
distance = ((bx - ax) ** 2 + (by - ay) ** 2) ** 0.5
print(f"Distance: {distance}")

# STEP 4: Calculate the midpoint
midpoint = ((ax + bx) / 2, (ay + by) / 2)
print(f"Midpoint: {midpoint}")

# STEP 5: Create a tuple of 3 points and loop through them
points = (point_a, point_b, (0, 0))
for point in points:
    x, y = point
    print(f"  ({x}, {y})")
`,
      hint: "Unpack with ax, ay = point_a. Distance uses the Pythagorean theorem. Midpoint averages x and y coordinates.",
      tests: [
        { name: "Point A is printed", expected: "Point A: (1, 2)", hint: "point_a = (1, 2) then print it with f-string" },
        { name: "Point B is printed", expected: "Point B: (4, 6)", hint: "point_b = (4, 6) then print it with f-string" },
        { name: "Distance is calculated", expected: "Distance: 5.0", hint: "sqrt((4-1)^2 + (6-2)^2) = sqrt(9+16) = sqrt(25) = 5.0" },
        { name: "Midpoint is calculated", expected: "Midpoint: (2.5, 4.0)", hint: "((1+4)/2, (2+6)/2) = (2.5, 4.0)" },
        { name: "Loop prints origin point", expected: "  (0, 0)", hint: "Loop through the points tuple and unpack each" }
      ],
      hints: [
        "Distance formula: distance = ((bx - ax) ** 2 + (by - ay) ** 2) ** 0.5",
        "Midpoint: midpoint = ((ax + bx) / 2, (ay + by) / 2) — creates a new tuple",
        "Loop with unpacking: for point in points: x, y = point"
      ]
    }
  },

  // ==================== BEGINNER b24 ====================
  {
    id: "b24",
    title: "Set Basics",
    difficulty: "beginner",
    order: 39,
    description: "Work with unique collections using union, intersection, and difference",
    duration: "10 min",
    content: `A **set** is an unordered collection of **unique** elements. Duplicates are automatically removed.

## Creating Sets

\`\`\`python
# Using curly braces
fruits = {"apple", "banana", "cherry"}

# From a list (removes duplicates!)
numbers = set([1, 2, 2, 3, 3, 3])
print(numbers)  # {1, 2, 3}

# Empty set — must use set(), NOT {}
empty = set()       # empty set
empty_dict = {}     # this is an empty DICT, not a set!
\`\`\`

## Adding and Removing Elements

\`\`\`python
colors = {"red", "green", "blue"}
colors.add("yellow")         # add one item
colors.update(["purple", "orange"])  # add multiple
colors.remove("red")         # remove (error if missing)
colors.discard("pink")       # remove (no error if missing)
\`\`\`

## Set Operations

\`\`\`python
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Union — all items from both sets
print(a | b)        # {1, 2, 3, 4, 5, 6, 7, 8}
print(a.union(b))   # same thing

# Intersection — items in BOTH sets
print(a & b)              # {4, 5}
print(a.intersection(b))  # same thing

# Difference — items in a but NOT in b
print(a - b)              # {1, 2, 3}
print(a.difference(b))    # same thing

# Symmetric difference — items in either but NOT both
print(a ^ b)                        # {1, 2, 3, 6, 7, 8}
print(a.symmetric_difference(b))    # same thing
\`\`\`

## Practical: Removing Duplicates

\`\`\`python
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique_names = list(set(names))
print(unique_names)  # ["Alice", "Bob", "Charlie"] (order may vary)
\`\`\`

## Membership Testing (Very Fast!)

\`\`\`python
# Sets are MUCH faster than lists for "in" checks
big_set = set(range(1000000))
print(999999 in big_set)  # True — instant!
\`\`\`

> **Tip:** Use sets when you care about uniqueness or need fast membership testing. Convert back to a list with \`list()\` if you need order.`,
    codeExample: "# =============================================\n# Set Basics Demo\n# =============================================\n\n# Creating sets\nfruits = {\"apple\", \"banana\", \"cherry\"}\nnums = set([1, 2, 2, 3, 3, 3])\nprint(f\"Fruits: {fruits}\")\nprint(f\"Unique nums: {nums}\")\n\n# Set operations\na = {1, 2, 3, 4, 5}\nb = {4, 5, 6, 7, 8}\nprint(f\"\\nA: {a}\")\nprint(f\"B: {b}\")\nprint(f\"Union: {a | b}\")\nprint(f\"Intersection: {a & b}\")\nprint(f\"A - B: {a - b}\")\nprint(f\"Symmetric diff: {a ^ b}\")\n\n# Removing duplicates\nnames = [\"Alice\", \"Bob\", \"Alice\", \"Charlie\", \"Bob\"]\nunique = sorted(set(names))\nprint(f\"\\nOriginal: {names}\")\nprint(f\"Unique (sorted): {unique}\")",
    exercise: {
      title: "Find Common & Unique Items",
      description: "Use set operations to analyze two groups of students enrolled in different classes.",
      starterCode: `# =============================================
# EXERCISE: Set Operations on Student Groups
# =============================================

# Two classes with student names
math_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
science_students = {"Bob", "Diana", "Frank", "Grace", "Eve"}

# STEP 1: Find students in BOTH classes (intersection)
# TODO: use & or .intersection()
both = math_students & science_students
print(f"In both classes: {sorted(both)}")

# STEP 2: Find ALL unique students (union)
# TODO: use | or .union()

print(f"All students: {sorted(all_students)}")

# STEP 3: Find students ONLY in math (difference)
# TODO: use - or .difference()

print(f"Only math: {sorted(only_math)}")

# STEP 4: Find students ONLY in science (difference)
# TODO: use - or .difference()

print(f"Only science: {sorted(only_science)}")

# STEP 5: Find students in exactly ONE class (symmetric difference)
# TODO: use ^ or .symmetric_difference()

print(f"Exactly one class: {sorted(exclusive)}")

# STEP 6: Count summary
print(f"Total unique students: {len(all_students)}")
print(f"Students in both: {len(both)}")
`,
      solution: `# =============================================
# EXERCISE: Set Operations on Student Groups
# =============================================

# Two classes with student names
math_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
science_students = {"Bob", "Diana", "Frank", "Grace", "Eve"}

# STEP 1: Find students in BOTH classes (intersection)
both = math_students & science_students
print(f"In both classes: {sorted(both)}")

# STEP 2: Find ALL unique students (union)
all_students = math_students | science_students
print(f"All students: {sorted(all_students)}")

# STEP 3: Find students ONLY in math (difference)
only_math = math_students - science_students
print(f"Only math: {sorted(only_math)}")

# STEP 4: Find students ONLY in science (difference)
only_science = science_students - math_students
print(f"Only science: {sorted(only_science)}")

# STEP 5: Find students in exactly ONE class (symmetric difference)
exclusive = math_students ^ science_students
print(f"Exactly one class: {sorted(exclusive)}")

# STEP 6: Count summary
print(f"Total unique students: {len(all_students)}")
print(f"Students in both: {len(both)}")
`,
      hint: "Use | for union, & for intersection, - for difference, and ^ for symmetric difference. sorted() makes output predictable.",
      tests: [
        { name: "Intersection found", expected: "In both classes: ['Bob', 'Diana', 'Eve']", hint: "both = math_students & science_students" },
        { name: "Union found", expected: "All students: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace']", hint: "all_students = math_students | science_students" },
        { name: "Only math found", expected: "Only math: ['Alice', 'Charlie']", hint: "only_math = math_students - science_students" },
        { name: "Only science found", expected: "Only science: ['Frank', 'Grace']", hint: "only_science = science_students - math_students" },
        { name: "Total count correct", expected: "Total unique students: 7", hint: "The union has 7 unique students" },
        { name: "Both count correct", expected: "Students in both: 3", hint: "Bob, Diana, and Eve are in both classes" }
      ],
      hints: [
        "Union (|) combines all items: all_students = math_students | science_students",
        "Difference (-) subtracts one set from another: only_math = math_students - science_students",
        "Symmetric difference (^) gives items in one set but not both: exclusive = math_students ^ science_students"
      ]
    }
  },

  // ==================== BEGINNER b25 ====================
  {
    id: "b25",
    title: "Mini Project: Expense Tracker",
    difficulty: "beginner",
    order: 40,
    description: "Combine lists, dictionaries, loops, and functions to build a simple expense tracker",
    duration: "15 min",
    content: `Let's combine everything you've learned — **lists, dictionaries, loops, and functions** — to build a mini expense tracker.

## Project Overview

We'll build a program that:
1. Stores expenses as dictionaries in a list
2. Categorizes spending (food, transport, entertainment, etc.)
3. Calculates totals by category
4. Shows a spending summary

## Data Structure

\`\`\`python
# Each expense is a dictionary
expense = {
    "name": "Lunch",
    "amount": 12.50,
    "category": "food"
}

# All expenses stored in a list
expenses = [
    {"name": "Lunch", "amount": 12.50, "category": "food"},
    {"name": "Bus pass", "amount": 50.00, "category": "transport"},
    {"name": "Movie", "amount": 15.00, "category": "entertainment"},
]
\`\`\`

## Useful Functions

\`\`\`python
# Add an expense
def add_expense(expenses, name, amount, category):
    expenses.append({
        "name": name,
        "amount": amount,
        "category": category
    })

# Get total spending
def get_total(expenses):
    return sum(e["amount"] for e in expenses)

# Get spending by category
def get_by_category(expenses, category):
    return [e for e in expenses if e["category"] == category]

# Get category totals
def category_totals(expenses):
    totals = {}
    for e in expenses:
        cat = e["category"]
        totals[cat] = totals.get(cat, 0) + e["amount"]
    return totals
\`\`\`

## Displaying a Summary

\`\`\`python
def print_summary(expenses):
    totals = category_totals(expenses)
    grand_total = get_total(expenses)

    print("=== Expense Summary ===")
    for cat, amount in sorted(totals.items()):
        pct = (amount / grand_total) * 100
        print(f"  {cat}: \${amount:.2f} ({pct:.1f}%)")
    print(f"  TOTAL: \${grand_total:.2f}")
\`\`\`

> **Tip:** This pattern — a list of dictionaries — is extremely common in real applications. Databases return data in this same structure!`,
    codeExample: "# =============================================\n# Mini Expense Tracker Demo\n# =============================================\n\n# Our expense storage\nexpenses = []\n\n# Function to add expenses\ndef add_expense(name, amount, category):\n    expenses.append({\"name\": name, \"amount\": amount, \"category\": category})\n\n# Add some expenses\nadd_expense(\"Coffee\", 4.50, \"food\")\nadd_expense(\"Bus ticket\", 2.50, \"transport\")\nadd_expense(\"Lunch\", 12.00, \"food\")\nadd_expense(\"Movie ticket\", 15.00, \"entertainment\")\nadd_expense(\"Groceries\", 45.00, \"food\")\nadd_expense(\"Uber\", 18.00, \"transport\")\n\n# Print all expenses\nprint(\"=== All Expenses ===\")\nfor e in expenses:\n    print(f\"  {e['name']}: ${e['amount']:.2f} ({e['category']})\")\n\n# Calculate totals by category\ntotals = {}\nfor e in expenses:\n    cat = e[\"category\"]\n    totals[cat] = totals.get(cat, 0) + e[\"amount\"]\n\n# Print summary\ngrand_total = sum(e[\"amount\"] for e in expenses)\nprint(f\"\\n=== Summary ===\")\nfor cat, amount in sorted(totals.items()):\n    pct = (amount / grand_total) * 100\n    print(f\"  {cat}: ${amount:.2f} ({pct:.1f}%)\")\nprint(f\"  TOTAL: ${grand_total:.2f}\")",
    exercise: {
      title: "Build Your Expense Tracker",
      description: "Complete the expense tracker by implementing functions to add expenses, calculate totals by category, and find the highest-spending category.",
      starterCode: `# =============================================
# EXERCISE: Build an Expense Tracker
# =============================================

expenses = []

# STEP 1: Complete the add_expense function
def add_expense(name, amount, category):
    """Add an expense dict to the expenses list."""
    # TODO: append a dictionary with name, amount, category to expenses
    pass

# STEP 2: Add these expenses using the function
# ("Coffee", 4.50, "food")
# ("Bus pass", 50.00, "transport")
# ("Lunch", 12.00, "food")
# ("Movie", 15.00, "entertainment")
# ("Groceries", 35.00, "food")
# ("Taxi", 22.00, "transport")
# TODO: call add_expense for each one


# STEP 3: Print each expense
print("=== All Expenses ===")
for e in expenses:
    print(f"  {e['name']}: \${e['amount']:.2f} [{e['category']}]")

# STEP 4: Complete the category_totals function
def category_totals(expense_list):
    """Return a dict of {category: total_amount}."""
    totals = {}
    # TODO: loop through expense_list, sum amounts by category
    return totals

# STEP 5: Print the summary
totals = category_totals(expenses)
grand_total = sum(e["amount"] for e in expenses)

print(f"\\n=== Category Totals ===")
for cat in sorted(totals):
    print(f"  {cat}: \${totals[cat]:.2f}")
print(f"  TOTAL: \${grand_total:.2f}")

# STEP 6: Find the highest spending category
# TODO: find which category has the highest total
top_cat = max(totals, key=totals.get)
print(f"\\nHighest category: {top_cat} (\${totals[top_cat]:.2f})")
`,
      solution: `# =============================================
# EXERCISE: Build an Expense Tracker
# =============================================

expenses = []

# STEP 1: Complete the add_expense function
def add_expense(name, amount, category):
    """Add an expense dict to the expenses list."""
    expenses.append({"name": name, "amount": amount, "category": category})

# STEP 2: Add these expenses using the function
add_expense("Coffee", 4.50, "food")
add_expense("Bus pass", 50.00, "transport")
add_expense("Lunch", 12.00, "food")
add_expense("Movie", 15.00, "entertainment")
add_expense("Groceries", 35.00, "food")
add_expense("Taxi", 22.00, "transport")

# STEP 3: Print each expense
print("=== All Expenses ===")
for e in expenses:
    print(f"  {e['name']}: \${e['amount']:.2f} [{e['category']}]")

# STEP 4: Complete the category_totals function
def category_totals(expense_list):
    """Return a dict of {category: total_amount}."""
    totals = {}
    for e in expense_list:
        cat = e["category"]
        totals[cat] = totals.get(cat, 0) + e["amount"]
    return totals

# STEP 5: Print the summary
totals = category_totals(expenses)
grand_total = sum(e["amount"] for e in expenses)

print(f"\\n=== Category Totals ===")
for cat in sorted(totals):
    print(f"  {cat}: \${totals[cat]:.2f}")
print(f"  TOTAL: \${grand_total:.2f}")

# STEP 6: Find the highest spending category
top_cat = max(totals, key=totals.get)
print(f"\\nHighest category: {top_cat} (\${totals[top_cat]:.2f})")
`,
      hint: "Use expenses.append({...}) to add items. For category totals, use dict.get(key, 0) to initialize missing categories to zero.",
      tests: [
        { name: "Coffee expense listed", expected: "  Coffee: $4.50 [food]", hint: "Call add_expense(\"Coffee\", 4.50, \"food\")" },
        { name: "Bus pass expense listed", expected: "  Bus pass: $50.00 [transport]", hint: "Call add_expense(\"Bus pass\", 50.00, \"transport\")" },
        { name: "Entertainment total correct", expected: "  entertainment: $15.00", hint: "Only one entertainment expense: Movie at $15.00" },
        { name: "Food total correct", expected: "  food: $51.50", hint: "Coffee(4.50) + Lunch(12.00) + Groceries(35.00) = 51.50" },
        { name: "Grand total correct", expected: "  TOTAL: $138.50", hint: "Sum all 6 expenses: 4.50 + 50 + 12 + 15 + 35 + 22 = 138.50" },
        { name: "Highest category found", expected: "Highest category: transport ($72.00)", hint: "transport: 50.00 + 22.00 = 72.00 — the highest" }
      ],
      hints: [
        "Step 1: expenses.append({\"name\": name, \"amount\": amount, \"category\": category})",
        "Step 4: Loop through expenses, use totals[cat] = totals.get(cat, 0) + e[\"amount\"]",
        "Step 6: max(totals, key=totals.get) returns the key with the highest value"
      ]
    }
  },

  // ==================== INTERMEDIATE i11 ====================
  {
    id: "i11",
    title: "Dictionary Comprehensions",
    difficulty: "intermediate",
    order: 11,
    description: "Create and transform dictionaries with concise comprehension syntax",
    duration: "12 min",
    content: `Just like list comprehensions, Python has **dictionary comprehensions** — a concise way to create dictionaries from iterables.

## Basic Syntax

\`\`\`python
# {key_expression: value_expression for item in iterable}

squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
\`\`\`

## From Two Lists to a Dictionary

\`\`\`python
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]

# Using zip() to pair them up
grade_book = {name: score for name, score in zip(names, scores)}
print(grade_book)  # {"Alice": 85, "Bob": 92, "Charlie": 78}
\`\`\`

## Filtering with Conditions

\`\`\`python
scores = {"Alice": 85, "Bob": 52, "Charlie": 91, "Diana": 45}

# Keep only passing scores (>= 60)
passing = {k: v for k, v in scores.items() if v >= 60}
print(passing)  # {"Alice": 85, "Charlie": 91}
\`\`\`

## Transforming Values

\`\`\`python
prices = {"apple": 1.20, "banana": 0.50, "cherry": 2.00}

# Apply 10% discount
discounted = {item: round(price * 0.9, 2) for item, price in prices.items()}
print(discounted)  # {"apple": 1.08, "banana": 0.45, "cherry": 1.8}

# Convert to uppercase keys
upper = {k.upper(): v for k, v in prices.items()}
print(upper)  # {"APPLE": 1.20, "BANANA": 0.50, "CHERRY": 2.00}
\`\`\`

## Inverting a Dictionary

\`\`\`python
country_codes = {"US": "United States", "UK": "United Kingdom", "FR": "France"}

# Swap keys and values
code_lookup = {v: k for k, v in country_codes.items()}
print(code_lookup)  # {"United States": "US", ...}
\`\`\`

## Nested Comprehension Example

\`\`\`python
# Create a multiplication lookup
mult_table = {i: {j: i*j for j in range(1, 4)} for i in range(1, 4)}
print(mult_table[2][3])  # 6
\`\`\`

> **Tip:** Dict comprehensions are great for transforming data. But if the logic gets complex, a regular for loop is often more readable.`,
    codeExample: "# =============================================\n# Dictionary Comprehensions Demo\n# =============================================\n\n# Basic: squares\nsquares = {x: x**2 for x in range(1, 6)}\nprint(f\"Squares: {squares}\")\n\n# From two lists\nnames = [\"Alice\", \"Bob\", \"Charlie\"]\nages = [25, 30, 22]\nname_age = {n: a for n, a in zip(names, ages)}\nprint(f\"Name-Age: {name_age}\")\n\n# Filtering\nscores = {\"Alice\": 85, \"Bob\": 52, \"Charlie\": 91, \"Diana\": 45}\npassing = {k: v for k, v in scores.items() if v >= 60}\nprint(f\"Passing: {passing}\")\n\n# Transforming values\nprices = {\"apple\": 1.20, \"banana\": 0.50, \"cherry\": 2.00}\ndiscounted = {k: round(v * 0.9, 2) for k, v in prices.items()}\nprint(f\"Discounted: {discounted}\")\n\n# Inverting\ncountry = {\"US\": \"United States\", \"UK\": \"United Kingdom\"}\ninverted = {v: k for k, v in country.items()}\nprint(f\"Inverted: {inverted}\")",
    exercise: {
      title: "Dict Comprehension Workshop",
      description: "Use dictionary comprehensions to create, filter, and transform dictionaries in various ways.",
      starterCode: `# =============================================
# EXERCISE: Dictionary Comprehensions
# =============================================

# STEP 1: Create a dict mapping numbers 1-5 to their cubes
# Example: {1: 1, 2: 8, 3: 27, ...}
# TODO: use a dict comprehension
cubes = {x: x**3 for x in range(1, 6)}
print(f"Cubes: {cubes}")

# STEP 2: Create a dict from two lists using zip
fruits = ["apple", "banana", "cherry", "date"]
prices = [1.50, 0.75, 2.00, 3.50]
# TODO: create fruit_prices dict using dict comprehension + zip

print(f"Fruit prices: {fruit_prices}")

# STEP 3: Filter — keep only fruits that cost less than $2.00
# TODO: create cheap dict from fruit_prices

print(f"Cheap fruits: {cheap}")

# STEP 4: Transform — create a new dict with 20% price increase
# TODO: create increased dict, round to 2 decimals

print(f"Increased prices: {increased}")

# STEP 5: From a sentence, count word lengths
sentence = "the quick brown fox jumps over"
# TODO: create word_lengths dict {word: length}

print(f"Word lengths: {word_lengths}")
`,
      solution: `# =============================================
# EXERCISE: Dictionary Comprehensions
# =============================================

# STEP 1: Create a dict mapping numbers 1-5 to their cubes
cubes = {x: x**3 for x in range(1, 6)}
print(f"Cubes: {cubes}")

# STEP 2: Create a dict from two lists using zip
fruits = ["apple", "banana", "cherry", "date"]
prices = [1.50, 0.75, 2.00, 3.50]
fruit_prices = {f: p for f, p in zip(fruits, prices)}
print(f"Fruit prices: {fruit_prices}")

# STEP 3: Filter — keep only fruits that cost less than $2.00
cheap = {k: v for k, v in fruit_prices.items() if v < 2.00}
print(f"Cheap fruits: {cheap}")

# STEP 4: Transform — create a new dict with 20% price increase
increased = {k: round(v * 1.2, 2) for k, v in fruit_prices.items()}
print(f"Increased prices: {increased}")

# STEP 5: From a sentence, count word lengths
sentence = "the quick brown fox jumps over"
word_lengths = {word: len(word) for word in sentence.split()}
print(f"Word lengths: {word_lengths}")
`,
      hint: "Dict comprehension syntax: {key: value for item in iterable}. Use zip() to pair two lists, .items() to loop dict pairs.",
      tests: [
        { name: "Cubes dict created", expected: "Cubes: {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}", hint: "cubes = {x: x**3 for x in range(1, 6)}" },
        { name: "Fruit prices from zip", expected: "Fruit prices: {'apple': 1.5, 'banana': 0.75, 'cherry': 2.0, 'date': 3.5}", hint: "{f: p for f, p in zip(fruits, prices)}" },
        { name: "Cheap fruits filtered", expected: "Cheap fruits: {'apple': 1.5, 'banana': 0.75}", hint: "Filter with if v < 2.00 in the comprehension" },
        { name: "Increased prices calculated", expected: "Increased prices: {'apple': 1.8, 'banana': 0.9, 'cherry': 2.4, 'date': 4.2}", hint: "Multiply each value by 1.2 and round to 2" },
        { name: "Word lengths computed", expected: "Word lengths: {'the': 3, 'quick': 5, 'brown': 5, 'fox': 3, 'jumps': 5, 'over': 4}", hint: "{word: len(word) for word in sentence.split()}" }
      ],
      hints: [
        "Step 2: fruit_prices = {f: p for f, p in zip(fruits, prices)} — zip pairs items by position",
        "Step 3: cheap = {k: v for k, v in fruit_prices.items() if v < 2.00} — add a filter condition",
        "Step 5: word_lengths = {word: len(word) for word in sentence.split()} — split() breaks string into words"
      ]
    }
  },

  // ==================== INTERMEDIATE i12 ====================
  {
    id: "i12",
    title: "Unpacking & Multiple Assignment",
    difficulty: "intermediate",
    order: 12,
    description: "Master Python's powerful unpacking syntax with *args, **kwargs, and star expressions",
    duration: "10 min",
    content: `Python's unpacking syntax lets you assign multiple values at once, grab slices with star expressions, and build flexible functions.

## Basic Multiple Assignment

\`\`\`python
# Assign multiple variables at once
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Swap variables (no temp needed!)
x, y = 10, 20
x, y = y, x
print(x, y)  # 20 10
\`\`\`

## Extended Unpacking with *

\`\`\`python
# Star expression captures "the rest"
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

*start, last = [1, 2, 3, 4, 5]
print(start)  # [1, 2, 3, 4]
print(last)   # 5

first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5
\`\`\`

## *args — Variable Positional Arguments

\`\`\`python
def add_all(*args):
    """Accept any number of arguments."""
    print(f"Got {len(args)} args: {args}")
    return sum(args)

print(add_all(1, 2, 3))        # 6
print(add_all(10, 20, 30, 40)) # 100
\`\`\`

## **kwargs — Variable Keyword Arguments

\`\`\`python
def print_info(**kwargs):
    """Accept any number of named arguments."""
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print_info(name="Alice", age=25, city="Paris")
# Output:
#   name: Alice
#   age: 25
#   city: Paris
\`\`\`

## Combining *args and **kwargs

\`\`\`python
def flexible(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Extra args: {args}")
    print(f"Keyword args: {kwargs}")

flexible("hello", 1, 2, 3, color="red", size=10)
\`\`\`

## Unpacking in Function Calls

\`\`\`python
# Unpack a list into function arguments
numbers = [1, 2, 3]
print(*numbers)  # same as print(1, 2, 3)

# Unpack a dict into keyword arguments
config = {"sep": " - ", "end": "!\\n"}
print("a", "b", "c", **config)  # a - b - c!
\`\`\`

> **Tip:** The order in function signatures must be: regular args, *args, keyword-only args, **kwargs.`,
    codeExample: "# =============================================\n# Unpacking & Multiple Assignment Demo\n# =============================================\n\n# Basic unpacking\na, b, c = 1, 2, 3\nprint(f\"a={a}, b={b}, c={c}\")\n\n# Swap\nx, y = 10, 20\nx, y = y, x\nprint(f\"Swapped: x={x}, y={y}\")\n\n# Star expressions\nfirst, *rest = [1, 2, 3, 4, 5]\nprint(f\"First: {first}, Rest: {rest}\")\n\n*start, last = [10, 20, 30, 40]\nprint(f\"Start: {start}, Last: {last}\")\n\n# *args function\ndef total(*args):\n    return sum(args)\n\nprint(f\"\\nTotal(1,2,3): {total(1, 2, 3)}\")\nprint(f\"Total(10,20): {total(10, 20)}\")\n\n# **kwargs function\ndef describe(**kwargs):\n    for k, v in kwargs.items():\n        print(f\"  {k} = {v}\")\n\nprint(\"\\nDescription:\")\ndescribe(name=\"Python\", version=3.12, purpose=\"learning\")\n\n# Unpacking in function calls\nnums = [4, 5, 6]\nprint(f\"\\nUnpacked: {nums[0]} {nums[1]} {nums[2]}\")\nprint(*nums)",
    exercise: {
      title: "Unpacking Scenarios",
      description: "Practice various unpacking techniques: star expressions, *args, **kwargs, and creative assignments.",
      starterCode: `# =============================================
# EXERCISE: Unpacking Scenarios
# =============================================

# STEP 1: Unpack a list into first, middle (rest), and last
data = [10, 20, 30, 40, 50, 60]
# TODO: use star expression to get first, *middle, last

print(f"First: {first}")
print(f"Middle: {middle}")
print(f"Last: {last}")

# STEP 2: Create a function that accepts any number of numbers
# and returns a dict with min, max, and average
def stats(*args):
    """Return dict with min, max, avg of input numbers."""
    # TODO: implement this function
    pass

result = stats(10, 20, 30, 40, 50)
print(f"Stats: {result}")

# STEP 3: Create a function that builds a greeting from **kwargs
def greet(**kwargs):
    """Build greeting from name, time, and language kwargs."""
    name = kwargs.get("name", "World")
    time = kwargs.get("time", "day")
    # TODO: return f"Good {time}, {name}!"
    pass

print(greet(name="Alice", time="morning"))
print(greet(name="Bob"))
print(greet())

# STEP 4: Use * to unpack a list into print()
words = ["Python", "is", "awesome"]
# TODO: print the words separated by spaces using *unpacking
`,
      solution: `# =============================================
# EXERCISE: Unpacking Scenarios
# =============================================

# STEP 1: Unpack a list into first, middle (rest), and last
data = [10, 20, 30, 40, 50, 60]
first, *middle, last = data
print(f"First: {first}")
print(f"Middle: {middle}")
print(f"Last: {last}")

# STEP 2: Create a function that accepts any number of numbers
def stats(*args):
    """Return dict with min, max, avg of input numbers."""
    return {
        "min": min(args),
        "max": max(args),
        "avg": sum(args) / len(args)
    }

result = stats(10, 20, 30, 40, 50)
print(f"Stats: {result}")

# STEP 3: Create a function that builds a greeting from **kwargs
def greet(**kwargs):
    """Build greeting from name, time, and language kwargs."""
    name = kwargs.get("name", "World")
    time = kwargs.get("time", "day")
    return f"Good {time}, {name}!"

print(greet(name="Alice", time="morning"))
print(greet(name="Bob"))
print(greet())

# STEP 4: Use * to unpack a list into print()
words = ["Python", "is", "awesome"]
print(*words)
`,
      hint: "Use first, *middle, last = data for star unpacking. For *args, use min(), max(), and sum()/len(). For **kwargs, use .get() with defaults.",
      tests: [
        { name: "First element unpacked", expected: "First: 10", hint: "first, *middle, last = data — first gets 10" },
        { name: "Middle elements captured", expected: "Middle: [20, 30, 40, 50]", hint: "The * captures everything between first and last" },
        { name: "Last element unpacked", expected: "Last: 60", hint: "last gets the final element: 60" },
        { name: "Stats computed correctly", expected: "Stats: {'min': 10, 'max': 50, 'avg': 30.0}", hint: "Use min(args), max(args), sum(args)/len(args)" },
        { name: "Greeting with all kwargs", expected: "Good morning, Alice!", hint: "greet(name='Alice', time='morning')" },
        { name: "Greeting with defaults", expected: "Good day, World!", hint: "greet() uses defaults: name='World', time='day'" }
      ],
      hints: [
        "Step 1: first, *middle, last = data — the * grabs everything in between",
        "Step 2: Return a dict: {\"min\": min(args), \"max\": max(args), \"avg\": sum(args) / len(args)}",
        "Step 4: print(*words) unpacks the list so it prints like print(\"Python\", \"is\", \"awesome\")"
      ]
    }
  },

  // ==================== INTERMEDIATE i13 ====================
  {
    id: "i13",
    title: "Enumerate, Zip & Map",
    difficulty: "intermediate",
    order: 13,
    description: "Process iterables elegantly with enumerate(), zip(), map(), and filter()",
    duration: "12 min",
    content: `Python provides powerful built-in functions to iterate, combine, and transform sequences.

## enumerate() — Loop with Index

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Without enumerate (old way)
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# With enumerate (Pythonic way!)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Custom start index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# Output: 1. apple, 2. banana, 3. cherry
\`\`\`

## zip() — Combine Iterables

\`\`\`python
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
grades = ["B", "A", "C"]

# Pair two lists
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# Pair three lists
for name, score, grade in zip(names, scores, grades):
    print(f"{name}: {score} ({grade})")

# Create a dictionary from two lists
score_dict = dict(zip(names, scores))
print(score_dict)  # {"Alice": 85, "Bob": 92, "Charlie": 78}
\`\`\`

## map() — Transform Every Element

\`\`\`python
# Apply a function to each element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Convert strings to integers
str_nums = ["10", "20", "30"]
int_nums = list(map(int, str_nums))
print(int_nums)  # [10, 20, 30]

# With a named function
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

temps_c = [0, 20, 37, 100]
temps_f = list(map(celsius_to_fahrenheit, temps_c))
print(temps_f)  # [32.0, 68.0, 98.6, 212.0]
\`\`\`

## filter() — Keep Matching Elements

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Keep only even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Keep non-empty strings
words = ["hello", "", "world", "", "python"]
non_empty = list(filter(None, words))
print(non_empty)  # ["hello", "world", "python"]
\`\`\`

## Combining Them Together

\`\`\`python
# Enumerate + zip: ranked parallel lists
names = ["Alice", "Bob", "Charlie"]
scores = [92, 85, 95]

for rank, (name, score) in enumerate(zip(names, scores), 1):
    print(f"#{rank} {name}: {score}")
# #1 Alice: 92
# #2 Bob: 85
# #3 Charlie: 95
\`\`\`

> **Tip:** Prefer list comprehensions over map/filter for simple transformations. Use map/filter when passing an existing function.`,
    codeExample: "# =============================================\n# Enumerate, Zip, Map & Filter Demo\n# =============================================\n\n# enumerate — index + value\nprint(\"=== enumerate ===\")\nlanguages = [\"Python\", \"JavaScript\", \"Rust\"]\nfor i, lang in enumerate(languages, 1):\n    print(f\"  {i}. {lang}\")\n\n# zip — parallel iteration\nprint(\"\\n=== zip ===\")\nnames = [\"Alice\", \"Bob\", \"Charlie\"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f\"  {name}: {score}\")\n\n# map — transform all\nprint(\"\\n=== map ===\")\nnums = [\"1\", \"2\", \"3\", \"4\", \"5\"]\nints = list(map(int, nums))\nprint(f\"  Strings to ints: {ints}\")\n\nsquared = list(map(lambda x: x**2, ints))\nprint(f\"  Squared: {squared}\")\n\n# filter — keep matching\nprint(\"\\n=== filter ===\")\nall_nums = list(range(1, 11))\nevens = list(filter(lambda x: x % 2 == 0, all_nums))\nprint(f\"  Evens: {evens}\")\n\n# Combined\nprint(\"\\n=== Combined ===\")\nfor rank, (n, s) in enumerate(zip(names, scores), 1):\n    print(f\"  #{rank} {n}: {s}\")",
    exercise: {
      title: "Process Parallel Lists",
      description: "Use enumerate, zip, map, and filter to process student data from parallel lists.",
      starterCode: `# =============================================
# EXERCISE: Process Parallel Lists
# =============================================

names = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
scores = [88, 45, 92, 67, 55]
subjects = ["Math", "Science", "Math", "English", "Science"]

# STEP 1: Use enumerate to print a numbered list of students
# Output: "1. Alice", "2. Bob", etc.
print("=== Student List ===")
# TODO: use enumerate with start=1

# STEP 2: Use zip to pair names with scores and print them
print("\\n=== Scores ===")
# TODO: loop with zip(names, scores)

# STEP 3: Use zip + dict to create a name->score mapping
# TODO: create a dictionary called score_map
score_map = dict(zip(names, scores))
print(f"\\nScore map: {score_map}")

# STEP 4: Use map to convert scores to pass/fail
# Pass = score >= 60, Fail = score < 60
# TODO: create results list using map
results = list(map(lambda s: "Pass" if s >= 60 else "Fail", scores))
print(f"Results: {results}")

# STEP 5: Use filter to find students who passed (score >= 60)
# Combine with zip so you can filter (name, score) pairs
# TODO: create passing list
pairs = list(zip(names, scores))
passing = list(filter(lambda p: p[1] >= 60, pairs))
print(f"Passing: {passing}")

# STEP 6: Use enumerate + zip to create a ranked report
print("\\n=== Ranked Report ===")
# TODO: combine enumerate and zip over names, scores, subjects
for rank, (name, score, subject) in enumerate(zip(names, scores, subjects), 1):
    status = "PASS" if score >= 60 else "FAIL"
    print(f"  {rank}. {name} - {subject}: {score} ({status})")
`,
      solution: `# =============================================
# EXERCISE: Process Parallel Lists
# =============================================

names = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
scores = [88, 45, 92, 67, 55]
subjects = ["Math", "Science", "Math", "English", "Science"]

# STEP 1: Use enumerate to print a numbered list of students
print("=== Student List ===")
for i, name in enumerate(names, 1):
    print(f"  {i}. {name}")

# STEP 2: Use zip to pair names with scores and print them
print("\\n=== Scores ===")
for name, score in zip(names, scores):
    print(f"  {name}: {score}")

# STEP 3: Use zip + dict to create a name->score mapping
score_map = dict(zip(names, scores))
print(f"\\nScore map: {score_map}")

# STEP 4: Use map to convert scores to pass/fail
results = list(map(lambda s: "Pass" if s >= 60 else "Fail", scores))
print(f"Results: {results}")

# STEP 5: Use filter to find students who passed (score >= 60)
pairs = list(zip(names, scores))
passing = list(filter(lambda p: p[1] >= 60, pairs))
print(f"Passing: {passing}")

# STEP 6: Use enumerate + zip to create a ranked report
print("\\n=== Ranked Report ===")
for rank, (name, score, subject) in enumerate(zip(names, scores, subjects), 1):
    status = "PASS" if score >= 60 else "FAIL"
    print(f"  {rank}. {name} - {subject}: {score} ({status})")
`,
      hint: "enumerate(iterable, 1) gives (index, item) starting at 1. zip(a, b) pairs elements. map(func, iterable) transforms each item.",
      tests: [
        { name: "Numbered list starts at 1", expected: "  1. Alice", hint: "for i, name in enumerate(names, 1): print(f\"  {i}. {name}\")" },
        { name: "Scores paired with names", expected: "  Alice: 88", hint: "for name, score in zip(names, scores)" },
        { name: "Score map created", expected: "Score map: {'Alice': 88, 'Bob': 45, 'Charlie': 92, 'Diana': 67, 'Eve': 55}", hint: "dict(zip(names, scores))" },
        { name: "Pass/Fail results", expected: "Results: ['Pass', 'Fail', 'Pass', 'Pass', 'Fail']", hint: "map with lambda s: 'Pass' if s >= 60 else 'Fail'" },
        { name: "Passing students filtered", expected: "Passing: [('Alice', 88), ('Charlie', 92), ('Diana', 67)]", hint: "filter(lambda p: p[1] >= 60, pairs)" },
        { name: "Ranked report line", expected: "  2. Bob - Science: 45 (FAIL)", hint: "enumerate + zip over all three lists, check score >= 60" }
      ],
      hints: [
        "Step 1: for i, name in enumerate(names, 1): print(f\"  {i}. {name}\")",
        "Step 5: First zip names+scores into pairs, then filter where score (index 1) >= 60",
        "Step 6: for rank, (name, score, subject) in enumerate(zip(names, scores, subjects), 1):"
      ]
    }
  },

  // ==================== INTERMEDIATE i14 ====================
  {
    id: "i14",
    title: "Nested Data Structures",
    difficulty: "intermediate",
    order: 14,
    description: "Navigate and transform lists of dicts, dicts of lists, and deeply nested data",
    duration: "15 min",
    content: `Real-world data is often **nested** — dictionaries inside lists, lists inside dictionaries, and deeper combinations.

## Lists of Dictionaries

\`\`\`python
# Very common pattern — like rows in a spreadsheet
students = [
    {"name": "Alice", "grade": 92, "courses": ["Math", "Physics"]},
    {"name": "Bob", "grade": 85, "courses": ["English", "Art"]},
    {"name": "Charlie", "grade": 78, "courses": ["Math", "English"]},
]

# Access one student
print(students[0]["name"])     # "Alice"
print(students[0]["courses"])  # ["Math", "Physics"]

# Loop through all students
for student in students:
    print(f"{student['name']}: {student['grade']}")
\`\`\`

## Dictionaries of Lists

\`\`\`python
# Group data by category
class_roster = {
    "Math": ["Alice", "Charlie", "Eve"],
    "English": ["Bob", "Charlie", "Diana"],
    "Physics": ["Alice", "Eve"],
}

# Access a group
print(class_roster["Math"])     # ["Alice", "Charlie", "Eve"]
print(class_roster["Math"][0])  # "Alice"

# Count students per class
for course, students in class_roster.items():
    print(f"{course}: {len(students)} students")
\`\`\`

## Deeply Nested Data

\`\`\`python
school = {
    "name": "Python Academy",
    "departments": {
        "science": {
            "head": "Dr. Smith",
            "courses": ["Physics", "Chemistry", "Biology"],
            "students": 120
        },
        "arts": {
            "head": "Prof. Jones",
            "courses": ["Music", "Painting"],
            "students": 45
        }
    }
}

# Access deep values by chaining keys
print(school["departments"]["science"]["head"])       # "Dr. Smith"
print(school["departments"]["science"]["courses"][0]) # "Physics"
\`\`\`

## Querying Nested Data

\`\`\`python
students = [
    {"name": "Alice", "grade": 92, "courses": ["Math", "Physics"]},
    {"name": "Bob", "grade": 85, "courses": ["English", "Art"]},
    {"name": "Charlie", "grade": 78, "courses": ["Math", "English"]},
]

# Find all students taking Math
math_students = [s["name"] for s in students if "Math" in s["courses"]]
print(math_students)  # ["Alice", "Charlie"]

# Find average grade
avg = sum(s["grade"] for s in students) / len(students)
print(f"Average: {avg:.1f}")  # Average: 85.0

# Sort by grade (descending)
ranked = sorted(students, key=lambda s: s["grade"], reverse=True)
for s in ranked:
    print(f"  {s['name']}: {s['grade']}")
\`\`\`

## Transforming Nested Data

\`\`\`python
# Add a "status" field based on grade
for student in students:
    student["status"] = "Pass" if student["grade"] >= 60 else "Fail"

# Create a summary dict
summary = {s["name"]: s["grade"] for s in students}
print(summary)  # {"Alice": 92, "Bob": 85, "Charlie": 78}
\`\`\`

> **Tip:** When working with deeply nested data, break the problem into steps. Access one level at a time and use intermediate variables for clarity.`,
    codeExample: "# =============================================\n# Nested Data Structures Demo\n# =============================================\n\nstudents = [\n    {\"name\": \"Alice\", \"age\": 20, \"grades\": {\"math\": 92, \"english\": 88}},\n    {\"name\": \"Bob\", \"age\": 22, \"grades\": {\"math\": 75, \"english\": 95}},\n    {\"name\": \"Charlie\", \"age\": 21, \"grades\": {\"math\": 85, \"english\": 80}},\n]\n\n# Access nested data\nprint(\"=== Student Info ===\")\nfor s in students:\n    math_grade = s[\"grades\"][\"math\"]\n    eng_grade = s[\"grades\"][\"english\"]\n    avg = (math_grade + eng_grade) / 2\n    print(f\"  {s['name']} (age {s['age']}): Math={math_grade}, English={eng_grade}, Avg={avg}\")\n\n# Query: who has the best math grade?\nbest_math = max(students, key=lambda s: s[\"grades\"][\"math\"])\nprint(f\"\\nBest in math: {best_math['name']} ({best_math['grades']['math']})\")\n\n# Transform: create a summary\nsummary = {s[\"name\"]: sum(s[\"grades\"].values()) / len(s[\"grades\"]) for s in students}\nprint(f\"\\nAverages: {summary}\")",
    exercise: {
      title: "Student Record Queries",
      description: "Work with a nested list of student records. Query, filter, sort, and transform the data.",
      starterCode: `# =============================================
# EXERCISE: Student Record Queries
# =============================================

students = [
    {"name": "Alice", "age": 20, "grades": {"math": 92, "science": 88, "english": 95}},
    {"name": "Bob", "age": 22, "grades": {"math": 75, "science": 82, "english": 68}},
    {"name": "Charlie", "age": 21, "grades": {"math": 85, "science": 90, "english": 78}},
    {"name": "Diana", "age": 20, "grades": {"math": 60, "science": 55, "english": 72}},
    {"name": "Eve", "age": 23, "grades": {"math": 98, "science": 95, "english": 92}},
]

# STEP 1: Print each student's name and average grade
print("=== Student Averages ===")
for s in students:
    avg = sum(s["grades"].values()) / len(s["grades"])
    print(f"  {s['name']}: {avg:.1f}")

# STEP 2: Find the student with the highest math grade
# TODO: use max() with a key function
best_math = max(students, key=lambda s: s["grades"]["math"])
print(f"\\nBest in math: {best_math['name']} ({best_math['grades']['math']})")

# STEP 3: Find all students with an average grade >= 80
# TODO: create a list of names where avg grade >= 80
honor_roll = []
for s in students:
    avg = sum(s["grades"].values()) / len(s["grades"])
    if avg >= 80:
        honor_roll.append(s["name"])
print(f"Honor roll: {honor_roll}")

# STEP 4: Create a dict mapping student names to their best subject
# TODO: for each student, find which subject has their highest grade
best_subjects = {}
for s in students:
    best_subj = max(s["grades"], key=s["grades"].get)
    best_subjects[s["name"]] = best_subj
print(f"Best subjects: {best_subjects}")

# STEP 5: Sort students by average grade (highest first) and print
print("\\n=== Ranked by Average ===")
# TODO: sort students and print ranked list
ranked = sorted(students, key=lambda s: sum(s["grades"].values()) / len(s["grades"]), reverse=True)
for i, s in enumerate(ranked, 1):
    avg = sum(s["grades"].values()) / len(s["grades"])
    print(f"  {i}. {s['name']}: {avg:.1f}")
`,
      solution: `# =============================================
# EXERCISE: Student Record Queries
# =============================================

students = [
    {"name": "Alice", "age": 20, "grades": {"math": 92, "science": 88, "english": 95}},
    {"name": "Bob", "age": 22, "grades": {"math": 75, "science": 82, "english": 68}},
    {"name": "Charlie", "age": 21, "grades": {"math": 85, "science": 90, "english": 78}},
    {"name": "Diana", "age": 20, "grades": {"math": 60, "science": 55, "english": 72}},
    {"name": "Eve", "age": 23, "grades": {"math": 98, "science": 95, "english": 92}},
]

# STEP 1: Print each student's name and average grade
print("=== Student Averages ===")
for s in students:
    avg = sum(s["grades"].values()) / len(s["grades"])
    print(f"  {s['name']}: {avg:.1f}")

# STEP 2: Find the student with the highest math grade
best_math = max(students, key=lambda s: s["grades"]["math"])
print(f"\\nBest in math: {best_math['name']} ({best_math['grades']['math']})")

# STEP 3: Find all students with an average grade >= 80
honor_roll = []
for s in students:
    avg = sum(s["grades"].values()) / len(s["grades"])
    if avg >= 80:
        honor_roll.append(s["name"])
print(f"Honor roll: {honor_roll}")

# STEP 4: Create a dict mapping student names to their best subject
best_subjects = {}
for s in students:
    best_subj = max(s["grades"], key=s["grades"].get)
    best_subjects[s["name"]] = best_subj
print(f"Best subjects: {best_subjects}")

# STEP 5: Sort students by average grade (highest first) and print
print("\\n=== Ranked by Average ===")
ranked = sorted(students, key=lambda s: sum(s["grades"].values()) / len(s["grades"]), reverse=True)
for i, s in enumerate(ranked, 1):
    avg = sum(s["grades"].values()) / len(s["grades"])
    print(f"  {i}. {s['name']}: {avg:.1f}")
`,
      hint: "Access nested data with chained keys: s['grades']['math']. Use max() with a lambda key for finding best values. Use sorted() with reverse=True for descending order.",
      tests: [
        { name: "Alice average shown", expected: "  Alice: 91.7", hint: "(92+88+95)/3 = 91.666... rounds to 91.7" },
        { name: "Best math student found", expected: "Best in math: Eve (98)", hint: "Eve has the highest math grade: 98" },
        { name: "Honor roll computed", expected: "Honor roll: ['Alice', 'Charlie', 'Eve']", hint: "Alice(91.7), Charlie(84.3), Eve(95.0) have avg >= 80" },
        { name: "Best subjects mapped", expected: "Best subjects: {'Alice': 'english', 'Bob': 'science', 'Charlie': 'science', 'Diana': 'english', 'Eve': 'math'}", hint: "Use max(s['grades'], key=s['grades'].get) for each student" },
        { name: "Top ranked student", expected: "  1. Eve: 95.0", hint: "Eve has the highest average: (98+95+92)/3 = 95.0" }
      ],
      hints: [
        "Step 1: avg = sum(s['grades'].values()) / len(s['grades']) — .values() gives all grade numbers",
        "Step 3: Loop through students, compute avg, if avg >= 80 append name to honor_roll",
        "Step 5: sorted(students, key=lambda s: sum(s['grades'].values())/len(s['grades']), reverse=True)"
      ]
    }
  },

  // ==================== INTERMEDIATE i15 ====================
  {
    id: "i15",
    title: "Scope & Closures",
    difficulty: "intermediate",
    order: 15,
    description: "Understand local vs global scope, the LEGB rule, and how closures capture variables",
    duration: "12 min",
    content: `Understanding **scope** — where variables live and are accessible — is essential for writing reliable Python code.

## The LEGB Rule

Python looks up variable names in this order:

| Level | Name | Description |
|-------|------|-------------|
| **L** | Local | Inside the current function |
| **E** | Enclosing | Inside enclosing (outer) functions |
| **G** | Global | At the module (file) level |
| **B** | Built-in | Python's built-in names (\`print\`, \`len\`, etc.) |

\`\`\`python
x = "global"          # G — global scope

def outer():
    x = "enclosing"   # E — enclosing scope

    def inner():
        x = "local"   # L — local scope
        print(x)       # "local" — found at L level

    inner()
    print(x)           # "enclosing" — found at E level

outer()
print(x)               # "global" — found at G level
\`\`\`

## Local vs Global

\`\`\`python
count = 0              # global variable

def increment():
    # This creates a NEW local variable, not modifying global!
    count = 1
    print(f"Local count: {count}")

increment()            # "Local count: 1"
print(f"Global count: {count}")  # "Global count: 0" — unchanged!
\`\`\`

## The global Keyword

\`\`\`python
count = 0

def increment():
    global count       # now refers to the global variable
    count += 1

increment()
increment()
print(count)           # 2 — global was modified
\`\`\`

> **Tip:** Avoid \`global\` when possible. It makes code harder to debug. Pass values as arguments and return results instead.

## Closures

A **closure** is a function that "remembers" variables from its enclosing scope, even after the outer function has finished.

\`\`\`python
def make_multiplier(factor):
    def multiply(number):
        return number * factor   # 'factor' is remembered!
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))    # 10
print(triple(5))    # 15
print(double(10))   # 20
\`\`\`

## The nonlocal Keyword

\`\`\`python
def make_counter():
    count = 0          # enclosing scope variable

    def increment():
        nonlocal count  # modify the enclosing variable
        count += 1
        return count

    return increment

counter = make_counter()
print(counter())    # 1
print(counter())    # 2
print(counter())    # 3

# Each counter is independent!
counter2 = make_counter()
print(counter2())   # 1 — fresh counter
\`\`\`

## Practical Closure: Logger

\`\`\`python
def make_logger(prefix):
    def log(message):
        print(f"[{prefix}] {message}")
    return log

info = make_logger("INFO")
error = make_logger("ERROR")

info("Server started")    # [INFO] Server started
error("Disk full")        # [ERROR] Disk full
\`\`\`

> **Tip:** Closures are the foundation of decorators, callbacks, and many design patterns. They let you create specialized functions on the fly.`,
    codeExample: "# =============================================\n# Scope & Closures Demo\n# =============================================\n\n# LEGB demonstration\nx = \"global\"\n\ndef outer():\n    x = \"enclosing\"\n    def inner():\n        x = \"local\"\n        print(f\"Inner sees: {x}\")\n    inner()\n    print(f\"Outer sees: {x}\")\n\nouter()\nprint(f\"Module sees: {x}\")\n\n# Closure: multiplier factory\nprint(\"\\n=== Closures ===\")\ndef make_multiplier(factor):\n    def multiply(n):\n        return n * factor\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(f\"double(5) = {double(5)}\")\nprint(f\"triple(5) = {triple(5)}\")\n\n# Closure: counter with nonlocal\nprint(\"\\n=== Counter ===\")\ndef make_counter():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n    return increment\n\nc = make_counter()\nprint(f\"Count: {c()}\")\nprint(f\"Count: {c()}\")\nprint(f\"Count: {c()}\")",
    exercise: {
      title: "Build a Counter with Closures",
      description: "Create closure-based functions: a counter, a running average tracker, and a prefix logger.",
      starterCode: `# =============================================
# EXERCISE: Closures in Action
# =============================================

# STEP 1: Create a make_counter closure
# It should return a function that increments and returns a count each time called
def make_counter(start=0):
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(f"Count: {counter()}")
print(f"Count: {counter()}")
print(f"Count: {counter()}")

# STEP 2: Create a make_counter that starts at a given number
counter_from_10 = make_counter(10)
print(f"From 10: {counter_from_10()}")
print(f"From 10: {counter_from_10()}")

# STEP 3: Create a make_running_average closure
# It should accept a number each call and return the running average
def make_running_average():
    numbers = []
    def add(num):
        # TODO: append num, return the average of all numbers so far
        pass
    return add

avg = make_running_average()
print(f"\\nAvg: {avg(10)}")
print(f"Avg: {avg(20)}")
print(f"Avg: {avg(30)}")
print(f"Avg: {avg(40)}")

# STEP 4: Create a make_logger closure
# It should take a prefix and return a function that prints "[PREFIX] message"
def make_logger(prefix):
    # TODO: return a function that prints f"[{prefix}] {message}"
    pass

info = make_logger("INFO")
warn = make_logger("WARN")
info("Application started")
warn("Low memory")
info("Request received")
`,
      solution: `# =============================================
# EXERCISE: Closures in Action
# =============================================

# STEP 1: Create a make_counter closure
def make_counter(start=0):
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(f"Count: {counter()}")
print(f"Count: {counter()}")
print(f"Count: {counter()}")

# STEP 2: Create a make_counter that starts at a given number
counter_from_10 = make_counter(10)
print(f"From 10: {counter_from_10()}")
print(f"From 10: {counter_from_10()}")

# STEP 3: Create a make_running_average closure
def make_running_average():
    numbers = []
    def add(num):
        numbers.append(num)
        return sum(numbers) / len(numbers)
    return add

avg = make_running_average()
print(f"\\nAvg: {avg(10)}")
print(f"Avg: {avg(20)}")
print(f"Avg: {avg(30)}")
print(f"Avg: {avg(40)}")

# STEP 4: Create a make_logger closure
def make_logger(prefix):
    def log(message):
        print(f"[{prefix}] {message}")
    return log

info = make_logger("INFO")
warn = make_logger("WARN")
info("Application started")
warn("Low memory")
info("Request received")
`,
      hint: "Use nonlocal to modify enclosing variables. Mutable objects like lists don't need nonlocal — just append to them. Return the inner function from the outer function.",
      tests: [
        { name: "Counter increments from 0", expected: "Count: 1", hint: "make_counter() starts at 0, first call returns 1" },
        { name: "Counter reaches 3", expected: "Count: 3", hint: "Third call to counter() returns 3" },
        { name: "Counter starts from 10", expected: "From 10: 11", hint: "make_counter(10) starts at 10, first call returns 11" },
        { name: "Running average after 2 values", expected: "Avg: 15.0", hint: "avg(10) then avg(20): (10+20)/2 = 15.0" },
        { name: "Running average after 4 values", expected: "Avg: 25.0", hint: "(10+20+30+40)/4 = 25.0" },
        { name: "Logger with prefix", expected: "[INFO] Application started", hint: "make_logger('INFO') returns a function that prints [INFO] before the message" }
      ],
      hints: [
        "Step 3: numbers.append(num), then return sum(numbers) / len(numbers) — lists are mutable so no nonlocal needed",
        "Step 4: def make_logger(prefix): def log(message): print(f\"[{prefix}] {message}\") return log",
        "Closures 'remember' variables from the enclosing function even after it returns"
      ]
    }
  },
];
