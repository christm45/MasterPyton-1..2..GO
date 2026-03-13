import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Play, CheckCircle2, Clock, Lightbulb, Code2, ChevronLeft, ChevronRight } from 'lucide-react'
import lessons from '../data/lessons'
import InteractiveExercise from './InteractiveExercise'

// Simple markdown-like renderer
function renderContent(content, onTryCode) {
  const lines = content.split('\n')
  const elements = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.trim().startsWith('```')) {
      const lang = line.trim().replace('```', '').trim()
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      const code = codeLines.join('\n')
      elements.push(
        <div className="code-block" key={key++}>
          <div className="code-block-header">
            <span className="code-block-lang">{lang || 'output'}</span>
            {lang === 'python' && (
              <button className="code-block-copy" onClick={() => onTryCode(code)}>
                Try in Editor
              </button>
            )}
          </div>
          <pre><code>{code}</code></pre>
        </div>
      )
      continue
    }

    // Heading ##
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++}>{line.slice(3)}</h2>)
      i++; continue
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++}>{line.slice(4)}</h3>)
      i++; continue
    }

    // Blockquote / tip
    if (line.startsWith('> ')) {
      const tipText = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(
        <div className="lesson-tip" key={key++} dangerouslySetInnerHTML={{ __html: tipText }} />
      )
      i++; continue
    }

    // List items
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++}>
          {listItems.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      )
      continue
    }

    // Table
    if (line.includes('|') && line.trim().startsWith('|')) {
      const tableRows = []
      while (i < lines.length && lines[i].includes('|')) {
        const row = lines[i].split('|').filter(c => c.trim()).map(c => c.trim())
        if (!lines[i].match(/^[\s|:-]+$/)) {
          tableRows.push(row)
        }
        i++
      }
      if (tableRows.length > 0) {
        elements.push(
          <div key={key++} style={{ overflowX: 'auto', margin: '16px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr>
                  {tableRows[0].map((cell, ci) => (
                    <th key={ci} style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-color)', textAlign: 'left', color: 'var(--accent-cyan)', fontWeight: 600 }}
                      dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
                        dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Empty line
    if (line.trim() === '') { i++; continue }

    // Paragraph
    elements.push(
      <p key={key++} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    )
    i++
  }

  return elements
}

function formatInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}

// Get adjacent lessons in the same difficulty
function getAdjacentLessons(lesson) {
  const sameDifficulty = lessons
    .filter(l => l.difficulty === lesson.difficulty)
    .sort((a, b) => a.order - b.order)
  const idx = sameDifficulty.findIndex(l => l.id === lesson.id)
  return {
    prev: idx > 0 ? sameDifficulty[idx - 1] : null,
    next: idx < sameDifficulty.length - 1 ? sameDifficulty[idx + 1] : null,
  }
}

// Lesson Detail View
function LessonDetail({ lesson, onBack, onTryInEditor, progress, onSelectLesson }) {
  const [showSolution, setShowSolution] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const isCompleted = progress.isLessonCompleted(lesson.id)
  const { prev, next } = getAdjacentLessons(lesson)

  return (
    <div className="lesson-detail fade-in">
      <button className="lesson-detail-back" onClick={onBack}>
        <ArrowLeft size={16} /> Back to lessons
      </button>

      <div className="lesson-detail-header">
        <h1>{lesson.title}</h1>
        <div className="lesson-detail-meta">
          <span className={`lesson-meta-badge ${lesson.difficulty}`}>{lesson.difficulty}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {lesson.duration}
          </span>
          {isCompleted && (
            <span style={{ color: 'var(--accent-green)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Completed
            </span>
          )}
        </div>
      </div>

      <div className="lesson-content">
        {renderContent(lesson.content, onTryInEditor)}
      </div>

      {/* Code Example */}
      <div style={{ marginTop: '32px' }}>
        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }}>Live Example</h3>
        <div className="code-block">
          <div className="code-block-header">
            <span className="code-block-lang">python</span>
            <button className="code-block-copy" onClick={() => onTryInEditor(lesson.codeExample)}>
              <Play size={12} style={{ marginRight: '4px' }} /> Run in Editor
            </button>
          </div>
          <pre><code>{lesson.codeExample}</code></pre>
        </div>
      </div>

      {/* Exercise - Interactive or Static */}
      {lesson.exercise && (
        lesson.exercise.tests ? (
          <InteractiveExercise
            exercise={lesson.exercise}
            onComplete={() => progress.completeLesson(lesson.id)}
            isCompleted={isCompleted}
          />
        ) : (
          <div className="exercise-section">
            <h3>Exercise: {lesson.exercise.title}</h3>
            <p>{lesson.exercise.description}</p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-block-lang">starter code</span>
                <button className="code-block-copy" onClick={() => onTryInEditor(lesson.exercise.starterCode)}>
                  Open in Editor
                </button>
              </div>
              <pre><code>{lesson.exercise.starterCode}</code></pre>
            </div>

            {showHint && (
              <div className="exercise-hint fade-in">
                <Lightbulb size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {lesson.exercise.hint}
              </div>
            )}

            {showSolution && (
              <div className="code-block fade-in" style={{ marginTop: '12px' }}>
                <div className="code-block-header">
                  <span className="code-block-lang">solution</span>
                  <button className="code-block-copy" onClick={() => onTryInEditor(lesson.exercise.solution)}>
                    Run in Editor
                  </button>
                </div>
                <pre><code>{lesson.exercise.solution}</code></pre>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              {!showHint && (
                <button className="btn btn-ghost" onClick={() => setShowHint(true)}>Show Hint</button>
              )}
              <button className="btn btn-ghost" onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </button>
            </div>
          </div>
        )
      )}

      {/* Actions */}
      <div className="lesson-actions">
        <button className="btn btn-primary" onClick={() => onTryInEditor(lesson.codeExample)}>
          <Code2 size={16} /> Try in Editor
        </button>
        {!isCompleted && (
          <button className="btn btn-success" onClick={() => progress.completeLesson(lesson.id)}>
            <CheckCircle2 size={16} /> Mark Complete
          </button>
        )}
      </div>

      {/* Next / Previous Lesson Navigation */}
      <div className="lesson-nav">
        {prev ? (
          <button className="lesson-nav-btn" onClick={() => { onSelectLesson(prev.id); window.scrollTo(0, 0) }}>
            <ChevronLeft size={16} />
            <div>
              <div className="lesson-nav-btn-label">Previous</div>
              <div className="lesson-nav-btn-title">{prev.title}</div>
            </div>
          </button>
        ) : <div />}
        {next ? (
          <button className="lesson-nav-btn" onClick={() => { onSelectLesson(next.id); window.scrollTo(0, 0) }} style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div>
              <div className="lesson-nav-btn-label">Next</div>
              <div className="lesson-nav-btn-title">{next.title}</div>
            </div>
            <ChevronRight size={16} />
          </button>
        ) : <div />}
      </div>
    </div>
  )
}

// Main Lesson View
export default function LessonView({ onTryInEditor, selectedLesson, setSelectedLesson, progress }) {
  const [difficulty, setDifficulty] = useState('beginner')

  const filtered = lessons.filter(l => l.difficulty === difficulty).sort((a, b) => a.order - b.order)
  const currentLesson = selectedLesson ? lessons.find(l => l.id === selectedLesson) : null

  if (currentLesson) {
    return (
      <LessonDetail
        lesson={currentLesson}
        onBack={() => setSelectedLesson(null)}
        onTryInEditor={onTryInEditor}
        progress={progress}
        onSelectLesson={setSelectedLesson}
      />
    )
  }

  return (
    <div className="lesson-view fade-in">
      <div className="view-header">
        <h2>Lessons</h2>
        <p>Master Python step by step, from basics to advanced concepts</p>
      </div>

      <div className="difficulty-tabs">
        {['beginner', 'intermediate', 'advanced', 'data', 'library'].map(d => (
          <button
            key={d}
            className={`diff-tab ${difficulty === d ? `active-${d}` : ''}`}
            onClick={() => setDifficulty(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="lesson-grid">
        {filtered.map(lesson => {
          const isCompleted = progress.isLessonCompleted(lesson.id)
          return (
            <div
              key={lesson.id}
              className={`lesson-card ${isCompleted ? 'completed' : ''}`}
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <div className="lesson-card-header">
                <div className={`lesson-card-number ${lesson.difficulty}`}>
                  {isCompleted ? <CheckCircle2 size={16} /> : `${lesson.order}`}
                </div>
                <span className="lesson-card-title">{lesson.title}</span>
              </div>
              <p className="lesson-card-desc">{lesson.description}</p>
              <div className="lesson-card-footer">
                <span className="lesson-card-duration">
                  <Clock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {lesson.duration}
                </span>
                <span className={`lesson-card-status ${isCompleted ? 'completed' : 'new'}`}>
                  {isCompleted ? 'Completed' : 'Start'}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
