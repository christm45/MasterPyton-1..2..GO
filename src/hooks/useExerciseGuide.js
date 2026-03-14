import { useState, useEffect, useRef } from 'react'

// ──────────────────────────────────────────────────────────
// Exercise Guide - Smart writing suggestions for learners
// Compares user code against expected solution patterns and
// generates contextual code writing suggestions when the
// user is going in the wrong direction.
// ──────────────────────────────────────────────────────────

/**
 * Analyzes user code against an exercise's solution and test expectations.
 * Returns actionable suggestions with code snippets to guide the learner.
 */
export function analyzeExerciseCode(userCode, exercise) {
  if (!userCode || !exercise) return []

  const suggestions = []
  const code = userCode.trim()
  const solution = (exercise.solution || '').trim()
  const starter = (exercise.starterCode || '').trim()

  // Don't suggest anything if the code hasn't changed from starter
  if (code === starter) return []

  const userLines = code.split('\n').map(l => l.trimEnd())
  const solLines = solution.split('\n').map(l => l.trimEnd())

  // ── 1. Detect untouched TODO comments ──
  const todoLines = []
  userLines.forEach((line, i) => {
    if (line.match(/^\s*#\s*TODO/i) && !line.match(/^\s*#\s*TODO.*done/i)) {
      todoLines.push(i + 1)
    }
  })
  if (todoLines.length > 0) {
    // Find what code should replace the first TODO
    const firstTodo = todoLines[0]
    const todoSnippet = findCodeForTodo(userLines, solLines, firstTodo)
    if (todoSnippet) {
      suggestions.push({
        type: 'todo',
        severity: 'info',
        title: `TODO on line ${firstTodo} needs code`,
        message: `This TODO comment is waiting for your code. Here's a hint for what to write:`,
        codeSuggestion: todoSnippet,
        line: firstTodo
      })
    }
  }

  // ── 2. Detect empty/blank lines where code is expected ──
  if (code.length < starter.length * 0.5 && code.length < solution.length * 0.3) {
    suggestions.push({
      type: 'incomplete',
      severity: 'warning',
      title: 'Code looks incomplete',
      message: 'It seems like you removed some of the starter code. Try resetting and filling in the TODO sections.',
      codeSuggestion: null,
      line: null
    })
  }

  // ── 3. Detect common syntax mistakes ──
  const syntaxIssues = detectSyntaxIssues(userLines)
  suggestions.push(...syntaxIssues)

  // ── 4. Compare output-producing patterns against solution ──
  const patternSuggestions = detectMissingPatterns(userLines, solLines, exercise)
  suggestions.push(...patternSuggestions)

  // ── 5. Detect wrong approach (very different from solution) ──
  const approachSuggestions = detectWrongApproach(userLines, solLines, exercise)
  suggestions.push(...approachSuggestions)

  // Deduplicate by title
  const seen = new Set()
  return suggestions.filter(s => {
    if (seen.has(s.title)) return false
    seen.add(s.title)
    return true
  }).slice(0, 5) // Max 5 suggestions at a time
}

/**
 * Finds the solution code that should replace a TODO comment.
 */
function findCodeForTodo(userLines, solLines, todoLineNum) {
  const todoLine = userLines[todoLineNum - 1]
  const indent = todoLine.match(/^(\s*)/)[1]

  // Look for the next non-comment, non-blank line in solution at similar position
  // Search around the same line number in the solution
  const searchStart = Math.max(0, todoLineNum - 3)
  const searchEnd = Math.min(solLines.length, todoLineNum + 5)

  for (let i = searchStart; i < searchEnd; i++) {
    const solLine = solLines[i]
    if (!solLine || solLine.trim().startsWith('#') || solLine.trim() === '') continue
    // Check it's actual code (not a comment that exists in both)
    const existsInUser = userLines.some(ul => ul.trim() === solLine.trim())
    if (!existsInUser) {
      // Found a solution line not in user code - this is likely what they need
      // Grab consecutive code lines
      const snippet = []
      for (let j = i; j < solLines.length; j++) {
        const sl = solLines[j]
        if (sl.trim() === '' && snippet.length > 0) break
        if (sl.trim().startsWith('#') && snippet.length > 0) break
        if (!sl.trim().startsWith('#') && sl.trim() !== '') {
          snippet.push(sl)
        }
        if (snippet.length >= 3) break
      }
      if (snippet.length > 0) return snippet.join('\n')
    }
  }
  return null
}

/**
 * Detects common syntax mistakes beginners make.
 */
function detectSyntaxIssues(userLines) {
  const issues = []

  userLines.forEach((line, i) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return
    const lineNum = i + 1

    // Missing colon after if/for/while/def/class/elif/else
    const kwMatch = trimmed.match(/^(if|elif|else|for|while|def|class|try|except|finally|with)\b/)
    if (kwMatch) {
      const noComment = trimmed.replace(/#.*$/, '').trimEnd()
      if (!noComment.endsWith(':') && !noComment.endsWith('\\') && !noComment.endsWith(',') && !noComment.endsWith('(')) {
        issues.push({
          type: 'syntax',
          severity: 'error',
          title: `Missing colon after "${kwMatch[1]}" on line ${lineNum}`,
          message: `In Python, ${kwMatch[1]} statements must end with a colon (:). Add it at the end of the line.`,
          codeSuggestion: line.replace(/(\s*)(#.*)?$/, ':$2'),
          line: lineNum
        })
      }
    }

    // Using = instead of == in conditions
    if (trimmed.match(/^(if|elif|while)\b/) && trimmed.includes(' = ') && !trimmed.includes(' == ') && !trimmed.includes(' != ') && !trimmed.includes(':=')) {
      issues.push({
        type: 'syntax',
        severity: 'error',
        title: `Using = instead of == on line ${lineNum}`,
        message: 'Use == to compare values (equality check). Single = is for assigning values to variables.',
        codeSuggestion: line.replace(/ = /g, ' == '),
        line: lineNum
      })
    }

    // print without parentheses
    if (trimmed.match(/^print\s+[^(]/) && !trimmed.startsWith('print(')) {
      const content = trimmed.replace(/^print\s+/, '')
      issues.push({
        type: 'syntax',
        severity: 'error',
        title: `print() needs parentheses on line ${lineNum}`,
        message: 'In Python 3, print is a function and requires parentheses: print("text")',
        codeSuggestion: line.replace(/print\s+(.+)/, 'print($1)'),
        line: lineNum
      })
    }

    // Wrong indentation (tabs mixed with spaces)
    if (line.includes('\t') && line.includes('  ')) {
      issues.push({
        type: 'syntax',
        severity: 'warning',
        title: `Mixed tabs and spaces on line ${lineNum}`,
        message: 'Use only spaces (4 spaces) for indentation. Mixing tabs and spaces causes errors.',
        codeSuggestion: line.replace(/\t/g, '    '),
        line: lineNum
      })
    }

    // Missing closing quote
    const singleQuotes = (trimmed.match(/'/g) || []).length
    const doubleQuotes = (trimmed.match(/"/g) || []).length
    if (singleQuotes % 2 !== 0 && !trimmed.includes("'''") && !trimmed.endsWith('\\')) {
      issues.push({
        type: 'syntax',
        severity: 'error',
        title: `Unmatched quote on line ${lineNum}`,
        message: 'You have an opening quote without a matching closing quote. Every quote must be paired.',
        codeSuggestion: null,
        line: lineNum
      })
    }
  })

  return issues
}

/**
 * Detects missing key patterns by comparing user code to solution.
 */
function detectMissingPatterns(userLines, solLines, exercise) {
  const suggestions = []
  const userCode = userLines.join('\n').toLowerCase()
  const solCode = solLines.join('\n')

  // Check for key constructs in solution that user is missing
  const patterns = [
    { regex: /\bfor\b.*\bin\b/, name: 'for loop', hint: 'The solution uses a for loop. Try: for item in collection:' },
    { regex: /\bwhile\b/, name: 'while loop', hint: 'The solution uses a while loop. Try: while condition:' },
    { regex: /\bif\b/, name: 'if statement', hint: 'The solution uses an if statement for a condition check.' },
    { regex: /\bdef\b/, name: 'function definition', hint: 'The solution defines a function. Try: def function_name(params):' },
    { regex: /\bclass\b/, name: 'class definition', hint: 'The solution defines a class. Try: class ClassName:' },
    { regex: /\breturn\b/, name: 'return statement', hint: 'The solution returns a value from a function. Did you forget return?' },
    { regex: /\.append\(/, name: '.append()', hint: 'The solution uses .append() to add items to a list.' },
    { regex: /\.items\(\)/, name: '.items()', hint: 'The solution loops through dictionary items using .items().' },
    { regex: /f".*\{/, name: 'f-string', hint: 'The solution uses f-strings for formatting. Try: f"text {variable}"' },
    { regex: /\bprint\(/, name: 'print()', hint: 'The solution uses print() to display output. Make sure you have print statements.' },
    { regex: /\blambda\b/, name: 'lambda', hint: 'The solution uses a lambda function: lambda x: expression' },
    { regex: /\bsorted\(/, name: 'sorted()', hint: 'The solution uses sorted() to sort data.' },
    { regex: /\brange\(/, name: 'range()', hint: 'The solution uses range() to generate numbers.' },
    { regex: /\blen\(/, name: 'len()', hint: 'The solution uses len() to get the length/count.' },
    { regex: /\bsum\(/, name: 'sum()', hint: 'The solution uses sum() to add up values.' },
  ]

  const solCodeLower = solCode.toLowerCase()
  for (const p of patterns) {
    if (p.regex.test(solCodeLower) && !p.regex.test(userCode)) {
      // Find the actual line in solution that uses this pattern
      const solLine = solLines.find(l => p.regex.test(l.toLowerCase()))
      suggestions.push({
        type: 'missing',
        severity: 'info',
        title: `Consider using ${p.name}`,
        message: p.hint,
        codeSuggestion: solLine ? solLine.trim() : null,
        line: null
      })
    }
  }

  // Check if user has any print() calls when solution has them
  const solPrintCount = (solCode.match(/\bprint\(/g) || []).length
  const userPrintCount = (userCode.match(/\bprint\(/g) || []).length
  if (solPrintCount > 0 && userPrintCount === 0) {
    suggestions.push({
      type: 'missing',
      severity: 'warning',
      title: 'No output detected',
      message: `The solution has ${solPrintCount} print statement(s) but your code has none. Tests check printed output.`,
      codeSuggestion: solLines.find(l => /\bprint\(/.test(l))?.trim() || null,
      line: null
    })
  }

  return suggestions.slice(0, 3) // Limit pattern suggestions
}

/**
 * Detects if the user is going in a fundamentally wrong direction.
 */
function detectWrongApproach(userLines, solLines, exercise) {
  const suggestions = []
  const userCode = userLines.filter(l => l.trim() && !l.trim().startsWith('#')).join('\n')
  const solCode = solLines.filter(l => l.trim() && !l.trim().startsWith('#')).join('\n')

  if (!userCode || userCode.length < 10) return suggestions

  // Check if user defined a function when they shouldn't, or didn't when they should
  const solHasDef = /\bdef\b/.test(solCode)
  const userHasDef = /\bdef\b/.test(userCode)

  if (solHasDef && !userHasDef && solCode.split('def ').length > 1) {
    const defLine = solLines.find(l => /^\s*def\b/.test(l))
    if (defLine) {
      suggestions.push({
        type: 'approach',
        severity: 'info',
        title: 'You need to define a function',
        message: 'This exercise expects you to create a function. Start with the def keyword.',
        codeSuggestion: defLine.trim(),
        line: null
      })
    }
  }

  // Check if user is using wrong loop type
  const solHasFor = /\bfor\b/.test(solCode)
  const solHasWhile = /\bwhile\b/.test(solCode)
  const userHasFor = /\bfor\b/.test(userCode)
  const userHasWhile = /\bwhile\b/.test(userCode)

  if (solHasFor && !solHasWhile && userHasWhile && !userHasFor) {
    suggestions.push({
      type: 'approach',
      severity: 'info',
      title: 'Try using a for loop instead',
      message: 'A for loop might be simpler here. Use: for item in collection: or for i in range(n):',
      codeSuggestion: solLines.find(l => /\bfor\b/.test(l))?.trim() || null,
      line: null
    })
  }

  // Check if user code has error-prone patterns
  if (userCode.includes('while True') && !solCode.includes('while True')) {
    suggestions.push({
      type: 'approach',
      severity: 'warning',
      title: 'Infinite loop risk',
      message: 'Your code uses "while True" which can cause an infinite loop. The solution uses a different approach.',
      codeSuggestion: null,
      line: null
    })
  }

  return suggestions
}

/**
 * React hook that provides real-time exercise guidance.
 */
export function useExerciseGuide(code, exercise, enabled = true) {
  const [guidance, setGuidance] = useState([])
  const debounceRef = useRef(null)

  useEffect(() => {
    if (!enabled || !code || !exercise) {
      setGuidance([])
      return
    }

    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      const results = analyzeExerciseCode(code, exercise)
      setGuidance(results)
    }, 800) // 800ms debounce to avoid too-frequent analysis

    return () => clearTimeout(debounceRef.current)
  }, [code, exercise, enabled])

  return { guidance }
}
