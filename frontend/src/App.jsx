import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'
import Account from './pages/Account'

import {BrowserRouter as Router, Routes, Route} 
from 'react-router'
import Nav from './components/Navigation/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
|       <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path='/account' element={<Account />} />
            </Routes>
      </Router>

      <br />
    </>
  )
}

export default App
