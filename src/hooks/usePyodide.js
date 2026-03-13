import { useState, useRef, useCallback } from 'react'

export function usePyodide() {
  const [status, setStatus] = useState('idle') // idle | loading | ready | running
  const pyodideRef = useRef(null)
  const loadingRef = useRef(false)

  const loadPyodide = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current
    if (loadingRef.current) {
      // Wait for existing load
      while (loadingRef.current) {
        await new Promise(r => setTimeout(r, 100))
      }
      return pyodideRef.current
    }

    loadingRef.current = true
    setStatus('loading')

    try {
      // Load Pyodide script from CDN
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
      }

      const py = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
      })

      pyodideRef.current = py
      setStatus('ready')
      return py
    } catch (err) {
      setStatus('idle')
      throw err
    } finally {
      loadingRef.current = false
    }
  }, [])

  const runCode = useCallback(async (code) => {
    setStatus('running')

    try {
      const py = pyodideRef.current || await loadPyodide()

      // Redirect stdout and stderr
      py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`)

      try {
        py.runPython(code)
        const stdout = py.runPython('sys.stdout.getvalue()')
        const stderr = py.runPython('sys.stderr.getvalue()')

        // Reset stdout/stderr
        py.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)

        setStatus('ready')
        return {
          output: stdout + (stderr ? '\n' + stderr : ''),
          error: null,
          success: true
        }
      } catch (err) {
        // Try to get any partial output
        let partialOutput = ''
        try {
          partialOutput = py.runPython('sys.stdout.getvalue()')
        } catch {}

        // Reset stdout/stderr
        try {
          py.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`)
        } catch {}

        setStatus('ready')
        // Clean up error message
        const errorMsg = err.message
          .replace(/PythonError: Traceback.*?\n/s, '')
          .split('\n')
          .filter(line => !line.includes('pyodide'))
          .join('\n')
          .trim() || err.message

        return {
          output: partialOutput,
          error: errorMsg,
          success: false
        }
      }
    } catch (err) {
      setStatus('idle')
      return {
        output: '',
        error: 'Failed to load Python engine. Check your internet connection and try again.',
        success: false
      }
    }
  }, [loadPyodide])

  return { runCode, status, loadPyodide }
}
