import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './themes.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>
    </CssBaseline>
  </ThemeProvider>,
)
