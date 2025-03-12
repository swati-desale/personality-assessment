import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'

import { AssessmentProvider } from './context/AssessmentContext'
import AssesmentPage from './pages/AssessmentPage'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import theme from './theme'

import './assets/css/global.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AssessmentProvider>
        <Router>
          <Container maxWidth="sm">
            <Routes>
              <Route path="/" element={ <HomePage /> }/>
              <Route path="/assesment" element={ <AssesmentPage /> }/>
              <Route path="/result" element={ <ResultsPage /> }/>
            </Routes>
          </Container>
        </Router>
      </AssessmentProvider>
    </ThemeProvider>
  )
}

export default App
