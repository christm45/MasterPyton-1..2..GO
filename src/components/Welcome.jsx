import React from 'react'
import { BookOpen, Code2, Brain, BarChart3, Rocket, Zap } from 'lucide-react'

export default function Welcome({ setActiveView, progress }) {
  const all = progress.getCompletionRate('all')
  const totalQuizzes = Object.keys(progress.progress.quizScores).length

  return (
    <div className="welcome-view">
      <div className="welcome-hero">
        <h1>Master Python Programming</h1>
        <p>
          Interactive lessons, a built-in code editor, and quizzes to test your knowledge.
          From beginner to advanced, all in your browser.
        </p>
        <div className="welcome-actions">
          <button className="btn btn-primary" onClick={() => setActiveView('lessons')}>
            <BookOpen size={16} /> Start Learning
          </button>
          <button className="btn btn-ghost" onClick={() => setActiveView('editor')}>
            <Code2 size={16} /> Open Editor
          </button>
        </div>
      </div>

      <div className="welcome-features">
        <div className="welcome-feature-card" onClick={() => setActiveView('lessons')}>
          <BookOpen size={28} style={{ color: 'var(--accent-cyan)' }} />
          <h3>50 Lessons</h3>
          <p>Beginner to advanced + data science + Python libraries with examples and exercises</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('editor')}>
          <Code2 size={28} style={{ color: 'var(--accent-purple)' }} />
          <h3>Live Code Editor</h3>
          <p>Write and run Python with Smart Check auto-corrections as you type</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('quizzes')}>
          <Brain size={28} style={{ color: 'var(--accent-pink)' }} />
          <h3>50 Quizzes</h3>
          <p>Test your understanding with 8 questions per quiz for every lesson</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('dashboard')}>
          <BarChart3 size={28} style={{ color: 'var(--accent-green)' }} />
          <h3>Track Progress</h3>
          <p>Monitor your learning journey with detailed stats</p>
        </div>
      </div>

      <div className="welcome-stats">
        <div className="welcome-stat">
          <div className="welcome-stat-value">{all.completed}</div>
          <div className="welcome-stat-label">Lessons Done</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value" style={{ color: 'var(--accent-purple)' }}>{totalQuizzes}</div>
          <div className="welcome-stat-label">Quizzes Taken</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value" style={{ color: 'var(--accent-green)' }}>{all.percentage}%</div>
          <div className="welcome-stat-label">Progress</div>
        </div>
      </div>
    </div>
  )
}
