export const beginnerChallenges = [
  {
    id: "b11",
    title: "Print Challenges",
    difficulty: "beginner",
    order: 11,
    description: "Practice printing formatted output with interactive verification",
    duration: "10 min",
    content: `Time to practice your print skills! In this challenge you'll create formatted output.

## Quick Review

\`\`\`python
# F-strings let you embed values
name = "Alice"
print(f"Hello, {name}!")

# String multiplication
print("-" * 20)  # prints 20 dashes

# Centering text
text = "Hello"
print(f"| {text} |")
\`\`\`

> **Tip:** Use \`len()\` to measure string length and \`*\` to repeat characters.`,
    codeExample: `name = "Python"\nborder = "+" + "-" * (len(name) + 2) + "+"\nprint(border)\nprint(f"| {name} |")\nprint(border)`,
    exercise: {
      title: "Build a Name Box",
      description: "Complete the code to print a box around the name. Your output must match exactly:",
      starterCode: `name = "PyMaster"
width = len(name) + 4

# TODO: Print top border like: +----------+
# Use "+" for corners and "-" for the line
# The total width should be len(name) + 4

# TODO: Print middle line like: | PyMaster |
# Use "|" for sides with a space padding around the name

# TODO: Print bottom border (same as top)
`,
      solution: `name = "PyMaster"
width = len(name) + 4

border = "+" + "-" * (width - 2) + "+"
print(border)
print(f"| {name} |")
print(border)`,
      hint: "Use string concatenation with + and repetition with * to build the border.",
      tests: [
        { name: "Top border is correct", expected: "+----------+", hint: "Build the border with \"+\" + \"-\" * (width - 2) + \"+\"" },
        { name: "Name line shows PyMaster with padding", expected: "| PyMaster |", hint: "Use f-string: f\"| {name} |\"" },
        { name: "Box has 3 lines of output", expected: "+----------+", hint: "Print the border line again at the bottom" }
      ],
      hints: [
        "The border uses + at the corners and - in between: \"+\" + \"-\" * (width - 2) + \"+\"",
        "The middle line uses | with a space: f\"| {name} |\"",
        "The bottom border is the same as the top border - just print it again!"
      ]
    }
  },

  {
    id: "b12",
    title: "Variable Lab",
    difficulty: "beginner",
    order: 12,
    description: "Practice with variables, types, and calculations",
    duration: "10 min",
    content: `Let's practice creating variables and doing calculations with them.

## Quick Review

\`\`\`python
# Variables store values
x = 10
pi = 3.14159

# Arithmetic
result = x * pi

# Formatting output
print(f"Result: {result:.2f}")  # 2 decimal places
\`\`\`

> **Tip:** Use \`:.1f\` for 1 decimal place, \`:.2f\` for 2 decimal places in f-strings.`,
    codeExample: `length = 12\nwidth = 7\narea = length * width\nperimeter = 2 * (length + width)\nprint(f"Area: {area}")\nprint(f"Perimeter: {perimeter}")`,
    exercise: {
      title: "Rectangle Calculator",
      description: "Calculate the area, perimeter, and diagonal of a rectangle. Print the results in the exact format shown below.",
      starterCode: `import math

length = 12
width = 7

# TODO: Calculate the area (length * width)
# Print: Area: 84

# TODO: Calculate the perimeter (2 * (length + width))
# Print: Perimeter: 38

# TODO: Calculate the diagonal using Pythagorean theorem
# diagonal = sqrt(length^2 + width^2)
# Print: Diagonal: 13.89 (rounded to 2 decimal places)
`,
      solution: `import math

length = 12
width = 7

area = length * width
print(f"Area: {area}")

perimeter = 2 * (length + width)
print(f"Perimeter: {perimeter}")

diagonal = math.sqrt(length ** 2 + width ** 2)
print(f"Diagonal: {diagonal:.2f}")`,
      hint: "Use math.sqrt() for the square root and ** for exponents.",
      tests: [
        { name: "Prints correct area", expected: "Area: 84", hint: "Area = length * width = 12 * 7 = 84" },
        { name: "Prints correct perimeter", expected: "Perimeter: 38", hint: "Perimeter = 2 * (length + width) = 2 * 19 = 38" },
        { name: "Prints correct diagonal", expected: "Diagonal: 13.89", hint: "Use math.sqrt(length**2 + width**2) and format with :.2f" }
      ],
      hints: [
        "Area is simply length * width. Print it with: print(f\"Area: {area}\")",
        "Perimeter = 2 * (length + width). Store it in a variable first.",
        "Diagonal = math.sqrt(length**2 + width**2). Use f\"{diagonal:.2f}\" for 2 decimals."
      ]
    }
  },

  {
    id: "b13",
    title: "String Workshop",
    difficulty: "beginner",
    order: 13,
    description: "Transform strings with methods and slicing",
    duration: "10 min",
    content: `Strings have many built-in methods. Let's practice using them!

## Quick Review

\`\`\`python
text = "  Hello World  "
text.strip()      # Remove whitespace: "Hello World"
text.upper()      # "  HELLO WORLD  "
text.title()      # "  Hello World  "
text.replace("o", "0")  # "  Hell0 W0rld  "
text.split()       # ["Hello", "World"]
len(text)          # 15
text[::-1]         # Reverse
\`\`\`

> **Tip:** String methods return a NEW string. The original is unchanged.`,
    codeExample: `text = "  Hello, Python World!  "\nprint("Original:", repr(text))\nprint("Stripped:", text.strip())\nprint("Upper:", text.strip().upper())\nprint("Title:", text.strip().title())\nprint("Words:", len(text.split()))`,
    exercise: {
      title: "Text Transformer",
      description: "Apply string operations to the given text. Print each result in the exact format shown.",
      starterCode: `message = "  hello python world  "

# TODO: Remove extra spaces from both sides and print:
# Cleaned: hello python world

# TODO: Convert to UPPERCASE and print:
# Upper: HELLO PYTHON WORLD

# TODO: Convert to Title Case and print:
# Title: Hello Python World

# TODO: Count the number of words and print:
# Words: 3

# TODO: Replace "python" with "java" and print:
# Replaced: hello java world
`,
      solution: `message = "  hello python world  "

cleaned = message.strip()
print(f"Cleaned: {cleaned}")

print(f"Upper: {cleaned.upper()}")

print(f"Title: {cleaned.title()}")

print(f"Words: {len(cleaned.split())}")

print(f"Replaced: {cleaned.replace('python', 'java')}")`,
      hint: "Use .strip() first, then chain other methods on the cleaned version.",
      tests: [
        { name: "Cleaned text (no extra spaces)", expected: "Cleaned: hello python world", hint: "Use .strip() to remove leading/trailing spaces" },
        { name: "Uppercase version", expected: "Upper: HELLO PYTHON WORLD", hint: "Use .upper() on the cleaned text" },
        { name: "Title case version", expected: "Title: Hello Python World", hint: "Use .title() on the cleaned text" },
        { name: "Word count", expected: "Words: 3", hint: "Use len(text.split()) to count words" },
        { name: "Replaced word", expected: "Replaced: hello java world", hint: "Use .replace('python', 'java')" }
      ],
      hints: [
        "First strip the message: cleaned = message.strip()",
        "Use the cleaned variable for all other operations: cleaned.upper(), cleaned.title(), etc.",
        "For word count: len(cleaned.split()) gives the number of words"
      ]
    }
  },

  {
    id: "b14",
    title: "List Workout",
    difficulty: "beginner",
    order: 14,
    description: "Practice list operations and built-in functions",
    duration: "12 min",
    content: `Lists are one of Python's most powerful data structures. Practice using them!

## Quick Review

\`\`\`python
numbers = [5, 2, 8, 1, 9]
sum(numbers)      # 25
len(numbers)      # 5
min(numbers)      # 1
max(numbers)      # 9
sorted(numbers)   # [1, 2, 5, 8, 9]
numbers.append(6) # adds 6 to end
numbers.remove(2) # removes first 2
\`\`\`

> **Tip:** \`sorted()\` returns a NEW list. \`.sort()\` modifies the original list in place.`,
    codeExample: `scores = [85, 92, 78, 95, 88]\nprint("Scores:", scores)\nprint("Total:", sum(scores))\nprint("Average:", sum(scores) / len(scores))\nprint("Best:", max(scores))\nprint("Sorted:", sorted(scores))`,
    exercise: {
      title: "Score Analyzer",
      description: "Analyze a list of test scores. Complete each calculation and print in the exact format shown.",
      starterCode: `scores = [85, 92, 78, 95, 88, 76, 90]

# TODO: Print the total number of scores
# Count: 7

# TODO: Print the sum of all scores
# Sum: 604

# TODO: Print the average rounded to 1 decimal place
# Average: 86.3

# TODO: Print the highest score
# Highest: 95

# TODO: Print the lowest score
# Lowest: 76

# TODO: Print scores sorted from lowest to highest
# Sorted: [76, 78, 85, 88, 90, 92, 95]
`,
      solution: `scores = [85, 92, 78, 95, 88, 76, 90]

print(f"Count: {len(scores)}")
print(f"Sum: {sum(scores)}")
print(f"Average: {sum(scores) / len(scores):.1f}")
print(f"Highest: {max(scores)}")
print(f"Lowest: {min(scores)}")
print(f"Sorted: {sorted(scores)}")`,
      hint: "Use built-in functions: len(), sum(), max(), min(), sorted().",
      tests: [
        { name: "Count is correct", expected: "Count: 7", hint: "Use len(scores) to get the count" },
        { name: "Sum is correct", expected: "Sum: 604", hint: "Use sum(scores) to get the total" },
        { name: "Average is correct", expected: "Average: 86.3", hint: "Average = sum(scores) / len(scores), format with :.1f" },
        { name: "Highest is correct", expected: "Highest: 95", hint: "Use max(scores)" },
        { name: "Lowest is correct", expected: "Lowest: 76", hint: "Use min(scores)" },
        { name: "Sorted list shown", expected: "Sorted: [76, 78, 85, 88, 90, 92, 95]", hint: "Use sorted(scores) - it returns a new sorted list" }
      ],
      hints: [
        "len(scores) gives the count, sum(scores) gives the total",
        "For the average: sum(scores) / len(scores). Format with f\"{value:.1f}\"",
        "max(scores) and min(scores) give highest and lowest. sorted(scores) returns a sorted copy."
      ]
    }
  },

  {
    id: "b15",
    title: "Loop Mastery",
    difficulty: "beginner",
    order: 15,
    description: "Write loops to generate patterns and process data",
    duration: "12 min",
    content: `Loops let you repeat code. Master them with these challenges!

## Quick Review

\`\`\`python
# For loop with range
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# Loop over a list
for item in ["a", "b", "c"]:
    print(item)

# f-strings in loops
for i in range(1, 4):
    print(f"{i} x 5 = {i * 5}")
\`\`\`

> **Tip:** \`range(start, stop)\` goes from start up to (but not including) stop.`,
    codeExample: `# Multiplication table\nfor i in range(1, 6):\n    print(f"3 x {i} = {3 * i}")`,
    exercise: {
      title: "Times Table Generator",
      description: "Complete the code to print the multiplication table for 7, from 1 to 5. Your output must match exactly:",
      starterCode: `# TODO: Write a loop to print the multiplication table for 7
# Expected output:
# 7 x 1 = 7
# 7 x 2 = 14
# 7 x 3 = 21
# 7 x 4 = 28
# 7 x 5 = 35

`,
      solution: `for i in range(1, 6):
    print(f"7 x {i} = {7 * i}")`,
      hint: "Use for i in range(1, 6) and f-strings to format the output.",
      tests: [
        { name: "Shows 7 x 1 = 7", expected: "7 x 1 = 7", hint: "Use for i in range(1, 6) and f\"7 x {i} = {7 * i}\"" },
        { name: "Shows 7 x 2 = 14", expected: "7 x 2 = 14", hint: "The loop should calculate 7 * i for each value" },
        { name: "Shows 7 x 3 = 21", expected: "7 x 3 = 21", hint: "Make sure i goes from 1 to 5 using range(1, 6)" },
        { name: "Shows 7 x 4 = 28", expected: "7 x 4 = 28", hint: "Check that your f-string matches the exact format" },
        { name: "Shows 7 x 5 = 35", expected: "7 x 5 = 35", hint: "range(1, 6) gives 1, 2, 3, 4, 5" }
      ],
      hints: [
        "Start with: for i in range(1, 6):",
        "Inside the loop use: print(f\"7 x {i} = {7 * i}\")",
        "range(1, 6) gives numbers 1, 2, 3, 4, 5 - exactly what we need!"
      ]
    }
  },

  {
    id: "b16",
    title: "If-Else Challenges",
    difficulty: "beginner",
    order: 16,
    description: "Practice decision-making with conditional statements",
    duration: "12 min",
    content: `Conditional statements let your program make decisions based on data.

## Quick Review

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
\`\`\`

> **Tip:** Check conditions from most specific to least specific (highest to lowest for grades).`,
    codeExample: `scores = [45, 72, 88, 95]\nfor s in scores:\n    if s >= 90: grade = "A"\n    elif s >= 80: grade = "B"\n    elif s >= 70: grade = "C"\n    elif s >= 60: grade = "D"\n    else: grade = "F"\n    print(f"{s} -> {grade}")`,
    exercise: {
      title: "Grade Classifier",
      description: "Write code to classify each score into a grade. Loop through the scores and print each one with its grade.",
      starterCode: `scores = [45, 72, 88, 95, 60, 33, 81]

# TODO: Loop through scores and classify each one
# A: score >= 90
# B: score >= 80
# C: score >= 70
# D: score >= 60
# F: score < 60
#
# Print each as: "45 -> F"
# Expected output:
# 45 -> F
# 72 -> C
# 88 -> B
# 95 -> A
# 60 -> D
# 33 -> F
# 81 -> B

`,
      solution: `scores = [45, 72, 88, 95, 60, 33, 81]

for score in scores:
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    print(f"{score} -> {grade}")`,
      hint: "Use a for loop with if/elif/else inside it.",
      tests: [
        { name: "45 is classified as F", expected: "45 -> F", hint: "45 < 60, so grade is F" },
        { name: "72 is classified as C", expected: "72 -> C", hint: "72 >= 70 but < 80, so grade is C" },
        { name: "88 is classified as B", expected: "88 -> B", hint: "88 >= 80 but < 90, so grade is B" },
        { name: "95 is classified as A", expected: "95 -> A", hint: "95 >= 90, so grade is A" },
        { name: "60 is classified as D", expected: "60 -> D", hint: "60 >= 60 but < 70, so grade is D" },
        { name: "33 is classified as F", expected: "33 -> F", hint: "33 < 60, so grade is F" },
        { name: "81 is classified as B", expected: "81 -> B", hint: "81 >= 80 but < 90, so grade is B" }
      ],
      hints: [
        "Start with: for score in scores:",
        "Inside the loop use if/elif/else: if score >= 90: grade = \"A\" elif score >= 80: ...",
        "After setting the grade, print with: print(f\"{score} -> {grade}\")"
      ]
    }
  },

  {
    id: "b17",
    title: "Dictionary Builder",
    difficulty: "beginner",
    order: 17,
    description: "Create and use dictionaries for structured data",
    duration: "12 min",
    content: `Dictionaries store key-value pairs. They're perfect for structured data.

## Quick Review

\`\`\`python
fruits = {"apple": 1.50, "banana": 0.75}

# Access
print(fruits["apple"])  # 1.50

# Add/Update
fruits["cherry"] = 3.00

# Loop
for name, price in fruits.items():
    print(f"{name}: \${price:.2f}")
\`\`\`

> **Tip:** Use \`:.2f\` to format prices with 2 decimal places.`,
    codeExample: `shop = {"apple": 1.50, "banana": 0.75, "cherry": 3.00}\nfor item, price in shop.items():\n    print(f"{item}: \${price:.2f}")\nprint(f"Total: \${sum(shop.values()):.2f}")`,
    exercise: {
      title: "Fruit Shop",
      description: "Create a fruit shop dictionary and print a formatted price list with totals.",
      starterCode: `# TODO: Create a dictionary called 'shop' with these items and prices:
# apple: 1.50, banana: 0.75, cherry: 3.00

# TODO: Loop through the shop and print each item:
# apple: $1.50
# banana: $0.75
# cherry: $3.00

# TODO: Print a separator line
# ---

# TODO: Print the total number of items and total cost:
# Items: 3
# Total: $5.25

`,
      solution: `shop = {"apple": 1.50, "banana": 0.75, "cherry": 3.00}

for item, price in shop.items():
    print(f"{item}: \${price:.2f}")

print("---")

print(f"Items: {len(shop)}")
print(f"Total: \${sum(shop.values()):.2f}")`,
      hint: "Create the dict with {}, loop with .items(), use sum() on .values().",
      tests: [
        { name: "Shows apple price", expected: "apple: $1.50", hint: "Format price with f\"{item}: ${price:.2f}\"" },
        { name: "Shows banana price", expected: "banana: $0.75", hint: "Loop through shop.items() and print each" },
        { name: "Shows cherry price", expected: "cherry: $3.00", hint: "Make sure all 3 items are in the dictionary" },
        { name: "Shows item count", expected: "Items: 3", hint: "Use len(shop) to count items" },
        { name: "Shows total cost", expected: "Total: $5.25", hint: "Use sum(shop.values()) to add up all prices" }
      ],
      hints: [
        "Create the dictionary: shop = {\"apple\": 1.50, \"banana\": 0.75, \"cherry\": 3.00}",
        "Loop: for item, price in shop.items(): print(f\"{item}: ${price:.2f}\")",

        "Total: sum(shop.values()) adds all prices. len(shop) counts items."
      ]
    }
  },

  {
    id: "b18",
    title: "Function Factory",
    difficulty: "beginner",
    order: 18,
    description: "Write and test your own functions",
    duration: "12 min",
    content: `Functions are reusable blocks of code. Write them once, use them many times!

## Quick Review

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

def is_even(n):
    return n % 2 == 0
\`\`\`

> **Tip:** A function should do ONE thing well. Name it clearly so others know what it does.`,
    codeExample: `def double(n):\n    return n * 2\n\ndef is_positive(n):\n    return n > 0\n\nprint(double(5))       # 10\nprint(is_positive(-3)) # False`,
    exercise: {
      title: "Write Three Functions",
      description: "Write the three functions described below. The test code at the bottom will verify them.",
      starterCode: `# TODO: Write a function called 'double' that takes a number
# and returns it multiplied by 2


# TODO: Write a function called 'is_even' that takes a number
# and returns True if even, False if odd


# TODO: Write a function called 'greeting' that takes a name
# and returns "Hello, <name>!"


# === Don't change the code below === #
print(f"double(5) = {double(5)}")
print(f"double(13) = {double(13)}")
print(f"is_even(4) = {is_even(4)}")
print(f"is_even(7) = {is_even(7)}")
print(f"greeting('Alice') = {greeting('Alice')}")
print(f"greeting('Bob') = {greeting('Bob')}")
`,
      solution: `def double(n):
    return n * 2

def is_even(n):
    return n % 2 == 0

def greeting(name):
    return f"Hello, {name}!"

# === Don't change the code below === #
print(f"double(5) = {double(5)}")
print(f"double(13) = {double(13)}")
print(f"is_even(4) = {is_even(4)}")
print(f"is_even(7) = {is_even(7)}")
print(f"greeting('Alice') = {greeting('Alice')}")
print(f"greeting('Bob') = {greeting('Bob')}")`,
      hint: "Each function is 2 lines: def line and return line.",
      tests: [
        { name: "double(5) returns 10", expected: "double(5) = 10", hint: "def double(n): return n * 2" },
        { name: "double(13) returns 26", expected: "double(13) = 26", hint: "Make sure you use * 2, not + 2" },
        { name: "is_even(4) returns True", expected: "is_even(4) = True", hint: "def is_even(n): return n % 2 == 0" },
        { name: "is_even(7) returns False", expected: "is_even(7) = False", hint: "% is the modulo operator. Even numbers have n % 2 == 0" },
        { name: "greeting('Alice') works", expected: "greeting('Alice') = Hello, Alice!", hint: "def greeting(name): return f\"Hello, {name}!\"" },
        { name: "greeting('Bob') works", expected: "greeting('Bob') = Hello, Bob!", hint: "Use an f-string: f\"Hello, {name}!\"" }
      ],
      hints: [
        "double function: def double(n): return n * 2",
        "is_even function: def is_even(n): return n % 2 == 0",
        "greeting function: def greeting(name): return f\"Hello, {name}!\""
      ]
    }
  },

  {
    id: "b19",
    title: "Loop & List Combo",
    difficulty: "beginner",
    order: 19,
    description: "Combine loops and lists to solve problems",
    duration: "15 min",
    content: `Combining loops with lists is extremely powerful. Let's practice!

## Quick Review

\`\`\`python
# Build a list with a loop
evens = []
for i in range(2, 11, 2):
    evens.append(i)
# [2, 4, 6, 8, 10]

# Process a list with a loop
for num in evens:
    print(f"{num} -> {num ** 2}")
\`\`\`

> **Tip:** Use \`.append()\` to add items to a list inside a loop.`,
    codeExample: `# Build and process\nnumbers = []\nfor i in range(1, 6):\n    numbers.append(i ** 2)\n    print(f"{i}^2 = {i**2}")\nprint("Squares:", numbers)`,
    exercise: {
      title: "Even Squares",
      description: "Create a list of even numbers from 2 to 10, then print each number and its square.",
      starterCode: `# TODO: Create a list of even numbers from 2 to 10
# Hint: use range(2, 11, 2) or a loop

# TODO: Loop through the list and print each number with its square
# Expected output:
# 2 -> 4
# 4 -> 16
# 6 -> 36
# 8 -> 64
# 10 -> 100
#
# TODO: After the loop, print the sum of all the squares
# Sum of squares: 220

`,
      solution: `evens = list(range(2, 11, 2))

for num in evens:
    print(f"{num} -> {num ** 2}")

total = sum(num ** 2 for num in evens)
print(f"Sum of squares: {total}")`,
      hint: "Use range(2, 11, 2) for even numbers 2-10.",
      tests: [
        { name: "Shows 2 -> 4", expected: "2 -> 4", hint: "Loop through evens and print f\"{num} -> {num ** 2}\"" },
        { name: "Shows 4 -> 16", expected: "4 -> 16", hint: "4 squared is 16" },
        { name: "Shows 6 -> 36", expected: "6 -> 36", hint: "Make sure your range includes 6" },
        { name: "Shows 10 -> 100", expected: "10 -> 100", hint: "range(2, 11, 2) includes 10" },
        { name: "Shows sum of squares", expected: "Sum of squares: 220", hint: "4 + 16 + 36 + 64 + 100 = 220" }
      ],
      hints: [
        "Create the list: evens = list(range(2, 11, 2)) gives [2, 4, 6, 8, 10]",
        "Loop and print: for num in evens: print(f\"{num} -> {num ** 2}\")",
        "Sum of squares: sum(n**2 for n in evens) = 220"
      ]
    }
  },

  {
    id: "b20",
    title: "Mini Project: Report Card",
    difficulty: "beginner",
    order: 20,
    description: "Combine everything into a student report card generator",
    duration: "15 min",
    content: `Time to put it all together! This challenge uses variables, dictionaries, loops, conditions, and functions.

## What You'll Use

- **Dictionaries** to store student data
- **Loops** to process each student
- **Conditions** to assign grades
- **F-strings** to format output
- **Built-in functions** like \`sum()\`, \`len()\`, \`max()\`

> **Tip:** Break the problem into small steps. Solve one step at a time.`,
    codeExample: `students = {"Alice": [85, 92, 78], "Bob": [90, 88, 95]}\nfor name, grades in students.items():\n    avg = sum(grades) / len(grades)\n    print(f"{name}: {avg:.1f}")`,
    exercise: {
      title: "Student Report Card",
      description: "Complete the student report card program. Calculate averages, assign letter grades, and find the top student.",
      starterCode: `students = {
    "Alice": [85, 92, 78],
    "Bob": [90, 88, 95],
    "Charlie": [72, 68, 75]
}

# TODO: For each student, calculate their average and assign a letter grade
# A: avg >= 90, B: avg >= 80, C: avg >= 70, D: avg >= 60, F: avg < 60
# Print: "Alice: average 85.0 (B)"

# TODO: Find and print the best student
# Print: "Best student: Bob with average 91.0"

# Expected output:
# Alice: average 85.0 (B)
# Bob: average 91.0 (A)
# Charlie: average 71.7 (C)
# Best student: Bob with average 91.0

`,
      solution: `students = {
    "Alice": [85, 92, 78],
    "Bob": [90, 88, 95],
    "Charlie": [72, 68, 75]
}

best_name = ""
best_avg = 0

for name, grades in students.items():
    avg = sum(grades) / len(grades)

    if avg >= 90:
        letter = "A"
    elif avg >= 80:
        letter = "B"
    elif avg >= 70:
        letter = "C"
    elif avg >= 60:
        letter = "D"
    else:
        letter = "F"

    print(f"{name}: average {avg:.1f} ({letter})")

    if avg > best_avg:
        best_avg = avg
        best_name = name

print(f"Best student: {best_name} with average {best_avg:.1f}")`,
      hint: "Loop through students.items(), calculate avg with sum/len, use if/elif for grades.",
      tests: [
        { name: "Alice gets correct average and grade", expected: "Alice: average 85.0 (B)", hint: "Alice's average: (85+92+78)/3 = 85.0, which is B (>=80)" },
        { name: "Bob gets correct average and grade", expected: "Bob: average 91.0 (A)", hint: "Bob's average: (90+88+95)/3 = 91.0, which is A (>=90)" },
        { name: "Charlie gets correct average and grade", expected: "Charlie: average 71.7 (C)", hint: "Charlie's average: (72+68+75)/3 = 71.67, which is C (>=70)" },
        { name: "Best student is identified", expected: "Best student: Bob with average 91.0", hint: "Track the best student by comparing averages in the loop" }
      ],
      hints: [
        "Loop: for name, grades in students.items(): avg = sum(grades) / len(grades)",
        "Use if/elif/else to assign letter grade based on avg. Then print(f\"{name}: average {avg:.1f} ({letter})\")",
        "Track best: before the loop, set best_name=\"\" and best_avg=0. Inside, if avg > best_avg: update both."
      ]
    }
  }
]
