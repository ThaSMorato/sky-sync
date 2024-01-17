import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './Home.tsx'
import { globalStyles } from './styles/global.ts'

globalStyles()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
