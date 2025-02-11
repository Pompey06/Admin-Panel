import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js';
import './null.css'
import App from './App.jsx'
import ContextProvider from './components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>
    <App />
   </ContextProvider>
  </StrictMode>
)
