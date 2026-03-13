import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: '#ff4444', fontFamily: 'monospace', background: '#111', minHeight: '100vh' }}>
          <h1>Something went wrong</h1>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 20, color: '#ff8888' }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => { localStorage.clear(); window.location.reload() }}
            style={{ marginTop: 20, padding: '10px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
          >
            Clear Data &amp; Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
