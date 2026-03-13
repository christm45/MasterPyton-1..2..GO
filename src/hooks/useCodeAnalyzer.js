import { useState, useEffect, useRef, useCallback } from 'react'

// ──────────────────────────────────────────────────────────
// Python Code Analyzer - Real-time error detection engine
// Detects 30+ common Python mistakes with explanations & fixes
// ──────────────────────────────────────────────────────────

const SEVERITY = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}

// Helper: check if position is inside a string literal
function isInsideString(line, col) {
  let inSingle = false
  let inDouble = false
  for (let i = 0; i < col && i < line.length; i++) {
    if (line[i] === "'" && !inDouble && (i === 0 || line[i - 1] !== '\\')) inSingle = !inSingle
    if (line[i] === '"' && !inSingle && (i === 0 || line[i - 1] !== '\\')) inDouble = !inDouble
  }
  return inSingle || inDouble
}

// Helper: count unmatched brackets in full code
function countBrackets(code) {
  let parens = 0, brackets = 0, braces = 0
  let inStr = false, strChar = ''
  for (let i = 0; i < code.length; i++) {
    const ch = code[i]
    if (inStr) {
      if (ch === strChar && code[i - 1] !== '\\') inStr = false
      continue
    }
    if (ch === '"' || ch === "'") { inStr = true; strChar = ch; continue }
    if (ch === '#') { while (i < code.length && code[i] !== '\n') i++; continue }
    if (ch === '(') parens++
    if (ch === ')') parens--
    if (ch === '[') brackets++
    if (ch === ']') brackets--
    if (ch === '{') braces++
    if (ch === '}') braces--
  }
  return { parens, brackets, braces }
}

// ──────────────────────────────────────────────────────────
// ANALYSIS RULES - each rule returns a diagnostic or null
// ──────────────────────────────────────────────────────────

const rules = [
  // ═══════════════════════ ERRORS ═══════════════════════

  {
    id: 'missing-colon',
    test(line, trimmed, lineNum) {
      if (!trimmed || trimmed.startsWith('#')) return null
      // Match control keywords that need colons
      const kwMatch = trimmed.match(/^(if|elif|else|for|while|def|class|try|except|finally|with)\b/)
      if (!kwMatch) return null
      const kw = kwMatch[1]
      // else, try, finally, else don't need conditions
      if (['else', 'try', 'finally'].includes(kw) && trimmed === kw) {
        return {
          column: trimmed.length + 1,
          endColumn: trimmed.length + 2,
          fix: line + ':',
        }
      }
      // Check if line ends with colon (ignoring comments)
      const noComment = trimmed.replace(/#.*$/, '').trimEnd()
      if (noComment && !noComment.endsWith(':') && !noComment.endsWith('\\') && !noComment.endsWith(',')) {
        // Avoid false positives for multi-line conditions
        if (noComment.endsWith('(') || noComment.endsWith('\\')) return null
        return {
          column: line.length,
          endColumn: line.length + 1,
          fix: line.replace(/(\s*)(#.*)?$/, ':$2'),
        }
      }
      return null
    },
    message: "Missing ':' at end of statement",
    severity: SEVERITY.ERROR,
    explanation: "In Python, statements like if, for, while, def, class, try, except, and with MUST end with a colon ':'. The colon tells Python that an indented block follows.\n\nExample:\n  if x > 5:     # correct\n      print(x)\n  if x > 5      # wrong - missing colon",
  },

  {
    id: 'js-and-operator',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const idx = line.indexOf('&&')
      if (idx === -1) return null
      if (isInsideString(line, idx)) return null
      return {
        column: idx + 1,
        endColumn: idx + 3,
        fix: line.replace(/&&/g, 'and'),
      }
    },
    message: "Use 'and' instead of '&&'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses the keyword 'and' for logical AND operations, not '&&' (which is used in JavaScript, C, Java, etc.).\n\nExample:\n  if x > 0 and y > 0:    # correct\n  if x > 0 && y > 0:     # wrong",
  },

  {
    id: 'js-or-operator',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const idx = line.indexOf('||')
      if (idx === -1) return null
      if (isInsideString(line, idx)) return null
      return {
        column: idx + 1,
        endColumn: idx + 3,
        fix: line.replace(/\|\|/g, 'or'),
      }
    },
    message: "Use 'or' instead of '||'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses the keyword 'or' for logical OR operations, not '||' (which is used in JavaScript, C, Java, etc.).\n\nExample:\n  if x > 0 or y > 0:     # correct\n  if x > 0 || y > 0:     # wrong",
  },

  {
    id: 'js-not-operator',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Match ! but not != and not inside strings
      const matches = [...line.matchAll(/(?<!=)!(?!=)/g)]
      for (const m of matches) {
        if (isInsideString(line, m.index)) continue
        // Check it's being used as a logical not (before a variable/expression)
        const after = line[m.index + 1]
        if (after && after.match(/[a-zA-Z_(]/)) {
          return {
            column: m.index + 1,
            endColumn: m.index + 2,
            fix: line.substring(0, m.index) + 'not ' + line.substring(m.index + 1),
          }
        }
      }
      return null
    },
    message: "Use 'not' instead of '!'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses the keyword 'not' for logical negation, not '!' (which is used in JavaScript, C, Java, etc.).\n\nExample:\n  if not done:       # correct\n  if !done:          # wrong",
  },

  {
    id: 'null-keyword',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/\bnull\b/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      return {
        column: match.index + 1,
        endColumn: match.index + 5,
        fix: line.replace(/\bnull\b/g, 'None'),
      }
    },
    message: "Use 'None' instead of 'null'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses 'None' (capital N) to represent the absence of a value. 'null' is used in JavaScript, Java, and other languages.\n\nExample:\n  x = None       # correct\n  x = null       # wrong - NameError",
  },

  {
    id: 'lowercase-true',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/\btrue\b/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      return {
        column: match.index + 1,
        endColumn: match.index + 5,
        fix: line.replace(/\btrue\b/g, 'True'),
      }
    },
    message: "Use 'True' (capital T) instead of 'true'",
    severity: SEVERITY.ERROR,
    explanation: "Python booleans are capitalized: 'True' and 'False'. Lowercase 'true' is used in JavaScript and JSON, but Python will throw a NameError.\n\nExample:\n  is_valid = True    # correct\n  is_valid = true    # wrong - NameError",
  },

  {
    id: 'lowercase-false',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/\bfalse\b/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      return {
        column: match.index + 1,
        endColumn: match.index + 6,
        fix: line.replace(/\bfalse\b/g, 'False'),
      }
    },
    message: "Use 'False' (capital F) instead of 'false'",
    severity: SEVERITY.ERROR,
    explanation: "Python booleans are capitalized: 'True' and 'False'. Lowercase 'false' is used in JavaScript and JSON, but Python will throw a NameError.\n\nExample:\n  is_done = False    # correct\n  is_done = false    # wrong - NameError",
  },

  {
    id: 'js-comment-syntax',
    test(line, trimmed) {
      // Detect // at start (not in string, not a URL)
      const match = trimmed.match(/^\/\/\s*(.*)/)
      if (!match) return null
      // Make sure it's not inside a string
      if (isInsideString(line, line.indexOf('//'))) return null
      const indent = line.match(/^(\s*)/)[1]
      return {
        column: indent.length + 1,
        endColumn: indent.length + 3,
        fix: indent + '# ' + match[1],
      }
    },
    message: "Use '#' for comments, not '//'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses '#' for single-line comments, not '//' (which is used in JavaScript, C, Java, etc.). In Python, '//' is actually the floor division operator!\n\nExample:\n  # This is a comment     # correct\n  // This is a comment    # wrong - SyntaxError\n  \n  7 // 2  # This equals 3 (floor division)",
  },

  {
    id: 'increment-operator',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/(\w+)\+\+/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      const varName = match[1]
      return {
        column: match.index + 1,
        endColumn: match.index + match[0].length + 1,
        fix: line.replace(/(\w+)\+\+/, `${varName} += 1`),
      }
    },
    message: "Python has no '++' operator. Use '+= 1' instead",
    severity: SEVERITY.ERROR,
    explanation: "Python does not support the increment operator '++' from C/JavaScript. Use '+= 1' instead.\n\nExample:\n  count += 1     # correct\n  count++        # wrong - SyntaxError",
  },

  {
    id: 'decrement-operator',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/(\w+)--/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      // Don't match negative numbers like x = --5
      if (match.index > 0 && line[match.index - 1] === '=') return null
      const varName = match[1]
      return {
        column: match.index + 1,
        endColumn: match.index + match[0].length + 1,
        fix: line.replace(/(\w+)--/, `${varName} -= 1`),
      }
    },
    message: "Python has no '--' operator. Use '-= 1' instead",
    severity: SEVERITY.ERROR,
    explanation: "Python does not support the decrement operator '--' from C/JavaScript. Use '-= 1' instead.\n\nExample:\n  count -= 1     # correct\n  count--        # wrong - SyntaxError",
  },

  {
    id: 'var-let-const',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = trimmed.match(/^(var|let|const)\s+(\w+)\s*=\s*(.*)/)
      if (!match) return null
      if (isInsideString(line, line.indexOf(match[0]))) return null
      const indent = line.match(/^(\s*)/)[1]
      return {
        column: indent.length + 1,
        endColumn: indent.length + match[1].length + 1,
        fix: indent + match[2] + ' = ' + match[3],
      }
    },
    message: "Python doesn't use var/let/const. Just assign directly",
    severity: SEVERITY.ERROR,
    explanation: "Python doesn't need variable declaration keywords. Just assign a value to a variable name directly.\n\nExample:\n  name = 'Alice'      # correct\n  let name = 'Alice'  # wrong - SyntaxError\n  var name = 'Alice'  # wrong - SyntaxError\n\nPython determines variable types automatically (dynamic typing).",
  },

  {
    id: 'triple-equals',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const idx = line.indexOf('===')
      if (idx === -1) return null
      if (isInsideString(line, idx)) return null
      return {
        column: idx + 1,
        endColumn: idx + 4,
        fix: line.replace(/===/g, '=='),
      }
    },
    message: "Use '==' instead of '==='. Python has no strict equality",
    severity: SEVERITY.ERROR,
    explanation: "Python uses '==' for equality comparison. The '===' operator (strict equality) is a JavaScript concept. In Python, == already compares both value and type intelligently.\n\nExample:\n  if x == 5:      # correct\n  if x === 5:     # wrong - SyntaxError",
  },

  {
    id: 'strict-not-equals',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const idx = line.indexOf('!==')
      if (idx === -1) return null
      if (isInsideString(line, idx)) return null
      return {
        column: idx + 1,
        endColumn: idx + 4,
        fix: line.replace(/!==/g, '!='),
      }
    },
    message: "Use '!=' instead of '!=='. Python has no strict inequality",
    severity: SEVERITY.ERROR,
    explanation: "Python uses '!=' for not-equal comparison. The '!==' operator is a JavaScript concept.\n\nExample:\n  if x != 5:      # correct\n  if x !== 5:     # wrong - SyntaxError",
  },

  {
    id: 'function-keyword',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = trimmed.match(/^function\s+(\w+)\s*\((.*?)\)/)
      if (!match) return null
      if (isInsideString(line, line.indexOf('function'))) return null
      const indent = line.match(/^(\s*)/)[1]
      return {
        column: indent.length + 1,
        endColumn: indent.length + 9,
        fix: indent + `def ${match[1]}(${match[2]}):`,
      }
    },
    message: "Use 'def' to define functions, not 'function'",
    severity: SEVERITY.ERROR,
    explanation: "Python uses 'def' to define functions, not 'function' (which is JavaScript/PHP syntax).\n\nExample:\n  def greet(name):           # correct\n      print(f'Hello {name}')\n  \n  function greet(name):      # wrong",
  },

  {
    id: 'dot-length',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/(\w+)\.length\b/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      const varName = match[1]
      return {
        column: match.index + 1,
        endColumn: match.index + match[0].length + 1,
        fix: line.replace(/(\w+)\.length\b/, `len(${varName})`),
      }
    },
    message: "Use len() instead of .length",
    severity: SEVERITY.ERROR,
    explanation: "Python uses the built-in len() function to get the length of collections, not .length (which is JavaScript/Java syntax).\n\nExample:\n  len(my_list)       # correct - returns 5\n  my_list.length     # wrong - AttributeError\n  len('hello')       # correct - returns 5",
  },

  {
    id: 'semicolon-end',
    test(line, trimmed) {
      if (trimmed.startsWith('#') || !trimmed) return null
      if (trimmed.endsWith(';')) {
        // Don't flag if it's inside a string
        const semiIdx = line.lastIndexOf(';')
        if (isInsideString(line, semiIdx)) return null
        return {
          column: semiIdx + 1,
          endColumn: semiIdx + 2,
          fix: line.replace(/;\s*$/, ''),
        }
      }
      return null
    },
    message: "Semicolons are not needed in Python",
    severity: SEVERITY.WARNING,
    explanation: "Python doesn't require semicolons at the end of lines. While they technically work (Python allows them), they're not Pythonic and are unnecessary.\n\nExample:\n  print('hello')      # correct - clean Python\n  print('hello');     # works but unnecessary",
  },

  // ═══════════════════ WARNINGS ═══════════════════

  {
    id: 'print-no-parens',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Match 'print' followed by space and content, not followed by (
      const match = trimmed.match(/^print\s+(?!\()(.+)/)
      if (!match) return null
      // Check it's not print used as a variable
      if (trimmed.match(/^print\s*[=]/)) return null
      const indent = line.match(/^(\s*)/)[1]
      const content = match[1].trim()
      return {
        column: indent.length + 1,
        endColumn: indent.length + 6,
        fix: indent + `print(${content})`,
      }
    },
    message: "print() requires parentheses in Python 3",
    severity: SEVERITY.WARNING,
    explanation: "In Python 3, print is a function and requires parentheses. The old Python 2 syntax 'print x' no longer works.\n\nExample:\n  print('Hello')      # correct (Python 3)\n  print 'Hello'       # wrong (Python 2 syntax)\n\nAlways use parentheses with print()!",
  },

  {
    id: 'bare-except',
    test(line, trimmed) {
      if (trimmed === 'except:' || trimmed === 'except :') {
        return {
          column: 1,
          endColumn: trimmed.length + 1,
          fix: line.replace(/except\s*:/, 'except Exception:'),
        }
      }
      return null
    },
    message: "Avoid bare 'except:'. Catch specific exceptions",
    severity: SEVERITY.WARNING,
    explanation: "A bare 'except:' catches ALL exceptions, including KeyboardInterrupt and SystemExit, which can make your program impossible to stop. Always catch specific exceptions.\n\nExample:\n  except ValueError:         # good - catches specific error\n  except Exception:          # ok - catches most errors\n  except:                    # bad - catches everything\n\nBest practice: except ValueError as e:",
  },

  {
    id: 'mutable-default',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = trimmed.match(/^def\s+\w+\(.*?(\w+)\s*=\s*(\[\]|\{\})\s*[,)]/)
      if (!match) return null
      return {
        column: line.indexOf(match[2]) + 1,
        endColumn: line.indexOf(match[2]) + match[2].length + 1,
        fix: null, // Complex fix, show explanation only
      }
    },
    message: "Mutable default argument! Use None instead",
    severity: SEVERITY.WARNING,
    explanation: "Using mutable objects (like [] or {}) as default arguments is a common Python trap. The default is created ONCE and shared across all calls!\n\nBad:\n  def add_item(item, items=[]):\n      items.append(item)  # same list every call!\n      return items\n\nGood:\n  def add_item(item, items=None):\n      if items is None:\n          items = []\n      items.append(item)\n      return items",
  },

  {
    id: 'compare-none-equals',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/(\S+)\s*==\s*None/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      return {
        column: match.index + 1,
        endColumn: match.index + match[0].length + 1,
        fix: line.replace(/(\S+)\s*==\s*None/, '$1 is None'),
      }
    },
    message: "Use 'is None' instead of '== None'",
    severity: SEVERITY.WARNING,
    explanation: "When comparing to None, use 'is' instead of '=='. None is a singleton in Python, so identity comparison (is) is faster and more correct.\n\nExample:\n  if x is None:       # correct - checks identity\n  if x == None:       # works but not Pythonic\n  if x is not None:   # correct negation",
  },

  {
    id: 'compare-none-not-equals',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = line.match(/(\S+)\s*!=\s*None/)
      if (!match) return null
      if (isInsideString(line, match.index)) return null
      return {
        column: match.index + 1,
        endColumn: match.index + match[0].length + 1,
        fix: line.replace(/(\S+)\s*!=\s*None/, '$1 is not None'),
      }
    },
    message: "Use 'is not None' instead of '!= None'",
    severity: SEVERITY.WARNING,
    explanation: "When comparing to None, use 'is not' instead of '!='. None is a singleton in Python, so identity comparison is preferred.\n\nExample:\n  if x is not None:    # correct\n  if x != None:        # works but not Pythonic",
  },

  {
    id: 'open-without-with',
    test(line, trimmed, lineNum, allLines) {
      if (trimmed.startsWith('#')) return null
      // Check for open() assignment not inside a with statement
      const match = trimmed.match(/^\w+\s*=\s*open\(/)
      if (!match) return null
      // Check if this line or previous line is a 'with' statement
      const prevLine = lineNum > 1 ? allLines[lineNum - 2].trim() : ''
      if (trimmed.startsWith('with ') || prevLine.startsWith('with ')) return null
      return {
        column: line.indexOf('open(') + 1,
        endColumn: line.indexOf('open(') + 5,
        fix: null,
      }
    },
    message: "Consider using 'with open()' for safe file handling",
    severity: SEVERITY.WARNING,
    explanation: "When opening files, use the 'with' statement to ensure the file is properly closed, even if an error occurs.\n\nBad:\n  f = open('data.txt', 'r')\n  data = f.read()\n  f.close()  # might not run if error above!\n\nGood:\n  with open('data.txt', 'r') as f:\n      data = f.read()\n  # file automatically closed here",
  },

  {
    id: 'range-len-pattern',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = trimmed.match(/for\s+(\w+)\s+in\s+range\(len\((\w+)\)\)/)
      if (!match) return null
      return {
        column: line.indexOf('range(len') + 1,
        endColumn: line.indexOf('range(len') + 10,
        fix: null,
      }
    },
    message: "Consider using enumerate() instead of range(len())",
    severity: SEVERITY.INFO,
    explanation: "Instead of range(len()), use enumerate() for cleaner code when you need both index and value.\n\nLess Pythonic:\n  for i in range(len(fruits)):\n      print(i, fruits[i])\n\nMore Pythonic:\n  for i, fruit in enumerate(fruits):\n      print(i, fruit)\n\nenumerate() gives you both the index and the value!",
  },

  // ═══════════════════ INFO / TIPS ═══════════════════

  {
    id: 'string-concat-plus',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Detect print(...  + ... + ...) pattern - string concatenation with variables
      const match = trimmed.match(/print\(.*['"].*['"]\s*\+\s*(?:str\()?\w+/)
      if (!match) return null
      return {
        column: 1,
        endColumn: line.length + 1,
        fix: null,
      }
    },
    message: "Consider using f-strings for cleaner string formatting",
    severity: SEVERITY.INFO,
    explanation: "f-strings (formatted string literals) are cleaner and faster than string concatenation with +.\n\nString concatenation:\n  print('Hello ' + name + ', age ' + str(age))\n\nf-string (better):\n  print(f'Hello {name}, age {age}')\n\nf-strings can contain any expression inside { }.",
  },

  {
    id: 'camel-case-variable',
    test(line, trimmed) {
      if (trimmed.startsWith('#') || trimmed.startsWith('class ') || trimmed.startsWith('import ') || trimmed.startsWith('from ')) return null
      // Match camelCase variable assignment
      const match = trimmed.match(/^([a-z]+[A-Z][a-zA-Z]*)\s*=/)
      if (!match) return null
      const varName = match[1]
      // Convert camelCase to snake_case
      const snakeCase = varName.replace(/([A-Z])/g, '_$1').toLowerCase()
      const indent = line.match(/^(\s*)/)[1]
      return {
        column: indent.length + 1,
        endColumn: indent.length + varName.length + 1,
        fix: line.replace(varName, snakeCase),
      }
    },
    message: "Python convention: use snake_case for variables",
    severity: SEVERITY.INFO,
    explanation: "Python style guide (PEP 8) recommends snake_case for variable and function names, and PascalCase for class names.\n\nPythonic:\n  my_variable = 10\n  user_name = 'Alice'\n  def calculate_total():\n\nNot Pythonic:\n  myVariable = 10\n  userName = 'Alice'\n  def calculateTotal():\n\nClasses use PascalCase: class MyClass:",
  },

  {
    id: 'camel-case-function',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      const match = trimmed.match(/^def\s+([a-z]+[A-Z][a-zA-Z]*)\s*\(/)
      if (!match) return null
      const funcName = match[1]
      const snakeCase = funcName.replace(/([A-Z])/g, '_$1').toLowerCase()
      return {
        column: line.indexOf(funcName) + 1,
        endColumn: line.indexOf(funcName) + funcName.length + 1,
        fix: line.replace(funcName, snakeCase),
      }
    },
    message: "Python convention: use snake_case for function names",
    severity: SEVERITY.INFO,
    explanation: "Python style guide (PEP 8) recommends snake_case for function names.\n\nPythonic:  def calculate_total()\nNot Pythonic:  def calculateTotal()\n\nThis helps distinguish functions (snake_case) from classes (PascalCase).",
  },

  {
    id: 'missing-self',
    test(line, trimmed, lineNum, allLines) {
      if (trimmed.startsWith('#')) return null
      // Check if we're inside a class (look backwards for class definition)
      const match = trimmed.match(/^def\s+(\w+)\(\s*\)/)
      if (!match) return null
      const funcName = match[1]
      // Don't flag __init__, __main__ etc at top level, or lambdas
      if (funcName.startsWith('__') && funcName.endsWith('__') && lineNum <= 2) return null
      // Check if inside a class
      let inClass = false
      for (let i = lineNum - 2; i >= 0; i--) {
        const prevTrimmed = allLines[i].trim()
        if (prevTrimmed.startsWith('class ')) { inClass = true; break }
        if (prevTrimmed.startsWith('def ') && !allLines[i].startsWith('  ') && !allLines[i].startsWith('\t')) break
      }
      if (!inClass) return null
      return {
        column: line.indexOf('(') + 2,
        endColumn: line.indexOf(')') + 1,
        fix: line.replace(`${funcName}()`, `${funcName}(self)`),
      }
    },
    message: "Class method missing 'self' parameter",
    severity: SEVERITY.WARNING,
    explanation: "In Python, instance methods must have 'self' as their first parameter. 'self' refers to the instance the method is called on.\n\nExample:\n  class Dog:\n      def bark(self):          # correct\n          print('Woof!')\n      \n      def fetch(self, item):   # correct\n          print(f'Fetching {item}')\n      \n      def sit():               # wrong! missing self",
  },

  {
    id: 'curly-brace-block',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Detect { at end of if/for/while/def/class line
      const match = trimmed.match(/^(if|for|while|def|class)\b.*\{\s*$/)
      if (!match) return null
      return {
        column: line.lastIndexOf('{') + 1,
        endColumn: line.lastIndexOf('{') + 2,
        fix: line.replace(/\s*\{\s*$/, ':'),
      }
    },
    message: "Python uses indentation, not curly braces for blocks",
    severity: SEVERITY.ERROR,
    explanation: "Python uses indentation (spaces/tabs) to define code blocks, not curly braces { } like JavaScript, C, or Java.\n\nJavaScript style (wrong in Python):\n  if (x > 5) {\n      print('big')\n  }\n\nPython style (correct):\n  if x > 5:\n      print('big')\n\nUse 4 spaces for indentation (Python standard).",
  },

  {
    id: 'assignment-in-condition',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Match if/while with single = (but not ==, <=, >=, !=, :=)
      const match = trimmed.match(/^(if|while)\s+.*[^=!<>:]=(?!=)/)
      if (!match) return null
      // More careful check - find the = that's problematic
      const condPart = trimmed.substring(match[1].length)
      // Check for single = not preceded by !, <, >, :, = and not followed by =
      const eqMatch = condPart.match(/[^=!<>:]=[^=]/)
      if (!eqMatch) return null
      if (isInsideString(line, line.indexOf(eqMatch[0]))) return null
      return {
        column: line.indexOf(eqMatch[0]) + 2,
        endColumn: line.indexOf(eqMatch[0]) + 3,
        fix: null,
      }
    },
    message: "Did you mean '==' (comparison) instead of '=' (assignment)?",
    severity: SEVERITY.WARNING,
    explanation: "In conditions, you usually want == (comparison) not = (assignment).\n\n  = means 'assign this value'\n  == means 'is this equal to?'\n\nExample:\n  if x == 5:     # correct - comparing\n  if x = 5:      # wrong - assigning (SyntaxError)\n\nNote: Python 3.8+ has := (walrus operator) for assignment in expressions.",
  },

  {
    id: 'tab-space-mix',
    test(line, trimmed, lineNum) {
      if (!trimmed) return null
      // Check for mixing tabs and spaces in indentation
      const indent = line.match(/^(\s*)/)[1]
      if (indent.includes('\t') && indent.includes(' ')) {
        return {
          column: 1,
          endColumn: indent.length + 1,
          fix: line.replace(/^\s*/, indent.replace(/\t/g, '    ')),
        }
      }
      return null
    },
    message: "Mixing tabs and spaces in indentation",
    severity: SEVERITY.ERROR,
    explanation: "Python is very strict about indentation consistency. Mixing tabs and spaces will cause IndentationError.\n\nBest practice: Always use 4 spaces for indentation (never tabs). Most editors can be configured to insert spaces when you press Tab.",
  },

  {
    id: 'missing-import-hint',
    test(line, trimmed) {
      if (trimmed.startsWith('#')) return null
      // Common modules people forget to import
      const modulePatterns = [
        { pattern: /\brandom\.(randint|choice|shuffle|random)\b/, module: 'random' },
        { pattern: /\bmath\.(sqrt|ceil|floor|pi|sin|cos)\b/, module: 'math' },
        { pattern: /\bjson\.(loads|dumps|load|dump)\b/, module: 'json' },
        { pattern: /\bos\.(path|getcwd|listdir|makedirs)\b/, module: 'os' },
        { pattern: /\bsys\.(argv|exit|path|stdin|stdout)\b/, module: 'sys' },
        { pattern: /\bre\.(match|search|findall|sub|compile)\b/, module: 're' },
        { pattern: /\bdatetime\.(datetime|date|time|timedelta)\b/, module: 'datetime' },
      ]
      for (const { pattern, module } of modulePatterns) {
        if (pattern.test(trimmed)) {
          return {
            column: 1,
            endColumn: line.length + 1,
            fix: null,
            module,
          }
        }
      }
      return null
    },
    message: (ctx) => `Remember to 'import ${ctx?.module || "module"}' at the top of your file`,
    severity: SEVERITY.INFO,
    explanation: "When using built-in Python modules, you need to import them first at the top of your file.\n\nExample:\n  import random\n  import math\n  import json\n  \n  print(random.randint(1, 10))\n  print(math.sqrt(16))\n\nAlways put imports at the top of your file.",
  },
]

// ──────────────────────────────────────────────────────────
// MAIN ANALYSIS FUNCTION
// ──────────────────────────────────────────────────────────

function analyzePythonCode(code) {
  if (!code || !code.trim()) return []

  const lines = code.split('\n')
  const diagnostics = []
  const seenRules = new Map() // Track per-line to avoid duplicates

  lines.forEach((line, index) => {
    const lineNum = index + 1
    const trimmed = line.trim()

    for (const rule of rules) {
      const result = rule.test(line, trimmed, lineNum, lines)
      if (result) {
        const key = `${rule.id}-${lineNum}`
        if (seenRules.has(key)) continue
        seenRules.set(key, true)

        const message = typeof rule.message === 'function'
          ? rule.message(result)
          : rule.message

        diagnostics.push({
          id: rule.id,
          line: lineNum,
          column: result.column || 1,
          endColumn: result.endColumn || line.length + 1,
          message,
          severity: rule.severity,
          fix: result.fix || null,
          explanation: rule.explanation,
        })
      }
    }
  })

  // Global checks
  const brackets = countBrackets(code)
  if (brackets.parens !== 0) {
    diagnostics.push({
      id: 'unmatched-parens',
      line: lines.length,
      column: 1,
      endColumn: 2,
      message: brackets.parens > 0
        ? `Unmatched '(' - missing ${brackets.parens} closing parenthesis`
        : `Unmatched ')' - extra ${Math.abs(brackets.parens)} closing parenthesis`,
      severity: SEVERITY.ERROR,
      fix: null,
      explanation: "Every opening parenthesis '(' must have a matching closing parenthesis ')'. Count your parentheses carefully, especially in nested function calls.\n\nExample:\n  print(len('hello'))   # correct: 2 open, 2 close\n  print(len('hello')    # wrong: missing one )",
    })
  }
  if (brackets.brackets !== 0) {
    diagnostics.push({
      id: 'unmatched-brackets',
      line: lines.length,
      column: 1,
      endColumn: 2,
      message: brackets.brackets > 0
        ? `Unmatched '[' - missing ${brackets.brackets} closing bracket`
        : `Unmatched ']' - extra ${Math.abs(brackets.brackets)} closing bracket`,
      severity: SEVERITY.ERROR,
      fix: null,
      explanation: "Every opening bracket '[' must have a matching closing bracket ']'. This often happens with nested lists or multi-line list definitions.",
    })
  }

  // Sort: errors first, then warnings, then info
  const severityOrder = { error: 0, warning: 1, info: 2 }
  diagnostics.sort((a, b) => {
    const diff = severityOrder[a.severity] - severityOrder[b.severity]
    return diff !== 0 ? diff : a.line - b.line
  })

  return diagnostics
}

// ──────────────────────────────────────────────────────────
// REACT HOOK
// ──────────────────────────────────────────────────────────

export function useCodeAnalyzer(code, enabled = true) {
  const [diagnostics, setDiagnostics] = useState([])
  const debounceRef = useRef(null)

  useEffect(() => {
    if (!enabled) {
      setDiagnostics([])
      return
    }

    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const results = analyzePythonCode(code)
      setDiagnostics(results)
    }, 400) // 400ms debounce for smooth typing

    return () => clearTimeout(debounceRef.current)
  }, [code, enabled])

  const applyFix = useCallback((diagnostic, currentCode) => {
    if (!diagnostic.fix) return currentCode
    const lines = currentCode.split('\n')
    lines[diagnostic.line - 1] = diagnostic.fix
    return lines.join('\n')
  }, [])

  const applyAllFixes = useCallback((currentCode) => {
    const diags = analyzePythonCode(currentCode)
    const fixable = diags.filter(d => d.fix)
    if (fixable.length === 0) return currentCode

    // Apply fixes from bottom to top to preserve line numbers
    const sorted = [...fixable].sort((a, b) => b.line - a.line)
    const lines = currentCode.split('\n')
    for (const diag of sorted) {
      lines[diag.line - 1] = diag.fix
    }
    return lines.join('\n')
  }, [])

  const errorCount = diagnostics.filter(d => d.severity === 'error').length
  const warningCount = diagnostics.filter(d => d.severity === 'warning').length
  const infoCount = diagnostics.filter(d => d.severity === 'info').length

  return {
    diagnostics,
    applyFix,
    applyAllFixes,
    errorCount,
    warningCount,
    infoCount,
    totalCount: diagnostics.length,
  }
}
