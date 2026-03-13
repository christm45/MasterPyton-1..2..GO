// ──────────────────────────────────────────────────────────
// DATA SCIENCE TRACK - 10 Deep Lessons on Data with Python
// ──────────────────────────────────────────────────────────

export const dataLessons = [
  {
    id: 'd01',
    title: 'Introduction to Data Handling',
    difficulty: 'data',
    order: 1,
    description: 'What is data? How Python represents different types of data and why it matters.',
    duration: '15 min',
    content: `# Introduction to Data Handling

## What Is Data?

Data is information stored in a structured way. In programming, **everything is data** - numbers, text, dates, images, and even your program itself.

Think of data like ingredients in a kitchen:
- **Raw data** = unprocessed ingredients (a bag of flour, eggs, sugar)
- **Processed data** = a finished dish (a cake)
- **Python** = the chef who transforms raw data into something useful

## Types of Data in Python

Python has several built-in data types. Understanding them is the **foundation** of working with data:

| Type | Example | Use Case |
|------|---------|----------|
| \`int\` | \`42\` | Counting, IDs, ages |
| \`float\` | \`3.14\` | Measurements, prices |
| \`str\` | \`"hello"\` | Names, text, labels |
| \`bool\` | \`True\` | Yes/no flags, filters |
| \`list\` | \`[1, 2, 3]\` | Ordered collections |
| \`dict\` | \`{"name": "Ana"}\` | Key-value pairs, records |
| \`tuple\` | \`(1, 2)\` | Fixed data, coordinates |
| \`set\` | \`{1, 2, 3}\` | Unique values, deduplication |

## Why Data Types Matter

\`\`\`python
# The SAME characters behave differently depending on type:
print(5 + 3)         # 8 (number addition)
print("5" + "3")     # "53" (string concatenation!)
print([1] + [2])     # [1, 2] (list concatenation)
\`\`\`

> **Key Insight:** Always know what TYPE your data is. Use \`type()\` to check!

## Checking and Converting Data Types

\`\`\`python
# Check the type of any value
print(type(42))         # <class 'int'>
print(type("hello"))    # <class 'str'>
print(type([1, 2]))     # <class 'list'>

# Convert between types (casting)
number = int("42")      # string -> int
text = str(100)         # int -> string
decimal = float("3.14") # string -> float
items = list("abc")     # string -> list: ['a', 'b', 'c']
\`\`\`

> **Tip:** Converting data types is called **casting**. It's one of the most common operations when processing data from files, user input, or the web.

## Data Structures: Containers for Your Data

Think of data structures as different types of containers:

- **List** = A numbered shelf (ordered, allows duplicates)
- **Dictionary** = A filing cabinet (named drawers, fast lookup)
- **Set** = A bag of unique marbles (no duplicates)
- **Tuple** = A sealed envelope (ordered, can't change)

\`\`\`python
# Each structure has strengths:
students_list = ["Alice", "Bob", "Alice"]  # duplicates OK
students_set = {"Alice", "Bob"}            # auto-removes duplicates
student_info = {"name": "Alice", "age": 20}  # named fields
coordinates = (40.7, -74.0)               # fixed point
\`\`\`

## Real-World Data Example

\`\`\`python
# A simple student record
student = {
    "name": "Alice",
    "age": 20,
    "grades": [85, 92, 78, 95, 88],
    "active": True
}

# Access data
print(student["name"])           # Alice
print(student["grades"][0])      # 85 (first grade)
print(sum(student["grades"]))    # 438 (total)
print(len(student["grades"]))    # 5 (count)
\`\`\``,
    codeExample: `# Exploring Python Data Types
# Run this to see how different types work!

# Numbers
age = 25
temperature = 98.6
print(f"Age: {age} (type: {type(age).__name__})")
print(f"Temp: {temperature} (type: {type(temperature).__name__})")

# Strings
name = "Python Learner"
print(f"Name: {name} (type: {type(name).__name__})")

# Lists - ordered, changeable
grades = [85, 92, 78, 95, 88]
print(f"Grades: {grades}")
print(f"Average: {sum(grades) / len(grades):.1f}")

# Dictionaries - key-value pairs
student = {
    "name": name,
    "age": age,
    "grades": grades
}
print(f"\\nStudent record: {student}")
print(f"Student name: {student['name']}")

# Type checking
print(f"\\nIs age an int? {isinstance(age, int)}")
print(f"Is name a str? {isinstance(name, str)}")
print(f"Is grades a list? {isinstance(grades, list)}")`,
    exercise: {
      title: 'Build a Data Record',
      description: 'Create a dictionary representing a book with title, author, year (int), price (float), genres (list), and available (bool). Print each field with its type.',
      starterCode: `# Create a book record with ALL these fields:
# - title (string)
# - author (string)
# - year (integer)
# - price (float)
# - genres (list of strings)
# - available (boolean)

book = {
    # YOUR CODE HERE
}

# Print each field with its type
# Example: print(f"Title: {book['title']} ({type(book['title']).__name__})")
`,
      solution: `book = {
    "title": "Python Crash Course",
    "author": "Eric Matthes",
    "year": 2023,
    "price": 35.99,
    "genres": ["Programming", "Education", "Technology"],
    "available": True
}

for key, value in book.items():
    print(f"{key}: {value} ({type(value).__name__})")`,
      hint: 'Use curly braces {} for the dictionary. Strings go in quotes, integers are whole numbers, floats have decimals, lists use square brackets [], and booleans are True or False (capitalized!).',
    },
  },

  {
    id: 'd02',
    title: 'Lists as Data Collections',
    difficulty: 'data',
    order: 2,
    description: 'Deep dive into Python lists - the workhorse of data manipulation.',
    duration: '18 min',
    content: `# Lists as Data Collections

## Why Lists Are So Important

Lists are Python's most versatile data structure. Think of a list as a **dynamic array** - an ordered collection that can grow, shrink, and be rearranged.

In data work, lists are everywhere:
- A list of temperatures recorded each hour
- A list of customer names
- A list of test scores
- A list of prices in a shopping cart

## Creating Lists

\`\`\`python
# Different ways to create lists
empty = []                           # empty list
numbers = [1, 2, 3, 4, 5]          # list of ints
mixed = [1, "hello", 3.14, True]   # mixed types (allowed!)
nested = [[1, 2], [3, 4], [5, 6]] # list of lists (2D data!)
from_range = list(range(10))        # [0, 1, 2, ..., 9]
\`\`\`

## Accessing Data in Lists

\`\`\`python
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# Indexing (0-based)
print(fruits[0])     # "apple" (first)
print(fruits[-1])    # "elderberry" (last)
print(fruits[-2])    # "date" (second to last)

# Slicing [start:stop:step]
print(fruits[1:3])   # ["banana", "cherry"] (index 1 and 2)
print(fruits[:3])    # ["apple", "banana", "cherry"] (first 3)
print(fruits[2:])    # ["cherry", "date", "elderberry"] (from index 2)
print(fruits[::2])   # ["apple", "cherry", "elderberry"] (every 2nd)
print(fruits[::-1])  # reversed list!
\`\`\`

> **Key Insight:** Slicing creates a NEW list. The original stays unchanged. This is important for data safety!

## Modifying Lists

\`\`\`python
data = [10, 20, 30, 40, 50]

# Add items
data.append(60)          # [10, 20, 30, 40, 50, 60]
data.insert(0, 5)        # [5, 10, 20, 30, 40, 50, 60]
data.extend([70, 80])    # [5, 10, 20, 30, 40, 50, 60, 70, 80]

# Remove items
data.remove(30)          # removes first occurrence of 30
popped = data.pop()      # removes & returns last item (80)
popped = data.pop(0)     # removes & returns first item (5)
del data[0]              # removes item at index 0

# Modify items
data[0] = 999            # change first item
\`\`\`

## Essential List Operations for Data

\`\`\`python
scores = [85, 92, 78, 95, 88, 72, 90]

# Basic statistics
print(f"Count: {len(scores)}")           # 7
print(f"Sum: {sum(scores)}")             # 600
print(f"Min: {min(scores)}")             # 72
print(f"Max: {max(scores)}")             # 95
print(f"Average: {sum(scores)/len(scores):.1f}")  # 85.7

# Sorting
sorted_asc = sorted(scores)              # new sorted list
sorted_desc = sorted(scores, reverse=True) # descending
scores.sort()                             # sorts in-place (modifies original!)

# Checking membership
print(92 in scores)      # True
print(100 in scores)     # False
print(scores.count(85))  # 1 (how many times 85 appears)
print(scores.index(92))  # index of first 92
\`\`\`

> **Warning:** \`sort()\` modifies the original list. \`sorted()\` creates a new one. In data work, prefer \`sorted()\` to keep your original data safe!

## List Comprehensions: Data Transformation

List comprehensions are a powerful, Pythonic way to create new lists from existing data:

\`\`\`python
# Transform every item
prices = [10, 20, 30, 40, 50]
with_tax = [p * 1.08 for p in prices]

# Filter items
high_scores = [s for s in scores if s >= 85]

# Transform + Filter
formatted = [f"\${p:.2f}" for p in prices if p > 15]
\`\`\`

## Working with 2D Data (Lists of Lists)

\`\`\`python
# A simple spreadsheet-like structure
students = [
    ["Alice", 85, 92, 78],
    ["Bob",   90, 88, 95],
    ["Carol", 78, 85, 82]
]

# Access specific cell: students[row][column]
print(students[0][0])    # "Alice"
print(students[1][2])    # 88 (Bob's second score)

# Get a column (all first scores)
first_scores = [row[1] for row in students]  # [85, 90, 78]
\`\`\``,
    codeExample: `# Lists as Data Collections - Live Demo
temperatures = [72, 68, 75, 80, 77, 65, 70, 82, 78, 73]
print("Daily Temperatures:", temperatures)

# Basic stats
print(f"\\n--- Statistics ---")
print(f"Days recorded: {len(temperatures)}")
print(f"Highest: {max(temperatures)}°F")
print(f"Lowest: {min(temperatures)}°F")
print(f"Average: {sum(temperatures)/len(temperatures):.1f}°F")

# Filtering
hot_days = [t for t in temperatures if t >= 77]
cool_days = [t for t in temperatures if t < 72]
print(f"\\nHot days (>=77): {hot_days} ({len(hot_days)} days)")
print(f"Cool days (<72): {cool_days} ({len(cool_days)} days)")

# Transforming
celsius = [round((t - 32) * 5/9, 1) for t in temperatures]
print(f"\\nIn Celsius: {celsius}")

# Sorting
print(f"\\nSorted (asc): {sorted(temperatures)}")
print(f"Top 3 hottest: {sorted(temperatures, reverse=True)[:3]}")

# 2D data
print(f"\\n--- Weekly Data ---")
weekly = [temperatures[:5], temperatures[5:]]
for i, week in enumerate(weekly):
    avg = sum(week)/len(week)
    print(f"Week {i+1}: {week} (avg: {avg:.1f}°F)")`,
    exercise: {
      title: 'Sales Data Analyzer',
      description: 'Given a list of daily sales amounts, calculate total, average, best day, worst day, above-average days, and create a sorted report.',
      starterCode: `# Daily sales for two weeks
sales = [150, 230, 180, 310, 275, 190, 420, 
         380, 210, 165, 290, 340, 250, 195]

# 1. Calculate total sales
total = # YOUR CODE

# 2. Calculate average daily sales
average = # YOUR CODE

# 3. Find best and worst days (index + value)
best_day = # YOUR CODE (index)
worst_day = # YOUR CODE (index)

# 4. Find all above-average days (list of values)
above_avg = # YOUR CODE

# 5. Create sorted report (highest to lowest)
# Print results
print(f"Total Sales: \${total}")
print(f"Average: \${average:.2f}")
print(f"Best Day: Day {best_day + 1} (\${sales[best_day]})")
print(f"Worst Day: Day {worst_day + 1} (\${sales[worst_day]})")
print(f"Above average days: {len(above_avg)} out of {len(sales)}")
`,
      solution: `sales = [150, 230, 180, 310, 275, 190, 420,
         380, 210, 165, 290, 340, 250, 195]

total = sum(sales)
average = total / len(sales)
best_day = sales.index(max(sales))
worst_day = sales.index(min(sales))
above_avg = [s for s in sales if s > average]

print(f"Total Sales: \${total}")
print(f"Average: \${average:.2f}")
print(f"Best Day: Day {best_day + 1} (\${sales[best_day]})")
print(f"Worst Day: Day {worst_day + 1} (\${sales[worst_day]})")
print(f"Above average days: {len(above_avg)} out of {len(sales)}")
print(f"\\nTop 5 sales days: {sorted(sales, reverse=True)[:5]}")`,
      hint: 'Use sum() for total, len() for count, max()/min() for extremes, .index() to find position, and a list comprehension with a condition for filtering.',
    },
  },

  {
    id: 'd03',
    title: 'Dictionaries for Data Storage',
    difficulty: 'data',
    order: 3,
    description: 'Master dictionaries - the most powerful data structure for organizing real-world data.',
    duration: '18 min',
    content: `# Dictionaries for Data Storage

## Why Dictionaries Are Essential

If lists are like numbered shelves, **dictionaries are like filing cabinets** - each drawer has a label (key) and contents (value). They give your data **meaning**.

\`\`\`python
# List: you must REMEMBER what each position means
person_list = ["Alice", 25, "alice@email.com"]  # what's index 1?

# Dictionary: the data TELLS you what it means
person_dict = {"name": "Alice", "age": 25, "email": "alice@email.com"}
\`\`\`

## Creating Dictionaries

\`\`\`python
# Method 1: Curly braces (most common)
student = {"name": "Bob", "grade": 92}

# Method 2: dict() constructor
student = dict(name="Bob", grade=92)

# Method 3: From pairs
student = dict([("name", "Bob"), ("grade", 92)])

# Method 4: Dictionary comprehension
squares = {n: n**2 for n in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
\`\`\`

## Accessing and Modifying Data

\`\`\`python
product = {"name": "Laptop", "price": 999.99, "stock": 50}

# Access
print(product["name"])          # "Laptop"
print(product.get("color", "N/A"))  # "N/A" (safe access with default)

# Modify
product["price"] = 899.99       # update existing
product["color"] = "Silver"     # add new key

# Remove
del product["stock"]            # remove key
color = product.pop("color")    # remove and return value

# Check existence
print("name" in product)        # True
print("weight" in product)      # False
\`\`\`

> **Tip:** Always use \`.get(key, default)\` when you're not sure if a key exists. It prevents KeyError crashes!

## Iterating Over Dictionaries

\`\`\`python
scores = {"Alice": 92, "Bob": 85, "Carol": 95}

# Keys only
for name in scores:
    print(name)

# Values only
for score in scores.values():
    print(score)

# Both keys and values (most useful!)
for name, score in scores.items():
    print(f"{name}: {score}")
\`\`\`

## Nested Dictionaries: Real-World Data

\`\`\`python
# A database of students
database = {
    "S001": {
        "name": "Alice",
        "age": 20,
        "courses": ["Math", "Science"],
        "gpa": 3.8
    },
    "S002": {
        "name": "Bob",
        "age": 22,
        "courses": ["English", "History"],
        "gpa": 3.5
    }
}

# Access nested data
print(database["S001"]["name"])            # "Alice"
print(database["S001"]["courses"][0])      # "Math"
\`\`\`

## Powerful Dictionary Methods

\`\`\`python
# Merge dictionaries
defaults = {"color": "blue", "size": "medium", "quantity": 1}
custom = {"color": "red", "quantity": 5}
order = {**defaults, **custom}
# {"color": "red", "size": "medium", "quantity": 5}

# Count occurrences (common data pattern!)
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1
# {"apple": 3, "banana": 2, "cherry": 1}
\`\`\`

> **Key Pattern:** The \`counts[key] = counts.get(key, 0) + 1\` pattern is used constantly in data processing. It counts how often each item appears.`,
    codeExample: `# Dictionaries for Data - Live Demo
# Building a mini student database

students = {
    "Alice": {"math": 92, "science": 88, "english": 95},
    "Bob":   {"math": 78, "science": 85, "english": 72},
    "Carol": {"math": 95, "science": 92, "english": 90},
    "Dave":  {"math": 68, "science": 75, "english": 80},
}

print("=== Student Report ===\\n")

# Calculate average for each student
for name, grades in students.items():
    avg = sum(grades.values()) / len(grades)
    status = "Pass" if avg >= 75 else "Needs Help"
    print(f"{name}: avg={avg:.1f} [{status}]")

# Find subject averages
print("\\n=== Subject Averages ===")
subjects = ["math", "science", "english"]
for subject in subjects:
    scores = [s[subject] for s in students.values()]
    avg = sum(scores) / len(scores)
    print(f"{subject.title()}: {avg:.1f}")

# Find top student per subject
print("\\n=== Top Students ===")
for subject in subjects:
    top = max(students.items(), key=lambda x: x[1][subject])
    print(f"{subject.title()}: {top[0]} ({top[1][subject]})")

# Count grade distribution
print("\\n=== Grade Distribution ===")
all_grades = [g for s in students.values() for g in s.values()]
distribution = {"A (90+)": 0, "B (80-89)": 0, "C (70-79)": 0, "D (<70)": 0}
for g in all_grades:
    if g >= 90: distribution["A (90+)"] += 1
    elif g >= 80: distribution["B (80-89)"] += 1
    elif g >= 70: distribution["C (70-79)"] += 1
    else: distribution["D (<70)"] += 1

for grade, count in distribution.items():
    bar = "#" * count
    print(f"  {grade}: {bar} ({count})")`,
    exercise: {
      title: 'Inventory Management System',
      description: 'Create a product inventory using dictionaries. Implement functions to add products, update stock, find expensive items, and calculate total inventory value.',
      starterCode: `# Product inventory
inventory = {
    "laptop": {"price": 999.99, "stock": 25},
    "mouse": {"price": 29.99, "stock": 150},
    "keyboard": {"price": 79.99, "stock": 75},
    "monitor": {"price": 349.99, "stock": 40},
    "headset": {"price": 59.99, "stock": 100},
}

# 1. Calculate total inventory value (price * stock for each)
total_value = # YOUR CODE
print(f"Total inventory value: \${total_value:,.2f}")

# 2. Find the most expensive product
most_expensive = # YOUR CODE
print(f"Most expensive: {most_expensive}")

# 3. Find products with stock < 50
low_stock = # YOUR CODE
print(f"Low stock items: {low_stock}")

# 4. Add a new product "webcam" with price 89.99, stock 60
# YOUR CODE

# 5. Calculate average price across all products
avg_price = # YOUR CODE
print(f"Average price: \${avg_price:.2f}")
`,
      solution: `inventory = {
    "laptop": {"price": 999.99, "stock": 25},
    "mouse": {"price": 29.99, "stock": 150},
    "keyboard": {"price": 79.99, "stock": 75},
    "monitor": {"price": 349.99, "stock": 40},
    "headset": {"price": 59.99, "stock": 100},
}

total_value = sum(p["price"] * p["stock"] for p in inventory.values())
print(f"Total inventory value: \${total_value:,.2f}")

most_expensive = max(inventory.items(), key=lambda x: x[1]["price"])[0]
print(f"Most expensive: {most_expensive}")

low_stock = {k: v["stock"] for k, v in inventory.items() if v["stock"] < 50}
print(f"Low stock items: {low_stock}")

inventory["webcam"] = {"price": 89.99, "stock": 60}

avg_price = sum(p["price"] for p in inventory.values()) / len(inventory)
print(f"Average price: \${avg_price:.2f}")`,
      hint: 'Use sum() with a generator expression for totals. Use max() with a key function for finding extremes. Dictionary comprehensions work great for filtering.',
    },
  },

  {
    id: 'd04',
    title: 'Reading & Parsing CSV Data',
    difficulty: 'data',
    order: 4,
    description: 'Learn to read, parse, and process CSV (comma-separated values) data - the most common data format.',
    duration: '20 min',
    content: `# Reading & Parsing CSV Data

## What Is CSV?

CSV (Comma-Separated Values) is the **most common data format** in the world. It's a simple text file where:
- Each line is a **row** (record)
- Values in each row are separated by **commas**
- The first row is usually **headers** (column names)

\`\`\`
name,age,city,salary
Alice,30,New York,75000
Bob,25,Chicago,55000
Carol,35,Boston,85000
\`\`\`

## Parsing CSV Manually

Understanding how to parse CSV yourself teaches you fundamental data processing:

\`\`\`python
# Raw CSV data (as a string)
csv_data = """name,age,city,salary
Alice,30,New York,75000
Bob,25,Chicago,55000
Carol,35,Boston,85000"""

# Step 1: Split into lines
lines = csv_data.strip().split("\\n")

# Step 2: Extract headers
headers = lines[0].split(",")

# Step 3: Parse each data row into a dictionary
records = []
for line in lines[1:]:
    values = line.split(",")
    record = dict(zip(headers, values))
    records.append(record)

# Now each record is a meaningful dictionary!
print(records[0])
# {"name": "Alice", "age": "30", "city": "New York", "salary": "75000"}
\`\`\`

> **Key Insight:** After parsing, values are still STRINGS. You need to convert numbers manually: \`int(record["age"])\`

## Type Conversion After Parsing

\`\`\`python
# Convert string values to proper types
for record in records:
    record["age"] = int(record["age"])
    record["salary"] = int(record["salary"])

# Now you can do math!
avg_salary = sum(r["salary"] for r in records) / len(records)
\`\`\`

## Building a CSV Parser Function

\`\`\`python
def parse_csv(csv_string, type_map=None):
    """Parse CSV string into list of dictionaries.
    
    Args:
        csv_string: Raw CSV text
        type_map: Dict mapping column names to types
                  e.g., {"age": int, "salary": float}
    """
    lines = csv_string.strip().split("\\n")
    headers = [h.strip() for h in lines[0].split(",")]
    records = []
    
    for line in lines[1:]:
        values = [v.strip() for v in line.split(",")]
        record = dict(zip(headers, values))
        
        # Apply type conversions
        if type_map:
            for col, dtype in type_map.items():
                if col in record:
                    try:
                        record[col] = dtype(record[col])
                    except ValueError:
                        pass  # keep as string if conversion fails
        
        records.append(record)
    
    return records
\`\`\`

## Querying Parsed Data

Once parsed, you can query your data like a simple database:

\`\`\`python
# Filter: find all people in New York
ny_people = [r for r in records if r["city"] == "New York"]

# Sort: by salary descending
by_salary = sorted(records, key=lambda r: r["salary"], reverse=True)

# Aggregate: average salary by city
from collections import defaultdict
city_salaries = defaultdict(list)
for r in records:
    city_salaries[r["city"]].append(r["salary"])

for city, salaries in city_salaries.items():
    print(f"{city}: avg=\${sum(salaries)/len(salaries):,.0f}")
\`\`\`

> **Tip:** The pattern of Parse -> Filter -> Transform -> Aggregate is the heart of all data processing!`,
    codeExample: `# CSV Parsing - Live Demo
# Let's parse and analyze employee data!

csv_data = """name,department,salary,years
Alice,Engineering,85000,5
Bob,Marketing,62000,3
Carol,Engineering,92000,8
Dave,Marketing,58000,2
Eve,Engineering,78000,4
Frank,Sales,71000,6
Grace,Sales,68000,3
Hank,Marketing,65000,5"""

# Parse CSV
lines = csv_data.strip().split("\\n")
headers = lines[0].split(",")
employees = []
for line in lines[1:]:
    values = line.split(",")
    emp = dict(zip(headers, values))
    emp["salary"] = int(emp["salary"])
    emp["years"] = int(emp["years"])
    employees.append(emp)

print(f"Loaded {len(employees)} employees\\n")

# Department summary
departments = {}
for emp in employees:
    dept = emp["department"]
    if dept not in departments:
        departments[dept] = {"count": 0, "total_salary": 0, "salaries": []}
    departments[dept]["count"] += 1
    departments[dept]["total_salary"] += emp["salary"]
    departments[dept]["salaries"].append(emp["salary"])

print("=== Department Report ===")
for dept, info in departments.items():
    avg = info["total_salary"] / info["count"]
    print(f"{dept}:")
    print(f"  Employees: {info['count']}")
    print(f"  Avg Salary: \${avg:,.0f}")
    print(f"  Range: \${min(info['salaries']):,} - \${max(info['salaries']):,}")

# Top earners
print("\\n=== Top 3 Earners ===")
top = sorted(employees, key=lambda e: e["salary"], reverse=True)[:3]
for i, emp in enumerate(top, 1):
    print(f"  {i}. {emp['name']} ({emp['department']}): \${emp['salary']:,}")

# Experience analysis
print("\\n=== Salary vs Experience ===")
for emp in sorted(employees, key=lambda e: e["years"]):
    bar = "#" * (emp["salary"] // 5000)
    print(f"  {emp['name']:6} ({emp['years']}yr): {bar} \${emp['salary']:,}")`,
    exercise: {
      title: 'CSV Data Explorer',
      description: 'Parse the weather CSV data, then find: average temperature, rainiest day, hottest day, count of sunny days, and days above 75°F.',
      starterCode: `# Weather data CSV
weather_csv = """date,temp_f,humidity,rainfall_in,condition
2024-01-01,72,65,0.0,Sunny
2024-01-02,68,70,0.2,Cloudy
2024-01-03,75,80,1.5,Rainy
2024-01-04,80,60,0.0,Sunny
2024-01-05,77,55,0.0,Sunny
2024-01-06,65,85,2.1,Rainy
2024-01-07,70,75,0.3,Cloudy
2024-01-08,82,50,0.0,Sunny
2024-01-09,78,62,0.0,Sunny
2024-01-10,73,78,0.8,Cloudy"""

# 1. Parse the CSV into a list of dictionaries
#    Convert temp_f to int, humidity to int, rainfall_in to float
days = []
# YOUR CODE HERE

# 2. Find average temperature
avg_temp = # YOUR CODE
print(f"Average temp: {avg_temp:.1f}°F")

# 3. Find the rainiest day
rainiest = # YOUR CODE
print(f"Rainiest day: {rainiest['date']} ({rainiest['rainfall_in']} inches)")

# 4. Count sunny days
sunny_count = # YOUR CODE
print(f"Sunny days: {sunny_count}")

# 5. Find all days above 75°F
hot_days = # YOUR CODE
print(f"Hot days (>75°F): {[d['date'] for d in hot_days]}")
`,
      solution: `weather_csv = """date,temp_f,humidity,rainfall_in,condition
2024-01-01,72,65,0.0,Sunny
2024-01-02,68,70,0.2,Cloudy
2024-01-03,75,80,1.5,Rainy
2024-01-04,80,60,0.0,Sunny
2024-01-05,77,55,0.0,Sunny
2024-01-06,65,85,2.1,Rainy
2024-01-07,70,75,0.3,Cloudy
2024-01-08,82,50,0.0,Sunny
2024-01-09,78,62,0.0,Sunny
2024-01-10,73,78,0.8,Cloudy"""

lines = weather_csv.strip().split("\\n")
headers = lines[0].split(",")
days = []
for line in lines[1:]:
    values = line.split(",")
    day = dict(zip(headers, values))
    day["temp_f"] = int(day["temp_f"])
    day["humidity"] = int(day["humidity"])
    day["rainfall_in"] = float(day["rainfall_in"])
    days.append(day)

avg_temp = sum(d["temp_f"] for d in days) / len(days)
print(f"Average temp: {avg_temp:.1f}°F")

rainiest = max(days, key=lambda d: d["rainfall_in"])
print(f"Rainiest day: {rainiest['date']} ({rainiest['rainfall_in']} inches)")

sunny_count = sum(1 for d in days if d["condition"] == "Sunny")
print(f"Sunny days: {sunny_count}")

hot_days = [d for d in days if d["temp_f"] > 75]
print(f"Hot days (>75°F): {[d['date'] for d in hot_days]}")`,
      hint: 'Split the CSV by newlines, then by commas. Use dict(zip(headers, values)) to create dictionaries. Remember to convert numeric strings to int/float!',
    },
  },

  {
    id: 'd05',
    title: 'Data Cleaning Techniques',
    difficulty: 'data',
    order: 5,
    description: 'Learn to clean messy data - handling missing values, duplicates, inconsistent formats, and outliers.',
    duration: '20 min',
    content: `# Data Cleaning Techniques

## Why Data Cleaning Matters

In the real world, data is **messy**. Studies show data scientists spend **60-80% of their time** just cleaning data! Common problems:

- Missing values ("", None, "N/A")
- Inconsistent formatting ("new york", "New York", "NEW YORK")
- Duplicates
- Wrong data types ("25" instead of 25)
- Outliers (age of 999)
- Extra whitespace

> **Golden Rule:** Garbage in, garbage out. Clean data = reliable results.

## Handling Missing Values

\`\`\`python
records = [
    {"name": "Alice", "age": 25, "score": 92},
    {"name": "Bob", "age": None, "score": 85},
    {"name": "", "age": 30, "score": None},
    {"name": "Dave", "age": 28, "score": 90},
]

# Strategy 1: Skip records with missing values
clean = [r for r in records if all(r.values())]

# Strategy 2: Fill with defaults
for r in records:
    if r["age"] is None:
        r["age"] = 0  # or calculate average
    if r["score"] is None:
        r["score"] = 0
    if not r["name"]:
        r["name"] = "Unknown"

# Strategy 3: Fill with average (for numbers)
ages = [r["age"] for r in records if r["age"] is not None]
avg_age = sum(ages) / len(ages) if ages else 0
for r in records:
    if r["age"] is None:
        r["age"] = round(avg_age)
\`\`\`

## Cleaning Strings

\`\`\`python
# Common string cleaning operations
def clean_string(text):
    if not text:
        return ""
    text = text.strip()          # remove whitespace
    text = text.lower()          # normalize case
    text = " ".join(text.split()) # fix multiple spaces
    return text

# Example
cities = ["  New York ", "new york", "NEW YORK", "  New  York"]
cleaned = [clean_string(c) for c in cities]
# All become: "new york"
unique_cities = list(set(cleaned))  # ["new york"]
\`\`\`

## Removing Duplicates

\`\`\`python
# Simple deduplication
names = ["Alice", "Bob", "Alice", "Carol", "Bob"]
unique = list(dict.fromkeys(names))  # preserves order!
# ["Alice", "Bob", "Carol"]

# Dedup dictionaries by a key
records = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 1, "name": "Alice"},  # duplicate!
]
seen = set()
unique_records = []
for r in records:
    if r["id"] not in seen:
        seen.add(r["id"])
        unique_records.append(r)
\`\`\`

## Detecting and Handling Outliers

\`\`\`python
def find_outliers(values, threshold=2):
    """Find values that are more than threshold standard deviations from mean."""
    avg = sum(values) / len(values)
    variance = sum((x - avg) ** 2 for x in values) / len(values)
    std_dev = variance ** 0.5
    
    outliers = []
    for v in values:
        if abs(v - avg) > threshold * std_dev:
            outliers.append(v)
    return outliers

ages = [25, 30, 22, 28, 999, 31, 27, 24, 26]  # 999 is an outlier!
print(find_outliers(ages))  # [999]
\`\`\`

## Data Validation

\`\`\`python
def validate_record(record):
    """Validate a person record, return list of errors."""
    errors = []
    
    if not record.get("name") or not record["name"].strip():
        errors.append("Name is required")
    
    age = record.get("age")
    if age is None:
        errors.append("Age is required")
    elif not isinstance(age, int) or age < 0 or age > 150:
        errors.append(f"Invalid age: {age}")
    
    email = record.get("email", "")
    if email and "@" not in email:
        errors.append(f"Invalid email: {email}")
    
    return errors
\`\`\`

> **Best Practice:** Always validate data at the point of entry. It's much easier to prevent bad data than to fix it later.`,
    codeExample: `# Data Cleaning - Live Demo
# Let's clean a messy dataset!

messy_data = [
    {"name": "  Alice  ", "age": "25", "city": "new york", "score": "92"},
    {"name": "BOB", "age": "30", "city": "New York", "score": ""},
    {"name": "alice", "age": "25", "city": "  New York ", "score": "92"},
    {"name": "Carol", "age": "999", "city": "chicago", "score": "85"},
    {"name": "", "age": "28", "city": "Chicago", "score": "78"},
    {"name": "Dave", "age": "35", "city": "CHICAGO", "score": "90"},
    {"name": "Eve", "age": "abc", "city": "boston", "score": "88"},
]

print(f"Raw records: {len(messy_data)}\\n")

# Step 1: Clean strings
print("Step 1: Cleaning strings...")
for r in messy_data:
    r["name"] = r["name"].strip().title()
    r["city"] = r["city"].strip().title()

# Step 2: Convert types safely
print("Step 2: Converting types...")
for r in messy_data:
    try:
        r["age"] = int(r["age"])
    except (ValueError, TypeError):
        r["age"] = None
    try:
        r["score"] = int(r["score"]) if r["score"] else None
    except (ValueError, TypeError):
        r["score"] = None

# Step 3: Validate
print("Step 3: Validating...")
valid = []
issues = []
for r in messy_data:
    problems = []
    if not r["name"]:
        problems.append("missing name")
    if r["age"] is None:
        problems.append("invalid age")
    elif r["age"] > 150:
        problems.append(f"age outlier ({r['age']})")
    if r["score"] is None:
        problems.append("missing score")
    
    if problems:
        issues.append((r, problems))
    else:
        valid.append(r)

# Step 4: Remove duplicates
seen = set()
unique = []
for r in valid:
    key = (r["name"], r["city"])
    if key not in seen:
        seen.add(key)
        unique.append(r)

# Report
print(f"\\n=== Cleaning Report ===")
print(f"Original records: {len(messy_data)}")
print(f"Valid records: {len(valid)}")
print(f"After dedup: {len(unique)}")
print(f"Removed: {len(messy_data) - len(unique)}")

print(f"\\n--- Issues Found ---")
for r, probs in issues:
    print(f"  {r}: {', '.join(probs)}")

print(f"\\n--- Clean Data ---")
for r in unique:
    print(f"  {r['name']:10} | Age: {r['age']:3} | {r['city']:10} | Score: {r['score']}")`,
    exercise: {
      title: 'Data Cleaning Pipeline',
      description: 'Clean the messy email list: strip whitespace, normalize to lowercase, remove invalid emails (must contain @ and .), remove duplicates, and sort alphabetically.',
      starterCode: `# Messy email list
emails = [
    "  Alice@Email.com  ",
    "bob@gmail.com",
    "ALICE@email.com",
    "invalid-email",
    "carol@yahoo.com",
    "",
    "bob@gmail.com  ",
    "   dave@outlook.com",
    "not.an.email",
    "Eve@Company.Org",
    None,
    "carol@yahoo.com",
    "  frank@test.com  ",
]

# 1. Clean: strip whitespace and lowercase
# 2. Remove None and empty strings
# 3. Validate: must contain both '@' and '.'
# 4. Remove duplicates (preserve order)
# 5. Sort alphabetically

clean_emails = []
invalid_emails = []

# YOUR CODE HERE

print(f"Original: {len(emails)} entries")
print(f"Valid & unique: {len(clean_emails)} emails")
print(f"Removed: {len(emails) - len(clean_emails)}")
print(f"\\nClean emails:")
for email in clean_emails:
    print(f"  {email}")
print(f"\\nInvalid entries:")
for entry in invalid_emails:
    print(f"  {repr(entry)}")
`,
      solution: `emails = [
    "  Alice@Email.com  ",
    "bob@gmail.com",
    "ALICE@email.com",
    "invalid-email",
    "carol@yahoo.com",
    "",
    "bob@gmail.com  ",
    "   dave@outlook.com",
    "not.an.email",
    "Eve@Company.Org",
    None,
    "carol@yahoo.com",
    "  frank@test.com  ",
]

clean_emails = []
invalid_emails = []

seen = set()
for email in emails:
    if email is None or not email.strip():
        invalid_emails.append(email)
        continue
    
    cleaned = email.strip().lower()
    
    if "@" not in cleaned or "." not in cleaned:
        invalid_emails.append(email)
        continue
    
    if cleaned not in seen:
        seen.add(cleaned)
        clean_emails.append(cleaned)

clean_emails.sort()

print(f"Original: {len(emails)} entries")
print(f"Valid & unique: {len(clean_emails)} emails")
print(f"Removed: {len(emails) - len(clean_emails)}")
print(f"\\nClean emails:")
for email in clean_emails:
    print(f"  {email}")
print(f"\\nInvalid entries:")
for entry in invalid_emails:
    print(f"  {repr(entry)}")`,
      hint: 'Loop through each email. First check for None/empty. Then strip() and lower(). Validate with "in" operator. Use a set to track seen emails for dedup. Finally sort() the result.',
    },
  },

  {
    id: 'd06',
    title: 'Data Filtering & Searching',
    difficulty: 'data',
    order: 6,
    description: 'Master filtering, searching, and querying data - like SQL but in pure Python.',
    duration: '18 min',
    content: `# Data Filtering & Searching

## The Power of Filtering

Filtering is **selecting only the data you need** from a larger dataset. Think of it as asking questions to your data:
- "Which products cost more than $50?"
- "Who scored above 90?"
- "What happened last week?"

## Basic Filtering with List Comprehensions

\`\`\`python
products = [
    {"name": "Laptop", "price": 999, "category": "Electronics"},
    {"name": "Book", "price": 15, "category": "Education"},
    {"name": "Phone", "price": 699, "category": "Electronics"},
    {"name": "Pen", "price": 2, "category": "Office"},
    {"name": "Tablet", "price": 499, "category": "Electronics"},
]

# Single condition
expensive = [p for p in products if p["price"] > 100]
electronics = [p for p in products if p["category"] == "Electronics"]

# Multiple conditions (AND)
expensive_electronics = [
    p for p in products 
    if p["price"] > 100 and p["category"] == "Electronics"
]

# Multiple conditions (OR)
cheap_or_office = [
    p for p in products
    if p["price"] < 20 or p["category"] == "Office"
]
\`\`\`

## The filter() Function

\`\`\`python
# filter() is an alternative to list comprehensions
def is_expensive(product):
    return product["price"] > 100

expensive = list(filter(is_expensive, products))

# With lambda (anonymous function)
expensive = list(filter(lambda p: p["price"] > 100, products))
\`\`\`

> **When to use which?** List comprehensions are more Pythonic and readable for simple filters. Use filter() when you have a complex, reusable filter function.

## Building a Query System

\`\`\`python
def query(data, **conditions):
    """Filter data by multiple conditions.
    
    Usage: query(products, category="Electronics", min_price=100)
    """
    results = data
    
    for key, value in conditions.items():
        if key.startswith("min_"):
            field = key[4:]
            results = [r for r in results if r.get(field, 0) >= value]
        elif key.startswith("max_"):
            field = key[4:]
            results = [r for r in results if r.get(field, 0) <= value]
        elif key.startswith("contains_"):
            field = key[9:]
            results = [r for r in results if value.lower() in r.get(field, "").lower()]
        else:
            results = [r for r in results if r.get(key) == value]
    
    return results

# Use it like a mini database!
result = query(products, category="Electronics", min_price=500)
\`\`\`

## Searching in Data

\`\`\`python
# Text search (case-insensitive)
def search(data, field, term):
    term = term.lower()
    return [r for r in data if term in str(r.get(field, "")).lower()]

# Find products with "top" in name
results = search(products, "name", "top")

# Binary search for sorted data (much faster for large datasets)
def binary_search(sorted_list, target):
    low, high = 0, len(sorted_list) - 1
    while low <= high:
        mid = (low + high) // 2
        if sorted_list[mid] == target:
            return mid
        elif sorted_list[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
\`\`\`

## Grouping Data

\`\`\`python
def group_by(data, key):
    """Group records by a field value."""
    groups = {}
    for record in data:
        group_key = record[key]
        if group_key not in groups:
            groups[group_key] = []
        groups[group_key].append(record)
    return groups

# Group products by category
by_category = group_by(products, "category")
for cat, items in by_category.items():
    print(f"{cat}: {len(items)} products")
\`\`\`

## Chaining Operations

The real power comes from chaining filter -> transform -> aggregate:

\`\`\`python
# Question: "What's the average price of electronics over $100?"
result = (
    sum(p["price"] for p in products 
        if p["category"] == "Electronics" and p["price"] > 100)
    / len([p for p in products 
           if p["category"] == "Electronics" and p["price"] > 100])
)
\`\`\``,
    codeExample: `# Data Filtering & Searching - Live Demo

employees = [
    {"name": "Alice", "dept": "Engineering", "salary": 95000, "years": 5},
    {"name": "Bob", "dept": "Marketing", "salary": 62000, "years": 3},
    {"name": "Carol", "dept": "Engineering", "salary": 105000, "years": 8},
    {"name": "Dave", "dept": "Sales", "salary": 55000, "years": 1},
    {"name": "Eve", "dept": "Engineering", "salary": 88000, "years": 4},
    {"name": "Frank", "dept": "Marketing", "salary": 70000, "years": 6},
    {"name": "Grace", "dept": "Sales", "salary": 75000, "years": 5},
    {"name": "Hank", "dept": "Engineering", "salary": 115000, "years": 10},
]

# Filter: High earners
print("=== High Earners (>$80k) ===")
high_earners = [e for e in employees if e["salary"] > 80000]
for e in high_earners:
    print(f"  {e['name']}: \${e['salary']:,} ({e['dept']})")

# Filter: Engineering with 5+ years
print("\\n=== Senior Engineers (5+ years) ===")
senior_eng = [e for e in employees 
              if e["dept"] == "Engineering" and e["years"] >= 5]
for e in senior_eng:
    print(f"  {e['name']}: {e['years']} years, \${e['salary']:,}")

# Group by department
print("\\n=== Department Summary ===")
departments = {}
for e in employees:
    dept = e["dept"]
    if dept not in departments:
        departments[dept] = []
    departments[dept].append(e)

for dept, members in departments.items():
    avg_sal = sum(e["salary"] for e in members) / len(members)
    avg_yrs = sum(e["years"] for e in members) / len(members)
    print(f"  {dept}: {len(members)} people, avg \${avg_sal:,.0f}, avg {avg_yrs:.1f} yrs")

# Search
print("\\n=== Search: names containing 'a' ===")
matches = [e for e in employees if 'a' in e["name"].lower()]
for e in matches:
    print(f"  {e['name']}")

# Complex query: top earner per department
print("\\n=== Top Earner Per Department ===")
for dept, members in departments.items():
    top = max(members, key=lambda e: e["salary"])
    print(f"  {dept}: {top['name']} (\${top['salary']:,})")`,
    exercise: {
      title: 'Movie Database Query System',
      description: 'Build a query system for a movie database. Implement filter by genre, year range, minimum rating, and a search by title function.',
      starterCode: `movies = [
    {"title": "The Matrix", "year": 1999, "genre": "Sci-Fi", "rating": 8.7},
    {"title": "Inception", "year": 2010, "genre": "Sci-Fi", "rating": 8.8},
    {"title": "The Godfather", "year": 1972, "genre": "Crime", "rating": 9.2},
    {"title": "Pulp Fiction", "year": 1994, "genre": "Crime", "rating": 8.9},
    {"title": "Toy Story", "year": 1995, "genre": "Animation", "rating": 8.3},
    {"title": "The Dark Knight", "year": 2008, "genre": "Action", "rating": 9.0},
    {"title": "Forrest Gump", "year": 1994, "genre": "Drama", "rating": 8.8},
    {"title": "Finding Nemo", "year": 2003, "genre": "Animation", "rating": 8.2},
    {"title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "rating": 8.6},
    {"title": "The Shawshank Redemption", "year": 1994, "genre": "Drama", "rating": 9.3},
]

# 1. Filter by genre - find all Sci-Fi movies
scifi = # YOUR CODE
print("Sci-Fi movies:", [m["title"] for m in scifi])

# 2. Filter by year range - movies from 1990-1999
nineties = # YOUR CODE
print("90s movies:", [m["title"] for m in nineties])

# 3. Filter by minimum rating - rating >= 9.0
top_rated = # YOUR CODE
print("Top rated (9+):", [f"{m['title']} ({m['rating']})" for m in top_rated])

# 4. Search by title (case-insensitive, partial match)
def search_movies(movies, term):
    # YOUR CODE
    pass

results = search_movies(movies, "the")
print("Search 'the':", [m["title"] for m in results])

# 5. Group by genre and show count + avg rating per genre
# YOUR CODE
`,
      solution: `movies = [
    {"title": "The Matrix", "year": 1999, "genre": "Sci-Fi", "rating": 8.7},
    {"title": "Inception", "year": 2010, "genre": "Sci-Fi", "rating": 8.8},
    {"title": "The Godfather", "year": 1972, "genre": "Crime", "rating": 9.2},
    {"title": "Pulp Fiction", "year": 1994, "genre": "Crime", "rating": 8.9},
    {"title": "Toy Story", "year": 1995, "genre": "Animation", "rating": 8.3},
    {"title": "The Dark Knight", "year": 2008, "genre": "Action", "rating": 9.0},
    {"title": "Forrest Gump", "year": 1994, "genre": "Drama", "rating": 8.8},
    {"title": "Finding Nemo", "year": 2003, "genre": "Animation", "rating": 8.2},
    {"title": "Interstellar", "year": 2014, "genre": "Sci-Fi", "rating": 8.6},
    {"title": "The Shawshank Redemption", "year": 1994, "genre": "Drama", "rating": 9.3},
]

scifi = [m for m in movies if m["genre"] == "Sci-Fi"]
print("Sci-Fi movies:", [m["title"] for m in scifi])

nineties = [m for m in movies if 1990 <= m["year"] <= 1999]
print("90s movies:", [m["title"] for m in nineties])

top_rated = [m for m in movies if m["rating"] >= 9.0]
print("Top rated (9+):", [f"{m['title']} ({m['rating']})" for m in top_rated])

def search_movies(movies, term):
    return [m for m in movies if term.lower() in m["title"].lower()]

results = search_movies(movies, "the")
print("Search 'the':", [m["title"] for m in results])

genres = {}
for m in movies:
    g = m["genre"]
    if g not in genres:
        genres[g] = []
    genres[g].append(m["rating"])

print("\\nGenre Summary:")
for genre, ratings in sorted(genres.items()):
    avg = sum(ratings) / len(ratings)
    print(f"  {genre}: {len(ratings)} movies, avg rating {avg:.1f}")`,
      hint: 'Use list comprehensions with conditions. For search, use "in" with .lower() for case-insensitive matching. For grouping, build a dictionary of genre -> list of ratings.',
    },
  },

  {
    id: 'd07',
    title: 'Data Aggregation & Statistics',
    difficulty: 'data',
    order: 7,
    description: 'Calculate meaningful statistics from data - sum, average, median, mode, standard deviation, and more.',
    duration: '20 min',
    content: `# Data Aggregation & Statistics

## What Is Data Aggregation?

Aggregation means **combining multiple values into a single summary value**. It answers questions like:
- "What's the total?" (sum)
- "What's typical?" (average, median)
- "What's most common?" (mode)
- "How spread out is the data?" (standard deviation)

## Basic Aggregations

\`\`\`python
data = [85, 92, 78, 95, 88, 72, 90, 85, 93, 80]

# Built-in aggregations
total = sum(data)           # 858
count = len(data)           # 10
minimum = min(data)         # 72
maximum = max(data)         # 95
average = sum(data) / len(data)  # 85.8
\`\`\`

## Median: The Middle Value

The median is the **middle value** when data is sorted. It's more robust than the average because outliers don't affect it as much.

\`\`\`python
def median(values):
    """Calculate the median (middle value)."""
    sorted_vals = sorted(values)
    n = len(sorted_vals)
    mid = n // 2
    
    if n % 2 == 0:
        # Even count: average the two middle values
        return (sorted_vals[mid - 1] + sorted_vals[mid]) / 2
    else:
        # Odd count: return the middle value
        return sorted_vals[mid]

scores = [72, 78, 80, 85, 85, 88, 90, 92, 93, 95]
print(median(scores))  # 86.5

# Why median matters:
salaries = [50000, 55000, 52000, 48000, 1000000]  # one CEO!
print(f"Average: \${sum(salaries)/len(salaries):,.0f}")  # $241,000 (misleading!)
print(f"Median: \${median(salaries):,.0f}")              # $52,000 (realistic!)
\`\`\`

## Mode: Most Common Value

\`\`\`python
def mode(values):
    """Find the most common value(s)."""
    counts = {}
    for v in values:
        counts[v] = counts.get(v, 0) + 1
    
    max_count = max(counts.values())
    modes = [v for v, c in counts.items() if c == max_count]
    return modes

colors = ["red", "blue", "red", "green", "blue", "red"]
print(mode(colors))  # ["red"] (appears 3 times)
\`\`\`

## Standard Deviation: Measuring Spread

Standard deviation tells you **how spread out** the data is from the average.

\`\`\`python
def std_dev(values):
    """Calculate standard deviation."""
    avg = sum(values) / len(values)
    variance = sum((x - avg) ** 2 for x in values) / len(values)
    return variance ** 0.5

# Consistent class vs spread out class
class_a = [85, 87, 84, 86, 88]  # tight grouping
class_b = [60, 95, 70, 100, 75]  # spread out

print(f"Class A: avg={sum(class_a)/5:.0f}, std={std_dev(class_a):.1f}")
print(f"Class B: avg={sum(class_b)/5:.0f}, std={std_dev(class_b):.1f}")
# Same average, very different distributions!
\`\`\`

> **Key Insight:** Standard deviation is like a "confidence range". About 68% of data falls within 1 std_dev of the average.

## Percentiles and Quartiles

\`\`\`python
def percentile(values, p):
    """Calculate the p-th percentile."""
    sorted_vals = sorted(values)
    index = (p / 100) * (len(sorted_vals) - 1)
    lower = int(index)
    upper = lower + 1
    if upper >= len(sorted_vals):
        return sorted_vals[-1]
    fraction = index - lower
    return sorted_vals[lower] + fraction * (sorted_vals[upper] - sorted_vals[lower])

# Quartiles divide data into 4 equal parts
data = list(range(1, 101))  # 1 to 100
print(f"Q1 (25th): {percentile(data, 25)}")
print(f"Q2 (50th): {percentile(data, 50)}")  # same as median
print(f"Q3 (75th): {percentile(data, 75)}")
\`\`\`

## Group Aggregations

The most powerful pattern: **group then aggregate**.

\`\`\`python
def group_aggregate(data, group_key, value_key, agg_func):
    """Group data by a key and apply an aggregation function."""
    groups = {}
    for record in data:
        key = record[group_key]
        if key not in groups:
            groups[key] = []
        groups[key].append(record[value_key])
    
    return {key: agg_func(values) for key, values in groups.items()}
\`\`\``,
    codeExample: `# Data Aggregation & Statistics - Live Demo

# Student exam scores across subjects
scores = {
    "Math":    [85, 92, 78, 95, 88, 72, 90, 85, 93, 80],
    "Science": [88, 79, 92, 84, 91, 76, 85, 90, 82, 87],
    "English": [90, 85, 88, 78, 92, 80, 75, 95, 83, 89],
}

def median(values):
    s = sorted(values)
    n = len(s)
    mid = n // 2
    return (s[mid-1] + s[mid]) / 2 if n % 2 == 0 else s[mid]

def std_dev(values):
    avg = sum(values) / len(values)
    return (sum((x - avg)**2 for x in values) / len(values)) ** 0.5

def mode(values):
    counts = {}
    for v in values:
        counts[v] = counts.get(v, 0) + 1
    max_c = max(counts.values())
    return [v for v, c in counts.items() if c == max_c]

print("=" * 55)
print(f"{'Subject':<10} {'Mean':>6} {'Med':>6} {'StdDev':>7} {'Min':>5} {'Max':>5}")
print("=" * 55)

for subject, data in scores.items():
    avg = sum(data) / len(data)
    med = median(data)
    sd = std_dev(data)
    print(f"{subject:<10} {avg:>6.1f} {med:>6.1f} {sd:>7.2f} {min(data):>5} {max(data):>5}")

# Overall statistics
all_scores = [s for subj in scores.values() for s in subj]
print(f"\\n{'OVERALL':<10} {sum(all_scores)/len(all_scores):>6.1f} {median(all_scores):>6.1f} {std_dev(all_scores):>7.2f} {min(all_scores):>5} {max(all_scores):>5}")

# Grade distribution
print("\\n=== Grade Distribution ===")
grades = {"A": 0, "B": 0, "C": 0, "D": 0, "F": 0}
for s in all_scores:
    if s >= 90: grades["A"] += 1
    elif s >= 80: grades["B"] += 1
    elif s >= 70: grades["C"] += 1
    elif s >= 60: grades["D"] += 1
    else: grades["F"] += 1

for grade, count in grades.items():
    pct = count / len(all_scores) * 100
    bar = "#" * int(pct / 2)
    print(f"  {grade}: {bar} {count} ({pct:.0f}%)")`,
    exercise: {
      title: 'Complete Statistics Calculator',
      description: 'Build a stats calculator that takes a list of numbers and returns: count, sum, mean, median, mode, min, max, range, variance, and standard deviation.',
      starterCode: `def calculate_stats(data):
    """Calculate comprehensive statistics for a list of numbers.
    Returns a dictionary with all stats."""
    
    stats = {}
    
    # 1. Count
    stats["count"] = # YOUR CODE
    
    # 2. Sum
    stats["sum"] = # YOUR CODE
    
    # 3. Mean (average)
    stats["mean"] = # YOUR CODE
    
    # 4. Median (middle value)
    # YOUR CODE
    stats["median"] = # YOUR CODE
    
    # 5. Mode (most common)
    # YOUR CODE
    stats["mode"] = # YOUR CODE
    
    # 6. Min and Max
    stats["min"] = # YOUR CODE
    stats["max"] = # YOUR CODE
    
    # 7. Range (max - min)
    stats["range"] = # YOUR CODE
    
    # 8. Variance (average of squared differences from mean)
    stats["variance"] = # YOUR CODE
    
    # 9. Standard deviation (square root of variance)
    stats["std_dev"] = # YOUR CODE
    
    return stats

# Test it
test_data = [4, 8, 6, 5, 3, 8, 9, 2, 7, 8, 5, 6, 4, 7, 6]
results = calculate_stats(test_data)

for stat, value in results.items():
    if isinstance(value, float):
        print(f"{stat:>12}: {value:.2f}")
    else:
        print(f"{stat:>12}: {value}")
`,
      solution: `def calculate_stats(data):
    stats = {}
    stats["count"] = len(data)
    stats["sum"] = sum(data)
    stats["mean"] = sum(data) / len(data)
    
    sorted_d = sorted(data)
    n = len(sorted_d)
    mid = n // 2
    stats["median"] = (sorted_d[mid-1] + sorted_d[mid]) / 2 if n % 2 == 0 else sorted_d[mid]
    
    counts = {}
    for v in data:
        counts[v] = counts.get(v, 0) + 1
    max_count = max(counts.values())
    stats["mode"] = [v for v, c in counts.items() if c == max_count]
    
    stats["min"] = min(data)
    stats["max"] = max(data)
    stats["range"] = max(data) - min(data)
    
    mean = stats["mean"]
    stats["variance"] = sum((x - mean)**2 for x in data) / len(data)
    stats["std_dev"] = stats["variance"] ** 0.5
    
    return stats

test_data = [4, 8, 6, 5, 3, 8, 9, 2, 7, 8, 5, 6, 4, 7, 6]
results = calculate_stats(test_data)

for stat, value in results.items():
    if isinstance(value, float):
        print(f"{stat:>12}: {value:.2f}")
    else:
        print(f"{stat:>12}: {value}")`,
      hint: 'For median: sort the list, check if even/odd length. For mode: count occurrences with a dict, find the max count. Variance = average of (value - mean)^2. Std dev = sqrt of variance.',
    },
  },

  {
    id: 'd08',
    title: 'Data Sorting & Ranking',
    difficulty: 'data',
    order: 8,
    description: 'Master sorting algorithms and ranking techniques - essential for leaderboards, reports, and data presentation.',
    duration: '18 min',
    content: `# Data Sorting & Ranking

## Why Sorting Matters

Sorting is one of the most fundamental operations in computer science. Every time you see a leaderboard, search results, or a sorted table - sorting is at work.

## Python's Built-in Sorting

\`\`\`python
# sorted() - returns NEW sorted list (original unchanged)
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
ascending = sorted(numbers)          # [1, 1, 2, 3, 4, 5, 6, 9]
descending = sorted(numbers, reverse=True)  # [9, 6, 5, 4, 3, 2, 1, 1]

# .sort() - sorts IN PLACE (modifies original)
numbers.sort()  # numbers is now [1, 1, 2, 3, 4, 5, 6, 9]
\`\`\`

> **Important:** \`sorted()\` is SAFE (keeps original). \`.sort()\` MODIFIES the original. For data work, prefer \`sorted()\`.

## Sorting Complex Data with key=

The \`key\` parameter is incredibly powerful - it tells Python WHAT to sort by:

\`\`\`python
students = [
    {"name": "Alice", "grade": 92, "age": 20},
    {"name": "Bob", "grade": 85, "age": 22},
    {"name": "Carol", "grade": 95, "age": 19},
]

# Sort by grade
by_grade = sorted(students, key=lambda s: s["grade"])

# Sort by grade (highest first)
top_students = sorted(students, key=lambda s: s["grade"], reverse=True)

# Sort by name alphabetically
by_name = sorted(students, key=lambda s: s["name"])

# Multi-level sort: by grade desc, then by name asc
by_grade_name = sorted(students, key=lambda s: (-s["grade"], s["name"]))
\`\`\`

> **Pro Tip:** The \`-value\` trick in the key function reverses the sort order for that field. This works for numbers!

## Ranking Data

\`\`\`python
def rank_data(data, key, reverse=True):
    """Add a 'rank' field to each record."""
    sorted_data = sorted(data, key=lambda r: r[key], reverse=reverse)
    for i, record in enumerate(sorted_data):
        record["rank"] = i + 1
    return sorted_data

students = [
    {"name": "Alice", "score": 92},
    {"name": "Bob", "score": 85},
    {"name": "Carol", "score": 92},
    {"name": "Dave", "score": 78},
]

ranked = rank_data(students, "score")
# Alice: rank 1, Carol: rank 2, Bob: rank 3, Dave: rank 4
\`\`\`

## Understanding Sorting Algorithms

### Bubble Sort (educational - simple but slow)

\`\`\`python
def bubble_sort(arr):
    """The simplest sorting algorithm.
    Repeatedly swaps adjacent elements if they're in wrong order."""
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # swap!
    return arr
\`\`\`

### Selection Sort (educational - find minimum repeatedly)

\`\`\`python
def selection_sort(arr):
    """Find the minimum element and put it at the start, repeat."""
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
\`\`\`

> **In practice:** Always use Python's built-in \`sorted()\` or \`.sort()\`. They use **Timsort**, which is much faster than bubble/selection sort. Understanding the simple algorithms helps you think about data processing.

## Top-N and Bottom-N

\`\`\`python
# Get top 3 and bottom 3
data = [45, 82, 91, 38, 67, 73, 55, 99, 24, 86]

top_3 = sorted(data, reverse=True)[:3]    # [99, 91, 86]
bottom_3 = sorted(data)[:3]               # [24, 38, 45]
\`\`\``,
    codeExample: `# Sorting & Ranking - Live Demo

# Olympic medal data
athletes = [
    {"name": "Anna", "country": "USA", "gold": 3, "silver": 2, "bronze": 1},
    {"name": "Boris", "country": "Russia", "gold": 2, "silver": 3, "bronze": 2},
    {"name": "Chen", "country": "China", "gold": 4, "silver": 1, "bronze": 0},
    {"name": "Diana", "country": "UK", "gold": 2, "silver": 2, "bronze": 3},
    {"name": "Emil", "country": "Sweden", "gold": 1, "silver": 4, "bronze": 2},
    {"name": "Fatima", "country": "Brazil", "gold": 3, "silver": 0, "bronze": 4},
]

# Add total medals
for a in athletes:
    a["total"] = a["gold"] + a["silver"] + a["bronze"]

# Rank by total medals
print("=== Medal Leaderboard (by total) ===")
by_total = sorted(athletes, key=lambda a: a["total"], reverse=True)
for i, a in enumerate(by_total, 1):
    medals = f"G:{a['gold']} S:{a['silver']} B:{a['bronze']}"
    print(f"  #{i} {a['name']:8} ({a['country']:6}) Total: {a['total']}  [{medals}]")

# Rank by gold medals (then silver, then bronze as tiebreakers)
print("\\n=== Medal Leaderboard (Olympic ranking) ===")
by_gold = sorted(athletes, key=lambda a: (a["gold"], a["silver"], a["bronze"]), reverse=True)
for i, a in enumerate(by_gold, 1):
    medals = f"G:{a['gold']} S:{a['silver']} B:{a['bronze']}"
    print(f"  #{i} {a['name']:8} ({a['country']:6}) [{medals}]")

# Country rankings
print("\\n=== Country Total Medals ===")
countries = {}
for a in athletes:
    c = a["country"]
    countries[c] = countries.get(c, 0) + a["total"]

for country, total in sorted(countries.items(), key=lambda x: x[1], reverse=True):
    bar = "#" * total
    print(f"  {country:8} {bar} ({total})")

# Show sorting algorithm comparison
print("\\n=== Bubble Sort Demo ===")
demo = [64, 34, 25, 12, 22, 11, 90]
print(f"  Before: {demo}")
n = len(demo)
steps = 0
for i in range(n):
    for j in range(0, n - i - 1):
        steps += 1
        if demo[j] > demo[j+1]:
            demo[j], demo[j+1] = demo[j+1], demo[j]
print(f"  After:  {demo}")
print(f"  Steps:  {steps} (bubble sort)")
print(f"  Python's sorted() would do this in ~{n} steps (Timsort)")`,
    exercise: {
      title: 'Leaderboard System',
      description: 'Create a complete leaderboard system for game players. Sort by score, rank players, find top 3 and bottom 3, and calculate score percentiles.',
      starterCode: `players = [
    {"name": "Shadow", "score": 2450, "games": 50},
    {"name": "Phoenix", "score": 3200, "games": 45},
    {"name": "Storm", "score": 1800, "games": 60},
    {"name": "Blaze", "score": 3200, "games": 38},
    {"name": "Frost", "score": 2100, "games": 55},
    {"name": "Viper", "score": 2800, "games": 42},
    {"name": "Luna", "score": 3500, "games": 35},
    {"name": "Rex", "score": 1500, "games": 70},
]

# 1. Sort by score (highest first) and add rank
# YOUR CODE
print("=== Leaderboard ===")
# Print each player with their rank

# 2. Calculate score per game for each player, sort by efficiency
# YOUR CODE
print("\\n=== Most Efficient Players ===")

# 3. Top 3 and Bottom 3
# YOUR CODE
print("\\n=== Top 3 ===")
print("\\n=== Bottom 3 ===")

# 4. Multi-level sort: by score desc, then by games asc (fewer games = more impressive)
# YOUR CODE
print("\\n=== Ranked (score desc, games asc) ===")
`,
      solution: `players = [
    {"name": "Shadow", "score": 2450, "games": 50},
    {"name": "Phoenix", "score": 3200, "games": 45},
    {"name": "Storm", "score": 1800, "games": 60},
    {"name": "Blaze", "score": 3200, "games": 38},
    {"name": "Frost", "score": 2100, "games": 55},
    {"name": "Viper", "score": 2800, "games": 42},
    {"name": "Luna", "score": 3500, "games": 35},
    {"name": "Rex", "score": 1500, "games": 70},
]

ranked = sorted(players, key=lambda p: p["score"], reverse=True)
print("=== Leaderboard ===")
for i, p in enumerate(ranked, 1):
    print(f"  #{i} {p['name']:8} Score: {p['score']:,}  Games: {p['games']}")

for p in players:
    p["efficiency"] = round(p["score"] / p["games"], 1)

by_eff = sorted(players, key=lambda p: p["efficiency"], reverse=True)
print("\\n=== Most Efficient Players ===")
for p in by_eff:
    print(f"  {p['name']:8} {p['efficiency']} pts/game")

top3 = sorted(players, key=lambda p: p["score"], reverse=True)[:3]
bot3 = sorted(players, key=lambda p: p["score"])[:3]
print("\\n=== Top 3 ===")
for p in top3:
    print(f"  {p['name']}: {p['score']:,}")
print("\\n=== Bottom 3 ===")
for p in bot3:
    print(f"  {p['name']}: {p['score']:,}")

multi = sorted(players, key=lambda p: (-p["score"], p["games"]))
print("\\n=== Ranked (score desc, games asc) ===")
for i, p in enumerate(multi, 1):
    print(f"  #{i} {p['name']:8} Score: {p['score']:,}  Games: {p['games']}")`,
      hint: 'Use sorted() with key=lambda. For multi-level sort, return a tuple in the key function. Use negative values (-score) to reverse sort order for numbers. Slice [:3] for top 3.',
    },
  },

  {
    id: 'd09',
    title: 'Data Visualization with Text',
    difficulty: 'data',
    order: 9,
    description: 'Create charts, histograms, bar graphs, and tables using pure text - no libraries needed!',
    duration: '18 min',
    content: `# Data Visualization with Text

## Why Text-Based Visualization?

Before you learn matplotlib or plotly, understanding how to visualize data with text teaches you the **core concepts** of data visualization. Plus, text charts work everywhere - terminals, logs, emails, and even in code comments!

## Horizontal Bar Chart

\`\`\`python
def bar_chart(data, max_width=40):
    """Create a horizontal bar chart."""
    max_val = max(data.values())
    for label, value in data.items():
        bar_len = int(value / max_val * max_width)
        bar = "#" * bar_len
        print(f"{label:>12} | {bar} {value}")

sales = {"Monday": 150, "Tuesday": 230, "Wednesday": 180,
         "Thursday": 310, "Friday": 275}
bar_chart(sales)
\`\`\`

## Histogram (Frequency Distribution)

\`\`\`python
def histogram(values, bins=10, width=40):
    """Create a text histogram."""
    min_v, max_v = min(values), max(values)
    bin_size = (max_v - min_v) / bins
    
    counts = [0] * bins
    for v in values:
        idx = min(int((v - min_v) / bin_size), bins - 1)
        counts[idx] += 1
    
    max_count = max(counts)
    for i in range(bins):
        low = min_v + i * bin_size
        high = low + bin_size
        bar_len = int(counts[i] / max_count * width) if max_count > 0 else 0
        bar = "#" * bar_len
        print(f"{low:6.1f}-{high:6.1f} | {bar} ({counts[i]})")
\`\`\`

## Sparkline (Mini Trend)

\`\`\`python
def sparkline(values):
    """Create a mini text chart showing trend."""
    chars = " _.-~'^\`"
    min_v, max_v = min(values), max(values)
    range_v = max_v - min_v or 1
    
    result = ""
    for v in values:
        idx = int((v - min_v) / range_v * (len(chars) - 1))
        result += chars[idx]
    return result

temps = [72, 68, 75, 80, 77, 65, 70, 82, 78, 73]
print(f"Temperature trend: [{sparkline(temps)}]")
\`\`\`

## Data Table

\`\`\`python
def print_table(headers, rows, col_widths=None):
    """Print a formatted data table."""
    if not col_widths:
        col_widths = [max(len(str(h)), max(len(str(r[i])) for r in rows))
                      for i, h in enumerate(headers)]
    
    # Header
    header = " | ".join(h.ljust(w) for h, w in zip(headers, col_widths))
    print(header)
    print("-" * len(header))
    
    # Rows
    for row in rows:
        line = " | ".join(str(v).ljust(w) for v, w in zip(row, col_widths))
        print(line)
\`\`\`

## Progress Bar

\`\`\`python
def progress_bar(current, total, width=30, label="Progress"):
    """Create a progress bar."""
    pct = current / total
    filled = int(width * pct)
    bar = "=" * filled + "-" * (width - filled)
    print(f"{label}: [{bar}] {pct*100:.1f}% ({current}/{total})")

progress_bar(7, 10)
# Progress: [=====================---------] 70.0% (7/10)
\`\`\`

## Scatter Plot (Text-based)

\`\`\`python
def scatter_plot(x_data, y_data, width=40, height=15):
    """Create a simple text scatter plot."""
    x_min, x_max = min(x_data), max(x_data)
    y_min, y_max = min(y_data), max(y_data)
    
    # Create empty grid
    grid = [[" " for _ in range(width)] for _ in range(height)]
    
    # Plot points
    for x, y in zip(x_data, y_data):
        col = int((x - x_min) / (x_max - x_min) * (width - 1)) if x_max > x_min else 0
        row = height - 1 - int((y - y_min) / (y_max - y_min) * (height - 1)) if y_max > y_min else 0
        grid[row][col] = "*"
    
    # Print grid
    for row in grid:
        print("|" + "".join(row) + "|")
    print("+" + "-" * width + "+")
\`\`\``,
    codeExample: `# Text Data Visualization - Live Demo

# Monthly revenue data
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
revenue = [42, 38, 55, 48, 62, 71, 68, 75, 58, 80, 72, 95]

# 1. Bar Chart
print("=== Monthly Revenue ($K) ===\\n")
max_rev = max(revenue)
for m, r in zip(months, revenue):
    bar = "#" * int(r / max_rev * 35)
    marker = " *" if r == max_rev else ""
    print(f"  {m} |{bar} \${r}K{marker}")

# 2. Trend indicator
print(f"\\n  Trend: ", end="")
for i in range(1, len(revenue)):
    if revenue[i] > revenue[i-1]:
        print("/", end="")
    elif revenue[i] < revenue[i-1]:
        print("\\\\", end="")
    else:
        print("-", end="")
print()

# 3. Quarterly Summary Table
print("\\n=== Quarterly Summary ===\\n")
quarters = [revenue[i:i+3] for i in range(0, 12, 3)]
q_names = ["Q1", "Q2", "Q3", "Q4"]
print(f"  {'Quarter':<10} {'Total':>8} {'Average':>8} {'Best':>8}")
print(f"  {'-'*38}")
for name, q in zip(q_names, quarters):
    print(f"  {name:<10} \${sum(q):>6}K \${sum(q)/3:>6.1f}K \${max(q):>6}K")

# 4. Year-over-Year comparison
print("\\n=== Monthly Comparison ===\\n")
last_year = [35, 32, 48, 42, 55, 60, 58, 65, 50, 68, 62, 80]
print(f"  {'Mon':<5} {'Last':>6} {'This':>6} {'Change':>8} {'Visual'}")
print(f"  {'-'*45}")
for m, ly, ty in zip(months, last_year, revenue):
    change = ty - ly
    pct = (change / ly * 100)
    arrow = "+" if change > 0 else ""
    vis = ">" * abs(int(change / 3)) if change > 0 else "<" * abs(int(change / 3))
    color = "^" if change > 0 else "v"
    print(f"  {m:<5} \${ly:>4}K \${ty:>4}K  {arrow}{change:>3}K ({pct:>+.0f}%) {vis}")

# 5. Distribution histogram
print("\\n=== Revenue Distribution ===\\n")
bins = {"$30-49K": 0, "$50-69K": 0, "$70-89K": 0, "$90+K": 0}
for r in revenue:
    if r < 50: bins["$30-49K"] += 1
    elif r < 70: bins["$50-69K"] += 1
    elif r < 90: bins["$70-89K"] += 1
    else: bins["$90+K"] += 1

for label, count in bins.items():
    bar = "##" * count
    print(f"  {label:<10} {bar} ({count} months)")`,
    exercise: {
      title: 'Dashboard Report Generator',
      description: 'Create a text-based dashboard that shows: a bar chart of weekly data, a summary table with stats, a progress bar toward a goal, and a trend line.',
      starterCode: `# Weekly website visitors
weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"]
visitors = [1200, 1450, 1100, 1800, 2100, 1950]
goal = 12000  # yearly target for this period

# 1. Create a horizontal bar chart
print("=== Weekly Visitors ===")
# YOUR CODE - print bars for each week

# 2. Summary statistics table
print("\\n=== Summary ===")
# YOUR CODE - show total, average, best week, worst week

# 3. Progress bar toward goal
print("\\n=== Goal Progress ===")
total = sum(visitors)
# YOUR CODE - show a progress bar

# 4. Week-over-week trend
print("\\n=== Trend ===")
# YOUR CODE - show if each week went up or down vs previous
`,
      solution: `weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"]
visitors = [1200, 1450, 1100, 1800, 2100, 1950]
goal = 12000

print("=== Weekly Visitors ===")
max_v = max(visitors)
for w, v in zip(weeks, visitors):
    bar_len = int(v / max_v * 30)
    bar = "#" * bar_len
    best = " <-- Best!" if v == max_v else ""
    print(f"  {w} | {bar} {v:,}{best}")

print("\\n=== Summary ===")
total = sum(visitors)
avg = total / len(visitors)
best_idx = visitors.index(max(visitors))
worst_idx = visitors.index(min(visitors))
print(f"  Total:      {total:,} visitors")
print(f"  Average:    {avg:,.0f} per week")
print(f"  Best week:  {weeks[best_idx]} ({visitors[best_idx]:,})")
print(f"  Worst week: {weeks[worst_idx]} ({visitors[worst_idx]:,})")

print("\\n=== Goal Progress ===")
pct = total / goal
filled = int(30 * pct)
bar = "=" * filled + "-" * (30 - filled)
print(f"  [{bar}] {pct*100:.1f}% ({total:,}/{goal:,})")
remaining = goal - total
print(f"  Remaining: {remaining:,} visitors needed")

print("\\n=== Trend ===")
for i in range(1, len(visitors)):
    diff = visitors[i] - visitors[i-1]
    arrow = "^" if diff > 0 else "v"
    print(f"  {weeks[i-1]} -> {weeks[i]}: {arrow} {diff:+,}")`,
      hint: 'For the bar chart, scale bars relative to the max value. For progress bar, divide current by goal. For trend, compare each week to the previous one using a loop starting at index 1.',
    },
  },

  {
    id: 'd10',
    title: 'Building a Data Pipeline',
    difficulty: 'data',
    order: 10,
    description: 'Combine everything into a complete data pipeline - extract, transform, load, analyze, and report.',
    duration: '25 min',
    content: `# Building a Data Pipeline

## What Is a Data Pipeline?

A data pipeline is a series of steps that **automatically process data** from raw input to useful output. The classic pattern is:

**Extract -> Transform -> Load -> Analyze -> Report**

Think of it like an assembly line in a factory:
1. **Extract**: Get raw data (from CSV, API, database)
2. **Transform**: Clean, validate, reshape the data
3. **Load**: Store the processed data
4. **Analyze**: Calculate statistics, find patterns
5. **Report**: Present results in a readable format

## Building Block: Extract

\`\`\`python
def extract_csv(csv_string):
    """Extract data from CSV string into list of dictionaries."""
    lines = csv_string.strip().split("\\n")
    headers = [h.strip() for h in lines[0].split(",")]
    records = []
    for line in lines[1:]:
        values = [v.strip() for v in line.split(",")]
        records.append(dict(zip(headers, values)))
    return records
\`\`\`

## Building Block: Transform

\`\`\`python
def transform(records, schema):
    """Clean and convert data types.
    
    schema = {"age": int, "salary": float, "name": str}
    """
    cleaned = []
    errors = []
    
    for i, record in enumerate(records):
        clean_record = {}
        valid = True
        
        for field, dtype in schema.items():
            value = record.get(field, "").strip()
            
            if not value:
                errors.append(f"Row {i+1}: missing {field}")
                valid = False
                continue
                
            try:
                if dtype == str:
                    clean_record[field] = value.strip().title()
                else:
                    clean_record[field] = dtype(value)
            except (ValueError, TypeError):
                errors.append(f"Row {i+1}: invalid {field}={value}")
                valid = False
        
        if valid:
            cleaned.append(clean_record)
    
    return cleaned, errors
\`\`\`

## Building Block: Analyze

\`\`\`python
def analyze(data, group_by, value_field):
    """Group data and calculate statistics per group."""
    groups = {}
    for record in data:
        key = record[group_by]
        if key not in groups:
            groups[key] = []
        groups[key].append(record[value_field])
    
    results = {}
    for key, values in groups.items():
        results[key] = {
            "count": len(values),
            "total": sum(values),
            "average": sum(values) / len(values),
            "min": min(values),
            "max": max(values),
        }
    return results
\`\`\`

## Building Block: Report

\`\`\`python
def generate_report(analysis, title="Report"):
    """Generate a formatted text report."""
    print(f"\\n{'=' * 60}")
    print(f"  {title}")
    print(f"{'=' * 60}\\n")
    
    headers = ["Group", "Count", "Total", "Average", "Min", "Max"]
    print(f"  {headers[0]:<15}", end="")
    for h in headers[1:]:
        print(f"{h:>10}", end="")
    print()
    print(f"  {'-' * 55}")
    
    for group, stats in sorted(analysis.items()):
        print(f"  {group:<15}", end="")
        print(f"{stats['count']:>10}", end="")
        print(f"{stats['total']:>10,.0f}", end="")
        print(f"{stats['average']:>10,.1f}", end="")
        print(f"{stats['min']:>10,.0f}", end="")
        print(f"{stats['max']:>10,.0f}")
    
    print(f"  {'-' * 55}")
\`\`\`

## Putting It All Together

The complete pipeline connects all stages:

\`\`\`python
def run_pipeline(raw_data, schema, group_field, value_field, title):
    """Run the complete data pipeline."""
    # Stage 1: Extract
    print("[1/5] Extracting data...")
    records = extract_csv(raw_data)
    print(f"      Extracted {len(records)} records")
    
    # Stage 2: Transform
    print("[2/5] Transforming data...")
    clean_data, errors = transform(records, schema)
    print(f"      Valid: {len(clean_data)}, Errors: {len(errors)}")
    
    # Stage 3: Deduplicate
    print("[3/5] Deduplicating...")
    # ...
    
    # Stage 4: Analyze
    print("[4/5] Analyzing...")
    analysis = analyze(clean_data, group_field, value_field)
    
    # Stage 5: Report
    print("[5/5] Generating report...")
    generate_report(analysis, title)
    
    return clean_data, analysis
\`\`\`

> **Real-World Tip:** Professional data pipelines add logging, error handling, and data validation at every stage. The pattern stays the same no matter how complex the data gets.`,
    codeExample: `# Complete Data Pipeline - Live Demo
# Processing sales data from raw CSV to final report

raw_data = """date,product,category,quantity,price,region
2024-01-15,Laptop,Electronics,2,999.99,North
2024-01-15,Mouse,Electronics,5,29.99,South
2024-01-16,Desk,Furniture,1,349.99,North
2024-01-16,Chair,Furniture,3,199.99,East
2024-01-17,Laptop,Electronics,1,999.99,West
2024-01-17,Keyboard,Electronics,4,79.99,North
2024-01-18,Desk,Furniture,2,349.99,South
2024-01-18,Monitor,Electronics,3,449.99,East
2024-01-19,Chair,Furniture,2,199.99,West
2024-01-19,Mouse,Electronics,8,29.99,North
2024-01-20,Laptop,Electronics,3,999.99,South
2024-01-20,Bookshelf,Furniture,1,149.99,East"""

# ===== STAGE 1: EXTRACT =====
print("[1/5] Extracting data...")
lines = raw_data.strip().split("\\n")
headers = lines[0].split(",")
records = []
for line in lines[1:]:
    values = line.split(",")
    records.append(dict(zip(headers, values)))
print(f"      Extracted {len(records)} sales records")

# ===== STAGE 2: TRANSFORM =====
print("[2/5] Transforming...")
for r in records:
    r["quantity"] = int(r["quantity"])
    r["price"] = float(r["price"])
    r["revenue"] = r["quantity"] * r["price"]
    r["product"] = r["product"].strip()
    r["category"] = r["category"].strip()
    r["region"] = r["region"].strip()
print(f"      Calculated revenue for all records")

# ===== STAGE 3: VALIDATE =====
print("[3/5] Validating...")
valid = [r for r in records if r["revenue"] > 0 and r["quantity"] > 0]
print(f"      {len(valid)}/{len(records)} records valid")

# ===== STAGE 4: ANALYZE =====
print("[4/5] Analyzing...")

# By category
categories = {}
for r in valid:
    cat = r["category"]
    if cat not in categories:
        categories[cat] = {"revenue": 0, "orders": 0, "units": 0}
    categories[cat]["revenue"] += r["revenue"]
    categories[cat]["orders"] += 1
    categories[cat]["units"] += r["quantity"]

# By region
regions = {}
for r in valid:
    reg = r["region"]
    if reg not in regions:
        regions[reg] = {"revenue": 0, "orders": 0}
    regions[reg]["revenue"] += r["revenue"]
    regions[reg]["orders"] += 1

# Top products
products = {}
for r in valid:
    p = r["product"]
    products[p] = products.get(p, 0) + r["revenue"]

# ===== STAGE 5: REPORT =====
print("[5/5] Generating report...\\n")

total_rev = sum(r["revenue"] for r in valid)
print(f"{'=' * 55}")
print(f"  SALES REPORT")
print(f"  Period: {valid[0]['date']} to {valid[-1]['date']}")
print(f"  Total Revenue: \${total_rev:,.2f}")
print(f"{'=' * 55}")

print(f"\\n--- Category Breakdown ---")
for cat, data in sorted(categories.items()):
    pct = data["revenue"] / total_rev * 100
    bar = "#" * int(pct / 2)
    print(f"  {cat:<12} \${data['revenue']:>10,.2f}  {data['orders']} orders  {bar} {pct:.0f}%")

print(f"\\n--- Regional Performance ---")
for reg, data in sorted(regions.items(), key=lambda x: x[1]["revenue"], reverse=True):
    pct = data["revenue"] / total_rev * 100
    print(f"  {reg:<8} \${data['revenue']:>10,.2f}  ({pct:.1f}%)")

print(f"\\n--- Top Products ---")
for prod, rev in sorted(products.items(), key=lambda x: x[1], reverse=True):
    print(f"  {prod:<12} \${rev:>10,.2f}")

print(f"\\n{'=' * 55}")
print(f"  Pipeline complete! Processed {len(valid)} records.")
print(f"{'=' * 55}")`,
    exercise: {
      title: 'Build Your Own Data Pipeline',
      description: 'Create a complete pipeline for student grade data: extract from CSV, clean/validate, analyze by subject and student, and generate a formatted report card.',
      starterCode: `# Raw student data
raw_csv = """student,subject,score,semester
Alice,Math,92,Fall
Alice,Science,88,Fall
Alice,English,95,Fall
Bob,Math,78,Fall
Bob,Science,82,Fall
Bob,English,75,Fall
Carol,Math,95,Fall
Carol,Science,91,Fall
Carol,English,89,Fall
Alice,Math,88,Spring
Alice,Science,91,Spring
Alice,English,93,Spring
Bob,Math,82,Spring
Bob,Science,79,Spring
Bob,English,80,Spring
Carol,Math,97,Spring
Carol,Science,94,Spring
Carol,English,92,Spring"""

# STAGE 1: Extract - Parse CSV into list of dicts
print("[1] Extracting...")
records = []
# YOUR CODE

# STAGE 2: Transform - Convert score to int, validate
print("[2] Transforming...")
# YOUR CODE

# STAGE 3: Analyze - Calculate averages per student and per subject
print("[3] Analyzing...")
# YOUR CODE

# STAGE 4: Report - Generate report cards
print("[4] Generating report...\\n")
# YOUR CODE - Show:
# - Overall class average
# - Per-student report card (all subjects, both semesters, improvement)
# - Per-subject statistics
# - Honor roll (avg >= 90)
`,
      solution: `raw_csv = """student,subject,score,semester
Alice,Math,92,Fall
Alice,Science,88,Fall
Alice,English,95,Fall
Bob,Math,78,Fall
Bob,Science,82,Fall
Bob,English,75,Fall
Carol,Math,95,Fall
Carol,Science,91,Fall
Carol,English,89,Fall
Alice,Math,88,Spring
Alice,Science,91,Spring
Alice,English,93,Spring
Bob,Math,82,Spring
Bob,Science,79,Spring
Bob,English,80,Spring
Carol,Math,97,Spring
Carol,Science,94,Spring
Carol,English,92,Spring"""

print("[1] Extracting...")
lines = raw_csv.strip().split("\\n")
headers = lines[0].split(",")
records = []
for line in lines[1:]:
    values = line.split(",")
    records.append(dict(zip(headers, values)))
print(f"    Loaded {len(records)} records")

print("[2] Transforming...")
for r in records:
    r["score"] = int(r["score"])
    r["student"] = r["student"].strip()
    r["subject"] = r["subject"].strip()
    r["semester"] = r["semester"].strip()
print(f"    Converted all scores to integers")

print("[3] Analyzing...")
students = {}
subjects = {}
for r in records:
    s = r["student"]
    if s not in students:
        students[s] = {"Fall": {}, "Spring": {}}
    students[s][r["semester"]][r["subject"]] = r["score"]
    
    sub = r["subject"]
    if sub not in subjects:
        subjects[sub] = []
    subjects[sub].append(r["score"])

print("[4] Generating report...\\n")
all_scores = [r["score"] for r in records]
print(f"{'=' * 50}")
print(f"  CLASS REPORT CARD")
print(f"  Overall Average: {sum(all_scores)/len(all_scores):.1f}")
print(f"{'=' * 50}")

honor_roll = []
for name, semesters in sorted(students.items()):
    print(f"\\n--- {name} ---")
    all_student_scores = []
    for sem in ["Fall", "Spring"]:
        scores = semesters[sem]
        avg = sum(scores.values()) / len(scores)
        all_student_scores.extend(scores.values())
        print(f"  {sem}: ", end="")
        for subj, score in scores.items():
            print(f"{subj}={score} ", end="")
        print(f"(avg: {avg:.1f})")
    
    overall = sum(all_student_scores) / len(all_student_scores)
    fall_avg = sum(semesters["Fall"].values()) / len(semesters["Fall"])
    spring_avg = sum(semesters["Spring"].values()) / len(semesters["Spring"])
    change = spring_avg - fall_avg
    print(f"  Overall: {overall:.1f} | Change: {change:+.1f}")
    if overall >= 90:
        honor_roll.append((name, overall))

print(f"\\n--- Subject Averages ---")
for sub, scores in sorted(subjects.items()):
    avg = sum(scores) / len(scores)
    print(f"  {sub}: {avg:.1f}")

print(f"\\n--- Honor Roll (90+) ---")
for name, avg in honor_roll:
    print(f"  {name}: {avg:.1f}")`,
      hint: 'Follow the pipeline stages: parse CSV with split and zip, convert types, group by student and subject using nested dictionaries, then format the output with f-strings and loops.',
    },
  },
]
