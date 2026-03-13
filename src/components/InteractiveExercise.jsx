import React, { useState, useRef, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import {
  Play, CheckCircle2, XCircle, Lightbulb, Eye, EyeOff,
  RotateCcw, Loader2, Trophy, AlertCircle, ChevronDown, ChevronRight, Sparkles
} from 'lucide-react'
import { usePyodide } from '../hooks/usePyodide'

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
  const { runCode, status } = usePyodide()
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

    // Run tests against output
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
  }

  const revealHint = () => {
    if (exercise.hints && revealedHints < exercise.hints.length) {
      setRevealedHints(prev => prev + 1)
    }
  }

  const passedCount = testResults?.results?.filter(r => r.passed).length || 0
  const totalTests = exercise.tests?.length || 0
  const maxHints = exercise.hints?.length || 0

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
    if (match) return `Variable or function "${match[1]}" is not defined. Did you forget to create it?`
  }
  if (error.includes('SyntaxError')) {
    return 'There\'s a syntax error in your code. Check for missing colons, parentheses, or indentation.'
  }
  if (error.includes('IndentationError')) {
    return 'Indentation problem. Make sure you use 4 spaces for indentation inside blocks.'
  }
  if (error.includes('TypeError')) {
    return 'Type mismatch. You might be mixing types (e.g., adding string and number).'
  }
  if (error.includes('IndexError')) {
    return 'You tried to access an index that doesn\'t exist in the list.'
  }
  if (error.includes('KeyError')) {
    return 'You tried to access a dictionary key that doesn\'t exist.'
  }
  // Return the last meaningful line of the error
  const lines = error.trim().split('\n').filter(l => l.trim())
  return lines[lines.length - 1] || error
}
