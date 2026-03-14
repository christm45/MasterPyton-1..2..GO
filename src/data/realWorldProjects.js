// ══════════════════════════════════════════════════════════════
// REAL-WORLD PROJECT EXERCISES
// Scaffolded, validated, with stretch goals - designed for
// maximum engagement using real-world contexts.
//
// Design Principles:
// - Scaffolding: starter code with TODOs for beginners
// - Validation: input checking built into every exercise
// - Stretch Goals: basic + optional challenges in comments
// - Real-world: banking, shopping, games, utilities
// - Progressive: console → data structures → OOP
//
// NOTE: Runs in Pyodide (browser). input() is simulated
// with hardcoded values. Comments explain real-world usage.
// ══════════════════════════════════════════════════════════════

export const realWorldProjects = [

  // ══════════════════ PROJECT 1 ══════════════════
  {
    id: "rw01",
    title: "Mad Libs Story Generator",
    difficulty: "beginner",
    order: 49,
    description: "Build a story generator using f-strings, variables, and string formatting",
    duration: "12 min",
    content: `Build a **Mad Libs** game where you collect words and insert them into a funny story!

## What You'll Practice
- **Variables** to store user words
- **F-strings** to build the story
- **String methods** for formatting
- **Input validation** (checking empty strings)

## The Formula
\`\`\`
CONTEXT: Fun word game
DATA: Adjectives, nouns, verbs, places, numbers
ACTION: Collect words, build story, display result
CONSTRAINT: No empty inputs allowed
OUTPUT: Formatted story with decorative borders
\`\`\`

## Key Concepts

\`\`\`python
# F-strings insert variables into text
name = "Alice"
print(f"Hello, {name}!")  # Hello, Alice!

# Multi-line f-strings with triple quotes
story = f"""
Once upon a time, {name} went on an adventure.
It was a {adjective} day.
"""

# String repetition for borders
print("=" * 40)  # ========================================
\`\`\`

> **Tip:** In a real app you'd use \`input("Enter a word: ")\`. Here we simulate with preset values to demonstrate the logic.

## Stretch Goals
1. Add more word types (celebrity name, body part, plural noun)
2. Validate that inputs aren't empty
3. Create multiple story templates the user can choose from`,
    codeExample: `# Quick Mad Libs demo\nadjective = "mysterious"\nnoun = "dragon"\nverb = "dancing"\nplace = "Mars"\nnumber = "42"\n\nstory = f"""\nOnce upon a time, there was a {adjective} {noun}\nwho loved {verb} on {place} with {number} friends.\nIt was the most {adjective} day ever!\n"""\n\nprint("=" * 35)\nprint("  YOUR MAD LIBS STORY")\nprint("=" * 35)\nprint(story)\nprint("=" * 35)`,
    exercise: {
      title: "Complete the Mad Libs Generator",
      description: "Fill in the TODOs to build a complete Mad Libs story generator with validation and formatted output.",
      starterCode: `# ══════════════════════════════════════════
# MAD LIBS: The Space Adventure
# Build a funny story by filling in words!
# ══════════════════════════════════════════

# ── STEP 1: Collect words ──
# In a real app: adjective1 = input("Enter an adjective: ")
# Here we simulate with preset values:
adjective1 = "gigantic"
noun1 = "pizza"
verb1 = "juggling"
place = "Jupiter"
number = "99"
animal = "penguin"
color = "purple"

# ── STEP 2: Validate inputs ──
# TODO: Create a list of all words and check none are empty
# Hint: words = [adjective1, noun1, verb1, place, number, animal, color]
# Then: if any(w.strip() == "" for w in words): print("Error!")
words = [adjective1, noun1, verb1, place, number, animal, color]

valid = True
for word in words:
    if word.strip() == "":
        print("Error: All fields must be filled in!")
        valid = False
        break

if valid:
    # ── STEP 3: Build the story using f-strings ──
    # TODO: Create a multi-line story using the variables
    # Use f"""...""" for multi-line f-strings
    story = f"""In a {adjective1} galaxy far away, a {color} {noun1}
was caught {verb1} with a {animal} on {place}.
"Stop!" yelled the space police. "You can't bring {number}
{animal}s to {place}! That's too {adjective1}!"
But the {noun1} just kept {verb1} all the way home."""

    # ── STEP 4: Display with formatting ──
    # TODO: Print the story with decorative borders
    title = "THE SPACE ADVENTURE"
    print("=" * 45)
    print(f"{title:^45}")
    print("=" * 45)
    print(story)
    print("=" * 45)

    # ── STEP 5: Word statistics ──
    # TODO: Count total characters and words in the story
    char_count = len(story)
    word_count = len(story.split())
    print(f"Story stats: {word_count} words, {char_count} characters")
`,
      solution: `adjective1 = "gigantic"
noun1 = "pizza"
verb1 = "juggling"
place = "Jupiter"
number = "99"
animal = "penguin"
color = "purple"

words = [adjective1, noun1, verb1, place, number, animal, color]

valid = True
for word in words:
    if word.strip() == "":
        print("Error: All fields must be filled in!")
        valid = False
        break

if valid:
    story = f"""In a {adjective1} galaxy far away, a {color} {noun1}
was caught {verb1} with a {animal} on {place}.
"Stop!" yelled the space police. "You can't bring {number}
{animal}s to {place}! That's too {adjective1}!"
But the {noun1} just kept {verb1} all the way home."""

    title = "THE SPACE ADVENTURE"
    print("=" * 45)
    print(f"{title:^45}")
    print("=" * 45)
    print(story)
    print("=" * 45)

    char_count = len(story)
    word_count = len(story.split())
    print(f"Story stats: {word_count} words, {char_count} characters")
`,
      hint: "Use f-strings with {variable} inside triple-quoted strings for multi-line stories.",
      tests: [
        { name: "Title is centered", expected: "THE SPACE ADVENTURE", hint: "f\"{title:^45}\" centers the title" },
        { name: "Story contains the adjective", expected: "gigantic", hint: "The f-string should insert adjective1" },
        { name: "Story contains the place", expected: "Jupiter", hint: "The f-string should insert place" },
        { name: "Word count shown", expected: "words,", hint: "len(story.split()) counts words" },
        { name: "Border line shown", expected: "=============================================", hint: "\"=\" * 45 creates the border" }
      ],
      hints: [
        "Step 2: Use a for loop to check each word: if word.strip() == \"\": means it's empty",
        "Step 3: f\"\"\"...{variable}...\"\"\" creates a multi-line string with variables inserted",
        "Step 5: len(story.split()) counts words, len(story) counts characters"
      ]
    }
  },

  // ══════════════════ PROJECT 2 ══════════════════
  {
    id: "rw02",
    title: "Password Strength Checker",
    difficulty: "beginner",
    order: 50,
    description: "Build a real-world password validator with strength scoring and feedback",
    duration: "12 min",
    content: `Create a **password strength checker** that analyzes passwords and gives actionable feedback!

## What You'll Practice
- **String methods**: \`.isupper()\`, \`.isdigit()\`, \`len()\`
- **Boolean logic**: checking multiple conditions
- **Scoring systems**: accumulating points
- **Loops**: iterating through characters

## Strength Rules
| Rule | Points | Check |
|------|--------|-------|
| 8+ characters | +1 | \`len(pw) >= 8\` |
| 12+ characters | +1 | \`len(pw) >= 12\` |
| Has uppercase | +1 | \`any(c.isupper() for c in pw)\` |
| Has lowercase | +1 | \`any(c.islower() for c in pw)\` |
| Has digit | +1 | \`any(c.isdigit() for c in pw)\` |
| Has special char | +1 | \`any(c in "!@#$%^&*" for c in pw)\` |

## Rating Scale
- 0-2: Weak
- 3-4: Medium
- 5-6: Strong

> **Tip:** \`any()\` returns True if at least one element is True. It's perfect for checking character classes.`,
    codeExample: `# Quick password check demo\ndef quick_check(password):\n    score = 0\n    if len(password) >= 8: score += 1\n    if any(c.isupper() for c in password): score += 1\n    if any(c.isdigit() for c in password): score += 1\n    ratings = {0: "Weak", 1: "Weak", 2: "Medium", 3: "Strong"}\n    print(f"'{password}' -> Score: {score}/3 ({ratings.get(score, 'Strong')})")\n\nquick_check("hello")\nquick_check("Hello123")\nquick_check("MyP@ssw0rd!")`,
    exercise: {
      title: "Build the Password Strength Checker",
      description: "Complete the password checker with scoring, feedback messages, and strength rating.",
      starterCode: `# ══════════════════════════════════════════
# PASSWORD STRENGTH CHECKER
# Analyze passwords and give helpful feedback
# ══════════════════════════════════════════

def check_password(password):
    """Analyze password strength and return score + feedback."""
    score = 0
    feedback = []

    # ── Rule 1: Length checks ──
    # TODO: +1 point if 8+ chars, +1 more if 12+ chars
    # If too short, add feedback message
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Use at least 8 characters")

    if len(password) >= 12:
        score += 1

    # ── Rule 2: Uppercase letter ──
    # TODO: +1 if has uppercase, else add feedback
    # Hint: any(c.isupper() for c in password)
    if any(c.isupper() for c in password):
        score += 1
    else:
        feedback.append("Add an uppercase letter (A-Z)")

    # ── Rule 3: Lowercase letter ──
    # TODO: +1 if has lowercase
    if any(c.islower() for c in password):
        score += 1
    else:
        feedback.append("Add a lowercase letter (a-z)")

    # ── Rule 4: Digit ──
    # TODO: +1 if has at least one digit (0-9)
    if any(c.isdigit() for c in password):
        score += 1
    else:
        feedback.append("Add a number (0-9)")

    # ── Rule 5: Special character ──
    # TODO: +1 if has special char from "!@#$%^&*()-_=+"
    specials = "!@#$%^&*()-_=+"
    if any(c in specials for c in password):
        score += 1
    else:
        feedback.append("Add a special character (!@#$%^&*)")

    # ── Rating ──
    # TODO: Determine rating based on score
    # 0-2 = "WEAK", 3-4 = "MEDIUM", 5-6 = "STRONG"
    if score <= 2:
        rating = "WEAK"
    elif score <= 4:
        rating = "MEDIUM"
    else:
        rating = "STRONG"

    return score, rating, feedback

# ── Test with multiple passwords ──
test_passwords = ["abc", "hello123", "Hello123", "MyP@ssw0rd!", "Th1s!sV3ryStr0ng"]

print("=" * 50)
print(f"{'PASSWORD STRENGTH CHECKER':^50}")
print("=" * 50)

for pw in test_passwords:
    score, rating, tips = check_password(pw)
    print(f"\\nPassword: {pw}")
    print(f"  Score: {score}/6 [{rating}]")
    if tips:
        print(f"  Tips: {', '.join(tips)}")
    else:
        print(f"  Tips: None - great password!")
`,
      solution: `def check_password(password):
    score = 0
    feedback = []

    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Use at least 8 characters")

    if len(password) >= 12:
        score += 1

    if any(c.isupper() for c in password):
        score += 1
    else:
        feedback.append("Add an uppercase letter (A-Z)")

    if any(c.islower() for c in password):
        score += 1
    else:
        feedback.append("Add a lowercase letter (a-z)")

    if any(c.isdigit() for c in password):
        score += 1
    else:
        feedback.append("Add a number (0-9)")

    specials = "!@#$%^&*()-_=+"
    if any(c in specials for c in password):
        score += 1
    else:
        feedback.append("Add a special character (!@#$%^&*)")

    if score <= 2:
        rating = "WEAK"
    elif score <= 4:
        rating = "MEDIUM"
    else:
        rating = "STRONG"

    return score, rating, feedback

test_passwords = ["abc", "hello123", "Hello123", "MyP@ssw0rd!", "Th1s!sV3ryStr0ng"]

print("=" * 50)
print(f"{'PASSWORD STRENGTH CHECKER':^50}")
print("=" * 50)

for pw in test_passwords:
    score, rating, tips = check_password(pw)
    print(f"\\nPassword: {pw}")
    print(f"  Score: {score}/6 [{rating}]")
    if tips:
        print(f"  Tips: {', '.join(tips)}")
    else:
        print(f"  Tips: None - great password!")
`,
      hint: "Use any(c.isupper() for c in password) to check character classes, accumulate score with += 1.",
      tests: [
        { name: "abc is WEAK", expected: "Score: 1/6 [WEAK]", hint: "abc: only lowercase, no length, no digits" },
        { name: "hello123 is MEDIUM", expected: "Score: 3/6 [MEDIUM]", hint: "8+ chars, lowercase, digits = 3 points" },
        { name: "Hello123 is MEDIUM", expected: "Score: 4/6 [MEDIUM]", hint: "8+ chars, upper, lower, digits = 4 points" },
        { name: "Strong password detected", expected: "[STRONG]", hint: "MyP@ssw0rd! has all categories" },
        { name: "Header shown", expected: "PASSWORD STRENGTH CHECKER", hint: "Centered title in header" }
      ],
      hints: [
        "any(c.isupper() for c in password) checks if at least one char is uppercase",
        "Score 0-2 = WEAK, 3-4 = MEDIUM, 5-6 = STRONG",
        "feedback.append('message') adds a tip when a check fails"
      ]
    }
  },

  // ══════════════════ PROJECT 3 ══════════════════
  {
    id: "rw03",
    title: "Shopping Cart & Receipt Printer",
    difficulty: "beginner",
    order: 51,
    description: "Build a complete shopping system with cart, tax calculation, and formatted receipt",
    duration: "15 min",
    content: `Build a **shopping cart** system that tracks items, calculates totals with tax, and prints a professional receipt!

## What You'll Practice
- **Lists of dictionaries** for structured data
- **Functions** for organized code
- **String formatting** for aligned tables
- **Math operations** for tax and totals

## The Design
\`\`\`
CONTEXT: Online shopping cart
DATA: Item name, price, quantity
ACTION: Add items, calculate totals, apply tax & discounts
CONSTRAINT: Prices must be positive, quantity >= 1
OUTPUT: Formatted receipt with aligned columns
\`\`\`

## Key Formatting Tricks
\`\`\`python
# Left-align in 20 chars, right-align price in 8 chars
print(f"{'Coffee':<20} {'$4.99':>8}")
# Output: Coffee               $4.99

# Format price with 2 decimal places
price = 9.5
print(f"\${price:.2f}")  # $9.50
\`\`\`

> **Tip:** Real shopping carts validate everything: positive prices, integer quantities, item limits. Always validate user data!`,
    codeExample: "# Quick receipt demo\nitems = [\n    {\"name\": \"Laptop\", \"price\": 999.99, \"qty\": 1},\n    {\"name\": \"Mouse\", \"price\": 29.99, \"qty\": 2},\n]\n\nprint(f\"{'Item':<15} {'Price':>8} {'Qty':>4} {'Total':>10}\")\nprint(\"-\" * 40)\nfor item in items:\n    total = item[\"price\"] * item[\"qty\"]\n    print(f\"{item['name']:<15} ${item['price']:>7.2f} {item['qty']:>4} ${total:>9.2f}\")\n\ngrand = sum(i[\"price\"] * i[\"qty\"] for i in items)\nprint(\"-\" * 40)\nprint(f\"{'TOTAL':<15} {'':<8} {'':<4} ${grand:>9.2f}\")",
    exercise: {
      title: "Build the Complete Shopping Cart",
      description: "Create a shopping cart with item management, tax calculation, discount logic, and receipt printing.",
      starterCode: `# ══════════════════════════════════════════
# SHOPPING CART & RECEIPT PRINTER
# A complete shopping system with validation
# ══════════════════════════════════════════

TAX_RATE = 0.085       # 8.5% sales tax
DISCOUNT_THRESHOLD = 50  # Discount if subtotal > $50
DISCOUNT_RATE = 0.10     # 10% discount

# ── Cart functions ──

def add_item(cart, name, price, qty):
    """Add an item to the cart with validation."""
    # TODO: Validate price > 0 and qty >= 1
    # If invalid, print error and return without adding
    if price <= 0:
        print(f"Error: Price must be positive (got {price})")
        return
    if qty < 1:
        print(f"Error: Quantity must be at least 1 (got {qty})")
        return

    cart.append({"name": name, "price": price, "qty": qty})
    print(f"  Added: {qty}x {name} @ \${price:.2f} each")

def calculate_totals(cart):
    """Calculate subtotal, discount, tax, and grand total."""
    # TODO: Calculate subtotal (sum of price * qty for each item)
    subtotal = sum(item["price"] * item["qty"] for item in cart)

    # TODO: Apply discount if subtotal > threshold
    discount = 0
    if subtotal > DISCOUNT_THRESHOLD:
        discount = subtotal * DISCOUNT_RATE

    # TODO: Calculate tax on (subtotal - discount)
    taxable = subtotal - discount
    tax = taxable * TAX_RATE

    # TODO: Calculate grand total
    total = taxable + tax

    return subtotal, discount, tax, total

def print_receipt(cart):
    """Print a beautifully formatted receipt."""
    subtotal, discount, tax, total = calculate_totals(cart)

    # TODO: Print receipt header
    print("\\n" + "=" * 44)
    print(f"{'PYMASTER SHOP':^44}")
    print(f"{'Thank you for shopping!':^44}")
    print("=" * 44)

    # TODO: Print column headers
    print(f"{'Item':<18} {'Price':>7} {'Qty':>4} {'Total':>10}")
    print("-" * 44)

    # TODO: Print each item
    for item in cart:
        line_total = item["price"] * item["qty"]
        print(f"{item['name']:<18} \${item['price']:>6.2f} {item['qty']:>4} \${line_total:>9.2f}")

    # TODO: Print totals section
    print("-" * 44)
    print(f"{'Subtotal:':<30} \${subtotal:>9.2f}")

    if discount > 0:
        print(f"{'Discount (10%):':<30} -\${discount:>8.2f}")

    print(f"{'Tax (8.5%):':<30} \${tax:>9.2f}")
    print("=" * 44)
    print(f"{'TOTAL:':<30} \${total:>9.2f}")
    print("=" * 44)

    # TODO: Print item count
    item_count = sum(item["qty"] for item in cart)
    print(f"Items purchased: {item_count}")

# ── Build the cart ──
cart = []
print("Adding items to cart...")
add_item(cart, "Organic Coffee", 12.99, 2)
add_item(cart, "Sourdough Bread", 6.50, 1)
add_item(cart, "Avocado", 2.99, 4)
add_item(cart, "Orange Juice", 4.99, 1)

# Test validation (should show errors)
add_item(cart, "Bad Item", -5.00, 1)
add_item(cart, "Bad Qty", 10.00, 0)

# ── Print the receipt ──
print_receipt(cart)
`,
      solution: `TAX_RATE = 0.085
DISCOUNT_THRESHOLD = 50
DISCOUNT_RATE = 0.10

def add_item(cart, name, price, qty):
    if price <= 0:
        print(f"Error: Price must be positive (got {price})")
        return
    if qty < 1:
        print(f"Error: Quantity must be at least 1 (got {qty})")
        return
    cart.append({"name": name, "price": price, "qty": qty})
    print(f"  Added: {qty}x {name} @ \${price:.2f} each")

def calculate_totals(cart):
    subtotal = sum(item["price"] * item["qty"] for item in cart)
    discount = 0
    if subtotal > DISCOUNT_THRESHOLD:
        discount = subtotal * DISCOUNT_RATE
    taxable = subtotal - discount
    tax = taxable * TAX_RATE
    total = taxable + tax
    return subtotal, discount, tax, total

def print_receipt(cart):
    subtotal, discount, tax, total = calculate_totals(cart)
    print("\\n" + "=" * 44)
    print(f"{'PYMASTER SHOP':^44}")
    print(f"{'Thank you for shopping!':^44}")
    print("=" * 44)
    print(f"{'Item':<18} {'Price':>7} {'Qty':>4} {'Total':>10}")
    print("-" * 44)
    for item in cart:
        line_total = item["price"] * item["qty"]
        print(f"{item['name']:<18} \${item['price']:>6.2f} {item['qty']:>4} \${line_total:>9.2f}")
    print("-" * 44)
    print(f"{'Subtotal:':<30} \${subtotal:>9.2f}")
    if discount > 0:
        print(f"{'Discount (10%):':<30} -\${discount:>8.2f}")
    print(f"{'Tax (8.5%):':<30} \${tax:>9.2f}")
    print("=" * 44)
    print(f"{'TOTAL:':<30} \${total:>9.2f}")
    print("=" * 44)
    item_count = sum(item["qty"] for item in cart)
    print(f"Items purchased: {item_count}")

cart = []
print("Adding items to cart...")
add_item(cart, "Organic Coffee", 12.99, 2)
add_item(cart, "Sourdough Bread", 6.50, 1)
add_item(cart, "Avocado", 2.99, 4)
add_item(cart, "Orange Juice", 4.99, 1)
add_item(cart, "Bad Item", -5.00, 1)
add_item(cart, "Bad Qty", 10.00, 0)
print_receipt(cart)
`,
      hint: "Use list of dicts for cart, sum() with generator for totals, f-strings with :<, :> for alignment.",
      tests: [
        { name: "Coffee added", expected: "Added: 2x Organic Coffee", hint: "add_item appends and prints confirmation" },
        { name: "Negative price rejected", expected: "Error: Price must be positive", hint: "Validate price > 0" },
        { name: "Zero qty rejected", expected: "Error: Quantity must be at least 1", hint: "Validate qty >= 1" },
        { name: "Shop header shown", expected: "PYMASTER SHOP", hint: "Centered header in receipt" },
        { name: "Discount applied", expected: "Discount (10%)", hint: "Subtotal > $50 triggers 10% discount" },
        { name: "Item count shown", expected: "Items purchased: 8", hint: "2+1+4+1 = 8 total items" }
      ],
      hints: [
        "Subtotal: sum(item['price'] * item['qty'] for item in cart)",
        "Discount only applies when subtotal > 50: discount = subtotal * 0.10",
        "Tax is calculated on (subtotal - discount), then total = taxable + tax"
      ]
    }
  },

  // ══════════════════ PROJECT 4 ══════════════════
  {
    id: "rw04",
    title: "Hangman Game with ASCII Art",
    difficulty: "intermediate",
    order: 26,
    description: "Build a complete Hangman game with ASCII art gallows, word tracking, and game state management",
    duration: "18 min",
    content: `Build a full **Hangman game** with ASCII art that progressively reveals the hanged man!

## What You'll Practice
- **Lists and sets** for tracking guesses
- **String manipulation** for word display
- **Multi-line strings** for ASCII art
- **Game loops** with state management
- **Functions** for clean organization

## Game Design
\`\`\`
CONTEXT: Classic word guessing game
DATA: Secret word, guessed letters, remaining lives
ACTION: Guess letters, track correct/wrong, update display
CONSTRAINT: Max 6 wrong guesses, no repeated guesses
OUTPUT: ASCII gallows + word progress + letter tracking
\`\`\`

## ASCII Art Stages
\`\`\`python
HANGMAN_STAGES = [
    "  +---+\\n  |   |\\n      |\\n      |\\n      |\\n=========",  # 0 wrong
    "  +---+\\n  |   |\\n  O   |\\n      |\\n      |\\n=========",  # 1 wrong (head)
    # ... up to 6 wrong (full body)
]
\`\`\`

> **Tip:** Use a list of strings for the hangman stages, indexed by wrong guess count.`,
    codeExample: `# Hangman display demo\nimport random\nrandom.seed(7)\n\nHANGMAN = [\n    "  +---+\\n  |   |\\n      |\\n      |\\n      |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n      |\\n      |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n  |   |\\n      |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n /|   |\\n      |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n      |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n /    |\\n========",\n    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n / \\\\  |\\n========"\n]\n\n# Show progression\nfor i, stage in enumerate(HANGMAN):\n    print(f"--- Wrong guesses: {i} ---")\n    print(stage)\n    print()`,
    exercise: {
      title: "Build the Complete Hangman Game",
      description: "Create a Hangman game with ASCII art, letter tracking, and win/lose detection. Guesses are simulated for the demo.",
      starterCode: `import random
random.seed(42)  # Deterministic for testing

# ── ASCII Art Stages (0 to 6 wrong guesses) ──
HANGMAN = [
    "  +---+\\n  |   |\\n      |\\n      |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n      |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n  |   |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|   |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n /    |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n / \\\\  |\\n========"
]

MAX_WRONG = 6
WORDS = ["python", "hangman", "programming", "developer", "algorithm"]

def get_display_word(word, guessed):
    """Show guessed letters, hide others with underscores."""
    # TODO: For each letter in word, show it if guessed, else show "_"
    return " ".join(letter if letter in guessed else "_" for letter in word)

def play_hangman(word, guesses):
    """Play a game of hangman with simulated guesses."""
    guessed_letters = set()
    wrong_count = 0

    print(f"Word has {len(word)} letters")
    print(HANGMAN[0])
    print(get_display_word(word, guessed_letters))
    print()

    for guess in guesses:
        guess = guess.lower()

        # TODO: Skip if already guessed
        if guess in guessed_letters:
            print(f"Already guessed '{guess}', skipping...")
            continue

        guessed_letters.add(guess)

        # TODO: Check if guess is in the word
        if guess in word:
            print(f"'{guess}' is correct!")
        else:
            wrong_count += 1
            print(f"'{guess}' is wrong! ({wrong_count}/{MAX_WRONG})")

        # Display current state
        print(HANGMAN[wrong_count])
        display = get_display_word(word, guessed_letters)
        print(display)
        print(f"Guessed: {sorted(guessed_letters)}")
        print()

        # TODO: Check win condition (no underscores left)
        if "_" not in display:
            print(f"YOU WIN! The word was '{word}'")
            return True

        # TODO: Check lose condition
        if wrong_count >= MAX_WRONG:
            print(f"GAME OVER! The word was '{word}'")
            return False

    return False

# ── Play the game ──
word = random.choice(WORDS)
# Simulated guesses (in real app: input("Guess a letter: "))
simulated_guesses = list("etaoinsrhldcumfpgwybvkxjqz")
print("=" * 30)
print("    HANGMAN GAME")
print("=" * 30)
result = play_hangman(word, simulated_guesses)
`,
      solution: `import random
random.seed(42)

HANGMAN = [
    "  +---+\\n  |   |\\n      |\\n      |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n      |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n  |   |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|   |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n      |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n /    |\\n========",
    "  +---+\\n  |   |\\n  O   |\\n /|\\\\  |\\n / \\\\  |\\n========"
]

MAX_WRONG = 6
WORDS = ["python", "hangman", "programming", "developer", "algorithm"]

def get_display_word(word, guessed):
    return " ".join(letter if letter in guessed else "_" for letter in word)

def play_hangman(word, guesses):
    guessed_letters = set()
    wrong_count = 0
    print(f"Word has {len(word)} letters")
    print(HANGMAN[0])
    print(get_display_word(word, guessed_letters))
    print()

    for guess in guesses:
        guess = guess.lower()
        if guess in guessed_letters:
            print(f"Already guessed '{guess}', skipping...")
            continue
        guessed_letters.add(guess)
        if guess in word:
            print(f"'{guess}' is correct!")
        else:
            wrong_count += 1
            print(f"'{guess}' is wrong! ({wrong_count}/{MAX_WRONG})")
        print(HANGMAN[wrong_count])
        display = get_display_word(word, guessed_letters)
        print(display)
        print(f"Guessed: {sorted(guessed_letters)}")
        print()
        if "_" not in display:
            print(f"YOU WIN! The word was '{word}'")
            return True
        if wrong_count >= MAX_WRONG:
            print(f"GAME OVER! The word was '{word}'")
            return False
    return False

word = random.choice(WORDS)
simulated_guesses = list("etaoinsrhldcumfpgwybvkxjqz")
print("=" * 30)
print("    HANGMAN GAME")
print("=" * 30)
result = play_hangman(word, simulated_guesses)
`,
      hint: "Use a set for guessed letters, check 'in' for membership, count wrong guesses for hangman stage.",
      tests: [
        { name: "Game header shown", expected: "HANGMAN GAME", hint: "Print the title" },
        { name: "Word length shown", expected: "letters", hint: "print(f\"Word has {len(word)} letters\")" },
        { name: "Correct guess detected", expected: "is correct!", hint: "Check if guess is in word" },
        { name: "Wrong guess counted", expected: "is wrong!", hint: "Increment wrong_count when guess not in word" },
        { name: "Game ends", expected: "word was", hint: "Either YOU WIN or GAME OVER reveals the word" }
      ],
      hints: [
        "get_display_word: ' '.join(letter if letter in guessed else '_' for letter in word)",
        "Win check: if '_' not in display means all letters are revealed",
        "Use a set() for guessed_letters - sets prevent duplicates automatically"
      ]
    }
  },

  // ══════════════════ PROJECT 5 ══════════════════
  {
    id: "rw05",
    title: "Coffee Shop Order System",
    difficulty: "intermediate",
    order: 27,
    description: "Build an OOP-based coffee shop with menu, orders, customizations, and receipt",
    duration: "18 min",
    content: `Build a **Coffee Shop ordering system** using Object-Oriented Programming!

## What You'll Practice
- **Classes and objects** for menu items and orders
- **Dictionaries** for menu data
- **Methods** for business logic
- **String formatting** for receipts
- **Validation** for order limits and valid items

## The Design
\`\`\`
CONTEXT: Coffee shop POS system
DATA: Menu items (name, sizes, prices), orders, customizations
ACTION: Browse menu, add items, customize, calculate total
CONSTRAINT: Max 10 items per order, valid menu items only
OUTPUT: Itemized receipt with totals and order number
\`\`\`

> **Tip:** Using classes makes the code organized. A \`MenuItem\` knows its price, an \`Order\` knows its items. Each object handles its own data.`,
    codeExample: `# Quick OOP order demo\nclass Drink:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __str__(self):\n        return f"{self.name}: \${self.price:.2f}"\n\nmenu = [Drink("Latte", 4.50), Drink("Espresso", 3.00)]\nfor d in menu:\n    print(d)`,
    exercise: {
      title: "Build the Coffee Shop System",
      description: "Create a complete coffee shop with OOP: menu, orders, customizations, and formatted receipt.",
      starterCode: `# ══════════════════════════════════════════
# COFFEE SHOP ORDER SYSTEM (OOP)
# ══════════════════════════════════════════

class MenuItem:
    """Represents a drink on the menu with size options."""
    def __init__(self, name, prices):
        # prices is a dict: {"small": 3.50, "medium": 4.50, "large": 5.50}
        self.name = name
        self.prices = prices

    def get_price(self, size):
        """Return price for given size, or None if invalid."""
        return self.prices.get(size)

    def __str__(self):
        sizes = " | ".join(f"{s}: \${p:.2f}" for s, p in self.prices.items())
        return f"{self.name} ({sizes})"

class Order:
    """Represents a customer order."""
    MAX_ITEMS = 10

    def __init__(self, customer_name):
        self.customer_name = customer_name
        self.items = []  # list of {"name", "size", "price", "extras"}
        self.order_number = id(self) % 10000

    def add_item(self, menu_item, size, extras=None):
        """Add an item to the order with validation."""
        # TODO: Check if order is full (MAX_ITEMS)
        if len(self.items) >= self.MAX_ITEMS:
            print(f"Error: Max {self.MAX_ITEMS} items per order!")
            return False

        # TODO: Validate size exists for this menu item
        price = menu_item.get_price(size)
        if price is None:
            print(f"Error: '{size}' is not a valid size for {menu_item.name}")
            return False

        # TODO: Calculate extra cost ($0.50 per extra)
        extra_cost = len(extras) * 0.50 if extras else 0

        self.items.append({
            "name": menu_item.name,
            "size": size,
            "price": price + extra_cost,
            "extras": extras or []
        })
        print(f"  Added: {size} {menu_item.name}" + (f" + {', '.join(extras)}" if extras else ""))
        return True

    def get_total(self):
        """Calculate order total."""
        return sum(item["price"] for item in self.items)

    def print_receipt(self):
        """Print formatted receipt."""
        # TODO: Print receipt with header, items, and total
        print("\\n" + "=" * 40)
        print(f"{'PYMASTER COFFEE':^40}")
        print(f"Order #{self.order_number} for {self.customer_name}")
        print("=" * 40)

        for i, item in enumerate(self.items, 1):
            extras_str = f" (+{', '.join(item['extras'])})" if item['extras'] else ""
            print(f"  {i}. {item['size'].title()} {item['name']}{extras_str}")
            print(f"     \${item['price']:.2f}")

        print("-" * 40)
        total = self.get_total()
        tax = total * 0.08
        print(f"  {'Subtotal:':<25} \${total:.2f}")
        print(f"  {'Tax (8%):':<25} \${tax:.2f}")
        print(f"  {'TOTAL:':<25} \${total + tax:.2f}")
        print("=" * 40)
        print(f"  Items: {len(self.items)}")

# ── Build the menu ──
menu = {
    "latte": MenuItem("Latte", {"small": 3.50, "medium": 4.50, "large": 5.50}),
    "espresso": MenuItem("Espresso", {"small": 2.50, "medium": 3.50, "large": 4.50}),
    "mocha": MenuItem("Mocha", {"small": 4.00, "medium": 5.00, "large": 6.00}),
    "tea": MenuItem("Green Tea", {"small": 2.00, "medium": 3.00, "large": 3.50}),
}

# ── Display menu ──
print("=" * 40)
print(f"{'MENU':^40}")
print("=" * 40)
for key, item in menu.items():
    print(f"  {item}")

# ── Create an order ──
order = Order("Alice")
print("\\nPlacing order...")
order.add_item(menu["latte"], "large", ["oat milk", "vanilla"])
order.add_item(menu["espresso"], "small")
order.add_item(menu["mocha"], "medium", ["whipped cream"])
order.add_item(menu["tea"], "large")

# Test validation
order.add_item(menu["latte"], "huge")  # Invalid size

# ── Print receipt ──
order.print_receipt()
`,
      solution: `class MenuItem:
    def __init__(self, name, prices):
        self.name = name
        self.prices = prices
    def get_price(self, size):
        return self.prices.get(size)
    def __str__(self):
        sizes = " | ".join(f"{s}: \${p:.2f}" for s, p in self.prices.items())
        return f"{self.name} ({sizes})"

class Order:
    MAX_ITEMS = 10
    def __init__(self, customer_name):
        self.customer_name = customer_name
        self.items = []
        self.order_number = id(self) % 10000
    def add_item(self, menu_item, size, extras=None):
        if len(self.items) >= self.MAX_ITEMS:
            print(f"Error: Max {self.MAX_ITEMS} items per order!")
            return False
        price = menu_item.get_price(size)
        if price is None:
            print(f"Error: '{size}' is not a valid size for {menu_item.name}")
            return False
        extra_cost = len(extras) * 0.50 if extras else 0
        self.items.append({"name": menu_item.name, "size": size, "price": price + extra_cost, "extras": extras or []})
        print(f"  Added: {size} {menu_item.name}" + (f" + {', '.join(extras)}" if extras else ""))
        return True
    def get_total(self):
        return sum(item["price"] for item in self.items)
    def print_receipt(self):
        print("\\n" + "=" * 40)
        print(f"{'PYMASTER COFFEE':^40}")
        print(f"Order #{self.order_number} for {self.customer_name}")
        print("=" * 40)
        for i, item in enumerate(self.items, 1):
            extras_str = f" (+{', '.join(item['extras'])})" if item['extras'] else ""
            print(f"  {i}. {item['size'].title()} {item['name']}{extras_str}")
            print(f"     \${item['price']:.2f}")
        print("-" * 40)
        total = self.get_total()
        tax = total * 0.08
        print(f"  {'Subtotal:':<25} \${total:.2f}")
        print(f"  {'Tax (8%):':<25} \${tax:.2f}")
        print(f"  {'TOTAL:':<25} \${total + tax:.2f}")
        print("=" * 40)
        print(f"  Items: {len(self.items)}")

menu = {
    "latte": MenuItem("Latte", {"small": 3.50, "medium": 4.50, "large": 5.50}),
    "espresso": MenuItem("Espresso", {"small": 2.50, "medium": 3.50, "large": 4.50}),
    "mocha": MenuItem("Mocha", {"small": 4.00, "medium": 5.00, "large": 6.00}),
    "tea": MenuItem("Green Tea", {"small": 2.00, "medium": 3.00, "large": 3.50}),
}

print("=" * 40)
print(f"{'MENU':^40}")
print("=" * 40)
for key, item in menu.items():
    print(f"  {item}")

order = Order("Alice")
print("\\nPlacing order...")
order.add_item(menu["latte"], "large", ["oat milk", "vanilla"])
order.add_item(menu["espresso"], "small")
order.add_item(menu["mocha"], "medium", ["whipped cream"])
order.add_item(menu["tea"], "large")
order.add_item(menu["latte"], "huge")
order.print_receipt()
`,
      hint: "Use classes for MenuItem and Order. Validate sizes with dict.get(), track extras cost at $0.50 each.",
      tests: [
        { name: "Menu displayed", expected: "MENU", hint: "Print centered MENU header" },
        { name: "Latte added with extras", expected: "Added: large Latte + oat milk, vanilla", hint: "Show size, name, and extras" },
        { name: "Invalid size rejected", expected: "is not a valid size", hint: "menu_item.get_price('huge') returns None" },
        { name: "Receipt header", expected: "PYMASTER COFFEE", hint: "Centered shop name" },
        { name: "Item count shown", expected: "Items: 4", hint: "4 valid items were added" }
      ],
      hints: [
        "MenuItem stores prices as dict: {'small': 3.50, 'medium': 4.50, 'large': 5.50}",
        "Order.add_item validates size with get_price() - returns None for invalid sizes",
        "Extra cost = len(extras) * 0.50, added to the base price"
      ]
    }
  },

  // ══════════════════ PROJECT 6 ══════════════════
  {
    id: "rw06",
    title: "Text Adventure Game Engine",
    difficulty: "intermediate",
    order: 28,
    description: "Build a choose-your-own-adventure game using dictionaries as a state machine",
    duration: "18 min",
    content: `Build a **text adventure game** where choices lead to different outcomes!

## What You'll Practice
- **Nested dictionaries** for game rooms/scenes
- **State machines** (current room → choices → next room)
- **Game loops** with win/lose conditions
- **Functions** for clean game logic

## Game Design Pattern
\`\`\`python
# Each room is a dictionary with description and choices
rooms = {
    "start": {
        "text": "You stand at a crossroads...",
        "choices": {
            "left": "forest",
            "right": "cave"
        }
    },
    "forest": { ... },
    "cave": { ... }
}
\`\`\`

> **Tip:** This pattern (state machine) is used in real game development, chatbots, and workflow systems.`,
    codeExample: `# Mini adventure demo\nrooms = {\n    "start": {"text": "A crossroads. Go left or right?", "choices": {"left": "forest", "right": "cave"}},\n    "forest": {"text": "A peaceful forest. You found treasure!", "choices": {}},\n    "cave": {"text": "A dark cave. A dragon appears!", "choices": {}}\n}\n\nroom = "start"\npath = ["right"]  # simulated choices\nfor choice in path:\n    print(f"[{room}] {rooms[room]['text']}")\n    room = rooms[room]["choices"].get(choice, room)\nprint(f"[{room}] {rooms[room]['text']}")`,
    exercise: {
      title: "Build the Adventure Game",
      description: "Create a text adventure with multiple rooms, choices, items, and win/lose outcomes.",
      starterCode: `# ══════════════════════════════════════════
# TEXT ADVENTURE: THE LOST TEMPLE
# A choose-your-own-adventure game engine
# ══════════════════════════════════════════

# ── Game world: rooms with descriptions, choices, and effects ──
rooms = {
    "entrance": {
        "text": "You stand before an ancient temple. A heavy door is ajar.",
        "choices": {"enter": "hall", "leave": "escape"},
    },
    "hall": {
        "text": "A grand hall with two corridors. Left is dark, right glows faintly.",
        "choices": {"left": "trap", "right": "treasure_room"},
    },
    "trap": {
        "text": "The floor collapses! You fall into a pit.",
        "choices": {"climb": "hall", "dig": "secret"},
    },
    "secret": {
        "text": "You dig through rubble and find a hidden passage with a golden key!",
        "item": "golden_key",
        "choices": {"continue": "treasure_room"},
    },
    "treasure_room": {
        "text": "A locked chest sits on a pedestal. It needs a golden key.",
        "choices": {"open": "victory", "leave": "hall"},
        "requires": "golden_key",
    },
    "victory": {
        "text": "The chest opens! Ancient jewels glitter. You're rich!",
        "choices": {},
        "win": True,
    },
    "escape": {
        "text": "You walk away from the temple. Perhaps another day...",
        "choices": {},
        "lose": True,
    },
}

def play_game(rooms, choices):
    """Play the adventure with a list of simulated choices."""
    current = "entrance"
    inventory = []
    steps = 0

    print("=" * 45)
    print(f"{'THE LOST TEMPLE':^45}")
    print(f"{'A Text Adventure':^45}")
    print("=" * 45)

    for choice in choices:
        room = rooms[current]
        steps += 1

        # TODO: Print current room description
        print(f"\\n[Room: {current}]")
        print(room["text"])

        # TODO: Pick up items if room has one
        if "item" in room and room["item"] not in inventory:
            inventory.append(room["item"])
            print(f"  >> You picked up: {room['item']}")

        # TODO: Check win/lose
        if room.get("win"):
            print(f"\\nYOU WIN in {steps} steps!")
            print(f"Inventory: {inventory}")
            return True
        if room.get("lose"):
            print(f"\\nGAME OVER after {steps} steps.")
            return False

        # TODO: Show available choices
        if room["choices"]:
            print(f"  Choices: {list(room['choices'].keys())}")

        # TODO: Check if room requires an item
        next_room = room["choices"].get(choice)
        if next_room and "requires" in rooms.get(next_room, {}):
            required = rooms[next_room]["requires"]
            if required not in inventory:
                print(f"  >> The path requires '{required}' which you don't have!")
                continue

        # TODO: Move to next room
        if next_room:
            print(f"  > You chose: {choice}")
            current = next_room
        else:
            print(f"  > Invalid choice: {choice}")

    # Print final room if game didn't end
    room = rooms[current]
    print(f"\\n[Room: {current}]")
    print(room["text"])
    if room.get("win"):
        print(f"\\nYOU WIN in {steps} steps!")
        return True
    if room.get("lose"):
        print(f"\\nGAME OVER after {steps} steps.")
        return False
    return False

# ── Play with simulated choices ──
# Path: enter → go left (trap) → dig (find key) → continue → open chest (win!)
player_choices = ["enter", "left", "dig", "continue", "open"]
play_game(rooms, player_choices)
`,
      solution: `rooms = {
    "entrance": {
        "text": "You stand before an ancient temple. A heavy door is ajar.",
        "choices": {"enter": "hall", "leave": "escape"},
    },
    "hall": {
        "text": "A grand hall with two corridors. Left is dark, right glows faintly.",
        "choices": {"left": "trap", "right": "treasure_room"},
    },
    "trap": {
        "text": "The floor collapses! You fall into a pit.",
        "choices": {"climb": "hall", "dig": "secret"},
    },
    "secret": {
        "text": "You dig through rubble and find a hidden passage with a golden key!",
        "item": "golden_key",
        "choices": {"continue": "treasure_room"},
    },
    "treasure_room": {
        "text": "A locked chest sits on a pedestal. It needs a golden key.",
        "choices": {"open": "victory", "leave": "hall"},
        "requires": "golden_key",
    },
    "victory": {
        "text": "The chest opens! Ancient jewels glitter. You're rich!",
        "choices": {},
        "win": True,
    },
    "escape": {
        "text": "You walk away from the temple. Perhaps another day...",
        "choices": {},
        "lose": True,
    },
}

def play_game(rooms, choices):
    current = "entrance"
    inventory = []
    steps = 0
    print("=" * 45)
    print(f"{'THE LOST TEMPLE':^45}")
    print(f"{'A Text Adventure':^45}")
    print("=" * 45)
    for choice in choices:
        room = rooms[current]
        steps += 1
        print(f"\\n[Room: {current}]")
        print(room["text"])
        if "item" in room and room["item"] not in inventory:
            inventory.append(room["item"])
            print(f"  >> You picked up: {room['item']}")
        if room.get("win"):
            print(f"\\nYOU WIN in {steps} steps!")
            print(f"Inventory: {inventory}")
            return True
        if room.get("lose"):
            print(f"\\nGAME OVER after {steps} steps.")
            return False
        if room["choices"]:
            print(f"  Choices: {list(room['choices'].keys())}")
        next_room = room["choices"].get(choice)
        if next_room and "requires" in rooms.get(next_room, {}):
            required = rooms[next_room]["requires"]
            if required not in inventory:
                print(f"  >> The path requires '{required}' which you don't have!")
                continue
        if next_room:
            print(f"  > You chose: {choice}")
            current = next_room
        else:
            print(f"  > Invalid choice: {choice}")
    room = rooms[current]
    print(f"\\n[Room: {current}]")
    print(room["text"])
    if room.get("win"):
        print(f"\\nYOU WIN in {steps} steps!")
        return True
    if room.get("lose"):
        print(f"\\nGAME OVER after {steps} steps.")
        return False
    return False

player_choices = ["enter", "left", "dig", "continue", "open"]
play_game(rooms, player_choices)
`,
      hint: "Rooms are dicts with 'text', 'choices', optional 'item'/'requires'/'win'/'lose'. Navigate with choices.get().",
      tests: [
        { name: "Game title shown", expected: "THE LOST TEMPLE", hint: "Centered title" },
        { name: "Entrance room shown", expected: "ancient temple", hint: "First room description" },
        { name: "Key picked up", expected: "picked up: golden_key", hint: "Secret room has item: golden_key" },
        { name: "Player wins", expected: "YOU WIN", hint: "Victory room has win: True" },
        { name: "Choices displayed", expected: "Choices:", hint: "Show available choices for each room" }
      ],
      hints: [
        "Navigate: current = room['choices'].get(choice) moves to the next room",
        "Items: if 'item' in room: inventory.append(room['item'])",
        "Requirements: check if rooms[next_room] has 'requires' and if it's in inventory"
      ]
    }
  }
]
