import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Catalog from './pages/Catalog.jsx'
import Account from './pages/Account.jsx'

import {BrowserRouter as Router, Routes, Route} 
from 'react-router'

import Nav from './components/Navigation/Nav'

function App() {
  return (
    <>
      <Router>
       <Nav/>
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
