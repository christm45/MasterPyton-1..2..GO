import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'pymaster-progress'

const defaultProgress = {
  completedLessons: [],
  quizScores: {},
  lastActive: null,
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress
    } catch {
      return defaultProgress
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const completeLesson = useCallback((lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      lastActive: new Date().toISOString(),
    }))
  }, [])

  const saveQuizScore = useCallback((quizId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: { score, total, date: new Date().toISOString() }
      },
      lastActive: new Date().toISOString(),
    }))
  }, [])

  const isLessonCompleted = useCallback((lessonId) => {
    return progress.completedLessons.includes(lessonId)
  }, [progress.completedLessons])

  const getCompletionRate = useCallback((difficulty) => {
    const totals = { beginner: 20, intermediate: 10, advanced: 10, data: 10, library: 10, all: 60 }
    const total = totals[difficulty] || 50
    const prefix = { beginner: 'b', intermediate: 'i', advanced: 'a', data: 'd', library: 'lib' }[difficulty]
    const completed = difficulty === 'all'
      ? progress.completedLessons.length
      : progress.completedLessons.filter(id => id.startsWith(prefix)).length
    return { completed, total, percentage: Math.round((completed / total) * 100) }
  }, [progress.completedLessons])

  const getQuizScore = useCallback((quizId) => {
    return progress.quizScores[quizId] || null
  }, [progress.quizScores])

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress)
  }, [])

  return {
    progress,
    completeLesson,
    saveQuizScore,
    isLessonCompleted,
    getCompletionRate,
    getQuizScore,
    resetProgress,
  }
}
