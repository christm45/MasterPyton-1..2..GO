import React from 'react'
import { BookOpen, Code2, Brain, BarChart3, Rocket, Zap, Globe, Cpu, GraduationCap, Library, Database, Layers, CheckCircle2, Terminal, Sparkles, Shield, ArrowRight } from 'lucide-react'
import lessons from '../data/lessons'
import quizzes from '../data/quizzes'

export default function Welcome({ setActiveView, progress }) {
  const all = progress.getCompletionRate('all')
  const totalQuizzes = Object.keys(progress.progress.quizScores).length

  // Auto-compute stats from actual data
  const beginnerLessons = lessons.filter(l => l.difficulty === 'beginner')
  const intermediateLessons = lessons.filter(l => l.difficulty === 'intermediate')
  const advancedLessons = lessons.filter(l => l.difficulty === 'advanced')
  const dataLessons = lessons.filter(l => l.difficulty === 'data')
  const libraryLessons = lessons.filter(l => l.difficulty === 'library')
  const exerciseCount = lessons.filter(l => l.exercise).length
  const totalQuestions = quizzes.reduce((sum, q) => sum + q.questions.length, 0)

  const tracks = [
    {
      icon: GraduationCap,
      title: 'Beginner',
      color: 'var(--accent-green)',
      count: beginnerLessons.length,
      desc: 'Variables, strings, lists, loops, functions, dictionaries, and guided step-by-step exercises with detailed comments'
    },
    {
      icon: Layers,
      title: 'Intermediate',
      color: 'var(--accent-cyan)',
      count: intermediateLessons.length,
      desc: 'OOP, file handling, error handling, modules, regular expressions, and more advanced patterns'
    },
    {
      icon: Rocket,
      title: 'Advanced',
      color: 'var(--accent-purple)',
      count: advancedLessons.length,
      desc: 'Decorators, generators, async/await, metaclasses, concurrency, and functional programming'
    },
    {
      icon: Database,
      title: 'Data Science',
      color: 'var(--accent-orange)',
      count: dataLessons.length,
      desc: 'Data handling, CSV processing, statistics, visualization concepts, and machine learning basics'
    },
    {
      icon: Library,
      title: 'Python Libraries',
      color: 'var(--accent-pink)',
      count: libraryLessons.length,
      desc: 'math, datetime, os, json, regex, collections, itertools, functools, logging, and argparse'
    }
  ]

  return (
    <div className="welcome-view">
      {/* Hero Section */}
      <div className="welcome-hero">
        <div className="welcome-badge">Open Source &bull; 100% Free &bull; No Account Needed</div>
        <h1>Master Python Programming</h1>
        <p>
          A complete, interactive Python learning platform. {lessons.length} lessons,
          {' '}{quizzes.length} quizzes, {exerciseCount} hands-on exercises, and a live code editor
          &mdash; all running directly in your browser. No installation required.
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

      {/* Live Stats Bar */}
      <div className="welcome-stats">
        <div className="welcome-stat">
          <div className="welcome-stat-value">{lessons.length}</div>
          <div className="welcome-stat-label">Lessons</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value" style={{ color: 'var(--accent-purple)' }}>{quizzes.length}</div>
          <div className="welcome-stat-label">Quizzes</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value" style={{ color: 'var(--accent-pink)' }}>{totalQuestions}</div>
          <div className="welcome-stat-label">Questions</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value" style={{ color: 'var(--accent-green)' }}>{exerciseCount}</div>
          <div className="welcome-stat-label">Exercises</div>
        </div>
      </div>

      {/* Your Progress Section */}
      {(all.completed > 0 || totalQuizzes > 0) && (
        <div className="welcome-progress-section">
          <h2><Sparkles size={20} /> Your Progress</h2>
          <div className="welcome-progress-grid">
            <div className="welcome-progress-card">
              <span className="welcome-progress-num">{all.completed}<span className="welcome-progress-of">/{all.total}</span></span>
              <span className="welcome-progress-label">Lessons Completed</span>
              <div className="welcome-progress-bar">
                <div className="welcome-progress-fill" style={{ width: `${all.percentage}%`, background: 'var(--accent-cyan)' }} />
              </div>
            </div>
            <div className="welcome-progress-card">
              <span className="welcome-progress-num" style={{ color: 'var(--accent-purple)' }}>{totalQuizzes}<span className="welcome-progress-of">/{quizzes.length}</span></span>
              <span className="welcome-progress-label">Quizzes Taken</span>
              <div className="welcome-progress-bar">
                <div className="welcome-progress-fill" style={{ width: `${quizzes.length ? Math.round((totalQuizzes / quizzes.length) * 100) : 0}%`, background: 'var(--accent-purple)' }} />
              </div>
            </div>
            <div className="welcome-progress-card">
              <span className="welcome-progress-num" style={{ color: 'var(--accent-green)' }}>{all.percentage}%</span>
              <span className="welcome-progress-label">Overall Completion</span>
              <div className="welcome-progress-bar">
                <div className="welcome-progress-fill" style={{ width: `${all.percentage}%`, background: 'var(--accent-green)' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Cards */}
      <div className="welcome-section-title">
        <h2><Zap size={20} /> Core Features</h2>
      </div>
      <div className="welcome-features">
        <div className="welcome-feature-card" onClick={() => setActiveView('lessons')}>
          <BookOpen size={28} style={{ color: 'var(--accent-cyan)' }} />
          <h3>{lessons.length} Interactive Lessons</h3>
          <p>From your very first variable to advanced async programming, each with code examples and hands-on exercises</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('editor')}>
          <Terminal size={28} style={{ color: 'var(--accent-purple)' }} />
          <h3>Live Python Editor</h3>
          <p>Write and run real Python code instantly with Smart Check that catches errors, suggests fixes, and auto-corrects</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('quizzes')}>
          <Brain size={28} style={{ color: 'var(--accent-pink)' }} />
          <h3>{quizzes.length} Quizzes &bull; {totalQuestions} Questions</h3>
          <p>Test your knowledge after every lesson with detailed explanations for each answer</p>
        </div>
        <div className="welcome-feature-card" onClick={() => setActiveView('dashboard')}>
          <BarChart3 size={28} style={{ color: 'var(--accent-green)' }} />
          <h3>Progress Dashboard</h3>
          <p>Track completed lessons, quiz scores, and overall progress across all difficulty levels</p>
        </div>
      </div>

      {/* Learning Tracks */}
      <div className="welcome-section-title">
        <h2><GraduationCap size={20} /> Learning Tracks</h2>
        <p>5 structured paths covering the full Python ecosystem</p>
      </div>
      <div className="welcome-tracks">
        {tracks.map((track, idx) => (
          <div key={idx} className="welcome-track-card" onClick={() => setActiveView('lessons')}>
            <div className="welcome-track-icon" style={{ color: track.color, borderColor: track.color }}>
              <track.icon size={22} />
            </div>
            <div className="welcome-track-info">
              <div className="welcome-track-header">
                <h3>{track.title}</h3>
                <span className="welcome-track-count" style={{ color: track.color }}>{track.count} lessons</span>
              </div>
              <p>{track.desc}</p>
            </div>
            <ArrowRight size={16} className="welcome-track-arrow" />
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="welcome-section-title">
        <h2><Cpu size={20} /> How It Works</h2>
      </div>
      <div className="welcome-how-grid">
        <div className="welcome-how-step">
          <div className="welcome-how-num">1</div>
          <h3>Read the Lesson</h3>
          <p>Each lesson explains a concept with clear examples and heavily commented code. Beginner lessons include line-by-line explanations.</p>
        </div>
        <div className="welcome-how-step">
          <div className="welcome-how-num">2</div>
          <h3>Practice in the Editor</h3>
          <p>Try code directly in the built-in editor. Every lesson has a "Try in Editor" button. Python runs in your browser via WebAssembly.</p>
        </div>
        <div className="welcome-how-step">
          <div className="welcome-how-num">3</div>
          <h3>Complete the Exercise</h3>
          <p>Each lesson has a guided exercise with starter code, progressive hints, and automatic test verification.</p>
        </div>
        <div className="welcome-how-step">
          <div className="welcome-how-num">4</div>
          <h3>Take the Quiz</h3>
          <p>Test what you learned with an 8-question quiz. Every answer includes a detailed explanation to deepen your understanding.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="welcome-section-title">
        <h2><Shield size={20} /> About PyMaster</h2>
      </div>
      <div className="welcome-about">
        <div className="welcome-about-grid">
          <div className="welcome-about-item">
            <Globe size={18} style={{ color: 'var(--accent-cyan)' }} />
            <div>
              <h4>Runs Entirely in Your Browser</h4>
              <p>No server, no installation, no sign-up. Python executes locally via Pyodide (CPython compiled to WebAssembly). Your data stays on your device.</p>
            </div>
          </div>
          <div className="welcome-about-item">
            <Cpu size={18} style={{ color: 'var(--accent-purple)' }} />
            <div>
              <h4>Built with Modern Tech</h4>
              <p>React 18 front-end, Monaco Editor (same as VS Code), Pyodide 0.24 for Python execution, and a custom static analysis engine for Smart Check.</p>
            </div>
          </div>
          <div className="welcome-about-item">
            <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} />
            <div>
              <h4>Beginner-Focused Design</h4>
              <p>Step-by-step exercises with line-by-line comments, progressive hints, one-click solutions, and test verification so you always know if your code is correct.</p>
            </div>
          </div>
          <div className="welcome-about-item">
            <Sparkles size={18} style={{ color: 'var(--accent-pink)' }} />
            <div>
              <h4>Smart Check Auto-Analysis</h4>
              <p>Real-time code analysis catches 30+ error patterns including missing colons, indentation issues, undefined variables, and common mistakes &mdash; with one-click fixes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start CTA */}
      <div className="welcome-cta">
        <h2>Ready to start?</h2>
        <p>Jump into your first lesson and write real Python code in minutes.</p>
        <button className="btn btn-primary btn-lg" onClick={() => setActiveView('lessons')}>
          <Rocket size={18} /> Browse All {lessons.length} Lessons
        </button>
      </div>
    </div>
  )
}
