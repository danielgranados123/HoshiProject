import './App.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact.jsx'
import Catalog from './pages/Catalog/Catalog.jsx'
import Account from './pages/Account/Account.jsx'
import Terms from './pages/Terms/Terms.jsx'

import {BrowserRouter as Router, Routes, Route} 
from 'react-router'

import Nav from './components/Navigation/Nav'
import Footer from './components/Footer/Footer.jsx'

import { useState, useEffect } from 'react'
import SplashScreen from "./components/SplashScreen/LogoAnimation.jsx";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1100) // Duración del splash screen en milisegundos
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

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
            <Route path='/terms' element={<Terms />} />
          </Routes>
        <Footer/>
      </Router>
      <br />
      
    </>
  )
}

export default App
