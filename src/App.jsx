import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import MatrixBackground from './components/MatrixBackground'
import Welcome from './components/Welcome'
import LessonView from './components/LessonView'
import CodeEditor from './components/CodeEditor'
import QuizView from './components/QuizView'
import Dashboard from './components/Dashboard'
import { useProgress } from './hooks/useProgress'

export default function App() {
  const [activeView, setActiveView] = useState('home')
  const [editorCode, setEditorCode] = useState('')
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const progress = useProgress()

  const handleTryInEditor = (code) => {
    setEditorCode(code)
    setActiveView('editor')
    setSidebarOpen(false)
  }

  const handleSetActiveView = (view) => {
    setActiveView(view)
    setSidebarOpen(false)
  }

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Welcome setActiveView={handleSetActiveView} progress={progress} />
      case 'lessons':
        return (
          <LessonView
            onTryInEditor={handleTryInEditor}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
            progress={progress}
          />
        )
      case 'editor':
        return <CodeEditor initialCode={editorCode} />
      case 'quizzes':
        return <QuizView progress={progress} />
      case 'dashboard':
        return <Dashboard progress={progress} />
      default:
        return <Welcome setActiveView={handleSetActiveView} progress={progress} />
    }
  }

  return (
    <div className="app">
      <MatrixBackground />

      {/* Mobile sidebar toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        activeView={activeView}
        setActiveView={handleSetActiveView}
        progress={progress}
        isOpen={sidebarOpen}
      />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  )
}
