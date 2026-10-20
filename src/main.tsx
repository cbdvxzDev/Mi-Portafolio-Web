// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Analytics } from './components/Analytics'
import './index.css' // o como se llame tu archivo de estilos globales

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <App />
        <Analytics />
      </MotionConfig>
    </ErrorBoundary>
  </React.StrictMode>,
)