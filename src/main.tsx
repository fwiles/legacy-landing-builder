
import { createRoot } from 'react-dom/client'
import { startTransition } from 'react'
import App from './App.tsx'
import './index.css'

// Use startTransition to defer non-critical updates
const container = document.getElementById("root")!
const root = createRoot(container)

startTransition(() => {
  root.render(<App />)
})
