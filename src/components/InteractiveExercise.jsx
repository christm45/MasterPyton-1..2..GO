import React, { useState, useRef, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import {
  Play, CheckCircle2, XCircle, Lightbulb, Eye, EyeOff,
  RotateCcw, Loader2, Trophy, AlertCircle, ChevronDown, ChevronRight,
  Sparkles, Code2, Copy, ArrowRight, Wand2, FileCode
} from 'lucide-react'
import { usePyodide } from '../hooks/usePyodide'
import { useExerciseGuide } from '../hooks/useExerciseGuide'

export default function InteractiveExercise({ exercise, onComplete, isCompleted }) {
  const [code, setCode] = useState(exercise.starterCode)
  const [testResults, setTestResults] = useState(null)
  const [output, setOutput] = useState('')
  const [isError, setIsError] = useState(false)
  const [revealedHints, setRevealedHints] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [celebrating, setCelebrating] = useState(false)
  const [showGuide, setShowGuide] = useState(true)
  const [appliedSnippets, setAppliedSnippets] = useState(new Set())
  const { runCode, status } = usePyodide()
  const { guidance } = useExerciseGuide(code, exercise, showGuide)
  const hasCompleted = useRef(false)

  const handleRun = useCallback(async () => {
    if (status === 'running') return
    setTestResults(null)
    setSuggestions([])
    setIsError(false)
    setShowOutput(true)
    setOutput('Loading Python engine...')

    const result = await runCode(code)

    if (result.success) {
      setOutput(result.output || '(No output)')
      setIsError(false)
    } else {
      setOutput(result.output ? result.output + '\n\n' + result.error : result.error)
      setIsError(true)
    }
  }, [code, status, runCode])

  const handleCheck = useCallback(async () => {
    if (status === 'running' || !exercise.tests) return
    setTestResults(null)
    setSuggestions([])
    setIsError(false)
    setShowOutput(true)
    setOutput('Checking your solution...')

    const result = await runCode(code)
    const userOutput = result.output || ''
    setOutput(userOutput)

    if (!result.success) {
      setIsError(true)
      setOutput(result.output ? result.output + '\n\n' + result.error : result.error)
      setTestResults({ passed: false, results: [] })
      setSuggestions([{
        type: 'error',
        title: 'Code Error',
        message: parseError(result.error)
      }])
      return
    }

    const outputNormalized = userOutput.trim()
    const results = exercise.tests.map(test => {
      const expectedNorm = test.expected.trim()
      const passed = test.exact
        ? outputNormalized === expectedNorm
        : outputNormalized.includes(expectedNorm)
      return { ...test, passed }
    })

    const allPassed = results.every(r => r.passed)
    setTestResults({ passed: allPassed, results })

    if (!allPassed) {
      const failedTests = results.filter(r => !r.passed)
      setSuggestions(failedTests.map(t => ({
        type: 'hint',
        title: t.name,
        message: t.hint
      })))
    }

    if (allPassed && !hasCompleted.current) {
      hasCompleted.current = true
      setCelebrating(true)
      setTimeout(() => setCelebrating(false), 3000)
      if (onComplete) onComplete()
    }
  }, [code, status, runCode, exercise.tests, onComplete])

  const handleReset = () => {
    setCode(exercise.starterCode)
    setTestResults(null)
    setOutput('')
    setIsError(false)
    setSuggestions([])
    setRevealedHints(0)
    setShowSolution(false)
    setShowOutput(false)
    setAppliedSnippets(new Set())
  }

  const revealHint = () => {
    if (exercise.hints && revealedHints < exercise.hints.length) {
      setRevealedHints(prev => prev + 1)
    }
  }

  // Apply a code suggestion snippet into the editor
  const applySnippet = useCallback((snippet, guideTitle) => {
    if (!snippet) return
    const lines = code.split('\n')

    // Try to find the best place to insert: after the last TODO or at the end
    let insertIndex = -1
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].match(/^\s*#\s*TODO/i)) {
        insertIndex = i + 1
        break
      }
    }
    // If no TODO found, append at end
    if (insertIndex === -1) insertIndex = lines.length

    // Detect indentation from context
    const contextLine = lines[Math.max(0, insertIndex - 1)]
    const indent = contextLine.match(/^(\s*)/)?.[1] || ''
    const indentedSnippet = snippet.split('\n').map((l, i) => {
      if (i === 0 && l.trim() === '') return l
      if (l.trim() === '') return ''
      // Only add indent if the snippet line doesn't already have enough
      const existingIndent = l.match(/^(\s*)/)?.[1] || ''
      return existingIndent.length >= indent.length ? l : indent + l.trim()
    }).join('\n')

    lines.splice(insertIndex, 0, indentedSnippet)
    setCode(lines.join('\n'))
    setAppliedSnippets(prev => new Set([...prev, guideTitle]))
  }, [code])

  // Copy snippet to clipboard
  const copySnippet = useCallback((snippet) => {
    if (!snippet) return
    navigator.clipboard?.writeText(snippet).catch(() => {})
  }, [])

  const passedCount = testResults?.results?.filter(r => r.passed).length || 0
  const totalTests = exercise.tests?.length || 0
  const maxHints = exercise.hints?.length || 0
  const activeGuidance = guidance.filter(g => !appliedSnippets.has(g.title))

  return (
    <div className="interactive-exercise">
      {/* Header */}
      <div className="ie-header">
        <div className="ie-header-top">
          <Sparkles size={20} style={{ color: 'var(--accent-purple)' }} />
          <h3>Interactive Challenge: {exercise.title}</h3>
          {isCompleted && (
            <span className="ie-completed-badge">
              <CheckCircle2 size={14} /> Completed
            </span>
          )}
        </div>
        <p className="ie-description">{exercise.description}</p>
      </div>

      {/* Smart Guide Panel - Shows real-time writing suggestions */}
      {showGuide && activeGuidance.length > 0 && !testResults?.passed && (
        <div className="ie-guide fade-in">
          <div className="ie-guide-header">
            <div className="ie-guide-title">
              <Wand2 size={14} />
              <span>Writing Guide</span>
              <span className="ie-guide-count">{activeGuidance.length}</span>
            </div>
            <button
              className="ie-guide-toggle"
              onClick={() => setShowGuide(false)}
              title="Hide writing guide"
            >
              <XCircle size={14} />
            </button>
          </div>
          <div className="ie-guide-items">
            {activeGuidance.map((g, i) => (
              <div key={i} className={`ie-guide-item ie-guide-${g.severity}`}>
                <div className="ie-guide-item-header">
                  {g.severity === 'error' ? <AlertCircle size={14} /> :
                   g.severity === 'warning' ? <AlertCircle size={14} /> :
                   <Lightbulb size={14} />}
                  <strong>{g.title}</strong>
                </div>
                <p className="ie-guide-message">{g.message}</p>
                {g.codeSuggestion && (
                  <div className="ie-guide-code">
                    <div className="ie-guide-code-header">
                      <FileCode size={12} />
                      <span>Suggested code</span>
                    </div>
                    <pre><code>{g.codeSuggestion}</code></pre>
                    <div className="ie-guide-code-actions">
                      <button
                        className="ie-guide-btn ie-guide-apply"
                        onClick={() => applySnippet(g.codeSuggestion, g.title)}
                        title="Insert this code into your editor"
                      >
                        <ArrowRight size={12} /> Insert
                      </button>
                      <button
                        className="ie-guide-btn"
                        onClick={() => copySnippet(g.codeSuggestion)}
                        title="Copy to clipboard"
                      >
                        <Copy size={12} /> Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show guide toggle when hidden */}
      {!showGuide && activeGuidance.length > 0 && !testResults?.passed && (
        <button
          className="ie-guide-show-btn"
          onClick={() => setShowGuide(true)}
        >
          <Wand2 size={14} /> Show Writing Guide ({activeGuidance.length} suggestions)
        </button>
      )}

      {/* Code Editor */}
      <div className="ie-editor-wrapper">
        <div className="ie-editor-header">
          <span className="code-block-lang">your code</span>
          <span className="ie-editor-hint">Complete the TODOs below</span>
        </div>
        <div className="ie-editor">
          <Editor
            height="280px"
            defaultLanguage="python"
            value={code}
            onChange={(val) => setCode(val || '')}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              minimap: { enabled: false },
              padding: { top: 12, bottom: 12 },
              scrollBeyondLastLine: false,
              lineNumbers: 'on',
              renderLineHighlight: 'line',
              tabSize: 4,
              wordWrap: 'on',
              automaticLayout: true,
              bracketPairColorization: { enabled: true },
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="ie-actions">
        <div className="ie-actions-left">
          <button
            className="btn btn-primary"
            onClick={handleCheck}
            disabled={status === 'running' || status === 'loading'}
          >
            {status === 'running' || status === 'loading'
              ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
              : <CheckCircle2 size={14} />}
            Check Solution
          </button>
          <button
            className="btn btn-ghost"
            onClick={handleRun}
            disabled={status === 'running' || status === 'loading'}
          >
            <Play size={14} /> Run Only
          </button>
        </div>
        <div className="ie-actions-right">
          <button className="btn btn-ghost" onClick={handleReset}>
            <RotateCcw size={14} /> Reset
          </button>
          {maxHints > 0 && revealedHints < maxHints && (
            <button className="btn btn-ghost ie-hint-btn" onClick={revealHint}>
              <Lightbulb size={14} /> Hint {revealedHints}/{maxHints}
            </button>
          )}
          <button className="btn btn-ghost" onClick={() => setShowSolution(!showSolution)}>
            {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
            {showSolution ? 'Hide' : 'Solution'}
          </button>
        </div>
      </div>

      {/* Progressive Hints */}
      {revealedHints > 0 && exercise.hints && (
        <div className="ie-hints">
          {exercise.hints.slice(0, revealedHints).map((hint, i) => (
            <div key={i} className="ie-hint-item fade-in">
              <Lightbulb size={14} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
              <span>{hint}</span>
            </div>
          ))}
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="code-block fade-in" style={{ marginTop: '12px' }}>
          <div className="code-block-header">
            <span className="code-block-lang">solution</span>
          </div>
          <pre><code>{exercise.solution}</code></pre>
        </div>
      )}

      {/* Test Results */}
      {testResults && (
        <div className={`ie-results fade-in ${testResults.passed ? 'ie-results-pass' : 'ie-results-fail'}`}>
          <div className="ie-results-header">
            {testResults.passed ? (
              <>
                <Trophy size={22} style={{ color: 'var(--accent-green)' }} />
                <div>
                  <span className="ie-results-title ie-pass">All Tests Passed!</span>
                  <span className="ie-results-sub">Great job! Challenge completed.</span>
                </div>
              </>
            ) : (
              <>
                <AlertCircle size={22} style={{ color: 'var(--accent-orange)' }} />
                <div>
                  <span className="ie-results-title ie-fail">
                    {passedCount}/{totalTests} Tests Passed
                  </span>
                  <span className="ie-results-sub">
                    {testResults.results.length === 0
                      ? 'Fix the error in your code first.'
                      : 'Check the suggestions below and try again.'}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Individual test results */}
          {testResults.results.length > 0 && (
            <div className="ie-test-list">
              {testResults.results.map((result, i) => (
                <div key={i} className={`ie-test-item ${result.passed ? 'ie-test-pass' : 'ie-test-fail'}`}>
                  {result.passed
                    ? <CheckCircle2 size={16} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                    : <XCircle size={16} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                  }
                  <span>{result.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Suggestions for failed tests */}
          {suggestions.length > 0 && (
            <div className="ie-suggestions">
              <div className="ie-suggestions-title">
                <Lightbulb size={14} style={{ color: 'var(--accent-orange)' }} />
                Suggestions
              </div>
              {suggestions.map((s, i) => (
                <div key={i} className={`ie-suggestion-item ${s.type}`}>
                  <strong>{s.title}</strong>
                  <p>{s.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Celebration overlay */}
      {celebrating && (
        <div className="ie-celebration fade-in">
          <div className="ie-celebration-inner">
            <Trophy size={48} style={{ color: 'var(--accent-green)' }} />
            <h3>Challenge Complete!</h3>
            <p>All tests passed. Keep going!</p>
          </div>
        </div>
      )}

      {/* Output Panel */}
      {showOutput && output && (
        <div className="ie-output">
          <div className="ie-output-header">
            <span>Output</span>
            <button className="code-block-copy" onClick={() => setShowOutput(false)}>Hide</button>
          </div>
          <pre className={isError ? 'ie-output-error' : ''}>{output}</pre>
        </div>
      )}
    </div>
  )
}

function parseError(error) {
  if (!error) return 'An unknown error occurred.'
  if (error.includes('NameError')) {
    const match = error.match(/name '(\w+)' is not defined/)
    if (match) return `Variable or function "${match[1]}" is not defined. Did you forget to create it? Check spelling and make sure it's defined above where you use it.`
  }
  if (error.includes('SyntaxError')) {
    if (error.includes('invalid syntax'))
      return 'Syntax error in your code. Common causes: missing colon (:) after if/for/def, unmatched parentheses, or missing quotes.'
    if (error.includes('unexpected EOF'))
      return 'Unexpected end of code. You might be missing a closing parenthesis, bracket, or quote.'
    return 'Syntax error. Check for missing colons, parentheses, or indentation.'
  }
  if (error.includes('IndentationError')) {
    return 'Indentation problem. Use exactly 4 spaces for each indent level. Make sure all lines inside if/for/def/class blocks are indented consistently.'
  }
  if (error.includes('TypeError')) {
    if (error.includes('not callable'))
      return 'You\'re trying to call something that isn\'t a function. Check for missing operators or extra parentheses.'
    if (error.includes('unsupported operand'))
      return 'You\'re trying to use an operator with incompatible types (e.g., adding a string and number). Use type conversion: str(), int(), float().'
    return 'Type mismatch. You might be mixing types (e.g., adding string and number).'
  }
  if (error.includes('IndexError')) {
    return 'You tried to access an index that doesn\'t exist. Remember: lists start at index 0 and the last index is len(list)-1.'
  }
  if (error.includes('KeyError')) {
    const match = error.match(/KeyError:\s*['"]?(\w+)/)
    if (match) return `Dictionary key "${match[1]}" doesn't exist. Check spelling or use .get("${match[1]}", default) for safe access.`
    return 'You tried to access a dictionary key that doesn\'t exist.'
  }
  if (error.includes('AttributeError')) {
    const match = error.match(/has no attribute '(\w+)'/)
    if (match) return `The object doesn't have a method or attribute called "${match[1]}". Check the spelling or object type.`
    return 'Object doesn\'t have the attribute you\'re trying to use.'
  }
  if (error.includes('ValueError')) {
    return 'Invalid value. For example, int("hello") fails because "hello" is not a number.'
  }
  if (error.includes('ZeroDivisionError')) {
    return 'Division by zero! Check your denominator - you cannot divide by 0.'
  }
  const lines = error.trim().split('\n').filter(l => l.trim())
  return lines[lines.length - 1] || error
}
