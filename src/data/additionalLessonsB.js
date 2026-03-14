// ──────────────────────────────────────────────────────────
// ADDITIONAL LESSONS B
// 5 Advanced (a11-a15) + 5 Data (d11-d15) + 5 Library (l11-l15)
// ──────────────────────────────────────────────────────────

export const additionalLessonsB = [

  // ==================== ADVANCED a11 ====================
  {
    id: "a11",
    title: "Type Hints & Annotations",
    difficulty: "advanced",
    order: 11,
    description: "Add type information to functions and variables for better code clarity",
    duration: "12 min",
    content: `Type hints let you document what types your functions expect and return. They don't enforce anything at runtime but make code much more readable.

## Function Annotations

\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name}!"

def add(a: int, b: int) -> int:
    return a + b

def is_adult(age: int) -> bool:
    return age >= 18
\`\`\`

## Variable Annotations

\`\`\`python
name: str = "Alice"
age: int = 25
scores: list = [90, 85, 92]
\`\`\`

## The typing Module

\`\`\`python
from typing import List, Dict, Optional, Union, Tuple

def get_scores() -> List[int]:
    return [90, 85, 92]

def find_user(name: str) -> Optional[Dict[str, str]]:
    # Returns a dict or None
    users = {"Alice": {"email": "alice@mail.com"}}
    return users.get(name)

def process(value: Union[int, float]) -> float:
    return float(value) * 2
\`\`\`

> **Tip:** Type hints are checked by tools like mypy, not by Python itself. They serve as documentation.`,
    codeExample: `from typing import List, Dict, Optional\n\ndef average(numbers: List[float]) -> float:\n    \"\"\"Calculate average of a list of numbers.\"\"\"\n    return sum(numbers) / len(numbers)\n\ndef find_max(items: List[int]) -> Optional[int]:\n    \"\"\"Return max item or None if list is empty.\"\"\"\n    if not items:\n        return None\n    return max(items)\n\ndef describe(name: str, age: int) -> Dict[str, str]:\n    \"\"\"Create a description dictionary.\"\"\"\n    return {"name": name, "age": str(age), "status": "adult" if age >= 18 else "minor"}\n\nscores: List[float] = [88.5, 92.0, 76.5, 95.0]\nprint(f"Average: {average(scores)}")\nprint(f"Max: {find_max(scores)}")\nprint(f"Empty max: {find_max([])}")\nprint(f"Describe: {describe('Alice', 25)}")`,
    exercise: {
      title: "Add Type Hints",
      description: "Complete the functions with proper type hints and implementations.",
      starterCode: `from typing import List, Optional

# TODO: Add type hints to this function
# It takes a list of integers and returns their sum as int
def total(numbers):
    return sum(numbers)

# TODO: Add type hints to this function
# It takes a string and returns it reversed as a string
def reverse_str(text):
    return text[::-1]

# TODO: Add type hints and implement this function
# It takes a list of strings and an optional minimum length (default 0)
# Returns a list of strings longer than min_length
def filter_long(words, min_length=0):
    return [w for w in words if len(w) > min_length]

# Test code
nums = [10, 20, 30, 40]
print(f"Total: {total(nums)}")
print(f"Reverse: {reverse_str('Python')}")
words = ["hi", "hello", "hey", "python", "go"]
print(f"Long words: {filter_long(words, 3)}")
print(f"All words: {filter_long(words)}")
`,
      solution: `from typing import List, Optional

def total(numbers: List[int]) -> int:
    return sum(numbers)

def reverse_str(text: str) -> str:
    return text[::-1]

def filter_long(words: List[str], min_length: int = 0) -> List[str]:
    return [w for w in words if len(w) > min_length]

nums = [10, 20, 30, 40]
print(f"Total: {total(nums)}")
print(f"Reverse: {reverse_str('Python')}")
words = ["hi", "hello", "hey", "python", "go"]
print(f"Long words: {filter_long(words, 3)}")
print(f"All words: {filter_long(words)}")
`,
      hint: "Add : type after each parameter and -> return_type after the parentheses.",
      tests: [
        { name: "Total calculated", expected: "Total: 100", hint: "sum([10,20,30,40]) = 100" },
        { name: "String reversed", expected: "Reverse: nohtyP", hint: "'Python'[::-1] = 'nohtyP'" },
        { name: "Long words filtered", expected: "Long words: ['hello', 'python']", hint: "Words with len > 3" },
        { name: "All words returned", expected: "All words: ['hi', 'hello', 'hey', 'python', 'go']", hint: "min_length=0 means all words" }
      ],
      hints: [
        "def total(numbers: List[int]) -> int: means takes list of ints, returns int",
        "def reverse_str(text: str) -> str: means takes string, returns string",
        "def filter_long(words: List[str], min_length: int = 0) -> List[str]:"
      ]
    }
  },

  // ==================== ADVANCED a12 ====================
  {
    id: "a12",
    title: "Dataclasses",
    difficulty: "advanced",
    order: 12,
    description: "Create clean data-holding classes with minimal boilerplate",
    duration: "12 min",
    content: `The \`dataclass\` decorator automatically generates \`__init__\`, \`__repr__\`, \`__eq__\` and more for your classes.

## Basic Dataclass

\`\`\`python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

p = Point(3.0, 4.0)
print(p)           # Point(x=3.0, y=4.0)
print(p.x, p.y)   # 3.0 4.0
\`\`\`

## Default Values

\`\`\`python
@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0    # default value

item = Product("Widget", 9.99)
print(item.quantity)  # 0
\`\`\`

## Post-Init Processing

\`\`\`python
@dataclass
class Rectangle:
    width: float
    height: float
    area: float = 0

    def __post_init__(self):
        self.area = self.width * self.height
\`\`\`

> **Tip:** Dataclasses replace the tedious pattern of writing \`__init__\` with lots of \`self.x = x\` assignments.`,
    codeExample: `from dataclasses import dataclass, field\n\n@dataclass\nclass Student:\n    name: str\n    age: int\n    grades: list = field(default_factory=list)\n    \n    def average(self):\n        if not self.grades:\n            return 0.0\n        return sum(self.grades) / len(self.grades)\n    \n    def add_grade(self, grade):\n        self.grades.append(grade)\n\ns = Student("Alice", 20)\ns.add_grade(90)\ns.add_grade(85)\ns.add_grade(92)\nprint(s)\nprint(f"Average: {s.average():.1f}")`,
    exercise: {
      title: "Product Inventory Dataclass",
      description: "Create a Product dataclass and use it to manage inventory.",
      starterCode: `from dataclasses import dataclass

# TODO: Create a Product dataclass with:
# - name: str
# - price: float
# - stock: int (default 0)
# - Add a __post_init__ that calculates total_value = price * stock


# TODO: Create a function inventory_report that takes a list of Products
# and prints each product's info and the total inventory value

# Test code
products = [
    Product("Laptop", 999.99, 5),
    Product("Mouse", 29.99, 50),
    Product("Keyboard", 79.99, 30)
]

for p in products:
    print(f"{p.name}: {p.stock} units @ {p.price} each = {p.total_value:.2f}")

total = sum(p.total_value for p in products)
print(f"Total inventory value: {total:.2f}")
`,
      solution: `from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: float
    stock: int = 0
    total_value: float = 0

    def __post_init__(self):
        self.total_value = self.price * self.stock

products = [
    Product("Laptop", 999.99, 5),
    Product("Mouse", 29.99, 50),
    Product("Keyboard", 79.99, 30)
]

for p in products:
    print(f"{p.name}: {p.stock} units @ {p.price} each = {p.total_value:.2f}")

total = sum(p.total_value for p in products)
print(f"Total inventory value: {total:.2f}")
`,
      hint: "Use @dataclass decorator, __post_init__ for computed fields.",
      tests: [
        { name: "Laptop inventory shown", expected: "Laptop: 5 units @ 999.99 each = 4999.95", hint: "999.99 * 5 = 4999.95" },
        { name: "Mouse inventory shown", expected: "Mouse: 50 units @ 29.99 each = 1499.50", hint: "29.99 * 50 = 1499.50" },
        { name: "Keyboard inventory shown", expected: "Keyboard: 30 units @ 79.99 each = 2399.70", hint: "79.99 * 30 = 2399.70" },
        { name: "Total value calculated", expected: "Total inventory value: 8899.15", hint: "4999.95 + 1499.50 + 2399.70 = 8899.15" }
      ],
      hints: [
        "@dataclass above the class, then list fields with type hints",
        "def __post_init__(self): self.total_value = self.price * self.stock",
        "total_value: float = 0 as a field, then compute it in __post_init__"
      ]
    }
  },

  // ==================== ADVANCED a13 ====================
  {
    id: "a13",
    title: "Abstract Base Classes",
    difficulty: "advanced",
    order: 13,
    description: "Define interfaces that subclasses must implement",
    duration: "12 min",
    content: `Abstract Base Classes (ABCs) let you define a blueprint that other classes must follow.

## Creating an ABC

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

# Can't instantiate: shape = Shape()  # TypeError!
\`\`\`

## Implementing the ABC

\`\`\`python
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14159 * self.radius ** 2

    def perimeter(self):
        return 2 * 3.14159 * self.radius
\`\`\`

## Why Use ABCs?

- Forces subclasses to implement required methods
- Documents the interface clearly
- Catches missing implementations early

> **Tip:** If a subclass doesn't implement ALL abstract methods, Python raises TypeError when you try to create an instance.`,
    codeExample: `from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    @abstractmethod\n    def describe(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return math.pi * self.radius ** 2\n    \n    def describe(self):\n        return f"Circle(r={self.radius})"\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    \n    def area(self):\n        return self.side ** 2\n    \n    def describe(self):\n        return f"Square(s={self.side})"\n\nshapes = [Circle(5), Square(4), Circle(3)]\nfor s in shapes:\n    print(f"{s.describe()} -> area = {s.area():.2f}")`,
    exercise: {
      title: "Vehicle ABC",
      description: "Create an abstract Vehicle class and implement Car and Bicycle subclasses.",
      starterCode: `from abc import ABC, abstractmethod

# TODO: Create abstract class Vehicle with:
# - @abstractmethod fuel_type(self) -> returns a string
# - @abstractmethod max_speed(self) -> returns an int
# - A regular method describe(self) that prints:
#   "{type}: fuel={fuel_type}, max_speed={max_speed}km/h"

# TODO: Create Car(Vehicle) with fuel_type="Gasoline", max_speed=200

# TODO: Create Bicycle(Vehicle) with fuel_type="None", max_speed=30

# Test code
vehicles = [Car(), Bicycle(), Car()]
for v in vehicles:
    v.describe()
`,
      solution: `from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def fuel_type(self):
        pass

    @abstractmethod
    def max_speed(self):
        pass

    def describe(self):
        print(f"{type(self).__name__}: fuel={self.fuel_type()}, max_speed={self.max_speed()}km/h")

class Car(Vehicle):
    def fuel_type(self):
        return "Gasoline"

    def max_speed(self):
        return 200

class Bicycle(Vehicle):
    def fuel_type(self):
        return "None"

    def max_speed(self):
        return 30

vehicles = [Car(), Bicycle(), Car()]
for v in vehicles:
    v.describe()
`,
      hint: "ABC + @abstractmethod for the interface, then implement in each subclass.",
      tests: [
        { name: "Car described", expected: "Car: fuel=Gasoline, max_speed=200km/h", hint: "type(self).__name__ gives the class name" },
        { name: "Bicycle described", expected: "Bicycle: fuel=None, max_speed=30km/h", hint: "Bicycle returns 'None' and 30" },
        { name: "Second car described", expected: "Car: fuel=Gasoline, max_speed=200km/h", hint: "Same Car class, same output" }
      ],
      hints: [
        "class Vehicle(ABC): then use @abstractmethod above each method",
        "describe uses type(self).__name__ to get the class name dynamically",
        "Each subclass just returns the specific values from fuel_type() and max_speed()"
      ]
    }
  },

  // ==================== ADVANCED a14 ====================
  {
    id: "a14",
    title: "Property Decorators",
    difficulty: "advanced",
    order: 14,
    description: "Control attribute access with getters, setters, and validation",
    duration: "12 min",
    content: `The \`@property\` decorator lets you define methods that behave like attributes, adding validation and computed values.

## Basic Property

\`\`\`python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self):
        return 3.14159 * self._radius ** 2
\`\`\`

## Using Properties

\`\`\`python
c = Circle(5)
print(c.radius)    # 5     (calls getter)
print(c.area)      # 78.5  (computed property)
c.radius = 10      # calls setter with validation
# c.radius = -1    # raises ValueError!
\`\`\`

> **Tip:** Use \`_name\` (underscore prefix) for the internal attribute and \`name\` for the property.`,
    codeExample: `class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(100)\nprint(f"{t.celsius}C = {t.fahrenheit}F")\nt.celsius = 0\nprint(f"{t.celsius}C = {t.fahrenheit}F")\nt.celsius = 37\nprint(f"{t.celsius}C = {t.fahrenheit}F")`,
    exercise: {
      title: "BankAccount with Properties",
      description: "Create a BankAccount class using properties to protect the balance.",
      starterCode: `# TODO: Create a BankAccount class with:
# - __init__(self, owner, balance=0): store owner and _balance
# - @property balance: returns _balance
# - @balance.setter: raises ValueError if negative, otherwise sets
# - deposit(self, amount): adds to balance (reject if amount <= 0)
# - withdraw(self, amount): subtracts from balance (reject if > balance)
# - A __str__ method returning "Account(owner=X, balance=Y)"

# Test code
acc = BankAccount("Alice", 1000)
print(acc)
acc.deposit(500)
print(f"After deposit: {acc.balance}")
acc.withdraw(200)
print(f"After withdraw: {acc.balance}")
acc.deposit(100)
print(f"Final: {acc.balance}")
`,
      solution: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = value

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit must be positive")
            return
        self._balance += amount

    def withdraw(self, amount):
        if amount > self._balance:
            print("Insufficient funds")
            return
        self._balance -= amount

    def __str__(self):
        return f"Account(owner={self.owner}, balance={self._balance})"

acc = BankAccount("Alice", 1000)
print(acc)
acc.deposit(500)
print(f"After deposit: {acc.balance}")
acc.withdraw(200)
print(f"After withdraw: {acc.balance}")
acc.deposit(100)
print(f"Final: {acc.balance}")
`,
      hint: "Use @property for getter, @balance.setter for setter with validation.",
      tests: [
        { name: "Initial account", expected: "Account(owner=Alice, balance=1000)", hint: "__str__ returns the formatted string" },
        { name: "After deposit", expected: "After deposit: 1500", hint: "1000 + 500 = 1500" },
        { name: "After withdraw", expected: "After withdraw: 1300", hint: "1500 - 200 = 1300" },
        { name: "Final balance", expected: "Final: 1400", hint: "1300 + 100 = 1400" }
      ],
      hints: [
        "Store balance as self._balance, expose via @property",
        "The setter checks value < 0, deposit checks amount <= 0, withdraw checks amount > balance",
        "__str__ returns f\"Account(owner={self.owner}, balance={self._balance})\""
      ]
    }
  },

  // ==================== ADVANCED a15 ====================
  {
    id: "a15",
    title: "Walrus Operator & Modern Python",
    difficulty: "advanced",
    order: 15,
    description: "Modern Python syntax: walrus operator, f-string tricks, and more",
    duration: "10 min",
    content: `Python 3.8+ introduced the walrus operator \`:=\` and recent versions add many quality-of-life features.

## The Walrus Operator (:=)

Assigns AND returns a value in one expression:

\`\`\`python
# Old way
n = len(my_list)
if n > 10:
    print(f"Too long: {n}")

# With walrus
if (n := len(my_list)) > 10:
    print(f"Too long: {n}")
\`\`\`

## In While Loops

\`\`\`python
# Read and process in one step
import random
while (roll := random.randint(1, 6)) != 6:
    print(f"Rolled {roll}, trying again...")
print(f"Got 6!")
\`\`\`

## Chained Comparisons

\`\`\`python
x = 15
if 10 <= x <= 20:   # same as: x >= 10 and x <= 20
    print("In range")
\`\`\`

## F-String Tricks (3.12+)

\`\`\`python
value = 42
print(f"{value = }")        # "value = 42" (debug shortcut)
print(f"{10 + 20 = }")      # "10 + 20 = 30"
\`\`\`

> **Tip:** The walrus operator is great for avoiding repeated function calls and making while-loops cleaner.`,
    codeExample: `# Walrus operator examples\ndata = [2, 5, 8, 1, 9, 3, 7, 4, 6]\n\n# Filter and capture in list comprehension\nlong_results = [y for x in data if (y := x ** 2) > 20]\nprint(f"Squares > 20: {long_results}")\n\n# Chained comparisons\nfor val in [5, 15, 25]:\n    if 10 <= val <= 20:\n        print(f"{val} is in range 10-20")\n    else:\n        print(f"{val} is outside range")\n\n# F-string debug\nname = "Python"\nversion = 3.12\nprint(f"Language: {name!r}, Version: {version}")`,
    exercise: {
      title: "Modern Python Refactoring",
      description: "Refactor code using walrus operator, chained comparisons, and f-string features.",
      starterCode: `# TASK 1: Use walrus operator in list comprehension
# Find all words where the length is > 4, keeping the lengths
words = ["hi", "hello", "python", "go", "programming", "code"]
# Old way:
# result = []
# for w in words:
#     length = len(w)
#     if length > 4:
#         result.append((w, length))

# TODO: Rewrite using walrus in a list comprehension
result = [(w, ln) for w in words if (ln := len(w)) > 4]
print(f"Long words: {result}")

# TASK 2: Use chained comparison
# Check if each score is a passing grade (60-100)
scores = [45, 72, 88, 55, 91, 60]
for s in scores:
    # TODO: Use chained comparison: 60 <= s <= 100
    if 60 <= s <= 100:
        print(f"{s}: Pass")
    else:
        print(f"{s}: Fail")

# TASK 3: Use walrus in a while loop
# Sum numbers from a list until total exceeds 50
numbers = [12, 8, 15, 20, 5, 30]
total = 0
index = 0
# TODO: Use a while loop, add numbers until total > 50
while index < len(numbers) and (total := total + numbers[index]) <= 50:
    index += 1
print(f"Stopped at index {index}, total = {total}")
`,
      solution: `words = ["hi", "hello", "python", "go", "programming", "code"]
result = [(w, ln) for w in words if (ln := len(w)) > 4]
print(f"Long words: {result}")

scores = [45, 72, 88, 55, 91, 60]
for s in scores:
    if 60 <= s <= 100:
        print(f"{s}: Pass")
    else:
        print(f"{s}: Fail")

numbers = [12, 8, 15, 20, 5, 30]
total = 0
index = 0
while index < len(numbers) and (total := total + numbers[index]) <= 50:
    index += 1
print(f"Stopped at index {index}, total = {total}")
`,
      hint: "Walrus := assigns and returns in one expression. Chained: a <= x <= b.",
      tests: [
        { name: "Long words found", expected: "Long words: [('hello', 5), ('python', 6), ('programming', 11)]", hint: "Words with len > 4" },
        { name: "Score 45 fails", expected: "45: Fail", hint: "45 is not in 60-100" },
        { name: "Score 72 passes", expected: "72: Pass", hint: "72 is in 60-100" },
        { name: "Score 60 passes", expected: "60: Pass", hint: "60 is the boundary, inclusive" },
        { name: "Sum stops correctly", expected: "Stopped at index 3, total = 55", hint: "12+8+15+20=55, exceeds 50 at index 3" }
      ],
      hints: [
        "Walrus in comprehension: [(w, ln) for w in words if (ln := len(w)) > 4]",
        "Chained comparison: if 60 <= s <= 100 checks both bounds at once",
        "Walrus in while: (total := total + numbers[index]) assigns AND checks"
      ]
    }
  },

  // ==================== DATA d11 ====================
  {
    id: "d11",
    title: "Data Aggregation & Grouping",
    difficulty: "data",
    order: 11,
    description: "Group data by categories and compute summary statistics",
    duration: "15 min",
    content: `Grouping data by a category and computing aggregates (sum, average, count) is one of the most common data operations.

## The Group-By Pattern

\`\`\`python
sales = [
    {"product": "A", "amount": 100},
    {"product": "B", "amount": 200},
    {"product": "A", "amount": 150},
]

# Group by product
groups = {}
for sale in sales:
    key = sale["product"]
    if key not in groups:
        groups[key] = []
    groups[key].append(sale["amount"])

# Result: {"A": [100, 150], "B": [200]}
\`\`\`

## Computing Aggregates

\`\`\`python
for product, amounts in groups.items():
    total = sum(amounts)
    avg = total / len(amounts)
    print(f"{product}: total={total}, avg={avg:.1f}, count={len(amounts)}")
\`\`\`

## Using defaultdict

\`\`\`python
from collections import defaultdict

groups = defaultdict(list)
for sale in sales:
    groups[sale["product"]].append(sale["amount"])
\`\`\`

> **Tip:** The group-by + aggregate pattern is the foundation of all data analysis. Master it!`,
    codeExample: `from collections import defaultdict\n\norders = [\n    {"category": "Electronics", "amount": 299},\n    {"category": "Books", "amount": 15},\n    {"category": "Electronics", "amount": 599},\n    {"category": "Books", "amount": 25},\n    {"category": "Clothing", "amount": 49},\n    {"category": "Electronics", "amount": 199},\n    {"category": "Clothing", "amount": 89},\n]\n\ngroups = defaultdict(list)\nfor order in orders:\n    groups[order["category"]].append(order["amount"])\n\nfor cat in sorted(groups):\n    amounts = groups[cat]\n    print(f"{cat}: total=\${sum(amounts)}, avg=\${sum(amounts)/len(amounts):.0f}, count={len(amounts)}")`,
    exercise: {
      title: "Sales Report by Region",
      description: "Group sales data by region and generate a summary report.",
      starterCode: `sales = [
    {"region": "North", "product": "Widget", "amount": 120},
    {"region": "South", "product": "Gadget", "amount": 250},
    {"region": "North", "product": "Gadget", "amount": 180},
    {"region": "South", "product": "Widget", "amount": 90},
    {"region": "North", "product": "Widget", "amount": 200},
    {"region": "South", "product": "Gadget", "amount": 310},
]

# TODO: Group sales by region
# For each region, calculate: total amount, number of sales, average
# Print sorted by region name:
# North: total=500, count=3, avg=166.7
# South: total=650, count=3, avg=216.7
# Then print: Grand total: 1150

groups = {}
for sale in sales:
    region = sale["region"]
    if region not in groups:
        groups[region] = []
    groups[region].append(sale["amount"])

for region in sorted(groups):
    amounts = groups[region]
    total = sum(amounts)
    count = len(amounts)
    avg = total / count
    print(f"{region}: total={total}, count={count}, avg={avg:.1f}")

grand = sum(sale["amount"] for sale in sales)
print(f"Grand total: {grand}")
`,
      solution: `sales = [
    {"region": "North", "product": "Widget", "amount": 120},
    {"region": "South", "product": "Gadget", "amount": 250},
    {"region": "North", "product": "Gadget", "amount": 180},
    {"region": "South", "product": "Widget", "amount": 90},
    {"region": "North", "product": "Widget", "amount": 200},
    {"region": "South", "product": "Gadget", "amount": 310},
]

groups = {}
for sale in sales:
    region = sale["region"]
    if region not in groups:
        groups[region] = []
    groups[region].append(sale["amount"])

for region in sorted(groups):
    amounts = groups[region]
    total = sum(amounts)
    count = len(amounts)
    avg = total / count
    print(f"{region}: total={total}, count={count}, avg={avg:.1f}")

grand = sum(sale["amount"] for sale in sales)
print(f"Grand total: {grand}")
`,
      hint: "Group into a dict of lists, then compute sum/len/avg per group.",
      tests: [
        { name: "North region stats", expected: "North: total=500, count=3, avg=166.7", hint: "120+180+200=500, 500/3=166.7" },
        { name: "South region stats", expected: "South: total=650, count=3, avg=216.7", hint: "250+90+310=650, 650/3=216.7" },
        { name: "Grand total", expected: "Grand total: 1150", hint: "500+650=1150" }
      ],
      hints: [
        "Create an empty dict, check if key exists, append amounts to lists",
        "For each group: sum(amounts), len(amounts), sum/len for average",
        "Grand total: sum all amounts from original data"
      ]
    }
  },

  // ==================== DATA d12 ====================
  {
    id: "d12",
    title: "Working with JSON Data",
    difficulty: "data",
    order: 12,
    description: "Parse, navigate, and transform JSON-structured data",
    duration: "12 min",
    content: `JSON (JavaScript Object Notation) is the most common data format for APIs and configuration files.

## Parsing JSON

\`\`\`python
import json

json_string = '{"name": "Alice", "age": 25}'
data = json.loads(json_string)    # string -> Python dict
print(data["name"])                # "Alice"
\`\`\`

## Creating JSON

\`\`\`python
data = {"name": "Bob", "scores": [90, 85, 92]}
json_string = json.dumps(data, indent=2)
print(json_string)
\`\`\`

## Navigating Nested JSON

\`\`\`python
data = {
    "users": [
        {"name": "Alice", "address": {"city": "Paris"}},
        {"name": "Bob", "address": {"city": "London"}}
    ]
}
city = data["users"][0]["address"]["city"]  # "Paris"
\`\`\`

> **Tip:** \`json.loads()\` parses a string. \`json.dumps()\` creates a string. The 's' stands for 'string'.`,
    codeExample: `import json\n\n# Parse JSON data\napi_response = '''{\\n  "status": "ok",\\n  "results": [\\n    {"id": 1, "name": "Alice", "score": 95},\\n    {"id": 2, "name": "Bob", "score": 87},\\n    {"id": 3, "name": "Charlie", "score": 92}\\n  ]\\n}'''\n\ndata = json.loads(api_response)\nprint(f"Status: {data['status']}")\nprint(f"Total results: {len(data['results'])}")\n\nfor user in data["results"]:\n    print(f"  {user['name']}: {user['score']}")`,
    exercise: {
      title: "JSON Data Explorer",
      description: "Parse JSON data and extract specific information from it.",
      starterCode: `import json

# This simulates data from an API
json_data = '''
{
    "company": "TechCorp",
    "departments": [
        {
            "name": "Engineering",
            "employees": [
                {"name": "Alice", "role": "Senior Dev", "salary": 95000},
                {"name": "Bob", "role": "Junior Dev", "salary": 65000}
            ]
        },
        {
            "name": "Marketing",
            "employees": [
                {"name": "Charlie", "role": "Manager", "salary": 85000},
                {"name": "Diana", "role": "Analyst", "salary": 70000}
            ]
        }
    ]
}
'''

# TODO: Parse the JSON string into a Python dict
data = json.loads(json_data)

# TODO: Print the company name
print(f"Company: {data['company']}")

# TODO: Print number of departments
print(f"Departments: {len(data['departments'])}")

# TODO: Loop through departments and print each employee
for dept in data["departments"]:
    print(f"--- {dept['name']} ---")
    for emp in dept["employees"]:
        print(f"  {emp['name']} ({emp['role']}): {emp['salary']}")

# TODO: Calculate and print total salary across all departments
total = sum(emp["salary"] for dept in data["departments"] for emp in dept["employees"])
print(f"Total salaries: {total}")
`,
      solution: `import json

json_data = '''
{
    "company": "TechCorp",
    "departments": [
        {
            "name": "Engineering",
            "employees": [
                {"name": "Alice", "role": "Senior Dev", "salary": 95000},
                {"name": "Bob", "role": "Junior Dev", "salary": 65000}
            ]
        },
        {
            "name": "Marketing",
            "employees": [
                {"name": "Charlie", "role": "Manager", "salary": 85000},
                {"name": "Diana", "role": "Analyst", "salary": 70000}
            ]
        }
    ]
}
'''

data = json.loads(json_data)
print(f"Company: {data['company']}")
print(f"Departments: {len(data['departments'])}")

for dept in data["departments"]:
    print(f"--- {dept['name']} ---")
    for emp in dept["employees"]:
        print(f"  {emp['name']} ({emp['role']}): {emp['salary']}")

total = sum(emp["salary"] for dept in data["departments"] for emp in dept["employees"])
print(f"Total salaries: {total}")
`,
      hint: "json.loads() parses the string. Navigate with dict[key] and list[index].",
      tests: [
        { name: "Company name", expected: "Company: TechCorp", hint: "data['company']" },
        { name: "Department count", expected: "Departments: 2", hint: "len(data['departments'])" },
        { name: "Engineering header", expected: "--- Engineering ---", hint: "dept['name'] in the loop" },
        { name: "Alice shown", expected: "  Alice (Senior Dev): 95000", hint: "emp['name'], emp['role'], emp['salary']" },
        { name: "Total salaries", expected: "Total salaries: 315000", hint: "95000+65000+85000+70000=315000" }
      ],
      hints: [
        "data = json.loads(json_data) converts the JSON string to a Python dict",
        "Nested access: data['departments'][0]['employees'][0]['name']",
        "Nested comprehension: sum(emp['salary'] for dept in ... for emp in ...)"
      ]
    }
  },

  // ==================== DATA d13 ====================
  {
    id: "d13",
    title: "Data Filtering & Searching",
    difficulty: "data",
    order: 13,
    description: "Filter datasets with multiple criteria and search for specific records",
    duration: "12 min",
    content: `Filtering is selecting only the records that match certain conditions.

## Simple Filter with List Comprehension

\`\`\`python
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 17},
    {"name": "Charlie", "age": 25},
]

adults = [p for p in people if p["age"] >= 18]
\`\`\`

## Multi-Criteria Filtering

\`\`\`python
# AND: both conditions must be true
senior_devs = [e for e in employees
               if e["role"] == "Developer" and e["years"] >= 5]

# OR: at least one condition
important = [e for e in employees
             if e["role"] == "Manager" or e["salary"] > 100000]
\`\`\`

## Filter Function

\`\`\`python
def is_eligible(person):
    return person["age"] >= 18 and person["score"] >= 70

eligible = list(filter(is_eligible, people))
\`\`\`

> **Tip:** List comprehensions are usually more readable than \`filter()\` for simple conditions.`,
    codeExample: `employees = [\n    {"name": "Alice", "dept": "Engineering", "salary": 95000, "years": 5},\n    {"name": "Bob", "dept": "Marketing", "salary": 65000, "years": 2},\n    {"name": "Charlie", "dept": "Engineering", "salary": 110000, "years": 8},\n    {"name": "Diana", "dept": "Marketing", "salary": 75000, "years": 4},\n    {"name": "Eve", "dept": "Engineering", "salary": 85000, "years": 3},\n]\n\n# Filter: Engineering + salary > 90k\nsenior_eng = [e for e in employees if e["dept"] == "Engineering" and e["salary"] > 90000]\nprint("Senior engineers (>90k):")\nfor e in senior_eng:\n    print(f"  {e['name']}: \${e['salary']}")\n\n# Filter: 3+ years experience\nexperienced = [e["name"] for e in employees if e["years"] >= 3]\nprint(f"\\n3+ years: {experienced}")`,
    exercise: {
      title: "Student Record Filter",
      description: "Filter a list of student records using various criteria.",
      starterCode: `students = [
    {"name": "Alice", "grade": "A", "score": 95, "age": 20},
    {"name": "Bob", "grade": "C", "score": 72, "age": 19},
    {"name": "Charlie", "grade": "B", "score": 85, "age": 21},
    {"name": "Diana", "grade": "A", "score": 91, "age": 20},
    {"name": "Eve", "grade": "D", "score": 58, "age": 22},
    {"name": "Frank", "grade": "B", "score": 88, "age": 19},
]

# TODO: Find all A-grade students
a_students = [s["name"] for s in students if s["grade"] == "A"]
print(f"A students: {a_students}")

# TODO: Find students with score >= 80
high_scorers = [s["name"] for s in students if s["score"] >= 80]
print(f"High scorers: {high_scorers}")

# TODO: Find students aged 20+ with score >= 85
senior_high = [s["name"] for s in students if s["age"] >= 20 and s["score"] >= 85]
print(f"20+ and 85+: {senior_high}")

# TODO: Count students per grade
grades = {}
for s in students:
    g = s["grade"]
    grades[g] = grades.get(g, 0) + 1
for g in sorted(grades):
    print(f"Grade {g}: {grades[g]} students")
`,
      solution: `students = [
    {"name": "Alice", "grade": "A", "score": 95, "age": 20},
    {"name": "Bob", "grade": "C", "score": 72, "age": 19},
    {"name": "Charlie", "grade": "B", "score": 85, "age": 21},
    {"name": "Diana", "grade": "A", "score": 91, "age": 20},
    {"name": "Eve", "grade": "D", "score": 58, "age": 22},
    {"name": "Frank", "grade": "B", "score": 88, "age": 19},
]

a_students = [s["name"] for s in students if s["grade"] == "A"]
print(f"A students: {a_students}")

high_scorers = [s["name"] for s in students if s["score"] >= 80]
print(f"High scorers: {high_scorers}")

senior_high = [s["name"] for s in students if s["age"] >= 20 and s["score"] >= 85]
print(f"20+ and 85+: {senior_high}")

grades = {}
for s in students:
    g = s["grade"]
    grades[g] = grades.get(g, 0) + 1
for g in sorted(grades):
    print(f"Grade {g}: {grades[g]} students")
`,
      hint: "Use list comprehensions with if conditions to filter.",
      tests: [
        { name: "A students found", expected: "A students: ['Alice', 'Diana']", hint: "grade == 'A'" },
        { name: "High scorers found", expected: "High scorers: ['Alice', 'Charlie', 'Diana', 'Frank']", hint: "score >= 80" },
        { name: "Senior high found", expected: "20+ and 85+: ['Alice', 'Charlie', 'Diana']", hint: "age >= 20 AND score >= 85" },
        { name: "Grade A count", expected: "Grade A: 2 students", hint: "Alice and Diana" },
        { name: "Grade B count", expected: "Grade B: 2 students", hint: "Charlie and Frank" }
      ],
      hints: [
        "List comprehension filter: [s['name'] for s in students if condition]",
        "Multi-criteria: use 'and' to combine: s['age'] >= 20 and s['score'] >= 85",
        "Count with dict.get(key, 0) + 1 to handle missing keys"
      ]
    }
  },

  // ==================== DATA d14 ====================
  {
    id: "d14",
    title: "Basic Statistics in Python",
    difficulty: "data",
    order: 14,
    description: "Calculate mean, median, mode, and standard deviation",
    duration: "12 min",
    content: `Python's \`statistics\` module provides essential statistical functions.

## Key Functions

\`\`\`python
import statistics

data = [4, 8, 6, 5, 3, 8, 9, 2, 8]

mean   = statistics.mean(data)       # average: 5.89
median = statistics.median(data)     # middle value: 6
mode   = statistics.mode(data)       # most common: 8
stdev  = statistics.stdev(data)      # spread: 2.47
\`\`\`

## Manual Calculations

\`\`\`python
# Mean (average)
mean = sum(data) / len(data)

# Median (middle value when sorted)
sorted_data = sorted(data)
n = len(sorted_data)
if n % 2 == 0:
    median = (sorted_data[n//2 - 1] + sorted_data[n//2]) / 2
else:
    median = sorted_data[n // 2]
\`\`\`

## Percentiles

\`\`\`python
# Quartiles divide data into 4 equal parts
q = statistics.quantiles(data)  # [25th, 50th, 75th percentile]
\`\`\`

> **Tip:** Mean is sensitive to outliers; median is more robust. Use both to understand your data.`,
    codeExample: `import statistics\n\nscores = [78, 85, 92, 67, 88, 95, 73, 81, 90, 76]\n\nprint(f"Data: {sorted(scores)}")\nprint(f"Count: {len(scores)}")\nprint(f"Mean: {statistics.mean(scores):.1f}")\nprint(f"Median: {statistics.median(scores)}")\nprint(f"Mode: {statistics.mode(scores) if len(set(scores)) < len(scores) else 'No mode'}")\nprint(f"Std Dev: {statistics.stdev(scores):.2f}")\nprint(f"Min: {min(scores)}, Max: {max(scores)}")\nprint(f"Range: {max(scores) - min(scores)}")`,
    exercise: {
      title: "Test Score Analyzer",
      description: "Compute statistics for a set of test scores.",
      starterCode: `import statistics

scores = [72, 85, 90, 68, 95, 88, 76, 82, 91, 78, 85, 93]

# TODO: Print the count
print(f"Count: {len(scores)}")

# TODO: Print the mean (average) with 1 decimal
print(f"Mean: {statistics.mean(scores):.1f}")

# TODO: Print the median
print(f"Median: {statistics.median(scores)}")

# TODO: Print min and max
print(f"Min: {min(scores)}")
print(f"Max: {max(scores)}")

# TODO: Print the range (max - min)
print(f"Range: {max(scores) - min(scores)}")

# TODO: Print standard deviation with 2 decimals
print(f"Std Dev: {statistics.stdev(scores):.2f}")

# TODO: Count how many scores are above the mean
mean_val = statistics.mean(scores)
above = len([s for s in scores if s > mean_val])
print(f"Above average: {above}/{len(scores)}")
`,
      solution: `import statistics

scores = [72, 85, 90, 68, 95, 88, 76, 82, 91, 78, 85, 93]

print(f"Count: {len(scores)}")
print(f"Mean: {statistics.mean(scores):.1f}")
print(f"Median: {statistics.median(scores)}")
print(f"Min: {min(scores)}")
print(f"Max: {max(scores)}")
print(f"Range: {max(scores) - min(scores)}")
print(f"Std Dev: {statistics.stdev(scores):.2f}")

mean_val = statistics.mean(scores)
above = len([s for s in scores if s > mean_val])
print(f"Above average: {above}/{len(scores)}")
`,
      hint: "Use statistics.mean(), statistics.median(), statistics.stdev(), min(), max().",
      tests: [
        { name: "Count shown", expected: "Count: 12", hint: "len(scores) = 12" },
        { name: "Mean calculated", expected: "Mean: 83.6", hint: "Sum/count with 1 decimal" },
        { name: "Median calculated", expected: "Median: 85.0", hint: "Middle of sorted list" },
        { name: "Min shown", expected: "Min: 68", hint: "min(scores)" },
        { name: "Max shown", expected: "Max: 95", hint: "max(scores)" },
        { name: "Range shown", expected: "Range: 27", hint: "95 - 68 = 27" }
      ],
      hints: [
        "statistics.mean(scores) gives the average",
        "statistics.median(scores) gives the middle value",
        "Count above average: [s for s in scores if s > mean_val]"
      ]
    }
  },

  // ==================== DATA d15 ====================
  {
    id: "d15",
    title: "Mini Project: Survey Analyzer",
    difficulty: "data",
    order: 15,
    description: "Combine grouping, filtering, and statistics to analyze survey data",
    duration: "15 min",
    content: `Let's combine everything we've learned about data processing into a complete survey analysis project.

## The Pipeline

1. **Load** data (list of dicts)
2. **Clean** data (handle missing values)
3. **Group** by category
4. **Aggregate** (count, average)
5. **Report** results

## Key Patterns

\`\`\`python
# Cleaning: filter out invalid entries
clean_data = [r for r in raw_data if r.get("rating") is not None]

# Grouping
from collections import defaultdict
groups = defaultdict(list)
for r in clean_data:
    groups[r["category"]].append(r["rating"])

# Reporting
for cat, ratings in sorted(groups.items()):
    avg = sum(ratings) / len(ratings)
    print(f"{cat}: avg={avg:.1f}, responses={len(ratings)}")
\`\`\`

> **Tip:** Always clean your data before analyzing it. Missing or invalid values can skew results.`,
    codeExample: `from collections import defaultdict\n\nsurvey = [\n    {"user": "Alice", "category": "UX", "rating": 4},\n    {"user": "Bob", "category": "Speed", "rating": 3},\n    {"user": "Charlie", "category": "UX", "rating": 5},\n    {"user": "Diana", "category": "Speed", "rating": 2},\n    {"user": "Eve", "category": "UX", "rating": None},\n    {"user": "Frank", "category": "Features", "rating": 4},\n]\n\nclean = [r for r in survey if r["rating"] is not None]\nprint(f"Valid responses: {len(clean)}/{len(survey)}")\n\ngroups = defaultdict(list)\nfor r in clean:\n    groups[r["category"]].append(r["rating"])\n\nfor cat in sorted(groups):\n    ratings = groups[cat]\n    print(f"{cat}: avg={sum(ratings)/len(ratings):.1f}, count={len(ratings)}")`,
    exercise: {
      title: "Restaurant Review Analyzer",
      description: "Analyze restaurant reviews: clean, group by cuisine, and generate a report.",
      starterCode: `reviews = [
    {"reviewer": "Alice", "cuisine": "Italian", "rating": 5, "price": 35},
    {"reviewer": "Bob", "cuisine": "Mexican", "rating": 4, "price": 20},
    {"reviewer": "Charlie", "cuisine": "Italian", "rating": 4, "price": 40},
    {"reviewer": "Diana", "cuisine": "Japanese", "rating": None, "price": 50},
    {"reviewer": "Eve", "cuisine": "Mexican", "rating": 5, "price": 18},
    {"reviewer": "Frank", "cuisine": "Italian", "rating": 3, "price": 30},
    {"reviewer": "Grace", "cuisine": "Japanese", "rating": 5, "price": 55},
    {"reviewer": "Henry", "cuisine": "Mexican", "rating": None, "price": 22},
    {"reviewer": "Ivy", "cuisine": "Japanese", "rating": 4, "price": 45},
]

# STEP 1: Clean - remove reviews with None rating
clean = [r for r in reviews if r["rating"] is not None]
print(f"Valid reviews: {len(clean)}/{len(reviews)}")

# STEP 2: Group by cuisine
groups = {}
for r in clean:
    cuisine = r["cuisine"]
    if cuisine not in groups:
        groups[cuisine] = []
    groups[cuisine].append(r)

# STEP 3: Report - for each cuisine show avg rating and avg price
print("--- Report ---")
for cuisine in sorted(groups):
    items = groups[cuisine]
    avg_rating = sum(r["rating"] for r in items) / len(items)
    avg_price = sum(r["price"] for r in items) / len(items)
    print(f"{cuisine}: avg_rating={avg_rating:.1f}, avg_price={avg_price:.1f}, reviews={len(items)}")

# STEP 4: Find the highest rated cuisine
best = max(groups, key=lambda c: sum(r["rating"] for r in groups[c]) / len(groups[c]))
print(f"Best cuisine: {best}")
`,
      solution: `reviews = [
    {"reviewer": "Alice", "cuisine": "Italian", "rating": 5, "price": 35},
    {"reviewer": "Bob", "cuisine": "Mexican", "rating": 4, "price": 20},
    {"reviewer": "Charlie", "cuisine": "Italian", "rating": 4, "price": 40},
    {"reviewer": "Diana", "cuisine": "Japanese", "rating": None, "price": 50},
    {"reviewer": "Eve", "cuisine": "Mexican", "rating": 5, "price": 18},
    {"reviewer": "Frank", "cuisine": "Italian", "rating": 3, "price": 30},
    {"reviewer": "Grace", "cuisine": "Japanese", "rating": 5, "price": 55},
    {"reviewer": "Henry", "cuisine": "Mexican", "rating": None, "price": 22},
    {"reviewer": "Ivy", "cuisine": "Japanese", "rating": 4, "price": 45},
]

clean = [r for r in reviews if r["rating"] is not None]
print(f"Valid reviews: {len(clean)}/{len(reviews)}")

groups = {}
for r in clean:
    cuisine = r["cuisine"]
    if cuisine not in groups:
        groups[cuisine] = []
    groups[cuisine].append(r)

print("--- Report ---")
for cuisine in sorted(groups):
    items = groups[cuisine]
    avg_rating = sum(r["rating"] for r in items) / len(items)
    avg_price = sum(r["price"] for r in items) / len(items)
    print(f"{cuisine}: avg_rating={avg_rating:.1f}, avg_price={avg_price:.1f}, reviews={len(items)}")

best = max(groups, key=lambda c: sum(r["rating"] for r in groups[c]) / len(groups[c]))
print(f"Best cuisine: {best}")
`,
      hint: "Clean first, then group by cuisine, then aggregate ratings and prices per group.",
      tests: [
        { name: "Valid count shown", expected: "Valid reviews: 7/9", hint: "2 reviews have None rating" },
        { name: "Italian stats", expected: "Italian: avg_rating=4.0, avg_price=35.0, reviews=3", hint: "(5+4+3)/3=4.0" },
        { name: "Japanese stats", expected: "Japanese: avg_rating=4.5, avg_price=50.0, reviews=2", hint: "(5+4)/2=4.5" },
        { name: "Mexican stats", expected: "Mexican: avg_rating=4.5, avg_price=19.0, reviews=2", hint: "(4+5)/2=4.5" },
        { name: "Best cuisine found", expected: "Best cuisine: Japanese", hint: "Japanese and Mexican tie at 4.5, sorted picks Japanese first" }
      ],
      hints: [
        "Filter with: [r for r in reviews if r['rating'] is not None]",
        "Group: dict with cuisine as key, list of review dicts as value",
        "max() with key= lambda to find highest average rating"
      ]
    }
  },

  // ==================== LIBRARY l11 ====================
  {
    id: "l11",
    title: "os & pathlib - File System Paths",
    difficulty: "library",
    order: 11,
    description: "Manipulate file paths and understand file system operations",
    duration: "12 min",
    content: `The \`pathlib\` module provides an object-oriented way to work with file paths. It's the modern replacement for \`os.path\`.

## Creating Paths

\`\`\`python
from pathlib import PurePosixPath as Path

# Create a path object
p = Path("/home/user/documents/report.txt")

print(p.name)       # "report.txt"
print(p.stem)       # "report"
print(p.suffix)     # ".txt"
print(p.parent)     # "/home/user/documents"
\`\`\`

## Path Operations

\`\`\`python
# Join paths with /
base = Path("/home/user")
full = base / "documents" / "file.txt"

# Get parts
print(full.parts)   # ('/', 'home', 'user', 'documents', 'file.txt')
\`\`\`

## os.path (older style)

\`\`\`python
import os.path

path = "/home/user/file.txt"
print(os.path.basename(path))   # "file.txt"
print(os.path.dirname(path))    # "/home/user"
print(os.path.splitext(path))   # ("/home/user/file", ".txt")
\`\`\`

> **Tip:** Prefer \`pathlib\` over \`os.path\` in new code. It's cleaner and more Pythonic.`,
    codeExample: `from pathlib import PurePosixPath as Path\n\n# Analyze a file path\nfile_path = Path("/projects/webapp/src/main.py")\n\nprint(f"Full path: {file_path}")\nprint(f"Name: {file_path.name}")\nprint(f"Stem: {file_path.stem}")\nprint(f"Extension: {file_path.suffix}")\nprint(f"Parent: {file_path.parent}")\nprint(f"Parts: {file_path.parts}")\n\n# Build new paths\nnew_file = file_path.parent / "utils.py"\nprint(f"New path: {new_file}")\n\n# Change extension\ncompiled = file_path.with_suffix(".pyc")\nprint(f"Compiled: {compiled}")`,
    exercise: {
      title: "Path Analyzer",
      description: "Parse and manipulate file paths using pathlib.",
      starterCode: `from pathlib import PurePosixPath as Path

files = [
    "/data/reports/2024/sales_q1.csv",
    "/data/reports/2024/sales_q2.csv",
    "/data/images/logo.png",
    "/data/scripts/analyze.py",
]

# TODO: For each file, print its name and extension
for f in files:
    p = Path(f)
    print(f"{p.name} (ext: {p.suffix})")

# TODO: Group files by their parent directory
groups = {}
for f in files:
    p = Path(f)
    parent = str(p.parent)
    if parent not in groups:
        groups[parent] = []
    groups[parent].append(p.name)

print("--- By directory ---")
for directory in sorted(groups):
    print(f"{directory}: {groups[directory]}")

# TODO: Count files by extension
extensions = {}
for f in files:
    ext = Path(f).suffix
    extensions[ext] = extensions.get(ext, 0) + 1
print("--- By extension ---")
for ext in sorted(extensions):
    print(f"{ext}: {extensions[ext]} files")
`,
      solution: `from pathlib import PurePosixPath as Path

files = [
    "/data/reports/2024/sales_q1.csv",
    "/data/reports/2024/sales_q2.csv",
    "/data/images/logo.png",
    "/data/scripts/analyze.py",
]

for f in files:
    p = Path(f)
    print(f"{p.name} (ext: {p.suffix})")

groups = {}
for f in files:
    p = Path(f)
    parent = str(p.parent)
    if parent not in groups:
        groups[parent] = []
    groups[parent].append(p.name)

print("--- By directory ---")
for directory in sorted(groups):
    print(f"{directory}: {groups[directory]}")

extensions = {}
for f in files:
    ext = Path(f).suffix
    extensions[ext] = extensions.get(ext, 0) + 1
print("--- By extension ---")
for ext in sorted(extensions):
    print(f"{ext}: {extensions[ext]} files")
`,
      hint: "Path(f).name gives filename, .suffix gives extension, .parent gives directory.",
      tests: [
        { name: "First file parsed", expected: "sales_q1.csv (ext: .csv)", hint: "Path().name and .suffix" },
        { name: "PNG file parsed", expected: "logo.png (ext: .png)", hint: "Works for any extension" },
        { name: "Reports grouped", expected: "/data/reports/2024: ['sales_q1.csv', 'sales_q2.csv']", hint: "Same parent directory" },
        { name: "CSV count", expected: ".csv: 2 files", hint: "Two .csv files" },
        { name: "PNG count", expected: ".png: 1 files", hint: "One .png file" }
      ],
      hints: [
        "Path(filepath).name gives just the filename: 'sales_q1.csv'",
        "Path(filepath).parent gives the directory: '/data/reports/2024'",
        "Path(filepath).suffix gives the extension: '.csv'"
      ]
    }
  },

  // ==================== LIBRARY l12 ====================
  {
    id: "l12",
    title: "json Module Deep Dive",
    difficulty: "library",
    order: 12,
    description: "Master JSON serialization with formatting, custom objects, and more",
    duration: "10 min",
    content: `The \`json\` module handles conversion between Python objects and JSON strings.

## Pretty Printing

\`\`\`python
import json

data = {"name": "Alice", "scores": [90, 85, 92], "active": True}

# Compact
print(json.dumps(data))

# Pretty with indent
print(json.dumps(data, indent=2))

# Sorted keys
print(json.dumps(data, indent=2, sort_keys=True))
\`\`\`

## Type Mapping

| Python | JSON |
|--------|------|
| dict | object |
| list | array |
| str | string |
| int/float | number |
| True/False | true/false |
| None | null |

## Custom Serialization

\`\`\`python
from datetime import date

def custom_encoder(obj):
    if isinstance(obj, date):
        return obj.isoformat()
    raise TypeError(f"Not serializable: {type(obj)}")

data = {"event": "meeting", "date": date(2024, 1, 15)}
print(json.dumps(data, default=custom_encoder))
\`\`\`

> **Tip:** Use \`indent=2\` for human-readable output and \`sort_keys=True\` for consistent key ordering.`,
    codeExample: `import json\n\n# Build a config object\nconfig = {\n    "app_name": "PyMaster",\n    "version": "2.0",\n    "debug": False,\n    "features": ["lessons", "editor", "quizzes"],\n    "limits": {"max_users": 100, "timeout": 30}\n}\n\n# Pretty print\nformatted = json.dumps(config, indent=2, sort_keys=True)\nprint("Config JSON:")\nprint(formatted)\n\n# Parse it back\nparsed = json.loads(formatted)\nprint(f"\\nApp: {parsed['app_name']} v{parsed['version']}")\nprint(f"Features: {', '.join(parsed['features'])}")`,
    exercise: {
      title: "JSON Config Manager",
      description: "Build a configuration system that converts Python dicts to/from JSON.",
      starterCode: `import json

# TODO: Create a settings dictionary
settings = {
    "theme": "dark",
    "language": "en",
    "font_size": 14,
    "auto_save": True,
    "recent_files": ["main.py", "utils.py", "test.py"],
    "editor": {
        "tab_size": 4,
        "word_wrap": True
    }
}

# TODO: Convert to pretty JSON string
json_str = json.dumps(settings, indent=2)
print("Settings JSON:")
print(json_str)

# TODO: Parse it back and verify
loaded = json.loads(json_str)
print(f"Theme: {loaded['theme']}")
print(f"Font: {loaded['font_size']}")
print(f"Tab size: {loaded['editor']['tab_size']}")
print(f"Recent: {loaded['recent_files']}")

# TODO: Modify a setting and re-serialize
loaded["theme"] = "light"
loaded["font_size"] = 16
updated = json.dumps(loaded, indent=2, sort_keys=True)
print(f"Updated theme: {json.loads(updated)['theme']}")
print(f"Updated font: {json.loads(updated)['font_size']}")
`,
      solution: `import json

settings = {
    "theme": "dark",
    "language": "en",
    "font_size": 14,
    "auto_save": True,
    "recent_files": ["main.py", "utils.py", "test.py"],
    "editor": {
        "tab_size": 4,
        "word_wrap": True
    }
}

json_str = json.dumps(settings, indent=2)
print("Settings JSON:")
print(json_str)

loaded = json.loads(json_str)
print(f"Theme: {loaded['theme']}")
print(f"Font: {loaded['font_size']}")
print(f"Tab size: {loaded['editor']['tab_size']}")
print(f"Recent: {loaded['recent_files']}")

loaded["theme"] = "light"
loaded["font_size"] = 16
updated = json.dumps(loaded, indent=2, sort_keys=True)
print(f"Updated theme: {json.loads(updated)['theme']}")
print(f"Updated font: {json.loads(updated)['font_size']}")
`,
      hint: "json.dumps() converts to string, json.loads() parses back. Use indent=2 for pretty output.",
      tests: [
        { name: "Theme shown", expected: "Theme: dark", hint: "loaded['theme']" },
        { name: "Font shown", expected: "Font: 14", hint: "loaded['font_size']" },
        { name: "Tab size shown", expected: "Tab size: 4", hint: "loaded['editor']['tab_size']" },
        { name: "Updated theme", expected: "Updated theme: light", hint: "Changed from dark to light" },
        { name: "Updated font", expected: "Updated font: 16", hint: "Changed from 14 to 16" }
      ],
      hints: [
        "json.dumps(dict, indent=2) creates a pretty JSON string",
        "json.loads(string) parses JSON back into a Python dict",
        "Modify the dict directly, then dumps() again to re-serialize"
      ]
    }
  },

  // ==================== LIBRARY l13 ====================
  {
    id: "l13",
    title: "re - Regular Expressions",
    difficulty: "library",
    order: 13,
    description: "Find, match, and replace text patterns with regex",
    duration: "15 min",
    content: `Regular expressions (regex) are powerful patterns for finding text. The \`re\` module provides Python's regex support.

## Common Functions

\`\`\`python
import re

text = "Call 555-1234 or 555-5678"

re.search(r'\\d{3}-\\d{4}', text)    # Find first match
re.findall(r'\\d{3}-\\d{4}', text)   # Find ALL matches -> ['555-1234', '555-5678']
re.sub(r'\\d{3}', 'XXX', text)       # Replace -> "Call XXX-1234 or XXX-5678"
\`\`\`

## Common Patterns

| Pattern | Matches | Example |
|---------|---------|---------|
| \`\\d\` | Any digit | \`\\d+\` matches "42" |
| \`\\w\` | Letter/digit/_ | \`\\w+\` matches "hello_2" |
| \`\\s\` | Whitespace | \`\\s+\` matches spaces |
| \`.\` | Any character | \`.+\` matches anything |
| \`[abc]\` | a, b, or c | \`[aeiou]\` matches vowels |
| \`^\` | Start of string | \`^Hello\` |
| \`$\` | End of string | \`world$\` |

## Quantifiers

| Quantifier | Meaning |
|-----------|---------|
| \`+\` | 1 or more |
| \`*\` | 0 or more |
| \`?\` | 0 or 1 |
| \`{3}\` | Exactly 3 |
| \`{2,4}\` | 2 to 4 |

> **Tip:** Always use raw strings \`r'pattern'\` for regex to avoid escaping issues.`,
    codeExample: `import re\n\ntext = "Contact: alice@email.com or bob.smith@company.org. Call 555-1234."\n\n# Find emails\nemails = re.findall(r'[\\w.]+@[\\w.]+\\.[a-z]+', text)\nprint(f"Emails: {emails}")\n\n# Find phone numbers\nphones = re.findall(r'\\d{3}-\\d{4}', text)\nprint(f"Phones: {phones}")\n\n# Replace emails with [REDACTED]\nredacted = re.sub(r'[\\w.]+@[\\w.]+\\.[a-z]+', '[REDACTED]', text)\nprint(f"Redacted: {redacted}")`,
    exercise: {
      title: "Text Pattern Extractor",
      description: "Use regex to find and manipulate patterns in text.",
      starterCode: `import re

text = """
Order #1001: 3 widgets at $9.99 each
Order #1002: 1 gadget at $24.50 each
Order #1003: 5 widgets at $9.99 each
Contact: support@shop.com or sales@shop.com
Phone: 555-0100 or 555-0200
"""

# TODO: Find all order numbers (#NNNN pattern)
orders = re.findall(r'#\\d{4}', text)
print(f"Orders: {orders}")

# TODO: Find all prices ($N.NN pattern)
prices = re.findall(r'\\$\\d+\\.\\d{2}', text)
print(f"Prices: {prices}")

# TODO: Find all email addresses
emails = re.findall(r'[\\w.]+@[\\w.]+\\.[a-z]+', text)
print(f"Emails: {emails}")

# TODO: Find all phone numbers
phones = re.findall(r'\\d{3}-\\d{4}', text)
print(f"Phones: {phones}")

# TODO: Replace all emails with [hidden]
hidden = re.sub(r'[\\w.]+@[\\w.]+\\.[a-z]+', '[hidden]', text)
print(f"Email count replaced: {hidden.count('[hidden]')}")
`,
      solution: `import re

text = """
Order #1001: 3 widgets at $9.99 each
Order #1002: 1 gadget at $24.50 each
Order #1003: 5 widgets at $9.99 each
Contact: support@shop.com or sales@shop.com
Phone: 555-0100 or 555-0200
"""

orders = re.findall(r'#\\d{4}', text)
print(f"Orders: {orders}")

prices = re.findall(r'\\$\\d+\\.\\d{2}', text)
print(f"Prices: {prices}")

emails = re.findall(r'[\\w.]+@[\\w.]+\\.[a-z]+', text)
print(f"Emails: {emails}")

phones = re.findall(r'\\d{3}-\\d{4}', text)
print(f"Phones: {phones}")

hidden = re.sub(r'[\\w.]+@[\\w.]+\\.[a-z]+', '[hidden]', text)
print(f"Email count replaced: {hidden.count('[hidden]')}")
`,
      hint: "re.findall(pattern, text) returns all matches. Use \\d for digits, \\w for word chars.",
      tests: [
        { name: "Orders found", expected: "Orders: ['#1001', '#1002', '#1003']", hint: "#\\d{4} matches # followed by 4 digits" },
        { name: "Prices found", expected: "Prices: ['$9.99', '$24.50', '$9.99']", hint: "\\$\\d+\\.\\d{2} matches dollar amounts" },
        { name: "Emails found", expected: "Emails: ['support@shop.com', 'sales@shop.com']", hint: "[\\w.]+@[\\w.]+\\.[a-z]+ for emails" },
        { name: "Phones found", expected: "Phones: ['555-0100', '555-0200']", hint: "\\d{3}-\\d{4} for phone numbers" },
        { name: "Emails replaced", expected: "Email count replaced: 2", hint: "re.sub replaces all matches" }
      ],
      hints: [
        "re.findall(r'#\\d{4}', text) finds all #NNNN patterns",
        "For prices: r'\\$\\d+\\.\\d{2}' - escape the $ with \\",
        "re.sub(pattern, replacement, text) replaces all matches"
      ]
    }
  },

  // ==================== LIBRARY l14 ====================
  {
    id: "l14",
    title: "functools - Function Tools",
    difficulty: "library",
    order: 14,
    description: "Optimize and transform functions with lru_cache, partial, and reduce",
    duration: "12 min",
    content: `The \`functools\` module provides higher-order functions that act on or return other functions.

## lru_cache - Memoization

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Without cache: fib(35) takes seconds
# With cache: fib(35) is instant!
print(fibonacci(35))  # 9227465
\`\`\`

## partial - Pre-fill Arguments

\`\`\`python
from functools import partial

def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube = partial(power, exp=3)

print(square(5))   # 25
print(cube(3))     # 27
\`\`\`

## reduce - Combine Elements

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
product = reduce(lambda a, b: a * b, numbers)
# 1*2=2, 2*3=6, 6*4=24, 24*5=120
print(product)  # 120
\`\`\`

> **Tip:** \`lru_cache\` is incredibly powerful for recursive functions. It can turn exponential time into linear time.`,
    codeExample: `from functools import lru_cache, partial, reduce\n\n# --- lru_cache for Fibonacci ---\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n-1) + fib(n-2)\n\nfor i in range(10):\n    print(f"fib({i}) = {fib(i)}")\n\n# --- partial for power functions ---\ndef power(base, exp):\n    return base ** exp\n\nsquare = partial(power, exp=2)\ncube = partial(power, exp=3)\nprint(f"\\n7 squared = {square(7)}")\nprint(f"4 cubed = {cube(4)}")\n\n# --- reduce for product ---\nnums = [2, 3, 4, 5]\nproduct = reduce(lambda a, b: a * b, nums)\nprint(f"\\nProduct of {nums} = {product}")`,
    exercise: {
      title: "Functools Practice",
      description: "Use lru_cache, partial, and reduce to solve problems efficiently.",
      starterCode: `from functools import lru_cache, partial, reduce

# TASK 1: Memoized Fibonacci
# Use @lru_cache to make this fast
@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

# Print first 10 fibonacci numbers
for i in range(10):
    print(f"fib({i}) = {fib(i)}")

# TASK 2: Create partial functions
def multiply(a, b):
    return a * b

# TODO: Create double = partial that multiplies by 2
double = partial(multiply, 2)

# TODO: Create triple = partial that multiplies by 3
triple = partial(multiply, 3)

print(f"double(7) = {double(7)}")
print(f"triple(7) = {triple(7)}")

# TASK 3: Use reduce to find the max value
numbers = [34, 67, 12, 89, 45, 23]
# TODO: Use reduce with lambda to find max
max_val = reduce(lambda a, b: a if a > b else b, numbers)
print(f"Max of {numbers} = {max_val}")

# TASK 4: Use reduce to concatenate strings
words = ["Hello", " ", "World", "!"]
sentence = reduce(lambda a, b: a + b, words)
print(f"Sentence: {sentence}")
`,
      solution: `from functools import lru_cache, partial, reduce

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

for i in range(10):
    print(f"fib({i}) = {fib(i)}")

def multiply(a, b):
    return a * b

double = partial(multiply, 2)
triple = partial(multiply, 3)

print(f"double(7) = {double(7)}")
print(f"triple(7) = {triple(7)}")

numbers = [34, 67, 12, 89, 45, 23]
max_val = reduce(lambda a, b: a if a > b else b, numbers)
print(f"Max of {numbers} = {max_val}")

words = ["Hello", " ", "World", "!"]
sentence = reduce(lambda a, b: a + b, words)
print(f"Sentence: {sentence}")
`,
      hint: "lru_cache caches results, partial pre-fills args, reduce combines elements pairwise.",
      tests: [
        { name: "Fibonacci 0", expected: "fib(0) = 0", hint: "Base case: fib(0) = 0" },
        { name: "Fibonacci 9", expected: "fib(9) = 34", hint: "fib(9) = 34" },
        { name: "Double works", expected: "double(7) = 14", hint: "partial(multiply, 2)(7) = 2*7 = 14" },
        { name: "Triple works", expected: "triple(7) = 21", hint: "partial(multiply, 3)(7) = 3*7 = 21" },
        { name: "Max found", expected: "Max of [34, 67, 12, 89, 45, 23] = 89", hint: "reduce compares pairs" },
        { name: "Sentence built", expected: "Sentence: Hello World!", hint: "reduce concatenates all strings" }
      ],
      hints: [
        "@lru_cache(maxsize=None) above def fib(n): caches all results",
        "double = partial(multiply, 2) pre-fills the first argument as 2",
        "reduce(lambda a, b: a if a > b else b, numbers) keeps the larger value"
      ]
    }
  },

  // ==================== LIBRARY l15 ====================
  {
    id: "l15",
    title: "Testing Concepts & Assertions",
    difficulty: "library",
    order: 15,
    description: "Write test-like assertions to verify your code works correctly",
    duration: "12 min",
    content: `Testing ensures your code works correctly. Python's \`assert\` statement and the \`unittest\` module are the foundation.

## Assert Statement

\`\`\`python
# assert condition, "error message"
# If condition is False, AssertionError is raised

def add(a, b):
    return a + b

assert add(2, 3) == 5, "2+3 should be 5"
assert add(0, 0) == 0, "0+0 should be 0"
print("All tests passed!")
\`\`\`

## Writing Test Functions

\`\`\`python
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
    print("test_add: PASSED")

def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(0, 5) == 0
    print("test_multiply: PASSED")
\`\`\`

## Testing Patterns

- **Test normal cases**: typical inputs
- **Test edge cases**: 0, empty strings, empty lists
- **Test error cases**: invalid inputs

> **Tip:** Write tests BEFORE fixing bugs. First write a test that fails, then fix the code until the test passes (TDD - Test Driven Development).`,
    codeExample: `# A simple testing framework\ndef run_test(name, func):\n    try:\n        func()\n        print(f"  PASS: {name}")\n        return True\n    except AssertionError as e:\n        print(f"  FAIL: {name} - {e}")\n        return False\n\n# Functions to test\ndef is_palindrome(text):\n    clean = text.lower().replace(" ", "")\n    return clean == clean[::-1]\n\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\n# Test cases\nprint("Running tests...")\npassed = 0\ntotal = 0\n\ndef t1():\n    assert is_palindrome("racecar") == True\n    assert is_palindrome("hello") == False\n    assert is_palindrome("A man a plan a canal Panama") == True\n\ndef t2():\n    assert factorial(0) == 1\n    assert factorial(5) == 120\n    assert factorial(1) == 1\n\nfor name, test in [("palindrome", t1), ("factorial", t2)]:\n    total += 1\n    if run_test(name, test):\n        passed += 1\n\nprint(f"\\nResults: {passed}/{total} passed")`,
    exercise: {
      title: "Test Your Functions",
      description: "Write functions and then verify them with assertions.",
      starterCode: `# TASK: Write functions, then test them with assert

# TODO: Write a function 'clamp' that keeps a value within a range
# clamp(value, min_val, max_val) returns:
# - min_val if value < min_val
# - max_val if value > max_val
# - value otherwise
def clamp(value, min_val, max_val):
    if value < min_val:
        return min_val
    elif value > max_val:
        return max_val
    return value

# TODO: Write a function 'count_vowels' that counts vowels in a string
def count_vowels(text):
    return sum(1 for c in text.lower() if c in "aeiou")

# TODO: Write a function 'is_even' that returns True if number is even
def is_even(n):
    return n % 2 == 0

# Test clamp
assert clamp(5, 0, 10) == 5, "5 is within range"
assert clamp(-5, 0, 10) == 0, "below min returns min"
assert clamp(15, 0, 10) == 10, "above max returns max"
assert clamp(0, 0, 10) == 0, "edge: equals min"
print("clamp: ALL PASSED")

# Test count_vowels
assert count_vowels("hello") == 2, "hello has 2 vowels"
assert count_vowels("PYTHON") == 1, "PYTHON has 1 vowel (O)"
assert count_vowels("xyz") == 0, "xyz has 0 vowels"
print("count_vowels: ALL PASSED")

# Test is_even
assert is_even(4) == True, "4 is even"
assert is_even(7) == False, "7 is odd"
assert is_even(0) == True, "0 is even"
print("is_even: ALL PASSED")

print("All tests passed!")
`,
      solution: `def clamp(value, min_val, max_val):
    if value < min_val:
        return min_val
    elif value > max_val:
        return max_val
    return value

def count_vowels(text):
    return sum(1 for c in text.lower() if c in "aeiou")

def is_even(n):
    return n % 2 == 0

assert clamp(5, 0, 10) == 5, "5 is within range"
assert clamp(-5, 0, 10) == 0, "below min returns min"
assert clamp(15, 0, 10) == 10, "above max returns max"
assert clamp(0, 0, 10) == 0, "edge: equals min"
print("clamp: ALL PASSED")

assert count_vowels("hello") == 2, "hello has 2 vowels"
assert count_vowels("PYTHON") == 1, "PYTHON has 1 vowel (O)"
assert count_vowels("xyz") == 0, "xyz has 0 vowels"
print("count_vowels: ALL PASSED")

assert is_even(4) == True, "4 is even"
assert is_even(7) == False, "7 is odd"
assert is_even(0) == True, "0 is even"
print("is_even: ALL PASSED")

print("All tests passed!")
`,
      hint: "Write functions that handle normal and edge cases, then assert expected results.",
      tests: [
        { name: "Clamp tests pass", expected: "clamp: ALL PASSED", hint: "clamp should return min/max/value appropriately" },
        { name: "Vowel tests pass", expected: "count_vowels: ALL PASSED", hint: "Count a,e,i,o,u (case-insensitive)" },
        { name: "Even tests pass", expected: "is_even: ALL PASSED", hint: "n % 2 == 0 checks if even" },
        { name: "All pass", expected: "All tests passed!", hint: "All asserts succeed" }
      ],
      hints: [
        "clamp: if value < min_val: return min_val, elif value > max_val: return max_val, else: return value",
        "count_vowels: sum(1 for c in text.lower() if c in 'aeiou')",
        "is_even: return n % 2 == 0"
      ]
    }
  }
]
