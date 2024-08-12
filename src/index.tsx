import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { App } from 'components/App'
import { Login } from 'components/Login'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

// <App />

root.render(<BrowserRouter><App /></BrowserRouter>)
