// src/AppRoutes.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

// Páginas
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
import EmployeesEdit from './pages/EmployeesEdit/EmployeesEdit.jsx';
import CatalogPrivate from "./pages/Catalog-Private/Catalog.jsx"
import CatalogRegister from "./pages/CatalogRegister/CatalogRegister.jsx"

// Layout
import Nav from './components/Navigation/Nav';
import PrivateNav from './components/PrivateNav/PrivateNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import SplashScreen from "./components/SplashScreen/LogoAnimation.jsx";

// Protección
import { PrivateRoute } from "./components/NavegationPrivate/PrivateRoute.jsx";

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

  const noNavRoutes = ['/login', '/register'];

  const hideLayoutPrefixes = [
    '/home-private',
    '/sales-private',
    '/employees-private',
    '/employeesRegister',
    '/employeesEdit',
    '/salesRegister',
    '/customers-private',
    '/customersRegister',
    '/customersEdit',
    '/catalog-private',
    '/catalogRegister'
  ];

  const isNoNavRoute = noNavRoutes.includes(location.pathname);
  const shouldHideLayout = hideLayoutPrefixes.some(prefix =>
    location.pathname.startsWith(prefix)
  );

  return (
    <>
      <SplashScreenWrapper />
      {!shouldHideLayout && !isNoNavRoute && <Nav />}
      {shouldHideLayout && <PrivateNav />}

      <Routes>
        {/* Públicas */}
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

        {/* Privadas con protección */}

          <Route path="/sales-private" element={<Sales />} />
          <Route path="/salesRegister" element={<SalesRegister />} />
          <Route path="/catalog-private" element={<CatalogPrivate />} />
          <Route path="/catalogRegister" element={<CatalogRegister />} />
          <Route path="/customers-private" element={<Customers />} />
          <Route path="/customersRegister" element={<CustomersRegister />} />
          <Route path="/customersEdit/:id" element={<CustomersEdit />} />
          <Route path="/employees-private" element={<Employees />} />
          <Route path="/employeesRegister" element={<EmployeesRegister />} />
          <Route path="/employeesEdit/:id" element={<EmployeesEdit />} />

      </Routes>

      {!shouldHideLayout && !isNoNavRoute && <Footer />}
      <Toaster toastOptions={{ duration: 2000 }} />
    </>
  );
}
