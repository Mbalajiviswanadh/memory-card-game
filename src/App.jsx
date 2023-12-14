import './App.css'
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';

import Memorygame from './componenets/Memorygame'
import Home from './componenets/Home'
function App() {

  return (
 
    <Router>
      <>
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="memorygame" element={<Memorygame />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
