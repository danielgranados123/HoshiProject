import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Account from './pages/Account/Account.jsx';
import Terms from './pages/Terms/Terms.jsx';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer.jsx';

import { useState, useEffect } from 'react';
import SplashScreen from "./components/SplashScreen/LogoAnimation.jsx";

function SplashScreenWrapper() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  useEffect(() => {
    // Solo muestra la SplashScreen cuando estamos en la página de inicio
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false); // Ocultar la SplashScreen después de 1.1 segundos
      }, 1100); // Duración en milisegundos

      // Limpiar el timer cuando el componente se desmonte
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Si no estamos en la página de inicio, no mostrarla
    }
  }, [location.pathname]); // Dependemos de la ruta actual para mostrarla solo en "/"

  // Solo mostrar la SplashScreen cuando estamos en la página de inicio
  if (loading && location.pathname === '/') {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return null;
}

function App() {
  return (
    <Router>
      <SplashScreenWrapper />  {/* Aquí se maneja la splash screen */}
      <div className="page-content">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/account' element={<Account />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;