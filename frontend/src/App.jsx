import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Account from './pages/Account/Account.jsx';
import Terms from './pages/Terms/Terms.jsx';
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory.jsx';
import CarInformation from './pages/CarInformation/CarInformation.jsx';
import Login from './pages/login/login.jsx';
import Register from './pages/Register/Register.jsx';
import RecoveryPassword from "./pages/RecoveyPassword/RecoveryPassword.jsx";
import Recoverypass2 from "./pages/RecoveyPassword2/Recoveypass2.jsx";
import Recoverypass3 from "./pages/RecoveryPassword3/Recoverypass3.jsx";

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer.jsx';

import { useState, useEffect } from 'react';
import SplashScreen from "./components/SplashScreen/LogoAnimation.jsx";

function SplashScreenWrapper() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1100);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading && location.pathname === '/') {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return null;
}

function App() {
  return (
    <Router>
      <SplashScreenWrapper />
      <div className="page-content">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path='/account' element={<Account />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/purchaseHistory' element={<PurchaseHistory />} />
          <Route path='/carInformation' element={<CarInformation />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/RecoveryPassword' element={<RecoveryPassword />} />
          <Route path='/Recoverypass2' element={<Recoverypass2 />} />
          <Route path='/Recoverypass3' element={<Recoverypass3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;