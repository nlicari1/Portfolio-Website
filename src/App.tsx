import './styles/index.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/homepage'
import Navigation from './components/navigation'
import LandingPage from './pages/landingpage'

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </Router>
  )
}

export default App
