import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { loadGA } from '@/lib/ga'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Initialize GA after mount
loadGA()
