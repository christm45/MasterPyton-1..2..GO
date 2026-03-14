// ============================================================
// BEGINNER GUIDED EXERCISES
// These exercises are designed for absolute beginners.
// Every code example and starter code is HEAVILY commented
// to explain exactly how Python works, step by step.
// ============================================================

export const beginnerExercises = [

  // ==================== EXERCISE 1 ====================
  {
    id: "bx01",
    title: "Your Very First Variable",
    difficulty: "beginner",
    order: 21,
    description: "Learn what variables are and how to create them - explained line by line",
    duration: "8 min",
    content: `A variable is like a **labeled box** where you store a value. You give it a name, and Python remembers the value for you.

## How Variables Work

\`\`\`python
# Creating a variable is simple:
# 1. Choose a name (left side)
# 2. Use the = sign (assignment operator)
# 3. Give it a value (right side)

my_name = "Alice"       # This creates a box called "my_name" and puts "Alice" inside
my_age = 25             # This creates a box called "my_age" and puts 25 inside
my_height = 5.6         # This creates a box called "my_height" and puts 5.6 inside

# Now you can USE the variable by its name:
print(my_name)          # Python looks inside the "my_name" box and prints: Alice
print(my_age)           # Python looks inside the "my_age" box and prints: 25
\`\`\`

## Rules for Variable Names

- **CAN** contain: letters, numbers, underscores (\`_\`)
- **CANNOT** start with a number (\`2name\` is WRONG)
- **CANNOT** have spaces (\`my name\` is WRONG, use \`my_name\`)
- **ARE** case-sensitive (\`Name\` and \`name\` are DIFFERENT variables)

## Changing a Variable

\`\`\`python
# You can change what's inside a variable at any time:
score = 0          # score starts at 0
print(score)       # prints: 0

score = 10         # now score is 10 (the old value 0 is gone)
print(score)       # prints: 10

score = score + 5  # take current score (10), add 5, put result (15) back
print(score)       # prints: 15
\`\`\`

> **Tip:** Think of \`=\` as "put this value into that box", NOT as "equals" in math.`,
    codeExample: `# =============================================
# EXAMPLE: Creating and using variables
# =============================================

# Step 1: Create variables (store values in named boxes)
pet_name = "Buddy"       # a text value (called a "string")
pet_age = 3              # a whole number (called an "integer")
pet_weight = 12.5        # a decimal number (called a "float")

# Step 2: Use the variables with print()
# The f before the quotes makes it an "f-string"
# Anything inside {curly braces} gets replaced by the variable's value
print(f"My pet's name is {pet_name}")
print(f"{pet_name} is {pet_age} years old")
print(f"{pet_name} weighs {pet_weight} kg")

# Step 3: Change a variable
pet_age = pet_age + 1    # one year passes, add 1 to age
print(f"After birthday: {pet_name} is now {pet_age} years old")`,
    exercise: {
      title: "Create Your Own Variables",
      description: "Follow the step-by-step comments to create variables and print them. Each TODO tells you exactly what to do.",
      starterCode: `# =============================================
# EXERCISE: Create your own variables
# Follow each step carefully!
# =============================================

# STEP 1: Create a variable called "fruit" and store "apple" in it
# How: type the variable name, then =, then the value in quotes
# Example: fruit = "apple"

# TODO: Write your code here (create the fruit variable)


# STEP 2: Create a variable called "quantity" and store the number 5
# Numbers don't need quotes!
# Example: quantity = 5

# TODO: Write your code here (create the quantity variable)


# STEP 3: Create a variable called "price" and store 1.50
# Decimal numbers (floats) don't need quotes either

# TODO: Write your code here (create the price variable)


# STEP 4: Calculate the total cost
# Multiply quantity by price and store in a new variable called "total"
# How: total = quantity * price

# TODO: Write your code here (calculate the total)


# STEP 5: Print everything using f-strings
# f-strings let you put variables inside {curly braces}
# Example: print(f"I have {quantity} items")

# TODO: Print "Fruit: apple" using the fruit variable
print(f"Fruit: {fruit}")

# TODO: Print "Quantity: 5" using the quantity variable
print(f"Quantity: {quantity}")

# TODO: Print "Price: 1.5" using the price variable
print(f"Price: {price}")

# TODO: Print "Total: 7.5" using the total variable
print(f"Total: {total}")
`,
      solution: `# =============================================
# EXERCISE: Create your own variables
# Follow each step carefully!
# =============================================

# STEP 1: Create a variable called "fruit" and store "apple" in it
fruit = "apple"

# STEP 2: Create a variable called "quantity" and store the number 5
quantity = 5

# STEP 3: Create a variable called "price" and store 1.50
price = 1.50

# STEP 4: Calculate the total cost
total = quantity * price

# STEP 5: Print everything using f-strings
print(f"Fruit: {fruit}")
print(f"Quantity: {quantity}")
print(f"Price: {price}")
print(f"Total: {total}")`,
      hint: "Just assign values to variables: fruit = \"apple\", quantity = 5, price = 1.50, total = quantity * price",
      tests: [
        { name: "Fruit is printed correctly", expected: "Fruit: apple", hint: "Create: fruit = \"apple\" then print(f\"Fruit: {fruit}\")" },
        { name: "Quantity is printed correctly", expected: "Quantity: 5", hint: "Create: quantity = 5" },
        { name: "Price is printed correctly", expected: "Price: 1.5", hint: "Create: price = 1.50 (Python shows 1.5)" },
        { name: "Total is calculated correctly", expected: "Total: 7.5", hint: "Create: total = quantity * price (5 * 1.5 = 7.5)" }
      ],
      hints: [
        "Step 1: Just type: fruit = \"apple\" (text values need quotes around them)",
        "Step 2 and 3: quantity = 5 and price = 1.50 (numbers don't need quotes)",
        "Step 4: total = quantity * price (the * symbol means multiply)"
      ]
    }
  },

  // ==================== EXERCISE 2 ====================
  {
    id: "bx02",
    title: "Print Exploration Lab",
    difficulty: "beginner",
    order: 22,
    description: "Discover all the ways print() can display text - with detailed comments",
    duration: "8 min",
    content: `The \`print()\` function is your main tool for showing output. Let's explore everything it can do!

## Basic Printing

\`\`\`python
# Print a simple message (text goes inside quotes)
print("Hello!")              # Output: Hello!

# Print a number (no quotes needed for numbers)
print(42)                    # Output: 42

# Print multiple things separated by spaces
print("Age:", 25)            # Output: Age: 25
\`\`\`

## Special Print Tricks

\`\`\`python
# Change the separator between items
print("A", "B", "C")              # Output: A B C  (space is default)
print("A", "B", "C", sep="-")     # Output: A-B-C  (dash separator)
print("A", "B", "C", sep="...")   # Output: A...B...C

# Repeat a string with *
print("=" * 20)              # Output: ====================
print("Ha" * 3)              # Output: HaHaHa

# Mix text and numbers with f-strings
name = "Python"
version = 3
print(f"{name} version {version}")  # Output: Python version 3
\`\`\`

> **Tip:** The \`print()\` function automatically adds a new line at the end. Each \`print()\` starts on a new line.`,
    codeExample: `# =============================================
# EXAMPLE: All the ways to use print()
# =============================================

# --- Basic text ---
print("Hello, World!")           # prints text inside the quotes

# --- Multiple items ---
# print() adds a SPACE between each item automatically
print("Name:", "Alice", "Age:", 25)

# --- Changing the separator ---
# sep= changes what goes BETWEEN items (default is a space)
print("2024", "01", "15", sep="-")   # date format: 2024-01-15
print("red", "green", "blue", sep=" | ")  # red | green | blue

# --- Repeating strings ---
# The * operator repeats text
print("=" * 30)                  # prints 30 equal signs
print("Hip Hip Hooray! " * 3)   # repeats the phrase 3 times

# --- F-strings (formatted strings) ---
# Put f before the quotes, then use {variable} inside
item = "coffee"
price = 4.99
print(f"One {item} costs \${price}")`,
    exercise: {
      title: "Print Master Challenge",
      description: "Use different print() techniques to create the exact output shown. Read each comment carefully!",
      starterCode: `# =============================================
# EXERCISE: Master the print() function
# Read each comment, then write the code below it
# =============================================

# TASK 1: Print a welcome message
# Just use print() with text in quotes
# Expected output: Welcome to Python!

# TODO: Write your print statement here
print("Welcome to Python!")

# TASK 2: Print a separator line of 20 dashes
# Use the * operator to repeat a character
# How it works: "character" * number = character repeated
# Example: "#" * 5 gives "#####"
# Expected output: --------------------

# TODO: Write your print statement here (use "-" * 20)


# TASK 3: Print your name and age using SEPARATE items
# print() can take multiple items separated by commas
# It automatically puts spaces between them
# Expected output: Name: Alice Age: 25

# TODO: Write your print statement here
# (use: print("Name:", "Alice", "Age:", 25))


# TASK 4: Print a date using sep=
# sep= changes what goes between items
# Expected output: 2024-01-15
# Hint: print("2024", "01", "15", sep="-")

# TODO: Write your print statement here


# TASK 5: Create variables and use an f-string
# f-strings let you put variables inside {curly braces}
# Expected output: I am learning Python and it is fun!

language = "Python"
feeling = "fun"

# TODO: print an f-string using the variables above

`,
      solution: `print("Welcome to Python!")

print("-" * 20)

print("Name:", "Alice", "Age:", 25)

print("2024", "01", "15", sep="-")

language = "Python"
feeling = "fun"
print(f"I am learning {language} and it is {feeling}!")`,
      hint: "Use print() for text, \"-\" * 20 for dashes, sep=\"-\" for date, f\"...{var}...\" for f-strings.",
      tests: [
        { name: "Welcome message printed", expected: "Welcome to Python!", hint: "print(\"Welcome to Python!\")" },
        { name: "Separator line printed", expected: "--------------------", hint: "print(\"-\" * 20) repeats the dash 20 times" },
        { name: "Name and age printed", expected: "Name: Alice Age: 25", hint: "print(\"Name:\", \"Alice\", \"Age:\", 25)" },
        { name: "Date printed with dashes", expected: "2024-01-15", hint: "print(\"2024\", \"01\", \"15\", sep=\"-\")" },
        { name: "F-string message printed", expected: "I am learning Python and it is fun!", hint: "print(f\"I am learning {language} and it is {feeling}!\")" }
      ],
      hints: [
        "Task 2: print(\"-\" * 20) - the * repeats the dash character 20 times",
        "Task 4: print(\"2024\", \"01\", \"15\", sep=\"-\") - sep changes the separator to a dash",
        "Task 5: print(f\"I am learning {language} and it is {feeling}!\") - variables go in {curly braces}"
      ]
    }
  },

  // ==================== EXERCISE 3 ====================
  {
    id: "bx03",
    title: "Math Made Simple",
    difficulty: "beginner",
    order: 23,
    description: "Learn Python math operators with clear explanations on every line",
    duration: "10 min",
    content: `Python can be used as a powerful calculator. Let's learn all the math operators!

## The Math Operators

\`\`\`python
# +  Addition        (adds two numbers)
# -  Subtraction     (subtracts right from left)
# *  Multiplication  (multiplies two numbers)
# /  Division        (divides, ALWAYS gives a decimal result)
# // Floor Division  (divides and rounds DOWN to nearest whole number)
# %  Modulus         (gives the REMAINDER after division)
# ** Exponent        (raises to a power)

print(10 + 3)    # 13   (addition)
print(10 - 3)    # 7    (subtraction)
print(10 * 3)    # 30   (multiplication)
print(10 / 3)    # 3.33 (division - always gives decimal)
print(10 // 3)   # 3    (floor division - drops the decimal)
print(10 % 3)    # 1    (remainder: 10 = 3*3 + 1)
print(10 ** 3)   # 1000 (10 to the power of 3: 10*10*10)
\`\`\`

## Order of Operations

Python follows the same math rules you learned in school: **PEMDAS**
1. **P**arentheses first
2. **E**xponents
3. **M**ultiplication and **D**ivision (left to right)
4. **A**ddition and **S**ubtraction (left to right)

\`\`\`python
result = 2 + 3 * 4      # = 2 + 12 = 14  (multiplication first!)
result = (2 + 3) * 4    # = 5 * 4 = 20   (parentheses first!)
\`\`\`

> **Tip:** When in doubt, use parentheses \`()\` to make the order clear!`,
    codeExample: `# =============================================
# EXAMPLE: Python as a calculator
# =============================================

# --- Basic operations ---
print("5 + 3 =", 5 + 3)       # addition: 8
print("10 - 4 =", 10 - 4)     # subtraction: 6
print("6 * 7 =", 6 * 7)       # multiplication: 42
print("15 / 4 =", 15 / 4)     # division: 3.75 (always decimal!)

# --- Special operations ---
print("15 // 4 =", 15 // 4)   # floor division: 3 (rounds down)
print("15 % 4 =", 15 % 4)     # remainder: 3 (15 = 4*3 + 3)
print("2 ** 8 =", 2 ** 8)     # exponent: 256 (2 to the power 8)

# --- Using variables ---
width = 10
height = 5
area = width * height          # 10 * 5 = 50
print(f"Area of {width}x{height} rectangle = {area}")`,
    exercise: {
      title: "Build a Tip Calculator",
      description: "Calculate the bill, tip, and total for a restaurant meal. Follow each step!",
      starterCode: `# =============================================
# EXERCISE: Restaurant Tip Calculator
# Follow each step to calculate the bill!
# =============================================

# The meal costs $45.00 and we want to tip 20%

# STEP 1: Store the meal cost in a variable
# Just assign the number to a variable name
meal_cost = 45.00

# STEP 2: Store the tip percentage
# 20% as a decimal is 0.20 (divide by 100)
# Why? Because 20% means 20 per 100 = 20/100 = 0.20
tip_percent = 0.20

# STEP 3: Calculate the tip amount
# Multiply the meal cost by the tip percentage
# Formula: tip = meal_cost * tip_percent
# Expected: 45.00 * 0.20 = 9.0

# TODO: Create a variable called "tip" and calculate it


# STEP 4: Calculate the total bill
# Add the meal cost and the tip together
# Formula: total = meal_cost + tip
# Expected: 45.00 + 9.0 = 54.0

# TODO: Create a variable called "total" and calculate it


# STEP 5: Print the results
# Use f-strings with :.2f to show 2 decimal places
# :.2f means "format as a float with 2 decimal places"
# Example: f"{price:.2f}" turns 9.0 into "9.00"

# TODO: Print "Meal: $45.00"
print(f"Meal: \${meal_cost:.2f}")

# TODO: Print "Tip: $9.00"
print(f"Tip: \${tip:.2f}")

# TODO: Print "Total: $54.00"
print(f"Total: \${total:.2f}")
`,
      solution: `meal_cost = 45.00
tip_percent = 0.20

tip = meal_cost * tip_percent

total = meal_cost + tip

print(f"Meal: \${meal_cost:.2f}")
print(f"Tip: \${tip:.2f}")
print(f"Total: \${total:.2f}")`,
      hint: "tip = meal_cost * tip_percent, then total = meal_cost + tip",
      tests: [
        { name: "Meal cost printed correctly", expected: "Meal: $45.00", hint: "The meal_cost variable is already 45.00" },
        { name: "Tip calculated correctly", expected: "Tip: $9.00", hint: "tip = meal_cost * tip_percent = 45.00 * 0.20 = 9.0" },
        { name: "Total calculated correctly", expected: "Total: $54.00", hint: "total = meal_cost + tip = 45.00 + 9.0 = 54.0" }
      ],
      hints: [
        "For the tip: tip = meal_cost * tip_percent (multiply cost by percent)",
        "For the total: total = meal_cost + tip (add cost and tip together)",
        "The print statements are already written - you just need to create the tip and total variables!"
      ]
    }
  },

  // ==================== EXERCISE 4 ====================
  {
    id: "bx04",
    title: "True or False: Booleans",
    difficulty: "beginner",
    order: 24,
    description: "Understand True/False values and comparison operators",
    duration: "10 min",
    content: `Booleans are the simplest data type - they can only be **True** or **False**. They are the foundation of all decision-making in programming.

## Creating Booleans

\`\`\`python
# Direct assignment
is_sunny = True        # must be capitalized: True, not true
is_raining = False     # must be capitalized: False, not false

# From comparisons (Python checks and gives True or False)
print(5 > 3)           # True  (is 5 greater than 3? YES)
print(5 < 3)           # False (is 5 less than 3? NO)
print(5 == 5)          # True  (is 5 equal to 5? YES)
print(5 != 3)          # True  (is 5 NOT equal to 3? YES)
\`\`\`

## Comparison Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \`==\` | equal to | \`5 == 5\` | True |
| \`!=\` | not equal to | \`5 != 3\` | True |
| \`>\` | greater than | \`5 > 3\` | True |
| \`<\` | less than | \`5 < 3\` | False |
| \`>=\` | greater or equal | \`5 >= 5\` | True |
| \`<=\` | less or equal | \`3 <= 5\` | True |

## Combining Booleans

\`\`\`python
# and - BOTH must be True
print(True and True)    # True
print(True and False)   # False

# or - at least ONE must be True
print(True or False)    # True
print(False or False)   # False

# not - flips the value
print(not True)         # False
print(not False)        # True
\`\`\`

> **Tip:** Use \`==\` to compare (two equals signs). A single \`=\` is for assigning values to variables!`,
    codeExample: `# =============================================
# EXAMPLE: Booleans in action
# =============================================

age = 16
has_permit = True

# Comparisons return True or False
print(f"Age is {age}")
print(f"Is adult (age >= 18)? {age >= 18}")       # False
print(f"Is teenager (age >= 13)? {age >= 13}")     # True
print(f"Has permit? {has_permit}")                  # True

# Combining conditions with 'and' / 'or'
can_drive = age >= 16 and has_permit    # both must be True
print(f"Can drive? {can_drive}")        # True (16 >= 16 AND has permit)

can_vote = age >= 18
can_do_something = can_vote or has_permit  # at least one True
print(f"Can vote OR has permit? {can_do_something}")  # True`,
    exercise: {
      title: "Boolean Detective",
      description: "Use comparisons and boolean operators to solve each puzzle. Read the comments carefully!",
      starterCode: `# =============================================
# EXERCISE: Boolean Detective
# Figure out what's True and what's False!
# =============================================

# --- Setup: Here are our values ---
temperature = 35
age = 20
has_ticket = True

# TASK 1: Check if temperature is hot (above 30)
# Use the > operator to compare
# temperature > 30 checks: "is 35 greater than 30?" -> True

# TODO: Create a variable "is_hot" using a comparison
# Then print it
# Expected output: Is it hot? True


# TASK 2: Check if someone can enter a club
# They need to be 18 or older AND have a ticket
# Use "and" to combine two conditions
# age >= 18 is True (20 >= 18), has_ticket is True
# True and True = True

# TODO: Create "can_enter" using age >= 18 and has_ticket
# Expected output: Can enter club? True


# TASK 3: Check if it's NOT hot
# The "not" keyword flips True to False (and vice versa)
# not True = False, not False = True

# TODO: Create "is_cool" using "not is_hot"
# Expected output: Is it cool? False


# TASK 4: Check multiple conditions
# Is temperature between 20 and 30 (inclusive)?
# This means: temperature >= 20 AND temperature <= 30
# 35 >= 20 is True, but 35 <= 30 is False
# True and False = False

# TODO: Create "is_comfortable" checking if temp is between 20 and 30
# Expected output: Comfortable temperature? False

`,
      solution: `temperature = 35
age = 20
has_ticket = True

is_hot = temperature > 30
print(f"Is it hot? {is_hot}")

can_enter = age >= 18 and has_ticket
print(f"Can enter club? {can_enter}")

is_cool = not is_hot
print(f"Is it cool? {is_cool}")

is_comfortable = temperature >= 20 and temperature <= 30
print(f"Comfortable temperature? {is_comfortable}")`,
      hint: "Use >, >=, <=, and, not operators to create boolean values from comparisons.",
      tests: [
        { name: "Hot check is correct", expected: "Is it hot? True", hint: "is_hot = temperature > 30 (35 > 30 is True)" },
        { name: "Club entry check is correct", expected: "Can enter club? True", hint: "can_enter = age >= 18 and has_ticket (both True)" },
        { name: "Cool check is correct", expected: "Is it cool? False", hint: "is_cool = not is_hot (not True = False)" },
        { name: "Comfortable check is correct", expected: "Comfortable temperature? False", hint: "35 is NOT between 20 and 30, so False" }
      ],
      hints: [
        "Task 1: is_hot = temperature > 30 (then print with f-string)",
        "Task 2: can_enter = age >= 18 and has_ticket (both conditions must be True)",
        "Task 3: is_cool = not is_hot (flips the boolean value)"
      ]
    }
  },

  // ==================== EXERCISE 5 ====================
  {
    id: "bx05",
    title: "Making Choices with If/Else",
    difficulty: "beginner",
    order: 25,
    description: "Learn how programs make decisions - every line explained",
    duration: "10 min",
    content: `Programs need to make decisions. The \`if\` statement lets your code choose what to do based on a condition.

## How If Works

\`\`\`python
# The structure:
# if condition:        <- if this is True...
#     do something     <- ...run this code (INDENTED with 4 spaces)

age = 20

if age >= 18:                    # Is 20 >= 18? YES (True)
    print("You are an adult")   # This runs because the condition is True
\`\`\`

## If / Else

\`\`\`python
# if condition:        <- check this
#     do_if_true       <- runs if condition is True
# else:                <- otherwise...
#     do_if_false      <- runs if condition is False

temperature = 15

if temperature > 25:
    print("It's hot!")     # SKIPPED (15 is NOT > 25)
else:
    print("It's cool!")    # This runs (because the if was False)
\`\`\`

## If / Elif / Else

\`\`\`python
# Check multiple conditions in order:
score = 75

if score >= 90:           # Is 75 >= 90? NO -> skip
    print("Grade: A")
elif score >= 80:         # Is 75 >= 80? NO -> skip
    print("Grade: B")
elif score >= 70:         # Is 75 >= 70? YES! -> run this
    print("Grade: C")     # This prints!
else:                     # Everything above was checked
    print("Grade: F")     # Only runs if ALL above are False
\`\`\`

> **Tip:** Indentation (4 spaces) is REQUIRED in Python. It tells Python which code belongs inside the if/else block.`,
    codeExample: `# =============================================
# EXAMPLE: A weather advice program
# =============================================

temperature = 28    # change this to test different values!

# Python checks each condition from top to bottom
# It runs the FIRST one that is True, then skips the rest

if temperature >= 35:
    # This block runs if temperature is 35 or higher
    print("Extremely hot! Stay indoors")
    print("Drink lots of water")
elif temperature >= 25:
    # This block runs if temperature is 25-34
    # (we already know it's less than 35 from above)
    print("Warm and sunny!")
    print("Great for the beach")
elif temperature >= 15:
    # This block runs if temperature is 15-24
    print("Nice and mild")
    print("Perfect for a walk")
elif temperature >= 5:
    # This block runs if temperature is 5-14
    print("Getting chilly")
    print("Wear a jacket")
else:
    # This block runs if NONE of the above were True
    # (meaning temperature is below 5)
    print("It's freezing!")
    print("Bundle up warm")

print(f"(Temperature was {temperature} degrees)")`,
    exercise: {
      title: "Age Group Classifier",
      description: "Write if/elif/else to classify a person's age into groups. Follow the comments!",
      starterCode: `# =============================================
# EXERCISE: Classify a person by their age
# Use if/elif/else to check which group they belong to
# =============================================

age = 15

# TASK: Write if/elif/else to classify the age
#
# The rules are:
# - If age is 0 to 2 (age <= 2)     -> print "Baby"
# - If age is 3 to 12 (age <= 12)   -> print "Child"
# - If age is 13 to 17 (age <= 17)  -> print "Teenager"
# - If age is 18 to 64 (age <= 64)  -> print "Adult"
# - If age is 65 or more            -> print "Senior"
#
# IMPORTANT: Check from smallest to largest!
# After each condition, use 4 spaces of indentation
#
# Here's how to start:
# if age <= 2:
#     print("Baby")
# elif age <= 12:
#     ... and so on

# TODO: Write your if/elif/else chain here




# This line should always print (it's NOT indented, so it's outside the if)
print(f"Age {age} has been classified!")
`,
      solution: `age = 15

if age <= 2:
    print("Baby")
elif age <= 12:
    print("Child")
elif age <= 17:
    print("Teenager")
elif age <= 64:
    print("Adult")
else:
    print("Senior")

print(f"Age {age} has been classified!")`,
      hint: "Start with if age <= 2: then elif age <= 12: etc. Don't forget the 4-space indent!",
      tests: [
        { name: "Classifies age 15 as Teenager", expected: "Teenager", hint: "15 is between 13 and 17, so it's Teenager" },
        { name: "Shows classification message", expected: "Age 15 has been classified!", hint: "This print is already provided at the bottom" }
      ],
      hints: [
        "Start with: if age <= 2: (new line, 4 spaces) print(\"Baby\")",
        "Then: elif age <= 12: (new line, 4 spaces) print(\"Child\")",
        "Continue with elif age <= 17 for Teenager, elif age <= 64 for Adult, else for Senior"
      ]
    }
  },

  // ==================== EXERCISE 6 ====================
  {
    id: "bx06",
    title: "Your First List",
    difficulty: "beginner",
    order: 26,
    description: "Create and manipulate lists with step-by-step guidance",
    duration: "10 min",
    content: `A list is a collection of items in a specific order. Think of it as a numbered container that holds multiple values.

## Creating a List

\`\`\`python
# Use square brackets [] and separate items with commas
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40, 50]
mixed = ["hello", 42, True, 3.14]    # can mix types!
empty = []                            # empty list
\`\`\`

## Accessing Items (Indexing)

\`\`\`python
# Lists are numbered starting from 0 (not 1!)
#          index:  0        1         2
fruits = ["apple", "banana", "cherry"]

print(fruits[0])     # "apple"   (first item)
print(fruits[1])     # "banana"  (second item)
print(fruits[2])     # "cherry"  (third item)
print(fruits[-1])    # "cherry"  (last item - negative counts from end)
\`\`\`

## Modifying Lists

\`\`\`python
fruits = ["apple", "banana"]

fruits.append("cherry")      # ADD to the end -> ["apple", "banana", "cherry"]
fruits.insert(0, "avocado")  # INSERT at position 0 -> ["avocado", "apple", ...]
fruits.remove("banana")      # REMOVE by value -> ["avocado", "apple", "cherry"]
fruits.pop()                 # REMOVE last item -> ["avocado", "apple"]
\`\`\`

## Useful List Functions

\`\`\`python
numbers = [5, 2, 8, 1, 9]
print(len(numbers))     # 5     (how many items)
print(sum(numbers))     # 25    (add all numbers)
print(min(numbers))     # 1     (smallest)
print(max(numbers))     # 9     (largest)
print(sorted(numbers))  # [1, 2, 5, 8, 9]  (sorted copy)
\`\`\`

> **Tip:** Remember: the first item is at index 0, not 1! This is called "zero-based indexing."`,
    codeExample: `# =============================================
# EXAMPLE: Building a shopping list
# =============================================

# Start with an empty list
shopping = []
print("Starting with:", shopping)

# Add items one by one using .append()
shopping.append("milk")       # ["milk"]
shopping.append("bread")      # ["milk", "bread"]
shopping.append("eggs")       # ["milk", "bread", "eggs"]
shopping.append("butter")     # ["milk", "bread", "eggs", "butter"]
print("After adding items:", shopping)

# Check how many items we have
print(f"Number of items: {len(shopping)}")

# Access specific items by their index number
print(f"First item: {shopping[0]}")    # milk  (index 0)
print(f"Last item: {shopping[-1]}")    # butter (index -1)

# Remove an item we don't need
shopping.remove("bread")
print(f"After removing bread: {shopping}")`,
    exercise: {
      title: "Build a To-Do List",
      description: "Create and manage a to-do list step by step. Each comment tells you exactly what to do!",
      starterCode: `# =============================================
# EXERCISE: Build a To-Do List
# Follow each step to manage your tasks!
# =============================================

# STEP 1: Create a list with 3 tasks
# Use square brackets and separate with commas
# Example: my_list = ["item1", "item2", "item3"]

# TODO: Create a list called "tasks" with these items:
# "Buy groceries", "Clean house", "Do laundry"


# STEP 2: Print how many tasks you have
# Use len() to count items in a list
# len(tasks) returns the number of items

# TODO: Print "Total tasks: 3"
print(f"Total tasks: {len(tasks)}")

# STEP 3: Print the first task
# Remember: lists start at index 0!
# tasks[0] gives the first item

# TODO: Print "First task: Buy groceries"
print(f"First task: {tasks[0]}")

# STEP 4: Add a new task to the end of the list
# Use .append() to add to the end
# Example: my_list.append("new item")

# TODO: Add "Walk the dog" to the tasks list


# STEP 5: Print the updated list and count
# TODO: Print the full list and new count
print(f"Updated tasks: {tasks}")
print(f"New total: {len(tasks)}")

# STEP 6: Remove "Clean house" from the list
# Use .remove() to remove by value
# Example: my_list.remove("item to remove")

# TODO: Remove "Clean house"


# STEP 7: Print the final list
print(f"Final tasks: {tasks}")
print(f"Final count: {len(tasks)}")
`,
      solution: `tasks = ["Buy groceries", "Clean house", "Do laundry"]

print(f"Total tasks: {len(tasks)}")

print(f"First task: {tasks[0]}")

tasks.append("Walk the dog")

print(f"Updated tasks: {tasks}")
print(f"New total: {len(tasks)}")

tasks.remove("Clean house")

print(f"Final tasks: {tasks}")
print(f"Final count: {len(tasks)}")`,
      hint: "Create the list with [], use .append() to add, .remove() to remove.",
      tests: [
        { name: "Initial count is 3", expected: "Total tasks: 3", hint: "Create: tasks = [\"Buy groceries\", \"Clean house\", \"Do laundry\"]" },
        { name: "First task is correct", expected: "First task: Buy groceries", hint: "tasks[0] gives the first item in the list" },
        { name: "New total is 4 after append", expected: "New total: 4", hint: "tasks.append(\"Walk the dog\") adds a 4th item" },
        { name: "Final count is 3 after remove", expected: "Final count: 3", hint: "tasks.remove(\"Clean house\") removes one item" }
      ],
      hints: [
        "Step 1: tasks = [\"Buy groceries\", \"Clean house\", \"Do laundry\"]",
        "Step 4: tasks.append(\"Walk the dog\") - this adds to the end",
        "Step 6: tasks.remove(\"Clean house\") - this removes by value"
      ]
    }
  },

  // ==================== EXERCISE 7 ====================
  {
    id: "bx07",
    title: "Counting with For Loops",
    difficulty: "beginner",
    order: 27,
    description: "Understand how for loops repeat code - fully explained",
    duration: "10 min",
    content: `A \`for\` loop repeats a block of code for each item in a sequence. It's like saying "do this for every item in the list."

## The Simplest Loop

\`\`\`python
# "for each fruit in this list, print it"
for fruit in ["apple", "banana", "cherry"]:
    print(fruit)
# Output:
# apple
# banana
# cherry
\`\`\`

## How It Works (Step by Step)

\`\`\`python
# Round 1: fruit = "apple"   -> prints "apple"
# Round 2: fruit = "banana"  -> prints "banana"
# Round 3: fruit = "cherry"  -> prints "cherry"
# Done! No more items, loop ends.
\`\`\`

## Counting with range()

\`\`\`python
# range(5) generates numbers: 0, 1, 2, 3, 4
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4

# range(start, stop) - from start up to (not including) stop
for i in range(1, 6):
    print(i)
# Output: 1, 2, 3, 4, 5

# range(start, stop, step) - count by step
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8
\`\`\`

> **Tip:** The loop variable (\`i\`, \`fruit\`, etc.) automatically changes to the next value each time through the loop.`,
    codeExample: `# =============================================
# EXAMPLE: Different ways to use for loops
# =============================================

# --- Loop through a list ---
# Python takes each item one at a time
colors = ["red", "green", "blue"]
for color in colors:
    # This line runs 3 times, once for each color
    print(f"Color: {color}")

print()  # empty line for spacing

# --- Count from 1 to 5 ---
# range(1, 6) gives us: 1, 2, 3, 4, 5
# (stops BEFORE 6, not AT 6)
for number in range(1, 6):
    print(f"Count: {number}")

print()

# --- Loop with calculation ---
# We can do math inside the loop!
for i in range(1, 4):
    square = i * i    # calculate the square
    print(f"{i} x {i} = {square}")`,
    exercise: {
      title: "Loop Practice",
      description: "Write for loops to create different counting patterns. Follow the comments!",
      starterCode: `# =============================================
# EXERCISE: Practice with for loops
# Write the loop code where each TODO appears
# =============================================

# TASK 1: Print numbers 1 to 5
# Use range(1, 6) because range STOPS BEFORE the second number
# range(1, 6) gives: 1, 2, 3, 4, 5
#
# Expected output:
# 1
# 2
# 3
# 4
# 5

# TODO: Write a for loop that prints 1 to 5
for i in range(1, 6):
    print(i)

# TASK 2: Print even numbers from 2 to 10
# Use range(2, 11, 2) - the third number is the "step"
# range(2, 11, 2) gives: 2, 4, 6, 8, 10
#
# Expected output (each on its own line):
# 2
# 4
# 6
# 8
# 10

# TODO: Write a for loop for even numbers 2-10


# TASK 3: Countdown from 5 to 1
# Use range(5, 0, -1) - negative step counts DOWN
# range(5, 0, -1) gives: 5, 4, 3, 2, 1
#
# Expected output:
# 5
# 4
# 3
# 2
# 1

# TODO: Write a countdown loop


# TASK 4: Print a list of names with their position
# Use enumerate() to get both the index and the value
# enumerate(list) gives pairs: (0, "Alice"), (1, "Bob"), ...
#
# Expected output:
# 1. Alice
# 2. Bob
# 3. Charlie

names = ["Alice", "Bob", "Charlie"]

# TODO: Write a loop using enumerate
# Hint: for i, name in enumerate(names):
#           print(f"{i + 1}. {name}")

`,
      solution: `for i in range(1, 6):
    print(i)

for i in range(2, 11, 2):
    print(i)

for i in range(5, 0, -1):
    print(i)

names = ["Alice", "Bob", "Charlie"]
for i, name in enumerate(names):
    print(f"{i + 1}. {name}")`,
      hint: "Use range(start, stop, step) to control counting. range(2,11,2) for evens, range(5,0,-1) for countdown.",
      tests: [
        { name: "Prints 1 through 5", expected: "3", hint: "for i in range(1, 6): print(i)" },
        { name: "Prints even numbers", expected: "6", hint: "for i in range(2, 11, 2): print(i) - step of 2" },
        { name: "Countdown from 5", expected: "5", hint: "for i in range(5, 0, -1): print(i) - negative step" },
        { name: "Names with positions", expected: "1. Alice", hint: "for i, name in enumerate(names): print(f\"{i+1}. {name}\")" },
        { name: "All names listed", expected: "3. Charlie", hint: "enumerate gives index 0,1,2 so add 1 for position" }
      ],
      hints: [
        "Task 2: for i in range(2, 11, 2): print(i) - the 2 at the end means 'count by 2'",
        "Task 3: for i in range(5, 0, -1): print(i) - the -1 means 'count backwards'",
        "Task 4: for i, name in enumerate(names): print(f\"{i + 1}. {name}\")"
      ]
    }
  },

  // ==================== EXERCISE 8 ====================
  {
    id: "bx08",
    title: "String Slicing & Indexing",
    difficulty: "beginner",
    order: 28,
    description: "Access individual characters and parts of strings - fully illustrated",
    duration: "10 min",
    content: `Each character in a string has a position number (index). You can use these to extract parts of the string.

## String Indexing

\`\`\`python
#  Index:    0  1  2  3  4  5
#  String:   P  y  t  h  o  n
text = "Python"

print(text[0])    # "P"  (first character)
print(text[1])    # "y"  (second character)
print(text[5])    # "n"  (sixth character)
print(text[-1])   # "n"  (last character)
print(text[-2])   # "o"  (second from last)
\`\`\`

## String Slicing

\`\`\`python
# text[start:stop]  - from start up to (not including) stop
# text[start:]      - from start to the end
# text[:stop]       - from beginning up to stop
# text[:]           - copy of entire string

text = "Python"
print(text[0:3])   # "Pyt"  (characters 0, 1, 2)
print(text[2:5])   # "tho"  (characters 2, 3, 4)
print(text[:3])    # "Pyt"  (first 3 characters)
print(text[3:])    # "hon"  (from index 3 to end)
print(text[::-1])  # "nohtyP" (reversed!)
\`\`\`

> **Tip:** The \`stop\` index is NEVER included in the slice. Think of it as "up to but not including."`,
    codeExample: `# =============================================
# EXAMPLE: String indexing and slicing
# =============================================

word = "Programming"
#       P r o g r a m m i n g
#       0 1 2 3 4 5 6 7 8 9 10

# --- Indexing: Get a single character ---
print(f"First letter: {word[0]}")      # P
print(f"Last letter: {word[-1]}")      # g
print(f"5th letter: {word[4]}")        # r

# --- Slicing: Get a portion ---
print(f"First 4: {word[:4]}")          # Prog
print(f"Last 4: {word[-4:]}")          # ming
print(f"Middle: {word[3:7]}")          # gram

# --- Fun tricks ---
print(f"Reversed: {word[::-1]}")       # gnimmargorP
print(f"Every other: {word[::2]}")     # Pormig
print(f"Length: {len(word)}")          # 11`,
    exercise: {
      title: "String Explorer",
      description: "Extract parts of a string using indexing and slicing. The comments tell you what to extract!",
      starterCode: `# =============================================
# EXERCISE: Explore string indexing and slicing
# =============================================

message = "Hello, Python World!"
# Index:    0123456789...

# TASK 1: Get the first character
# Use message[0] to get the character at position 0
# Expected output: First: H

# TODO: Print the first character
print(f"First: {message[0]}")

# TASK 2: Get the last character
# Use message[-1] to get the last character
# Negative index -1 always means "the last one"
# Expected output: Last: !

# TODO: Print the last character
print(f"Last: {message[-1]}")

# TASK 3: Extract "Hello" (first 5 characters)
# Use message[0:5] or message[:5]
# Slice [0:5] gets characters at index 0,1,2,3,4
# Expected output: Greeting: Hello

# TODO: Print the slice


# TASK 4: Extract "Python" from the middle
# "Python" starts at index 7 and ends at index 13
# Use message[7:13]
# Expected output: Language: Python

# TODO: Print the slice


# TASK 5: Reverse the whole message
# Use message[::-1] to reverse
# [::-1] means "go through the string backwards"
# Expected output: Reversed: !dlroW nohtyP ,olleH

# TODO: Print the reversed message


# TASK 6: Get the length of the message
# Use len() to count all characters (including spaces!)
# Expected output: Length: 20

# TODO: Print the length

`,
      solution: `message = "Hello, Python World!"

print(f"First: {message[0]}")
print(f"Last: {message[-1]}")
print(f"Greeting: {message[:5]}")
print(f"Language: {message[7:13]}")
print(f"Reversed: {message[::-1]}")
print(f"Length: {len(message)}")`,
      hint: "Use [0] for first, [-1] for last, [:5] for first 5, [7:13] for middle, [::-1] to reverse.",
      tests: [
        { name: "First character", expected: "First: H", hint: "message[0] gets the first character" },
        { name: "Last character", expected: "Last: !", hint: "message[-1] gets the last character" },
        { name: "Hello extracted", expected: "Greeting: Hello", hint: "message[:5] gets characters 0-4" },
        { name: "Python extracted", expected: "Language: Python", hint: "message[7:13] gets 'Python'" },
        { name: "Reversed message", expected: "Reversed: !dlroW nohtyP ,olleH", hint: "message[::-1] reverses the string" },
        { name: "Length is correct", expected: "Length: 20", hint: "len(message) counts ALL characters" }
      ],
      hints: [
        "Task 3: print(f\"Greeting: {message[:5]}\") - [:5] means 'from start to index 5'",
        "Task 4: print(f\"Language: {message[7:13]}\") - count the positions carefully!",
        "Task 5: print(f\"Reversed: {message[::-1]}\") - [::-1] is the reverse trick"
      ]
    }
  },

  // ==================== EXERCISE 9 ====================
  {
    id: "bx09",
    title: "While Loop Basics",
    difficulty: "beginner",
    order: 29,
    description: "Learn the while loop - a loop that repeats until a condition becomes False",
    duration: "10 min",
    content: `A \`while\` loop keeps repeating as long as a condition is True. It's like saying "keep doing this WHILE something is true."

## How While Works

\`\`\`python
# Step by step:
count = 1                  # Start at 1

while count <= 5:          # Keep going while count is 5 or less
    print(count)           # Print the current count
    count = count + 1      # Add 1 to count (VERY IMPORTANT!)

# Round 1: count=1, 1<=5? YES -> print 1, count becomes 2
# Round 2: count=2, 2<=5? YES -> print 2, count becomes 3
# Round 3: count=3, 3<=5? YES -> print 3, count becomes 4
# Round 4: count=4, 4<=5? YES -> print 4, count becomes 5
# Round 5: count=5, 5<=5? YES -> print 5, count becomes 6
# Round 6: count=6, 6<=5? NO  -> STOP! Loop ends.
\`\`\`

## DANGER: Infinite Loops

\`\`\`python
# WARNING - This loop NEVER ends! (don't run this)
# count = 1
# while count <= 5:
#     print(count)
#     # Forgot to add: count = count + 1
#     # count stays at 1 forever!
\`\`\`

## While vs For

\`\`\`python
# Use FOR when you know how many times to loop
for i in range(5):         # exactly 5 times

# Use WHILE when you loop until something happens
password = ""
while password != "secret":
    password = "secret"    # (simplified - would normally use input())
\`\`\`

> **Tip:** Always make sure the condition will eventually become False, or your loop will run forever!`,
    codeExample: `# =============================================
# EXAMPLE: While loop demonstrations
# =============================================

# --- Simple countdown ---
count = 5                    # start at 5
while count > 0:             # keep going while count is positive
    print(f"T-minus {count}...")
    count = count - 1        # subtract 1 each time (count down)
print("Liftoff!")            # this runs AFTER the loop ends

print()  # blank line

# --- Doubling until a limit ---
value = 1                    # start at 1
while value < 100:           # keep going while under 100
    print(f"Value: {value}")
    value = value * 2        # double it each time
print(f"Final value: {value} (exceeded 100, loop stopped)")`,
    exercise: {
      title: "Countdown & Accumulator",
      description: "Use while loops to count down and to add up numbers. Follow the step-by-step comments!",
      starterCode: `# =============================================
# EXERCISE: While Loop Practice
# =============================================

# TASK 1: Countdown from 10 to 1, then print "Go!"
# 
# You need:
# 1. A variable to track the count (start at 10)
# 2. A while loop that runs while count >= 1
# 3. Print the count inside the loop
# 4. DECREASE the count by 1 each time (count = count - 1)
# 5. After the loop, print "Go!"
#
# Expected output:
# 10
# 9
# 8
# 7
# 6
# 5
# 4
# 3
# 2
# 1
# Go!

# TODO: Write the countdown loop
count = 10
while count >= 1:
    print(count)
    count = count - 1
print("Go!")

# TASK 2: Add up numbers from 1 to 10
#
# You need:
# 1. A variable "total" starting at 0 (the accumulator)
# 2. A variable "number" starting at 1
# 3. A while loop that runs while number <= 10
# 4. Inside the loop: add number to total (total = total + number)
# 5. Inside the loop: increase number by 1 (number = number + 1)
# 6. After the loop: print the total
#
# Math: 1+2+3+4+5+6+7+8+9+10 = 55
# Expected output: Sum of 1 to 10 = 55

# TODO: Write the accumulator loop



`,
      solution: `count = 10
while count >= 1:
    print(count)
    count = count - 1
print("Go!")

total = 0
number = 1
while number <= 10:
    total = total + number
    number = number + 1
print(f"Sum of 1 to 10 = {total}")`,
      hint: "Task 1: count starts at 10, decrease by 1. Task 2: total starts at 0, add number each time.",
      tests: [
        { name: "Countdown starts at 10", expected: "10", hint: "Start with count = 10, first print should be 10" },
        { name: "Countdown reaches 1", expected: "1", hint: "Loop while count >= 1" },
        { name: "Go! printed after countdown", expected: "Go!", hint: "print(\"Go!\") should be OUTSIDE the loop (no indent)" },
        { name: "Sum is calculated correctly", expected: "Sum of 1 to 10 = 55", hint: "total = 0, then add 1+2+3+...+10 = 55" }
      ],
      hints: [
        "Task 1 is already done for you! Task 2: start with total = 0 and number = 1",
        "Inside the loop: total = total + number adds the current number to the running total",
        "Don't forget: number = number + 1 (otherwise the loop never ends!)"
      ]
    }
  },

  // ==================== EXERCISE 10 ====================
  {
    id: "bx10",
    title: "Dictionaries Explained",
    difficulty: "beginner",
    order: 30,
    description: "Store data in key-value pairs - like a real dictionary!",
    duration: "12 min",
    content: `A dictionary stores data in **key-value pairs**. Think of it like a real dictionary: you look up a **word** (key) to find its **definition** (value).

## Creating a Dictionary

\`\`\`python
# Use curly braces {} with key: value pairs
person = {
    "name": "Alice",     # key: "name",  value: "Alice"
    "age": 25,           # key: "age",   value: 25
    "city": "Paris"      # key: "city",  value: "Paris"
}
\`\`\`

## Accessing Values

\`\`\`python
# Use the KEY in square brackets to get the VALUE
print(person["name"])    # "Alice"
print(person["age"])     # 25

# Or use .get() which won't crash if key doesn't exist
print(person.get("name"))       # "Alice"
print(person.get("phone", "N/A"))  # "N/A" (key doesn't exist)
\`\`\`

## Modifying Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25}

person["email"] = "alice@mail.com"   # ADD a new key-value pair
person["age"] = 26                    # UPDATE an existing value
del person["email"]                   # DELETE a key-value pair
\`\`\`

## Looping Through Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "Paris"}

# Loop through keys and values together
for key, value in person.items():
    print(f"{key}: {value}")
# Output:
# name: Alice
# age: 25
# city: Paris
\`\`\`

> **Tip:** Dictionary keys must be unique. If you assign a new value to an existing key, it replaces the old value.`,
    codeExample: `# =============================================
# EXAMPLE: Student record using a dictionary
# =============================================

# Create a dictionary for a student
student = {
    "name": "Alice",
    "grade": "A",
    "subjects": ["Math", "Science", "English"],
    "gpa": 3.8
}

# Access individual values using their keys
print(f"Student: {student['name']}")
print(f"Grade: {student['grade']}")
print(f"GPA: {student['gpa']}")

# Access a list inside the dictionary
print(f"Subjects: {student['subjects']}")
print(f"First subject: {student['subjects'][0]}")

# Update a value
student["gpa"] = 3.9
print(f"Updated GPA: {student['gpa']}")

# Loop through all key-value pairs
print("\\n--- Full Record ---")
for key, value in student.items():
    print(f"  {key}: {value}")`,
    exercise: {
      title: "Build a Contact Card",
      description: "Create a dictionary for a contact and perform operations on it. Follow each step!",
      starterCode: `# =============================================
# EXERCISE: Build a Contact Card
# =============================================

# STEP 1: Create a dictionary called "contact" with these keys:
# "name"  -> "Alice Johnson"
# "phone" -> "555-1234"
# "email" -> "alice@email.com"
# "age"   -> 28
#
# How to create a dictionary:
# my_dict = {
#     "key1": "value1",
#     "key2": "value2"
# }

# TODO: Create the contact dictionary


# STEP 2: Print the contact's name and phone
# Access values with: dictionary["key"]
# Expected output:
# Name: Alice Johnson
# Phone: 555-1234

# TODO: Print name and phone
print(f"Name: {contact['name']}")
print(f"Phone: {contact['phone']}")

# STEP 3: Add a new field "city" with value "New York"
# To add: dictionary["new_key"] = "new_value"

# TODO: Add the city field


# STEP 4: Update the age to 29
# Same syntax as adding: dictionary["key"] = new_value

# TODO: Update the age


# STEP 5: Print all contact info using a loop
# Use .items() to get both keys and values
# Expected output:
# --- Contact Card ---
# name: Alice Johnson
# phone: 555-1234
# email: alice@email.com
# age: 29
# city: New York

print("--- Contact Card ---")
# TODO: Write a for loop to print all key-value pairs
for key, value in contact.items():
    print(f"{key}: {value}")
`,
      solution: `contact = {
    "name": "Alice Johnson",
    "phone": "555-1234",
    "email": "alice@email.com",
    "age": 28
}

print(f"Name: {contact['name']}")
print(f"Phone: {contact['phone']}")

contact["city"] = "New York"

contact["age"] = 29

print("--- Contact Card ---")
for key, value in contact.items():
    print(f"{key}: {value}")`,
      hint: "Create with {}, access with [\"key\"], add/update with dict[\"key\"] = value, loop with .items().",
      tests: [
        { name: "Name printed correctly", expected: "Name: Alice Johnson", hint: "contact[\"name\"] gives the name value" },
        { name: "Phone printed correctly", expected: "Phone: 555-1234", hint: "contact[\"phone\"] gives the phone value" },
        { name: "Contact card header", expected: "--- Contact Card ---", hint: "This print statement is already provided" },
        { name: "City was added", expected: "city: New York", hint: "contact[\"city\"] = \"New York\" adds the city" },
        { name: "Age was updated", expected: "age: 29", hint: "contact[\"age\"] = 29 updates the age" }
      ],
      hints: [
        "Step 1: contact = {\"name\": \"Alice Johnson\", \"phone\": \"555-1234\", \"email\": \"alice@email.com\", \"age\": 28}",
        "Step 3: contact[\"city\"] = \"New York\" - same syntax for adding and updating",
        "Step 4: contact[\"age\"] = 29 - this replaces the old value (28) with the new one (29)"
      ]
    }
  },

  // ==================== EXERCISE 11 ====================
  {
    id: "bx11",
    title: "Functions Step by Step",
    difficulty: "beginner",
    order: 31,
    description: "Learn to create reusable code blocks - every part explained",
    duration: "12 min",
    content: `A function is a reusable block of code that you can call by name. It's like creating your own command!

## Anatomy of a Function

\`\`\`python
# def = "I'm defining a function"
# greet = the name of the function
# (name) = the parameter (input the function needs)
# : = marks the start of the function body
# return = sends a value back to whoever called it

def greet(name):                    # DEFINE the function
    return f"Hello, {name}!"       # what it does (and returns)

# Now CALL the function by its name with ()
message = greet("Alice")           # "Alice" goes into the 'name' parameter
print(message)                      # prints: Hello, Alice!
\`\`\`

## Functions with No Return

\`\`\`python
# Some functions just DO something (no return value)
def say_hello():
    print("Hello!")     # prints directly, doesn't return anything

say_hello()             # call it - prints: Hello!
\`\`\`

## Functions with Multiple Parameters

\`\`\`python
def add(a, b):          # two parameters
    return a + b

result = add(3, 5)      # 3 goes to 'a', 5 goes to 'b'
print(result)            # 8
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # Hello, Alice! (uses default)
print(greet("Bob", "Hi"))          # Hi, Bob! (uses provided value)
\`\`\`

> **Tip:** Functions should do ONE thing and do it well. Give them clear, descriptive names.`,
    codeExample: `# =============================================
# EXAMPLE: Creating and using functions
# =============================================

# --- Function 1: Simple function with return ---
def square(number):
    # This function takes a number and returns its square
    # square(4) returns 16 because 4 * 4 = 16
    result = number * number
    return result

# Call the function and use its return value
print(f"5 squared = {square(5)}")     # 25
print(f"12 squared = {square(12)}")   # 144

# --- Function 2: Function with multiple parameters ---
def calculate_area(length, width):
    # Calculates the area of a rectangle
    area = length * width
    return area

print(f"Area of 8x5 = {calculate_area(8, 5)}")  # 40

# --- Function 3: Function with default parameter ---
def introduce(name, language="Python"):
    # If no language is given, it defaults to "Python"
    return f"Hi, I'm {name} and I'm learning {language}!"

print(introduce("Alice"))               # uses default: Python
print(introduce("Bob", "JavaScript"))   # overrides default`,
    exercise: {
      title: "Build Your Own Functions",
      description: "Create three useful functions following the detailed instructions. Test code is provided!",
      starterCode: `# =============================================
# EXERCISE: Create your own functions
# Each function is explained step by step
# =============================================

# FUNCTION 1: celsius_to_fahrenheit
# Purpose: Convert a Celsius temperature to Fahrenheit
# Formula: fahrenheit = celsius * 9/5 + 32
# Parameter: celsius (a number)
# Returns: the temperature in Fahrenheit
#
# How to write it:
# 1. Start with: def celsius_to_fahrenheit(celsius):
# 2. Inside: calculate fahrenheit = celsius * 9/5 + 32
# 3. Return the result: return fahrenheit

# TODO: Write the celsius_to_fahrenheit function here


# FUNCTION 2: is_adult
# Purpose: Check if a person is 18 or older
# Parameter: age (a number)
# Returns: True if age >= 18, False otherwise
#
# How to write it:
# 1. Start with: def is_adult(age):
# 2. Return the comparison: return age >= 18
#    (This automatically returns True or False!)

# TODO: Write the is_adult function here


# FUNCTION 3: repeat_text
# Purpose: Repeat a text a given number of times
# Parameters: text (a string), times (a number, default=3)
# Returns: the text repeated 'times' times
#
# How to write it:
# 1. Start with: def repeat_text(text, times=3):
# 2. Return: return text * times

# TODO: Write the repeat_text function here


# ===== TEST CODE (don't change below) =====
print(f"0C = {celsius_to_fahrenheit(0)}F")
print(f"100C = {celsius_to_fahrenheit(100)}F")
print(f"Age 20 adult? {is_adult(20)}")
print(f"Age 15 adult? {is_adult(15)}")
print(f"Repeat: {repeat_text('Ha', 3)}")
print(f"Default: {repeat_text('Ho')}")
`,
      solution: `def celsius_to_fahrenheit(celsius):
    fahrenheit = celsius * 9/5 + 32
    return fahrenheit

def is_adult(age):
    return age >= 18

def repeat_text(text, times=3):
    return text * times

print(f"0C = {celsius_to_fahrenheit(0)}F")
print(f"100C = {celsius_to_fahrenheit(100)}F")
print(f"Age 20 adult? {is_adult(20)}")
print(f"Age 15 adult? {is_adult(15)}")
print(f"Repeat: {repeat_text('Ha', 3)}")
print(f"Default: {repeat_text('Ho')}")`,
      hint: "Each function is 2-3 lines: def line, calculation (optional), return line.",
      tests: [
        { name: "0C to F", expected: "0C = 32.0F", hint: "0 * 9/5 + 32 = 32.0" },
        { name: "100C to F", expected: "100C = 212.0F", hint: "100 * 9/5 + 32 = 212.0" },
        { name: "Age 20 is adult", expected: "Age 20 adult? True", hint: "20 >= 18 is True" },
        { name: "Age 15 is not adult", expected: "Age 15 adult? False", hint: "15 >= 18 is False" },
        { name: "Repeat with argument", expected: "Repeat: HaHaHa", hint: "'Ha' * 3 = 'HaHaHa'" },
        { name: "Repeat with default", expected: "Default: HoHoHo", hint: "Default times=3, so 'Ho' * 3" }
      ],
      hints: [
        "Function 1: def celsius_to_fahrenheit(celsius): return celsius * 9/5 + 32",
        "Function 2: def is_adult(age): return age >= 18",
        "Function 3: def repeat_text(text, times=3): return text * times"
      ]
    }
  },

  // ==================== EXERCISE 12 ====================
  {
    id: "bx12",
    title: "Pattern Printer",
    difficulty: "beginner",
    order: 32,
    description: "Use loops to create visual patterns - great for understanding loop logic",
    duration: "10 min",
    content: `Creating patterns with loops is a fun way to understand how loops work. You'll use string repetition and nested loops.

## String Repetition Recap

\`\`\`python
# The * operator repeats a string
print("*" * 5)    # *****
print("#" * 3)    # ###
print("Ha" * 4)   # HaHaHa Ha
\`\`\`

## Growing Patterns with Loops

\`\`\`python
# Each time through the loop, i increases
# So "* " * i gives more stars each time
for i in range(1, 6):
    print("* " * i)
# Output:
# *
# * *
# * * *
# * * * *
# * * * * *
\`\`\`

## Using Variables in Patterns

\`\`\`python
# Right-aligned triangle using string formatting
for i in range(1, 6):
    spaces = " " * (5 - i)     # decreasing spaces
    stars = "*" * i             # increasing stars
    print(spaces + stars)
# Output:
#     *
#    **
#   ***
#  ****
# *****
\`\`\`

> **Tip:** Think about what changes each time through the loop: how many spaces? How many stars?`,
    codeExample: `# =============================================
# EXAMPLE: Various patterns with loops
# =============================================

# --- Pattern 1: Growing stairs ---
print("=== Stairs ===")
for i in range(1, 6):
    # i goes: 1, 2, 3, 4, 5
    # "#" * i gives: #, ##, ###, ####, #####
    print("#" * i)

print()  # blank line between patterns

# --- Pattern 2: Number triangle ---
print("=== Numbers ===")
for i in range(1, 6):
    # str(i) converts number to text
    # str(i) * i repeats the number i times
    print(str(i) * i)
    # 1, 22, 333, 4444, 55555

print()

# --- Pattern 3: Centered diamond (top half) ---
print("=== Diamond ===")
for i in range(1, 6, 2):     # 1, 3, 5
    spaces = " " * ((5 - i) // 2)   # centering spaces
    stars = "*" * i                   # odd number of stars
    print(spaces + stars)`,
    exercise: {
      title: "Create Three Patterns",
      description: "Use loops and string repetition to create the exact patterns shown. Comments guide you!",
      starterCode: `# =============================================
# EXERCISE: Pattern Printer
# Create each pattern using a for loop
# =============================================

# PATTERN 1: Right-pointing arrow
# Use a for loop with range(1, 6) for the top half
# Then range(4, 0, -1) for the bottom half
#
# Expected output:
# *
# **
# ***
# ****
# *****
# ****
# ***
# **
# *

# TODO: Write the top half (growing: 1 to 5 stars)
# Hint: for i in range(1, 6): print("*" * i)
for i in range(1, 6):
    print("*" * i)

# TODO: Write the bottom half (shrinking: 4 to 1 stars)
# Hint: for i in range(4, 0, -1): print("*" * i)


# Print a separator
print("---")

# PATTERN 2: Number staircase
# Each line shows the number repeated that many times
#
# Expected output:
# 1
# 22
# 333
# 4444
# 55555

# TODO: Write a loop for the number staircase
# Hint: for i in range(1, 6): print(str(i) * i)
# str(i) converts the number to a string so * can repeat it


# Print a separator
print("---")

# PATTERN 3: Box outline
# A 5x5 box made of # and spaces
#
# Expected output:
# #####
# #   #
# #   #
# #   #
# #####

# TODO: Write the box pattern
# Hint: first and last lines are "#" * 5
# Middle lines are "#" + " " * 3 + "#"

`,
      solution: `for i in range(1, 6):
    print("*" * i)
for i in range(4, 0, -1):
    print("*" * i)

print("---")

for i in range(1, 6):
    print(str(i) * i)

print("---")

print("#" * 5)
for i in range(3):
    print("#" + " " * 3 + "#")
print("#" * 5)`,
      hint: "Top arrow: range(1,6) then range(4,0,-1). Numbers: str(i)*i. Box: full lines + middle lines.",
      tests: [
        { name: "Arrow peak (5 stars)", expected: "*****", hint: "for i in range(1, 6): print(\"*\" * i) - when i=5" },
        { name: "Arrow shrinks to 1", expected: "*", hint: "Bottom half goes 4,3,2,1 stars" },
        { name: "Number staircase", expected: "333", hint: "str(3) * 3 = \"333\"" },
        { name: "Box top edge", expected: "#####", hint: "print(\"#\" * 5) for top and bottom" },
        { name: "Box middle", expected: "#   #", hint: "\"#\" + \" \" * 3 + \"#\" for middle rows" }
      ],
      hints: [
        "Bottom half of arrow: for i in range(4, 0, -1): print(\"*\" * i) counts 4,3,2,1",
        "Number staircase: for i in range(1, 6): print(str(i) * i) - must convert number to string first!",
        "Box: print(\"#\" * 5) for top, then loop 3 times printing \"#\" + \" \" * 3 + \"#\", then print(\"#\" * 5) for bottom"
      ]
    }
  },

  // ==================== EXERCISE 13 ====================
  {
    id: "bx13",
    title: "List Comprehensions Made Easy",
    difficulty: "beginner",
    order: 33,
    description: "Learn the Pythonic shortcut for creating lists - with clear explanations",
    duration: "10 min",
    content: `List comprehension is a compact way to create lists. It's one of Python's most loved features!

## The Old Way (Loop)

\`\`\`python
# Create a list of squares using a regular loop
squares = []               # start with empty list
for i in range(1, 6):      # loop 1 to 5
    squares.append(i ** 2)  # calculate square and add
# squares = [1, 4, 9, 16, 25]
\`\`\`

## The New Way (List Comprehension)

\`\`\`python
# Same thing in ONE line!
squares = [i ** 2 for i in range(1, 6)]
# squares = [1, 4, 9, 16, 25]
\`\`\`

## How to Read It

\`\`\`python
# [expression  for variable in sequence]
# [i ** 2      for i        in range(1, 6)]
#  ^^^^^^       ^^^          ^^^^^^^^^^^^^
#  what to      loop         where to get
#  put in       variable     the values
#  the list
\`\`\`

## Adding a Filter (if condition)

\`\`\`python
# Only include even numbers
evens = [i for i in range(1, 11) if i % 2 == 0]
# [2, 4, 6, 8, 10]

# Read it as: "give me i, for each i in 1-10, BUT ONLY IF i is even"
\`\`\`

> **Tip:** List comprehensions are great for simple transformations. For complex logic, use a regular loop - readability matters!`,
    codeExample: `# =============================================
# EXAMPLE: List comprehensions explained
# =============================================

# --- Basic: Create a list of doubles ---
# Old way:
doubles_old = []
for i in range(1, 6):
    doubles_old.append(i * 2)

# New way (list comprehension):
doubles_new = [i * 2 for i in range(1, 6)]

print("Doubles:", doubles_new)  # [2, 4, 6, 8, 10]

# --- With filter: Only positive numbers ---
numbers = [-3, -1, 0, 2, 4, -5, 7]
positives = [n for n in numbers if n > 0]
print("Positives:", positives)   # [2, 4, 7]

# --- Transform strings ---
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print("Upper:", upper_words)     # ["HELLO", "WORLD", "PYTHON"]

# --- Get lengths ---
lengths = [len(w) for w in words]
print("Lengths:", lengths)       # [5, 5, 6]`,
    exercise: {
      title: "List Comprehension Practice",
      description: "Convert regular loops into list comprehensions. The comments show you exactly how!",
      starterCode: `# =============================================
# EXERCISE: Master list comprehensions
# Convert each loop into a one-line list comprehension
# =============================================

# TASK 1: Create a list of cubes (1^3, 2^3, 3^3, 4^3, 5^3)
# 
# Regular loop version:
# cubes = []
# for i in range(1, 6):
#     cubes.append(i ** 3)
#
# As a list comprehension:
# cubes = [i ** 3 for i in range(1, 6)]
# Expected: [1, 8, 27, 64, 125]

# TODO: Write the list comprehension
cubes = [i ** 3 for i in range(1, 6)]
print(f"Cubes: {cubes}")

# TASK 2: Get only the long words (5+ letters)
words = ["hi", "hello", "hey", "python", "programming", "go"]
# 
# Regular loop version:
# long_words = []
# for w in words:
#     if len(w) >= 5:
#         long_words.append(w)
#
# As a list comprehension with filter:
# long_words = [w for w in words if len(w) >= 5]

# TODO: Write the list comprehension with filter


print(f"Long words: {long_words}")

# TASK 3: Convert temperatures from Celsius to Fahrenheit
celsius_temps = [0, 20, 30, 37, 100]
#
# Formula: F = C * 9/5 + 32
# List comprehension:
# fahrenheit = [c * 9/5 + 32 for c in celsius_temps]

# TODO: Write the list comprehension


print(f"Fahrenheit: {fahrenheit}")

# TASK 4: Create a list of even squares
# Get the square of even numbers from 1-10
# Step 1: range(1, 11) gives 1-10
# Step 2: filter for even: if i % 2 == 0
# Step 3: square it: i ** 2
# Result: [4, 16, 36, 64, 100]

# TODO: Write the list comprehension with filter


print(f"Even squares: {even_squares}")
`,
      solution: `cubes = [i ** 3 for i in range(1, 6)]
print(f"Cubes: {cubes}")

words = ["hi", "hello", "hey", "python", "programming", "go"]
long_words = [w for w in words if len(w) >= 5]
print(f"Long words: {long_words}")

celsius_temps = [0, 20, 30, 37, 100]
fahrenheit = [c * 9/5 + 32 for c in celsius_temps]
print(f"Fahrenheit: {fahrenheit}")

even_squares = [i ** 2 for i in range(1, 11) if i % 2 == 0]
print(f"Even squares: {even_squares}")`,
      hint: "Pattern: [expression for var in sequence] or [expression for var in sequence if condition]",
      tests: [
        { name: "Cubes list correct", expected: "Cubes: [1, 8, 27, 64, 125]", hint: "[i ** 3 for i in range(1, 6)]" },
        { name: "Long words filtered", expected: "Long words: ['hello', 'python', 'programming']", hint: "[w for w in words if len(w) >= 5]" },
        { name: "Fahrenheit conversion", expected: "Fahrenheit: [32.0, 68.0, 86.0, 98.60000000000001, 212.0]", hint: "[c * 9/5 + 32 for c in celsius_temps]" },
        { name: "Even squares correct", expected: "Even squares: [4, 16, 36, 64, 100]", hint: "[i ** 2 for i in range(1, 11) if i % 2 == 0]" }
      ],
      hints: [
        "Task 2: long_words = [w for w in words if len(w) >= 5] - the 'if' goes at the END",
        "Task 3: fahrenheit = [c * 9/5 + 32 for c in celsius_temps]",
        "Task 4: even_squares = [i ** 2 for i in range(1, 11) if i % 2 == 0]"
      ]
    }
  },

  // ==================== EXERCISE 14 ====================
  {
    id: "bx14",
    title: "String Formatting Mastery",
    difficulty: "beginner",
    order: 34,
    description: "Learn all the ways to format text output beautifully",
    duration: "10 min",
    content: `Python gives you powerful tools to format text exactly how you want it. F-strings are the most modern and easiest way.

## F-String Basics

\`\`\`python
name = "Alice"
age = 25

# Put f before the quotes, variables go in {curly braces}
print(f"Name: {name}, Age: {age}")
# Output: Name: Alice, Age: 25

# You can put ANY expression inside the braces
print(f"Next year: {age + 1}")     # Output: Next year: 26
print(f"Name upper: {name.upper()}")  # Output: Name upper: ALICE
\`\`\`

## Number Formatting

\`\`\`python
price = 9.99999
big_number = 1234567

# :.2f = 2 decimal places (f = float)
print(f"Price: \${price:.2f}")        # Price: $10.00

# :,  = add commas as thousand separators
print(f"Population: {big_number:,}")  # Population: 1,234,567

# :05d = pad with zeros, 5 digits total (d = decimal/integer)
print(f"ID: {42:05d}")               # ID: 00042

# :>10  = right-align in 10 characters
# :<10  = left-align in 10 characters
# :^10  = center in 10 characters
print(f"{'hello':>10}")              #      hello
print(f"{'hello':<10}")              # hello
print(f"{'hello':^10}")              #   hello
\`\`\`

> **Tip:** F-string format codes go after a colon inside the braces: \`{value:format_code}\``,
    codeExample: `# =============================================
# EXAMPLE: Beautiful formatting
# =============================================

# --- Formatting a receipt ---
items = [
    ("Coffee", 4.50),
    ("Sandwich", 8.99),
    ("Cookie", 2.50)
]

# Header with alignment
print(f"{'ITEM':<15} {'PRICE':>8}")
print("-" * 23)

# Each item formatted nicely
total = 0
for name, price in items:
    # :<15 = left-align in 15 chars
    # :>8.2f = right-align in 8 chars, 2 decimal places
    print(f"{name:<15} \${price:>7.2f}")
    total += price

print("-" * 23)
print(f"{'TOTAL':<15} \${total:>7.2f}")`,
    exercise: {
      title: "Format a Report Card",
      description: "Use f-string formatting to create a beautifully aligned report card!",
      starterCode: `# =============================================
# EXERCISE: Format a student report card
# Learn f-string formatting by building a report!
# =============================================

# Here's the student data
student = "Alice Johnson"
student_id = 42

# Subject data: (name, score)
subjects = [
    ("Math", 92),
    ("Science", 88),
    ("English", 95),
    ("History", 79),
    ("Art", 100)
]

# TASK 1: Print the header
# Use :^30 to CENTER text in 30 characters
# Expected: "      REPORT CARD       " (centered in 30 chars)

# TODO: Print centered header
print(f"{'REPORT CARD':^30}")

# TASK 2: Print student info
# Use :05d to pad the ID with zeros (5 digits)
# Expected: Student: Alice Johnson
# Expected: ID: 00042

# TODO: Print student name and padded ID
print(f"Student: {student}")
print(f"ID: {student_id:05d}")

# TASK 3: Print a separator line
# Expected: ==============================

# TODO: Print 30 equal signs


# TASK 4: Print column headers
# Use :<15 for left-align and :>8 for right-align
# Expected: Subject          Score

# TODO: Print the column headers


# TASK 5: Print each subject with its score
# Use a for loop over subjects
# Align subject left in 15 chars, score right in 8 chars
# Expected:
# Math                92
# Science             88
# etc.

# TODO: Write the loop to print each subject


# TASK 6: Print separator and average
# Calculate: sum of all scores / number of subjects
# Format average with 1 decimal place (:.1f)
# Expected: Average:          90.8

# TODO: Calculate and print the average

`,
      solution: `student = "Alice Johnson"
student_id = 42

subjects = [
    ("Math", 92),
    ("Science", 88),
    ("English", 95),
    ("History", 79),
    ("Art", 100)
]

print(f"{'REPORT CARD':^30}")
print(f"Student: {student}")
print(f"ID: {student_id:05d}")
print("=" * 30)
print(f"{'Subject':<15} {'Score':>8}")

for name, score in subjects:
    print(f"{name:<15} {score:>8}")

print("=" * 30)
total = sum(score for _, score in subjects)
average = total / len(subjects)
print(f"{'Average:':<15} {average:>8.1f}")`,
      hint: "Use :<15 for left-align, :>8 for right-align, :05d for zero-padding, :^30 for centering.",
      tests: [
        { name: "Header is centered", expected: "         REPORT CARD          ", hint: "f\"{'REPORT CARD':^30}\" centers in 30 chars" },
        { name: "ID is zero-padded", expected: "ID: 00042", hint: "f\"{student_id:05d}\" pads with zeros" },
        { name: "Column headers shown", expected: "Subject              Score", hint: "f\"{'Subject':<15} {'Score':>8}\"" },
        { name: "Math score shown", expected: "Math                   92", hint: "f\"{name:<15} {score:>8}\" for each subject" },
        { name: "Average calculated", expected: "90.8", hint: "Average = (92+88+95+79+100)/5 = 90.8" }
      ],
      hints: [
        "Task 3: print(\"=\" * 30) creates a line of 30 equal signs",
        "Task 4: print(f\"{'Subject':<15} {'Score':>8}\") - note the alignment codes",
        "Task 6: total = sum(score for _, score in subjects), average = total / len(subjects)"
      ]
    }
  },

  // ==================== EXERCISE 15 ====================
  {
    id: "bx15",
    title: "Mini Project: Quiz Game",
    difficulty: "beginner",
    order: 35,
    description: "Combine everything you've learned to build a complete quiz game!",
    duration: "15 min",
    content: `Time to put it ALL together! This project uses:
- **Lists** to store questions
- **Dictionaries** to store question data
- **Loops** to go through each question
- **Conditions** to check answers
- **Variables** to track the score
- **F-strings** to format the output
- **Functions** to organize the code

## The Plan

\`\`\`python
# 1. Store questions in a list of dictionaries
# 2. Loop through each question
# 3. Check the answer
# 4. Keep track of the score
# 5. Show the final result
\`\`\`

## Key Concepts Used

\`\`\`python
# Dictionaries store question data
q = {"question": "What is 2+2?", "answer": "4"}

# Lists hold multiple questions
questions = [q1, q2, q3]

# Loops process each question
for q in questions:
    # check answer...

# Conditions check if answer is correct
if user_answer == correct_answer:
    score += 1

# F-strings format the result
print(f"Score: {score}/{total}")
\`\`\`

> **Tip:** Break big problems into small steps. Build and test each piece before moving to the next.`,
    codeExample: `# =============================================
# EXAMPLE: A simple quiz with scoring
# =============================================

# Step 1: Create questions as a list of dictionaries
# Each dictionary has: question text, options, and correct answer
questions = [
    {
        "question": "What color is the sky?",
        "options": ["a) Red", "b) Blue", "c) Green"],
        "answer": "b"
    },
    {
        "question": "How many legs does a spider have?",
        "options": ["a) 6", "b) 4", "c) 8"],
        "answer": "c"
    }
]

# Step 2: Track the score
score = 0

# Step 3: Loop through each question
for i, q in enumerate(questions):
    print(f"\\nQuestion {i + 1}: {q['question']}")
    for option in q["options"]:
        print(f"  {option}")
    
    # In a real app we'd use input(), here we'll auto-answer
    user_answer = q["answer"]  # simulated correct answer
    
    if user_answer == q["answer"]:
        score += 1
        print("  Correct!")

# Step 4: Show result
print(f"\\nFinal Score: {score}/{len(questions)}")`,
    exercise: {
      title: "Build a Python Quiz",
      description: "Complete the quiz game by following each step. The structure is set up for you!",
      starterCode: `# =============================================
# MINI PROJECT: Python Quiz Game
# Build a complete quiz using everything you've learned!
# =============================================

# STEP 1: Here are the quiz questions
# Each question is a dictionary with:
# - "question": the question text
# - "answer": the correct answer
# - "choices": list of options to show

questions = [
    {
        "question": "What function prints output in Python?",
        "answer": "print",
        "choices": ["print", "echo", "display", "write"]
    },
    {
        "question": "What symbol starts a comment?",
        "answer": "#",
        "choices": ["//", "#", "/*", "--"]
    },
    {
        "question": "What type is 3.14?",
        "answer": "float",
        "choices": ["int", "float", "str", "decimal"]
    },
    {
        "question": "What method adds to the end of a list?",
        "answer": "append",
        "choices": ["add", "append", "push", "insert"]
    }
]

# STEP 2: Initialize the score counter
# Start at 0, we'll add 1 for each correct answer
score = 0

# STEP 3: Loop through each question
# enumerate() gives us both the index (i) and the question (q)
for i, q in enumerate(questions):
    # Print the question number and text
    # i starts at 0, so we add 1 to get 1, 2, 3, 4
    print(f"Q{i + 1}: {q['question']}")
    
    # Print all the choices
    # enumerate with start=1 gives us 1, 2, 3, 4 instead of 0, 1, 2, 3
    for j, choice in enumerate(q["choices"], start=1):
        print(f"  {j}. {choice}")

    # STEP 4: Check the answer
    # In our simulation, we'll use the correct answer
    # (In a real app, you'd use input() to get the user's answer)
    user_answer = q["answer"]

    # TODO: Check if user_answer equals q["answer"]
    # If correct: add 1 to score and print "  Correct!"
    # If wrong: print "  Wrong! Answer: {correct answer}"
    # Hint:
    # if user_answer == q["answer"]:
    #     score += 1        (this adds 1 to score)
    #     print("  Correct!")
    # else:
    #     print(f"  Wrong! Answer: {q['answer']}")



# STEP 5: Show the final results
# TODO: Print a separator line of 30 dashes

# TODO: Print the score like: "Final Score: 4/4"
# Use len(questions) for the total number of questions

# TODO: Calculate the percentage
# Formula: percentage = (score / len(questions)) * 100
# Print like: "Percentage: 100.0%"

# TODO: Print a grade based on percentage
# 90+ = "Excellent!", 70+ = "Good job!", else = "Keep practicing!"

`,
      solution: `questions = [
    {
        "question": "What function prints output in Python?",
        "answer": "print",
        "choices": ["print", "echo", "display", "write"]
    },
    {
        "question": "What symbol starts a comment?",
        "answer": "#",
        "choices": ["//", "#", "/*", "--"]
    },
    {
        "question": "What type is 3.14?",
        "answer": "float",
        "choices": ["int", "float", "str", "decimal"]
    },
    {
        "question": "What method adds to the end of a list?",
        "answer": "append",
        "choices": ["add", "append", "push", "insert"]
    }
]

score = 0

for i, q in enumerate(questions):
    print(f"Q{i + 1}: {q['question']}")
    for j, choice in enumerate(q["choices"], start=1):
        print(f"  {j}. {choice}")
    
    user_answer = q["answer"]
    
    if user_answer == q["answer"]:
        score += 1
        print("  Correct!")
    else:
        print(f"  Wrong! Answer: {q['answer']}")

print("-" * 30)
print(f"Final Score: {score}/{len(questions)}")
percentage = (score / len(questions)) * 100
print(f"Percentage: {percentage:.1f}%")

if percentage >= 90:
    print("Excellent!")
elif percentage >= 70:
    print("Good job!")
else:
    print("Keep practicing!")`,
      hint: "Check with if/else, calculate percentage with (score/total)*100, grade with if/elif/else.",
      tests: [
        { name: "Q1 answered correctly", expected: "Correct!", hint: "if user_answer == q[\"answer\"]: score += 1" },
        { name: "Final score shown", expected: "Final Score: 4/4", hint: "print(f\"Final Score: {score}/{len(questions)}\")" },
        { name: "Percentage calculated", expected: "Percentage: 100.0%", hint: "(4/4) * 100 = 100.0" },
        { name: "Grade shown", expected: "Excellent!", hint: "100% >= 90, so print \"Excellent!\"" }
      ],
      hints: [
        "Step 4: if user_answer == q[\"answer\"]: score += 1 and print(\"  Correct!\")",
        "Step 5: print(\"-\" * 30) for separator, then print(f\"Final Score: {score}/{len(questions)}\")",
        "Percentage: percentage = (score / len(questions)) * 100, then if/elif/else for the grade"
      ]
    }
  }
]
