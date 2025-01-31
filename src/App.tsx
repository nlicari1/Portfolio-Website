import './styles/index.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Homepage from './pages/homepage'
import Navigation from './components/navigation'

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </Router>
  )
}

export default App
