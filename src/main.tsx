import './shared/i18n';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/pages/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
