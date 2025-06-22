// src/AppRoutes.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Account from './pages/Account/Account.jsx';
import Terms from './pages/Terms/Terms.jsx';
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory.jsx';
import CarInformation from './pages/CarInformation/CarInformation.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import RecoveryPassword from "./pages/RecoveyPassword/RecoveryPassword.jsx";
import Recoverypass2 from "./pages/RecoveyPassword2/Recoveypass2.jsx";
import Recoverypass3 from "./pages/RecoveryPassword3/Recoverypass3.jsx";
import Sales from "./pages/Sales/Sales.jsx";
import SalesRegister from "./pages/SalesRegister/SalesRegister.jsx";
import Customers from "./pages/Customers/Customers.jsx";
import CustomersRegister from "./pages/CustomersRegister/CustomersRegister.jsx";
import CustomersEdit from "./pages/CustomersEdit/CustomersEdit.jsx";
import Employees from "./pages/Employees/Employees.jsx";
import EmployeesRegister from "./pages/EmployeesResgister/EmployeesRegister.jsx";

import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer.jsx';
import SplashScreen from "./components/SplashScreen/LogoAnimation.jsx";

function SplashScreenWrapper() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => setLoading(false), 1100);
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

export default function AppRoutes() {
  const location = useLocation();

  // Oculta Nav/Footer en rutas de Sales y Customers (incluyendo edición)
  const hideLayoutPrefixes = [
    '/sales',
    '/salesRegister',
    '/customers',
    '/customersRegister',
    '/customersEdit',
    '/login'
  ];
  const shouldHideLayout = hideLayoutPrefixes.some(prefix =>
    location.pathname.startsWith(prefix)
  );

  return (
    <>
      <SplashScreenWrapper />
      {!shouldHideLayout && <Nav />}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/purchaseHistory" element={<PurchaseHistory />} />
        <Route path="/carInformation" element={<CarInformation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<RecoveryPassword />} />
        <Route path="/recoverypass2" element={<Recoverypass2 />} />
        <Route path="/recoverypass3" element={<Recoverypass3 />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/salesRegister" element={<SalesRegister />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customersRegister" element={<CustomersRegister />} />
        <Route path='/customersEdit/:id' element={<CustomersEdit />} />
        <Route path="/employeesRegister" element={<EmployeesRegister />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}