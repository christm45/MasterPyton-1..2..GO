import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Trophy, RotateCcw } from 'lucide-react'
import quizzes from '../data/quizzes'

const LETTERS = ['A', 'B', 'C', 'D']

function QuizActive({ quiz, onFinish, progress }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = quiz.questions[current]
  const total = quiz.questions.length
  const progressPct = ((current + (answered ? 1 : 0)) / total) * 100

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correct) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 >= total) {
      const finalScore = score
      progress.saveQuizScore(quiz.id, finalScore, total)
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    const grade = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'needs-work'
    const msg = pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!'

    return (
      <div className="quiz-results">
        <Trophy size={48} style={{ color: 'var(--accent-orange)', marginBottom: '16px' }} />
        <h2>Quiz Complete!</h2>
        <div className={`quiz-results-score ${grade}`}>{pct}%</div>
        <p>{msg} You got {score} out of {total} correct.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn btn-ghost" onClick={onFinish}>
            <ArrowLeft size={14} /> Back to Quizzes
          </button>
          <button className="btn btn-primary" onClick={() => {
            setCurrent(0); setSelected(null); setAnswered(false); setScore(0); setFinished(false)
          }}>
            <RotateCcw size={14} /> Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-active fade-in">
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="quiz-question-number">
        Question {current + 1} of {total}
      </div>

      <div className="quiz-question-text">{q.question}</div>

      <div className="quiz-options">
        {q.options.map((opt, idx) => {
          let cls = 'quiz-option'
          if (answered) {
            if (idx === q.correct) cls += ' correct'
            else if (idx === selected) cls += ' wrong'
          } else if (idx === selected) {
            cls += ' selected'
          }

          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
              <span className="quiz-option-letter">{LETTERS[idx]}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="quiz-explanation">
          {selected === q.correct ? '✓ Correct! ' : '✗ Incorrect. '}
          {q.explanation}
        </div>
      )}

      <div className="quiz-nav">
        {answered && (
          <button className="btn btn-primary" onClick={handleNext}>
            {current + 1 >= total ? 'See Results' : 'Next'} <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

export default function QuizView({ progress }) {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const [difficulty, setDifficulty] = useState('beginner')

  const filtered = quizzes.filter(q => q.difficulty === difficulty)
  const quiz = activeQuiz ? quizzes.find(q => q.id === activeQuiz) : null

  if (quiz) {
    return (
      <div className="quiz-view fade-in">
        <button className="lesson-detail-back" onClick={() => setActiveQuiz(null)}>
          <ArrowLeft size={16} /> Back to quizzes
        </button>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>{quiz.title}</h2>
        <QuizActive quiz={quiz} onFinish={() => setActiveQuiz(null)} progress={progress} />
      </div>
    )
  }

  return (
    <div className="quiz-view fade-in">
      <div className="view-header">
        <h2>Quizzes</h2>
        <p>Test your knowledge with quizzes for each lesson</p>
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

      <div className="quiz-list">
        {filtered.map(q => {
          const scoreData = progress.getQuizScore(q.id)
          return (
            <div key={q.id} className="quiz-card" onClick={() => setActiveQuiz(q.id)}>
              <div className="quiz-card-info">
                <h3>{q.title}</h3>
                <p>{q.questions.length} questions</p>
              </div>
              <div className="quiz-card-score">
                {scoreData ? (
                  <>
                    <div className="score">{Math.round((scoreData.score / scoreData.total) * 100)}%</div>
                    <div className="label">Best score</div>
                  </>
                ) : (
                  <div className="label" style={{ color: 'var(--accent-cyan)' }}>Not taken</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
