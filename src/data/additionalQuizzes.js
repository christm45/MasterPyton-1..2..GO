// ──────────────────────────────────────────────────────────
// QUIZZES for Additional Lessons A + B (25 quizzes, 8 questions each)
// ──────────────────────────────────────────────────────────

export const additionalQuizzes = [
  // ===== BEGINNER b21-b25 =====
  {
    id: "qb21", lessonId: "b21", title: "Type Conversions Quiz", difficulty: "beginner",
    questions: [
      { question: "What does int(3.9) return?", options: ["3", "4", "3.9", "Error"], correct: 0, explanation: "int() truncates (cuts off the decimal). It does NOT round. int(3.9) = 3." },
      { question: "What does float('42') return?", options: ["42.0", "42", "'42.0'", "Error"], correct: 0, explanation: "float() converts the string '42' to the floating-point number 42.0." },
      { question: "What does str(True) return?", options: ["'True'", "1", "'true'", "Error"], correct: 0, explanation: "str(True) returns the string 'True' (capitalized, as Python displays booleans)." },
      { question: "What does bool(0) return?", options: ["False", "True", "0", "Error"], correct: 0, explanation: "0, empty string, empty list, and None are all falsy. bool(0) = False." },
      { question: "What does bool('hello') return?", options: ["True", "False", "'hello'", "Error"], correct: 0, explanation: "Any non-empty string is truthy. bool('hello') = True. Only bool('') = False." },
      { question: "What happens with int('hello')?", options: ["ValueError", "0", "'hello'", "None"], correct: 0, explanation: "int() can only convert strings that look like integers. 'hello' is not a number, so ValueError." },
      { question: "What does int(True) return?", options: ["1", "True", "Error", "0"], correct: 0, explanation: "In Python, True is equivalent to 1 and False to 0. int(True) = 1." },
      { question: "What does list('abc') return?", options: ["['a', 'b', 'c']", "['abc']", "'abc'", "Error"], correct: 0, explanation: "list() on a string splits it into individual characters: ['a', 'b', 'c']." }
    ]
  },
  {
    id: "qb22", lessonId: "b22", title: "Nested Loops Quiz", difficulty: "beginner",
    questions: [
      { question: "How many times does the inner loop run in total? for i in range(3): for j in range(4): ...", options: ["12", "7", "3", "4"], correct: 0, explanation: "Outer runs 3 times, inner runs 4 times each = 3 × 4 = 12 total iterations." },
      { question: "What is a nested loop?", options: ["A loop inside another loop", "Two loops running simultaneously", "A loop that skips iterations", "A backwards loop"], correct: 0, explanation: "A nested loop is a loop placed inside another loop. The inner loop completes all its iterations for each iteration of the outer loop." },
      { question: "What does this print? for i in range(2): for j in range(2): print(i,j)", options: ["0 0, 0 1, 1 0, 1 1", "0 0, 1 1", "0 1, 1 0", "Error"], correct: 0, explanation: "i=0: j goes 0,1. i=1: j goes 0,1. Output: (0,0), (0,1), (1,0), (1,1)." },
      { question: "Which pattern needs nested loops?", options: ["A multiplication table", "Counting 1 to 10", "Printing a list", "Adding numbers"], correct: 0, explanation: "A multiplication table needs two loops: one for rows and one for columns. Each cell is row × column." },
      { question: "How do you skip to the next outer iteration from inside the inner loop?", options: ["Use break in the inner loop", "Use continue in the outer loop", "Use return", "Not possible"], correct: 0, explanation: "break exits only the inner loop, returning control to the outer loop which continues its next iteration." },
      { question: "What is the time complexity of nested loops?", options: ["O(n²) for two nested loops", "O(n)", "O(1)", "O(log n)"], correct: 0, explanation: "Two nested loops each going through n items = n × n = n² operations. This is quadratic complexity." },
      { question: "For i in range(3): for j in range(i+1): - how many total iterations?", options: ["6", "9", "3", "4"], correct: 0, explanation: "i=0: j runs 1 time. i=1: j runs 2 times. i=2: j runs 3 times. Total: 1+2+3 = 6." },
      { question: "What does 'break' do in a nested loop?", options: ["Exits only the innermost loop", "Exits all loops", "Exits the program", "Skips one iteration"], correct: 0, explanation: "break only exits the loop it's directly inside. The outer loop continues normally." }
    ]
  },
  {
    id: "qb23", lessonId: "b23", title: "Tuples Quiz", difficulty: "beginner",
    questions: [
      { question: "What makes tuples different from lists?", options: ["Tuples are immutable (cannot be changed)", "Tuples are faster but the same otherwise", "Tuples can only hold numbers", "There is no difference"], correct: 0, explanation: "Tuples are immutable: once created, you cannot add, remove, or change elements. Lists are mutable." },
      { question: "How do you create a tuple?", options: ["Using parentheses: (1, 2, 3)", "Using square brackets: [1, 2, 3]", "Using curly braces: {1, 2, 3}", "Using angle brackets: <1, 2, 3>"], correct: 0, explanation: "Tuples use parentheses (). Lists use []. Sets use {}. You can also create tuples without parentheses: x = 1, 2, 3." },
      { question: "What does a, b = 10, 20 do?", options: ["Assigns 10 to a and 20 to b (tuple unpacking)", "Creates a tuple (10, 20)", "Causes an error", "Assigns 20 to both a and b"], correct: 0, explanation: "This is tuple unpacking. The right side creates a tuple (10, 20) and the left side unpacks it into separate variables." },
      { question: "How do you create a single-element tuple?", options: ["(1,) with a trailing comma", "(1) without comma", "tuple(1)", "[1]"], correct: 0, explanation: "(1) is just the number 1 in parentheses. You need a trailing comma: (1,) to make it a tuple." },
      { question: "Can tuples contain different data types?", options: ["Yes, like (1, 'hello', True)", "No, all elements must be the same type", "Only numbers and strings", "Only two elements"], correct: 0, explanation: "Like lists, tuples can contain any mix of types: (1, 'hello', True, 3.14)." },
      { question: "What happens if you try: t = (1,2,3); t[0] = 10?", options: ["TypeError (tuples are immutable)", "t becomes (10, 2, 3)", "t becomes [10, 2, 3]", "Nothing happens"], correct: 0, explanation: "Tuples are immutable - you cannot change their elements. This raises TypeError." },
      { question: "What does (1, 2) + (3, 4) produce?", options: ["(1, 2, 3, 4)", "(4, 6)", "Error", "((1,2), (3,4))"], correct: 0, explanation: "The + operator concatenates tuples, creating a new tuple with all elements." },
      { question: "When should you use a tuple instead of a list?", options: ["When data shouldn't change (coordinates, RGB, records)", "Always", "Never", "Only for numbers"], correct: 0, explanation: "Use tuples for fixed data: coordinates (x, y), RGB colors (255, 0, 0), database records. Their immutability prevents accidental changes." }
    ]
  },
  {
    id: "qb24", lessonId: "b24", title: "Sets Quiz", difficulty: "beginner",
    questions: [
      { question: "What is unique about sets?", options: ["They only contain unique elements (no duplicates)", "They are sorted automatically", "They can only contain numbers", "They are immutable"], correct: 0, explanation: "Sets automatically remove duplicates. {1, 2, 2, 3} becomes {1, 2, 3}." },
      { question: "How do you create a set?", options: ["Using curly braces: {1, 2, 3}", "Using square brackets: [1, 2, 3]", "Using parentheses: (1, 2, 3)", "Using set[]"], correct: 0, explanation: "Sets use curly braces {}. But for an empty set, use set() not {} (which creates an empty dict)." },
      { question: "What does {1,2,3} & {2,3,4} produce?", options: ["{2, 3} (intersection)", "{1, 2, 3, 4}", "{1, 4}", "Error"], correct: 0, explanation: "& is the intersection operator - elements in BOTH sets. 2 and 3 are in both." },
      { question: "What does {1,2,3} | {2,3,4} produce?", options: ["{1, 2, 3, 4} (union)", "{2, 3}", "{1, 4}", "Error"], correct: 0, explanation: "| is the union operator - ALL unique elements from both sets combined." },
      { question: "What does {1,2,3} - {2,3,4} produce?", options: ["{1} (difference)", "{4}", "{1, 4}", "Error"], correct: 0, explanation: "- is the difference operator - elements in the first set but NOT in the second." },
      { question: "Are sets ordered?", options: ["No, sets are unordered", "Yes, they maintain insertion order", "Yes, they sort automatically", "Depends on the elements"], correct: 0, explanation: "Sets are unordered. You cannot access elements by index. Use sorted(my_set) if you need order." },
      { question: "How do you remove duplicates from a list?", options: ["list(set(my_list))", "my_list.unique()", "my_list.remove_duplicates()", "set(my_list).list()"], correct: 0, explanation: "Convert to set (removes duplicates) then back to list: list(set([1,1,2,3,3])) = [1, 2, 3]." },
      { question: "Can a set contain a list?", options: ["No, sets can only contain hashable (immutable) types", "Yes", "Only if the list is empty", "Only lists of numbers"], correct: 0, explanation: "Sets require hashable elements. Lists are mutable (unhashable). Use tuples instead: {(1,2), (3,4)} works." }
    ]
  },
  {
    id: "qb25", lessonId: "b25", title: "Expense Tracker Quiz", difficulty: "beginner",
    questions: [
      { question: "Why use a list of dictionaries for expenses?", options: ["Each dict holds one expense with category, amount, description", "Lists are faster", "Python requires it", "It's the only way"], correct: 0, explanation: "A list of dicts is a natural way to store records. Each dict is one expense with named fields." },
      { question: "How do you add a new expense to the list?", options: ["expenses.append({'category': 'Food', 'amount': 15})", "expenses.add(expense)", "expenses + expense", "expenses.insert(expense)"], correct: 0, explanation: ".append() adds a new item to the end of the list. The item can be any type, including a dictionary." },
      { question: "How do you sum all expenses?", options: ["sum(e['amount'] for e in expenses)", "expenses.sum()", "sum(expenses)", "total(expenses)"], correct: 0, explanation: "Use a generator expression inside sum(): sum(e['amount'] for e in expenses) extracts and sums all amounts." },
      { question: "How do you group expenses by category?", options: ["Use a dict with category as key and list of amounts as value", "Sort the list", "Use a separate list for each category", "Use a tuple"], correct: 0, explanation: "Create a dict: groups = {}. For each expense, add its amount to groups[category]." },
      { question: "What does dict.get(key, default) do?", options: ["Returns value if key exists, otherwise returns default", "Always returns default", "Raises an error if key missing", "Creates a new key"], correct: 0, explanation: ".get() safely retrieves values. If the key doesn't exist, it returns the default instead of raising KeyError." },
      { question: "How do you find the highest expense?", options: ["max(expenses, key=lambda e: e['amount'])", "max(expenses)", "expenses.max()", "sort(expenses)[-1]"], correct: 0, explanation: "max() with key= lets you specify which field to compare. The lambda extracts the amount for comparison." },
      { question: "What does sum(1 for e in expenses if e['category'] == 'Food') count?", options: ["Number of Food expenses", "Total Food spending", "Number of all expenses", "Nothing"], correct: 0, explanation: "This generator counts how many expenses have category 'Food'. sum(1 for ... if ...) counts matching items." },
      { question: "Why are functions useful in an expense tracker?", options: ["They organize code into reusable, named actions", "They make code run faster", "Python requires functions", "They use less memory"], correct: 0, explanation: "Functions like add_expense(), get_total(), by_category() make code organized, readable, and reusable." }
    ]
  },

  // ===== INTERMEDIATE i11-i15 =====
  {
    id: "qi11", lessonId: "i11", title: "Dict Comprehensions Quiz", difficulty: "intermediate",
    questions: [
      { question: "What is the syntax for a dict comprehension?", options: ["{key: value for item in iterable}", "[key: value for item in iterable]", "dict(key=value for item in iterable)", "{key, value for item in iterable}"], correct: 0, explanation: "Dict comprehensions use {key_expr: value_expr for var in iterable}. Curly braces with a colon." },
      { question: "What does {x: x**2 for x in range(4)} produce?", options: ["{0: 0, 1: 1, 2: 4, 3: 9}", "[0, 1, 4, 9]", "{0, 1, 4, 9}", "Error"], correct: 0, explanation: "Creates a dict mapping each number to its square. 0->0, 1->1, 2->4, 3->9." },
      { question: "How do you filter in a dict comprehension?", options: ["Add 'if condition' at the end", "Use filter() separately", "Add 'if' before the expression", "Use .filter()"], correct: 0, explanation: "{k: v for k, v in d.items() if v > 0} filters to only positive values." },
      { question: "How do you swap keys and values of a dict?", options: ["{v: k for k, v in original.items()}", "original.swap()", "dict(reversed(original))", "original[::-1]"], correct: 0, explanation: "{v: k for k, v in d.items()} creates a new dict with keys and values swapped." },
      { question: "What does {k: v.upper() for k, v in d.items()} do?", options: ["Creates a dict with uppercased values", "Uppercases the keys", "Modifies the original dict", "Causes an error"], correct: 0, explanation: "Creates a NEW dict where all values are converted to uppercase. The original dict is unchanged." },
      { question: "Can you use dict comprehension to create a dict from two lists?", options: ["Yes: {k: v for k, v in zip(keys, values)}", "No, use a loop", "Only with dict()", "Only if lists are the same length"], correct: 0, explanation: "zip pairs elements from both lists, and the comprehension creates key-value pairs." },
      { question: "What happens if keys are duplicated in a dict comprehension?", options: ["Later values overwrite earlier ones", "An error is raised", "Both values are kept", "The first value wins"], correct: 0, explanation: "Dictionary keys must be unique. If the same key appears twice, the last value wins." },
      { question: "Is {x: x for x in [1,2,3]} the same as dict.fromkeys([1,2,3])?", options: ["Almost - fromkeys sets all values to None by default", "Exactly the same", "Completely different", "fromkeys doesn't exist"], correct: 0, explanation: "dict.fromkeys([1,2,3]) creates {1: None, 2: None, 3: None}. The comprehension creates {1: 1, 2: 2, 3: 3}." }
    ]
  },
  {
    id: "qi12", lessonId: "i12", title: "Unpacking Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does a, *b = [1, 2, 3, 4] assign?", options: ["a=1, b=[2,3,4]", "a=[1], b=[2,3,4]", "a=1, b=(2,3,4)", "Error"], correct: 0, explanation: "The * catches all remaining elements into a list. a gets the first item, b gets the rest as a list." },
      { question: "What does *a, b = [1, 2, 3, 4] assign?", options: ["a=[1,2,3], b=4", "a=1, b=[2,3,4]", "Error", "a=[1,2,3,4], b=None"], correct: 0, explanation: "b gets the last item (4), and *a catches everything before it: [1, 2, 3]." },
      { question: "What is **kwargs used for?", options: ["Collecting keyword arguments into a dictionary", "Unpacking a list", "Squaring values", "Creating tuples"], correct: 0, explanation: "**kwargs collects extra keyword arguments as a dict: def f(**kwargs) called with f(a=1, b=2) gives kwargs={'a': 1, 'b': 2}." },
      { question: "What is *args used for?", options: ["Collecting positional arguments into a tuple", "Unpacking a dictionary", "Multiplying arguments", "Creating lists"], correct: 0, explanation: "*args collects extra positional arguments as a tuple: def f(*args) called with f(1, 2, 3) gives args=(1, 2, 3)." },
      { question: "What does a, b = b, a do?", options: ["Swaps the values of a and b", "Causes an error", "Sets both to b's value", "Creates a tuple"], correct: 0, explanation: "Python evaluates the right side first (creates a tuple), then unpacks it. This swaps values in one line." },
      { question: "How do you unpack a dict into function keyword arguments?", options: ["func(**my_dict)", "func(*my_dict)", "func(my_dict)", "func(unpack(my_dict))"], correct: 0, explanation: "** unpacks a dict: if d = {'a': 1, 'b': 2}, then func(**d) is the same as func(a=1, b=2)." },
      { question: "What does _ mean in unpacking?", options: ["A throwaway variable for values you don't need", "An error", "The last variable", "A private variable"], correct: 0, explanation: "_ is convention for 'I don't care about this value': a, _, c = (1, 2, 3) ignores the middle value." },
      { question: "What does [*a, *b] do?", options: ["Concatenates lists a and b into a new list", "Creates nested lists", "Causes an error", "Unpacks into tuples"], correct: 0, explanation: "[*a, *b] unpacks both lists into a new list: [*[1,2], *[3,4]] = [1, 2, 3, 4]." }
    ]
  },
  {
    id: "qi13", lessonId: "i13", title: "Enumerate, Zip & Map Quiz", difficulty: "intermediate",
    questions: [
      { question: "What does enumerate(['a','b','c']) produce?", options: ["(0,'a'), (1,'b'), (2,'c')", "('a',0), ('b',1), ('c',2)", "[0, 1, 2]", "['a', 'b', 'c']"], correct: 0, explanation: "enumerate() yields (index, value) pairs. Default start index is 0." },
      { question: "What does zip([1,2], ['a','b']) produce?", options: ["(1,'a'), (2,'b')", "([1,'a'], [2,'b'])", "[1, 2, 'a', 'b']", "{1:'a', 2:'b'}"], correct: 0, explanation: "zip() pairs elements from multiple iterables: first with first, second with second." },
      { question: "What happens if zip gets lists of different lengths?", options: ["Stops at the shortest list", "Fills missing values with None", "Raises an error", "Repeats the shorter list"], correct: 0, explanation: "zip() stops when the shortest iterable is exhausted. Use itertools.zip_longest() for None-filling." },
      { question: "What does map(str, [1, 2, 3]) return?", options: ["An iterator of ['1', '2', '3']", "['1', '2', '3'] directly", "'123'", "Error"], correct: 0, explanation: "map() applies a function to each element and returns an iterator. list(map(str, [1,2,3])) gives ['1','2','3']." },
      { question: "What does filter(None, [0, 1, '', 'hi', False]) produce?", options: ["[1, 'hi'] (truthy values only)", "[0, 1, '', 'hi', False]", "[]", "Error"], correct: 0, explanation: "filter(None, ...) keeps only truthy values. 0, '', and False are falsy, so they're removed." },
      { question: "How do you create a dict from two lists with zip?", options: ["dict(zip(keys, values))", "zip(keys, values).dict()", "dict(keys, values)", "zip.dict(keys, values)"], correct: 0, explanation: "dict(zip(['a','b'], [1,2])) creates {'a': 1, 'b': 2}. zip pairs them, dict converts." },
      { question: "What does enumerate('abc', start=1) produce?", options: ["(1,'a'), (2,'b'), (3,'c')", "(0,'a'), (1,'b'), (2,'c')", "(1,'abc')", "Error"], correct: 0, explanation: "start=1 makes the index begin at 1 instead of 0." },
      { question: "What does list(map(len, ['hi', 'hello', 'hey'])) return?", options: ["[2, 5, 3]", "['hi', 'hello', 'hey']", "[3]", "10"], correct: 0, explanation: "map(len, ...) applies len() to each string: len('hi')=2, len('hello')=5, len('hey')=3." }
    ]
  },
  {
    id: "qi14", lessonId: "i14", title: "Nested Data Structures Quiz", difficulty: "intermediate",
    questions: [
      { question: "How do you access 'Bob' in data = {'users': [{'name': 'Bob'}]}?", options: ["data['users'][0]['name']", "data.users[0].name", "data['users']['name']", "data[0]['name']"], correct: 0, explanation: "Navigate step by step: data['users'] gets the list, [0] gets first dict, ['name'] gets 'Bob'." },
      { question: "What is a list of dictionaries useful for?", options: ["Storing records like rows in a database", "Making code faster", "Saving memory", "Only for JSON data"], correct: 0, explanation: "A list of dicts is like a table: each dict is a row with named columns (keys)." },
      { question: "How do you safely access nested keys that might not exist?", options: ["Use .get() with defaults at each level", "Use try/except", "Always check with 'in' first", "All of these work"], correct: 3, explanation: "All approaches work: .get() returns None/default, try/except catches KeyError, 'in' checks existence." },
      { question: "What does [s['name'] for s in students] create?", options: ["A list of all student names", "A dict of names", "A single name", "Error"], correct: 0, explanation: "List comprehension extracts the 'name' field from each student dict." },
      { question: "How do you sort a list of dicts by a specific key?", options: ["sorted(data, key=lambda x: x['age'])", "data.sort('age')", "sorted(data, 'age')", "data.sort_by('age')"], correct: 0, explanation: "sorted() with key= parameter: the lambda tells Python which field to sort by." },
      { question: "Can a dict value be another dict?", options: ["Yes, dicts can be nested", "No, values must be simple types", "Only one level deep", "Only in Python 3"], correct: 0, explanation: "Dicts can contain any type as values, including other dicts, lists, or any combination." },
      { question: "What does max(students, key=lambda s: s['score']) return?", options: ["The student dict with the highest score", "The highest score number", "The student's name", "A sorted list"], correct: 0, explanation: "max() with key returns the entire element (the dict) that has the maximum value for the specified key." },
      { question: "How do you flatten a list of lists?", options: ["[item for sublist in nested for item in sublist]", "nested.flatten()", "flat(nested)", "sum(nested)"], correct: 0, explanation: "Nested comprehension: the outer 'for' iterates sublists, the inner 'for' iterates items within each." }
    ]
  },
  {
    id: "qi15", lessonId: "i15", title: "Scope & Closures Quiz", difficulty: "intermediate",
    questions: [
      { question: "What is LEGB in Python?", options: ["Local, Enclosing, Global, Built-in scope order", "A Python framework", "A data structure", "A loop type"], correct: 0, explanation: "Python looks for variables in order: Local (current function), Enclosing (outer function), Global (module), Built-in." },
      { question: "What is a closure?", options: ["A function that captures variables from its enclosing scope", "A way to close files", "A type of loop", "A class method"], correct: 0, explanation: "A closure is an inner function that remembers variables from the outer function even after it returns." },
      { question: "What does the 'global' keyword do?", options: ["Makes a variable reference the global scope", "Creates a global function", "Makes all variables global", "Prevents variable access"], correct: 0, explanation: "global x inside a function means 'use the module-level x, not a local one'." },
      { question: "What does 'nonlocal' do?", options: ["References a variable from the enclosing function scope", "Makes a variable global", "Creates a new scope", "Prevents reassignment"], correct: 0, explanation: "nonlocal x in an inner function means 'use x from the nearest enclosing function, not local'." },
      { question: "What scope does a variable defined inside a function have?", options: ["Local scope (only accessible inside that function)", "Global scope", "Built-in scope", "No scope"], correct: 0, explanation: "Variables defined inside a function are local to that function. They don't exist outside it." },
      { question: "Can an inner function read outer function variables?", options: ["Yes, it can read but not reassign without 'nonlocal'", "No, never", "Only with 'global'", "Only if passed as parameter"], correct: 0, explanation: "Inner functions can read enclosing variables freely. But to reassign them, you need the 'nonlocal' keyword." },
      { question: "What does this return? def make_adder(n): return lambda x: x + n; add5 = make_adder(5); add5(3)", options: ["8", "5", "3", "Error"], correct: 0, explanation: "make_adder(5) returns a lambda that adds 5. The lambda 'closes over' n=5. add5(3) = 3 + 5 = 8." },
      { question: "Why are closures useful?", options: ["They create functions with private state", "They make code faster", "They prevent bugs", "They are required by Python"], correct: 0, explanation: "Closures can hold private state (like a counter) without using classes. They're used in decorators, callbacks, and factories." }
    ]
  },

  // ===== ADVANCED a11-a15 =====
  {
    id: "qa11", lessonId: "a11", title: "Type Hints Quiz", difficulty: "advanced",
    questions: [
      { question: "Do type hints enforce types at runtime?", options: ["No, they are only documentation/tooling hints", "Yes, Python checks them", "Only in strict mode", "Only for function returns"], correct: 0, explanation: "Type hints are NOT enforced by Python. They help developers and tools like mypy, but Python ignores them at runtime." },
      { question: "What does -> str mean in a function definition?", options: ["The function returns a string", "The function takes a string", "It's a lambda", "It creates a string variable"], correct: 0, explanation: "-> after the parameters indicates the return type. def greet(name: str) -> str means it returns a string." },
      { question: "What is Optional[int]?", options: ["Either int or None", "An optional parameter", "A nullable integer", "Same as int"], correct: 0, explanation: "Optional[int] means the value can be int OR None. It's equivalent to Union[int, None]." },
      { question: "What is Union[int, str]?", options: ["Can be either int or str", "Must be both int and str", "Converts int to str", "A new type"], correct: 0, explanation: "Union[int, str] means the value can be either an int or a str." },
      { question: "How do you annotate a list of integers?", options: ["List[int]", "list(int)", "[int]", "int[]"], correct: 0, explanation: "from typing import List, then List[int]. In Python 3.9+, you can also use list[int] (lowercase)." },
      { question: "What does Dict[str, int] mean?", options: ["A dict with string keys and integer values", "A dict of strings", "A dict of integers", "A dict that converts str to int"], correct: 0, explanation: "Dict[str, int] means keys are strings and values are integers. Like {'age': 25, 'score': 100}." },
      { question: "What tool checks type hints without running the code?", options: ["mypy", "pytest", "pylint", "black"], correct: 0, explanation: "mypy is a static type checker for Python. It reads type hints and reports type errors without executing the code." },
      { question: "What does Tuple[int, str, bool] mean?", options: ["A tuple with exactly 3 elements: int, str, bool", "A tuple of any length", "A union of three types", "Error"], correct: 0, explanation: "Tuple[int, str, bool] means exactly 3 elements with those specific types in order. Like (1, 'hello', True)." }
    ]
  },
  {
    id: "qa12", lessonId: "a12", title: "Dataclasses Quiz", difficulty: "advanced",
    questions: [
      { question: "What does @dataclass automatically generate?", options: ["__init__, __repr__, __eq__", "Only __init__", "All magic methods", "Nothing, it's just a marker"], correct: 0, explanation: "@dataclass generates __init__ (constructor), __repr__ (string representation), and __eq__ (equality comparison)." },
      { question: "What is field(default_factory=list) for?", options: ["Creates a new empty list for each instance", "Sets the default to None", "Makes the field required", "Creates a shared list"], correct: 0, explanation: "default_factory=list creates a NEW empty list for each instance, avoiding the mutable default argument bug." },
      { question: "When does __post_init__ run?", options: ["After __init__ completes", "Before __init__", "When the object is deleted", "Never automatically"], correct: 0, explanation: "__post_init__ is called at the end of the generated __init__. Use it for computed fields or validation." },
      { question: "How do you make a dataclass immutable?", options: ["@dataclass(frozen=True)", "@dataclass(immutable=True)", "Use tuples instead", "It's not possible"], correct: 0, explanation: "frozen=True makes the dataclass immutable: you can't change field values after creation." },
      { question: "What is the advantage of dataclasses over regular classes?", options: ["Less boilerplate code for data-holding classes", "They run faster", "They use less memory", "They support inheritance better"], correct: 0, explanation: "Dataclasses eliminate repetitive __init__, __repr__, __eq__ code. You define fields and Python generates the rest." },
      { question: "Can dataclasses have methods?", options: ["Yes, just like regular classes", "No, they only hold data", "Only class methods", "Only static methods"], correct: 0, explanation: "Dataclasses ARE regular classes with auto-generated methods. You can add any methods you want." },
      { question: "What does @dataclass(order=True) enable?", options: ["Comparison operators (<, >, <=, >=)", "Sorting by default", "Custom ordering", "Alphabetical fields"], correct: 0, explanation: "order=True generates __lt__, __gt__, __le__, __ge__ methods, enabling comparisons between instances." },
      { question: "Can you use inheritance with dataclasses?", options: ["Yes, child dataclass inherits parent fields", "No, dataclasses don't support inheritance", "Only single inheritance", "Only with mixins"], correct: 0, explanation: "Dataclasses support inheritance. Child classes get parent fields plus their own." }
    ]
  },
  {
    id: "qa13", lessonId: "a13", title: "Abstract Base Classes Quiz", difficulty: "advanced",
    questions: [
      { question: "What happens if you try to instantiate an ABC?", options: ["TypeError is raised", "An empty object is created", "Nothing special", "AttributeError"], correct: 0, explanation: "You cannot create an instance of a class with abstract methods. Python raises TypeError." },
      { question: "What does @abstractmethod do?", options: ["Forces subclasses to implement the method", "Makes the method private", "Makes the method static", "Prevents the method from being called"], correct: 0, explanation: "@abstractmethod marks a method that MUST be implemented by any non-abstract subclass." },
      { question: "What if a subclass doesn't implement all abstract methods?", options: ["TypeError when trying to create an instance", "The subclass inherits the parent's implementation", "A warning is shown", "Nothing happens"], correct: 0, explanation: "If any abstract method is not implemented, the subclass itself becomes abstract and cannot be instantiated." },
      { question: "Can an ABC have non-abstract methods?", options: ["Yes, they are inherited normally", "No, all methods must be abstract", "Only static methods", "Only class methods"], correct: 0, explanation: "ABCs can mix abstract and concrete methods. Concrete methods are inherited and usable by subclasses." },
      { question: "What module provides ABC?", options: ["abc", "abstract", "base", "interface"], correct: 0, explanation: "from abc import ABC, abstractmethod. The module is simply named 'abc'." },
      { question: "What is the purpose of abstract classes?", options: ["To define a common interface for related classes", "To make code run faster", "To prevent inheritance", "To save memory"], correct: 0, explanation: "ABCs define a contract: any class that extends the ABC must implement the specified methods." },
      { question: "Can you have abstract properties?", options: ["Yes, combine @property and @abstractmethod", "No, only methods", "Only with a special decorator", "Only in Python 3.10+"], correct: 0, explanation: "Stack decorators: @property then @abstractmethod (or vice versa) to create abstract properties." },
      { question: "How is ABC different from a regular parent class?", options: ["ABC prevents instantiation and enforces method implementation", "ABC is faster", "ABC uses less memory", "No difference"], correct: 0, explanation: "Regular parent classes can be instantiated and don't enforce method implementations. ABCs do both." }
    ]
  },
  {
    id: "qa14", lessonId: "a14", title: "Property Decorators Quiz", difficulty: "advanced",
    questions: [
      { question: "What does @property do?", options: ["Makes a method accessible like an attribute", "Makes an attribute private", "Creates a class variable", "Prevents attribute access"], correct: 0, explanation: "@property lets you call a method without (): obj.name instead of obj.name(). It looks like an attribute but runs code." },
      { question: "What is the naming convention for the internal attribute?", options: ["Prefix with underscore: _name", "Use UPPERCASE", "Add 'internal_' prefix", "Same name as property"], correct: 0, explanation: "Convention: _name for the internal attribute, name (without underscore) for the property." },
      { question: "How do you create a setter for a property?", options: ["@property_name.setter", "@setter", "@set_property", "def set_name(self, value)"], correct: 0, explanation: "Use @name.setter where 'name' matches the @property method name." },
      { question: "What is a computed property?", options: ["A property that calculates its value from other attributes", "A cached property", "A class variable", "A constant"], correct: 0, explanation: "Computed properties calculate a value on the fly: area = width * height, no stored value needed." },
      { question: "When is the setter called?", options: ["When you assign a value: obj.name = value", "When you read the value", "When the object is created", "Never automatically"], correct: 0, explanation: "The setter runs when you use = assignment: obj.name = 'new_value' triggers the @name.setter method." },
      { question: "Why use properties instead of direct attributes?", options: ["To add validation, computation, or logging", "Properties are faster", "Python requires them", "For memory efficiency"], correct: 0, explanation: "Properties let you add validation (reject negative values), compute values, or log access without changing the interface." },
      { question: "Can a property be read-only?", options: ["Yes, define @property without a setter", "No, all properties need setters", "Only with frozen classes", "Only with __slots__"], correct: 0, explanation: "If you only define @property (getter) without @name.setter, the property is read-only. Assignment raises AttributeError." },
      { question: "What does @name.deleter do?", options: ["Defines what happens when del obj.name is called", "Deletes the property", "Removes the setter", "Clears the cache"], correct: 0, explanation: "@name.deleter defines the behavior for del obj.name. It's rarely used but available for cleanup." }
    ]
  },
  {
    id: "qa15", lessonId: "a15", title: "Modern Python Quiz", difficulty: "advanced",
    questions: [
      { question: "What does the walrus operator := do?", options: ["Assigns and returns a value in one expression", "Compares two values", "Creates a constant", "Defines a type hint"], correct: 0, explanation: ":= assigns a value to a variable AND returns it, allowing assignment inside expressions like if and while." },
      { question: "What Python version introduced :=?", options: ["3.8", "3.6", "3.10", "3.12"], correct: 0, explanation: "The walrus operator was introduced in Python 3.8 (PEP 572)." },
      { question: "What does 1 < x < 10 mean?", options: ["x is between 1 and 10 (exclusive)", "A syntax error", "x equals 1 or 10", "Compare 1 < x then x < 10 separately"], correct: 0, explanation: "Python supports chained comparisons. 1 < x < 10 is equivalent to (1 < x) and (x < 10)." },
      { question: "What does f'{x = }' print when x = 42?", options: ["x = 42", "42", "x=42", "Error"], correct: 0, explanation: "f'{x = }' is a debug shortcut (Python 3.8+). It prints both the expression and its value." },
      { question: "Where is := most useful?", options: ["In while loops and if conditions to avoid repeated calls", "In function definitions", "In class definitions", "In import statements"], correct: 0, explanation: "Walrus shines when you need to use a value in a condition AND later: while (line := input()) != 'quit':" },
      { question: "What does [y for x in data if (y := f(x)) > 0] do?", options: ["Filters and transforms in one step using walrus", "Causes a syntax error", "Creates a tuple", "Same as a regular list comprehension"], correct: 0, explanation: ":= in a comprehension lets you compute a value, test it, and include it without calling f(x) twice." },
      { question: "What is 'match/case' in Python 3.10+?", options: ["Structural pattern matching (like switch/case)", "Regular expression matching", "String matching", "File matching"], correct: 0, explanation: "match/case is Python's pattern matching statement, similar to switch/case in other languages but more powerful." },
      { question: "What does a, *rest = [1,2,3,4,5] produce for rest?", options: ["[2, 3, 4, 5]", "(2, 3, 4, 5)", "[1]", "Error"], correct: 0, explanation: "Extended unpacking: a gets 1, *rest captures everything else as a list: [2, 3, 4, 5]." }
    ]
  },

  // ===== DATA d11-d15 =====
  {
    id: "qd11", lessonId: "d11", title: "Data Aggregation Quiz", difficulty: "data",
    questions: [
      { question: "What is the group-by pattern?", options: ["Collecting items into groups by a shared key", "Sorting items", "Filtering items", "Counting all items"], correct: 0, explanation: "Group-by collects items with the same key into lists. Like grouping sales by product or region." },
      { question: "What does defaultdict(list) do?", options: ["Creates a dict that auto-creates empty lists for new keys", "Creates a sorted dict", "Creates a frozen dict", "Same as a regular dict"], correct: 0, explanation: "defaultdict(list) creates a new empty list whenever you access a missing key, avoiding KeyError." },
      { question: "How do you compute the average of a group?", options: ["sum(group) / len(group)", "average(group)", "group.mean()", "mean(group)"], correct: 0, explanation: "Python doesn't have a built-in average(). Use sum()/len() or statistics.mean()." },
      { question: "What does sum(e['amount'] for e in data) do?", options: ["Sums the 'amount' field from all dicts in data", "Sums all values in all dicts", "Counts the items", "Creates a list"], correct: 0, explanation: "Generator expression extracts each 'amount' and sum() adds them all together." },
      { question: "How do you sort groups by their total?", options: ["sorted(groups.items(), key=lambda x: sum(x[1]))", "groups.sort()", "sort(groups)", "groups.order_by('total')"], correct: 0, explanation: "sorted() with key lambda: x[0] is the group name, x[1] is the list of values, sum(x[1]) is the total." },
      { question: "What is aggregation?", options: ["Reducing a group of values to a single summary value", "Sorting data", "Adding new data", "Filtering data"], correct: 0, explanation: "Aggregation reduces many values to one: sum, count, average, min, max are all aggregation functions." },
      { question: "Why group data before aggregating?", options: ["To get summaries per category, not just one total", "It's required by Python", "For performance", "To save memory"], correct: 0, explanation: "Grouping lets you see breakdowns: total sales per region, average score per student, etc." },
      { question: "What does groups.get(key, []) return if key doesn't exist?", options: ["An empty list", "None", "KeyError", "0"], correct: 0, explanation: ".get(key, []) returns an empty list for missing keys, which is safe for appending." }
    ]
  },
  {
    id: "qd12", lessonId: "d12", title: "JSON Data Quiz", difficulty: "data",
    questions: [
      { question: "What does json.loads() do?", options: ["Parses a JSON string into Python objects", "Loads a JSON file", "Creates a JSON string", "Validates JSON"], correct: 0, explanation: "loads = 'load string'. It converts a JSON string into Python dicts/lists/etc." },
      { question: "What does json.dumps() do?", options: ["Converts Python objects to a JSON string", "Deletes JSON data", "Reads a JSON file", "Validates JSON"], correct: 0, explanation: "dumps = 'dump string'. It converts Python objects into a JSON-formatted string." },
      { question: "What Python type does a JSON object become?", options: ["dict", "list", "object", "tuple"], correct: 0, explanation: "JSON objects {\"key\": \"value\"} become Python dicts. JSON arrays become lists." },
      { question: "What does indent=2 do in json.dumps()?", options: ["Pretty-prints with 2-space indentation", "Limits to 2 lines", "Indents keys by 2 levels", "Adds 2 spaces to values"], correct: 0, explanation: "indent=2 formats the JSON with 2-space indentation for readability." },
      { question: "What does sort_keys=True do?", options: ["Sorts dictionary keys alphabetically in the output", "Sorts values", "Sorts the array", "Reverses the order"], correct: 0, explanation: "sort_keys=True ensures keys are output in alphabetical order, making the JSON consistent and diffable." },
      { question: "What is JSON null equivalent to in Python?", options: ["None", "0", "\"\"", "False"], correct: 0, explanation: "JSON null -> Python None. Also: true->True, false->False." },
      { question: "How do you access nested JSON data?", options: ["Chain bracket notation: data['key1']['key2']", "Use dot notation: data.key1.key2", "data.get('key1.key2')", "data['key1.key2']"], correct: 0, explanation: "Navigate step by step: data['users'][0]['name']. Each bracket access goes one level deeper." },
      { question: "What happens if you json.loads() invalid JSON?", options: ["json.JSONDecodeError", "Returns None", "Returns empty dict", "Silently fails"], correct: 0, explanation: "Invalid JSON raises json.JSONDecodeError. Always handle this with try/except in production code." }
    ]
  },
  {
    id: "qd13", lessonId: "d13", title: "Data Filtering Quiz", difficulty: "data",
    questions: [
      { question: "What is the most Pythonic way to filter a list?", options: ["List comprehension with if condition", "filter() function", "A for loop with append", "remove() in a loop"], correct: 0, explanation: "List comprehensions are considered the most Pythonic: [x for x in data if condition]." },
      { question: "How do you filter with multiple conditions?", options: ["Use 'and'/'or' in the if clause", "Chain multiple filter() calls", "Use nested list comprehensions", "Use switch/case"], correct: 0, explanation: "[x for x in data if cond1 and cond2] or [x for x in data if cond1 or cond2]." },
      { question: "What does filter(func, iterable) return?", options: ["An iterator of items where func returns True", "A list", "A dict", "A boolean"], correct: 0, explanation: "filter() returns an iterator. Wrap in list() to get a list: list(filter(func, data))." },
      { question: "How do you filter dicts by value?", options: ["{k: v for k, v in d.items() if v > threshold}", "d.filter(threshold)", "filter(d, threshold)", "d[d > threshold]"], correct: 0, explanation: "Dict comprehension with if condition filters key-value pairs." },
      { question: "What is the difference between filter and map?", options: ["filter selects items, map transforms items", "They are the same", "filter transforms, map selects", "filter works on dicts, map on lists"], correct: 0, explanation: "filter keeps/removes items based on condition. map applies a function to transform each item." },
      { question: "Can you modify items while filtering?", options: ["Yes, list comprehension can filter AND transform", "No, filtering only selects", "Only with map", "Only with reduce"], correct: 0, explanation: "[x*2 for x in data if x > 0] both filters (>0) and transforms (*2) in one step." },
      { question: "How do you check if any item matches a condition?", options: ["any(condition for item in data)", "data.any(condition)", "some(data, condition)", "exists(data, condition)"], correct: 0, explanation: "any() returns True if at least one element is truthy: any(x > 10 for x in [1, 5, 15]) = True." },
      { question: "How do you check if ALL items match?", options: ["all(condition for item in data)", "data.all(condition)", "every(data, condition)", "check(data, condition)"], correct: 0, explanation: "all() returns True only if EVERY element is truthy: all(x > 0 for x in [1, 5, 15]) = True." }
    ]
  },
  {
    id: "qd14", lessonId: "d14", title: "Statistics Quiz", difficulty: "data",
    questions: [
      { question: "What is the mean of [2, 4, 6, 8]?", options: ["5.0", "4", "6", "20"], correct: 0, explanation: "Mean = sum / count = (2+4+6+8) / 4 = 20 / 4 = 5.0." },
      { question: "What is the median of [1, 3, 5, 7, 9]?", options: ["5", "3", "25", "4"], correct: 0, explanation: "Median is the middle value of sorted data. With 5 values, the middle (3rd) is 5." },
      { question: "What is the mode?", options: ["The most frequently occurring value", "The middle value", "The average", "The range"], correct: 0, explanation: "Mode is the value that appears most often. In [1, 2, 2, 3], the mode is 2." },
      { question: "What does standard deviation measure?", options: ["How spread out the data is from the mean", "The average value", "The middle value", "The total"], correct: 0, explanation: "Standard deviation measures the dispersion of data. Low stdev = data close to mean. High stdev = spread out." },
      { question: "Which module provides mean(), median(), stdev()?", options: ["statistics", "math", "numpy", "scipy"], correct: 0, explanation: "The statistics module (built-in) provides mean(), median(), mode(), stdev(), and more." },
      { question: "What is the median of [1, 2, 3, 4] (even count)?", options: ["2.5", "2", "3", "10"], correct: 0, explanation: "With even count, median is average of the two middle values: (2+3)/2 = 2.5." },
      { question: "What is the range of a dataset?", options: ["max - min", "The data values", "The number of items", "The middle value"], correct: 0, explanation: "Range = maximum value - minimum value. It shows the total spread of the data." },
      { question: "Why is median sometimes better than mean?", options: ["Median is not affected by extreme outliers", "Median is always more accurate", "Median is faster to calculate", "There is no difference"], correct: 0, explanation: "Outliers can drastically change the mean. Median stays stable: [1,2,3,4,1000] mean=202, median=3." }
    ]
  },
  {
    id: "qd15", lessonId: "d15", title: "Survey Analyzer Quiz", difficulty: "data",
    questions: [
      { question: "What is the first step in data analysis?", options: ["Clean the data (remove invalid entries)", "Calculate averages", "Make a chart", "Sort the data"], correct: 0, explanation: "Always clean first: remove None values, fix formats, handle missing data. Analysis on dirty data gives wrong results." },
      { question: "How do you check for None values in Python?", options: ["value is None or value is not None", "value == None", "value.isNone()", "isNull(value)"], correct: 0, explanation: "Use 'is None' and 'is not None' for None checks. == works but 'is' is more Pythonic and precise." },
      { question: "What does [r for r in data if r.get('rating') is not None] do?", options: ["Keeps only records that have a rating value", "Removes all ratings", "Sets missing ratings to 0", "Counts the ratings"], correct: 0, explanation: "Filters out records where the rating is None (missing). Only keeps valid records." },
      { question: "What does defaultdict(list) help avoid?", options: ["Checking if a key exists before appending", "Memory errors", "Type errors", "Import errors"], correct: 0, explanation: "Instead of: if key not in d: d[key] = []; d[key].append(val), just d[key].append(val)." },
      { question: "How do you find the best category by average rating?", options: ["max(groups, key=lambda k: avg_of(groups[k]))", "max(groups)", "groups.max()", "best(groups)"], correct: 0, explanation: "max() with a key function that calculates average rating for each group." },
      { question: "What is a data pipeline?", options: ["A sequence of transformations: load -> clean -> transform -> analyze", "A Python package", "A database connection", "A visualization tool"], correct: 0, explanation: "Data pipelines process data step by step: each step's output feeds into the next step's input." },
      { question: "Why report both count and average?", options: ["Average without count can be misleading (1 review vs 1000)", "It's required", "Count is always needed", "Average alone is enough"], correct: 0, explanation: "A category with avg 5.0 from 1 review is less reliable than avg 4.5 from 100 reviews. Count provides context." },
      { question: "What does sum(r['amount'] for d in groups for r in d) calculate?", options: ["Total amount across all groups using nested generator", "Amount per group", "Number of groups", "Error"], correct: 0, explanation: "Nested generator expressions iterate through groups, then through items in each group, summing all amounts." }
    ]
  },

  // ===== LIBRARY l11-l15 =====
  {
    id: "ql11", lessonId: "l11", title: "File System Paths Quiz", difficulty: "library",
    questions: [
      { question: "What does Path('/a/b/c.txt').name return?", options: ["'c.txt'", "'/a/b/c.txt'", "'c'", "'/a/b'"], correct: 0, explanation: ".name returns just the filename with extension: 'c.txt'." },
      { question: "What does Path('/a/b/c.txt').stem return?", options: ["'c'", "'c.txt'", "'.txt'", "'/a/b'"], correct: 0, explanation: ".stem returns the filename WITHOUT the extension: 'c' (stem means the base name)." },
      { question: "What does Path('/a/b/c.txt').suffix return?", options: ["'.txt'", "'txt'", "'c.txt'", "'c'"], correct: 0, explanation: ".suffix returns the extension WITH the dot: '.txt'. Without dot would be obtained differently." },
      { question: "What does Path('/a/b/c.txt').parent return?", options: ["Path('/a/b')", "'/a'", "'b'", "Path('/')"], correct: 0, explanation: ".parent returns the directory containing the file: '/a/b'." },
      { question: "How do you join paths with pathlib?", options: ["path / 'subdir' / 'file.txt'", "path + '/subdir/file.txt'", "path.join('subdir', 'file.txt')", "os.path.join(path, 'subdir')"], correct: 0, explanation: "pathlib uses the / operator to join paths. It's clean and readable." },
      { question: "What does Path('/a/b.txt').with_suffix('.py') return?", options: ["Path('/a/b.py')", "Path('/a/b.txt.py')", "'.py'", "Error"], correct: 0, explanation: ".with_suffix() replaces the file extension: b.txt becomes b.py." },
      { question: "What module did pathlib replace?", options: ["os.path", "sys.path", "file.path", "io.path"], correct: 0, explanation: "pathlib is the modern replacement for os.path. It provides an object-oriented interface instead of string functions." },
      { question: "What does Path('/a/b/c').parts return?", options: ["('/', 'a', 'b', 'c')", "['/a/b/c']", "('a', 'b', 'c')", "3"], correct: 0, explanation: ".parts returns a tuple of all path components, including the root: ('/', 'a', 'b', 'c')." }
    ]
  },
  {
    id: "ql12", lessonId: "l12", title: "JSON Module Quiz", difficulty: "library",
    questions: [
      { question: "What does the 's' in json.loads() stand for?", options: ["String (load from string)", "Save", "Serialize", "Stream"], correct: 0, explanation: "loads = 'load string'. json.load() reads from a file, json.loads() reads from a string." },
      { question: "What does json.dumps(data, indent=4) do?", options: ["Creates a pretty-printed JSON string with 4-space indent", "Creates a compact JSON string", "Writes to a file with 4 tabs", "Limits to 4 keys"], correct: 0, explanation: "indent=4 formats the output with 4 spaces per indentation level for readability." },
      { question: "What Python type is JSON true/false?", options: ["True/False (bool)", "1/0", "'true'/'false'", "None"], correct: 0, explanation: "JSON true becomes Python True. JSON false becomes Python False. Both are bool type." },
      { question: "Can you serialize a Python set to JSON?", options: ["No, convert to list first", "Yes, directly", "Only frozen sets", "Only with a custom encoder"], correct: 0, explanation: "JSON has no set type. Convert to list first: json.dumps(list(my_set)). Or use a custom encoder." },
      { question: "What does json.dumps(data, sort_keys=True) do?", options: ["Outputs keys in alphabetical order", "Sorts the values", "Sorts arrays", "Removes duplicate keys"], correct: 0, explanation: "sort_keys=True ensures dictionary keys appear in sorted order in the JSON output." },
      { question: "How do you handle custom objects in json.dumps?", options: ["Use the default= parameter with a custom function", "Use str() first", "It's not possible", "Use pickle instead"], correct: 0, explanation: "default=custom_func is called for objects that aren't JSON-serializable. The function should return a serializable version." },
      { question: "What does json.loads('{\"a\": 1}') return?", options: ["{'a': 1} (a Python dict)", "'{\"a\": 1}'", "[('a', 1)]", "Error"], correct: 0, explanation: "json.loads() parses the JSON string into a Python dictionary: {'a': 1}." },
      { question: "What is the difference between json.dump() and json.dumps()?", options: ["dump writes to a file, dumps returns a string", "They are the same", "dump is faster", "dumps writes to a file"], correct: 0, explanation: "json.dump(data, file) writes directly to a file object. json.dumps(data) returns a string." }
    ]
  },
  {
    id: "ql13", lessonId: "l13", title: "Regex Quiz", difficulty: "library",
    questions: [
      { question: "What does \\d match?", options: ["Any digit (0-9)", "Any letter", "A dot", "A dash"], correct: 0, explanation: "\\d matches a single digit character (0-9). \\d+ matches one or more digits." },
      { question: "What does re.findall() return?", options: ["A list of all matches", "The first match only", "True or False", "A match object"], correct: 0, explanation: "findall() returns a list of ALL non-overlapping matches in the string." },
      { question: "What does + mean in regex?", options: ["One or more of the preceding pattern", "Literal plus sign", "Addition", "End of line"], correct: 0, explanation: "+ means 'one or more'. \\d+ matches one or more digits. To match a literal +, use \\+." },
      { question: "What does re.sub(pattern, replacement, text) do?", options: ["Replaces all matches with the replacement string", "Searches for the pattern", "Splits the text", "Validates the pattern"], correct: 0, explanation: "re.sub() finds all matches and replaces them. Returns the modified string." },
      { question: "Why use r'' (raw strings) for regex?", options: ["To prevent Python from interpreting backslashes", "For better performance", "It's required", "For Unicode support"], correct: 0, explanation: "Raw strings treat \\ literally. Without r, \\d would need to be \\\\d because Python interprets \\ first." },
      { question: "What does [aeiou] match?", options: ["Any single vowel", "The literal text 'aeiou'", "Any consonant", "Any letter"], correct: 0, explanation: "Square brackets define a character class. [aeiou] matches any ONE of those characters." },
      { question: "What does . (dot) match in regex?", options: ["Any single character except newline", "A literal dot", "Nothing", "End of line"], correct: 0, explanation: ". matches any character except \\n. To match a literal dot, use \\. (escaped dot)." },
      { question: "What does {2,4} mean in regex?", options: ["Between 2 and 4 of the preceding pattern", "Exactly 2 or exactly 4", "24 repetitions", "A set of 2 and 4"], correct: 0, explanation: "{2,4} is a quantifier: match the preceding element at least 2 and at most 4 times." }
    ]
  },
  {
    id: "ql14", lessonId: "l14", title: "Functools Quiz", difficulty: "library",
    questions: [
      { question: "What does @lru_cache do?", options: ["Caches function results to avoid recomputation", "Makes functions faster by default", "Limits function calls", "Creates a backup of the function"], correct: 0, explanation: "LRU (Least Recently Used) cache stores results of function calls. Same inputs -> cached result instead of recomputing." },
      { question: "Why is lru_cache great for Fibonacci?", options: ["It avoids redundant recursive calls (exponential -> linear)", "It makes recursion unnecessary", "It prevents stack overflow", "It's not useful for Fibonacci"], correct: 0, explanation: "fib(5) calls fib(4)+fib(3), fib(4) calls fib(3)+fib(2)... Without cache, fib(3) is computed many times. Cache stores it." },
      { question: "What does partial(func, arg1) create?", options: ["A new function with arg1 pre-filled", "A copy of func", "A partial result", "An error"], correct: 0, explanation: "partial creates a new function where some arguments are already set: partial(add, 5) creates a function that adds 5." },
      { question: "What does reduce(lambda a, b: a + b, [1,2,3,4]) return?", options: ["10", "[1, 2, 3, 4]", "4", "Error"], correct: 0, explanation: "reduce accumulates: 1+2=3, 3+3=6, 6+4=10. It reduces the list to a single value." },
      { question: "What does lru_cache(maxsize=128) mean?", options: ["Cache up to 128 most recent unique calls", "Run the function 128 times", "Limit results to 128 characters", "Call 128 functions"], correct: 0, explanation: "maxsize=128 keeps the 128 most recently used results. Older ones are evicted. maxsize=None keeps all." },
      { question: "What does @functools.wraps(func) do?", options: ["Preserves the wrapped function's name and docstring", "Wraps function output", "Creates a wrapper class", "Makes function read-only"], correct: 0, explanation: "@wraps copies __name__, __doc__ etc. from the original function to the wrapper, preserving identity." },
      { question: "Can lru_cache be used with functions that take mutable arguments?", options: ["No, arguments must be hashable (immutable)", "Yes, always", "Only with lists", "Only with dicts"], correct: 0, explanation: "lru_cache needs hashable args for the cache key. Lists and dicts aren't hashable. Use tuples instead." },
      { question: "What module contains lru_cache, partial, reduce?", options: ["functools", "itertools", "collections", "operator"], correct: 0, explanation: "functools provides higher-order functions: lru_cache, partial, reduce, wraps, total_ordering, etc." }
    ]
  },
  {
    id: "ql15", lessonId: "l15", title: "Testing Quiz", difficulty: "library",
    questions: [
      { question: "What does assert x == 5 do?", options: ["Raises AssertionError if x is not 5", "Sets x to 5", "Prints x", "Returns True"], correct: 0, explanation: "assert checks a condition. If False, it raises AssertionError. If True, nothing happens." },
      { question: "What is a test case?", options: ["A specific scenario with input and expected output", "A type of variable", "A Python class", "A debugging tool"], correct: 0, explanation: "A test case verifies one specific behavior: given this input, I expect this output." },
      { question: "What are edge cases?", options: ["Boundary conditions like 0, empty, max values", "Normal inputs", "Error messages", "Test failures"], correct: 0, explanation: "Edge cases test boundaries: empty lists, zero, negative numbers, very large values - where bugs often hide." },
      { question: "What is TDD (Test Driven Development)?", options: ["Write tests first, then write code to pass them", "Test after development", "Test during deployment", "A testing framework"], correct: 0, explanation: "TDD cycle: 1) Write a failing test, 2) Write minimal code to pass it, 3) Refactor. Red -> Green -> Refactor." },
      { question: "What does assert add(2, 3) == 5 test?", options: ["That add(2, 3) returns exactly 5", "That add exists", "That 2 + 3 is possible", "Nothing"], correct: 0, explanation: "It calls add(2, 3) and checks the return value equals 5. If not, AssertionError is raised." },
      { question: "Why write tests?", options: ["To catch bugs early and prevent regressions", "To make code slower", "Because Python requires them", "To add more files"], correct: 0, explanation: "Tests catch bugs early, document expected behavior, prevent regressions (old bugs reappearing), and give confidence to refactor." },
      { question: "What is a regression test?", options: ["A test that ensures a fixed bug stays fixed", "A test that fails", "A performance test", "A first test"], correct: 0, explanation: "After fixing a bug, add a test for it. If the bug comes back (regression), the test catches it." },
      { question: "What does try/except do differently from assert?", options: ["try/except handles errors gracefully, assert crashes on failure", "They are the same", "assert is for production, try for testing", "assert handles errors"], correct: 0, explanation: "assert is for testing: fail loudly if wrong. try/except is for production: handle errors gracefully." }
    ]
  }
]
