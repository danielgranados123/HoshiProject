import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navegation from "./components/NavegationPrivate/PrivateNavegation.jsx";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      {/* El Router debe envolver toda la lógica de navegación */}
      <Router>
        <Navegation />
      </Router>
      {/* El Toaster debe estar fuera del Router para asegurar que las notificaciones no se vean afectadas por el Router */}
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
      />
    </AuthProvider>
  );
}

export default App;
