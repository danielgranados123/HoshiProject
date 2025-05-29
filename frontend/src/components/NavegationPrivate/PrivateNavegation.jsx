import React, { useEffect } from "react";
import NavBar from "./NavPrivate.jsx";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "../../pages/login/login.jsx";
import Employees from "../../pages/Employees/Employees.jsx";
import Customers from "../../pages/Customers/Customers.jsx";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../hooks/useAuth";
import Home from "../../pages/Home/Home.jsx";

// Imports de paginas publicas
import About from '../../pages/About/About.jsx';
import Contact from '../../pages/Contact.jsx';
import Catalog from '../../pages/Catalog/Catalog.jsx';
import Account from '../../pages/Account/Account.jsx';
import Terms from '../../pages/Terms/Terms.jsx';
import PurchaseHistory from '../../pages/PurchaseHistory/PurchaseHistory.jsx';
import CarInformation from '../../pages/CarInformation/CarInformation.jsx';
import Register from '../../pages/Register/Register.jsx';
import RecoveryPassword from "../../pages/RecoveyPassword/RecoveryPassword.jsx";
import Recoverypass2 from "../../pages/RecoveyPassword2/Recoveypass2.jsx";
import Recoverypass3 from "../../pages/RecoveryPassword3/Recoverypass3.jsx";
import Sales from "../../pages/Sales/Sales.jsx";
import SalesRegister from "../../pages/SalesRegister/SalesRegister.jsx";
import CustomersRegister from "../../pages/CustomersRegister/CustomersRegister.jsx";
import CustomersEdit from "../../pages/CustomersEdit/CustomersEdit.jsx";
import EmployeesRegister from "../../pages/EmployeesResgister/EmployeesRegister.jsx";
import Nav from '../../components/Navigation/Nav';
import Footer from '../../components/Footer/Footer.jsx';

function PrivateNavegation() {
  // Manejo de autenticación con cookie
  const { authCokie } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authCokie) {
      navigate("/login");
    }
  }, [authCokie, navigate]);

  return (
    <>
      {/* Componentes de navegación y pie de página */}
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Nav />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Nav />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog"
          element={
            <>
              <Nav />
              <Catalog />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <Nav />
              <Account />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Nav />
              <Terms />
              <Footer />
            </>
          }
        />
        <Route
          path="/purchaseHistory"
          element={
            <>
              <Nav />
              <PurchaseHistory />
              <Footer />
            </>
          }
        />
        <Route
          path="/carInformation"
          element={
            <>
              <Nav />
              <CarInformation />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<RecoveryPassword />} />
        <Route path="/Recoverypass2" element={<Recoverypass2 />} />
        <Route path="/Recoverypass3" element={<Recoverypass3 />} />

        {/* Rutas privadas (requieren autenticación) */}
        <Route element={<PrivateRoute />}>
          <Route element={<NavBar />}>
            <Route path="/employees" element={<Employees />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/salesRegister" element={<SalesRegister />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customersRegister" element={<CustomersRegister />} />
            <Route path='/customersEdit/:id' element={<CustomersEdit />} />
            <Route path="/employeesRegister" element={<EmployeesRegister />} />
          </Route>
        </Route>
      </Routes>

      {/* Footer solo en rutas públicas */}
      
    </>
  );
}

export default PrivateNavegation;
