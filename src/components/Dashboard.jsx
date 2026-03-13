import React from 'react'
import { BookOpen, Brain, Trophy, TrendingUp } from 'lucide-react'
import lessons from '../data/lessons'

export default function Dashboard({ progress }) {
  const beginner = progress.getCompletionRate('beginner')
  const intermediate = progress.getCompletionRate('intermediate')
  const advanced = progress.getCompletionRate('advanced')
  const data = progress.getCompletionRate('data')
  const library = progress.getCompletionRate('library')
  const all = progress.getCompletionRate('all')

  const totalQuizzes = Object.keys(progress.progress.quizScores).length
  const avgQuizScore = totalQuizzes > 0
    ? Math.round(
        Object.values(progress.progress.quizScores)
          .reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / totalQuizzes
      )
    : 0

  const recentLessons = progress.progress.completedLessons
    .slice(-5)
    .reverse()
    .map(id => lessons.find(l => l.id === id))
    .filter(Boolean)

  const recentQuizzes = Object.entries(progress.progress.quizScores)
    .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
    .slice(0, 5)

  return (
    <div className="dashboard fade-in">
      <div className="view-header">
        <h2>Dashboard</h2>
        <p>Track your Python learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-grid">
        <div className="stat-card">
          <BookOpen size={24} style={{ color: 'var(--accent-cyan)', marginBottom: '12px' }} />
          <div className="stat-card-value cyan">{all.completed}</div>
          <div className="stat-card-label">Lessons Done</div>
        </div>
        <div className="stat-card">
          <Brain size={24} style={{ color: 'var(--accent-purple)', marginBottom: '12px' }} />
          <div className="stat-card-value purple">{totalQuizzes}</div>
          <div className="stat-card-label">Quizzes Taken</div>
        </div>
        <div className="stat-card">
          <Trophy size={24} style={{ color: 'var(--accent-orange)', marginBottom: '12px' }} />
          <div className="stat-card-value orange">{avgQuizScore}%</div>
          <div className="stat-card-label">Avg Quiz Score</div>
        </div>
        <div className="stat-card">
          <TrendingUp size={24} style={{ color: 'var(--accent-green)', marginBottom: '12px' }} />
          <div className="stat-card-value green">{all.percentage}%</div>
          <div className="stat-card-label">Overall Progress</div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="progress-section glass-card">
        <h3>Progress by Difficulty</h3>
        <div style={{ marginTop: '16px' }}>
          <div className="progress-item">
            <span className="progress-label" style={{ color: 'var(--accent-green)' }}>Beginner</span>
            <div className="progress-bar">
              <div className="progress-fill green" style={{ width: `${beginner.percentage}%` }} />
            </div>
            <span className="progress-percent">{beginner.completed}/{beginner.total}</span>
          </div>
          <div className="progress-item">
            <span className="progress-label" style={{ color: 'var(--accent-orange)' }}>Intermediate</span>
            <div className="progress-bar">
              <div className="progress-fill orange" style={{ width: `${intermediate.percentage}%` }} />
            </div>
            <span className="progress-percent">{intermediate.completed}/{intermediate.total}</span>
          </div>
          <div className="progress-item">
            <span className="progress-label" style={{ color: 'var(--accent-red)' }}>Advanced</span>
            <div className="progress-bar">
              <div className="progress-fill red" style={{ width: `${advanced.percentage}%` }} />
            </div>
            <span className="progress-percent">{advanced.completed}/{advanced.total}</span>
          </div>
          <div className="progress-item">
            <span className="progress-label" style={{ color: 'var(--accent-purple)' }}>Data Science</span>
            <div className="progress-bar">
              <div className="progress-fill purple" style={{ width: `${data.percentage}%` }} />
            </div>
            <span className="progress-percent">{data.completed}/{data.total}</span>
          </div>
          <div className="progress-item">
            <span className="progress-label" style={{ color: 'var(--accent-blue)' }}>Libraries</span>
            <div className="progress-bar">
              <div className="progress-fill blue" style={{ width: `${library.percentage}%` }} />
            </div>
            <span className="progress-percent">{library.completed}/{library.total}</span>
          </div>
          <div className="progress-item" style={{ marginTop: '8px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
            <span className="progress-label" style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Overall</span>
            <div className="progress-bar">
              <div className="progress-fill cyan" style={{ width: `${all.percentage}%` }} />
            </div>
            <span className="progress-percent" style={{ color: 'var(--accent-cyan)' }}>{all.percentage}%</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="glass-card">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Recent Lessons
          </h3>
          {recentLessons.length > 0 ? (
            <div className="activity-list">
              {recentLessons.map(lesson => (
                <div key={lesson.id} className="activity-item">
                  <div className="activity-dot lesson" />
                  <span className="activity-text">{lesson.title}</span>
                  <span className={`lesson-meta-badge ${lesson.difficulty}`} style={{ fontSize: '10px', padding: '2px 8px' }}>
                    {lesson.difficulty}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No lessons completed yet. Start learning!</p>
            </div>
          )}
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Recent Quizzes
          </h3>
          {recentQuizzes.length > 0 ? (
            <div className="activity-list">
              {recentQuizzes.map(([id, data]) => (
                <div key={id} className="activity-item">
                  <div className="activity-dot quiz" />
                  <span className="activity-text">{id}</span>
                  <span style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: (data.score / data.total) >= 0.8 ? 'var(--accent-green)' : 'var(--accent-orange)'
                  }}>
                    {Math.round((data.score / data.total) * 100)}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No quizzes taken yet. Test your knowledge!</p>
            </div>
          )}
        </div>
      </div>

      {/* Reset */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <button className="btn btn-danger" onClick={() => {
          if (confirm('Reset all progress? This cannot be undone.')) {
            progress.resetProgress()
          }
        }}>
          Reset All Progress
        </button>
      </div>
    </div>
  )
}
