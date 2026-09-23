import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Principal from './Principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
 <Principal />
  </StrictMode>,
)
