import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import SocialProfile from './code/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialProfile />
  </StrictMode>,
)
