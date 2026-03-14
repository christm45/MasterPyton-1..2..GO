// ============================================================
// QUIZZES for Beginner Guided Exercises (bx01-bx15)
// Each quiz tests the concepts taught in the matching exercise
// ============================================================

export const beginnerExercisesQuizzes = [
  {
    id: "qbx01", lessonId: "bx01", title: "Variables Basics Quiz", difficulty: "beginner",
    questions: [
      { question: "What does the = sign do in Python?", options: ["Assigns a value to a variable", "Checks if two things are equal", "Creates a function", "Prints output"], correct: 0, explanation: "In Python, = is the assignment operator. It puts a value into a variable. To CHECK equality, use == (two equal signs)." },
      { question: "Which is a valid variable name?", options: ["my_age", "2fast", "my-name", "class"], correct: 0, explanation: "Variable names can have letters, numbers, and underscores, but cannot start with a number, contain dashes, or use reserved words like 'class'." },
      { question: "What does print(f\"Hello {name}\") do?", options: ["Prints Hello followed by the value of name", "Prints Hello {name} literally", "Causes an error", "Prints just the variable name"], correct: 0, explanation: "F-strings (with f before the quotes) replace {variable_name} with the actual value stored in that variable." },
      { question: "What happens when you write: x = 5, then x = 10?", options: ["x becomes 10, the old value 5 is lost", "x becomes 15", "An error occurs", "x stays 5"], correct: 0, explanation: "When you assign a new value to an existing variable, the old value is replaced. x = 5 then x = 10 means x is now 10." },
      { question: "What is the value of total after: price = 3, qty = 4, total = price * qty?", options: ["12", "34", "7", "Error"], correct: 0, explanation: "price * qty = 3 * 4 = 12. The * operator multiplies the values stored in the variables." },
      { question: "Which of these will cause an error?", options: ["123abc = 5", "abc123 = 5", "_hidden = 5", "myVar = 5"], correct: 0, explanation: "Variable names cannot start with a number. 123abc starts with digits, so Python will raise a SyntaxError." },
      { question: "What type of value is stored in: name = \"Alice\"?", options: ["String (str)", "Integer (int)", "Float", "Boolean"], correct: 0, explanation: "Text in quotes (single or double) is a string. \"Alice\" is a string value. Numbers without quotes are int or float." },
      { question: "What does x = x + 1 do?", options: ["Takes the current value of x, adds 1, and stores the result back in x", "Checks if x equals x + 1", "Creates two variables", "Nothing, it's invalid"], correct: 0, explanation: "Python evaluates the RIGHT side first: takes current x value, adds 1. Then assigns the result to x. If x was 5, it becomes 6." }
    ]
  },
  {
    id: "qbx02", lessonId: "bx02", title: "Print Function Quiz", difficulty: "beginner",
    questions: [
      { question: "What does print(\"*\" * 5) output?", options: ["*****", "* * * * *", "\"*\" * 5", "Error"], correct: 0, explanation: "The * operator with a string and a number repeats the string. \"*\" * 5 creates \"*****\" (5 asterisks with no spaces)." },
      { question: "What does print(\"A\", \"B\", \"C\", sep=\"-\") output?", options: ["A-B-C", "A B C", "ABC", "A, B, C"], correct: 0, explanation: "The sep= parameter changes the separator between print arguments. Default is a space, but sep=\"-\" puts dashes between items." },
      { question: "How do you print a variable's value inside text?", options: ["Use an f-string: f\"text {variable}\"", "Use: print(\"text\" variable)", "Use: print(text + variable)", "Use: print(\"text {variable}\")"], correct: 0, explanation: "F-strings (with f before the quotes) are the easiest way. Put the variable name in {curly braces} and Python replaces it with the value." },
      { question: "What does print(\"Hi\", end=\"\") do differently?", options: ["Doesn't add a newline at the end", "Prints 'end' after Hi", "Stops the program", "Prints nothing"], correct: 0, explanation: "By default, print() adds a newline (\\n) at the end. end=\"\" replaces that with nothing, so the next print continues on the same line." },
      { question: "What is the output of: print(3 + 4)?", options: ["7", "3 + 4", "34", "Error"], correct: 0, explanation: "print() evaluates the expression first. 3 + 4 = 7, then it prints 7. Without quotes around 3 + 4, Python treats them as numbers." },
      { question: "What does print(\"Hello\" + \" \" + \"World\") output?", options: ["Hello World", "Hello + World", "HelloWorld", "Error"], correct: 0, explanation: "The + operator concatenates (joins) strings together. \"Hello\" + \" \" + \"World\" becomes \"Hello World\"." },
      { question: "Which prints the number with 2 decimal places?", options: ["print(f\"{3.14159:.2f}\")", "print(f\"{3.14159:2}\")", "print(round(3.14159))", "print(f\"{3.14159:.2}\")"], correct: 0, explanation: ":.2f means format as a float (f) with 2 decimal places. This rounds and displays 3.14." },
      { question: "What does print() with no arguments do?", options: ["Prints a blank line", "Causes an error", "Prints 'None'", "Does nothing"], correct: 0, explanation: "print() with no arguments prints an empty line. This is useful for adding spacing between sections of output." }
    ]
  },
  {
    id: "qbx03", lessonId: "bx03", title: "Math Operators Quiz", difficulty: "beginner",
    questions: [
      { question: "What is the result of 15 / 4 in Python?", options: ["3.75", "3", "4", "3.7"], correct: 0, explanation: "The / operator in Python 3 ALWAYS returns a float (decimal number). 15 / 4 = 3.75. Use // for integer division (which gives 3)." },
      { question: "What is 15 // 4?", options: ["3", "3.75", "4", "3.0"], correct: 0, explanation: "// is floor division: it divides and rounds DOWN to the nearest whole number. 15 / 4 = 3.75, rounded down = 3." },
      { question: "What is 15 % 4?", options: ["3", "3.75", "4", "0"], correct: 0, explanation: "% (modulus) gives the REMAINDER after division. 15 = 4 * 3 + 3. The remainder is 3." },
      { question: "What is 2 ** 5?", options: ["32", "10", "25", "7"], correct: 0, explanation: "** is the exponent (power) operator. 2 ** 5 = 2 * 2 * 2 * 2 * 2 = 32." },
      { question: "What does (2 + 3) * 4 equal?", options: ["20", "14", "24", "9"], correct: 0, explanation: "Parentheses are evaluated first: 2 + 3 = 5. Then 5 * 4 = 20. Without parentheses, 2 + 3 * 4 = 2 + 12 = 14." },
      { question: "What is the result of: price = 10; tax = price * 0.20?", options: ["tax is 2.0", "tax is 20", "tax is 0.20", "Error"], correct: 0, explanation: "10 * 0.20 = 2.0. The * operator multiplies the number by the decimal. 20% of 10 is 2." },
      { question: "How do you calculate the square root of 16 in Python?", options: ["import math; math.sqrt(16)", "sqrt(16)", "16 ** 0.5 or math.sqrt(16)", "root(16)"], correct: 2, explanation: "Both work! 16 ** 0.5 uses the exponent operator (raising to power 0.5 = square root). math.sqrt(16) uses the math module. Both give 4.0." },
      { question: "What does round(3.7) return?", options: ["4", "3", "3.7", "4.0"], correct: 0, explanation: "round() rounds to the nearest integer. 3.7 rounds up to 4. Note: round(3.5) gives 4, but round(2.5) gives 2 (Python uses banker's rounding)." }
    ]
  },
  {
    id: "qbx04", lessonId: "bx04", title: "Booleans Quiz", difficulty: "beginner",
    questions: [
      { question: "What are the only two values a boolean can be?", options: ["True and False", "Yes and No", "1 and 0", "On and Off"], correct: 0, explanation: "In Python, booleans are True and False (capitalized). While True==1 and False==0 internally, the boolean type uses True/False." },
      { question: "What does 5 > 3 evaluate to?", options: ["True", "False", "5", "Error"], correct: 0, explanation: "The > operator compares two values. 5 is greater than 3, so the result is True." },
      { question: "What is the result of: True and False?", options: ["False", "True", "Error", "None"], correct: 0, explanation: "The 'and' operator requires BOTH sides to be True. True and False = False. Only True and True = True." },
      { question: "What is the result of: True or False?", options: ["True", "False", "Error", "None"], correct: 0, explanation: "The 'or' operator requires at least ONE side to be True. True or False = True. Only False or False = False." },
      { question: "What does 'not True' evaluate to?", options: ["False", "True", "Error", "None"], correct: 0, explanation: "The 'not' operator flips the boolean value. not True = False, not False = True." },
      { question: "What is the difference between = and ==?", options: ["= assigns a value, == checks equality", "They are the same", "= checks equality, == assigns a value", "== is used for math"], correct: 0, explanation: "= is assignment (put value in variable). == is comparison (check if two things are equal). x = 5 stores 5. x == 5 checks if x is 5." },
      { question: "What does bool(0) return?", options: ["False", "True", "0", "Error"], correct: 0, explanation: "In Python, 0, empty string '', empty list [], and None are all 'falsy' - they evaluate to False. Any non-zero number is 'truthy'." },
      { question: "What is the result of: age = 20; age >= 18 and age <= 65?", options: ["True", "False", "20", "Error"], correct: 0, explanation: "20 >= 18 is True. 20 <= 65 is True. True and True = True. This checks if age is between 18 and 65." }
    ]
  },
  {
    id: "qbx05", lessonId: "bx05", title: "If/Else Quiz", difficulty: "beginner",
    questions: [
      { question: "What is required after the 'if' condition in Python?", options: ["A colon (:)", "A semicolon (;)", "Curly braces {}", "Parentheses ()"], correct: 0, explanation: "Python uses a colon : after the condition, then the indented block below is the code that runs if the condition is True." },
      { question: "How does Python know which code is inside an if block?", options: ["By indentation (4 spaces)", "By curly braces {}", "By the 'end' keyword", "By semicolons"], correct: 0, explanation: "Python uses indentation (typically 4 spaces) to define code blocks. All lines indented under 'if:' belong to that if block." },
      { question: "What does 'elif' mean?", options: ["else if (another condition to check)", "else finally", "element if", "error if"], correct: 0, explanation: "elif is short for 'else if'. It checks another condition if the previous if/elif was False." },
      { question: "How many elif blocks can you have?", options: ["As many as you need", "Only 1", "Only 2", "Maximum 5"], correct: 0, explanation: "You can chain as many elif blocks as needed. Python checks them in order and runs the first one that is True." },
      { question: "When does the 'else' block run?", options: ["When ALL if/elif conditions are False", "Always", "When the if condition is True", "Never"], correct: 0, explanation: "The else block is the 'catch-all'. It runs only when none of the if/elif conditions above it were True." },
      { question: "What prints? if 5 > 10: print(\"A\") else: print(\"B\")", options: ["B", "A", "Both A and B", "Nothing"], correct: 0, explanation: "5 > 10 is False, so the if block is skipped. The else block runs and prints \"B\"." },
      { question: "Can you have an if without an else?", options: ["Yes, else is optional", "No, else is required", "Only with elif", "Only in functions"], correct: 0, explanation: "The else block is completely optional. You can have just 'if' by itself. The code inside runs if True, and nothing happens if False." },
      { question: "What is a ternary expression in Python?", options: ["value_if_true if condition else value_if_false", "condition ? true : false", "if(condition, true, false)", "switch(condition)"], correct: 0, explanation: "Python's ternary: x = 'yes' if condition else 'no'. It's a one-line if/else that returns a value." }
    ]
  },
  {
    id: "qbx06", lessonId: "bx06", title: "Lists Basics Quiz", difficulty: "beginner",
    questions: [
      { question: "What index is the FIRST item in a Python list?", options: ["0", "1", "-1", "First"], correct: 0, explanation: "Python uses zero-based indexing. The first item is at index 0, second at index 1, etc. This is true for lists and strings." },
      { question: "What does my_list[-1] give you?", options: ["The last item", "The first item", "An error", "Nothing"], correct: 0, explanation: "Negative indexing counts from the end. -1 is the last item, -2 is second-to-last, etc." },
      { question: "What does .append() do?", options: ["Adds an item to the END of the list", "Adds to the beginning", "Removes an item", "Sorts the list"], correct: 0, explanation: "append() always adds to the END of the list. Use insert(0, item) to add to the beginning." },
      { question: "What does .remove() do?", options: ["Removes the first occurrence of a value", "Removes the last item", "Removes all items", "Removes by index"], correct: 0, explanation: "remove() finds and removes the FIRST occurrence of a value. To remove by index, use pop(index) or del list[index]." },
      { question: "What does len([1, 2, 3, 4]) return?", options: ["4", "3", "10", "Error"], correct: 0, explanation: "len() returns the number of items in the list. This list has 4 items, so len() returns 4." },
      { question: "Can a list contain different types?", options: ["Yes, lists can mix types", "No, all items must be the same type", "Only numbers and strings", "Only with special syntax"], correct: 0, explanation: "Python lists can hold any mix of types: [1, \"hello\", True, 3.14]. Each item can be a different type." },
      { question: "What is the difference between .sort() and sorted()?", options: [".sort() changes the original list, sorted() returns a new list", "They are the same", ".sort() returns a new list, sorted() changes the original", ".sort() is for numbers, sorted() is for strings"], correct: 0, explanation: ".sort() modifies the list in place (changes the original). sorted() creates and returns a NEW sorted list, leaving the original unchanged." },
      { question: "What does [1, 2] + [3, 4] produce?", options: ["[1, 2, 3, 4]", "[4, 6]", "Error", "10"], correct: 0, explanation: "The + operator concatenates (joins) lists. [1, 2] + [3, 4] creates a new list [1, 2, 3, 4]." }
    ]
  },
  {
    id: "qbx07", lessonId: "bx07", title: "For Loops Quiz", difficulty: "beginner",
    questions: [
      { question: "What does range(5) produce?", options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "1, 2, 3, 4"], correct: 0, explanation: "range(5) produces 5 numbers starting from 0: 0, 1, 2, 3, 4. It stops BEFORE reaching 5." },
      { question: "What does range(2, 6) produce?", options: ["2, 3, 4, 5", "2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "2, 6"], correct: 0, explanation: "range(start, stop) goes from start up to but NOT including stop. range(2, 6) gives 2, 3, 4, 5." },
      { question: "What does range(0, 10, 2) produce?", options: ["0, 2, 4, 6, 8", "0, 2, 4, 6, 8, 10", "2, 4, 6, 8", "0, 10, 2"], correct: 0, explanation: "range(start, stop, step) counts by step. range(0, 10, 2) counts by 2: 0, 2, 4, 6, 8. Stops before 10." },
      { question: "What does 'break' do in a loop?", options: ["Immediately exits the loop", "Skips the current iteration", "Pauses the loop", "Restarts the loop"], correct: 0, explanation: "break immediately stops the loop and continues with the code after the loop." },
      { question: "What does 'continue' do in a loop?", options: ["Skips to the next iteration", "Exits the loop", "Pauses the loop", "Breaks the program"], correct: 0, explanation: "continue skips the rest of the current iteration and goes to the next one. The loop doesn't stop, it just skips ahead." },
      { question: "What does enumerate() do?", options: ["Gives both the index and the value", "Counts the items", "Sorts the items", "Reverses the list"], correct: 0, explanation: "enumerate(list) gives pairs of (index, value). for i, item in enumerate(['a','b']): gives (0,'a'), (1,'b')." },
      { question: "How do you count backwards from 5 to 1?", options: ["range(5, 0, -1)", "range(5, 1)", "range(1, 5, -1)", "range(5, 1, 1)"], correct: 0, explanation: "range(5, 0, -1) starts at 5, stops before 0, steps by -1: gives 5, 4, 3, 2, 1." },
      { question: "What prints? for i in range(3): print(i)", options: ["0, 1, 2 (each on new line)", "1, 2, 3", "0, 1, 2, 3", "3, 2, 1"], correct: 0, explanation: "range(3) gives 0, 1, 2. The loop prints each on a new line. Remember, range starts at 0 by default." }
    ]
  },
  {
    id: "qbx08", lessonId: "bx08", title: "String Slicing Quiz", difficulty: "beginner",
    questions: [
      { question: "For text = \"Python\", what is text[0]?", options: ["P", "y", "Python", "Error"], correct: 0, explanation: "Strings are indexed starting at 0. text[0] gives the FIRST character, which is 'P'." },
      { question: "For text = \"Python\", what is text[-1]?", options: ["n", "P", "o", "Error"], correct: 0, explanation: "Negative indexing: -1 is the last character. 'Python'[-1] = 'n'." },
      { question: "For text = \"Python\", what is text[0:3]?", options: ["Pyt", "Pyth", "Py", "Python"], correct: 0, explanation: "Slicing [0:3] gets characters at indices 0, 1, 2 (stops BEFORE 3). 'P' + 'y' + 't' = 'Pyt'." },
      { question: "What does text[:4] mean?", options: ["From the start to index 3", "From index 4 to the end", "The 4th character", "Last 4 characters"], correct: 0, explanation: "[:4] means 'from the beginning up to (not including) index 4'. Same as [0:4]." },
      { question: "What does text[3:] mean?", options: ["From index 3 to the end", "First 3 characters", "Last 3 characters", "The 3rd character"], correct: 0, explanation: "[3:] means 'from index 3 all the way to the end of the string'." },
      { question: "How do you reverse a string?", options: ["text[::-1]", "text.reverse()", "reverse(text)", "text[-1:0]"], correct: 0, explanation: "[::-1] is the reverse trick. The -1 step means 'go backwards through the entire string'." },
      { question: "What does len(\"Hello World\") return?", options: ["11", "10", "2", "Error"], correct: 0, explanation: "len() counts ALL characters including spaces. 'Hello World' has 5 + 1 space + 5 = 11 characters." },
      { question: "Are strings mutable (changeable) in Python?", options: ["No, strings are immutable", "Yes, strings are mutable", "Only with special methods", "Depends on the string"], correct: 0, explanation: "Strings are immutable - you CANNOT change individual characters. text[0] = 'p' causes an error. You must create a new string." }
    ]
  },
  {
    id: "qbx09", lessonId: "bx09", title: "While Loops Quiz", difficulty: "beginner",
    questions: [
      { question: "When does a while loop stop?", options: ["When the condition becomes False", "After a fixed number of times", "When you press stop", "After the first iteration"], correct: 0, explanation: "A while loop checks its condition before each iteration. When the condition is False, the loop stops." },
      { question: "What is an infinite loop?", options: ["A loop whose condition never becomes False", "A very long loop", "A loop with no body", "A loop that runs once"], correct: 0, explanation: "If the condition always stays True (e.g., you forget to update the counter), the loop runs forever. This is usually a bug." },
      { question: "What will happen? x = 1; while x < 5: print(x)", options: ["Infinite loop (x never changes)", "Prints 1 2 3 4", "Prints 1 once", "Error"], correct: 0, explanation: "x starts at 1 and never changes (no x = x + 1). The condition x < 5 is ALWAYS True, so it loops forever printing 1." },
      { question: "When should you use 'while' instead of 'for'?", options: ["When you don't know how many times to loop", "Always", "Never", "Only for counting"], correct: 0, explanation: "Use 'for' when you know exactly how many times to loop (or are iterating over a collection). Use 'while' when you loop until some condition changes." },
      { question: "What does 'x += 1' mean?", options: ["Same as x = x + 1", "Same as x == 1", "Same as x = 1", "Checks if x > 1"], correct: 0, explanation: "+= is a shorthand operator. x += 1 means 'add 1 to x'. Same as x = x + 1. Also works with -=, *=, /=." },
      { question: "What is the output? count = 3; while count > 0: print(count); count -= 1", options: ["3, 2, 1", "3, 2, 1, 0", "0, 1, 2, 3", "Infinite loop"], correct: 0, explanation: "count starts at 3. Each iteration prints count then subtracts 1. Prints 3, 2, 1. When count is 0, 0 > 0 is False, loop stops." },
      { question: "What does 'break' do in a while loop?", options: ["Immediately exits the loop", "Skips one iteration", "Makes the condition False", "Restarts the loop"], correct: 0, explanation: "break immediately exits the while loop, regardless of the condition. Code continues after the loop." },
      { question: "What is an accumulator pattern?", options: ["Start with 0 and add values in a loop", "A type of while loop", "A way to break loops", "A Python module"], correct: 0, explanation: "The accumulator pattern: start with a variable (usually 0), then add to it each time through the loop. total = 0; for n in nums: total += n" }
    ]
  },
  {
    id: "qbx10", lessonId: "bx10", title: "Dictionaries Quiz", difficulty: "beginner",
    questions: [
      { question: "What is a dictionary in Python?", options: ["A collection of key-value pairs", "A sorted list", "A type of string", "A math function"], correct: 0, explanation: "Dictionaries store data as key-value pairs: {'name': 'Alice', 'age': 25}. You look up values by their keys." },
      { question: "How do you access a value in a dictionary?", options: ["dict[\"key\"]", "dict(\"key\")", "dict.key", "dict->key"], correct: 0, explanation: "Use square brackets with the key: person[\"name\"] returns the value associated with the key \"name\"." },
      { question: "How do you add a new key-value pair?", options: ["dict[\"new_key\"] = value", "dict.add(\"key\", value)", "dict.append(\"key\", value)", "dict + {\"key\": value}"], correct: 0, explanation: "Just assign to a new key: person[\"email\"] = \"alice@mail.com\". If the key exists, it updates. If new, it adds." },
      { question: "What does .items() return?", options: ["All key-value pairs", "Just the keys", "Just the values", "The number of items"], correct: 0, explanation: ".items() returns all key-value pairs that you can loop through: for key, value in dict.items()" },
      { question: "What happens if you access a key that doesn't exist with dict[\"key\"]?", options: ["KeyError", "Returns None", "Returns 0", "Creates the key"], correct: 0, explanation: "Accessing a missing key with [] raises a KeyError. Use .get(\"key\", default) to safely handle missing keys." },
      { question: "What does .get(\"key\", \"default\") do?", options: ["Returns the value if key exists, otherwise returns 'default'", "Always returns 'default'", "Creates a new key", "Deletes the key"], correct: 0, explanation: ".get() safely retrieves values. If the key exists, returns its value. If not, returns the default value instead of crashing." },
      { question: "Can dictionary keys be duplicated?", options: ["No, keys must be unique", "Yes, keys can repeat", "Only string keys can repeat", "Depends on the value"], correct: 0, explanation: "Dictionary keys must be unique. If you assign to the same key twice, the second value replaces the first." },
      { question: "What does len(my_dict) return?", options: ["The number of key-value pairs", "The total number of keys and values", "The length of the longest key", "Error"], correct: 0, explanation: "len() on a dictionary returns the number of key-value pairs. {'a': 1, 'b': 2} has len() = 2." }
    ]
  },
  {
    id: "qbx11", lessonId: "bx11", title: "Functions Quiz", difficulty: "beginner",
    questions: [
      { question: "What keyword starts a function definition?", options: ["def", "function", "func", "define"], correct: 0, explanation: "Python uses 'def' (short for 'define') to create functions: def my_function():" },
      { question: "What does 'return' do in a function?", options: ["Sends a value back to the caller", "Prints a value", "Stops the program", "Creates a variable"], correct: 0, explanation: "return sends a value back to wherever the function was called. result = my_func() - the returned value goes into result." },
      { question: "What is a parameter?", options: ["A variable that receives input when the function is called", "A type of function", "A return value", "A global variable"], correct: 0, explanation: "Parameters are variables listed in the function definition: def greet(name): - 'name' is a parameter that receives a value when called." },
      { question: "What is a default parameter?", options: ["A parameter with a pre-set value that can be overridden", "A required parameter", "The first parameter", "A parameter that never changes"], correct: 0, explanation: "Default parameters have a fallback value: def greet(name='World'). If no argument is given, 'World' is used." },
      { question: "What happens if a function has no return statement?", options: ["It returns None", "It causes an error", "It returns 0", "It returns True"], correct: 0, explanation: "Functions without an explicit return statement automatically return None. None is Python's way of saying 'no value'." },
      { question: "What is the difference between a parameter and an argument?", options: ["Parameter is in the definition, argument is in the call", "They are the same thing", "Arguments are in definitions, parameters in calls", "Parameters are for functions, arguments for methods"], correct: 0, explanation: "Parameter: variable in the function definition (def greet(name)). Argument: actual value passed when calling (greet('Alice'))." },
      { question: "Can a function call another function?", options: ["Yes, functions can call other functions", "No, functions run independently", "Only if they're in the same file", "Only with special syntax"], correct: 0, explanation: "Functions can absolutely call other functions. This is called function composition and is a core programming concept." },
      { question: "Why should you use functions?", options: ["To reuse code and organize your program", "They make code run faster", "Python requires them", "They use less memory"], correct: 0, explanation: "Functions let you write code once and use it many times. They make programs organized, readable, and easier to debug." }
    ]
  },
  {
    id: "qbx12", lessonId: "bx12", title: "Patterns & Loops Quiz", difficulty: "beginner",
    questions: [
      { question: "What does \"#\" * 5 produce?", options: ["#####", "# # # # #", "5#", "Error"], correct: 0, explanation: "The * operator repeats a string. \"#\" * 5 creates \"#####\" - the hash character repeated 5 times with no spaces." },
      { question: "What does str(3) do?", options: ["Converts 3 to the string \"3\"", "Creates 3 strings", "Counts to 3", "Error"], correct: 0, explanation: "str() converts any value to a string. str(3) returns \"3\" (the text character, not the number). Needed for string * repetition." },
      { question: "What does str(4) * 4 produce?", options: ["\"4444\"", "16", "\"4 4 4 4\"", "Error"], correct: 0, explanation: "str(4) gives \"4\" (the string). \"4\" * 4 repeats it: \"4444\". If you did 4 * 4 (without str), you'd get 16." },
      { question: "How do you create a staircase pattern?", options: ["Use a loop where each line has increasing characters", "Use a special staircase function", "Print each line manually", "Use the stairs module"], correct: 0, explanation: "for i in range(1, 6): print('#' * i) - each iteration prints more characters: #, ##, ###, ####, #####" },
      { question: "What is a nested loop?", options: ["A loop inside another loop", "Two loops that run at the same time", "A loop that skips iterations", "A loop with break"], correct: 0, explanation: "A nested loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop." },
      { question: "How would you print 5 rows of 3 stars each?", options: ["for i in range(5): print('*' * 3)", "print('*' * 15)", "for i in range(3): print('*' * 5)", "for i in range(5): for j in range(3): print('*')"], correct: 0, explanation: "for i in range(5): print('*' * 3) runs 5 times, each time printing '***'. Simple and clean!" },
      { question: "What does range(4, 0, -1) produce?", options: ["4, 3, 2, 1", "4, 3, 2, 1, 0", "0, 1, 2, 3, 4", "1, 2, 3, 4"], correct: 0, explanation: "range(4, 0, -1) counts backwards: starts at 4, stops before 0, step -1. Gives: 4, 3, 2, 1." },
      { question: "How do you make a box outline with # characters?", options: ["Print full lines for top/bottom, \"#\" + spaces + \"#\" for middle", "Use a box function", "Print # characters one by one", "Use the box module"], correct: 0, explanation: "Top and bottom are '#' * width. Middle rows are '#' + ' ' * (width-2) + '#'. Combine these in a loop." }
    ]
  },
  {
    id: "qbx13", lessonId: "bx13", title: "List Comprehensions Quiz", difficulty: "beginner",
    questions: [
      { question: "What is a list comprehension?", options: ["A compact one-line way to create lists", "A way to understand lists", "A list documentation tool", "A list sorting method"], correct: 0, explanation: "List comprehensions create lists in a single line: [expression for item in sequence]. They replace multi-line for loops that build lists." },
      { question: "What does [i * 2 for i in range(4)] produce?", options: ["[0, 2, 4, 6]", "[2, 4, 6, 8]", "[0, 1, 2, 3]", "[1, 2, 3, 4]"], correct: 0, explanation: "range(4) gives 0,1,2,3. Each is multiplied by 2: 0*2=0, 1*2=2, 2*2=4, 3*2=6. Result: [0, 2, 4, 6]." },
      { question: "How do you add a filter (condition) to a list comprehension?", options: ["Add 'if condition' at the end", "Add 'if condition' at the beginning", "Use a separate filter function", "You can't filter in comprehensions"], correct: 0, explanation: "Add the condition at the end: [x for x in range(10) if x % 2 == 0]. Read as: 'give me x, for each x in 0-9, only if x is even'." },
      { question: "What does [x for x in range(10) if x > 5] produce?", options: ["[6, 7, 8, 9]", "[5, 6, 7, 8, 9]", "[6, 7, 8, 9, 10]", "[0, 1, 2, 3, 4, 5]"], correct: 0, explanation: "range(10) gives 0-9. Filter keeps only x > 5: 6, 7, 8, 9. Note: 5 is NOT included (> not >=)." },
      { question: "What does [w.upper() for w in ['hi', 'there']] produce?", options: ["['HI', 'THERE']", "['Hi', 'There']", "['hi', 'there']", "Error"], correct: 0, explanation: "The expression w.upper() runs on each item. 'hi'.upper() = 'HI', 'there'.upper() = 'THERE'." },
      { question: "Is a list comprehension always better than a for loop?", options: ["No, use for loops for complex logic", "Yes, always use comprehensions", "They are always equal", "Comprehensions are slower"], correct: 0, explanation: "List comprehensions are great for simple transformations. For complex logic with multiple steps, a regular for loop is more readable." },
      { question: "What does [len(w) for w in ['hello', 'world', 'hi']] produce?", options: ["[5, 5, 2]", "['hello', 'world', 'hi']", "[3]", "Error"], correct: 0, explanation: "len() runs on each word: len('hello')=5, len('world')=5, len('hi')=2. Result: [5, 5, 2]." },
      { question: "Which is the correct order in a list comprehension?", options: ["[expression for variable in sequence if condition]", "[for variable in sequence: expression if condition]", "[if condition for variable in sequence: expression]", "[variable for expression in sequence]"], correct: 0, explanation: "The order is: [what_to_create for each_item in where_from if optional_filter]. Expression first, then for, then optional if." }
    ]
  },
  {
    id: "qbx14", lessonId: "bx14", title: "String Formatting Quiz", difficulty: "beginner",
    questions: [
      { question: "What does f\"{price:.2f}\" do?", options: ["Formats price with 2 decimal places", "Multiplies price by 2", "Rounds price to nearest 2", "Shows the first 2 characters"], correct: 0, explanation: ":.2f means 'format as float with 2 decimal places'. If price=9.5, it shows '9.50'. The f stands for float." },
      { question: "What does f\"{number:05d}\" do when number=42?", options: ["Shows '00042' (padded with zeros)", "Shows '42000'", "Shows '42'", "Shows '5d42'"], correct: 0, explanation: ":05d means: pad with 0s, total width 5, as a decimal integer. 42 becomes '00042'." },
      { question: "What does f\"{'hello':>10}\" produce?", options: ["'     hello' (right-aligned in 10 chars)", "'hello     '", "'  hello   '", "'hello'"], correct: 0, explanation: ":>10 means right-align in a field of 10 characters. 'hello' is 5 chars, so 5 spaces are added on the left." },
      { question: "What does f\"{'hello':<10}\" produce?", options: ["'hello     ' (left-aligned in 10 chars)", "'     hello'", "'  hello   '", "'hello'"], correct: 0, explanation: ":<10 means left-align in a field of 10 characters. 'hello' is 5 chars, so 5 spaces are added on the right." },
      { question: "What does f\"{'hello':^10}\" produce?", options: ["'  hello   ' (centered in 10 chars)", "'     hello'", "'hello     '", "'hello'"], correct: 0, explanation: ":^10 means center in a field of 10 characters. Spaces are added equally on both sides." },
      { question: "What does f\"{1000000:,}\" produce?", options: ["'1,000,000'", "'1000000'", "'1.000.000'", "Error"], correct: 0, explanation: ":, adds commas as thousand separators. 1000000 becomes '1,000,000'. Very useful for large numbers." },
      { question: "Can you put expressions inside f-string braces?", options: ["Yes, any valid Python expression", "No, only variable names", "Only math expressions", "Only function calls"], correct: 0, explanation: "You can put any expression: f'{2+3}' gives '5', f'{name.upper()}' calls a method, f'{len(items)}' calls a function." },
      { question: "What is the advantage of f-strings over .format()?", options: ["Easier to read and write", "Faster execution only", "More formatting options", "They work in older Python versions"], correct: 0, explanation: "F-strings are more concise and readable: f'{name}' vs '{}'.format(name). They also run slightly faster. Available since Python 3.6." }
    ]
  },
  {
    id: "qbx15", lessonId: "bx15", title: "Mini Project Quiz", difficulty: "beginner",
    questions: [
      { question: "Why use a list of dictionaries for quiz questions?", options: ["Each dictionary holds all data for one question", "It's required by Python", "Lists are faster", "Dictionaries sort automatically"], correct: 0, explanation: "Each dictionary stores a complete question with its text, answer, and choices. The list holds all questions in order." },
      { question: "What does score += 1 mean?", options: ["Add 1 to score (same as score = score + 1)", "Set score to 1", "Check if score equals 1", "Multiply score by 1"], correct: 0, explanation: "+= is a shorthand. score += 1 adds 1 to the current score. If score was 3, it becomes 4." },
      { question: "How do you calculate a percentage?", options: ["(part / total) * 100", "part * total / 100", "part + total * 100", "part - total / 100"], correct: 0, explanation: "Percentage = (part / total) * 100. If you got 3 out of 4: (3/4) * 100 = 75%." },
      { question: "What does enumerate(list) give you in a loop?", options: ["Both the index and the value", "Just the index", "Just the value", "The length"], correct: 0, explanation: "enumerate() gives tuples of (index, value). for i, item in enumerate(['a','b']): gives (0,'a'), (1,'b')." },
      { question: "Why use len(questions) instead of a hardcoded number?", options: ["It automatically adapts if you add/remove questions", "It's faster", "It's required", "No real difference"], correct: 0, explanation: "If you hardcode 4 and later add questions, the code breaks. len(questions) always gives the correct count." },
      { question: "How do you access a dictionary value inside a list?", options: ["list[index][\"key\"]", "list.key[index]", "list{\"key\"}[index]", "key.list[index]"], correct: 0, explanation: "First get the dictionary from the list with list[index], then get the value with [\"key\"]. questions[0][\"answer\"] gets the first question's answer." },
      { question: "What is the purpose of breaking a problem into small steps?", options: ["Makes it easier to solve and debug", "Makes the code run faster", "Python requires small functions", "It uses less memory"], correct: 0, explanation: "Breaking problems into steps (decomposition) makes each piece manageable. You can test each part separately and find bugs more easily." },
      { question: "What Python concepts does a quiz game combine?", options: ["Lists, dictionaries, loops, conditions, variables, f-strings", "Only lists and loops", "Only functions", "Only print statements"], correct: 0, explanation: "A quiz game is a great project because it uses almost every beginner concept: storing data (lists, dicts), repeating (loops), deciding (if/else), tracking (variables), and displaying (f-strings)." }
    ]
  }
]
