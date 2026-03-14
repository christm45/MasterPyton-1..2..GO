import { dataLessons } from './dataLessons'
import { libraryLessons } from './libraryLessons'
import { beginnerChallenges } from './beginnerChallenges'
import { beginnerExercises } from './beginnerExercises'
import { additionalLessonsA } from './additionalLessonsA'
import { additionalLessonsB } from './additionalLessonsB'
import { conceptLessons } from './conceptLessons'
import { projectLessons } from './projectLessons'
import { realWorldProjects } from './realWorldProjects'

const baseLessons = [
  // ==================== BEGINNER ====================
  {
    id: "b01",
    title: "Hello, World!",
    difficulty: "beginner",
    order: 1,
    description: "Write your very first Python program",
    duration: "10 min",
    content: `Python is one of the world's most popular programming languages. It is known for its clean, readable syntax.

## Your First Program

The \`print()\` function displays text on the screen:

\`\`\`python
print("Hello, World!")
\`\`\`

**Output:**
\`\`\`
Hello, World!
\`\`\`

## Comments

Comments start with \`#\` and are ignored by Python:

\`\`\`python
# This is a comment
print("Hello!")  # This prints text
\`\`\`

## Multiple Print Statements

\`\`\`python
print("Line 1")
print("Line 2")
print("Line 3")
\`\`\`

> **Tip:** Python is case-sensitive. \`Print()\` is NOT the same as \`print()\`.`,
    codeExample: `# Your first Python program!\nprint("Hello, World!")\nprint("Welcome to Python!")\nprint("Let's start coding!")`,
    exercise: {
      title: "Introduce Yourself",
      description: "Write a program that prints your name, your city, and your favorite food on three separate lines.",
      starterCode: `# Print your name\n\n# Print your city\n\n# Print your favorite food\n`,
      solution: `print("My name is Alex")\nprint("I live in New York")\nprint("I love pizza")`,
      hint: "Use three separate print() statements with strings in quotes."
    }
  },
  {
    id: "b02",
    title: "Variables & Data Types",
    difficulty: "beginner",
    order: 2,
    description: "Store and manage data with variables",
    duration: "15 min",
    content: `Variables are containers for storing data. Python figures out the type automatically.

## Creating Variables

\`\`\`python
name = "Alice"
age = 25
height = 5.6
is_student = True
\`\`\`

## Data Types

| Type | Example | Description |
|------|---------|-------------|
| \`str\` | \`"hello"\` | Text |
| \`int\` | \`42\` | Whole numbers |
| \`float\` | \`3.14\` | Decimal numbers |
| \`bool\` | \`True/False\` | Boolean values |

## Check the Type

\`\`\`python
x = 10
print(type(x))  # <class 'int'>
\`\`\`

## Type Conversion

\`\`\`python
num_str = "42"
num_int = int(num_str)  # Convert string to int
print(num_int + 8)      # 50
\`\`\`

> **Tip:** Variable names can contain letters, numbers, and underscores, but cannot start with a number.`,
    codeExample: `name = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Student:", is_student)\nprint("Type of age:", type(age))`,
    exercise: {
      title: "Variable Swap",
      description: "Create two variables a=10 and b=20. Swap their values so a becomes 20 and b becomes 10. Print both.",
      starterCode: `a = 10\nb = 20\n\n# Swap the values\n\nprint("a =", a)\nprint("b =", b)`,
      solution: `a = 10\nb = 20\n\na, b = b, a\n\nprint("a =", a)\nprint("b =", b)`,
      hint: "Python allows simultaneous assignment: a, b = b, a"
    }
  },
  {
    id: "b03",
    title: "Strings",
    difficulty: "beginner",
    order: 3,
    description: "Manipulate text with string operations",
    duration: "15 min",
    content: `Strings are sequences of characters enclosed in quotes.

## Creating Strings

\`\`\`python
single = 'Hello'
double = "World"
multi = """This spans
multiple lines"""
\`\`\`

## String Operations

\`\`\`python
greeting = "Hello" + " " + "World"  # Concatenation
repeated = "Ha" * 3                  # "HaHaHa"
length = len("Python")               # 6
\`\`\`

## String Methods

\`\`\`python
text = "hello world"
print(text.upper())       # HELLO WORLD
print(text.capitalize())  # Hello world
print(text.replace("hello", "hi"))  # hi world
print(text.split())       # ['hello', 'world']
\`\`\`

## F-Strings (Formatted Strings)

\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")
\`\`\`

## String Slicing

\`\`\`python
text = "Python"
print(text[0])     # P
print(text[0:3])   # Pyt
print(text[-1])    # n
print(text[::-1])  # nohtyP (reversed)
\`\`\`

> **Tip:** Strings are immutable - you cannot change individual characters. Create a new string instead.`,
    codeExample: `name = "Python Programming"\n\nprint("Upper:", name.upper())\nprint("Lower:", name.lower())\nprint("Length:", len(name))\nprint("First 6:", name[:6])\nprint("Reversed:", name[::-1])\n\n# F-string formatting\nversion = 3.12\nprint(f"{name} version {version}")`,
    exercise: {
      title: "String Manipulator",
      description: "Given the string 'Hello World', print it reversed, in uppercase, and count how many 'l' characters it contains.",
      starterCode: `text = "Hello World"\n\n# Print reversed\n\n# Print uppercase\n\n# Count letter 'l'\n`,
      solution: `text = "Hello World"\n\nprint(text[::-1])\nprint(text.upper())\nprint(text.count("l"))`,
      hint: "Use [::-1] to reverse, .upper() for uppercase, and .count() to count characters."
    }
  },
  {
    id: "b04",
    title: "Numbers & Math",
    difficulty: "beginner",
    order: 4,
    description: "Perform calculations with Python",
    duration: "12 min",
    content: `Python supports integers, floats, and complex numbers.

## Arithmetic Operators

\`\`\`python
print(10 + 3)   # 13  Addition
print(10 - 3)   # 7   Subtraction
print(10 * 3)   # 30  Multiplication
print(10 / 3)   # 3.33 Division (float)
print(10 // 3)  # 3   Floor division
print(10 % 3)   # 1   Modulus (remainder)
print(10 ** 3)  # 1000 Exponent
\`\`\`

## Built-in Math Functions

\`\`\`python
print(abs(-5))       # 5
print(round(3.7))    # 4
print(min(1, 2, 3))  # 1
print(max(1, 2, 3))  # 3
\`\`\`

## The math Module

\`\`\`python
import math
print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.14159...
print(math.floor(3.7)) # 3
print(math.ceil(3.2))  # 4
\`\`\`

> **Tip:** Use \`//\` for integer division and \`%\` for remainder. These are very useful in programming!`,
    codeExample: `# Basic arithmetic\nprint("10 + 3 =", 10 + 3)\nprint("10 / 3 =", 10 / 3)\nprint("10 // 3 =", 10 // 3)\nprint("10 % 3 =", 10 % 3)\nprint("2 ** 10 =", 2 ** 10)\n\nimport math\nprint("Square root of 144:", math.sqrt(144))\nprint("Pi:", math.pi)`,
    exercise: {
      title: "Calculator",
      description: "Calculate the area and circumference of a circle with radius 7. Use math.pi for precision.",
      starterCode: `import math\n\nradius = 7\n\n# Calculate area (pi * r^2)\n\n# Calculate circumference (2 * pi * r)\n`,
      solution: `import math\n\nradius = 7\n\narea = math.pi * radius ** 2\ncircumference = 2 * math.pi * radius\n\nprint(f"Area: {area:.2f}")\nprint(f"Circumference: {circumference:.2f}")`,
      hint: "Area = pi * r^2, Circumference = 2 * pi * r. Use math.pi and ** for power."
    }
  },
  {
    id: "b05",
    title: "Input & Output",
    difficulty: "beginner",
    order: 5,
    description: "Interact with the user through I/O",
    duration: "10 min",
    content: `Python uses \`input()\` to read user input and \`print()\` for output.

## Getting User Input

\`\`\`python
name = input("Enter your name: ")
print(f"Hello, {name}!")
\`\`\`

## Converting Input Types

\`input()\` always returns a string. Convert it for numbers:

\`\`\`python
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))
\`\`\`

## Formatted Output

\`\`\`python
name = "Alice"
score = 95.5
print(f"Student: {name}, Score: {score:.1f}%")
print(f"{'Name':<10} {'Score':>6}")
print(f"{name:<10} {score:>6.1f}")
\`\`\`

## Print Options

\`\`\`python
print("A", "B", "C", sep="-")   # A-B-C
print("Hello", end=" ")
print("World")                    # Hello World
\`\`\`

> **Tip:** Always validate user input in real programs. A non-numeric input will crash \`int()\`.`,
    codeExample: `# Since we're in a browser, we'll simulate input\nname = "Alice"\nage = 25\n\nprint(f"Hello, {name}!")\nprint(f"You are {age} years old")\nprint(f"In 10 years you'll be {age + 10}")\n\n# Formatting\nprint(f"{'Item':<15} {'Price':>8}")\nprint(f"{'-'*23}")\nprint(f"{'Python Book':<15} {'$29.99':>8}")\nprint(f"{'USB Cable':<15} {'$9.99':>8}")`,
    exercise: {
      title: "Temperature Converter",
      description: "Convert 98.6 degrees Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9. Print the result formatted to 1 decimal place.",
      starterCode: `fahrenheit = 98.6\n\n# Convert to Celsius\n\n# Print the result\n`,
      solution: `fahrenheit = 98.6\n\ncelsius = (fahrenheit - 32) * 5/9\n\nprint(f"{fahrenheit}F = {celsius:.1f}C")`,
      hint: "Use the formula C = (F - 32) * 5/9 and f-string with :.1f for formatting."
    }
  },
  {
    id: "b06",
    title: "Conditional Statements",
    difficulty: "beginner",
    order: 6,
    description: "Make decisions with if/elif/else",
    duration: "15 min",
    content: `Conditional statements let your program make decisions.

## If Statement

\`\`\`python
age = 18
if age >= 18:
    print("You are an adult")
\`\`\`

## If/Else

\`\`\`python
temperature = 30
if temperature > 25:
    print("It's hot!")
else:
    print("It's cool")
\`\`\`

## If/Elif/Else

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")
\`\`\`

## Comparison & Logical Operators

\`\`\`python
# Comparison: ==  !=  >  <  >=  <=
# Logical: and  or  not

age = 25
has_license = True
if age >= 18 and has_license:
    print("You can drive")
\`\`\`

## Ternary Operator

\`\`\`python
age = 20
status = "adult" if age >= 18 else "minor"
\`\`\`

> **Tip:** Python uses indentation (4 spaces) to define code blocks, not braces like other languages.`,
    codeExample: `score = 85\n\nif score >= 90:\n    grade = "A"\n    msg = "Excellent!"\nelif score >= 80:\n    grade = "B"\n    msg = "Great job!"\nelif score >= 70:\n    grade = "C"\n    msg = "Not bad"\nelif score >= 60:\n    grade = "D"\n    msg = "Needs improvement"\nelse:\n    grade = "F"\n    msg = "Please study more"\n\nprint(f"Score: {score}")\nprint(f"Grade: {grade}")\nprint(f"Message: {msg}")`,
    exercise: {
      title: "Number Classifier",
      description: "Write a program that checks if a number is positive, negative, or zero, and also if it's even or odd.",
      starterCode: `number = -7\n\n# Check positive/negative/zero\n\n# Check even/odd\n`,
      solution: `number = -7\n\nif number > 0:\n    print(f"{number} is positive")\nelif number < 0:\n    print(f"{number} is negative")\nelse:\n    print(f"{number} is zero")\n\nif number % 2 == 0:\n    print(f"{number} is even")\nelse:\n    print(f"{number} is odd")`,
      hint: "Use > 0, < 0, and == 0 for sign. Use % 2 == 0 for even check."
    }
  },
  {
    id: "b07",
    title: "Lists",
    difficulty: "beginner",
    order: 7,
    description: "Store collections of items in lists",
    duration: "15 min",
    content: `Lists are ordered, mutable collections that can hold any data type.

## Creating Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

## Accessing Elements

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[-1])   # cherry
print(fruits[0:2])  # ['apple', 'banana']
\`\`\`

## List Methods

\`\`\`python
fruits = ["apple", "banana"]
fruits.append("cherry")      # Add to end
fruits.insert(1, "orange")   # Insert at index
fruits.remove("banana")      # Remove by value
popped = fruits.pop()        # Remove & return last
fruits.sort()                # Sort in place
\`\`\`

## Useful Operations

\`\`\`python
numbers = [3, 1, 4, 1, 5]
print(len(numbers))    # 5
print(sum(numbers))    # 14
print(min(numbers))    # 1
print(max(numbers))    # 5
print(sorted(numbers)) # [1, 1, 3, 4, 5]
\`\`\`

> **Tip:** Lists are mutable - you can change their contents after creation.`,
    codeExample: `fruits = ["apple", "banana", "cherry", "date"]\n\nprint("Original:", fruits)\nfruits.append("elderberry")\nprint("After append:", fruits)\nfruits.insert(1, "avocado")\nprint("After insert:", fruits)\nfruits.remove("cherry")\nprint("After remove:", fruits)\n\nprint(f"Length: {len(fruits)}")\nprint(f"Sorted: {sorted(fruits)}")`,
    exercise: {
      title: "List Operations",
      description: "Create a list of 5 numbers. Find and print the sum, average, minimum, and maximum.",
      starterCode: `numbers = [23, 45, 12, 67, 34]\n\n# Find sum\n\n# Find average\n\n# Find min and max\n`,
      solution: `numbers = [23, 45, 12, 67, 34]\n\ntotal = sum(numbers)\naverage = total / len(numbers)\nminimum = min(numbers)\nmaximum = max(numbers)\n\nprint(f"Numbers: {numbers}")\nprint(f"Sum: {total}")\nprint(f"Average: {average}")\nprint(f"Min: {minimum}")\nprint(f"Max: {maximum}")`,
      hint: "Use sum(), len(), min(), max() built-in functions."
    }
  },
  {
    id: "b08",
    title: "Loops",
    difficulty: "beginner",
    order: 8,
    description: "Repeat actions with for and while loops",
    duration: "15 min",
    content: `Loops let you repeat code multiple times.

## For Loop

\`\`\`python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for fruit in ["apple", "banana", "cherry"]:
    print(fruit)
\`\`\`

## Range Function

\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(2, 8)     # 2, 3, 4, 5, 6, 7
range(0, 10, 2) # 0, 2, 4, 6, 8
\`\`\`

## While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## Break and Continue

\`\`\`python
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)      # 0, 1, 2, 4, 5, 6
\`\`\`

## Enumerate

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
\`\`\`

> **Tip:** Prefer \`for\` loops when you know the number of iterations. Use \`while\` when the condition is dynamic.`,
    codeExample: `# For loop with range\nprint("Counting:")\nfor i in range(1, 6):\n    print(f"  {i}")\n\n# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nprint("\\nFruits:")\nfor i, fruit in enumerate(fruits, 1):\n    print(f"  {i}. {fruit}")\n\n# While loop\nprint("\\nCountdown:")\nn = 5\nwhile n > 0:\n    print(f"  {n}...")\n    n -= 1\nprint("  Go!")`,
    exercise: {
      title: "FizzBuzz",
      description: "Print numbers 1-20. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.",
      starterCode: `# FizzBuzz challenge\nfor i in range(1, 21):\n    pass  # Replace this\n`,
      solution: `for i in range(1, 21):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`,
      hint: "Check divisibility with %. Check both 3 AND 5 first, then 3, then 5."
    }
  },
  {
    id: "b09",
    title: "Dictionaries",
    difficulty: "beginner",
    order: 9,
    description: "Store key-value pairs for fast lookups",
    duration: "15 min",
    content: `Dictionaries store data as key-value pairs. They are fast and very useful.

## Creating Dictionaries

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "Paris"
}
\`\`\`

## Accessing Values

\`\`\`python
print(person["name"])         # Alice
print(person.get("age"))      # 25
print(person.get("job", "N/A"))  # N/A (default)
\`\`\`

## Modifying Dictionaries

\`\`\`python
person["email"] = "alice@mail.com"  # Add
person["age"] = 26                   # Update
del person["city"]                   # Delete
\`\`\`

## Iterating

\`\`\`python
for key in person:
    print(key, "->", person[key])

for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## Dictionary Methods

\`\`\`python
print(person.keys())    # All keys
print(person.values())  # All values
print(person.items())   # All pairs
print(len(person))      # Number of pairs
\`\`\`

> **Tip:** Keys must be immutable (strings, numbers, tuples). Values can be anything.`,
    codeExample: `student = {\n    "name": "Bob",\n    "age": 22,\n    "grades": [85, 92, 78, 95],\n    "active": True\n}\n\nprint(f"Student: {student['name']}")\nprint(f"Age: {student['age']}")\nprint(f"Grades: {student['grades']}")\nprint(f"Average: {sum(student['grades'])/len(student['grades']):.1f}")\n\nprint("\\nAll info:")\nfor key, value in student.items():\n    print(f"  {key}: {value}")`,
    exercise: {
      title: "Word Counter",
      description: "Count how many times each word appears in a sentence and store results in a dictionary.",
      starterCode: `sentence = "the cat sat on the mat the cat"\nwords = sentence.split()\n\nword_count = {}\n# Count each word\n\nprint(word_count)`,
      solution: `sentence = "the cat sat on the mat the cat"\nwords = sentence.split()\n\nword_count = {}\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\n\nfor word, count in word_count.items():\n    print(f"'{word}': {count}")`,
      hint: "Use dict.get(key, 0) to get current count (defaulting to 0) then add 1."
    }
  },
  {
    id: "b10",
    title: "Functions",
    difficulty: "beginner",
    order: 10,
    description: "Create reusable blocks of code",
    duration: "15 min",
    content: `Functions let you organize code into reusable, named blocks.

## Defining Functions

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)  # Hello, Alice!
\`\`\`

## Parameters & Return

\`\`\`python
def add(a, b):
    return a + b

def is_even(n):
    return n % 2 == 0
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))            # Hello, Bob!
print(greet("Bob", "Hi"))      # Hi, Bob!
\`\`\`

## Multiple Return Values

\`\`\`python
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5])
\`\`\`

## Docstrings

\`\`\`python
def calculate_area(radius):
    """Calculate the area of a circle."""
    import math
    return math.pi * radius ** 2
\`\`\`

> **Tip:** Functions should do one thing well. Keep them short and give them descriptive names.`,
    codeExample: `def calculate_bmi(weight, height):\n    """Calculate BMI given weight(kg) and height(m)."""\n    bmi = weight / (height ** 2)\n    if bmi < 18.5:\n        category = "Underweight"\n    elif bmi < 25:\n        category = "Normal"\n    elif bmi < 30:\n        category = "Overweight"\n    else:\n        category = "Obese"\n    return bmi, category\n\nbmi, cat = calculate_bmi(70, 1.75)\nprint(f"BMI: {bmi:.1f}")\nprint(f"Category: {cat}")`,
    exercise: {
      title: "Palindrome Checker",
      description: "Write a function that checks if a string is a palindrome (reads same forwards and backwards).",
      starterCode: `def is_palindrome(text):\n    # Your code here\n    pass\n\n# Test it\nprint(is_palindrome("racecar"))  # True\nprint(is_palindrome("hello"))    # False\nprint(is_palindrome("madam"))    # True`,
      solution: `def is_palindrome(text):\n    text = text.lower().replace(" ", "")\n    return text == text[::-1]\n\nprint(is_palindrome("racecar"))  # True\nprint(is_palindrome("hello"))    # False\nprint(is_palindrome("madam"))    # True`,
      hint: "Clean the text with .lower() then compare it to its reverse with [::-1]."
    }
  },

  // ==================== INTERMEDIATE ====================
  {
    id: "i01",
    title: "Advanced Functions",
    difficulty: "intermediate",
    order: 1,
    description: "Master *args, **kwargs, and lambda functions",
    duration: "18 min",
    content: `Take your functions to the next level with advanced parameter handling.

## *args - Variable Positional Arguments

\`\`\`python
def total(*args):
    return sum(args)

print(total(1, 2, 3))     # 6
print(total(10, 20, 30, 40))  # 100
\`\`\`

## **kwargs - Variable Keyword Arguments

\`\`\`python
def profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

profile(name="Alice", age=25, city="Paris")
\`\`\`

## Lambda Functions

\`\`\`python
square = lambda x: x ** 2
add = lambda a, b: a + b

print(square(5))   # 25
print(add(3, 4))   # 7
\`\`\`

## Higher-Order Functions

\`\`\`python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x%2==0, numbers))
print(squared)  # [1, 4, 9, 16, 25]
print(evens)    # [2, 4]
\`\`\`

## Sorted with Key

\`\`\`python
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
\`\`\`

> **Tip:** Use lambda for short, throwaway functions. For complex logic, define a proper function.`,
    codeExample: `# *args and **kwargs\ndef make_sentence(*words, **options):\n    sep = options.get("sep", " ")\n    end = options.get("end", ".")\n    return sep.join(words) + end\n\nprint(make_sentence("Python", "is", "awesome"))\nprint(make_sentence("A", "B", "C", sep="-", end="!"))\n\n# Lambda with sorting\nstudents = [\n    {"name": "Alice", "grade": 92},\n    {"name": "Bob", "grade": 85},\n    {"name": "Charlie", "grade": 98},\n]\n\nranked = sorted(students, key=lambda s: s["grade"], reverse=True)\nfor i, s in enumerate(ranked, 1):\n    print(f"{i}. {s['name']}: {s['grade']}")`,
    exercise: {
      title: "Flexible Calculator",
      description: "Write a function that takes an operation name and *args numbers, then applies that operation (sum, product, average).",
      starterCode: `def calculate(operation, *args):\n    # Your code here\n    pass\n\nprint(calculate("sum", 1, 2, 3, 4))      # 10\nprint(calculate("product", 2, 3, 4))     # 24\nprint(calculate("average", 10, 20, 30))  # 20.0`,
      solution: `def calculate(operation, *args):\n    if operation == "sum":\n        return sum(args)\n    elif operation == "product":\n        result = 1\n        for n in args:\n            result *= n\n        return result\n    elif operation == "average":\n        return sum(args) / len(args)\n\nprint(calculate("sum", 1, 2, 3, 4))\nprint(calculate("product", 2, 3, 4))\nprint(calculate("average", 10, 20, 30))`,
      hint: "Use if/elif to check operation type. For product, multiply all args together."
    }
  },
  {
    id: "i02",
    title: "List Comprehensions",
    difficulty: "intermediate",
    order: 2,
    description: "Create lists with powerful one-line expressions",
    duration: "15 min",
    content: `List comprehensions provide a concise way to create lists.

## Basic Syntax

\`\`\`python
# Traditional
squares = []
for x in range(10):
    squares.append(x**2)

# Comprehension
squares = [x**2 for x in range(10)]
\`\`\`

## With Condition

\`\`\`python
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
\`\`\`

## Nested Comprehensions

\`\`\`python
matrix = [[i*j for j in range(1,4)] for i in range(1,4)]
# [[1,2,3], [2,4,6], [3,6,9]]
\`\`\`

## Dictionary & Set Comprehensions

\`\`\`python
word_lengths = {w: len(w) for w in ["hello", "world", "python"]}
unique_lengths = {len(w) for w in ["hi", "hello", "hey"]}
\`\`\`

## If/Else in Comprehension

\`\`\`python
labels = ["even" if x%2==0 else "odd" for x in range(5)]
# ['even', 'odd', 'even', 'odd', 'even']
\`\`\`

> **Tip:** Keep comprehensions readable. If it gets too complex, use a regular loop instead.`,
    codeExample: `# List comprehension examples\nsquares = [x**2 for x in range(1, 11)]\nprint("Squares:", squares)\n\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint("Evens:", evens)\n\nwords = ["hello", "world", "python", "code"]\nupper = [w.upper() for w in words if len(w) > 4]\nprint("Long words upper:", upper)\n\n# Dictionary comprehension\nchar_count = {c: "hello world".count(c) for c in set("hello world")}\nprint("Char counts:", char_count)`,
    exercise: {
      title: "Comprehension Master",
      description: "Use list comprehensions to: 1) Get all numbers from 1-50 divisible by both 3 and 5, 2) Create a dict mapping numbers 1-10 to their cubes.",
      starterCode: `# Numbers divisible by 3 AND 5 from 1 to 50\ndiv_3_5 = # your comprehension\n\n# Dict of cubes: {1:1, 2:8, 3:27, ...}\ncubes = # your comprehension\n\nprint("Divisible by 3 and 5:", div_3_5)\nprint("Cubes:", cubes)`,
      solution: `div_3_5 = [x for x in range(1, 51) if x % 3 == 0 and x % 5 == 0]\n\ncubes = {x: x**3 for x in range(1, 11)}\n\nprint("Divisible by 3 and 5:", div_3_5)\nprint("Cubes:", cubes)`,
      hint: "Use [x for x in range() if condition] for filtering. Use {k: v for ...} for dict."
    }
  },
  {
    id: "i03",
    title: "Error Handling",
    difficulty: "intermediate",
    order: 3,
    description: "Handle errors gracefully with try/except",
    duration: "15 min",
    content: `Error handling prevents your program from crashing unexpectedly.

## Try/Except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Multiple Exceptions

\`\`\`python
try:
    num = int("hello")
except ValueError:
    print("Not a valid number!")
except TypeError:
    print("Type error!")
\`\`\`

## Else and Finally

\`\`\`python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error!")
else:
    print(f"Result: {result}")  # Runs if no error
finally:
    print("Done!")  # Always runs
\`\`\`

## Raising Exceptions

\`\`\`python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
\`\`\`

## Custom Exceptions

\`\`\`python
class InsufficientFundsError(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(f"Need {amount}, have {balance}")
    return balance - amount
\`\`\`

> **Tip:** Catch specific exceptions, not bare \`except:\`. This makes debugging much easier.`,
    codeExample: `def safe_divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        return "Error: Division by zero!"\n    except TypeError:\n        return "Error: Invalid types!"\n    else:\n        return f"{a} / {b} = {result}"\n    finally:\n        print(f"  Attempted: {a} / {b}")\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("a", 2))`,
    exercise: {
      title: "Safe Calculator",
      description: "Write a function that safely converts a string to a number and returns it. Return None for invalid input, with an appropriate error message.",
      starterCode: `def safe_convert(value):\n    # Try int first, then float, handle errors\n    pass\n\nprint(safe_convert("42"))      # 42\nprint(safe_convert("3.14"))    # 3.14\nprint(safe_convert("hello"))   # None`,
      solution: `def safe_convert(value):\n    try:\n        return int(value)\n    except ValueError:\n        try:\n            return float(value)\n        except ValueError:\n            print(f"Cannot convert '{value}' to a number")\n            return None\n\nprint(safe_convert("42"))\nprint(safe_convert("3.14"))\nprint(safe_convert("hello"))`,
      hint: "Try int() first in a try block. If ValueError, try float(). If that also fails, return None."
    }
  },
  {
    id: "i04",
    title: "File Handling",
    difficulty: "intermediate",
    order: 4,
    description: "Read and write files in Python",
    duration: "15 min",
    content: `Python makes file operations simple with the \`open()\` function.

## Reading Files

\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()         # Read all
    # or
    lines = f.readlines()     # List of lines
    # or
    for line in f:             # Line by line
        print(line.strip())
\`\`\`

## Writing Files

\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")
\`\`\`

## File Modes

| Mode | Description |
|------|-------------|
| \`"r"\` | Read (default) |
| \`"w"\` | Write (creates/overwrites) |
| \`"a"\` | Append |
| \`"x"\` | Create (fails if exists) |

## The \`with\` Statement

The \`with\` block automatically closes the file when done:

\`\`\`python
with open("data.txt", "w") as f:
    f.write("Auto-closed!")
# File is closed here
\`\`\`

## Working with CSV

\`\`\`python
import csv
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
\`\`\`

> **Tip:** Always use \`with\` statement for files. It ensures proper cleanup even if errors occur.`,
    codeExample: `# Since we're in browser, we'll simulate file operations\n# In real Python, this works with actual files\n\nimport io\n\n# Simulate writing and reading\ndata = "Name,Age,Score\\nAlice,25,92\\nBob,22,85\\nCharlie,28,98"\n\n# Process CSV-like data\nlines = data.strip().split("\\n")\nheader = lines[0].split(",")\nprint(f"{'Name':<10} {'Age':>5} {'Score':>6}")\nprint("-" * 23)\nfor line in lines[1:]:\n    name, age, score = line.split(",")\n    print(f"{name:<10} {age:>5} {score:>6}")`,
    exercise: {
      title: "Data Processor",
      description: "Parse the given CSV string data, find the student with the highest score, and print a summary.",
      starterCode: `data = \"\"\"Alice,92\nBob,85\nCharlie,98\nDiana,76\nEve,91\"\"\"\n\n# Parse the data\n# Find highest scorer\n# Print summary\n`,
      solution: `data = \"\"\"Alice,92\nBob,85\nCharlie,98\nDiana,76\nEve,91\"\"\"\n\nstudents = []\nfor line in data.strip().split("\\n"):\n    name, score = line.split(",")\n    students.append((name, int(score)))\n\nbest = max(students, key=lambda s: s[1])\navg = sum(s[1] for s in students) / len(students)\n\nprint(f"Students: {len(students)}")\nprint(f"Average: {avg:.1f}")\nprint(f"Top student: {best[0]} ({best[1]})")`,
      hint: "Split by newlines, then split each line by comma. Use max() with a key function."
    }
  },
  {
    id: "i05",
    title: "OOP Basics",
    difficulty: "intermediate",
    order: 5,
    description: "Build classes and objects in Python",
    duration: "20 min",
    content: `Object-Oriented Programming organizes code into classes and objects.

## Defining a Class

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Rex", "Labrador")
print(my_dog.bark())
\`\`\`

## The \`__init__\` Method

The constructor initializes new objects:

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}, age {self.age}"
\`\`\`

## Class vs Instance Variables

\`\`\`python
class Car:
    wheels = 4          # Class variable (shared)

    def __init__(self, brand):
        self.brand = brand  # Instance variable (unique)
\`\`\`

## String Representation

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x}, {self.y})"
\`\`\`

> **Tip:** \`self\` refers to the current instance. Always include it as the first parameter of methods.`,
    codeExample: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n        self.history = []\n\n    def deposit(self, amount):\n        self.balance += amount\n        self.history.append(f"+{amount}")\n        return f"Deposited \${amount}. Balance: \${self.balance}"\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            return "Insufficient funds!"\n        self.balance -= amount\n        self.history.append(f"-{amount}")\n        return f"Withdrew \${amount}. Balance: \${self.balance}"\n\n    def __str__(self):\n        return f"Account({self.owner}: \${self.balance})"\n\nacc = BankAccount("Alice", 100)\nprint(acc)\nprint(acc.deposit(50))\nprint(acc.withdraw(30))\nprint(f"History: {acc.history}")`,
    exercise: {
      title: "Student Class",
      description: "Create a Student class with name, grades list, add_grade() method, and get_average() method.",
      starterCode: `class Student:\n    # Your code here\n    pass\n\ns = Student("Alice")\ns.add_grade(85)\ns.add_grade(92)\ns.add_grade(78)\nprint(f"{s.name}'s average: {s.get_average():.1f}")`,
      solution: `class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, grade):\n        self.grades.append(grade)\n\n    def get_average(self):\n        if not self.grades:\n            return 0\n        return sum(self.grades) / len(self.grades)\n\ns = Student("Alice")\ns.add_grade(85)\ns.add_grade(92)\ns.add_grade(78)\nprint(f"{s.name}'s average: {s.get_average():.1f}")`,
      hint: "Use __init__ to set name and empty grades list. add_grade appends, get_average uses sum/len."
    }
  },
  {
    id: "i06",
    title: "OOP Inheritance",
    difficulty: "intermediate",
    order: 6,
    description: "Extend classes with inheritance and polymorphism",
    duration: "18 min",
    content: `Inheritance lets you create new classes based on existing ones.

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
\`\`\`

## super() Function

\`\`\`python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department
\`\`\`

## Polymorphism

\`\`\`python
animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for animal in animals:
    print(animal.speak())  # Each calls its own method
\`\`\`

## isinstance() and issubclass()

\`\`\`python
rex = Dog("Rex")
print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True
print(issubclass(Dog, Animal))  # True
\`\`\`

> **Tip:** Favor composition over inheritance when possible. Use inheritance for "is-a" relationships.`,
    codeExample: `class Shape:\n    def area(self):\n        return 0\n    def __str__(self):\n        return f"{self.__class__.__name__}: area={self.area():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        import math\n        return math.pi * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor shape in shapes:\n    print(shape)`,
    exercise: {
      title: "Vehicle Hierarchy",
      description: "Create a Vehicle base class, then Car and Motorcycle subclasses with specific attributes and a describe() method.",
      starterCode: `class Vehicle:\n    pass\n\nclass Car(Vehicle):\n    pass\n\nclass Motorcycle(Vehicle):\n    pass\n\nc = Car("Toyota", 2023, 4)\nm = Motorcycle("Harley", 2022, "Cruiser")\nprint(c.describe())\nprint(m.describe())`,
      solution: `class Vehicle:\n    def __init__(self, brand, year):\n        self.brand = brand\n        self.year = year\n    def describe(self):\n        return f"{self.year} {self.brand}"\n\nclass Car(Vehicle):\n    def __init__(self, brand, year, doors):\n        super().__init__(brand, year)\n        self.doors = doors\n    def describe(self):\n        return f"{super().describe()} ({self.doors} doors)"\n\nclass Motorcycle(Vehicle):\n    def __init__(self, brand, year, style):\n        super().__init__(brand, year)\n        self.style = style\n    def describe(self):\n        return f"{super().describe()} [{self.style}]"\n\nc = Car("Toyota", 2023, 4)\nm = Motorcycle("Harley", 2022, "Cruiser")\nprint(c.describe())\nprint(m.describe())`,
      hint: "Vehicle has brand/year. Car adds doors, Motorcycle adds style. Use super().__init__()."
    }
  },
  {
    id: "i07",
    title: "Modules & Packages",
    difficulty: "intermediate",
    order: 7,
    description: "Organize code with modules and imports",
    duration: "12 min",
    content: `Modules help organize code into separate files and namespaces.

## Importing Modules

\`\`\`python
import math
from datetime import datetime
from os import path as ospath
import json
\`\`\`

## Standard Library Highlights

\`\`\`python
import random
print(random.randint(1, 100))
print(random.choice(["a", "b", "c"]))

import datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d"))

import json
data = json.dumps({"name": "Alice"})
parsed = json.loads(data)
\`\`\`

## The collections Module

\`\`\`python
from collections import Counter, defaultdict

words = ["a", "b", "a", "c", "a", "b"]
counts = Counter(words)  # Counter({'a': 3, 'b': 2, 'c': 1})

dd = defaultdict(list)
dd["fruits"].append("apple")
\`\`\`

## Creating Your Own Module

Any \`.py\` file is a module:

\`\`\`python
# myutils.py
def helper():
    return "I'm a helper!"

# main.py
from myutils import helper
\`\`\`

> **Tip:** Use \`from module import specific_thing\` for cleaner code. Avoid \`from module import *\`.`,
    codeExample: `import random\nimport json\nfrom collections import Counter\nfrom datetime import datetime\n\n# Random\nnumbers = [random.randint(1, 10) for _ in range(20)]\nprint("Random numbers:", numbers)\n\n# Counter\ncounts = Counter(numbers)\nprint("Most common:", counts.most_common(3))\n\n# JSON\ndata = {"name": "Alice", "scores": [85, 92, 78]}\njson_str = json.dumps(data, indent=2)\nprint("JSON:", json_str)\n\n# DateTime\nnow = datetime.now()\nprint(f"Now: {now.strftime('%Y-%m-%d %H:%M')}")`,
    exercise: {
      title: "Data Analyzer",
      description: "Use the collections module to find the 3 most common letters in a text string (excluding spaces).",
      starterCode: `from collections import Counter\n\ntext = "python programming is powerful and practical"\n\n# Count letters (exclude spaces)\n# Find top 3\n`,
      solution: `from collections import Counter\n\ntext = "python programming is powerful and practical"\n\nletters = [c for c in text if c != " "]\ncounts = Counter(letters)\n\nprint("Top 3 letters:")\nfor letter, count in counts.most_common(3):\n    print(f"  '{letter}': {count} times")`,
      hint: "Filter out spaces with a list comprehension, then use Counter and .most_common(3)."
    }
  },
  {
    id: "i08",
    title: "String Formatting & Regex",
    difficulty: "intermediate",
    order: 8,
    description: "Master advanced string formatting and patterns",
    duration: "18 min",
    content: `Advanced string formatting and regular expressions for pattern matching.

## Advanced F-Strings

\`\`\`python
# Alignment
print(f"{'left':<20}|")
print(f"{'center':^20}|")
print(f"{'right':>20}|")

# Numbers
pi = 3.14159
print(f"Pi: {pi:.2f}")        # 3.14
print(f"Big: {1000000:,}")     # 1,000,000
print(f"Percent: {0.85:.1%}")  # 85.0%
\`\`\`

## Regular Expressions

\`\`\`python
import re

text = "Contact: alice@mail.com or bob@web.org"
emails = re.findall(r'[\\w.]+@[\\w.]+', text)
# ['alice@mail.com', 'bob@web.org']
\`\`\`

## Common Regex Patterns

| Pattern | Matches |
|---------|---------|
| \`\\d\` | Digit |
| \`\\w\` | Word character |
| \`\\s\` | Whitespace |
| \`.+\` | One or more of any |
| \`[a-z]\` | Lowercase letter |
| \`^\` / \`$\` | Start / end |

## Regex Methods

\`\`\`python
import re
re.search(r'\\d+', 'age: 25')   # Find first match
re.findall(r'\\d+', '1 and 2')  # Find all
re.sub(r'\\d', 'X', 'abc123')   # Replace: abcXXX
re.split(r'[,;]', 'a,b;c')     # Split: ['a','b','c']
\`\`\`

> **Tip:** Use raw strings \`r"..."\` for regex to avoid escaping backslashes.`,
    codeExample: `import re\n\ntext = "Call 555-1234 or 555-5678. Email: test@email.com"\n\n# Find phone numbers\nphones = re.findall(r'\\d{3}-\\d{4}', text)\nprint("Phones:", phones)\n\n# Find emails\nemails = re.findall(r'[\\w.]+@[\\w.]+', text)\nprint("Emails:", emails)\n\n# Replace\ncensored = re.sub(r'\\d', '*', text)\nprint("Censored:", censored)\n\n# F-string formatting\ndata = [("Alice", 92.5), ("Bob", 85.3), ("Charlie", 98.1)]\nprint(f"\\n{'Name':<12} {'Score':>8}")\nprint("-" * 21)\nfor name, score in data:\n    print(f"{name:<12} {score:>7.1f}%")`,
    exercise: {
      title: "Log Parser",
      description: "Extract all IP addresses and timestamps from a log string using regex.",
      starterCode: `import re\n\nlog = \"\"\"192.168.1.1 [2024-01-15 10:30:00] GET /index\n10.0.0.5 [2024-01-15 10:31:22] POST /login\n172.16.0.1 [2024-01-15 10:32:45] GET /dashboard\"\"\"\n\n# Extract IPs\n# Extract timestamps\n`,
      solution: `import re\n\nlog = \"\"\"192.168.1.1 [2024-01-15 10:30:00] GET /index\n10.0.0.5 [2024-01-15 10:31:22] POST /login\n172.16.0.1 [2024-01-15 10:32:45] GET /dashboard\"\"\"\n\nips = re.findall(r'\\d+\\.\\d+\\.\\d+\\.\\d+', log)\ntimestamps = re.findall(r'\\[(.*?)\\]', log)\n\nprint("IPs:", ips)\nprint("Timestamps:", timestamps)`,
      hint: "IP pattern: \\d+\\.\\d+\\.\\d+\\.\\d+ Timestamp pattern: \\[(.*?)\\]"
    }
  },
  {
    id: "i09",
    title: "Working with JSON & Data",
    difficulty: "intermediate",
    order: 9,
    description: "Parse, transform, and work with structured data",
    duration: "15 min",
    content: `JSON is the universal format for data exchange.

## JSON Basics

\`\`\`python
import json

# Python dict to JSON string
data = {"name": "Alice", "age": 25}
json_str = json.dumps(data, indent=2)

# JSON string to Python dict
parsed = json.loads(json_str)
\`\`\`

## Working with Nested Data

\`\`\`python
users = [
    {"name": "Alice", "scores": [85, 92]},
    {"name": "Bob", "scores": [78, 88]},
]

for user in users:
    avg = sum(user["scores"]) / len(user["scores"])
    print(f"{user['name']}: {avg:.1f}")
\`\`\`

## Data Transformation

\`\`\`python
# Transform list of dicts
students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 85},
]

names = [s["name"] for s in students]
avg = sum(s["grade"] for s in students) / len(students)
top = max(students, key=lambda s: s["grade"])
\`\`\`

## The datetime Module

\`\`\`python
from datetime import datetime, timedelta

now = datetime.now()
tomorrow = now + timedelta(days=1)
formatted = now.strftime("%B %d, %Y")
\`\`\`

> **Tip:** Use \`json.dumps(data, indent=2)\` for pretty-printed JSON output.`,
    codeExample: `import json\nfrom datetime import datetime\n\n# Sample API-like data\napi_data = json.dumps({\n    "users": [\n        {"id": 1, "name": "Alice", "active": True, "scores": [85, 92, 78]},\n        {"id": 2, "name": "Bob", "active": False, "scores": [90, 88, 95]},\n        {"id": 3, "name": "Charlie", "active": True, "scores": [72, 85, 91]}\n    ],\n    "timestamp": "2024-01-15"\n})\n\n# Parse and analyze\ndata = json.loads(api_data)\nactive_users = [u for u in data["users"] if u["active"]]\n\nprint(f"Total users: {len(data['users'])}")\nprint(f"Active users: {len(active_users)}")\n\nfor user in data["users"]:\n    avg = sum(user["scores"]) / len(user["scores"])\n    status = "Active" if user["active"] else "Inactive"\n    print(f"  {user['name']}: avg={avg:.1f} [{status}]")`,
    exercise: {
      title: "JSON Report",
      description: "Given a JSON string of products, find the most expensive, cheapest, and calculate the average price.",
      starterCode: `import json\n\nproducts_json = '[{"name":"Laptop","price":999},{"name":"Phone","price":699},{"name":"Tablet","price":449},{"name":"Watch","price":299}]'\n\n# Parse JSON\n# Find most expensive\n# Find cheapest\n# Calculate average\n`,
      solution: `import json\n\nproducts_json = '[{"name":"Laptop","price":999},{"name":"Phone","price":699},{"name":"Tablet","price":449},{"name":"Watch","price":299}]'\n\nproducts = json.loads(products_json)\n\nmost_exp = max(products, key=lambda p: p["price"])\ncheapest = min(products, key=lambda p: p["price"])\navg_price = sum(p["price"] for p in products) / len(products)\n\nprint(f"Most expensive: {most_exp['name']} (\${most_exp['price']})")\nprint(f"Cheapest: {cheapest['name']} (\${cheapest['price']})")\nprint(f"Average price: \${avg_price:.2f}")`,
      hint: "Use json.loads() to parse, then max/min with key=lambda, and sum/len for average."
    }
  },
  {
    id: "i10",
    title: "Tuples, Sets & Collections",
    difficulty: "intermediate",
    order: 10,
    description: "Master Python's built-in collection types",
    duration: "15 min",
    content: `Python has several collection types, each with unique properties.

## Tuples (Immutable)

\`\`\`python
point = (3, 4)
x, y = point          # Unpacking
print(point[0])        # 3
colors = ("red",) * 3  # ('red', 'red', 'red')
\`\`\`

## Sets (Unique Values)

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union: {1,2,3,4,5,6}
print(a & b)   # Intersection: {3,4}
print(a - b)   # Difference: {1,2}
print(a ^ b)   # Symmetric diff: {1,2,5,6}
\`\`\`

## Named Tuples

\`\`\`python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)  # 3 4
\`\`\`

## defaultdict

\`\`\`python
from collections import defaultdict

groups = defaultdict(list)
data = [("fruit", "apple"), ("veggie", "carrot"), ("fruit", "banana")]
for category, item in data:
    groups[category].append(item)
# {'fruit': ['apple', 'banana'], 'veggie': ['carrot']}
\`\`\`

> **Tip:** Use tuples for fixed data, sets for unique values and fast lookups, dicts for key-value pairs.`,
    codeExample: `from collections import namedtuple, Counter, defaultdict\n\n# Named tuples\nStudent = namedtuple('Student', ['name', 'grade', 'age'])\nstudents = [\n    Student("Alice", 92, 20),\n    Student("Bob", 85, 22),\n    Student("Charlie", 98, 21),\n]\n\nfor s in students:\n    print(f"{s.name}: grade={s.grade}, age={s.age}")\n\n# Sets\nskills_alice = {"Python", "JavaScript", "SQL"}\nskills_bob = {"Python", "Java", "SQL", "React"}\n\nprint(f"\\nShared skills: {skills_alice & skills_bob}")\nprint(f"All skills: {skills_alice | skills_bob}")\nprint(f"Only Alice: {skills_alice - skills_bob}")`,
    exercise: {
      title: "Set Operations",
      description: "Given two student enrollment lists, find students in both classes, only in class A, and only in class B.",
      starterCode: `class_a = {"Alice", "Bob", "Charlie", "Diana", "Eve"}\nclass_b = {"Charlie", "Eve", "Frank", "Grace", "Bob"}\n\n# In both classes\n# Only in class A\n# Only in class B\n`,
      solution: `class_a = {"Alice", "Bob", "Charlie", "Diana", "Eve"}\nclass_b = {"Charlie", "Eve", "Frank", "Grace", "Bob"}\n\nboth = class_a & class_b\nonly_a = class_a - class_b\nonly_b = class_b - class_a\n\nprint(f"Both classes: {both}")\nprint(f"Only class A: {only_a}")\nprint(f"Only class B: {only_b}")`,
      hint: "Use & for intersection, - for difference between sets."
    }
  },

  // ==================== ADVANCED ====================
  {
    id: "a01",
    title: "Decorators",
    difficulty: "advanced",
    order: 1,
    description: "Modify function behavior with decorators",
    duration: "20 min",
    content: `Decorators wrap functions to extend their behavior without modifying them.

## Basic Decorator

\`\`\`python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(0.1)
    return "done"
\`\`\`

## Decorators with Arguments

\`\`\`python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")
\`\`\`

## Preserving Metadata

\`\`\`python
from functools import wraps

def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
\`\`\`

## Built-in Decorators

\`\`\`python
class MyClass:
    @staticmethod
    def utility():
        pass

    @classmethod
    def create(cls):
        return cls()

    @property
    def name(self):
        return self._name
\`\`\`

> **Tip:** Use \`@wraps(func)\` from functools to preserve the original function's metadata.`,
    codeExample: `from functools import wraps\n\ndef validate_types(*types):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args):\n            for arg, expected in zip(args, types):\n                if not isinstance(arg, expected):\n                    raise TypeError(f"Expected {expected.__name__}, got {type(arg).__name__}")\n            return func(*args)\n        return wrapper\n    return decorator\n\ndef cache(func):\n    memo = {}\n    @wraps(func)\n    def wrapper(*args):\n        if args not in memo:\n            memo[args] = func(*args)\n            print(f"  Computing {func.__name__}{args}")\n        else:\n            print(f"  Cache hit {func.__name__}{args}")\n        return memo[args]\n    return wrapper\n\n@cache\ndef fibonacci(n):\n    if n < 2: return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(f"fib(6) = {fibonacci(6)}")`,
    exercise: {
      title: "Retry Decorator",
      description: "Write a decorator that retries a function up to N times if it raises an exception.",
      starterCode: `import random\nfrom functools import wraps\n\ndef retry(max_attempts):\n    # Your decorator code here\n    pass\n\n@retry(3)\ndef unreliable():\n    if random.random() < 0.7:\n        raise ValueError("Random failure!")\n    return "Success!"\n\nprint(unreliable())`,
      solution: `import random\nfrom functools import wraps\n\ndef retry(max_attempts):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f"  Attempt {attempt} failed: {e}")\n                    if attempt == max_attempts:\n                        raise\n        return wrapper\n    return decorator\n\nrandom.seed(42)\n\n@retry(5)\ndef unreliable():\n    if random.random() < 0.7:\n        raise ValueError("Random failure!")\n    return "Success!"\n\nprint(unreliable())`,
      hint: "Three nested functions: retry(n) -> decorator(func) -> wrapper(*args). Loop attempts with try/except."
    }
  },
  {
    id: "a02",
    title: "Generators & Iterators",
    difficulty: "advanced",
    order: 2,
    description: "Build memory-efficient data pipelines",
    duration: "18 min",
    content: `Generators produce values lazily, saving memory for large datasets.

## Generator Functions

\`\`\`python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num)  # 5, 4, 3, 2, 1
\`\`\`

## Generator Expressions

\`\`\`python
squares = (x**2 for x in range(1000000))
# No memory used until iterated!
print(next(squares))  # 0
print(next(squares))  # 1
\`\`\`

## Iterator Protocol

\`\`\`python
class Fibonacci:
    def __init__(self, limit):
        self.limit = limit
        self.a, self.b = 0, 1
        self.count = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.count >= self.limit:
            raise StopIteration
        value = self.a
        self.a, self.b = self.b, self.a + self.b
        self.count += 1
        return value
\`\`\`

## Chaining Generators

\`\`\`python
def read_lines(text):
    for line in text.split('\\n'):
        yield line.strip()

def filter_empty(lines):
    for line in lines:
        if line:
            yield line

pipeline = filter_empty(read_lines(data))
\`\`\`

> **Tip:** Use generators when working with large datasets. They process one item at a time instead of loading everything into memory.`,
    codeExample: `def fibonacci(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nprint("Fibonacci < 100:")\nprint(list(fibonacci(100)))\n\n# Generator pipeline\ndef numbers(n):\n    for i in range(n):\n        yield i\n\ndef squared(gen):\n    for x in gen:\n        yield x ** 2\n\ndef only_even(gen):\n    for x in gen:\n        if x % 2 == 0:\n            yield x\n\n# Pipeline: generate -> square -> filter even\npipeline = only_even(squared(numbers(10)))\nprint("\\nEven squares:", list(pipeline))\n\n# Generator expression\ntotal = sum(x**2 for x in range(1, 11))\nprint(f"\\nSum of squares 1-10: {total}")`,
    exercise: {
      title: "Batch Generator",
      description: "Write a generator that yields items from a list in batches of a given size.",
      starterCode: `def batched(items, batch_size):\n    # Yield batches\n    pass\n\ndata = list(range(1, 12))\nfor batch in batched(data, 3):\n    print(batch)`,
      solution: `def batched(items, batch_size):\n    for i in range(0, len(items), batch_size):\n        yield items[i:i + batch_size]\n\ndata = list(range(1, 12))\nfor batch in batched(data, 3):\n    print(batch)`,
      hint: "Use range(0, len, batch_size) and yield slices items[i:i+batch_size]."
    }
  },
  {
    id: "a03",
    title: "Context Managers",
    difficulty: "advanced",
    order: 3,
    description: "Manage resources safely with context managers",
    duration: "15 min",
    content: `Context managers ensure proper setup and cleanup of resources.

## The with Statement

\`\`\`python
with open("file.txt") as f:
    data = f.read()
# File is automatically closed
\`\`\`

## Class-Based Context Manager

\`\`\`python
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.time() - self.start
        print(f"Elapsed: {self.elapsed:.4f}s")
        return False  # Don't suppress exceptions

with Timer() as t:
    sum(range(1000000))
\`\`\`

## Using contextlib

\`\`\`python
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Opening {name}")
    try:
        yield name
    finally:
        print(f"Closing {name}")

with managed_resource("database") as r:
    print(f"Using {r}")
\`\`\`

## Suppressing Exceptions

\`\`\`python
from contextlib import suppress

with suppress(FileNotFoundError):
    os.remove("nonexistent.txt")
\`\`\`

> **Tip:** Context managers are ideal for database connections, locks, temporary state changes, and any resource that needs cleanup.`,
    codeExample: `from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef timer(label):\n    start = time.time()\n    print(f"[{label}] Starting...")\n    try:\n        yield\n    finally:\n        elapsed = time.time() - start\n        print(f"[{label}] Done in {elapsed:.4f}s")\n\n@contextmanager\ndef indent_printer(level=1):\n    prefix = "  " * level\n    class Printer:\n        def __call__(self, text):\n            print(f"{prefix}{text}")\n    try:\n        yield Printer()\n    finally:\n        pass\n\nwith timer("Computation"):\n    total = sum(i**2 for i in range(100000))\n    print(f"  Result: {total}")\n\nprint()\nwith indent_printer(2) as p:\n    p("This is indented")\n    p("So is this")`,
    exercise: {
      title: "Transaction Manager",
      description: "Write a context manager that simulates a database transaction with commit/rollback behavior.",
      starterCode: `from contextlib import contextmanager\n\n@contextmanager\ndef transaction(data):\n    # Save backup, yield, commit or rollback\n    pass\n\nmy_data = {"balance": 100}\n\ntry:\n    with transaction(my_data) as t:\n        my_data["balance"] -= 30\n        print(f"During: {my_data}")\nexcept:\n    pass\nprint(f"After success: {my_data}")`,
      solution: `from contextlib import contextmanager\n\n@contextmanager\ndef transaction(data):\n    backup = data.copy()\n    try:\n        yield data\n        print("Transaction committed")\n    except Exception as e:\n        data.clear()\n        data.update(backup)\n        print(f"Transaction rolled back: {e}")\n        raise\n\nmy_data = {"balance": 100}\n\ntry:\n    with transaction(my_data) as t:\n        my_data["balance"] -= 30\n        print(f"During: {my_data}")\nexcept:\n    pass\nprint(f"After success: {my_data}")`,
      hint: "Copy data before yield. If exception occurs in the finally/except, restore from backup."
    }
  },
  {
    id: "a04",
    title: "Concurrency & Threading",
    difficulty: "advanced",
    order: 4,
    description: "Run code in parallel with threads and processes",
    duration: "20 min",
    content: `Python supports concurrent execution through threading and multiprocessing.

## Threading

\`\`\`python
import threading

def worker(name):
    print(f"Thread {name} running")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
\`\`\`

## Thread Pool

\`\`\`python
from concurrent.futures import ThreadPoolExecutor

def fetch_data(url):
    return f"Data from {url}"

with ThreadPoolExecutor(max_workers=3) as executor:
    urls = ["url1", "url2", "url3"]
    results = executor.map(fetch_data, urls)
    for r in results:
        print(r)
\`\`\`

## Threading vs Multiprocessing

- **Threading**: Good for I/O-bound tasks (network, files)
- **Multiprocessing**: Good for CPU-bound tasks (computation)

## Thread Safety

\`\`\`python
import threading

lock = threading.Lock()
counter = 0

def increment():
    global counter
    with lock:
        counter += 1
\`\`\`

> **Tip:** Python's GIL (Global Interpreter Lock) limits true parallelism with threads. Use multiprocessing for CPU-bound work.`,
    codeExample: `from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef process_item(item):\n    # Simulate work\n    result = sum(range(item * 10000))\n    return f"Item {item}: result={result}"\n\n# Sequential\nstart = time.time()\nfor i in range(1, 6):\n    print(process_item(i))\nseq_time = time.time() - start\n\nprint(f"\\nSequential: {seq_time:.4f}s")\n\n# Parallel\nstart = time.time()\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    results = executor.map(process_item, range(1, 6))\n    for r in results:\n        print(r)\npar_time = time.time() - start\n\nprint(f"\\nParallel: {par_time:.4f}s")`,
    exercise: {
      title: "Parallel Map",
      description: "Write a function that applies a transformation to a list of items in parallel using ThreadPoolExecutor.",
      starterCode: `from concurrent.futures import ThreadPoolExecutor\n\ndef parallel_map(func, items, workers=3):\n    # Your code here\n    pass\n\nresults = parallel_map(lambda x: x**2, [1,2,3,4,5])\nprint("Squares:", results)`,
      solution: `from concurrent.futures import ThreadPoolExecutor\n\ndef parallel_map(func, items, workers=3):\n    with ThreadPoolExecutor(max_workers=workers) as executor:\n        return list(executor.map(func, items))\n\nresults = parallel_map(lambda x: x**2, [1,2,3,4,5])\nprint("Squares:", results)\n\nresults2 = parallel_map(lambda s: s.upper(), ["hello", "world"])\nprint("Upper:", results2)`,
      hint: "Use ThreadPoolExecutor with executor.map(func, items) and convert to list."
    }
  },
  {
    id: "a05",
    title: "Async Programming",
    difficulty: "advanced",
    order: 5,
    description: "Write non-blocking code with async/await",
    duration: "20 min",
    content: `Async programming lets you handle many I/O operations efficiently.

## Async Basics

\`\`\`python
import asyncio

async def greet(name):
    await asyncio.sleep(1)
    return f"Hello, {name}!"

async def main():
    result = await greet("Alice")
    print(result)

asyncio.run(main())
\`\`\`

## Running Tasks Concurrently

\`\`\`python
async def fetch(url, delay):
    await asyncio.sleep(delay)
    return f"Data from {url}"

async def main():
    tasks = [
        fetch("url1", 1),
        fetch("url2", 2),
        fetch("url3", 1),
    ]
    results = await asyncio.gather(*tasks)
    # All complete in ~2s instead of ~4s
\`\`\`

## Async Context Managers

\`\`\`python
class AsyncResource:
    async def __aenter__(self):
        print("Acquiring resource")
        return self

    async def __aexit__(self, *args):
        print("Releasing resource")

async def main():
    async with AsyncResource() as r:
        print("Using resource")
\`\`\`

## Async Generators

\`\`\`python
async def countdown(n):
    while n > 0:
        yield n
        await asyncio.sleep(0.5)
        n -= 1
\`\`\`

> **Tip:** Use async for I/O-bound operations like network requests, file I/O, and database queries. Not for CPU-bound work.`,
    codeExample: `import asyncio\n\nasync def fetch_data(source, delay):\n    print(f"  Fetching from {source}...")\n    await asyncio.sleep(delay)\n    return f"Data from {source}"\n\nasync def main():\n    # Sequential (slow)\n    print("Sequential:")\n    for source in ["DB", "API", "Cache"]:\n        result = await fetch_data(source, 0.1)\n        print(f"    Got: {result}")\n\n    # Concurrent (fast)\n    print("\\nConcurrent:")\n    tasks = [\n        fetch_data("DB", 0.1),\n        fetch_data("API", 0.1),\n        fetch_data("Cache", 0.1),\n    ]\n    results = await asyncio.gather(*tasks)\n    for r in results:\n        print(f"    Got: {r}")\n\nasyncio.run(main())`,
    exercise: {
      title: "Async Rate Limiter",
      description: "Write an async function that processes items with a delay between each to simulate rate limiting.",
      starterCode: `import asyncio\n\nasync def rate_limited_process(items, delay=0.5):\n    # Process each item with a delay\n    pass\n\nasync def main():\n    items = ["task1", "task2", "task3", "task4"]\n    results = await rate_limited_process(items, 0.1)\n    print("Results:", results)\n\nasyncio.run(main())`,
      solution: `import asyncio\n\nasync def rate_limited_process(items, delay=0.5):\n    results = []\n    for item in items:\n        await asyncio.sleep(delay)\n        result = f"processed_{item}"\n        print(f"  Processed: {item}")\n        results.append(result)\n    return results\n\nasync def main():\n    items = ["task1", "task2", "task3", "task4"]\n    results = await rate_limited_process(items, 0.1)\n    print("Results:", results)\n\nasyncio.run(main())`,
      hint: "Loop through items, await asyncio.sleep(delay) between each, collect results."
    }
  },
  {
    id: "a06",
    title: "Design Patterns",
    difficulty: "advanced",
    order: 6,
    description: "Implement common software design patterns",
    duration: "22 min",
    content: `Design patterns are proven solutions to common programming problems.

## Singleton

\`\`\`python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
\`\`\`

## Factory

\`\`\`python
class AnimalFactory:
    @staticmethod
    def create(animal_type):
        animals = {"dog": Dog, "cat": Cat}
        return animals[animal_type]()
\`\`\`

## Observer

\`\`\`python
class EventSystem:
    def __init__(self):
        self.listeners = {}

    def on(self, event, callback):
        self.listeners.setdefault(event, []).append(callback)

    def emit(self, event, data=None):
        for cb in self.listeners.get(event, []):
            cb(data)
\`\`\`

## Strategy

\`\`\`python
class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy

    def sort(self, data):
        return self.strategy(data)

sorter = Sorter(strategy=sorted)
sorter = Sorter(strategy=lambda x: sorted(x, reverse=True))
\`\`\`

> **Tip:** Don't force patterns. Use them when they naturally solve your problem.`,
    codeExample: `# Observer Pattern\nclass EventEmitter:\n    def __init__(self):\n        self._events = {}\n\n    def on(self, event, callback):\n        self._events.setdefault(event, []).append(callback)\n\n    def emit(self, event, *args):\n        for cb in self._events.get(event, []):\n            cb(*args)\n\n# Usage\nshop = EventEmitter()\n\ndef log_purchase(item):\n    print(f"  LOG: {item} was purchased")\n\ndef send_email(item):\n    print(f"  EMAIL: Receipt for {item} sent")\n\ndef update_stock(item):\n    print(f"  STOCK: {item} inventory updated")\n\nshop.on("purchase", log_purchase)\nshop.on("purchase", send_email)\nshop.on("purchase", update_stock)\n\nprint("Purchase event:")\nshop.emit("purchase", "Laptop")\nprint("\\nAnother purchase:")\nshop.emit("purchase", "Phone")`,
    exercise: {
      title: "Plugin System",
      description: "Create a simple plugin system where plugins can register and be called by name.",
      starterCode: `class PluginManager:\n    # Your code here\n    pass\n\npm = PluginManager()\n\n@pm.register("uppercase")\ndef to_upper(text):\n    return text.upper()\n\n@pm.register("reverse")\ndef to_reverse(text):\n    return text[::-1]\n\nprint(pm.execute("uppercase", "hello"))\nprint(pm.execute("reverse", "hello"))`,
      solution: `class PluginManager:\n    def __init__(self):\n        self.plugins = {}\n\n    def register(self, name):\n        def decorator(func):\n            self.plugins[name] = func\n            return func\n        return decorator\n\n    def execute(self, name, *args, **kwargs):\n        if name not in self.plugins:\n            raise KeyError(f"Plugin '{name}' not found")\n        return self.plugins[name](*args, **kwargs)\n\npm = PluginManager()\n\n@pm.register("uppercase")\ndef to_upper(text):\n    return text.upper()\n\n@pm.register("reverse")\ndef to_reverse(text):\n    return text[::-1]\n\nprint(pm.execute("uppercase", "hello"))\nprint(pm.execute("reverse", "hello"))`,
      hint: "register() returns a decorator that stores the function in a dict. execute() looks it up and calls it."
    }
  },
  {
    id: "a07",
    title: "Testing with Python",
    difficulty: "advanced",
    order: 7,
    description: "Write reliable tests for your code",
    duration: "18 min",
    content: `Testing ensures your code works correctly and stays reliable.

## Basic Assertions

\`\`\`python
def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(-1, 1) == 0
\`\`\`

## Using unittest

\`\`\`python
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

    def test_negative(self):
        self.assertEqual(add(-1, -1), -2)

    def test_zero(self):
        self.assertEqual(add(0, 0), 0)
\`\`\`

## Common Assertions

\`\`\`python
self.assertEqual(a, b)
self.assertNotEqual(a, b)
self.assertTrue(x)
self.assertFalse(x)
self.assertRaises(TypeError, func, args)
self.assertIn(item, list)
self.assertIsNone(x)
\`\`\`

## Test-Driven Development

1. Write a failing test
2. Write minimal code to pass
3. Refactor

\`\`\`python
# Step 1: Test first
def test_is_palindrome():
    assert is_palindrome("racecar") == True
    assert is_palindrome("hello") == False

# Step 2: Implementation
def is_palindrome(s):
    return s == s[::-1]
\`\`\`

> **Tip:** Write tests for edge cases: empty input, None, negative numbers, very large values.`,
    codeExample: `# Simple test framework (works in browser)\ndef test_runner(test_funcs):\n    passed = 0\n    failed = 0\n    for test in test_funcs:\n        try:\n            test()\n            passed += 1\n            print(f"  PASS: {test.__name__}")\n        except AssertionError as e:\n            failed += 1\n            print(f"  FAIL: {test.__name__}: {e}")\n    print(f"\\nResults: {passed} passed, {failed} failed")\n\n# Code to test\ndef factorial(n):\n    if n < 0: raise ValueError("Negative!")\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\n# Tests\ndef test_factorial_zero():\n    assert factorial(0) == 1\n\ndef test_factorial_one():\n    assert factorial(1) == 1\n\ndef test_factorial_five():\n    assert factorial(5) == 120\n\ndef test_factorial_negative():\n    try:\n        factorial(-1)\n        assert False, "Should have raised"\n    except ValueError:\n        pass\n\ntest_runner([test_factorial_zero, test_factorial_one, test_factorial_five, test_factorial_negative])`,
    exercise: {
      title: "Test Suite",
      description: "Write tests for a Stack class. Test push, pop, peek, is_empty, and edge cases.",
      starterCode: `class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        if not self.items:\n            raise IndexError("Stack is empty")\n        return self.items.pop()\n    def peek(self):\n        if not self.items:\n            return None\n        return self.items[-1]\n    def is_empty(self):\n        return len(self.items) == 0\n\n# Write your tests here\n`,
      solution: `class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        if not self.items:\n            raise IndexError("Stack is empty")\n        return self.items.pop()\n    def peek(self):\n        if not self.items:\n            return None\n        return self.items[-1]\n    def is_empty(self):\n        return len(self.items) == 0\n\n# Tests\ns = Stack()\nassert s.is_empty() == True\n\ns.push(1)\ns.push(2)\ns.push(3)\nassert s.is_empty() == False\nassert s.peek() == 3\nassert s.pop() == 3\nassert s.pop() == 2\nassert s.peek() == 1\nassert s.pop() == 1\nassert s.is_empty() == True\nassert s.peek() is None\n\ntry:\n    s.pop()\n    assert False\nexcept IndexError:\n    pass\n\nprint("All tests passed!")`,
      hint: "Test empty state, push items, verify peek/pop return correct values, test error on empty pop."
    }
  },
  {
    id: "a08",
    title: "Type Hints & Dataclasses",
    difficulty: "advanced",
    order: 8,
    description: "Write type-safe and concise Python code",
    duration: "15 min",
    content: `Type hints and dataclasses make Python code more robust and readable.

## Type Hints

\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}!"

def process(items: list[int]) -> dict[str, int]:
    return {"sum": sum(items), "count": len(items)}
\`\`\`

## Optional and Union

\`\`\`python
from typing import Optional, Union

def find(items: list, target) -> Optional[int]:
    try:
        return items.index(target)
    except ValueError:
        return None

def parse(value: Union[str, int]) -> int:
    return int(value)
\`\`\`

## Dataclasses

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float

    def distance(self) -> float:
        return (self.x**2 + self.y**2) ** 0.5

p = Point(3, 4)
print(p)            # Point(x=3, y=4)
print(p.distance()) # 5.0
\`\`\`

## Advanced Dataclass Features

\`\`\`python
@dataclass(frozen=True)  # Immutable
class Config:
    host: str = "localhost"
    port: int = 8080
    tags: list = field(default_factory=list)
\`\`\`

> **Tip:** Type hints are not enforced at runtime - they're for documentation and tool support (mypy, IDE autocomplete).`,
    codeExample: `from dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    quantity: int = 0\n    tags: list = field(default_factory=list)\n\n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n\n    def apply_discount(self, percent: float) -> float:\n        return self.price * (1 - percent / 100)\n\n@dataclass\nclass Inventory:\n    products: list[Product] = field(default_factory=list)\n\n    def add(self, product: Product) -> None:\n        self.products.append(product)\n\n    def total(self) -> float:\n        return sum(p.total_value for p in self.products)\n\n    def find(self, name: str) -> Optional[Product]:\n        return next((p for p in self.products if p.name == name), None)\n\ninv = Inventory()\ninv.add(Product("Laptop", 999, 5, ["electronics"]))\ninv.add(Product("Phone", 699, 10, ["electronics"]))\ninv.add(Product("Book", 29, 50, ["education"]))\n\nprint(f"Total inventory value: \${inv.total():,.2f}")\nfor p in inv.products:\n    print(f"  {p.name}: \${p.total_value:,.2f}")`,
    exercise: {
      title: "Task Manager",
      description: "Create a dataclass-based Task and TaskManager with add, complete, and list functionality.",
      starterCode: `from dataclasses import dataclass, field\nfrom typing import Optional\n\n# Create Task and TaskManager dataclasses\n`,
      solution: `from dataclasses import dataclass, field\nfrom typing import Optional\n\n@dataclass\nclass Task:\n    title: str\n    priority: int = 1\n    done: bool = False\n\n    def complete(self):\n        self.done = True\n\n@dataclass\nclass TaskManager:\n    tasks: list[Task] = field(default_factory=list)\n\n    def add(self, title: str, priority: int = 1) -> Task:\n        task = Task(title, priority)\n        self.tasks.append(task)\n        return task\n\n    def pending(self) -> list[Task]:\n        return [t for t in self.tasks if not t.done]\n\n    def complete(self, title: str) -> Optional[Task]:\n        for t in self.tasks:\n            if t.title == title:\n                t.complete()\n                return t\n        return None\n\ntm = TaskManager()\ntm.add("Write code", 3)\ntm.add("Write tests", 2)\ntm.add("Deploy", 1)\ntm.complete("Write code")\n\nprint(f"Total: {len(tm.tasks)}")\nprint(f"Pending: {len(tm.pending())}")\nfor t in tm.tasks:\n    status = "Done" if t.done else "Pending"\n    print(f"  [{status}] {t.title} (P{t.priority})")`,
      hint: "Use @dataclass for both classes. Task has title/priority/done. TaskManager has a list of tasks."
    }
  },
  {
    id: "a09",
    title: "Database Operations",
    difficulty: "advanced",
    order: 9,
    description: "Work with SQLite databases in Python",
    duration: "18 min",
    content: `SQLite comes built-in with Python - no installation needed.

## Basic Operations

\`\`\`python
import sqlite3

conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER
    )
""")
\`\`\`

## CRUD Operations

\`\`\`python
# Create
cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))

# Read
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()

# Update
cursor.execute("UPDATE users SET age=? WHERE name=?", (26, "Alice"))

# Delete
cursor.execute("DELETE FROM users WHERE name=?", ("Alice",))

conn.commit()
\`\`\`

## Using Context Manager

\`\`\`python
with sqlite3.connect(":memory:") as conn:
    conn.execute("CREATE TABLE ...")
    conn.execute("INSERT INTO ...")
    # Auto-commits on success
\`\`\`

## Parameterized Queries

Always use \`?\` placeholders to prevent SQL injection:

\`\`\`python
# GOOD - parameterized
cursor.execute("SELECT * FROM users WHERE name=?", (name,))

# BAD - vulnerable to SQL injection!
cursor.execute(f"SELECT * FROM users WHERE name='{name}'")
\`\`\`

> **Tip:** Always use \`:memory:\` for practice and testing. Use parameterized queries to prevent SQL injection.`,
    codeExample: `import sqlite3\n\n# In-memory database\nconn = sqlite3.connect(":memory:")\nconn.row_factory = sqlite3.Row\n\n# Create table\nconn.execute("""\n    CREATE TABLE products (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        price REAL NOT NULL,\n        stock INTEGER DEFAULT 0\n    )\n""")\n\n# Insert data\nproducts = [\n    ("Laptop", 999.99, 15),\n    ("Phone", 699.99, 30),\n    ("Tablet", 449.99, 20),\n    ("Watch", 299.99, 50),\n]\nconn.executemany("INSERT INTO products (name,price,stock) VALUES (?,?,?)", products)\nconn.commit()\n\n# Query\nprint("All products:")\nfor row in conn.execute("SELECT * FROM products ORDER BY price DESC"):\n    print(f"  {row['name']}: \${row['price']:.2f} ({row['stock']} in stock)")\n\n# Aggregate\nresult = conn.execute("SELECT COUNT(*), AVG(price), SUM(stock) FROM products").fetchone()\nprint(f"\\nTotal products: {result[0]}")\nprint(f"Avg price: \${result[1]:.2f}")\nprint(f"Total stock: {result[2]}")\n\nconn.close()`,
    exercise: {
      title: "Student Database",
      description: "Create a student database with name and grade. Insert 5 students, then query the top 3 by grade.",
      starterCode: `import sqlite3\n\nconn = sqlite3.connect(":memory:")\n\n# Create table\n# Insert 5 students\n# Query top 3 by grade\n\nconn.close()`,
      solution: `import sqlite3\n\nconn = sqlite3.connect(":memory:")\n\nconn.execute("CREATE TABLE students (name TEXT, grade REAL)")\n\nstudents = [("Alice", 92), ("Bob", 85), ("Charlie", 98), ("Diana", 76), ("Eve", 91)]\nconn.executemany("INSERT INTO students VALUES (?,?)", students)\nconn.commit()\n\nprint("Top 3 students:")\nfor row in conn.execute("SELECT * FROM students ORDER BY grade DESC LIMIT 3"):\n    print(f"  {row[0]}: {row[1]}")\n\nconn.close()`,
      hint: "CREATE TABLE, executemany for inserts, SELECT with ORDER BY DESC LIMIT 3."
    }
  },
  {
    id: "a10",
    title: "Functional Programming",
    difficulty: "advanced",
    order: 10,
    description: "Apply functional programming concepts in Python",
    duration: "18 min",
    content: `Python supports functional programming paradigms alongside OOP.

## Pure Functions

\`\`\`python
# Pure: same input = same output, no side effects
def add(a, b):
    return a + b

# Impure: uses external state
total = 0
def add_to_total(n):
    global total
    total += n
\`\`\`

## Map, Filter, Reduce

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x*2, numbers))
evens = list(filter(lambda x: x%2==0, numbers))
total = reduce(lambda a, b: a+b, numbers)
\`\`\`

## Function Composition

\`\`\`python
def compose(*funcs):
    def composed(x):
        for f in reversed(funcs):
            x = f(x)
        return x
    return composed

double = lambda x: x * 2
add_one = lambda x: x + 1
transform = compose(double, add_one)  # double(add_one(x))
\`\`\`

## Partial Application

\`\`\`python
from functools import partial

def multiply(a, b):
    return a * b

double = partial(multiply, 2)
triple = partial(multiply, 3)
print(double(5))  # 10
\`\`\`

## Immutable Data

\`\`\`python
# Use tuples instead of lists for immutability
point = (3, 4)
# Use frozenset instead of set
colors = frozenset({"red", "green", "blue"})
\`\`\`

> **Tip:** Combine functional and OOP styles. Python is multi-paradigm - use whatever fits best.`,
    codeExample: `from functools import reduce, partial\n\n# Pipeline processing\ndef pipeline(*funcs):\n    def process(data):\n        result = data\n        for func in funcs:\n            result = func(result)\n        return result\n    return process\n\n# Define transformations\nclean = lambda data: [x.strip().lower() for x in data]\nfilter_short = lambda data: [x for x in data if len(x) > 3]\nsort_alpha = lambda data: sorted(data)\ncapitalize = lambda data: [x.capitalize() for x in data]\n\n# Build pipeline\nprocess_names = pipeline(clean, filter_short, sort_alpha, capitalize)\n\nnames = ["  Alice  ", "  BOB  ", "  Charlie  ", "  Jo  ", "  Eve  "]\nresult = process_names(names)\nprint("Processed:", result)\n\n# Partial application\ndef power(base, exp):\n    return base ** exp\n\nsquare = partial(power, exp=2)\ncube = partial(power, exp=3)\n\nprint(f"\\n5 squared: {square(5)}")\nprint(f"3 cubed: {cube(3)}")\n\n# Reduce examples\nnums = [1, 2, 3, 4, 5]\nproduct = reduce(lambda a, b: a * b, nums)\nprint(f"\\nProduct of {nums}: {product}")`,
    exercise: {
      title: "Data Pipeline",
      description: "Build a pipeline that processes a list of numbers: filter positives, square them, sort descending, take top 3.",
      starterCode: `from functools import reduce\n\nnumbers = [4, -2, 7, -5, 1, 8, -3, 6, 2, -1]\n\n# Build your pipeline\n# 1. Filter positive numbers\n# 2. Square them\n# 3. Sort descending\n# 4. Take top 3\n`,
      solution: `from functools import reduce\n\nnumbers = [4, -2, 7, -5, 1, 8, -3, 6, 2, -1]\n\ndef pipeline(*funcs):\n    def process(data):\n        for func in funcs:\n            data = func(data)\n        return data\n    return process\n\nprocess = pipeline(\n    lambda nums: [n for n in nums if n > 0],\n    lambda nums: [n**2 for n in nums],\n    lambda nums: sorted(nums, reverse=True),\n    lambda nums: nums[:3]\n)\n\nresult = process(numbers)\nprint(f"Input: {numbers}")\nprint(f"Top 3 squared positives: {result}")`,
      hint: "Chain: filter(>0) -> map(x^2) -> sorted(reverse) -> slice[:3]. Use lambdas or named functions."
    }
  }
]

const lessons = [...baseLessons, ...beginnerChallenges, ...beginnerExercises, ...additionalLessonsA, ...conceptLessons, ...projectLessons, ...realWorldProjects, ...dataLessons, ...libraryLessons, ...additionalLessonsB]

export default lessons
