import React from 'react'
import { Home, BookOpen, Code2, Brain, BarChart3 } from 'lucide-react'
import lessons from '../data/lessons'
import quizzes from '../data/quizzes'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'lessons', label: 'Lessons', icon: BookOpen },
  { id: 'editor', label: 'Code Editor', icon: Code2 },
  { id: 'quizzes', label: 'Quizzes', icon: Brain },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
]

export default function Sidebar({ activeView, setActiveView, progress, isOpen }) {
  const completionAll = progress.getCompletionRate('all')

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-brand">
        <h1>PyMaster</h1>
        <p>Learn Python</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
            onClick={() => setActiveView(item.id)}
          >
            <item.icon className="nav-icon" size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-stats">
        <div className="stat-mini">
          <span className="stat-mini-label">Lessons</span>
          <span className="stat-mini-value">{completionAll.completed}/{lessons.length}</span>
        </div>
        <div className="stat-mini">
          <span className="stat-mini-label">Progress</span>
          <span className="stat-mini-value">{completionAll.percentage}%</span>
        </div>
        <div className="stat-mini">
          <span className="stat-mini-label">Quizzes</span>
          <span className="stat-mini-value">{Object.keys(progress.progress.quizScores).length}/{quizzes.length}</span>
        </div>
      </div>
    </aside>
  )
}
