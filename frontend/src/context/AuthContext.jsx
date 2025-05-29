import React, { createContext, useContext, useState } from "react";

// Crear contexto
const AuthContext = createContext();

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

// Componente Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Login = async (email, password) => {
    if (email === "test@example.com" && password === "123456") {
      setUser({ name: "Test User", email });
      localStorage.setItem("authToken", "fakeToken123");
      return { success: true };
    }
    return { success: false, message: "Credenciales incorrectas" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ user, Login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
