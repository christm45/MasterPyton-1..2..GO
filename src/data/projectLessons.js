export const projectLessons = [
  // ============================================================
  // PROJECT 1: Simple Calculator
  // ============================================================
  {
    id: "p01",
    title: "Project: Simple Calculator",
    difficulty: "beginner",
    order: 44,
    description: "Build a fully functional calculator with add, subtract, multiply, and divide operations. Learn how to organize code into reusable functions and handle edge cases like division by zero.",
    duration: "15 min",
    content: `# Project: Simple Calculator

## What You'll Build

A **calculator program** that can perform the four basic arithmetic operations:
addition, subtraction, multiplication, and division.

## Key Concepts
- Defining functions with parameters and return values
- Handling edge cases (like division by zero)
- Using formatted output for clean results

## Step-by-Step Plan

### 1. Create Operation Functions
Each math operation gets its own function:

\`\`\`python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
\`\`\`

### 2. Handle Division Carefully
Division by zero will crash your program, so guard against it:

\`\`\`python
def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b
\`\`\`

### 3. Create a Calculate Function
A main function that takes an operator and two numbers:

\`\`\`python
def calculate(a, op, b):
    if op == "+":
        return add(a, b)
    elif op == "-":
        return subtract(a, b)
    # ... and so on
\`\`\`

### 4. Format the Output
Print results in a clean, readable format:
\`\`\`python
result = calculate(5, "+", 3)
print(f"5 + 3 = {result}")
\`\`\`

## Tips
- Keep each function focused on **one task**
- Always validate inputs before processing
- Use descriptive function names
`,
    codeExample: "# Simple Calculator Example\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        return \"Error: Division by zero\"\n    return a / b\n\ndef calculate(a, op, b):\n    if op == \"+\":\n        return add(a, b)\n    elif op == \"-\":\n        return subtract(a, b)\n    elif op == \"*\":\n        return multiply(a, b)\n    elif op == \"/\":\n        return divide(a, b)\n    else:\n        return \"Error: Unknown operator\"\n\n# Test the calculator\nprint(f\"5 + 3 = {calculate(5, '+', 3)}\")\nprint(f\"10 - 4 = {calculate(10, '-', 4)}\")\nprint(f\"6 * 7 = {calculate(6, '*', 7)}\")\nprint(f\"15 / 4 = {calculate(15, '/', 4)}\")\nprint(f\"10 / 0 = {calculate(10, '/', 0)}\")",
    exercise: {
      title: "Build the Complete Calculator",
      description: "Implement all four arithmetic functions (add, subtract, multiply, divide) and a calculate function that routes operations. Handle division by zero gracefully. Print results for the test cases shown below.",
      starterCode: `# ============================================
# PROJECT: Simple Calculator
# ============================================
# Build a calculator with four operations:
#   add, subtract, multiply, divide
#
# Requirements:
#   - Each operation is its own function
#   - divide() must handle division by zero
#   - calculate() takes (a, operator, b)
#   - Print results in the format: "a op b = result"
# ============================================

# TODO: Define the add function
# It should take two numbers and return their sum
def add(a, b):
    pass

# TODO: Define the subtract function
# It should take two numbers and return their difference
def subtract(a, b):
    pass

# TODO: Define the multiply function
# It should take two numbers and return their product
def multiply(a, b):
    pass

# TODO: Define the divide function
# It should take two numbers and return their quotient
# IMPORTANT: Return "Error: Division by zero" if b is 0
def divide(a, b):
    pass

# TODO: Define the calculate function
# It takes three arguments: a, op (string), b
# Use if/elif to check op: "+", "-", "*", "/"
# Return the result of the matching operation
# For unknown operators return "Error: Unknown operator"
def calculate(a, op, b):
    pass

# --- Test your calculator ---
# Print results using f-strings in this exact format:
# "5 + 3 = 8"
# "10 - 4 = 6"
# "6 * 7 = 42"
# "15 / 4 = 3.75"
print(f"5 + 3 = {calculate(5, '+', 3)}")
print(f"10 - 4 = {calculate(10, '-', 4)}")
print(f"6 * 7 = {calculate(6, '*', 7)}")
print(f"15 / 4 = {calculate(15, '/', 4)}")
`,
      solution: `# ============================================
# PROJECT: Simple Calculator - SOLUTION
# ============================================

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

def calculate(a, op, b):
    if op == "+":
        return add(a, b)
    elif op == "-":
        return subtract(a, b)
    elif op == "*":
        return multiply(a, b)
    elif op == "/":
        return divide(a, b)
    else:
        return "Error: Unknown operator"

# --- Test the calculator ---
print(f"5 + 3 = {calculate(5, '+', 3)}")
print(f"10 - 4 = {calculate(10, '-', 4)}")
print(f"6 * 7 = {calculate(6, '*', 7)}")
print(f"15 / 4 = {calculate(15, '/', 4)}")
`,
      hint: "Each function simply returns the result of the math operation. For divide, check if b == 0 first. The calculate function uses if/elif to match the operator string.",
      tests: [
        { name: "Addition works", expected: "5 + 3 = 8", hint: "Make sure add(a, b) returns a + b" },
        { name: "Subtraction works", expected: "10 - 4 = 6", hint: "Make sure subtract(a, b) returns a - b" },
        { name: "Multiplication works", expected: "6 * 7 = 42", hint: "Make sure multiply(a, b) returns a * b" },
        { name: "Division works", expected: "15 / 4 = 3.75", hint: "Make sure divide(a, b) returns a / b as a float" }
      ],
      hints: [
        "Start by implementing each math function: they each take two parameters and return the result of the operation.",
        "For divide(), add an if-check: if b == 0, return the error string. Otherwise return a / b.",
        "In calculate(), use if/elif to compare op to \"+\", \"-\", \"*\", \"/\" and call the matching function."
      ]
    }
  },

  // ============================================================
  // PROJECT 2: Number Guessing Game
  // ============================================================
  {
    id: "p02",
    title: "Project: Number Guessing Game",
    difficulty: "beginner",
    order: 45,
    description: "Create a number guessing game where the computer picks a secret number and the player tries to guess it. Uses random.seed for deterministic behavior in the browser.",
    duration: "15 min",
    content: `# Project: Number Guessing Game

## What You'll Build

A **number guessing game** where:
- The computer picks a random number between 1 and 100
- The player makes guesses
- The game responds with "Too high!", "Too low!", or "Correct!"

## Key Concepts
- Using the \`random\` module
- Using \`random.seed()\` for reproducible results
- Loops and conditionals for game logic
- Tracking attempts

## How It Works

### Setting Up Deterministic Randomness
Since we're running in the browser, we use a **seed** so the
"random" number is always the same — making our tests reliable:

\`\`\`python
import random
random.seed(42)
target = random.randint(1, 100)  # Always 82 with seed 42
\`\`\`

### Simulating Guesses
Instead of \`input()\`, we use a **list of guesses**:

\`\`\`python
guesses = [50, 75, 90, 82]

for guess in guesses:
    if guess < target:
        print(f"{guess}? Too low!")
    elif guess > target:
        print(f"{guess}? Too high!")
    else:
        print(f"{guess}? Correct!")
\`\`\`

### Tracking Attempts
Count how many guesses it took:

\`\`\`python
attempts = 0
for guess in guesses:
    attempts += 1
    # ... check guess ...
print(f"Found it in {attempts} attempts!")
\`\`\`

## Tips
- \`random.seed(42)\` makes \`randint(1, 100)\` always return **82**
- Break out of the loop once the correct answer is found
- Display the attempt number with each guess
`,
    codeExample: "import random\n\n# Set seed for deterministic behavior\nrandom.seed(42)\ntarget = random.randint(1, 100)  # Will be 82\n\nprint(f\"Secret number has been chosen (1-100)!\")\nprint(f\"(Debug: target = {target})\")\n\n# Simulated guesses\nguesses = [50, 75, 90, 85, 80, 82]\n\nattempts = 0\nfor guess in guesses:\n    attempts += 1\n    if guess < target:\n        print(f\"Attempt {attempts}: {guess}? Too low!\")\n    elif guess > target:\n        print(f\"Attempt {attempts}: {guess}? Too high!\")\n    else:\n        print(f\"Attempt {attempts}: {guess}? Correct!\")\n        print(f\"You found the number in {attempts} attempts!\")\n        break",
    exercise: {
      title: "Build the Number Guessing Game",
      description: "Use random.seed(42) to generate a target number with randint(1, 100). Then loop through the simulated guesses, printing whether each is too high, too low, or correct. Stop when the correct number is found.",
      starterCode: `# ============================================
# PROJECT: Number Guessing Game
# ============================================
# The computer picks a secret number (1-100).
# The player guesses until they find it.
#
# Requirements:
#   - Use random.seed(42) for determinism
#   - Generate target with random.randint(1, 100)
#   - Loop through simulated guesses
#   - Print "Too low!" / "Too high!" / "Correct!"
#   - Track and display attempt count
#   - Stop looping when correct guess is found
# ============================================

import random

# Step 1: Set the random seed to 42
# This ensures the target is always the same

# TODO: Set the seed
random.seed(42)

# Step 2: Generate the target number between 1 and 100
# TODO: Generate the target
target = random.randint(1, 100)

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")

# Step 3: Here are the simulated guesses
guesses = [50, 75, 90, 85, 80, 82]

# Step 4: Track how many attempts the player makes
attempts = 0

# Step 5: Loop through each guess
# TODO: For each guess:
#   - Increment attempts
#   - If guess < target: print "Attempt X: Y? Too low!"
#   - If guess > target: print "Attempt X: Y? Too high!"
#   - If guess == target: print "Attempt X: Y? Correct!"
#     then print "You found the number in X attempts!"
#     and break out of the loop
# (X = attempt number, Y = the guess value)
`,
      solution: `# ============================================
# PROJECT: Number Guessing Game - SOLUTION
# ============================================

import random

random.seed(42)
target = random.randint(1, 100)

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")

guesses = [50, 75, 90, 85, 80, 82]

attempts = 0

for guess in guesses:
    attempts += 1
    if guess < target:
        print(f"Attempt {attempts}: {guess}? Too low!")
    elif guess > target:
        print(f"Attempt {attempts}: {guess}? Too high!")
    else:
        print(f"Attempt {attempts}: {guess}? Correct!")
        print(f"You found the number in {attempts} attempts!")
        break
`,
      hint: "Use a for loop over the guesses list. Compare each guess to target with < and >. Use an attempts counter that increments each iteration. Break when guess == target.",
      tests: [
        { name: "First guess is too low", expected: "Attempt 1: 50? Too low!", hint: "50 is less than 82, so it should print 'Too low!'" },
        { name: "High guess detected", expected: "Attempt 3: 90? Too high!", hint: "90 is greater than 82, so it should print 'Too high!'" },
        { name: "Correct guess found", expected: "Attempt 6: 82? Correct!", hint: "82 equals the target, so it should print 'Correct!'" },
        { name: "Attempt count shown", expected: "You found the number in 6 attempts!", hint: "After the correct guess, print the total attempts" }
      ],
      hints: [
        "Start with: for guess in guesses: and increment attempts at the top of each iteration.",
        "Use if/elif/else to compare guess to target. Print the attempt number and guess in each message.",
        "When guess == target, print the Correct message, then print the attempts summary, then use break to stop."
      ]
    }
  },

  // ============================================================
  // PROJECT 3: Rock Paper Scissors
  // ============================================================
  {
    id: "p03",
    title: "Project: Rock Paper Scissors",
    difficulty: "beginner",
    order: 46,
    description: "Build a Rock Paper Scissors game where you play multiple rounds against the computer. Track wins, losses, and ties to determine the overall champion!",
    duration: "15 min",
    content: `# Project: Rock Paper Scissors

## What You'll Build

A **Rock Paper Scissors** game where:
- The player makes a choice for each round
- The computer makes a random choice (deterministic with seed)
- The winner of each round is determined
- Scores are tracked across multiple rounds

## Key Concepts
- Using \`random.seed()\` and \`random.choice()\`
- Game logic with conditionals
- Tracking state across rounds (scores)
- Lists for valid moves

## Game Rules
| Player | Computer | Result |
|--------|----------|--------|
| Rock | Scissors | Player wins |
| Paper | Rock | Player wins |
| Scissors | Paper | Player wins |
| Same | Same | Tie |
| Otherwise | — | Computer wins |

## Step-by-Step Plan

### 1. Set Up the Game
\`\`\`python
import random
random.seed(0)
choices = ["rock", "paper", "scissors"]
\`\`\`

### 2. Determine the Winner
\`\`\`python
def determine_winner(player, computer):
    if player == computer:
        return "tie"
    elif (player == "rock" and computer == "scissors") or \\
         (player == "paper" and computer == "rock") or \\
         (player == "scissors" and computer == "paper"):
        return "player"
    else:
        return "computer"
\`\`\`

### 3. Play Multiple Rounds
Loop through a list of predetermined player moves, generate
a computer move each round, and update the score.

## Tips
- With \`random.seed(0)\`, the computer choices are deterministic
- Use a dictionary to track scores: \`{"player": 0, "computer": 0, "tie": 0}\`
`,
    codeExample: "import random\n\nrandom.seed(0)\nchoices = [\"rock\", \"paper\", \"scissors\"]\n\ndef determine_winner(player, computer):\n    if player == computer:\n        return \"tie\"\n    elif (player == \"rock\" and computer == \"scissors\") or \\\n         (player == \"paper\" and computer == \"rock\") or \\\n         (player == \"scissors\" and computer == \"paper\"):\n        return \"player\"\n    else:\n        return \"computer\"\n\n# Simulated player moves\nplayer_moves = [\"rock\", \"paper\", \"scissors\", \"rock\", \"paper\"]\nscores = {\"player\": 0, \"computer\": 0, \"tie\": 0}\n\nfor i, player_choice in enumerate(player_moves, 1):\n    computer_choice = random.choice(choices)\n    winner = determine_winner(player_choice, computer_choice)\n    scores[winner] += 1\n    print(f\"Round {i}: Player={player_choice}, Computer={computer_choice} -> {winner.title()} wins!\" if winner != \"tie\" else f\"Round {i}: Player={player_choice}, Computer={computer_choice} -> It's a tie!\")\n\nprint(f\"\\nFinal Score: Player {scores['player']} - Computer {scores['computer']} (Ties: {scores['tie']})\")",
    exercise: {
      title: "Build Rock Paper Scissors",
      description: "Implement a Rock Paper Scissors game with random.seed(0). Create a determine_winner function, play 5 rounds with predetermined player moves, track scores, and print the final score.",
      starterCode: `# ============================================
# PROJECT: Rock Paper Scissors
# ============================================
# Play multiple rounds of Rock Paper Scissors
# against the computer!
#
# Requirements:
#   - Use random.seed(0) for determinism
#   - determine_winner(player, computer) returns
#     "player", "computer", or "tie"
#   - Play 5 rounds with simulated player moves
#   - Track scores in a dictionary
#   - Print each round result and final score
# ============================================

import random

# Step 1: Set seed and define valid choices
random.seed(0)
choices = ["rock", "paper", "scissors"]

# Step 2: Create the determine_winner function
# TODO: Takes player and computer choices (strings)
# Returns "tie" if they match
# Returns "player" if player wins:
#   rock beats scissors, paper beats rock, scissors beats paper
# Returns "computer" otherwise
def determine_winner(player, computer):
    pass

# Step 3: Simulated player moves for 5 rounds
player_moves = ["rock", "paper", "scissors", "rock", "paper"]

# Step 4: Score tracker
scores = {"player": 0, "computer": 0, "tie": 0}

# Step 5: Play each round
# TODO: Loop through player_moves with enumerate (start at 1)
#   - Get computer_choice using random.choice(choices)
#   - Determine the winner
#   - Update scores dictionary
#   - Print result in format:
#     "Round X: Player=___, Computer=___ -> ___ wins!"
#     or for ties: "Round X: Player=___, Computer=___ -> Tie!"

# Step 6: Print final score
# Format: "Final Score: Player X - Computer Y (Ties: Z)"
`,
      solution: `# ============================================
# PROJECT: Rock Paper Scissors - SOLUTION
# ============================================

import random

random.seed(0)
choices = ["rock", "paper", "scissors"]

def determine_winner(player, computer):
    if player == computer:
        return "tie"
    elif (player == "rock" and computer == "scissors") or \\
         (player == "paper" and computer == "rock") or \\
         (player == "scissors" and computer == "paper"):
        return "player"
    else:
        return "computer"

player_moves = ["rock", "paper", "scissors", "rock", "paper"]
scores = {"player": 0, "computer": 0, "tie": 0}

for i, player_choice in enumerate(player_moves, 1):
    computer_choice = random.choice(choices)
    winner = determine_winner(player_choice, computer_choice)
    scores[winner] += 1
    if winner == "tie":
        print(f"Round {i}: Player={player_choice}, Computer={computer_choice} -> Tie!")
    else:
        print(f"Round {i}: Player={player_choice}, Computer={computer_choice} -> {winner.title()} wins!")

print(f"\\nFinal Score: Player {scores['player']} - Computer {scores['computer']} (Ties: {scores['tie']})")
`,
      hint: "In determine_winner, first check if they're equal (tie). Then check the three winning combos for the player. Everything else means the computer wins.",
      tests: [
        { name: "Round 1 result displayed", expected: "Round 1:", hint: "Make sure to use enumerate starting at 1 and format the round number" },
        { name: "Winner determined correctly", expected: "wins!", hint: "Check your determine_winner logic — rock beats scissors, paper beats rock, scissors beats paper" },
        { name: "Final score printed", expected: "Final Score: Player", hint: "After the loop, print the scores dictionary values in the required format" },
        { name: "Ties tracked", expected: "Ties:", hint: "Ties should be counted in the scores dictionary and displayed in the final score" }
      ],
      hints: [
        "Start with determine_winner: if player == computer return 'tie'. Check the three player-win cases with or conditions.",
        "In the loop: computer_choice = random.choice(choices), then winner = determine_winner(player_choice, computer_choice), then scores[winner] += 1.",
        "For printing: use an if/else — if winner is 'tie' print 'Tie!', otherwise print winner.title() + ' wins!'."
      ]
    }
  },

  // ============================================================
  // PROJECT 4: Dice Roller
  // ============================================================
  {
    id: "p04",
    title: "Project: Dice Roller",
    difficulty: "beginner",
    order: 47,
    description: "Create a dice roller that rolls multiple dice, displays ASCII art for each face, and calculates the total. A fun visual project using string art!",
    duration: "10 min",
    content: `# Project: Dice Roller

## What You'll Build

A **dice roller** program that:
- Rolls any number of six-sided dice
- Displays ASCII art for each die face
- Shows individual values and the total

## Key Concepts
- Dictionaries to map values to ASCII art
- \`random.seed()\` for deterministic results
- Loops for rolling multiple dice
- String formatting for visual output

## ASCII Dice Faces

Each die face is represented as a small text drawing:

\`\`\`
+-------+    +-------+    +-------+
|       |    |   *   |    | *   * |
|   *   |    |       |    |       |
|       |    |   *   |    | *   * |
+-------+    +-------+    +-------+
  [ 1 ]        [ 2 ]        [ 4 ]
\`\`\`

## Step-by-Step Plan

### 1. Create Dice Face Art
Store each face as a list of strings in a dictionary:

\`\`\`python
dice_faces = {
    1: ["+-------+",
        "|       |",
        "|   *   |",
        "|       |",
        "+-------+"],
    # ... more faces
}
\`\`\`

### 2. Roll the Dice
\`\`\`python
import random
random.seed(42)
rolls = [random.randint(1, 6) for _ in range(num_dice)]
\`\`\`

### 3. Display Results
Print each die face and the total.

## Tips
- Use a dictionary with keys 1-6 for the faces
- \`random.seed(42)\` gives deterministic rolls for testing
`,
    codeExample: "import random\n\nrandom.seed(42)\n\ndice_faces = {\n    1: [\"+-------+\",\n        \"|       |\",\n        \"|   *   |\",\n        \"|       |\",\n        \"+-------+\"],\n    2: [\"+-------+\",\n        \"| *     |\",\n        \"|       |\",\n        \"|     * |\",\n        \"+-------+\"],\n    3: [\"+-------+\",\n        \"| *     |\",\n        \"|   *   |\",\n        \"|     * |\",\n        \"+-------+\"],\n    4: [\"+-------+\",\n        \"| *   * |\",\n        \"|       |\",\n        \"| *   * |\",\n        \"+-------+\"],\n    5: [\"+-------+\",\n        \"| *   * |\",\n        \"|   *   |\",\n        \"| *   * |\",\n        \"+-------+\"],\n    6: [\"+-------+\",\n        \"| *   * |\",\n        \"| *   * |\",\n        \"| *   * |\",\n        \"+-------+\"]\n}\n\ndef roll_dice(num_dice):\n    return [random.randint(1, 6) for _ in range(num_dice)]\n\ndef show_dice(rolls):\n    for i, value in enumerate(rolls, 1):\n        print(f\"Die {i}: [{value}]\")\n        for line in dice_faces[value]:\n            print(f\"  {line}\")\n\nrolls = roll_dice(3)\nshow_dice(rolls)\nprint(f\"\\nTotal: {sum(rolls)}\")",
    exercise: {
      title: "Build the Dice Roller",
      description: "Create a dice roller that rolls 3 dice using random.seed(42), displays ASCII art for each die face, and prints the total. Use a dictionary to store the face art.",
      starterCode: `# ============================================
# PROJECT: Dice Roller
# ============================================
# Roll multiple dice, show ASCII art faces,
# and calculate the total!
#
# Requirements:
#   - Use random.seed(42) for determinism
#   - Store 6 dice faces as ASCII art in a dict
#   - roll_dice(n) returns a list of n random 1-6 values
#   - show_dice(rolls) prints each die with its face art
#   - Print the total of all dice
# ============================================

import random

# Step 1: Set random seed
random.seed(42)

# Step 2: Create the dice faces dictionary
# Each key (1-6) maps to a list of 5 strings
# representing that face's ASCII art
# TODO: Fill in the dice_faces dictionary
dice_faces = {
    1: ["+-------+",
        "|       |",
        "|   *   |",
        "|       |",
        "+-------+"],
    2: ["+-------+",
        "| *     |",
        "|       |",
        "|     * |",
        "+-------+"],
    3: ["+-------+",
        "| *     |",
        "|   *   |",
        "|     * |",
        "+-------+"],
    4: ["+-------+",
        "| *   * |",
        "|       |",
        "| *   * |",
        "+-------+"],
    5: ["+-------+",
        "| *   * |",
        "|   *   |",
        "| *   * |",
        "+-------+"],
    6: ["+-------+",
        "| *   * |",
        "| *   * |",
        "| *   * |",
        "+-------+"]
}

# Step 3: Create the roll_dice function
# TODO: Takes num_dice (int), returns a list of random values 1-6
def roll_dice(num_dice):
    pass

# Step 4: Create the show_dice function
# TODO: Takes a list of roll values
# For each roll, print "Die X: [value]" then print each
# line of the ASCII face art (indented with 2 spaces)
def show_dice(rolls):
    pass

# Step 5: Roll 3 dice and display results
# TODO: Call roll_dice(3), then show_dice, then print the total
# Format: "Total: X"
`,
      solution: `# ============================================
# PROJECT: Dice Roller - SOLUTION
# ============================================

import random

random.seed(42)

dice_faces = {
    1: ["+-------+",
        "|       |",
        "|   *   |",
        "|       |",
        "+-------+"],
    2: ["+-------+",
        "| *     |",
        "|       |",
        "|     * |",
        "+-------+"],
    3: ["+-------+",
        "| *     |",
        "|   *   |",
        "|     * |",
        "+-------+"],
    4: ["+-------+",
        "| *   * |",
        "|       |",
        "| *   * |",
        "+-------+"],
    5: ["+-------+",
        "| *   * |",
        "|   *   |",
        "| *   * |",
        "+-------+"],
    6: ["+-------+",
        "| *   * |",
        "| *   * |",
        "| *   * |",
        "+-------+"]
}

def roll_dice(num_dice):
    return [random.randint(1, 6) for _ in range(num_dice)]

def show_dice(rolls):
    for i, value in enumerate(rolls, 1):
        print(f"Die {i}: [{value}]")
        for line in dice_faces[value]:
            print(f"  {line}")

rolls = roll_dice(3)
show_dice(rolls)
print(f"\\nTotal: {sum(rolls)}")
`,
      hint: "roll_dice uses a list comprehension with random.randint(1, 6). show_dice loops through rolls with enumerate, printing the die number and each line of the matching face art.",
      tests: [
        { name: "Die labels shown", expected: "Die 1:", hint: "Use enumerate starting at 1 to label each die" },
        { name: "ASCII art displayed", expected: "+-------+", hint: "Print each line of the dice_faces entry for the rolled value" },
        { name: "Dice dots shown", expected: "*", hint: "The ASCII art should contain asterisks representing the dots" },
        { name: "Total printed", expected: "Total:", hint: "Use sum(rolls) to calculate and print the total" }
      ],
      hints: [
        "roll_dice: return [random.randint(1, 6) for _ in range(num_dice)]",
        "show_dice: use enumerate(rolls, 1) and for each value print the label, then loop through dice_faces[value] to print each art line.",
        "At the end: rolls = roll_dice(3), show_dice(rolls), then print(f\"\\nTotal: {sum(rolls)}\")"
      ]
    }
  },

  // ============================================================
  // PROJECT 5: Unit Converter
  // ============================================================
  {
    id: "p05",
    title: "Project: Unit Converter",
    difficulty: "beginner",
    order: 48,
    description: "Build a universal unit converter that handles temperature (Celsius/Fahrenheit/Kelvin), distance (km/miles), and weight (kg/lbs). Learn to write precise conversion functions.",
    duration: "12 min",
    content: `# Project: Unit Converter

## What You'll Build

A **unit converter** that handles three categories:
- **Temperature**: Celsius ↔ Fahrenheit ↔ Kelvin
- **Distance**: Kilometers ↔ Miles
- **Weight**: Kilograms ↔ Pounds

## Key Concepts
- Writing mathematical conversion functions
- Rounding results for clean output
- Organizing related functions together
- Formatted string output

## Conversion Formulas

### Temperature
| Conversion | Formula |
|-----------|---------|
| C → F | F = C × 9/5 + 32 |
| F → C | C = (F - 32) × 5/9 |
| C → K | K = C + 273.15 |

### Distance
| Conversion | Formula |
|-----------|---------|
| km → mi | mi = km × 0.621371 |
| mi → km | km = mi × 1.60934 |

### Weight
| Conversion | Formula |
|-----------|---------|
| kg → lb | lb = kg × 2.20462 |
| lb → kg | kg = lb × 0.453592 |

## Step-by-Step Plan

### 1. Create Conversion Functions
Each conversion gets its own clean function:

\`\`\`python
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def km_to_miles(km):
    return km * 0.621371
\`\`\`

### 2. Print Formatted Results
\`\`\`python
result = celsius_to_fahrenheit(100)
print(f"100°C = {result}°F")
\`\`\`

## Tips
- Use \`round(value, 2)\` for clean decimal output
- Each function should do **one** conversion
`,
    codeExample: "# Unit Converter\n\n# Temperature converters\ndef celsius_to_fahrenheit(c):\n    return round(c * 9/5 + 32, 2)\n\ndef fahrenheit_to_celsius(f):\n    return round((f - 32) * 5/9, 2)\n\ndef celsius_to_kelvin(c):\n    return round(c + 273.15, 2)\n\n# Distance converters\ndef km_to_miles(km):\n    return round(km * 0.621371, 2)\n\ndef miles_to_km(mi):\n    return round(mi * 1.60934, 2)\n\n# Weight converters\ndef kg_to_pounds(kg):\n    return round(kg * 2.20462, 2)\n\ndef pounds_to_kg(lb):\n    return round(lb * 0.453592, 2)\n\n# Test conversions\nprint(f\"100°C = {celsius_to_fahrenheit(100)}°F\")\nprint(f\"32°F = {fahrenheit_to_celsius(32)}°C\")\nprint(f\"0°C = {celsius_to_kelvin(0)}K\")\nprint(f\"10 km = {km_to_miles(10)} miles\")\nprint(f\"5 miles = {miles_to_km(5)} km\")\nprint(f\"75 kg = {kg_to_pounds(75)} lbs\")\nprint(f\"150 lbs = {pounds_to_kg(150)} kg\")",
    exercise: {
      title: "Build the Unit Converter",
      description: "Implement conversion functions for temperature (C→F, F→C, C→K), distance (km→miles, miles→km), and weight (kg→lbs, lbs→kg). Round all results to 2 decimal places. Print formatted results for the given test values.",
      starterCode: `# ============================================
# PROJECT: Unit Converter
# ============================================
# Convert between different units:
#   Temperature: Celsius, Fahrenheit, Kelvin
#   Distance: Kilometers, Miles
#   Weight: Kilograms, Pounds
#
# Requirements:
#   - Each conversion is its own function
#   - All results rounded to 2 decimal places
#   - Print formatted results for test values
# ============================================

# --- TEMPERATURE CONVERTERS ---

# TODO: Celsius to Fahrenheit
# Formula: F = C * 9/5 + 32
def celsius_to_fahrenheit(c):
    pass

# TODO: Fahrenheit to Celsius
# Formula: C = (F - 32) * 5/9
def fahrenheit_to_celsius(f):
    pass

# TODO: Celsius to Kelvin
# Formula: K = C + 273.15
def celsius_to_kelvin(c):
    pass

# --- DISTANCE CONVERTERS ---

# TODO: Kilometers to Miles
# Formula: miles = km * 0.621371
def km_to_miles(km):
    pass

# TODO: Miles to Kilometers
# Formula: km = miles * 1.60934
def miles_to_km(mi):
    pass

# --- WEIGHT CONVERTERS ---

# TODO: Kilograms to Pounds
# Formula: lbs = kg * 2.20462
def kg_to_pounds(kg):
    pass

# TODO: Pounds to Kilograms
# Formula: kg = lbs * 0.453592
def pounds_to_kg(lb):
    pass

# --- TEST YOUR CONVERTERS ---
# Print results in these exact formats:

# Temperature tests
print(f"100°C = {celsius_to_fahrenheit(100)}°F")
print(f"32°F = {fahrenheit_to_celsius(32)}°C")
print(f"0°C = {celsius_to_kelvin(0)}K")

# Distance tests
print(f"10 km = {km_to_miles(10)} miles")
print(f"5 miles = {miles_to_km(5)} km")

# Weight tests
print(f"75 kg = {kg_to_pounds(75)} lbs")
print(f"150 lbs = {pounds_to_kg(150)} kg")
`,
      solution: `# ============================================
# PROJECT: Unit Converter - SOLUTION
# ============================================

# --- TEMPERATURE CONVERTERS ---

def celsius_to_fahrenheit(c):
    return round(c * 9/5 + 32, 2)

def fahrenheit_to_celsius(f):
    return round((f - 32) * 5/9, 2)

def celsius_to_kelvin(c):
    return round(c + 273.15, 2)

# --- DISTANCE CONVERTERS ---

def km_to_miles(km):
    return round(km * 0.621371, 2)

def miles_to_km(mi):
    return round(mi * 1.60934, 2)

# --- WEIGHT CONVERTERS ---

def kg_to_pounds(kg):
    return round(kg * 2.20462, 2)

def pounds_to_kg(lb):
    return round(lb * 0.453592, 2)

# --- TEST CONVERTERS ---
print(f"100°C = {celsius_to_fahrenheit(100)}°F")
print(f"32°F = {fahrenheit_to_celsius(32)}°C")
print(f"0°C = {celsius_to_kelvin(0)}K")
print(f"10 km = {km_to_miles(10)} miles")
print(f"5 miles = {miles_to_km(5)} km")
print(f"75 kg = {kg_to_pounds(75)} lbs")
print(f"150 lbs = {pounds_to_kg(150)} kg")
`,
      hint: "Each function applies a simple formula and wraps the result in round(..., 2). Just translate the math formulas directly into Python.",
      tests: [
        { name: "Celsius to Fahrenheit", expected: "100°C = 212.0°F", hint: "Formula: F = C * 9/5 + 32. 100 * 9/5 + 32 = 212.0" },
        { name: "Fahrenheit to Celsius", expected: "32°F = 0.0°C", hint: "Formula: C = (F - 32) * 5/9. (32 - 32) * 5/9 = 0.0" },
        { name: "Km to Miles", expected: "10 km = 6.21 miles", hint: "Formula: miles = km * 0.621371. Round to 2 decimals." },
        { name: "Kg to Pounds", expected: "75 kg = 165.35 lbs", hint: "Formula: lbs = kg * 2.20462. 75 * 2.20462 = 165.3465, rounded = 165.35" }
      ],
      hints: [
        "Each function is just: return round(formula, 2). For example, celsius_to_fahrenheit returns round(c * 9/5 + 32, 2).",
        "For fahrenheit_to_celsius, remember to subtract 32 first, then multiply by 5/9.",
        "km_to_miles uses 0.621371, miles_to_km uses 1.60934, kg_to_pounds uses 2.20462, pounds_to_kg uses 0.453592."
      ]
    }
  },

  // ============================================================
  // PROJECT 6: Hangman Game
  // ============================================================
  {
    id: "p06",
    title: "Project: Hangman Game",
    difficulty: "intermediate",
    order: 21,
    description: "Build a classic Hangman word-guessing game! The player guesses letters one by one, trying to reveal the hidden word before running out of attempts. Track progress and display the word state.",
    duration: "15 min",
    content: `# Project: Hangman Game

## What You'll Build

A **Hangman game** where:
- A secret word is chosen
- The player guesses one letter at a time
- Correct guesses reveal letters in the word
- Wrong guesses cost an attempt
- The game ends when the word is found or attempts run out

## Key Concepts
- String manipulation and checking membership
- Sets for tracking guessed letters
- Building display strings from word state
- Game loop with win/lose conditions

## How It Works

### Word Display
Show underscores for unguessed letters:
\`\`\`
Word: _ _ t h o _    (word is "python", guessed t, h, o)
\`\`\`

### Tracking Guesses
Use sets to track correct and wrong guesses:
\`\`\`python
correct_guesses = set()
wrong_guesses = set()
\`\`\`

### Checking a Guess
\`\`\`python
if letter in secret_word:
    correct_guesses.add(letter)
else:
    wrong_guesses.add(letter)
    attempts_left -= 1
\`\`\`

### Building the Display
\`\`\`python
display = ""
for char in secret_word:
    if char in correct_guesses:
        display += char + " "
    else:
        display += "_ "
\`\`\`

### Win Condition
The player wins when all letters are guessed:
\`\`\`python
if all(c in correct_guesses for c in secret_word):
    print("You win!")
\`\`\`

## Tips
- Simulate guesses with a predetermined list of letters
- Use 6 attempts as the maximum
- Print the game state after each guess
`,
    codeExample: "# Hangman Game Example\n\nsecret_word = \"python\"\nmax_attempts = 6\ncorrect_guesses = set()\nwrong_guesses = set()\nattempts_left = max_attempts\n\n# Simulated letter guesses\nguessed_letters = [\"p\", \"a\", \"t\", \"e\", \"h\", \"o\", \"n\", \"y\"]\n\ndef get_display(word, guessed):\n    return \" \".join(c if c in guessed else \"_\" for c in word)\n\ndef is_word_found(word, guessed):\n    return all(c in guessed for c in word)\n\nprint(f\"Word: {get_display(secret_word, correct_guesses)}\")\nprint(f\"Attempts left: {attempts_left}\\n\")\n\nfor letter in guessed_letters:\n    if letter in secret_word:\n        correct_guesses.add(letter)\n        print(f\"'{letter}' - Correct!\")\n    else:\n        wrong_guesses.add(letter)\n        attempts_left -= 1\n        print(f\"'{letter}' - Wrong! Attempts left: {attempts_left}\")\n    \n    print(f\"Word: {get_display(secret_word, correct_guesses)}\")\n    \n    if is_word_found(secret_word, correct_guesses):\n        print(f\"\\nCongratulations! You guessed '{secret_word}'!\")\n        break\n    if attempts_left == 0:\n        print(f\"\\nGame over! The word was '{secret_word}'.\")\n        break",
    exercise: {
      title: "Build the Hangman Game",
      description: "Implement a Hangman game with the secret word 'python'. Process a list of letter guesses, tracking correct and wrong guesses. Display the word progress after each guess. End the game when the word is found or attempts run out.",
      starterCode: `# ============================================
# PROJECT: Hangman Game
# ============================================
# Guess the secret word one letter at a time!
#
# Requirements:
#   - Secret word: "python"
#   - Max attempts: 6
#   - Track correct and wrong guesses in sets
#   - get_display() shows the word with blanks
#   - is_word_found() checks if all letters guessed
#   - Print status after each guess
#   - End when word is found or attempts run out
# ============================================

# Step 1: Game setup
secret_word = "python"
max_attempts = 6
correct_guesses = set()
wrong_guesses = set()
attempts_left = max_attempts

# Simulated guesses (some right, some wrong)
guessed_letters = ["p", "a", "t", "e", "h", "o", "n", "y"]

# Step 2: Create get_display function
# TODO: Takes word (str) and guessed (set)
# Returns a string with guessed letters shown
# and unguessed letters as underscores, separated by spaces
# Example: "p _ t _ _ _" if p and t are guessed
def get_display(word, guessed):
    pass

# Step 3: Create is_word_found function
# TODO: Takes word (str) and guessed (set)
# Returns True if every letter in word is in guessed
def is_word_found(word, guessed):
    pass

# Step 4: Show initial state
print(f"Word: {get_display(secret_word, correct_guesses)}")
print(f"Attempts left: {attempts_left}")
print()

# Step 5: Process each guess
# TODO: Loop through guessed_letters
#   - If letter is in secret_word:
#       Add to correct_guesses, print "'{letter}' - Correct!"
#   - Else:
#       Add to wrong_guesses, decrement attempts_left
#       Print "'{letter}' - Wrong! Attempts left: X"
#   - Print current word display: "Word: ..."
#   - Check if word is found -> print congrats and break
#   - Check if attempts_left == 0 -> print game over and break
`,
      solution: `# ============================================
# PROJECT: Hangman Game - SOLUTION
# ============================================

secret_word = "python"
max_attempts = 6
correct_guesses = set()
wrong_guesses = set()
attempts_left = max_attempts

guessed_letters = ["p", "a", "t", "e", "h", "o", "n", "y"]

def get_display(word, guessed):
    return " ".join(c if c in guessed else "_" for c in word)

def is_word_found(word, guessed):
    return all(c in guessed for c in word)

print(f"Word: {get_display(secret_word, correct_guesses)}")
print(f"Attempts left: {attempts_left}")
print()

for letter in guessed_letters:
    if letter in secret_word:
        correct_guesses.add(letter)
        print(f"'{letter}' - Correct!")
    else:
        wrong_guesses.add(letter)
        attempts_left -= 1
        print(f"'{letter}' - Wrong! Attempts left: {attempts_left}")

    print(f"Word: {get_display(secret_word, correct_guesses)}")

    if is_word_found(secret_word, correct_guesses):
        print(f"\\nCongratulations! You guessed '{secret_word}'!")
        break
    if attempts_left == 0:
        print(f"\\nGame over! The word was '{secret_word}'.")
        break
`,
      hint: "get_display joins characters: show the letter if it's in the guessed set, otherwise show '_'. is_word_found uses all() to check if every character in the word has been guessed.",
      tests: [
        { name: "Initial word is hidden", expected: "Word: _ _ _ _ _ _", hint: "Before any guesses, all letters should be underscores" },
        { name: "Correct guess detected", expected: "Correct!", hint: "When a guessed letter is in the word, print 'Correct!'" },
        { name: "Wrong guess detected", expected: "Wrong!", hint: "When a guessed letter is NOT in the word, print 'Wrong!'" },
        { name: "Game won", expected: "Congratulations!", hint: "When all letters are guessed, print the congratulations message" }
      ],
      hints: [
        "get_display: use ' '.join() with a generator — for each char in word, yield char if it's in guessed, else '_'.",
        "is_word_found: return all(c in guessed for c in word) — True only if every letter has been guessed.",
        "In the loop: check 'if letter in secret_word' to decide correct vs wrong. After printing, check win/lose conditions."
      ]
    }
  },

  // ============================================================
  // PROJECT 7: Banking System
  // ============================================================
  {
    id: "p07",
    title: "Project: Banking System",
    difficulty: "intermediate",
    order: 22,
    description: "Build an object-oriented banking system with a BankAccount class. Support deposits, withdrawals, transfers between accounts, and transaction history. Practice real-world OOP design!",
    duration: "15 min",
    content: `# Project: Banking System

## What You'll Build

A **banking system** with:
- A \`BankAccount\` class that tracks balance and owner
- Deposit and withdraw operations with validation
- Transfer money between accounts
- Print account statements

## Key Concepts
- Classes and objects (OOP)
- Instance methods and attributes
- Input validation (no negative deposits, no overdrafts)
- Object interaction (transfers between accounts)

## Class Design

### BankAccount
\`\`\`
Attributes:
  - owner (str): Account holder name
  - balance (float): Current balance

Methods:
  - deposit(amount): Add money
  - withdraw(amount): Remove money (if sufficient)
  - transfer(amount, other_account): Move money
  - get_statement(): Print account info
\`\`\`

## Validation Rules
- Cannot deposit negative amounts
- Cannot withdraw more than balance
- Cannot transfer more than balance

\`\`\`python
def withdraw(self, amount):
    if amount > self.balance:
        print("Insufficient funds!")
        return False
    self.balance -= amount
    return True
\`\`\`

## Tips
- Use \`__init__\` to set up owner and starting balance
- Methods should return True/False to indicate success
- Print messages for failed operations
`,
    codeExample: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            print(\"Deposit amount must be positive!\")\n            return False\n        self.balance += amount\n        print(f\"Deposited ${amount:.2f} to {self.owner}'s account.\")\n        return True\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            print(f\"Insufficient funds for {self.owner}!\")\n            return False\n        self.balance -= amount\n        print(f\"Withdrew ${amount:.2f} from {self.owner}'s account.\")\n        return True\n\n    def transfer(self, amount, other):\n        print(f\"Transfer ${amount:.2f}: {self.owner} -> {other.owner}\")\n        if self.withdraw(amount):\n            other.deposit(amount)\n            return True\n        return False\n\n    def get_statement(self):\n        print(f\"Account: {self.owner} | Balance: ${self.balance:.2f}\")\n\n# Demo\nalice = BankAccount(\"Alice\", 1000)\nbob = BankAccount(\"Bob\", 500)\n\nalice.get_statement()\nbob.get_statement()\nprint()\nalice.transfer(200, bob)\nprint()\nalice.get_statement()\nbob.get_statement()",
    exercise: {
      title: "Build the Banking System",
      description: "Create a BankAccount class with deposit, withdraw, transfer, and get_statement methods. Create two accounts (Alice with $1000, Bob with $500), perform transactions, and print statements to verify balances.",
      starterCode: `# ============================================
# PROJECT: Banking System
# ============================================
# Build an OOP banking system with accounts
# that can deposit, withdraw, and transfer.
#
# Requirements:
#   - BankAccount class with owner and balance
#   - deposit(amount): add money (positive only)
#   - withdraw(amount): remove money (check funds)
#   - transfer(amount, other): move money between accounts
#   - get_statement(): print account info
#   - Create Alice ($1000) and Bob ($500)
#   - Perform: Alice deposits $500, Bob withdraws $100
#   - Transfer $200 from Alice to Bob
#   - Print final statements
# ============================================

# TODO: Define the BankAccount class
class BankAccount:
    # TODO: __init__ takes owner (str) and balance (float, default 0)
    # Store both as instance attributes
    def __init__(self, owner, balance=0):
        pass

    # TODO: deposit(amount)
    # If amount <= 0: print "Deposit amount must be positive!" and return False
    # Otherwise: add to balance, print "Deposited $X.XX to {owner}'s account."
    # Return True on success
    def deposit(self, amount):
        pass

    # TODO: withdraw(amount)
    # If amount > balance: print "Insufficient funds for {owner}!" and return False
    # Otherwise: subtract from balance
    # Print "Withdrew $X.XX from {owner}'s account." and return True
    def withdraw(self, amount):
        pass

    # TODO: transfer(amount, other_account)
    # Print "Transfer $X.XX: {self.owner} -> {other.owner}"
    # Use self.withdraw() and other.deposit() to move money
    # Return True if successful, False if withdraw fails
    def transfer(self, amount, other):
        pass

    # TODO: get_statement()
    # Print "Account: {owner} | Balance: $X.XX"
    def get_statement(self):
        pass

# --- Create accounts and perform transactions ---

# Step 1: Create Alice with $1000 and Bob with $500
# TODO: Create the accounts

# Step 2: Print initial statements
# TODO: Call get_statement() on both

# Step 3: Alice deposits $500
# TODO: alice.deposit(500)

# Step 4: Bob withdraws $100
# TODO: bob.withdraw(100)

# Step 5: Alice transfers $200 to Bob
# TODO: alice.transfer(200, bob)

# Step 6: Print final statements
print()
# TODO: Call get_statement() on both
`,
      solution: `# ============================================
# PROJECT: Banking System - SOLUTION
# ============================================

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit amount must be positive!")
            return False
        self.balance += amount
        print(f"Deposited \${amount:.2f} to {self.owner}'s account.")
        return True

    def withdraw(self, amount):
        if amount > self.balance:
            print(f"Insufficient funds for {self.owner}!")
            return False
        self.balance -= amount
        print(f"Withdrew \${amount:.2f} from {self.owner}'s account.")
        return True

    def transfer(self, amount, other):
        print(f"Transfer \${amount:.2f}: {self.owner} -> {other.owner}")
        if self.withdraw(amount):
            other.deposit(amount)
            return True
        return False

    def get_statement(self):
        print(f"Account: {self.owner} | Balance: \${self.balance:.2f}")

# Create accounts
alice = BankAccount("Alice", 1000)
bob = BankAccount("Bob", 500)

# Initial statements
alice.get_statement()
bob.get_statement()

# Transactions
alice.deposit(500)
bob.withdraw(100)
alice.transfer(200, bob)

# Final statements
print()
alice.get_statement()
bob.get_statement()
`,
      hint: "In __init__, set self.owner and self.balance. Each method checks conditions first, then modifies self.balance. Transfer calls self.withdraw() and if it succeeds, calls other.deposit().",
      tests: [
        { name: "Alice's initial balance", expected: "Account: Alice | Balance: $1000.00", hint: "Create Alice with BankAccount('Alice', 1000) and call get_statement()" },
        { name: "Deposit works", expected: "Deposited $500.00 to Alice's account.", hint: "deposit() should add amount to balance and print the confirmation" },
        { name: "Withdraw works", expected: "Withdrew $100.00 from Bob's account.", hint: "withdraw() should subtract amount from balance and print confirmation" },
        { name: "Transfer shown", expected: "Transfer $200.00: Alice -> Bob", hint: "transfer() should print the transfer header before calling withdraw/deposit" }
      ],
      hints: [
        "In __init__: self.owner = owner and self.balance = balance. That's all you need to store.",
        "deposit/withdraw: check the condition first, print error and return False if invalid. Otherwise update balance, print success, return True.",
        "transfer: print the transfer line, then call self.withdraw(amount). If it returns True, call other.deposit(amount)."
      ]
    }
  },

  // ============================================================
  // PROJECT 8: Caesar Cipher
  // ============================================================
  {
    id: "p08",
    title: "Project: Caesar Cipher",
    difficulty: "intermediate",
    order: 23,
    description: "Implement the classic Caesar Cipher encryption! Shift letters in the alphabet to encrypt and decrypt secret messages. Handles uppercase, lowercase, and preserves non-letter characters.",
    duration: "12 min",
    content: `# Project: Caesar Cipher

## What You'll Build

A **Caesar Cipher** encoder/decoder that:
- Encrypts messages by shifting each letter forward in the alphabet
- Decrypts by shifting backward
- Preserves case (uppercase stays uppercase)
- Leaves non-letter characters unchanged (spaces, punctuation)

## Key Concepts
- Character codes with \`ord()\` and \`chr()\`
- Modular arithmetic for wrapping around the alphabet
- String building character by character
- Inverse operations (encrypt/decrypt)

## How Caesar Cipher Works

Shift each letter by a fixed number (the "key"):

\`\`\`
Key = 3
A B C D E F G ...
↓ ↓ ↓ ↓ ↓ ↓ ↓
D E F G H I J ...

"HELLO" → "KHOOR"
\`\`\`

## The Algorithm

For each character:
1. If it's a letter, find its position (0-25)
2. Add the shift amount
3. Use modulo 26 to wrap around
4. Convert back to a character

\`\`\`python
# For uppercase letters:
position = ord(char) - ord('A')      # 0-25
shifted = (position + key) % 26
new_char = chr(shifted + ord('A'))
\`\`\`

## Decryption
Decrypting is just encrypting with a **negative** shift:
\`\`\`python
def decrypt(text, key):
    return encrypt(text, -key)
\`\`\`

## Tips
- Use \`char.isupper()\` and \`char.islower()\` to check case
- Use \`char.isalpha()\` to check if it's a letter at all
- The modulo operator \`%\` handles the wrap-around
`,
    codeExample: "def encrypt(text, key):\n    result = \"\"\n    for char in text:\n        if char.isupper():\n            position = ord(char) - ord('A')\n            shifted = (position + key) % 26\n            result += chr(shifted + ord('A'))\n        elif char.islower():\n            position = ord(char) - ord('a')\n            shifted = (position + key) % 26\n            result += chr(shifted + ord('a'))\n        else:\n            result += char\n    return result\n\ndef decrypt(text, key):\n    return encrypt(text, -key)\n\n# Test\nmessage = \"Hello, World!\"\nkey = 3\n\nencrypted = encrypt(message, key)\ndecrypted = decrypt(encrypted, key)\n\nprint(f\"Original:  {message}\")\nprint(f\"Encrypted: {encrypted}\")\nprint(f\"Decrypted: {decrypted}\")",
    exercise: {
      title: "Build the Caesar Cipher",
      description: "Implement encrypt and decrypt functions for the Caesar Cipher. The encrypt function shifts each letter by the key amount (wrapping around Z→A). The decrypt function reverses the process. Non-letter characters stay unchanged.",
      starterCode: `# ============================================
# PROJECT: Caesar Cipher
# ============================================
# Encrypt and decrypt messages by shifting
# letters in the alphabet!
#
# Requirements:
#   - encrypt(text, key): shift letters forward by key
#   - decrypt(text, key): shift letters backward by key
#   - Preserve uppercase/lowercase
#   - Don't change non-letter characters (spaces, etc.)
#   - Use ord() and chr() for character math
# ============================================

# TODO: Implement the encrypt function
# For each character in text:
#   - If uppercase: find position (ord(char) - ord('A'))
#     shift by key with modulo 26, convert back with chr()
#   - If lowercase: same but with ord('a')
#   - If not a letter: keep it unchanged
# Return the encrypted string
def encrypt(text, key):
    result = ""
    for char in text:
        # TODO: Handle uppercase letters
        # position = ord(char) - ord('A')
        # shifted = (position + key) % 26
        # result += chr(shifted + ord('A'))

        # TODO: Handle lowercase letters
        # Same idea but with ord('a')

        # TODO: Handle non-letter characters
        # Just add them to result unchanged
        pass
    return result

# TODO: Implement the decrypt function
# Hint: Decrypting is just encrypting with -key!
def decrypt(text, key):
    pass

# --- Test the cipher ---
message = "Hello, World!"
key = 3

encrypted = encrypt(message, key)
decrypted = decrypt(encrypted, key)

print(f"Original:  {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")

# Test with another message
message2 = "Python is Fun!"
key2 = 7

encrypted2 = encrypt(message2, key2)
decrypted2 = decrypt(encrypted2, key2)

print(f"Original:  {message2}")
print(f"Encrypted: {encrypted2}")
print(f"Decrypted: {decrypted2}")
`,
      solution: `# ============================================
# PROJECT: Caesar Cipher - SOLUTION
# ============================================

def encrypt(text, key):
    result = ""
    for char in text:
        if char.isupper():
            position = ord(char) - ord('A')
            shifted = (position + key) % 26
            result += chr(shifted + ord('A'))
        elif char.islower():
            position = ord(char) - ord('a')
            shifted = (position + key) % 26
            result += chr(shifted + ord('a'))
        else:
            result += char
    return result

def decrypt(text, key):
    return encrypt(text, -key)

# Test the cipher
message = "Hello, World!"
key = 3

encrypted = encrypt(message, key)
decrypted = decrypt(encrypted, key)

print(f"Original:  {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")

# Test with another message
message2 = "Python is Fun!"
key2 = 7

encrypted2 = encrypt(message2, key2)
decrypted2 = decrypt(encrypted2, key2)

print(f"Original:  {message2}")
print(f"Encrypted: {encrypted2}")
print(f"Decrypted: {decrypted2}")
`,
      hint: "For each letter, get its position (0-25) using ord(char) - ord('A' or 'a'). Add the key and use % 26 to wrap around. Convert back with chr(). Decrypt is just encrypt with -key.",
      tests: [
        { name: "Encryption works", expected: "Encrypted: Khoor, Zruog!", hint: "'Hello, World!' shifted by 3 becomes 'Khoor, Zruog!' — H+3=K, e+3=h, etc." },
        { name: "Decryption works", expected: "Decrypted: Hello, World!", hint: "Decrypting the encrypted text with the same key should return the original" },
        { name: "Second encryption", expected: "Encrypted: Wfaovu pz Mbu!", hint: "'Python is Fun!' shifted by 7: P+7=W, y+7=f, etc." },
        { name: "Second decryption", expected: "Decrypted: Python is Fun!", hint: "Decrypting should restore the original message" }
      ],
      hints: [
        "Use char.isupper() and char.islower() to determine which base to use (ord('A') or ord('a')).",
        "The key formula: position = ord(char) - base, shifted = (position + key) % 26, new_char = chr(shifted + base).",
        "decrypt is a one-liner: return encrypt(text, -key). Shifting backward undoes the forward shift!"
      ]
    }
  },

  // ============================================================
  // PROJECT 9: Slot Machine
  // ============================================================
  {
    id: "p09",
    title: "Project: Slot Machine",
    difficulty: "intermediate",
    order: 24,
    description: "Build a slot machine simulator with spinning reels, symbol matching, and payout calculations. Track your balance as you play multiple spins!",
    duration: "15 min",
    content: `# Project: Slot Machine

## What You'll Build

A **slot machine** game where:
- Each spin shows 3 random symbols
- Matching symbols earn payouts
- A balance tracks winnings and losses
- Multiple spins are simulated

## Key Concepts
- Random selection with seeds for determinism
- Dictionaries for symbol payouts
- Game state management (balance tracking)
- Conditional logic for payout rules

## Game Rules

### Symbols and Payouts (3 matching)
| Symbols | Payout Multiplier |
|---------|------------------|
| 🍒🍒🍒 (cherry) | 3x bet |
| 🍋🍋🍋 (lemon) | 5x bet |
| 🔔🔔🔔 (bell) | 10x bet |
| ⭐⭐⭐ (star) | 20x bet |
| 💎💎💎 (diamond) | 50x bet |
| 2 matching | 2x bet |

### How Payouts Work
\`\`\`python
bet = 10
# If 3 diamonds match: win 10 * 50 = 500
# If 2 symbols match: win 10 * 2 = 20
# If no match: lose the bet
\`\`\`

## Step-by-Step Plan

### 1. Define Symbols and Payouts
\`\`\`python
symbols = ["cherry", "lemon", "bell", "star", "diamond"]
payouts = {"cherry": 3, "lemon": 5, "bell": 10, "star": 20, "diamond": 50}
\`\`\`

### 2. Spin the Reels
\`\`\`python
def spin():
    return [random.choice(symbols) for _ in range(3)]
\`\`\`

### 3. Calculate Payout
Check if 3 match, 2 match, or no match.

## Tips
- Use \`random.seed(42)\` for deterministic spins
- Track balance: start with an amount, subtract bets, add winnings
`,
    codeExample: "import random\n\nrandom.seed(42)\n\nsymbols = [\"cherry\", \"lemon\", \"bell\", \"star\", \"diamond\"]\npayouts = {\"cherry\": 3, \"lemon\": 5, \"bell\": 10, \"star\": 20, \"diamond\": 50}\n\ndef spin():\n    return [random.choice(symbols) for _ in range(3)]\n\ndef calculate_payout(reels, bet):\n    if reels[0] == reels[1] == reels[2]:\n        return bet * payouts[reels[0]]\n    elif reels[0] == reels[1] or reels[1] == reels[2] or reels[0] == reels[2]:\n        return bet * 2\n    else:\n        return 0\n\nbalance = 100\nbet = 10\n\nprint(f\"Starting balance: ${balance}\")\nprint()\n\nfor i in range(5):\n    balance -= bet\n    reels = spin()\n    payout = calculate_payout(reels, bet)\n    balance += payout\n    result = f\"WIN ${payout}!\" if payout > 0 else \"No win\"\n    print(f\"Spin {i+1}: [{reels[0]:>8}][{reels[1]:>8}][{reels[2]:>8}] -> {result}\")\n\nprint(f\"\\nFinal balance: ${balance}\")\nnet = balance - 100\nprint(f\"Net result: {'+'if net >= 0 else ''}{net}\")",
    exercise: {
      title: "Build the Slot Machine",
      description: "Create a slot machine with symbols, payouts, and balance tracking. Use random.seed(42) for deterministic results. Spin 5 times with a $10 bet each, showing the reels and results.",
      starterCode: `# ============================================
# PROJECT: Slot Machine
# ============================================
# Spin the reels and try to match symbols!
#
# Requirements:
#   - Use random.seed(42)
#   - 5 symbols: cherry, lemon, bell, star, diamond
#   - Payouts: cherry=3x, lemon=5x, bell=10x,
#     star=20x, diamond=50x
#   - 2 matching = 2x bet
#   - No match = 0 payout (lose bet)
#   - Starting balance: $100, bet: $10 per spin
#   - Play 5 spins
# ============================================

import random

# Step 1: Set random seed
random.seed(42)

# Step 2: Define symbols and payouts
symbols = ["cherry", "lemon", "bell", "star", "diamond"]
payouts = {"cherry": 3, "lemon": 5, "bell": 10, "star": 20, "diamond": 50}

# Step 3: Create spin function
# TODO: Returns a list of 3 random symbols
def spin():
    pass

# Step 4: Create calculate_payout function
# TODO: Takes reels (list of 3 symbols) and bet (int)
# If all 3 match: return bet * payouts[symbol]
# If any 2 match: return bet * 2
# If no match: return 0
def calculate_payout(reels, bet):
    pass

# Step 5: Game setup
balance = 100
bet = 10

print(f"Starting balance: \${balance}")
print()

# Step 6: Play 5 spins
# TODO: Loop 5 times (use range and enumerate from 1)
#   - Subtract bet from balance
#   - Get reels from spin()
#   - Calculate payout
#   - Add payout to balance
#   - Print: "Spin X: [symbol1][symbol2][symbol3] -> WIN $Y!" or "No win"

# Step 7: Print final balance and net result
# "Final balance: $X"
# "Net result: +X" or "Net result: -X"
`,
      solution: `# ============================================
# PROJECT: Slot Machine - SOLUTION
# ============================================

import random

random.seed(42)

symbols = ["cherry", "lemon", "bell", "star", "diamond"]
payouts = {"cherry": 3, "lemon": 5, "bell": 10, "star": 20, "diamond": 50}

def spin():
    return [random.choice(symbols) for _ in range(3)]

def calculate_payout(reels, bet):
    if reels[0] == reels[1] == reels[2]:
        return bet * payouts[reels[0]]
    elif reels[0] == reels[1] or reels[1] == reels[2] or reels[0] == reels[2]:
        return bet * 2
    else:
        return 0

balance = 100
bet = 10

print(f"Starting balance: \${balance}")
print()

for i in range(5):
    balance -= bet
    reels = spin()
    payout = calculate_payout(reels, bet)
    balance += payout
    if payout > 0:
        print(f"Spin {i + 1}: [{reels[0]:>8}][{reels[1]:>8}][{reels[2]:>8}] -> WIN \${payout}!")
    else:
        print(f"Spin {i + 1}: [{reels[0]:>8}][{reels[1]:>8}][{reels[2]:>8}] -> No win")

print(f"\\nFinal balance: \${balance}")
net = balance - 100
print(f"Net result: {'+'if net >= 0 else ''}{net}")
`,
      hint: "spin() returns a list comprehension with 3 random.choice(symbols). calculate_payout checks if all 3 match first, then if any 2 match, otherwise returns 0.",
      tests: [
        { name: "Starting balance shown", expected: "Starting balance: $100", hint: "Print the starting balance before the spins begin" },
        { name: "Spin results displayed", expected: "Spin 1:", hint: "Each spin should be labeled with its number" },
        { name: "Final balance shown", expected: "Final balance: $", hint: "After all spins, print the remaining balance" },
        { name: "Net result shown", expected: "Net result:", hint: "Calculate net as final balance minus starting balance" }
      ],
      hints: [
        "spin: return [random.choice(symbols) for _ in range(3)] — picks 3 random symbols.",
        "calculate_payout: first check reels[0] == reels[1] == reels[2] for triple match. Then check pairs with or conditions.",
        "In the loop: subtract bet, spin, calculate payout, add payout to balance. Track net = balance - 100 at the end."
      ]
    }
  },

  // ============================================================
  // PROJECT 10: Student Grade Manager
  // ============================================================
  {
    id: "p10",
    title: "Project: Student Grade Manager",
    difficulty: "intermediate",
    order: 25,
    description: "Build an OOP grade management system with Student and GradeBook classes. Add students, record grades, calculate averages, assign letter grades, and find the top performer!",
    duration: "15 min",
    content: `# Project: Student Grade Manager

## What You'll Build

A **grade management system** with:
- A \`Student\` class to track individual student grades
- A \`GradeBook\` class to manage all students
- Calculate averages, assign letter grades
- Find the top student in the class

## Key Concepts
- Multiple classes working together
- Lists as instance attributes
- Aggregation (GradeBook contains Students)
- Statistical calculations (averages)

## Class Design

### Student Class
\`\`\`
Attributes:
  - name (str)
  - grades (list of floats)

Methods:
  - add_grade(grade): Add a grade to the list
  - average(): Calculate average grade
  - letter_grade(): Return A/B/C/D/F based on average
\`\`\`

### GradeBook Class
\`\`\`
Attributes:
  - students (list of Student objects)

Methods:
  - add_student(student): Add a Student
  - class_average(): Average of all student averages
  - top_student(): Student with highest average
  - print_report(): Print all student info
\`\`\`

## Letter Grade Scale
| Average | Grade |
|---------|-------|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 60-69 | D |
| Below 60 | F |

## Tips
- Use \`sum(self.grades) / len(self.grades)\` for averages
- Use \`max()\` with a \`key\` function to find the top student
- Handle the edge case of empty grades lists
`,
    codeExample: "class Student:\n    def __init__(self, name):\n        self.name = name\n        self.grades = []\n\n    def add_grade(self, grade):\n        self.grades.append(grade)\n\n    def average(self):\n        if not self.grades:\n            return 0\n        return sum(self.grades) / len(self.grades)\n\n    def letter_grade(self):\n        avg = self.average()\n        if avg >= 90:\n            return \"A\"\n        elif avg >= 80:\n            return \"B\"\n        elif avg >= 70:\n            return \"C\"\n        elif avg >= 60:\n            return \"D\"\n        else:\n            return \"F\"\n\nclass GradeBook:\n    def __init__(self):\n        self.students = []\n\n    def add_student(self, student):\n        self.students.append(student)\n\n    def class_average(self):\n        if not self.students:\n            return 0\n        return sum(s.average() for s in self.students) / len(self.students)\n\n    def top_student(self):\n        if not self.students:\n            return None\n        return max(self.students, key=lambda s: s.average())\n\n    def print_report(self):\n        print(\"=\" * 40)\n        print(\"Grade Report\")\n        print(\"=\" * 40)\n        for s in self.students:\n            print(f\"{s.name}: Avg={s.average():.1f} Grade={s.letter_grade()}\")\n        print(f\"\\nClass Average: {self.class_average():.1f}\")\n        top = self.top_student()\n        print(f\"Top Student: {top.name} ({top.average():.1f})\")\n\n# Demo\nbook = GradeBook()\n\nalice = Student(\"Alice\")\nalice.add_grade(95)\nalice.add_grade(88)\nalice.add_grade(92)\nbook.add_student(alice)\n\nbob = Student(\"Bob\")\nbob.add_grade(78)\nbob.add_grade(85)\nbob.add_grade(80)\nbook.add_student(bob)\n\ncharlie = Student(\"Charlie\")\ncharlie.add_grade(90)\ncharlie.add_grade(95)\ncharlie.add_grade(88)\nbook.add_student(charlie)\n\nbook.print_report()",
    exercise: {
      title: "Build the Student Grade Manager",
      description: "Create Student and GradeBook classes. Add three students with grades, then print a full grade report showing each student's average, letter grade, the class average, and the top student.",
      starterCode: `# ============================================
# PROJECT: Student Grade Manager
# ============================================
# Track students, their grades, and performance!
#
# Requirements:
#   - Student class: name, grades list
#     Methods: add_grade, average, letter_grade
#   - GradeBook class: students list
#     Methods: add_student, class_average,
#              top_student, print_report
#   - Letter grades: A(90+), B(80+), C(70+),
#     D(60+), F(below 60)
#   - Add 3 students with grades
#   - Print a complete grade report
# ============================================

# TODO: Define the Student class
class Student:
    # TODO: __init__ takes name, initializes empty grades list
    def __init__(self, name):
        pass

    # TODO: add_grade appends a grade to self.grades
    def add_grade(self, grade):
        pass

    # TODO: average returns the mean of all grades
    # Return 0 if no grades yet
    def average(self):
        pass

    # TODO: letter_grade returns A/B/C/D/F based on average
    # A: 90+, B: 80+, C: 70+, D: 60+, F: below 60
    def letter_grade(self):
        pass

# TODO: Define the GradeBook class
class GradeBook:
    # TODO: __init__ initializes empty students list
    def __init__(self):
        pass

    # TODO: add_student appends a Student to the list
    def add_student(self, student):
        pass

    # TODO: class_average returns the mean of all student averages
    # Return 0 if no students
    def class_average(self):
        pass

    # TODO: top_student returns the Student with highest average
    # Return None if no students
    # Hint: use max() with key=lambda s: s.average()
    def top_student(self):
        pass

    # TODO: print_report prints a formatted grade report
    # Print "=" * 40, then "Grade Report", then "=" * 40
    # For each student: "{name}: Avg={avg:.1f} Grade={letter}"
    # Then blank line + "Class Average: {avg:.1f}"
    # Then "Top Student: {name} ({avg:.1f})"
    def print_report(self):
        pass

# --- Build the grade book ---

# Step 1: Create a GradeBook
# TODO: Create the GradeBook instance

# Step 2: Add Alice with grades 95, 88, 92
# TODO: Create Alice, add her grades, add to book

# Step 3: Add Bob with grades 78, 85, 80
# TODO: Create Bob, add his grades, add to book

# Step 4: Add Charlie with grades 90, 95, 88
# TODO: Create Charlie, add his grades, add to book

# Step 5: Print the full report
# TODO: Call print_report()
`,
      solution: `# ============================================
# PROJECT: Student Grade Manager - SOLUTION
# ============================================

class Student:
    def __init__(self, name):
        self.name = name
        self.grades = []

    def add_grade(self, grade):
        self.grades.append(grade)

    def average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

    def letter_grade(self):
        avg = self.average()
        if avg >= 90:
            return "A"
        elif avg >= 80:
            return "B"
        elif avg >= 70:
            return "C"
        elif avg >= 60:
            return "D"
        else:
            return "F"

class GradeBook:
    def __init__(self):
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def class_average(self):
        if not self.students:
            return 0
        return sum(s.average() for s in self.students) / len(self.students)

    def top_student(self):
        if not self.students:
            return None
        return max(self.students, key=lambda s: s.average())

    def print_report(self):
        print("=" * 40)
        print("Grade Report")
        print("=" * 40)
        for s in self.students:
            print(f"{s.name}: Avg={s.average():.1f} Grade={s.letter_grade()}")
        print(f"\\nClass Average: {self.class_average():.1f}")
        top = self.top_student()
        print(f"Top Student: {top.name} ({top.average():.1f})")

# Build the grade book
book = GradeBook()

alice = Student("Alice")
alice.add_grade(95)
alice.add_grade(88)
alice.add_grade(92)
book.add_student(alice)

bob = Student("Bob")
bob.add_grade(78)
bob.add_grade(85)
bob.add_grade(80)
book.add_student(bob)

charlie = Student("Charlie")
charlie.add_grade(90)
charlie.add_grade(95)
charlie.add_grade(88)
book.add_student(charlie)

book.print_report()
`,
      hint: "Student stores name and a grades list. average() uses sum/len. letter_grade() uses if/elif on the average. GradeBook stores a list of Students and aggregates their data.",
      tests: [
        { name: "Report header shown", expected: "Grade Report", hint: "print_report should print 'Grade Report' between lines of '=' characters" },
        { name: "Alice's grades correct", expected: "Alice: Avg=91.7 Grade=A", hint: "Alice's grades are 95, 88, 92. Average = 275/3 = 91.666... → 91.7, which is an A" },
        { name: "Class average calculated", expected: "Class Average: 88.0", hint: "Average of (91.67 + 81.0 + 91.0) / 3 ≈ 87.89 → 88.0 when formatted to .1f" },
        { name: "Top student identified", expected: "Top Student: Alice", hint: "Alice has the highest average (91.7), so she should be the top student" }
      ],
      hints: [
        "Student.__init__: self.name = name, self.grades = []. add_grade just appends. average uses sum(self.grades) / len(self.grades).",
        "letter_grade: get avg = self.average(), then use if/elif chain: >= 90 is A, >= 80 is B, etc.",
        "GradeBook: class_average sums all student averages and divides by count. top_student uses max() with key=lambda s: s.average()."
      ]
    }
  }
];
