import { dataQuizzes } from './dataQuizzes'
import { libraryQuizzes } from './libraryQuizzes'
import { beginnerExercisesQuizzes } from './beginnerExercisesQuizzes'
import { additionalQuizzes } from './additionalQuizzes'

const baseQuizzes = [
  {
    id: "qb01", lessonId: "b01", title: "Hello World Quiz", difficulty: "beginner",
    questions: [
      { question: "Which function displays output in Python?", options: ["print()", "echo()", "display()", "write()"], correct: 0, explanation: "print() is Python's built-in function for displaying output." },
      { question: "What does # indicate in Python?", options: ["A string", "A comment", "A variable", "An error"], correct: 1, explanation: "Lines starting with # are comments and are ignored by Python." },
      { question: "Which is the correct way to print text?", options: ['print("Hello")', 'Print("Hello")', 'PRINT("Hello")', 'printf("Hello")'], correct: 0, explanation: "Python is case-sensitive. Only lowercase print() is correct." },
      { question: "What will print(\"A\", \"B\") output?", options: ["A B", "AB", "A,B", "Error"], correct: 0, explanation: "print() separates multiple arguments with a space by default." },
      { question: "Python files typically have which extension?", options: [".py", ".python", ".pt", ".pn"], correct: 0, explanation: "Python source files use the .py extension." },
      { question: "What does print('Hello', end='') do differently?", options: ["Doesn't add a newline at the end", "Adds 'end' to the output", "Prints nothing", "Raises an error"], correct: 0, explanation: "By default, print() adds a newline (\\n) at the end. end='' replaces that newline with nothing, so the next print continues on the same line." },
      { question: "Which symbol starts a multi-line comment in Python?", options: ["Triple quotes (''')", "/* */", "//", "<!-- -->"], correct: 0, explanation: "Python uses triple quotes (''' or \"\"\") for multi-line strings that can act as multi-line comments. Technically they're string literals, not comments, but they serve the same purpose." },
      { question: "What is the output of print(3 + 4)?", options: ["7", "3 + 4", "34", "Error"], correct: 0, explanation: "print() evaluates the expression first. 3 + 4 = 7 (integer addition), then prints 7. Without quotes, numbers are calculated, not treated as text." }
    ]
  },
  {
    id: "qb02", lessonId: "b02", title: "Variables & Data Types Quiz", difficulty: "beginner",
    questions: [
      { question: "What is the type of x = 3.14?", options: ["float", "int", "str", "double"], correct: 0, explanation: "Numbers with decimals are float type in Python." },
      { question: "Which is a valid variable name?", options: ["my_var", "2name", "my-var", "class"], correct: 0, explanation: "Variable names can have letters, numbers, underscores but can't start with a number or use reserved words." },
      { question: "What does type(42) return?", options: ["<class 'int'>", "<class 'str'>", "42", "int"], correct: 0, explanation: "type() returns the class/type of the value." },
      { question: "What is int('10') + 5?", options: ["15", "'105'", "Error", "'15'"], correct: 0, explanation: "int('10') converts the string to integer 10, then 10 + 5 = 15." },
      { question: "Which is a boolean value?", options: ["True", "\"true\"", "1", "yes"], correct: 0, explanation: "True and False (capitalized) are Python's boolean values." },
      { question: "What does x, y = 5, 10 do?", options: ["Assigns 5 to x and 10 to y simultaneously", "Creates a tuple", "Raises an error", "Assigns 10 to both x and y"], correct: 0, explanation: "Python supports multiple assignment. x, y = 5, 10 assigns 5 to x and 10 to y in one line. This also enables swapping: x, y = y, x." },
      { question: "What is the result of type(True)?", options: ["<class 'bool'>", "<class 'int'>", "<class 'str'>", "<class 'boolean'>"], correct: 0, explanation: "True and False are of type 'bool'. Interestingly, bool is a subclass of int in Python, so True == 1 and False == 0." },
      { question: "What does str(42) return?", options: ["'42'", "42", "Error", "None"], correct: 0, explanation: "str() converts any value to its string representation. str(42) returns the string '42', not the integer 42. This is useful when concatenating numbers with text." }
    ]
  },
  {
    id: "qb03", lessonId: "b03", title: "Strings Quiz", difficulty: "beginner",
    questions: [
      { question: "What does 'hello'[1] return?", options: ["'e'", "'h'", "'l'", "Error"], correct: 0, explanation: "String indexing starts at 0, so index 1 is 'e'." },
      { question: "What does 'Ha' * 3 produce?", options: ["'HaHaHa'", "'Ha3'", "Error", "'Ha Ha Ha'"], correct: 0, explanation: "The * operator repeats strings." },
      { question: "What does 'HELLO'.lower() return?", options: ["'hello'", "'Hello'", "'HELLO'", "Error"], correct: 0, explanation: ".lower() converts all characters to lowercase." },
      { question: "What is an f-string?", options: ["A formatted string literal", "A file string", "A float string", "A function string"], correct: 0, explanation: "F-strings (f'...') allow embedding expressions inside strings." },
      { question: "What does 'python'[::-1] return?", options: ["'nohtyp'", "'python'", "'p'", "Error"], correct: 0, explanation: "[::-1] reverses the string." },
      { question: "What does 'hello world'.split() return?", options: ["['hello', 'world']", "'hello world'", "['h','e','l','l','o',' ','w','o','r','l','d']", "Error"], correct: 0, explanation: "split() without arguments splits a string by whitespace and returns a list of words. 'hello world'.split() returns ['hello', 'world']." },
      { question: "What does 'Hello'.startswith('He') return?", options: ["True", "False", "'He'", "Error"], correct: 0, explanation: "startswith() checks if a string begins with the given prefix and returns True or False. 'Hello' does start with 'He', so it returns True." },
      { question: "What does ' '.join(['a', 'b', 'c']) produce?", options: ["'a b c'", "'abc'", "['a', 'b', 'c']", "Error"], correct: 0, explanation: "join() connects list elements with the string as separator. ' '.join(['a','b','c']) puts a space between each element: 'a b c'." }
    ]
  },
  {
    id: "qb04", lessonId: "b04", title: "Numbers & Math Quiz", difficulty: "beginner",
    questions: [
      { question: "What is 10 // 3?", options: ["3", "3.33", "4", "1"], correct: 0, explanation: "// is floor division, which rounds down to the nearest integer." },
      { question: "What is 10 % 3?", options: ["1", "3", "0", "3.33"], correct: 0, explanation: "% returns the remainder. 10 divided by 3 has remainder 1." },
      { question: "What is 2 ** 4?", options: ["16", "8", "6", "24"], correct: 0, explanation: "** is the exponent operator. 2^4 = 16." },
      { question: "What does abs(-7) return?", options: ["7", "-7", "0", "Error"], correct: 0, explanation: "abs() returns the absolute (positive) value." },
      { question: "What does round(3.7) return?", options: ["4", "3", "3.7", "3.0"], correct: 0, explanation: "round() rounds to the nearest integer." },
      { question: "What is the result of 5 / 2 in Python 3?", options: ["2.5", "2", "3", "Error"], correct: 0, explanation: "In Python 3, / always returns a float (2.5). Use // for integer division (which gives 2). This is different from Python 2 where / did integer division." },
      { question: "What does max(3, 7, 1, 9, 2) return?", options: ["9", "3", "1", "22"], correct: 0, explanation: "max() returns the largest value from the arguments. min() does the opposite, returning the smallest value (1 in this case)." },
      { question: "What does round(2.5) return in Python 3?", options: ["2", "3", "2.5", "Error"], correct: 0, explanation: "Python 3 uses 'banker's rounding' (round half to even). round(2.5) = 2, round(3.5) = 4. This reduces bias in financial calculations. Use math.ceil() for always rounding up." }
    ]
  },
  {
    id: "qb05", lessonId: "b05", title: "Input & Output Quiz", difficulty: "beginner",
    questions: [
      { question: "What type does input() always return?", options: ["str", "int", "depends on input", "auto-detected"], correct: 0, explanation: "input() always returns a string, even if the user types a number." },
      { question: "What does f'{3.14159:.2f}' produce?", options: ["'3.14'", "'3.15'", "'3.14159'", "Error"], correct: 0, explanation: ":.2f formats a float to 2 decimal places." },
      { question: "What does print('A', 'B', sep='-') output?", options: ["A-B", "A B", "A,B", "AB"], correct: 0, explanation: "The sep parameter changes the separator between arguments." },
      { question: "How do you convert '42' to an integer?", options: ["int('42')", "integer('42')", "str(42)", "num('42')"], correct: 0, explanation: "int() converts a string to an integer." },
      { question: "What does end='' do in print()?", options: ["Prevents newline", "Adds extra line", "Ends the program", "Nothing"], correct: 0, explanation: "end='' replaces the default newline with an empty string." },
      { question: "What does f'{42:05d}' produce?", options: ["'00042'", "'42000'", "'42'", "'5d42'"], correct: 0, explanation: "05d means: pad with zeros (0), total width 5, decimal integer (d). So 42 becomes '00042'. This is useful for formatting IDs, timestamps, etc." },
      { question: "What happens if you do int('hello')?", options: ["ValueError", "0", "'hello'", "None"], correct: 0, explanation: "int() can only convert strings that look like integers. 'hello' is not a valid integer, so Python raises a ValueError. Always validate or use try/except when converting user input." },
      { question: "What does f'{name!r}' do differently than f'{name}'?", options: ["Shows the repr() with quotes around strings", "Reverses the string", "Rounds the value", "Raises an error"], correct: 0, explanation: "!r calls repr() instead of str(). For strings, repr() adds quotes: f'{\"hello\"!r}' produces \"'hello'\" (with quotes visible). Useful for debugging to see the actual value including type." }
    ]
  },
  {
    id: "qb06", lessonId: "b06", title: "Conditionals Quiz", difficulty: "beginner",
    questions: [
      { question: "What keyword starts a conditional?", options: ["if", "when", "check", "condition"], correct: 0, explanation: "Python uses 'if' to start conditional blocks." },
      { question: "What is the result of: True and False?", options: ["False", "True", "Error", "None"], correct: 0, explanation: "Both must be True for 'and' to return True." },
      { question: "What does 'elif' stand for?", options: ["else if", "elif function", "element if", "else input"], correct: 0, explanation: "elif is Python's shorthand for 'else if'." },
      { question: "What does not True evaluate to?", options: ["False", "True", "None", "Error"], correct: 0, explanation: "The 'not' operator inverts the boolean value." },
      { question: "Which operator checks equality?", options: ["==", "=", "===", "equals"], correct: 0, explanation: "== compares values. = is assignment. Python doesn't use ===." },
      { question: "What is the output of: print(5 > 3 and 2 < 1)?", options: ["False", "True", "Error", "None"], correct: 0, explanation: "5 > 3 is True, 2 < 1 is False. True and False = False. The 'and' operator requires BOTH conditions to be True." },
      { question: "What does 'x = 5 if True else 10' assign to x?", options: ["5", "10", "True", "Error"], correct: 0, explanation: "This is a ternary (conditional) expression. Since the condition is True, x gets the value before 'if' (5). If it were False, x would get 10." },
      { question: "What does bool(0) return?", options: ["False", "True", "0", "Error"], correct: 0, explanation: "In Python, 0, empty string '', empty list [], None, and False are all 'falsy'. bool(0) returns False. Any non-zero number is 'truthy': bool(42) returns True." }
    ]
  },
  {
    id: "qb07", lessonId: "b07", title: "Lists Quiz", difficulty: "beginner",
    questions: [
      { question: "What does [1,2,3][-1] return?", options: ["3", "1", "Error", "0"], correct: 0, explanation: "Negative indexing: -1 gets the last element." },
      { question: "Which method adds to the end of a list?", options: ["append()", "add()", "push()", "insert()"], correct: 0, explanation: "append() adds an element to the end of the list." },
      { question: "What does len([1,2,3]) return?", options: ["3", "2", "1", "6"], correct: 0, explanation: "len() returns the number of elements in the list." },
      { question: "Are lists mutable or immutable?", options: ["Mutable", "Immutable", "Both", "Neither"], correct: 0, explanation: "Lists are mutable - you can change their contents." },
      { question: "What does [1,2] + [3,4] produce?", options: ["[1,2,3,4]", "[4,6]", "Error", "10"], correct: 0, explanation: "The + operator concatenates (joins) lists." },
      { question: "What does [1,2,3].pop() return?", options: ["3", "1", "[1,2]", "None"], correct: 0, explanation: "pop() removes AND returns the last element. After pop(), the list becomes [1,2]. pop(0) would remove and return the first element." },
      { question: "What does [1,2,3,4,5][1:4] return?", options: ["[2,3,4]", "[1,2,3,4]", "[2,3,4,5]", "[1,2,3]"], correct: 0, explanation: "Slicing [1:4] gets elements from index 1 up to (but not including) index 4. So indices 1, 2, 3 give values 2, 3, 4." },
      { question: "What does 3 in [1, 2, 3, 4] return?", options: ["True", "False", "3", "2"], correct: 0, explanation: "The 'in' operator checks if a value exists in a list and returns True or False. 3 is in the list, so it returns True." }
    ]
  },
  {
    id: "qb08", lessonId: "b08", title: "Loops Quiz", difficulty: "beginner",
    questions: [
      { question: "How many times does range(5) iterate?", options: ["5", "4", "6", "1"], correct: 0, explanation: "range(5) produces 0,1,2,3,4 - that's 5 iterations." },
      { question: "What does 'break' do in a loop?", options: ["Exits the loop", "Skips one iteration", "Pauses the loop", "Restarts the loop"], correct: 0, explanation: "break immediately exits the entire loop." },
      { question: "What does 'continue' do?", options: ["Skips to next iteration", "Exits the loop", "Continues normally", "Pauses"], correct: 0, explanation: "continue skips the rest of the current iteration and moves to the next." },
      { question: "What is range(2, 8, 2)?", options: ["2, 4, 6", "2, 4, 6, 8", "2, 3, 4, 5, 6, 7", "2, 8"], correct: 0, explanation: "range(start, stop, step): starts at 2, ends before 8, steps by 2." },
      { question: "Which loop checks a condition first?", options: ["while", "for", "do-while", "foreach"], correct: 0, explanation: "while checks its condition before each iteration. Python has no do-while." },
      { question: "What does enumerate(['a','b','c']) produce?", options: ["(0,'a'), (1,'b'), (2,'c')", "'a','b','c'", "0, 1, 2", "[0, 1, 2]"], correct: 0, explanation: "enumerate() gives you both the index and value as tuples. It's the Pythonic way to loop with indices: for i, val in enumerate(list)." },
      { question: "What does the else clause on a for loop do?", options: ["Runs if loop completes without break", "Runs if loop has an error", "Always runs", "Runs if loop doesn't execute"], correct: 0, explanation: "The else clause on a loop executes only if the loop completes normally (without hitting a break). If break is triggered, the else block is skipped." },
      { question: "What is a nested loop?", options: ["A loop inside another loop", "Two loops running simultaneously", "A loop that calls itself", "A loop with multiple conditions"], correct: 0, explanation: "A nested loop is a loop placed inside another loop. The inner loop runs completely for each iteration of the outer loop. Example: for i in range(3): for j in range(3): print(i, j)." }
    ]
  },
  {
    id: "qb09", lessonId: "b09", title: "Dictionaries Quiz", difficulty: "beginner",
    questions: [
      { question: "How do you access a dict value?", options: ["dict['key']", "dict.key", "dict(key)", "dict->key"], correct: 0, explanation: "Use square brackets with the key to access dictionary values." },
      { question: "What does .get('key', 0) do?", options: ["Returns value or 0 if missing", "Always returns 0", "Sets key to 0", "Deletes key"], correct: 0, explanation: ".get() returns the value if the key exists, otherwise the default." },
      { question: "Can a list be a dictionary key?", options: ["No", "Yes", "Sometimes", "Only if empty"], correct: 0, explanation: "Dictionary keys must be immutable. Lists are mutable, so they can't be keys." },
      { question: "What does .items() return?", options: ["Key-value pairs", "Only keys", "Only values", "The count"], correct: 0, explanation: ".items() returns all key-value pairs as tuples." },
      { question: "What happens accessing a missing key with []?", options: ["KeyError", "None", "0", "Empty string"], correct: 0, explanation: "Accessing a missing key with [] raises KeyError. Use .get() for safe access." },
      { question: "What does del dict['key'] do?", options: ["Removes the key-value pair", "Sets value to None", "Clears the entire dict", "Raises an error always"], correct: 0, explanation: "del removes the specified key and its value from the dictionary. If the key doesn't exist, it raises a KeyError. Use dict.pop('key', default) for safe deletion." },
      { question: "What does dict.update({'a': 1, 'b': 2}) do?", options: ["Adds/updates multiple key-value pairs", "Replaces the entire dict", "Returns a new dict", "Only adds new keys"], correct: 0, explanation: "update() merges another dict into the current one. Existing keys get their values updated, new keys are added. It modifies the dict in-place." },
      { question: "What is a dictionary comprehension?", options: ["{k: v for k, v in items}", "[k: v for k, v in items]", "dict(k, v for items)", "dict.from(items)"], correct: 0, explanation: "Dict comprehensions use curly braces with key:value syntax: {k: v for k, v in iterable}. Example: {x: x**2 for x in range(5)} creates {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}." }
    ]
  },
  {
    id: "qb10", lessonId: "b10", title: "Functions Quiz", difficulty: "beginner",
    questions: [
      { question: "Which keyword defines a function?", options: ["def", "function", "func", "define"], correct: 0, explanation: "Python uses 'def' to define functions." },
      { question: "What does a function return by default?", options: ["None", "0", "''", "False"], correct: 0, explanation: "Functions without a return statement return None." },
      { question: "What is a docstring?", options: ["Documentation string in a function", "A type of variable", "A print statement", "A comment"], correct: 0, explanation: "A docstring is a string literal at the start of a function describing its purpose." },
      { question: "Can a function return multiple values?", options: ["Yes, as a tuple", "No", "Only with a list", "Only two values"], correct: 0, explanation: "Functions can return multiple values separated by commas, which creates a tuple." },
      { question: "What is a default parameter?", options: ["A parameter with a preset value", "The first parameter", "A required parameter", "A global variable"], correct: 0, explanation: "Default parameters have a value that's used if no argument is provided." },
      { question: "What is variable scope?", options: ["Where a variable is accessible", "The size of a variable", "The type of a variable", "How long a variable exists"], correct: 0, explanation: "Scope determines where a variable can be accessed. Variables created inside a function are 'local' and can't be accessed outside. Variables outside functions are 'global'." },
      { question: "What is recursion?", options: ["A function calling itself", "A loop inside a function", "A function with no return", "A function with multiple parameters"], correct: 0, explanation: "Recursion is when a function calls itself. It needs a base case to stop. Example: factorial(n) calls factorial(n-1) until n reaches 1." },
      { question: "What does *args allow in a function definition?", options: ["Accept any number of positional arguments", "Accept keyword arguments", "Make all parameters required", "Accept only one argument"], correct: 0, explanation: "*args collects any number of extra positional arguments into a tuple. def func(*args) can be called with func(1, 2, 3) where args = (1, 2, 3)." }
    ]
  },
  {
    id: "qi01", lessonId: "i01", title: "Advanced Functions Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does *args collect?", options: ["Positional arguments as tuple", "Keyword arguments", "All arguments", "Nothing"], correct: 0, explanation: "*args collects extra positional arguments into a tuple." },
      { question: "What does **kwargs collect?", options: ["Keyword arguments as dict", "Positional arguments", "All arguments", "Nothing"], correct: 0, explanation: "**kwargs collects extra keyword arguments into a dictionary." },
      { question: "Lambda functions are limited to:", options: ["A single expression", "Multiple lines", "No limits", "Only integers"], correct: 0, explanation: "Lambda functions can only contain a single expression." },
      { question: "What does map() return?", options: ["A map iterator", "A list", "A dict", "A tuple"], correct: 0, explanation: "map() returns an iterator. Use list() to convert it." },
      { question: "What does filter() do?", options: ["Keeps items where function returns True", "Removes all items", "Sorts items", "Maps items"], correct: 0, explanation: "filter() keeps only items for which the function returns True." },
      { question: "What is a closure in Python?", options: ["A function that remembers its enclosing scope", "A function that closes files", "A class method", "A terminated function"], correct: 0, explanation: "A closure is a function that retains access to variables from its enclosing scope even after that scope has finished executing. Inner functions that reference outer variables create closures." },
      { question: "What is the correct order of parameters?", options: ["regular, *args, keyword, **kwargs", "*args, regular, **kwargs, keyword", "**kwargs, *args, regular", "Any order works"], correct: 0, explanation: "Python requires: regular params first, then *args, then keyword-only params, then **kwargs. def func(a, b, *args, key=val, **kwargs)." },
      { question: "What does sorted(items, key=lambda x: x[1]) do?", options: ["Sorts by the second element of each item", "Sorts by the first element", "Sorts in reverse", "Returns the second element"], correct: 0, explanation: "The key parameter takes a function that extracts a comparison key. lambda x: x[1] gets the second element (index 1) of each item for sorting." }
    ]
  },
  {
    id: "qi02", lessonId: "i02", title: "List Comprehensions Quiz", difficulty: "intermediate",
    questions: [
      { question: "What is [x*2 for x in range(3)]?", options: ["[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]", "[0, 1, 2]"], correct: 0, explanation: "range(3) gives 0,1,2. Each multiplied by 2: 0,2,4." },
      { question: "Where does the condition go in a comprehension?", options: ["After the for clause", "Before the expression", "Before the for", "Anywhere"], correct: 0, explanation: "Syntax: [expr for x in iter if condition]" },
      { question: "What creates a dict comprehension?", options: ["{k:v for ...}", "[k:v for ...]", "(k:v for ...)", "dict(k,v for ...)"], correct: 0, explanation: "Dict comprehensions use curly braces with key:value pairs." },
      { question: "What does (x for x in range(5)) create?", options: ["A generator", "A tuple", "A list", "An error"], correct: 0, explanation: "Parentheses create a generator expression, not a tuple." },
      { question: "Can you nest comprehensions?", options: ["Yes", "No", "Only two levels", "Only with lists"], correct: 0, explanation: "You can nest comprehensions, but keep them readable." },
      { question: "What is {x for x in [1,2,2,3,3]}?", options: ["{1, 2, 3}", "[1, 2, 2, 3, 3]", "{1: 2, 2: 3}", "Error"], correct: 0, explanation: "Curly braces without key:value pairs create a set comprehension. Sets automatically remove duplicates, so {x for x in [1,2,2,3,3]} gives {1, 2, 3}." },
      { question: "What does [x if x > 0 else 0 for x in [-1,2,-3,4]] produce?", options: ["[0, 2, 0, 4]", "[-1, 2, -3, 4]", "[2, 4]", "Error"], correct: 0, explanation: "This uses a conditional expression (ternary) inside the comprehension. For each x: if x > 0, keep x; else use 0. Note: this is different from filtering — it replaces values rather than removing them." },
      { question: "What is [[j for j in range(3)] for i in range(2)]?", options: ["[[0,1,2], [0,1,2]]", "[0,1,2,0,1,2]", "[[0,0], [1,1], [2,2]]", "Error"], correct: 0, explanation: "This is a nested comprehension that creates a 2D list. The outer loop runs 2 times, each time creating an inner list [0,1,2]. Result: [[0,1,2], [0,1,2]]." }
    ]
  },
  {
    id: "qi03", lessonId: "i03", title: "Error Handling Quiz", difficulty: "intermediate",
    questions: [
      { question: "What block catches exceptions?", options: ["except", "catch", "handle", "error"], correct: 0, explanation: "Python uses try/except (not try/catch like other languages)." },
      { question: "When does 'finally' run?", options: ["Always", "Only on error", "Only on success", "Never"], correct: 0, explanation: "finally always runs, whether or not an exception occurred." },
      { question: "When does 'else' run in try/except?", options: ["When no exception occurs", "When an exception occurs", "Always", "Never"], correct: 0, explanation: "The else block runs only if no exception was raised in the try block." },
      { question: "What does 'raise' do?", options: ["Throws an exception", "Catches an exception", "Ignores an exception", "Logs an exception"], correct: 0, explanation: "raise explicitly throws an exception." },
      { question: "Should you use bare 'except:'?", options: ["No, catch specific exceptions", "Yes, always", "Only in production", "Only for debugging"], correct: 0, explanation: "Bare except catches everything including SystemExit, making debugging hard." },
      { question: "What does 'raise ValueError('bad input')' do?", options: ["Creates and raises a ValueError with message", "Catches a ValueError", "Returns 'bad input'", "Prints an error"], correct: 0, explanation: "raise creates an exception instance with the given message and throws it. The exception propagates up the call stack until caught by an except block or crashes the program." },
      { question: "Can you create custom exceptions?", options: ["Yes, by inheriting from Exception", "No, only built-in exceptions exist", "Only from BaseException", "Only in classes"], correct: 0, explanation: "Create custom exceptions by subclassing Exception: class MyError(Exception): pass. This lets you define domain-specific errors like InvalidAgeError, InsufficientFundsError, etc." },
      { question: "What does 'except (TypeError, ValueError) as e:' do?", options: ["Catches either exception type and stores it in e", "Catches only TypeError", "Catches any exception", "Raises both exceptions"], correct: 0, explanation: "You can catch multiple exception types with a tuple. 'as e' binds the exception object to variable e so you can access its message with str(e) or e.args." }
    ]
  },
  {
    id: "qi04", lessonId: "i04", title: "File Handling Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does mode 'w' do?", options: ["Write (overwrites)", "Write (appends)", "Read only", "Execute"], correct: 0, explanation: "'w' creates a new file or overwrites an existing one." },
      { question: "Why use 'with open()' syntax?", options: ["Auto-closes the file", "Faster reading", "Better formatting", "Required by Python"], correct: 0, explanation: "The with statement ensures the file is properly closed, even if errors occur." },
      { question: "What does 'a' mode do?", options: ["Appends to file", "Opens for reading", "Creates new file only", "Archives file"], correct: 0, explanation: "'a' mode appends data to the end of an existing file." },
      { question: "What does readlines() return?", options: ["List of all lines", "Single string", "First line only", "Number of lines"], correct: 0, explanation: "readlines() returns a list where each element is a line from the file." },
      { question: "Which module handles CSV files?", options: ["csv", "file", "data", "table"], correct: 0, explanation: "Python's built-in csv module handles reading and writing CSV files." },
      { question: "What does 'r+' mode do?", options: ["Read and write without truncating", "Read-only", "Write-only", "Read and delete"], correct: 0, explanation: "'r+' opens a file for both reading and writing without truncating (erasing) the existing content. 'w+' would truncate first." },
      { question: "What does file.seek(0) do?", options: ["Moves cursor to the beginning of file", "Searches for value 0", "Reads the first byte", "Closes the file"], correct: 0, explanation: "seek(0) moves the file cursor back to the beginning. This is useful when you want to read a file again after already reading it, or after writing." },
      { question: "What encoding should you use for text files?", options: ["'utf-8'", "'ascii'", "'binary'", "'latin-1'"], correct: 0, explanation: "UTF-8 is the universal standard encoding that supports all characters (including emojis, accented letters, Chinese, etc.). Always specify: open('file.txt', encoding='utf-8')." }
    ]
  },
  {
    id: "qi05", lessonId: "i05", title: "OOP Basics Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does __init__ do?", options: ["Initializes a new object", "Deletes an object", "Prints the object", "Copies the object"], correct: 0, explanation: "__init__ is the constructor that initializes new instances." },
      { question: "What does 'self' represent?", options: ["The current instance", "The class itself", "The parent class", "Nothing specific"], correct: 0, explanation: "self refers to the specific instance of the class." },
      { question: "What is a class variable?", options: ["Shared by all instances", "Unique to each instance", "A local variable", "A global variable"], correct: 0, explanation: "Class variables are defined in the class body and shared by all instances." },
      { question: "What does __str__ do?", options: ["Defines string representation", "Converts to string", "Prints the object", "Names the object"], correct: 0, explanation: "__str__ defines what str() and print() display for the object." },
      { question: "Can a class have multiple methods?", options: ["Yes", "No", "Only 3", "Only with inheritance"], correct: 0, explanation: "A class can have any number of methods." },
      { question: "What is the difference between __str__ and __repr__?", options: ["__str__ is for users, __repr__ is for developers", "__repr__ is for users, __str__ is for developers", "They are the same", "__str__ is optional, __repr__ is not"], correct: 0, explanation: "__str__ returns a user-friendly string (for print/display). __repr__ returns an unambiguous developer-friendly string (for debugging). If __str__ isn't defined, Python falls back to __repr__." },
      { question: "What is encapsulation?", options: ["Bundling data and methods that operate on that data", "Hiding all variables", "Making everything public", "Using global variables"], correct: 0, explanation: "Encapsulation bundles data (attributes) and the methods that work on that data into a single unit (class). It also restricts direct access to some components, which is achieved in Python using naming conventions (_private, __mangled)." },
      { question: "What does ClassName() (calling a class) do?", options: ["Creates a new instance of the class", "Calls the class method", "Returns the class name", "Deletes the class"], correct: 0, explanation: "Calling a class like ClassName() creates and returns a new instance. Python calls __new__ to create the object, then __init__ to initialize it." }
    ]
  },
  {
    id: "qi06", lessonId: "i06", title: "OOP Inheritance Quiz", difficulty: "intermediate",
    questions: [
      { question: "What is inheritance?", options: ["Creating a class from another class", "Copying a class", "Deleting a class", "Renaming a class"], correct: 0, explanation: "Inheritance allows a class to inherit attributes and methods from another class." },
      { question: "What does super() do?", options: ["Calls the parent class method", "Creates a superclass", "Deletes parent", "Makes class abstract"], correct: 0, explanation: "super() gives access to the parent class's methods." },
      { question: "What is polymorphism?", options: ["Same method name, different behavior", "Multiple inheritance", "Method copying", "Class duplication"], correct: 0, explanation: "Polymorphism allows different classes to have methods with the same name but different implementations." },
      { question: "What does isinstance(obj, Class) check?", options: ["If obj is an instance of Class", "If obj equals Class", "If obj has Class methods", "If obj is a class"], correct: 0, explanation: "isinstance() checks if an object is an instance of a specific class (or its subclasses)." },
      { question: "Can Python classes have multiple parents?", options: ["Yes (multiple inheritance)", "No", "Only two", "Only with mixins"], correct: 0, explanation: "Python supports multiple inheritance: class C(A, B)." },
      { question: "What is method overriding?", options: ["Redefining a parent method in a child class", "Calling a method twice", "Deleting a parent method", "Renaming a method"], correct: 0, explanation: "Method overriding is when a child class provides its own implementation of a method already defined in the parent class. The child's version is used instead of the parent's." },
      { question: "What is the Method Resolution Order (MRO)?", options: ["The order Python searches for methods in class hierarchy", "The order methods are defined", "The order methods are called", "Alphabetical method ordering"], correct: 0, explanation: "MRO determines which method Python uses when multiple classes in the hierarchy define the same method. Python uses C3 linearization. View it with ClassName.__mro__ or ClassName.mro()." },
      { question: "What is an abstract class?", options: ["A class that can't be instantiated directly", "A class with no methods", "A very simple class", "A deleted class"], correct: 0, explanation: "Abstract classes define methods that subclasses MUST implement. Use the abc module: from abc import ABC, abstractmethod. They serve as templates/contracts for subclasses." }
    ]
  },
  {
    id: "qi07", lessonId: "i07", title: "Modules Quiz", difficulty: "intermediate",
    questions: [
      { question: "How do you import a specific function?", options: ["from module import func", "import func from module", "include module.func", "require module"], correct: 0, explanation: "Use 'from module import function_name' for specific imports." },
      { question: "What does Counter do?", options: ["Counts occurrences", "Counts to a number", "Creates a timer", "Loops N times"], correct: 0, explanation: "Counter from collections counts how many times each element appears." },
      { question: "What does __name__ == '__main__' check?", options: ["If file is run directly", "If module exists", "If function is main", "If Python is installed"], correct: 0, explanation: "This checks if the file is being run directly (not imported as a module)." },
      { question: "What is pip?", options: ["Python package installer", "Python interpreter", "A Python IDE", "A testing tool"], correct: 0, explanation: "pip is the standard package manager for installing Python packages." },
      { question: "What does random.choice() do?", options: ["Picks a random item", "Shuffles the list", "Generates a number", "Sorts randomly"], correct: 0, explanation: "random.choice() returns a randomly selected element from a sequence." },
      { question: "What does 'import module as alias' do?", options: ["Imports module with a shorter name", "Creates a copy of the module", "Renames the module file", "Imports only the alias function"], correct: 0, explanation: "The 'as' keyword creates an alias for the module. Example: import numpy as np lets you write np.array() instead of numpy.array(). Common aliases: pd for pandas, np for numpy, plt for matplotlib.pyplot." },
      { question: "What is __init__.py used for?", options: ["Marks a directory as a Python package", "Initializes all modules", "Runs first when Python starts", "Creates backup files"], correct: 0, explanation: "__init__.py makes a directory a Python package, allowing its modules to be imported. In Python 3.3+, it's optional for 'namespace packages', but still recommended for explicit packages." },
      { question: "What does dir(module) return?", options: ["List of all names defined in the module", "The module's directory path", "The module's documentation", "The module's size"], correct: 0, explanation: "dir(module) returns a list of all attributes, functions, and classes defined in the module. It's useful for exploring what's available. Use help(module.function) for detailed documentation." }
    ]
  },
  {
    id: "qi08", lessonId: "i08", title: "Regex Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does \\d match?", options: ["Any digit", "Any letter", "Whitespace", "Any character"], correct: 0, explanation: "\\d matches any digit character (0-9)." },
      { question: "What does re.findall() return?", options: ["List of all matches", "First match only", "True/False", "Match count"], correct: 0, explanation: "findall() returns a list of all non-overlapping matches." },
      { question: "What does + mean in regex?", options: ["One or more", "Zero or more", "Exactly one", "Optional"], correct: 0, explanation: "+ matches one or more occurrences of the preceding pattern." },
      { question: "Why use r'' for regex?", options: ["Prevents backslash escaping", "Makes it faster", "Required by Python", "For readability"], correct: 0, explanation: "Raw strings (r'') treat backslashes literally, avoiding double-escaping." },
      { question: "What does re.sub() do?", options: ["Replaces matches", "Searches text", "Splits text", "Counts matches"], correct: 0, explanation: "re.sub() replaces all occurrences of a pattern with a replacement string." },
      { question: "What does \\b match?", options: ["A word boundary", "A backspace", "A blank space", "The letter b"], correct: 0, explanation: "\\b matches a word boundary — the position between a word character (\\w) and a non-word character. \\bcat\\b matches 'cat' but not 'category' or 'scatter'." },
      { question: "What does .* match?", options: ["Any character, zero or more times (greedy)", "Any digit", "Only dots", "Nothing"], correct: 0, explanation: ". matches any character (except newline), * means zero or more. Together .* matches as many characters as possible (greedy). Use .*? for non-greedy (lazy) matching." },
      { question: "What do [] brackets do in regex?", options: ["Define a character class (match any one char inside)", "Create a list", "Optional group", "Literal brackets"], correct: 0, explanation: "[abc] matches any single character that is a, b, or c. [a-z] matches any lowercase letter. [^abc] matches any character EXCEPT a, b, or c. It's a character class." }
    ]
  },
  {
    id: "qi09", lessonId: "i09", title: "JSON & Data Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does json.dumps() do?", options: ["Converts Python to JSON string", "Reads a JSON file", "Parses JSON string", "Deletes JSON"], correct: 0, explanation: "json.dumps() serializes a Python object to a JSON formatted string." },
      { question: "What does json.loads() do?", options: ["Parses JSON string to Python", "Loads a file", "Creates JSON", "Validates JSON"], correct: 0, explanation: "json.loads() parses a JSON string and returns a Python object." },
      { question: "Which Python type maps to JSON object?", options: ["dict", "list", "tuple", "set"], correct: 0, explanation: "Python dicts become JSON objects, and vice versa." },
      { question: "What does indent=2 do in json.dumps()?", options: ["Pretty-prints with 2-space indent", "Limits to 2 items", "Adds 2 spaces prefix", "Nothing"], correct: 0, explanation: "indent=2 formats the JSON output with 2-space indentation for readability." },
      { question: "Can JSON contain Python tuples?", options: ["No, they become arrays", "Yes", "Only empty tuples", "With special syntax"], correct: 0, explanation: "JSON has no tuple type. Python tuples are converted to JSON arrays (lists)." },
      { question: "What Python value does JSON 'null' map to?", options: ["None", "0", "''", "False"], correct: 0, explanation: "JSON null becomes Python None, and vice versa. JSON true/false map to Python True/False. These conversions happen automatically with json.loads() and json.dumps()." },
      { question: "What does json.dump() (no 's') do?", options: ["Writes JSON directly to a file", "Same as json.dumps()", "Reads from a file", "Validates JSON"], correct: 0, explanation: "json.dump(data, file) writes JSON directly to a file object. json.dumps(data) returns a string. Similarly, json.load(file) reads from file, json.loads(string) parses a string." },
      { question: "How do you handle a datetime in JSON?", options: ["Convert to string first (e.g., .isoformat())", "JSON handles it automatically", "Use a special date type", "It's not possible"], correct: 0, explanation: "JSON doesn't support datetime objects. Convert to string first using .isoformat() or str(). When reading back, parse with datetime.fromisoformat(). You can also use a custom JSONEncoder class." }
    ]
  },
  {
    id: "qi10", lessonId: "i10", title: "Collections Quiz", difficulty: "intermediate",
    questions: [
      { question: "What makes tuples different from lists?", options: ["Tuples are immutable", "Tuples are faster", "Tuples hold only strings", "No difference"], correct: 0, explanation: "Tuples cannot be modified after creation (immutable), while lists can." },
      { question: "What does set A & B produce?", options: ["Intersection", "Union", "Difference", "Concatenation"], correct: 0, explanation: "& returns elements common to both sets (intersection)." },
      { question: "Can sets have duplicates?", options: ["No", "Yes", "Only numbers", "Only strings"], correct: 0, explanation: "Sets automatically remove duplicates. Every element is unique." },
      { question: "What is a namedtuple?", options: ["Tuple with named fields", "A named variable", "A dict subclass", "A list with names"], correct: 0, explanation: "namedtuple creates tuple subclasses with named fields accessible by name." },
      { question: "What does defaultdict do?", options: ["Provides default values for missing keys", "Creates default dicts", "Sorts dictionaries", "Copies dictionaries"], correct: 0, explanation: "defaultdict automatically creates a default value when accessing a missing key." },
      { question: "What does set A | B produce?", options: ["Union (all elements from both)", "Intersection", "Difference", "Error"], correct: 0, explanation: "| returns the union — all elements that are in A, B, or both. A = {1,2,3}, B = {3,4,5}, A | B = {1,2,3,4,5}." },
      { question: "What does frozenset do?", options: ["Creates an immutable set", "Freezes a list", "Creates a frozen dict", "Removes elements"], correct: 0, explanation: "frozenset is an immutable version of set. Since it's immutable (and therefore hashable), it can be used as a dict key or stored inside another set. Regular sets cannot." },
      { question: "What does tuple unpacking allow?", options: ["Assigning tuple elements to separate variables", "Combining tuples", "Converting to list", "Sorting tuples"], correct: 0, explanation: "Unpacking assigns each element to a variable: a, b, c = (1, 2, 3). Extended unpacking uses *: first, *rest = (1, 2, 3, 4) gives first=1, rest=[2, 3, 4]." }
    ]
  },
  {
    id: "qa01", lessonId: "a01", title: "Decorators Quiz", difficulty: "advanced",
    questions: [
      { question: "What does a decorator do?", options: ["Wraps a function to extend behavior", "Decorates output with colors", "Creates a new class", "Defines a variable"], correct: 0, explanation: "Decorators wrap functions to add behavior without modifying the original function." },
      { question: "What does @wraps(func) preserve?", options: ["Original function's metadata", "Return value", "Arguments", "Speed"], correct: 0, explanation: "@wraps preserves the decorated function's name, docstring, and other metadata." },
      { question: "What is @staticmethod?", options: ["A method that doesn't use self", "A constant method", "An immutable method", "A fast method"], correct: 0, explanation: "@staticmethod defines a method that doesn't access instance or class state." },
      { question: "What is @property used for?", options: ["Making a method act like an attribute", "Protecting variables", "Making constants", "Logging access"], correct: 0, explanation: "@property lets you define a method that's accessed like an attribute." },
      { question: "How many layers does a decorator with arguments have?", options: ["Three nested functions", "Two", "One", "Four"], correct: 0, explanation: "Parameterized decorators need: outer(args) -> decorator(func) -> wrapper(*args)." },
      { question: "Can you stack multiple decorators?", options: ["Yes, they apply bottom-up", "No, only one at a time", "Yes, they apply top-down", "Only two maximum"], correct: 0, explanation: "@dec1 @dec2 def func() is equivalent to func = dec1(dec2(func)). The bottom decorator is applied first, then the top one wraps the result." },
      { question: "What is @classmethod used for?", options: ["A method that receives the class as first argument", "A class constructor", "A static method", "A private method"], correct: 0, explanation: "@classmethod receives the class (cls) instead of the instance (self) as the first argument. It's commonly used for alternative constructors like Date.from_string('2025-01-01')." },
      { question: "What does @functools.lru_cache do?", options: ["Caches function results for repeated calls", "Limits function calls", "Logs return values", "Creates a backup function"], correct: 0, explanation: "@lru_cache memorizes function results. If the same arguments are used again, it returns the cached result instead of recomputing. LRU = Least Recently Used, meaning old cached values are discarded first." }
    ]
  },
  {
    id: "qa02", lessonId: "a02", title: "Generators Quiz", difficulty: "advanced",
    questions: [
      { question: "What keyword makes a function a generator?", options: ["yield", "return", "generate", "async"], correct: 0, explanation: "The yield keyword turns a regular function into a generator function." },
      { question: "What does next() do on a generator?", options: ["Gets the next yielded value", "Skips a value", "Restarts the generator", "Closes it"], correct: 0, explanation: "next() resumes the generator and returns the next yielded value." },
      { question: "Why use generators over lists?", options: ["Memory efficiency", "Faster computation", "Better syntax", "Type safety"], correct: 0, explanation: "Generators produce values one at a time, using minimal memory regardless of data size." },
      { question: "What happens when a generator is exhausted?", options: ["Raises StopIteration", "Returns None", "Restarts", "Raises ValueError"], correct: 0, explanation: "When there are no more values, the generator raises StopIteration." },
      { question: "Is (x for x in range(10)) a tuple?", options: ["No, it's a generator", "Yes", "It's a list", "It's an error"], correct: 0, explanation: "Parentheses with a comprehension-like syntax create a generator expression, not a tuple." },
      { question: "What does yield from do?", options: ["Delegates to another generator/iterable", "Yields from a file", "Returns from a generator", "Creates a sub-generator"], correct: 0, explanation: "'yield from iterable' delegates to another generator or iterable, yielding each of its values. It's equivalent to 'for item in iterable: yield item' but also properly handles send() and throw()." },
      { question: "Can generators be iterated more than once?", options: ["No, they're single-use", "Yes, they reset automatically", "Only with reset()", "Only generators from functions"], correct: 0, explanation: "Generators are single-use iterators. Once exhausted, they can't be restarted. To iterate again, you must create a new generator by calling the generator function again." },
      { question: "What does generator.send(value) do?", options: ["Sends a value into the generator at yield", "Sends the generator to another function", "Sends the result via email", "Terminates the generator"], correct: 0, explanation: "send(value) resumes the generator and sends a value that becomes the result of the current yield expression. The generator must be at a yield point. This enables two-way communication with generators." }
    ]
  },
  {
    id: "qa03", lessonId: "a03", title: "Context Managers Quiz", difficulty: "advanced",
    questions: [
      { question: "Which methods define a context manager class?", options: ["__enter__ and __exit__", "__init__ and __del__", "__open__ and __close__", "__start__ and __stop__"], correct: 0, explanation: "Context managers implement __enter__ (setup) and __exit__ (cleanup)." },
      { question: "What does __exit__ receive?", options: ["Exception info (type, value, traceback)", "The return value", "Nothing", "The file handle"], correct: 0, explanation: "__exit__ receives exception type, value, and traceback (or None if no error)." },
      { question: "What does @contextmanager do?", options: ["Creates a context manager from a generator", "Manages memory", "Creates a class", "Handles errors"], correct: 0, explanation: "@contextmanager lets you write a context manager as a generator function with yield." },
      { question: "What does returning True from __exit__ do?", options: ["Suppresses the exception", "Raises the exception", "Nothing special", "Closes the resource"], correct: 0, explanation: "Returning True from __exit__ suppresses any exception that occurred in the with block." },
      { question: "What is contextlib.suppress used for?", options: ["Ignoring specific exceptions", "Suppressing output", "Hiding warnings", "Disabling logging"], correct: 0, explanation: "suppress() silently ignores specified exception types within the with block." },
      { question: "Can you use multiple context managers in one 'with' statement?", options: ["Yes, separate with commas", "No, only one at a time", "Only with nested 'with'", "Only in Python 3.10+"], correct: 0, explanation: "You can combine context managers: 'with open('a') as f1, open('b') as f2:'. Both are managed and cleaned up properly." },
      { question: "What is the main benefit of context managers?", options: ["Guaranteed cleanup even if exceptions occur", "Faster code execution", "Less memory usage", "Better variable naming"], correct: 0, explanation: "Context managers guarantee cleanup (closing files, releasing locks, etc.) even if an exception occurs in the with block. This prevents resource leaks that can crash programs." },
      { question: "What does __enter__ typically return?", options: ["The resource to be managed (bound to 'as' variable)", "Nothing", "True or False", "The context manager itself always"], correct: 0, explanation: "__enter__() returns the value that gets assigned to the variable after 'as'. For files, it returns the file object. For locks, it might return True. It can return self, a different object, or anything appropriate." }
    ]
  },
  {
    id: "qa04", lessonId: "a04", title: "Concurrency Quiz", difficulty: "advanced",
    questions: [
      { question: "What is the GIL?", options: ["Global Interpreter Lock", "General Input Layer", "Global Integer Limit", "Generated Interface Lock"], correct: 0, explanation: "The GIL prevents multiple threads from executing Python bytecode simultaneously." },
      { question: "Threading is best for:", options: ["I/O-bound tasks", "CPU-bound tasks", "All tasks equally", "Memory-bound tasks"], correct: 0, explanation: "Threading excels at I/O-bound tasks (network, file I/O) where threads wait for external resources." },
      { question: "What does thread.join() do?", options: ["Waits for thread to finish", "Merges two threads", "Starts the thread", "Kills the thread"], correct: 0, explanation: "join() blocks until the thread completes execution." },
      { question: "What ensures thread safety?", options: ["Locks", "Comments", "Type hints", "Decorators"], correct: 0, explanation: "Locks (threading.Lock) prevent race conditions by ensuring only one thread accesses shared data." },
      { question: "What is ThreadPoolExecutor?", options: ["A pool of reusable threads", "A single thread", "A process manager", "A debugger"], correct: 0, explanation: "ThreadPoolExecutor manages a pool of threads and distributes tasks among them." },
      { question: "What is a race condition?", options: ["When multiple threads access shared data unpredictably", "When a program runs too fast", "When threads compete for CPU", "A type of deadlock"], correct: 0, explanation: "A race condition occurs when multiple threads access shared data simultaneously and the result depends on timing. Example: two threads incrementing a counter might both read '5', increment to '6', and write '6' — losing one increment." },
      { question: "What is a deadlock?", options: ["Two threads waiting for each other forever", "A crashed thread", "A thread that runs too long", "A memory leak"], correct: 0, explanation: "Deadlock occurs when thread A holds lock 1 and waits for lock 2, while thread B holds lock 2 and waits for lock 1. Neither can proceed. Prevent by always acquiring locks in the same order." },
      { question: "When should you use multiprocessing instead of threading?", options: ["For CPU-bound tasks that need true parallelism", "For I/O-bound tasks", "Always", "Never, threading is better"], correct: 0, explanation: "multiprocessing bypasses the GIL by using separate processes, each with its own Python interpreter. This enables true parallel CPU execution. Use it for heavy computation (math, image processing, data crunching)." }
    ]
  },
  {
    id: "qa05", lessonId: "a05", title: "Async Programming Quiz", difficulty: "advanced",
    questions: [
      { question: "What does 'await' do?", options: ["Pauses until the coroutine completes", "Creates a new thread", "Cancels the operation", "Starts a process"], correct: 0, explanation: "await suspends execution of the coroutine until the awaited result is ready." },
      { question: "What does asyncio.gather() do?", options: ["Runs coroutines concurrently", "Collects results sequentially", "Creates threads", "Merges functions"], correct: 0, explanation: "gather() runs multiple coroutines concurrently and collects all results." },
      { question: "What is a coroutine?", options: ["A function defined with async def", "A regular function", "A thread", "A process"], correct: 0, explanation: "Coroutines are functions defined with 'async def' that can be paused and resumed." },
      { question: "What starts the async event loop?", options: ["asyncio.run()", "async.start()", "loop.begin()", "await main()"], correct: 0, explanation: "asyncio.run() creates an event loop and runs the given coroutine." },
      { question: "Async is best for:", options: ["I/O-bound concurrent tasks", "CPU-heavy math", "Simple scripts", "File operations only"], correct: 0, explanation: "Async excels at handling many concurrent I/O operations like web requests." },
      { question: "How does async differ from threading?", options: ["Async uses cooperative multitasking (single thread)", "Async uses multiple threads", "They are the same", "Async is always slower"], correct: 0, explanation: "Async is single-threaded cooperative multitasking — coroutines voluntarily yield control at await points. Threading uses OS-managed preemptive multitasking. Async has less overhead and no race conditions." },
      { question: "What is asyncio.create_task() used for?", options: ["Schedules a coroutine to run concurrently", "Creates a new thread", "Creates a task object only", "Queues a function call"], correct: 0, explanation: "create_task() wraps a coroutine in a Task and schedules it to run concurrently. Unlike await (which waits), create_task starts it in the background. You can later await the task to get its result." },
      { question: "Can you use regular (sync) functions with await?", options: ["No, only coroutines can be awaited", "Yes, any function works", "Only with a wrapper", "Only built-in functions"], correct: 0, explanation: "Only coroutines (async def) and objects with __await__ can be used with await. To run a regular sync function in async code, use asyncio.to_thread() or loop.run_in_executor() to avoid blocking the event loop." }
    ]
  },
  {
    id: "qa06", lessonId: "a06", title: "Design Patterns Quiz", difficulty: "advanced",
    questions: [
      { question: "What does the Singleton pattern ensure?", options: ["Only one instance exists", "Fast creation", "Thread safety", "Immutability"], correct: 0, explanation: "Singleton restricts a class to a single instance across the application." },
      { question: "What does the Factory pattern do?", options: ["Creates objects without specifying exact class", "Builds factories", "Manages resources", "Optimizes creation"], correct: 0, explanation: "Factory encapsulates object creation logic, deciding which class to instantiate." },
      { question: "What is the Observer pattern?", options: ["Objects subscribe to events", "Watching variables", "Logging changes", "Monitoring performance"], correct: 0, explanation: "Observer defines a one-to-many dependency where objects are notified of state changes." },
      { question: "What is the Strategy pattern?", options: ["Swappable algorithms at runtime", "A planning tool", "Error handling strategy", "Memory management"], correct: 0, explanation: "Strategy lets you switch between different algorithms or behaviors at runtime." },
      { question: "When should you use design patterns?", options: ["When they naturally solve your problem", "Always", "Never", "Only in large projects"], correct: 0, explanation: "Use patterns when they fit your problem. Don't force them where they're not needed." },
      { question: "What is the Decorator pattern (not Python decorators)?", options: ["Dynamically adds behavior to objects without modifying their class", "Same as Python @decorator", "Adds colors to output", "A UI design pattern"], correct: 0, explanation: "The Decorator design pattern wraps objects to add behavior dynamically. It's similar in concept to Python's @decorator syntax but works at the object level: wrapped_obj = LoggingDecorator(original_obj)." },
      { question: "What is the Iterator pattern?", options: ["Provides sequential access to elements without exposing internals", "A for loop", "A counter variable", "A recursive function"], correct: 0, explanation: "The Iterator pattern provides a way to access elements of a collection sequentially without exposing its underlying representation. Python's for loop and __iter__/__next__ implement this pattern." },
      { question: "What problem does the Builder pattern solve?", options: ["Constructing complex objects step by step", "Building UI elements", "Compiling code faster", "Building databases"], correct: 0, explanation: "Builder separates the construction of a complex object from its representation. Instead of a constructor with 10 parameters, you build it step by step: builder.set_name('x').set_size(5).build()." }
    ]
  },
  {
    id: "qa07", lessonId: "a07", title: "Testing Quiz", difficulty: "advanced",
    questions: [
      { question: "What does 'assert' do?", options: ["Raises error if condition is False", "Prints a message", "Returns True/False", "Logs the value"], correct: 0, explanation: "assert raises AssertionError if the given condition evaluates to False." },
      { question: "What is TDD?", options: ["Test-Driven Development", "Type-Driven Design", "Test Debug Deploy", "Total Data Distribution"], correct: 0, explanation: "TDD means writing tests first, then writing code to make them pass." },
      { question: "What does assertEqual check?", options: ["Two values are equal", "Variable exists", "Type matches", "No errors"], correct: 0, explanation: "assertEqual(a, b) verifies that a == b, failing the test if not." },
      { question: "Why test edge cases?", options: ["They often reveal bugs", "They're required", "They run faster", "They're easier to write"], correct: 0, explanation: "Edge cases (empty input, boundary values, etc.) are where bugs most commonly hide." },
      { question: "What is a unit test?", options: ["Tests a single function/method", "Tests the entire app", "Tests the UI", "Tests performance"], correct: 0, explanation: "Unit tests verify individual functions or methods work correctly in isolation." },
      { question: "What is mocking in testing?", options: ["Replacing real objects with fake ones for testing", "Making fun of bad code", "Creating mock data", "Testing UI mockups"], correct: 0, explanation: "Mocking replaces real dependencies (databases, APIs, file systems) with controlled fake objects. This lets you test a function in isolation without needing the actual dependency. Use unittest.mock.Mock or patch()." },
      { question: "What does test coverage measure?", options: ["Percentage of code executed during tests", "Number of tests written", "Test execution time", "Number of bugs found"], correct: 0, explanation: "Code coverage measures what percentage of your code lines/branches are executed during testing. 100% coverage doesn't guarantee bug-free code, but low coverage means untested code paths that may contain bugs." },
      { question: "What is the Arrange-Act-Assert pattern?", options: ["Setup data, run function, check results", "Write, test, deploy", "Plan, code, review", "Read, process, output"], correct: 0, explanation: "AAA structures each test: Arrange (set up test data and preconditions), Act (call the function being tested), Assert (verify the result matches expectations). This makes tests clear and consistent." }
    ]
  },
  {
    id: "qa08", lessonId: "a08", title: "Type Hints & Dataclasses Quiz", difficulty: "advanced",
    questions: [
      { question: "Are type hints enforced at runtime?", options: ["No", "Yes", "Only in strict mode", "Only for functions"], correct: 0, explanation: "Type hints are for documentation and tooling only. Python doesn't enforce them at runtime." },
      { question: "What does @dataclass auto-generate?", options: ["__init__, __repr__, __eq__", "Only __init__", "Nothing", "__str__ only"], correct: 0, explanation: "@dataclass automatically generates __init__, __repr__, and __eq__ methods." },
      { question: "What does frozen=True do?", options: ["Makes instances immutable", "Freezes the class", "Prevents subclassing", "Caches values"], correct: 0, explanation: "frozen=True makes dataclass instances immutable (can't change attributes after creation)." },
      { question: "What is Optional[int]?", options: ["int or None", "Required int", "Optional parameter", "Default int"], correct: 0, explanation: "Optional[int] means the value can be an int or None." },
      { question: "What does field(default_factory=list) do?", options: ["Creates a new list for each instance", "Sets default to empty list", "Makes field optional", "Creates a factory"], correct: 0, explanation: "default_factory creates a new default value for each instance, avoiding the mutable default trap." },
      { question: "What does Union[int, str] mean?", options: ["Value can be int OR str", "Value must be both int and str", "Combines int and str", "Union of sets"], correct: 0, explanation: "Union[int, str] means the value can be either an int or a str. In Python 3.10+, you can use the shorter syntax: int | str." },
      { question: "What tool checks type hints without running code?", options: ["mypy", "pytest", "pylint", "black"], correct: 0, explanation: "mypy is the standard static type checker for Python. It reads your type hints and reports type errors without executing the code. Other type checkers include pyright and pytype." },
      { question: "What does TypeVar do?", options: ["Creates a generic type variable for generics", "Declares a variable type", "Converts types", "Validates types"], correct: 0, explanation: "TypeVar creates type variables for generic programming. T = TypeVar('T') lets you write functions like def first(items: list[T]) -> T that preserve type information: first(['a','b']) returns str, first([1,2]) returns int." }
    ]
  },
  {
    id: "qa09", lessonId: "a09", title: "Database Quiz", difficulty: "advanced",
    questions: [
      { question: "What is ':memory:' in SQLite?", options: ["An in-memory database", "A memory limit", "A file path", "An error"], correct: 0, explanation: "':memory:' creates a temporary database in RAM that's destroyed when the connection closes." },
      { question: "Why use parameterized queries (?)?", options: ["Prevent SQL injection", "Faster execution", "Better formatting", "Required by SQLite"], correct: 0, explanation: "Parameterized queries (?) prevent SQL injection attacks by properly escaping input." },
      { question: "What does fetchall() return?", options: ["List of all matching rows", "First row only", "Row count", "Column names"], correct: 0, explanation: "fetchall() returns a list of all rows matching the query." },
      { question: "What does conn.commit() do?", options: ["Saves changes to the database", "Closes the connection", "Starts a transaction", "Rolls back changes"], correct: 0, explanation: "commit() saves all pending changes to the database permanently." },
      { question: "What does AUTOINCREMENT do?", options: ["Auto-assigns unique IDs", "Auto-commits", "Auto-indexes", "Auto-updates"], correct: 0, explanation: "AUTOINCREMENT automatically generates a unique incrementing integer for new rows." },
      { question: "What does fetchone() return?", options: ["The next single row as a tuple", "All rows", "The first column", "A boolean"], correct: 0, explanation: "fetchone() returns the next row from the result set as a tuple (or None if no more rows). Use it when you expect a single result or want to process rows one at a time." },
      { question: "What does conn.rollback() do?", options: ["Undoes all uncommitted changes", "Rolls back to a savepoint", "Restarts the connection", "Deletes the database"], correct: 0, explanation: "rollback() undoes all changes made since the last commit(). This is essential for error handling: if an operation fails partway through, rollback ensures data consistency." },
      { question: "What is SQL injection?", options: ["Malicious SQL code inserted through user input", "Injecting data into a database", "A type of database index", "A performance technique"], correct: 0, explanation: "SQL injection is a security vulnerability where attackers insert malicious SQL through user input. Example: username = \"'; DROP TABLE users; --\" would delete your table if not parameterized. Always use ? placeholders, never string formatting." }
    ]
  },
  {
    id: "qa10", lessonId: "a10", title: "Functional Programming Quiz", difficulty: "advanced",
    questions: [
      { question: "What is a pure function?", options: ["Same input always gives same output, no side effects", "A function that never fails", "A function with no parameters", "A tested function"], correct: 0, explanation: "Pure functions depend only on their inputs and produce no side effects." },
      { question: "What does reduce() do?", options: ["Combines elements into a single value", "Reduces list size", "Removes duplicates", "Compresses data"], correct: 0, explanation: "reduce() applies a function cumulatively to reduce a sequence to a single value." },
      { question: "What is partial application?", options: ["Fixing some arguments of a function", "Incomplete functions", "Partial execution", "Error handling"], correct: 0, explanation: "partial() creates a new function with some arguments pre-filled." },
      { question: "What is function composition?", options: ["Combining functions: f(g(x))", "Writing functions", "Copying functions", "Nesting functions"], correct: 0, explanation: "Composition chains functions so the output of one becomes the input of the next." },
      { question: "Why prefer immutable data?", options: ["Prevents unexpected changes, safer concurrency", "Faster performance", "Less memory", "Required by Python"], correct: 0, explanation: "Immutable data prevents accidental modifications and is inherently thread-safe." },
      { question: "What is a higher-order function?", options: ["A function that takes or returns functions", "A more complex function", "A function with many parameters", "A class method"], correct: 0, explanation: "Higher-order functions either take functions as arguments (like map, filter, sorted) or return functions (like decorators, partial). They're a core concept in functional programming." },
      { question: "What does map(func, iterable) do?", options: ["Applies func to each element, returns iterator", "Maps keys to values", "Creates a dictionary", "Filters elements"], correct: 0, explanation: "map() applies a function to every element of an iterable and returns an iterator of results. list(map(str.upper, ['a','b'])) returns ['A','B']. It's equivalent to [func(x) for x in iterable]." },
      { question: "What is a side effect in functional programming?", options: ["Any observable change beyond the return value", "A bug in the code", "An unexpected error", "A performance issue"], correct: 0, explanation: "Side effects include: modifying global variables, printing to screen, writing to files, changing mutable arguments, making network requests. Pure functional programming avoids these for predictability and testability." }
    ]
  }
]

const quizzes = [...baseQuizzes, ...beginnerExercisesQuizzes, ...additionalQuizzes, ...dataQuizzes, ...libraryQuizzes]

export default quizzes
