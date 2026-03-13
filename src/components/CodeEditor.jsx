import React, { useState, useEffect, useRef, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Trash2, RotateCcw, Loader2, Shield, ShieldAlert, ShieldCheck, Info, AlertTriangle, XCircle, Wrench, ChevronDown, ChevronRight, Zap } from 'lucide-react'
import { usePyodide } from '../hooks/usePyodide'
import { useCodeAnalyzer } from '../hooks/useCodeAnalyzer'

const DEFAULT_CODE = `# Welcome to PyMaster Code Editor!
# Write your Python code here and click Run
# Smart Check is ON - it will detect errors as you type!

print("Hello, Python!")

# Try some code:
for i in range(5):
    print(f"Count: {i}")
`

const SEVERITY_CONFIG = {
  error: { icon: XCircle, color: 'var(--accent-red)', label: 'Error', monacoSeverity: 8 },
  warning: { icon: AlertTriangle, color: 'var(--accent-orange)', label: 'Warning', monacoSeverity: 4 },
  info: { icon: Info, color: 'var(--accent-blue)', label: 'Tip', monacoSeverity: 2 },
}

export default function CodeEditor({ initialCode }) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE)
  const [output, setOutput] = useState('')
  const [isError, setIsError] = useState(false)
  const [smartCheckEnabled, setSmartCheckEnabled] = useState(true)
  const [expandedDiag, setExpandedDiag] = useState(null)
  const [outputTab, setOutputTab] = useState('output') // 'output' | 'suggestions'
  const { runCode, status } = usePyodide()
  const { diagnostics, applyFix, applyAllFixes, errorCount, warningCount, infoCount, totalCount } = useCodeAnalyzer(code, smartCheckEnabled)
  const prevInitialCode = useRef(initialCode)
  const editorRef = useRef(null)
  const monacoRef = useRef(null)

  useEffect(() => {
    if (initialCode && initialCode !== prevInitialCode.current) {
      setCode(initialCode)
      prevInitialCode.current = initialCode
      setOutput('')
      setIsError(false)
    }
  }, [initialCode])

  // Apply Monaco editor markers for diagnostics
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return
    const model = editorRef.current.getModel()
    if (!model) return

    const monaco = monacoRef.current

    if (!smartCheckEnabled || diagnostics.length === 0) {
      monaco.editor.setModelMarkers(model, 'pymaster', [])
      return
    }

    const markers = diagnostics.map(d => ({
      severity: SEVERITY_CONFIG[d.severity]?.monacoSeverity || 2,
      startLineNumber: d.line,
      startColumn: d.column,
      endLineNumber: d.line,
      endColumn: d.endColumn,
      message: d.message,
      source: 'PyMaster Smart Check',
    }))

    monaco.editor.setModelMarkers(model, 'pymaster', markers)
  }, [diagnostics, smartCheckEnabled])

  // Auto-switch to suggestions tab when there are issues and no output yet
  useEffect(() => {
    if (totalCount > 0 && !output && smartCheckEnabled) {
      setOutputTab('suggestions')
    }
  }, [totalCount])

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor
    monacoRef.current = monaco
  }

  const handleRun = async () => {
    if (status === 'running') return
    setOutput('Loading Python engine...')
    setIsError(false)
    setOutputTab('output')

    const result = await runCode(code)

    if (result.success) {
      setOutput(result.output || '(No output)')
      setIsError(false)
    } else {
      const msg = result.output ? result.output + '\n\n' + result.error : result.error
      setOutput(msg)
      setIsError(true)
    }
  }

  // Ctrl+Enter keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        handleRun()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [code, status])

  const handleClear = () => {
    setOutput('')
    setIsError(false)
  }

  const handleReset = () => {
    setCode(DEFAULT_CODE)
    setOutput('')
    setIsError(false)
    setExpandedDiag(null)
  }

  const handleApplyFix = (diagnostic) => {
    const newCode = applyFix(diagnostic, code)
    setCode(newCode)
    setExpandedDiag(null)
  }

  const handleFixAll = () => {
    const newCode = applyAllFixes(code)
    setCode(newCode)
    setExpandedDiag(null)
  }

  const handleGoToLine = (lineNum) => {
    if (editorRef.current) {
      editorRef.current.revealLineInCenter(lineNum)
      editorRef.current.setPosition({ lineNumber: lineNum, column: 1 })
      editorRef.current.focus()
    }
  }

  const statusLabel = {
    idle: 'Click Run to load',
    loading: 'Loading Python...',
    ready: 'Python Ready',
    running: 'Running...',
  }

  const statusClass = {
    idle: 'idle',
    loading: 'loading',
    ready: 'ready',
    running: 'loading',
  }

  const fixableCount = diagnostics.filter(d => d.fix).length

  return (
    <div className="editor-view fade-in">
      <div className="editor-toolbar">
        <div className="editor-toolbar-left">
          <h2>Code Editor</h2>
          <span className={`pyodide-status ${statusClass[status]}`}>
            {status === 'loading' || status === 'running' ? (
              <Loader2 size={12} style={{ display: 'inline', marginRight: '4px', animation: 'spin 1s linear infinite' }} />
            ) : null}
            {statusLabel[status]}
          </span>
        </div>
        <div className="editor-toolbar-right">
          <button
            className={`btn btn-ghost smart-check-btn ${smartCheckEnabled ? 'active' : ''}`}
            onClick={() => setSmartCheckEnabled(!smartCheckEnabled)}
            title={smartCheckEnabled ? 'Disable Smart Check' : 'Enable Smart Check'}
          >
            {smartCheckEnabled ? <ShieldCheck size={14} /> : <Shield size={14} />}
            Smart Check
            {smartCheckEnabled && totalCount > 0 && (
              <span className="smart-check-badge">{totalCount}</span>
            )}
          </button>
          <button className="btn btn-ghost" onClick={handleReset} title="Reset code">
            <RotateCcw size={14} /> Reset
          </button>
          <button className="btn btn-ghost" onClick={handleClear} title="Clear output">
            <Trash2 size={14} /> Clear
          </button>
          <button
            className="btn btn-primary"
            onClick={handleRun}
            disabled={status === 'running'}
          >
            <Play size={14} /> Run <span className="editor-shortcut">Ctrl+Enter</span>
          </button>
        </div>
      </div>

      <div className="editor-container">
        <div className="editor-panel">
          <Editor
            height="100%"
            defaultLanguage="python"
            value={code}
            onChange={(val) => setCode(val || '')}
            theme="vs-dark"
            onMount={handleEditorMount}
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              minimap: { enabled: false },
              padding: { top: 16, bottom: 16 },
              scrollBeyondLastLine: false,
              lineNumbers: 'on',
              renderLineHighlight: 'line',
              bracketPairColorization: { enabled: true },
              automaticLayout: true,
              tabSize: 4,
              wordWrap: 'on',
              suggest: { showKeywords: true },
              glyphMargin: true,
            }}
          />
        </div>

        <div className="output-panel">
          {/* Tab headers */}
          <div className="output-tabs">
            <button
              className={`output-tab ${outputTab === 'output' ? 'active' : ''}`}
              onClick={() => setOutputTab('output')}
            >
              Output
              {isError && <span className="output-tab-indicator error" />}
            </button>
            <button
              className={`output-tab ${outputTab === 'suggestions' ? 'active' : ''}`}
              onClick={() => setOutputTab('suggestions')}
            >
              Suggestions
              {smartCheckEnabled && totalCount > 0 && (
                <span className="suggestions-count">
                  {errorCount > 0 && <span className="sc-errors">{errorCount}</span>}
                  {warningCount > 0 && <span className="sc-warnings">{warningCount}</span>}
                  {infoCount > 0 && <span className="sc-info">{infoCount}</span>}
                </span>
              )}
            </button>
          </div>

          {/* Output content */}
          {outputTab === 'output' && (
            <div className="output-content">
              <div className="output-header">
                <span>Console</span>
                {output && (
                  <button
                    className="code-block-copy"
                    onClick={() => navigator.clipboard?.writeText(output)}
                  >
                    Copy
                  </button>
                )}
              </div>
              <div className={`output-body ${isError ? 'error' : ''} ${!output ? 'idle' : ''}`}>
                {output || 'Click "Run" to execute your Python code...'}
              </div>
            </div>
          )}

          {/* Suggestions content */}
          {outputTab === 'suggestions' && (
            <div className="suggestions-panel">
              {!smartCheckEnabled ? (
                <div className="suggestions-disabled">
                  <Shield size={32} />
                  <p>Smart Check is disabled</p>
                  <button className="btn btn-ghost" onClick={() => setSmartCheckEnabled(true)}>
                    Enable Smart Check
                  </button>
                </div>
              ) : totalCount === 0 ? (
                <div className="suggestions-empty">
                  <ShieldCheck size={32} style={{ color: 'var(--accent-green)' }} />
                  <p>No issues found! Your code looks great.</p>
                </div>
              ) : (
                <>
                  {/* Fix All button */}
                  {fixableCount > 1 && (
                    <div className="suggestions-actions">
                      <button className="btn btn-ghost fix-all-btn" onClick={handleFixAll}>
                        <Zap size={14} /> Fix All ({fixableCount} fixable)
                      </button>
                    </div>
                  )}

                  {/* Diagnostic list */}
                  <div className="suggestions-list">
                    {diagnostics.map((diag, idx) => {
                      const config = SEVERITY_CONFIG[diag.severity]
                      const Icon = config.icon
                      const isExpanded = expandedDiag === idx

                      return (
                        <div key={`${diag.id}-${diag.line}-${idx}`} className={`suggestion-item severity-${diag.severity}`}>
                          <div
                            className="suggestion-header"
                            onClick={() => setExpandedDiag(isExpanded ? null : idx)}
                          >
                            <div className="suggestion-left">
                              <Icon size={14} style={{ color: config.color, flexShrink: 0 }} />
                              <span className="suggestion-line" onClick={(e) => { e.stopPropagation(); handleGoToLine(diag.line) }}>
                                L{diag.line}
                              </span>
                              <span className="suggestion-message">{diag.message}</span>
                            </div>
                            <div className="suggestion-right">
                              {diag.fix && (
                                <button
                                  className="fix-btn"
                                  onClick={(e) => { e.stopPropagation(); handleApplyFix(diag) }}
                                  title="Apply fix"
                                >
                                  <Wrench size={12} /> Fix
                                </button>
                              )}
                              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </div>
                          </div>

                          {isExpanded && diag.explanation && (
                            <div className="suggestion-explanation">
                              <pre>{diag.explanation}</pre>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
