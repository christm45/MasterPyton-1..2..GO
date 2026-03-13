// ──────────────────────────────────────────────────────────
// PYTHON LIBRARIES TRACK - 10 Lessons with Real Applications
// Covers essential standard library modules with practical examples
// ──────────────────────────────────────────────────────────

export const libraryLessons = [
  {
    id: 'lib01',
    title: 'math & random — Numbers Powerhouse',
    difficulty: 'library',
    order: 1,
    description: 'Mathematical functions, constants, and random number generation for real applications',
    duration: '25 min',
    content: `Python's \`math\` and \`random\` modules give you powerful tools for mathematical computation and randomness — from calculating areas to simulating dice rolls.

## The math Module

The \`math\` module provides mathematical functions beyond basic arithmetic:

\`\`\`python
import math
\`\`\`

### Essential Constants

| Constant | Value | Use Case |
|----------|-------|----------|
| \`math.pi\` | 3.14159... | Circle calculations |
| \`math.e\` | 2.71828... | Exponential growth/decay |
| \`math.inf\` | Infinity | Comparisons, initial values |
| \`math.tau\` | 6.28318... | Full circle (2 * pi) |

### Rounding & Absolute Value

\`\`\`python
import math

print(math.ceil(4.2))     # 5 — always rounds UP
print(math.floor(4.9))    # 4 — always rounds DOWN
print(math.trunc(4.7))    # 4 — removes decimal part
print(math.fabs(-3.5))    # 3.5 — absolute value (always float)
print(math.isclose(0.1 + 0.2, 0.3))  # True! Fixes float issues
\`\`\`

### Powers, Roots & Logarithms

\`\`\`python
import math

print(math.sqrt(144))       # 12.0
print(math.pow(2, 10))      # 1024.0
print(math.log(100, 10))    # 2.0 (log base 10)
print(math.log2(256))       # 8.0 (log base 2)
print(math.exp(1))          # 2.718... (e^1)
print(math.isqrt(20))       # 4 — integer square root
\`\`\`

### Trigonometry

\`\`\`python
import math

angle = math.radians(45)
print(math.sin(angle))         # 0.707...
print(math.cos(angle))         # 0.707...
print(math.hypot(3, 4))        # 5.0 — hypotenuse
print(math.degrees(math.pi))   # 180.0
\`\`\`

> **Tip:** Use \`math.isclose()\` instead of \`==\` when comparing floating point numbers. Floating point arithmetic can produce tiny errors.

## The random Module

The \`random\` module generates pseudo-random numbers for games, simulations, and sampling.

### Basic Random Functions

\`\`\`python
import random

print(random.random())         # Float between 0.0 and 1.0
print(random.uniform(1, 100))  # Float between 1 and 100
print(random.randint(1, 6))    # Integer between 1 and 6 (inclusive)
print(random.randrange(0, 100, 5))  # Random from 0,5,10,...,95
\`\`\`

### Working with Sequences

\`\`\`python
import random

colors = ['red', 'blue', 'green', 'yellow', 'purple']
print(random.choice(colors))       # Pick one random item
print(random.choices(colors, k=3)) # Pick 3 WITH replacement
print(random.sample(colors, k=3))  # Pick 3 WITHOUT replacement

deck = list(range(1, 53))
random.shuffle(deck)               # Shuffle in-place
\`\`\`

### Reproducible Randomness with Seeds

\`\`\`python
import random

random.seed(42)
print(random.randint(1, 100))  # Always same number with seed 42
\`\`\`

> **Tip:** Seeds are essential for testing. With a seed, random numbers are always the same sequence.`,
    codeExample: `import math
import random

# === math module showcase ===
print("=== Math Module ===")
print(f"Pi: {math.pi}")
print(f"Square root of 225: {math.sqrt(225)}")
print(f"2^10 = {math.pow(2, 10)}")
print(f"Ceiling of 4.2: {math.ceil(4.2)}")
print(f"Floor of 4.9: {math.floor(4.9)}")
print(f"Distance from origin to (3,4): {math.hypot(3, 4)}")

# Floating point comparison
print(f"\\n0.1 + 0.2 == 0.3? {0.1 + 0.2 == 0.3}")
print(f"math.isclose? {math.isclose(0.1 + 0.2, 0.3)}")

# === random module showcase ===
print("\\n=== Random Module ===")
random.seed(42)
print(f"Random int (1-6): {random.randint(1, 6)}")
print(f"Random float (0-1): {random.random():.4f}")

fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
print(f"Random choice: {random.choice(fruits)}")
print(f"Random sample of 3: {random.sample(fruits, 3)}")

cards = list(range(1, 11))
random.shuffle(cards)
print(f"Shuffled cards: {cards}")

# Password generator
print("\\n=== Password Generator ===")
chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#'
password = ''.join(random.choices(chars, k=12))
print(f"Generated password: {password}")`,
    exercise: {
      title: "Dice Game Simulator",
      description: "Create a dice game where two players each roll 2 dice for 5 rounds. Track scores (sum of dice per round). The player with the highest total wins. Use random.seed(100) for reproducibility.",
      starterCode: `import random\n\nrandom.seed(100)\n\nplayer1_total = 0\nplayer2_total = 0\n\nfor round_num in range(1, 6):\n    # Roll 2 dice for each player\n    # Add to totals\n    # Print round results\n    pass\n\n# Print final scores and winner\n`,
      solution: `import random\n\nrandom.seed(100)\n\nplayer1_total = 0\nplayer2_total = 0\n\nprint("=== Dice Game: 5 Rounds ===\\n")\n\nfor round_num in range(1, 6):\n    p1_dice1 = random.randint(1, 6)\n    p1_dice2 = random.randint(1, 6)\n    p1_round = p1_dice1 + p1_dice2\n\n    p2_dice1 = random.randint(1, 6)\n    p2_dice2 = random.randint(1, 6)\n    p2_round = p2_dice1 + p2_dice2\n\n    player1_total += p1_round\n    player2_total += p2_round\n\n    print(f"Round {round_num}:")\n    print(f"  Player 1: {p1_dice1} + {p1_dice2} = {p1_round}")\n    print(f"  Player 2: {p2_dice1} + {p2_dice2} = {p2_round}")\n    print()\n\nprint(f"Final Scores:")\nprint(f"  Player 1: {player1_total}")\nprint(f"  Player 2: {player2_total}")\n\nif player1_total > player2_total:\n    print("\\nPlayer 1 wins!")\nelif player2_total > player1_total:\n    print("\\nPlayer 2 wins!")\nelse:\n    print("\\nIt's a tie!")`,
      hint: "Use random.randint(1, 6) for each die roll. Loop 5 times, rolling 2 dice per player per round. Accumulate totals and compare at the end."
    }
  },
  {
    id: 'lib02',
    title: 'datetime — Mastering Dates & Time',
    difficulty: 'library',
    order: 2,
    description: 'Create, format, parse, and calculate with dates and times in Python',
    duration: '25 min',
    content: `The \`datetime\` module is Python's Swiss Army knife for dates and times. From logging timestamps to calculating age, it handles it all.

## Core Classes

| Class | Purpose | Example |
|-------|---------|---------|
| \`date\` | Date only | 2025-03-15 |
| \`time\` | Time only | 14:30:00 |
| \`datetime\` | Date + time | 2025-03-15 14:30:00 |
| \`timedelta\` | Duration | 7 days, 3:00:00 |

## Creating Dates & Times

\`\`\`python
from datetime import date, time, datetime, timedelta

birthday = date(1995, 8, 24)
event = datetime(2025, 12, 31, 23, 59, 59)
today = date.today()
now = datetime.now()
print(f"Today: {today}")
print(f"Now: {now}")
\`\`\`

## Formatting with strftime()

| Code | Meaning | Example |
|------|---------|---------|
| \`%Y\` | 4-digit year | 2025 |
| \`%m\` | Month (01-12) | 03 |
| \`%d\` | Day (01-31) | 15 |
| \`%H\` | Hour 24h | 14 |
| \`%I\` | Hour 12h | 02 |
| \`%M\` | Minute | 30 |
| \`%A\` | Weekday name | Saturday |
| \`%B\` | Month name | March |
| \`%p\` | AM/PM | PM |

\`\`\`python
from datetime import datetime
now = datetime.now()
print(now.strftime("%B %d, %Y"))       # March 15, 2025
print(now.strftime("%I:%M %p"))         # 02:30 PM
\`\`\`

## Parsing Strings with strptime()

\`\`\`python
from datetime import datetime
dt = datetime.strptime("2025-03-15", "%Y-%m-%d")
print(dt)
\`\`\`

## Time Arithmetic with timedelta

\`\`\`python
from datetime import datetime, timedelta

now = datetime.now()
tomorrow = now + timedelta(days=1)
next_week = now + timedelta(weeks=1)

date1 = datetime(2025, 12, 31)
date2 = datetime(2025, 1, 1)
diff = date1 - date2
print(f"Days between: {diff.days}")
\`\`\`

> **Tip:** \`timedelta\` supports days, seconds, minutes, hours, and weeks. It does NOT support months or years because they vary in length.`,
    codeExample: `from datetime import datetime, date, timedelta

print("=== Date & Time Basics ===")
now = datetime.now()
print(f"Right now: {now}")
print(f"Formatted: {now.strftime('%B %d, %Y at %I:%M %p')}")

print("\\n=== Date Arithmetic ===")
future = now + timedelta(days=100)
print(f"100 days from now: {future.strftime('%B %d, %Y')}")

past = now - timedelta(weeks=52)
print(f"52 weeks ago: {past.strftime('%B %d, %Y')}")

new_year = datetime(now.year + 1, 1, 1)
days_left = (new_year - now).days
print(f"\\nDays until New Year: {days_left}")

print("\\n=== Parsing Dates ===")
dates = ["2025-01-15", "2025-06-20", "2025-12-25"]
for d in dates:
    parsed = datetime.strptime(d, "%Y-%m-%d")
    print(f"  {d} -> {parsed.strftime('%A, %B %d')}")

print("\\n=== Age Calculator ===")
def calc_age(birth_year, birth_month, birth_day):
    today = date.today()
    birth = date(birth_year, birth_month, birth_day)
    age = today.year - birth.year
    if (today.month, today.day) < (birth.month, birth.day):
        age -= 1
    days_alive = (today - birth).days
    return age, days_alive

age, days = calc_age(2000, 6, 15)
print(f"Born June 15, 2000: {age} years old, {days:,} days alive")`,
    exercise: {
      title: "Event Countdown Timer",
      description: "Create a program that takes a list of events with dates and calculates: days until each event, which event is next, and which is furthest away.",
      starterCode: `from datetime import datetime, date\n\nevents = [\n    ("New Year 2026", "2026-01-01"),\n    ("Summer Solstice", "2025-06-21"),\n    ("Halloween", "2025-10-31"),\n    ("Christmas", "2025-12-25"),\n]\n\ntoday = date.today()\nprint(f"Today: {today.strftime('%B %d, %Y')}\\n")\n\n# Parse dates, calculate days, find nearest/furthest\n`,
      solution: `from datetime import datetime, date\n\nevents = [\n    ("New Year 2026", "2026-01-01"),\n    ("Summer Solstice", "2025-06-21"),\n    ("Halloween", "2025-10-31"),\n    ("Christmas", "2025-12-25"),\n]\n\ntoday = date.today()\nprint(f"Today: {today.strftime('%B %d, %Y')}")\nprint("=" * 45)\n\ncountdown = []\nfor name, date_str in events:\n    event_date = datetime.strptime(date_str, "%Y-%m-%d").date()\n    days_until = (event_date - today).days\n    countdown.append((name, event_date, days_until))\n    status = f"{days_until} days away" if days_until > 0 else "TODAY!"\n    print(f"  {name:20s} | {status}")\n\nfuture = [e for e in countdown if e[2] > 0]\nif future:\n    nearest = min(future, key=lambda x: x[2])\n    farthest = max(future, key=lambda x: x[2])\n    print(f"\\nNext: {nearest[0]} ({nearest[2]} days)")\n    print(f"Furthest: {farthest[0]} ({farthest[2]} days)")`,
      hint: "Use datetime.strptime() to parse dates. Subtract date.today() from each event to get days. Use min/max with key function."
    }
  },
  {
    id: 'lib03',
    title: 'string & textwrap — Text Utilities',
    difficulty: 'library',
    order: 3,
    description: 'Advanced string constants, templates, and text formatting utilities',
    duration: '20 min',
    content: `The \`string\` and \`textwrap\` modules add powerful extras for text processing, validation, and formatting.

## The string Module

### String Constants

\`\`\`python
import string

print(string.ascii_lowercase)  # abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)  # ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)           # 0123456789
print(string.punctuation)      # !"#%&'()*+,-./:;<=>?@[\\]^_
\`\`\`

### Template Strings

\`\`\`python
from string import Template

tmpl = Template("Hello, $$name! You have $$count messages.")
result = tmpl.substitute(name="Alice", count=5)
print(result)

# safe_substitute won't crash on missing keys
tmpl2 = Template("$$greeting, $$name!")
result2 = tmpl2.safe_substitute(greeting="Hi")
print(result2)  # Hi, $$name!
\`\`\`

> **Tip:** Use Template strings when the template comes from user input. Unlike f-strings, they can't execute arbitrary code, making them safer.

## The textwrap Module

### Wrapping Text

\`\`\`python
import textwrap

long_text = "Python is an interpreted, high-level programming language."
wrapped = textwrap.fill(long_text, width=40)
print(wrapped)
\`\`\`

### Indentation & Shortening

\`\`\`python
import textwrap

text = "Line one.\\nLine two.\\nLine three."
indented = textwrap.indent(text, "    ")
print(indented)

short = textwrap.shorten("A very long string for display", width=20, placeholder="...")
print(short)
\`\`\``,
    codeExample: `import string
import textwrap
from string import Template

print("=== String Constants ===")
print(f"Lowercase: {string.ascii_lowercase}")
print(f"Digits: {string.digits}")
print(f"Punctuation: {string.punctuation[:20]}...")

print("\\n=== Password Strength Checker ===")
def check_password(pwd):
    score = 0
    checks = []
    if len(pwd) >= 8: score += 1; checks.append("Length OK")
    if any(c in string.ascii_uppercase for c in pwd): score += 1; checks.append("Has uppercase")
    if any(c in string.ascii_lowercase for c in pwd): score += 1; checks.append("Has lowercase")
    if any(c in string.digits for c in pwd): score += 1; checks.append("Has digits")
    if any(c in string.punctuation for c in pwd): score += 1; checks.append("Has special chars")
    strength = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"][score]
    return strength, checks

for pwd in ["abc", "Hello123", "P@ssw0rd!", "simple"]:
    strength, checks = check_password(pwd)
    print(f"  '{pwd}' -> {strength} ({', '.join(checks)})")

print("\\n=== Text Wrapping ===")
article = "Python is one of the most popular programming languages in the world. It is used for web development, data science, artificial intelligence, automation, and much more."
print(textwrap.fill(article, width=45))
print(f"\\nShortened: {textwrap.shorten(article, width=50, placeholder='...')}")`,
    exercise: {
      title: "Email Template System",
      description: "Build a system that generates personalized emails using Template strings. Create a template with placeholders for name, product, price, and date. Generate emails for 3 customers.",
      starterCode: `from string import Template\nimport textwrap\n\ncustomers = [\n    {"name": "Alice", "product": "Python Course", "price": "49.99", "date": "March 15, 2025"},\n    {"name": "Bob", "product": "Data Science Kit", "price": "79.99", "date": "March 16, 2025"},\n    {"name": "Charlie", "product": "AI Workshop", "price": "99.99", "date": "March 17, 2025"},\n]\n\n# Define template and generate formatted emails for each customer\n`,
      solution: `from string import Template\nimport textwrap\n\nemail_template = Template("Dear $name,\\n\\nThank you for purchasing $product for $price on $date.\\n\\nYour order has been confirmed.\\n\\nBest regards,\\nPyMaster Store")\n\ncustomers = [\n    {"name": "Alice", "product": "Python Course", "price": "49.99", "date": "March 15, 2025"},\n    {"name": "Bob", "product": "Data Science Kit", "price": "79.99", "date": "March 16, 2025"},\n    {"name": "Charlie", "product": "AI Workshop", "price": "99.99", "date": "March 17, 2025"},\n]\n\nfor i, customer in enumerate(customers):\n    email = email_template.substitute(**customer)\n    print(f"{'='*40}")\n    print(f"EMAIL {i+1}")\n    print(f"{'='*40}")\n    for paragraph in email.split("\\n\\n"):\n        if paragraph.strip():\n            print(textwrap.fill(paragraph.strip(), width=40, initial_indent="  ", subsequent_indent="  "))\n            print()\n\nprint(f"Total emails generated: {len(customers)}")`,
      hint: "Create a Template with $name, $product, $price, $date placeholders. Use template.substitute(**customer_dict) to fill values."
    }
  },
  {
    id: 'lib04',
    title: 'collections — Specialized Containers',
    difficulty: 'library',
    order: 4,
    description: 'Counter, defaultdict, namedtuple, deque, and OrderedDict for smarter data handling',
    duration: '30 min',
    content: `The \`collections\` module provides specialized container types that extend Python's built-in dict, list, set, and tuple.

## Counter — Counting Made Easy

\`\`\`python
from collections import Counter

colors = ['red', 'blue', 'red', 'green', 'blue', 'red']
count = Counter(colors)
print(count)              # Counter({'red': 3, 'blue': 2, 'green': 1})
print(count['blue'])      # 2
print(count['yellow'])    # 0 (no KeyError!)
print(count.most_common(2))  # [('red', 3), ('blue', 2)]
\`\`\`

## defaultdict — Dicts with Default Values

\`\`\`python
from collections import defaultdict

grouped = defaultdict(list)
items = [('fruit', 'apple'), ('veggie', 'carrot'), ('fruit', 'banana')]
for category, item in items:
    grouped[category].append(item)
print(dict(grouped))
# {'fruit': ['apple', 'banana'], 'veggie': ['carrot']}
\`\`\`

## namedtuple — Readable Tuples

\`\`\`python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)          # 3 4
print(p._asdict())        # {'x': 3, 'y': 4}
\`\`\`

## deque — Double-Ended Queue

\`\`\`python
from collections import deque

dq = deque([1, 2, 3])
dq.append(4)          # Add to right
dq.appendleft(0)      # Add to left — O(1)!
dq.rotate(2)           # Rotate right by 2

# Fixed-size deque (keeps last N items)
recent = deque(maxlen=3)
for i in range(10):
    recent.append(i)
print(recent)           # deque([7, 8, 9])
\`\`\`

> **Tip:** Use \`deque(maxlen=N)\` to keep only the last N items — perfect for "recent history" features.

## ChainMap — Merge Multiple Dicts

\`\`\`python
from collections import ChainMap

defaults = {'color': 'blue', 'size': 'medium'}
user_prefs = {'color': 'red'}
settings = ChainMap(user_prefs, defaults)
print(settings['color'])   # 'red' (user wins)
print(settings['size'])    # 'medium' (fallback)
\`\`\``,
    codeExample: `from collections import Counter, defaultdict, namedtuple, deque

print("=== Counter: Word Frequency ===")
text = "to be or not to be that is the question to be is to exist"
words = Counter(text.split())
print(f"Word counts: {dict(words)}")
print(f"Top 3: {words.most_common(3)}")

print("\\n=== defaultdict: Student Groups ===")
students = [('Math', 'Alice'), ('Science', 'Bob'), ('Math', 'Charlie'),
            ('Science', 'Diana'), ('Art', 'Eve'), ('Math', 'Frank')]
groups = defaultdict(list)
for subject, name in students:
    groups[subject].append(name)
for subject, names in groups.items():
    print(f"  {subject}: {', '.join(names)}")

print("\\n=== namedtuple: Product Catalog ===")
Product = namedtuple('Product', 'name price category rating')
products = [
    Product('Laptop', 999.99, 'Electronics', 4.5),
    Product('Book', 19.99, 'Education', 4.8),
    Product('Headphones', 79.99, 'Electronics', 4.2),
]
for p in products:
    print(f"  {p.name}: {p.price} ({p.category}) - {p.rating} stars")

print("\\n=== deque: Recent Activity (last 5) ===")
activity_log = deque(maxlen=5)
actions = ['login', 'view_page', 'edit_profile', 'upload_file',
           'send_message', 'logout', 'login', 'view_dashboard']
for action in actions:
    activity_log.append(action)
print(f"  Recent: {list(activity_log)}")`,
    exercise: {
      title: "Student Grade Analyzer",
      description: "Given a list of (student, subject, grade) tuples, use collections to: group grades by student, count grade distribution (A/B/C/D/F), create Student namedtuples with averages, keep top 3 in a deque.",
      starterCode: `from collections import Counter, defaultdict, namedtuple, deque\n\ngrades_data = [\n    ('Alice', 'Math', 92), ('Alice', 'Science', 88), ('Alice', 'English', 95),\n    ('Bob', 'Math', 78), ('Bob', 'Science', 85), ('Bob', 'English', 72),\n    ('Charlie', 'Math', 95), ('Charlie', 'Science', 91), ('Charlie', 'English', 89),\n    ('Diana', 'Math', 67), ('Diana', 'Science', 73), ('Diana', 'English', 70),\n    ('Eve', 'Math', 88), ('Eve', 'Science', 92), ('Eve', 'English', 86),\n]\n\n# 1. Group grades by student using defaultdict\n# 2. Calculate letter grades and count distribution\n# 3. Create namedtuple for students, keep top 3\n`,
      solution: `from collections import Counter, defaultdict, namedtuple, deque\n\ngrades_data = [\n    ('Alice', 'Math', 92), ('Alice', 'Science', 88), ('Alice', 'English', 95),\n    ('Bob', 'Math', 78), ('Bob', 'Science', 85), ('Bob', 'English', 72),\n    ('Charlie', 'Math', 95), ('Charlie', 'Science', 91), ('Charlie', 'English', 89),\n    ('Diana', 'Math', 67), ('Diana', 'Science', 73), ('Diana', 'English', 70),\n    ('Eve', 'Math', 88), ('Eve', 'Science', 92), ('Eve', 'English', 86),\n]\n\nstudent_grades = defaultdict(list)\nfor name, subject, grade in grades_data:\n    student_grades[name].append((subject, grade))\n\nprint("=== Grades by Student ===")\nfor name, grades in student_grades.items():\n    subjects = ', '.join(f"{s}: {g}" for s, g in grades)\n    print(f"  {name}: {subjects}")\n\ndef letter_grade(score):\n    if score >= 90: return 'A'\n    elif score >= 80: return 'B'\n    elif score >= 70: return 'C'\n    elif score >= 60: return 'D'\n    return 'F'\n\nStudentRecord = namedtuple('StudentRecord', 'name average letter')\naverages = []\nall_letters = []\nfor name, grades in student_grades.items():\n    avg = sum(g for _, g in grades) / len(grades)\n    averages.append(StudentRecord(name, round(avg, 1), letter_grade(avg)))\n    all_letters.extend(letter_grade(g) for _, g in grades)\n\nprint("\\n=== Grade Distribution ===")\nfor grade, count in sorted(Counter(all_letters).items()):\n    print(f"  {grade}: {'#' * (count * 3)} ({count})")\n\naverages.sort(key=lambda s: s.average, reverse=True)\ntop3 = deque(averages[:3], maxlen=3)\nprint("\\n=== Top 3 Students ===")\nfor i, s in enumerate(top3, 1):\n    print(f"  {i}. {s.name}: {s.average}% ({s.letter})")`,
      hint: "Use defaultdict(list) to group. Calculate average with sum()/len(). Create letter_grade() function. Use Counter on letter grades. Sort by average, use deque(maxlen=3)."
    }
  },
  {
    id: 'lib05',
    title: 'itertools — Iterator Power Tools',
    difficulty: 'library',
    order: 5,
    description: 'Efficient looping with combinations, permutations, chains, grouping, and more',
    duration: '25 min',
    content: `The \`itertools\` module provides fast, memory-efficient tools for working with iterators. They're building blocks for elegant loops.

## Combining Iterables

\`\`\`python
from itertools import chain, zip_longest

a = [1, 2, 3]
b = [4, 5, 6]
print(list(chain(a, b)))  # [1, 2, 3, 4, 5, 6]

names = ['Alice', 'Bob', 'Charlie']
scores = [95, 87]
result = list(zip_longest(names, scores, fillvalue=0))
print(result)  # [('Alice', 95), ('Bob', 87), ('Charlie', 0)]
\`\`\`

## Combinatorics

\`\`\`python
from itertools import product, permutations, combinations

# product: all pairs
print(list(product('AB', '12')))
# [('A','1'), ('A','2'), ('B','1'), ('B','2')]

# permutations: order matters
print(list(permutations('ABC', 2)))

# combinations: order doesn't matter
print(list(combinations('ABCD', 2)))
\`\`\`

## Grouping & Accumulating

\`\`\`python
from itertools import groupby, accumulate
import operator

# groupby (data MUST be sorted by key first!)
data = sorted(['apple', 'avocado', 'banana', 'blueberry'])
for letter, group in groupby(data, key=lambda x: x[0]):
    print(f"  {letter}: {list(group)}")

# accumulate: running totals
nums = [1, 2, 3, 4, 5]
print(list(accumulate(nums)))           # [1, 3, 6, 10, 15]
print(list(accumulate(nums, operator.mul)))  # [1, 2, 6, 24, 120]
\`\`\`

## Filtering

\`\`\`python
from itertools import takewhile, dropwhile

nums = [1, 3, 5, 2, 4, 6]
print(list(takewhile(lambda x: x < 5, nums)))  # [1, 3]
print(list(dropwhile(lambda x: x < 5, nums)))  # [5, 2, 4, 6]
\`\`\`

> **Tip:** \`groupby()\` only groups CONSECUTIVE identical elements. Always sort by the grouping key first!`,
    codeExample: `from itertools import chain, combinations, product, accumulate, groupby

print("=== Chain: Merge Lists ===")
morning = ['email', 'standup', 'code review']
afternoon = ['coding', 'testing']
all_tasks = list(chain(morning, afternoon))
print(f"All tasks: {all_tasks}")

print("\\n=== Combinations: Team Pairs ===")
team = ['Alice', 'Bob', 'Charlie', 'Diana']
pairs = list(combinations(team, 2))
print(f"{len(pairs)} possible pairs:")
for p in pairs:
    print(f"  {p[0]} & {p[1]}")

print("\\n=== Product: Menu Combos ===")
sizes = ['S', 'M', 'L']
drinks = ['Coffee', 'Tea']
for combo in product(sizes, drinks):
    print(f"  {combo[0]} {combo[1]}")

print("\\n=== Accumulate: Running Balance ===")
transactions = [1000, -200, -50, 500, -100, -300, 200]
labels = ['Initial', 'Rent', 'Coffee', 'Salary', 'Food', 'Bills', 'Freelance']
balances = list(accumulate(transactions))
for label, balance in zip(labels, balances):
    print(f"  {label:12s}: {balance:>8,}")

print("\\n=== GroupBy: Score Categories ===")
scores = sorted([85, 92, 78, 95, 67, 88, 73, 91], reverse=True)
def grade(s):
    if s >= 90: return 'A'
    elif s >= 80: return 'B'
    elif s >= 70: return 'C'
    return 'D'
for letter, group in groupby(scores, key=grade):
    print(f"  Grade {letter}: {list(group)}")`,
    exercise: {
      title: "Pizza Order Combinations",
      description: "A pizza shop has sizes, crusts, and toppings. Use itertools to generate all combos, 2-topping combos, total possible pizzas, and a running total of prices.",
      starterCode: `from itertools import product, combinations, accumulate\n\nsizes = [('Small', 8.99), ('Medium', 11.99), ('Large', 14.99)]\ncrusts = ['Thin', 'Thick']\ntoppings = ['Pepperoni', 'Mushroom', 'Olive', 'Pepper']\n\n# 1. All base pizzas using product\n# 2. All 2-topping combos\n# 3. Total possible unique pizzas\n# 4. Sample order with running total using accumulate\n`,
      solution: `from itertools import product, combinations, accumulate\nimport random\n\nsizes = [('Small', 8.99), ('Medium', 11.99), ('Large', 14.99)]\ncrusts = ['Thin', 'Thick']\ntoppings = ['Pepperoni', 'Mushroom', 'Olive', 'Pepper']\ntopping_price = 1.50\n\nprint("=== Base Pizzas ===")\nbases = list(product(sizes, crusts))\nfor (size_name, price), crust in bases:\n    print(f"  {size_name} {crust}: {price}")\n\nprint("\\n=== 2-Topping Combos ===")\ntopping_combos = list(combinations(toppings, 2))\nfor combo in topping_combos:\n    print(f"  {combo[0]} + {combo[1]}")\n\ntotal = len(bases) * len(topping_combos)\nprint(f"\\nTotal unique pizzas: {len(bases)} x {len(topping_combos)} = {total}")\n\nprint("\\n=== Sample Order ===")\nrandom.seed(42)\nprices = []\nfor i in range(5):\n    (sn, bp), crust = random.choice(bases)\n    tops = random.choice(topping_combos)\n    total_p = bp + 2 * topping_price\n    prices.append(total_p)\n    print(f"  {sn} {crust} w/ {tops[0]} & {tops[1]}: {total_p:.2f}")\n\nrunning = list(accumulate(prices))\nprint(f"\\nOrder total: {running[-1]:.2f}")`,
      hint: "Use product(sizes, crusts) for base combos. Use combinations(toppings, 2) for toppings. Multiply lengths for total. Use accumulate() on prices."
    }
  },
  {
    id: 'lib06',
    title: 'functools & operator — Functional Tools',
    difficulty: 'library',
    order: 6,
    description: 'Caching, partial functions, reducers, and operator shortcuts for cleaner code',
    duration: '25 min',
    content: `The \`functools\` module provides higher-order functions, and \`operator\` provides function versions of Python operators.

## lru_cache — Automatic Memoization

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2: return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))
print(fibonacci.cache_info())
\`\`\`

> **Tip:** Without cache, fibonacci(50) makes ~2^50 calls. With cache, it's just 50 calls.

## partial — Pre-fill Arguments

\`\`\`python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)
print(square(5))   # 25
print(cube(3))     # 27
\`\`\`

## reduce — Combine All Elements

\`\`\`python
from functools import reduce

nums = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, nums)      # 15
product = reduce(lambda a, b: a * b, nums)     # 120
flat = reduce(lambda a, b: a + b, [[1,2],[3,4]])  # [1,2,3,4]
\`\`\`

## The operator Module

\`\`\`python
import operator
from operator import itemgetter

# Faster than lambdas
reduce(operator.add, [1,2,3,4,5])  # 15

# itemgetter for sorting
students = [{'name': 'Charlie', 'grade': 88}, {'name': 'Alice', 'grade': 95}]
sorted_students = sorted(students, key=itemgetter('grade'), reverse=True)
\`\`\``,
    codeExample: `from functools import lru_cache, partial, reduce
import operator
import time

print("=== lru_cache: Fibonacci ===")
@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

start = time.time()
result = fib(200)
elapsed = time.time() - start
print(f"fib(200) = {result}")
print(f"Computed in {elapsed:.8f} seconds")
print(f"Cache: {fib.cache_info()}")

print("\\n=== partial: Utility Functions ===")
def greet(greeting, name, punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

say_hello = partial(greet, "Hello")
say_hi = partial(greet, "Hi", punctuation="~")
print(say_hello("Alice"))
print(say_hi("Bob"))

print("\\n=== reduce + operator ===")
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Numbers: {nums}")
print(f"Sum:     {reduce(operator.add, nums)}")
print(f"Product: {reduce(operator.mul, nums)}")

print("\\n=== Sorting with itemgetter ===")
from operator import itemgetter
employees = [('Alice', 'Engineering', 95000), ('Bob', 'Marketing', 72000),
             ('Charlie', 'Engineering', 88000), ('Diana', 'Marketing', 81000)]
by_salary = sorted(employees, key=itemgetter(2), reverse=True)
print("By salary (highest first):")
for name, dept, salary in by_salary:
    print(f"  {name:10s} {dept:15s} {salary:,}")`,
    exercise: {
      title: "Memoized Calculator",
      description: "Build a calculator using lru_cache for factorial/fibonacci, partial for preset operations, and reduce to chain operations on a number.",
      starterCode: `from functools import lru_cache, partial, reduce\n\n# 1. Create cached factorial and fibonacci\n# 2. Create partial functions: double, triple, square\n# 3. Use reduce to chain operations on a starting number\n`,
      solution: `from functools import lru_cache, partial, reduce\n\n@lru_cache(maxsize=None)\ndef factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2: return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\ndef multiply(x, factor):\n    return x * factor\n\ndouble = partial(multiply, factor=2)\ntriple = partial(multiply, factor=3)\nsquare = partial(lambda x, exp: x ** exp, exp=2)\n\nprint("=== Cached Computations ===")\nfor n in [10, 20, 30]:\n    print(f"  {n}! = {factorial(n):,}")\nprint(f"  Cache: {factorial.cache_info()}")\n\nfibs = [fibonacci(i) for i in range(15)]\nprint(f"  Fibonacci: {fibs}")\n\nprint("\\n=== Partial Functions ===")\nprint(f"  double(7) = {double(7)}")\nprint(f"  triple(7) = {triple(7)}")\n\nprint("\\n=== Operation Pipeline (start: 3) ===")\noperations = [\n    ("double", double),\n    ("add 5", lambda x: x + 5),\n    ("triple", triple),\n]\ndef apply_ops(value, operation):\n    name, func = operation\n    result = func(value)\n    print(f"  {name}({value}) = {result}")\n    return result\nresult = reduce(apply_ops, operations, 3)\nprint(f"  Final: {result}")`,
      hint: "Use @lru_cache decorator for factorial/fibonacci. Use partial(multiply, factor=2) for double. For reduce, each operation is a (name, func) tuple."
    }
  },
  {
    id: 'lib07',
    title: 're — Regular Expressions Mastery',
    difficulty: 'library',
    order: 7,
    description: 'Pattern matching, text extraction, validation, and replacement with regex',
    duration: '30 min',
    content: `Regular expressions (regex) are patterns for matching text. Python's \`re\` module handles validation, extraction, and transformation.

## Core Functions

| Function | Purpose |
|----------|---------|
| \`re.search()\` | Find first match anywhere |
| \`re.match()\` | Match at START only |
| \`re.findall()\` | Find ALL matches as list |
| \`re.sub()\` | Replace matches |
| \`re.split()\` | Split by pattern |

## Pattern Syntax

| Pattern | Matches |
|---------|---------|
| \`\\d\` | Any digit (0-9) |
| \`\\w\` | Word char (letters, digits, _) |
| \`\\s\` | Whitespace |
| \`.\` | Any char except newline |
| \`+\` | One or more |
| \`*\` | Zero or more |
| \`?\` | Zero or one (optional) |
| \`{n,m}\` | Between n and m times |
| \`^\` | Start of string |
| \`$\` | End of string |

## Groups — Capture Parts

\`\`\`python
import re

text = "Name: Alice, Age: 30"
match = re.search(r'Name: (\\w+), Age: (\\d+)', text)
if match:
    print(match.group(1))  # 'Alice'
    print(match.group(2))  # '30'
\`\`\`

## Substitution

\`\`\`python
import re

text = "2025-03-15"
result = re.sub(r'(\\d{4})-(\\d{2})-(\\d{2})', r'\\3/\\2/\\1', text)
print(result)  # "15/03/2025"
\`\`\`

> **Tip:** Always use raw strings (\`r'...'\`) for regex patterns to prevent Python from interpreting backslashes.`,
    codeExample: `import re

print("=== Pattern Matching ===")
text = "Contact us at support@pymaster.com or sales@pymaster.com"
emails = re.findall(r'[\\w.-]+@[\\w.-]+', text)
print(f"Found emails: {emails}")

print("\\n=== Extracting Structured Data ===")
log = """[2025-03-15 10:30:45] ERROR: Connection timeout
[2025-03-15 10:31:02] INFO: Retry attempt 1
[2025-03-15 10:31:15] ERROR: Connection refused
[2025-03-15 10:32:00] INFO: Connected successfully"""

pattern = r'\\[(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2})\\] (\\w+): (.+)'
for match in re.finditer(pattern, log):
    timestamp, level, message = match.groups()
    print(f"  {level:5s} | {timestamp} | {message}")

print("\\n=== Text Cleaning ===")
messy = "  Hello!!!   How   are   you???  "
clean = re.sub(r'\\s+', ' ', messy).strip()
clean = re.sub(r'([!?.]){2,}', r'\\1', clean)
print(f"Before: '{messy}'")
print(f"After:  '{clean}'")

print("\\n=== Validators ===")
def validate(pattern, text, name):
    result = "PASS" if re.match(pattern, text) else "FAIL"
    print(f"  {name}: {text} -> {result}")

validate(r'^[\\w.-]+@[\\w.-]+\\.\\w{2,}$', "user@test.com", "Email")
validate(r'^[\\w.-]+@[\\w.-]+\\.\\w{2,}$', "not-an-email", "Email")
validate(r'^\\d{3}-\\d{3}-\\d{4}$', "555-123-4567", "Phone")
validate(r'^#[0-9a-fA-F]{6}$', "#FF5733", "Hex Color")`,
    exercise: {
      title: "Log File Parser",
      description: "Parse a web server log to extract IP addresses, URLs, status codes. Count requests per IP and find failed requests.",
      starterCode: `import re\nfrom collections import Counter\n\nlog_data = """192.168.1.1 - GET /index.html 200\n10.0.0.5 - POST /api/login 401\n192.168.1.1 - GET /about.html 200\n172.16.0.10 - GET /products 200\n10.0.0.5 - POST /api/login 200\n192.168.1.1 - GET /contact.html 200\n172.16.0.10 - GET /api/data 500"""\n\n# Extract IPs, URLs, status codes using regex\n# Count requests per IP\n# Find failed requests (status >= 400)\n`,
      solution: `import re\nfrom collections import Counter\n\nlog_data = """192.168.1.1 - GET /index.html 200\n10.0.0.5 - POST /api/login 401\n192.168.1.1 - GET /about.html 200\n172.16.0.10 - GET /products 200\n10.0.0.5 - POST /api/login 200\n192.168.1.1 - GET /contact.html 200\n172.16.0.10 - GET /api/data 500"""\n\npattern = r'(\\d+\\.\\d+\\.\\d+\\.\\d+) - (\\w+) (\\S+) (\\d+)'\nentries = []\nfor match in re.finditer(pattern, log_data):\n    ip, method, url, status = match.groups()\n    entries.append({'ip': ip, 'method': method, 'url': url, 'status': int(status)})\n\nprint("=== Unique IPs ===")\nfor ip in sorted(set(e['ip'] for e in entries)):\n    print(f"  {ip}")\n\nprint("\\n=== Requests per IP ===")\nfor ip, count in Counter(e['ip'] for e in entries).most_common():\n    print(f"  {ip}: {count} requests")\n\nprint("\\n=== Failed Requests ===")\nfailed = [e for e in entries if e['status'] >= 400]\nfor e in failed:\n    print(f"  [{e['status']}] {e['ip']} {e['method']} {e['url']}")\nprint(f"\\nTotal: {len(entries)} requests, {len(failed)} failed")`,
      hint: "Use pattern r'(\\d+\\.\\d+\\.\\d+\\.\\d+) - (\\w+) (\\S+) (\\d+)' for IP, method, URL, status. Use re.finditer() for Match objects."
    }
  },
  {
    id: 'lib08',
    title: 'json & csv — Data Serialization',
    difficulty: 'library',
    order: 8,
    description: 'Read, write, and transform JSON and CSV data formats for real applications',
    duration: '25 min',
    content: `JSON and CSV are the most common data formats. Python's standard library handles both.

## The json Module

### Python to JSON

\`\`\`python
import json

data = {"name": "Alice", "age": 30, "skills": ["Python", "SQL"]}
json_str = json.dumps(data)           # Compact
pretty = json.dumps(data, indent=2)    # Pretty-printed
\`\`\`

### JSON to Python

\`\`\`python
import json
data = json.loads('{"name": "Bob", "scores": [85, 92]}')
print(data['name'])  # Bob
\`\`\`

### Type Mapping

| Python | JSON |
|--------|------|
| \`dict\` | object |
| \`list\` | array |
| \`str\` | string |
| \`int/float\` | number |
| \`True/False\` | true/false |
| \`None\` | null |

## The csv Module

### Reading CSV

\`\`\`python
import csv
import io

csv_data = "name,age,city\\nAlice,30,NYC\\nBob,25,Boston"
reader = csv.DictReader(io.StringIO(csv_data))
for row in reader:
    print(f"  {row['name']} ({row['city']})")
\`\`\`

### Writing CSV

\`\`\`python
import csv
import io

output = io.StringIO()
writer = csv.DictWriter(output, fieldnames=['name', 'score'])
writer.writeheader()
writer.writerow({'name': 'Alice', 'score': 95})
print(output.getvalue())
\`\`\`

> **Tip:** Always use the \`csv\` module instead of splitting by commas manually. It correctly handles quoted fields and commas within values.`,
    codeExample: `import json
import csv
import io

print("=== JSON: API Response ===")
api_response = {
    "status": "success",
    "data": {
        "users": [
            {"id": 1, "name": "Alice", "role": "admin", "active": True},
            {"id": 2, "name": "Bob", "role": "editor", "active": True},
            {"id": 3, "name": "Charlie", "role": "viewer", "active": False},
        ],
        "total": 3
    }
}
print(json.dumps(api_response, indent=2))
active = [u['name'] for u in api_response['data']['users'] if u['active']]
print(f"\\nActive users: {active}")

print("\\n=== CSV: Sales Report ===")
csv_data = """product,category,price,quantity
Laptop,Electronics,999.99,45
Phone,Electronics,699.99,120
Book,Education,29.99,200
Headphones,Electronics,149.99,80"""

reader = csv.DictReader(io.StringIO(csv_data))
products = list(reader)

print(f"{'Product':<15} {'Category':<15} {'Revenue':>10}")
print("-" * 42)
total_revenue = 0
for p in products:
    revenue = float(p['price']) * int(p['quantity'])
    total_revenue += revenue
    print(f"{p['product']:<15} {p['category']:<15} {revenue:>10,.2f}")
print("-" * 42)
print(f"{'TOTAL':<30} {total_revenue:>10,.2f}")`,
    exercise: {
      title: "Student Database Manager",
      description: "Store student data as JSON, export to CSV format, search and filter students, and calculate class statistics.",
      starterCode: `import json\nimport csv\nimport io\n\nstudents = [\n    {"name": "Alice", "age": 20, "grades": {"Math": 92, "Science": 88}, "gpa": 3.8},\n    {"name": "Bob", "age": 21, "grades": {"Math": 78, "Science": 85}, "gpa": 3.2},\n    {"name": "Charlie", "age": 19, "grades": {"Math": 95, "Science": 91}, "gpa": 3.9},\n]\n\n# 1. Display as pretty JSON\n# 2. Export to CSV\n# 3. Find students with GPA >= 3.5\n# 4. Calculate stats as JSON\n`,
      solution: `import json\nimport csv\nimport io\n\nstudents = [\n    {"name": "Alice", "age": 20, "grades": {"Math": 92, "Science": 88}, "gpa": 3.8},\n    {"name": "Bob", "age": 21, "grades": {"Math": 78, "Science": 85}, "gpa": 3.2},\n    {"name": "Charlie", "age": 19, "grades": {"Math": 95, "Science": 91}, "gpa": 3.9},\n]\n\nprint("=== JSON ===")\nprint(json.dumps(students[:2], indent=2))\n\nprint("\\n=== CSV Export ===")\noutput = io.StringIO()\nfields = ['name', 'age', 'Math', 'Science', 'gpa']\nwriter = csv.DictWriter(output, fieldnames=fields)\nwriter.writeheader()\nfor s in students:\n    flat = {'name': s['name'], 'age': s['age'], 'gpa': s['gpa'],\n            'Math': s['grades']['Math'], 'Science': s['grades']['Science']}\n    writer.writerow(flat)\nprint(output.getvalue())\n\nprint("=== Honor Roll (GPA >= 3.5) ===")\nhonor = [s for s in students if s['gpa'] >= 3.5]\nfor s in honor:\n    print(f"  {s['name']}: GPA {s['gpa']}")\n\nstats = {}\nfor subj in ['Math', 'Science']:\n    scores = [s['grades'][subj] for s in students]\n    stats[subj] = {"avg": round(sum(scores)/len(scores), 1), "max": max(scores)}\nprint("\\n=== Stats ===")\nprint(json.dumps(stats, indent=2))`,
      hint: "Use json.dumps(indent=2) for pretty print. Flatten grades dict for CSV. Use list comprehension for filtering."
    }
  },
  {
    id: 'lib09',
    title: 'statistics & decimal — Precise Computing',
    difficulty: 'library',
    order: 9,
    description: 'Statistical functions, precise decimal arithmetic, and data analysis tools',
    duration: '25 min',
    content: `Python's \`statistics\` module provides stats functions, while \`decimal\` offers exact arithmetic for financial calculations.

## The statistics Module

\`\`\`python
import statistics

data = [4, 8, 6, 5, 3, 8, 9, 7, 6, 5]
print(statistics.mean(data))       # 6.1
print(statistics.median(data))     # 6.0
print(statistics.mode(data))       # Most frequent
print(statistics.stdev(data))      # Standard deviation
print(statistics.variance(data))   # Variance
\`\`\`

### Correlation & Regression

\`\`\`python
import statistics

hours = [2, 3, 5, 7, 8, 10]
scores = [65, 70, 80, 85, 90, 95]
r = statistics.correlation(hours, scores)
slope, intercept = statistics.linear_regression(hours, scores)
predicted = slope * 6 + intercept
\`\`\`

## The decimal Module

\`\`\`python
from decimal import Decimal, ROUND_HALF_UP

# Float problem
print(0.1 + 0.2)                  # 0.30000000000000004

# Decimal solution (use strings!)
a = Decimal('0.1') + Decimal('0.2')
print(a)                           # 0.3

# Financial rounding
price = Decimal('19.995')
rounded = price.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
print(rounded)                     # 20.00
\`\`\`

> **Tip:** Always create Decimal from strings, not floats! \`Decimal(0.1)\` inherits float imprecision.`,
    codeExample: `import statistics
from decimal import Decimal, ROUND_HALF_UP

print("=== Class Statistics ===")
scores = [85, 92, 78, 95, 67, 88, 73, 91, 82, 69, 94, 86]

print(f"Students: {len(scores)}")
print(f"Mean: {statistics.mean(scores):.1f}")
print(f"Median: {statistics.median(scores)}")
print(f"Std Dev: {statistics.stdev(scores):.2f}")
print(f"Range: {max(scores) - min(scores)}")

print("\\n=== Study Hours vs Scores ===")
hours = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
r = statistics.correlation(hours, scores)
slope, intercept = statistics.linear_regression(hours, scores)
print(f"Correlation: {r:.4f}")
print(f"Regression: score = {slope:.2f} * hours + {intercept:.2f}")
for h in [5, 10, 15]:
    print(f"  {h} hours -> predicted: {slope * h + intercept:.1f}")

print("\\n=== Decimal: Financial Calculator ===")
print(f"Float:   0.1 + 0.2 = {0.1 + 0.2}")
print(f"Decimal: 0.1 + 0.2 = {Decimal('0.1') + Decimal('0.2')}")

items = [("Widget A", Decimal('12.99'), 3), ("Widget B", Decimal('24.50'), 2),
         ("Widget C", Decimal('8.75'), 5)]

print("\\nInvoice:")
subtotal = Decimal('0')
for name, price, qty in items:
    line = price * qty
    subtotal += line
    print(f"  {name}: {qty} x {price} = {line}")

tax = (subtotal * Decimal('0.0825')).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
total = subtotal + tax
print(f"  Subtotal: {subtotal}")
print(f"  Tax (8.25%): {tax}")
print(f"  Total: {total}")`,
    exercise: {
      title: "Sales Data Analyzer",
      description: "Given monthly sales data, calculate stats (mean, median, stdev), find best/worst months, month-over-month growth, and predict next month using linear regression.",
      starterCode: `import statistics\nfrom decimal import Decimal, ROUND_HALF_UP\n\nmonthly_sales = {\n    'Jan': '12500.50', 'Feb': '11800.75', 'Mar': '13200.00',\n    'Apr': '14500.25', 'May': '15800.00', 'Jun': '16200.50',\n    'Jul': '15500.75', 'Aug': '17100.00', 'Sep': '16800.25',\n    'Oct': '18200.50', 'Nov': '19500.00', 'Dec': '22000.75',\n}\n\n# Calculate stats, find best/worst, growth rates, predict next month\n`,
      solution: `import statistics\nfrom decimal import Decimal, ROUND_HALF_UP\n\nmonthly_sales = {\n    'Jan': '12500.50', 'Feb': '11800.75', 'Mar': '13200.00',\n    'Apr': '14500.25', 'May': '15800.00', 'Jun': '16200.50',\n    'Jul': '15500.75', 'Aug': '17100.00', 'Sep': '16800.25',\n    'Oct': '18200.50', 'Nov': '19500.00', 'Dec': '22000.75',\n}\n\nmonths = list(monthly_sales.keys())\nvalues = [float(v) for v in monthly_sales.values()]\n\nprint("=== Annual Sales Report ===")\nprint(f"Average: {statistics.mean(values):,.2f}")\nprint(f"Median: {statistics.median(values):,.2f}")\nprint(f"Std Dev: {statistics.stdev(values):,.2f}")\n\nbest_idx = values.index(max(values))\nworst_idx = values.index(min(values))\nprint(f"\\nBest: {months[best_idx]} ({values[best_idx]:,.2f})")\nprint(f"Worst: {months[worst_idx]} ({values[worst_idx]:,.2f})")\n\nprint("\\n=== Growth ===")\nfor i in range(1, len(values)):\n    growth = ((values[i] - values[i-1]) / values[i-1]) * 100\n    arrow = "+" if growth >= 0 else ""\n    print(f"  {months[i-1]}->{months[i]}: {arrow}{growth:.1f}%")\n\nmonth_nums = list(range(1, 13))\nslope, intercept = statistics.linear_regression(month_nums, values)\nr = statistics.correlation(month_nums, values)\npredicted = slope * 13 + intercept\nprint(f"\\n=== Trend ===")\nprint(f"Correlation: {r:.4f}")\nprint(f"Growth: {slope:,.2f}/month")\nprint(f"Predicted Jan: {predicted:,.2f}")`,
      hint: "Convert strings to float for statistics functions. Use linear_regression(month_numbers, sales) to predict. Calculate growth as ((new-old)/old)*100."
    }
  },
  {
    id: 'lib10',
    title: 'dataclasses & enum — Modern Python',
    difficulty: 'library',
    order: 10,
    description: 'Create clean data structures with dataclasses and type-safe constants with enums',
    duration: '25 min',
    content: `Python 3.7+ introduced \`dataclasses\` for cleaner data classes, and \`enum\` for type-safe constants.

## dataclasses — Less Boilerplate

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0
    tags: list = field(default_factory=list)

p = Product("Laptop", 999.99, 5)
print(p)  # Auto-generated __repr__
\`\`\`

### Computed Fields

\`\`\`python
@dataclass
class Rectangle:
    width: float
    height: float
    area: float = field(init=False)
    
    def __post_init__(self):
        self.area = self.width * self.height
\`\`\`

### Frozen (Immutable)

\`\`\`python
@dataclass(frozen=True)
class Point:
    x: float
    y: float
# p.x = 5  -> Error! Immutable.
\`\`\`

## The enum Module

\`\`\`python
from enum import Enum, IntEnum, auto

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

class Priority(IntEnum):
    LOW = auto()
    MEDIUM = auto()
    HIGH = auto()

print(Color.RED.name)    # 'RED'
print(Priority.HIGH > 1) # True (IntEnum compares with ints)
\`\`\`

### Combining Both

\`\`\`python
from dataclasses import dataclass
from enum import Enum, auto

class Status(str, Enum):
    TODO = "todo"
    DONE = "done"

@dataclass
class Task:
    title: str
    status: Status = Status.TODO
\`\`\`

> **Tip:** Use \`field(default_factory=list)\` for mutable defaults. Never use \`tags: list = []\` — all instances would share the same list!`,
    codeExample: `from dataclasses import dataclass, field
from enum import Enum, IntEnum, auto

class Department(str, Enum):
    ENGINEERING = "Engineering"
    MARKETING = "Marketing"
    SALES = "Sales"

class Level(IntEnum):
    JUNIOR = 1
    MID = 2
    SENIOR = 3
    LEAD = 4

@dataclass(order=True)
class Employee:
    sort_index: float = field(init=False, repr=False)
    name: str
    department: Department
    level: Level
    salary: float
    skills: list = field(default_factory=list)
    
    def __post_init__(self):
        self.sort_index = self.salary

team = [
    Employee("Alice", Department.ENGINEERING, Level.SENIOR, 120000, ["Python", "AWS"]),
    Employee("Bob", Department.MARKETING, Level.MID, 85000, ["SEO"]),
    Employee("Charlie", Department.ENGINEERING, Level.LEAD, 145000, ["Python", "Go"]),
    Employee("Diana", Department.SALES, Level.JUNIOR, 65000, ["CRM"]),
    Employee("Eve", Department.ENGINEERING, Level.MID, 95000, ["Python", "React"]),
]

print("=== Team Directory ===")
for emp in sorted(team, reverse=True):
    print(f"  {emp.name:10s} | {emp.department.value:15s} | {emp.level.name:6s} | {emp.salary:>9,.0f}")

print("\\n=== By Department ===")
for dept in Department:
    members = [e for e in team if e.department == dept]
    if members:
        avg = sum(e.salary for e in members) / len(members)
        print(f"  {dept.value}: {len(members)} people, avg {avg:,.0f}")

python_devs = [e.name for e in team if "Python" in e.skills]
print(f"\\nPython developers: {', '.join(python_devs)}")`,
    exercise: {
      title: "Inventory Management System",
      description: "Build an inventory using enums for categories and dataclasses for products with computed total_value. Sort by value, group by category, find low-stock items.",
      starterCode: `from dataclasses import dataclass, field\nfrom enum import Enum, auto\n\n# Define Category enum and Product dataclass\n# Products: Laptop 999.99 qty 15, Phone 699.99 qty 45, T-Shirt 29.99 qty 200\n# Book 39.99 qty 75, Coffee 12.99 qty 100\n\n# 1. Sort by total value\n# 2. Group by category\n# 3. Find low stock (< 50)\n# 4. Total inventory worth\n`,
      solution: `from dataclasses import dataclass, field\nfrom enum import Enum\n\nclass Category(str, Enum):\n    ELECTRONICS = "Electronics"\n    CLOTHING = "Clothing"\n    FOOD = "Food"\n    BOOKS = "Books"\n\n@dataclass\nclass Product:\n    name: str\n    category: Category\n    price: float\n    quantity: int\n    total_value: float = field(init=False)\n    \n    def __post_init__(self):\n        self.total_value = round(self.price * self.quantity, 2)\n\nproducts = [\n    Product("Laptop", Category.ELECTRONICS, 999.99, 15),\n    Product("Phone", Category.ELECTRONICS, 699.99, 45),\n    Product("T-Shirt", Category.CLOTHING, 29.99, 200),\n    Product("Book", Category.BOOKS, 39.99, 75),\n    Product("Coffee", Category.FOOD, 12.99, 100),\n]\n\nprint("=== By Total Value ===")\nfor p in sorted(products, key=lambda x: x.total_value, reverse=True):\n    print(f"  {p.name:15s} | {p.category.value:12s} | {p.price:>8.2f} x {p.quantity:>3d} = {p.total_value:>10,.2f}")\n\nprint("\\n=== By Category ===")\nfor cat in Category:\n    items = [p for p in products if p.category == cat]\n    if items:\n        subtotal = sum(p.total_value for p in items)\n        print(f"  {cat.value}: {len(items)} products, {subtotal:,.2f}")\n\nprint("\\n=== Low Stock (< 50) ===")\nfor p in products:\n    if p.quantity < 50:\n        print(f"  WARNING: {p.name} - only {p.quantity} left!")\n\ntotal = sum(p.total_value for p in products)\nprint(f"\\nTotal Inventory Worth: {total:,.2f}")`,
      hint: "Define Category as str Enum. Product uses field(init=False) for total_value computed in __post_init__. Sort with sorted(key=lambda). Filter each Category."
    }
  }
]
