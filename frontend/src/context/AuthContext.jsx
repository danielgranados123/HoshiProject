import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// Crear contexto
const AuthContext = createContext(null);

// Exportar contexto para uso en el hook useAuth
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authCokie, setAuthCokie] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:4000/api";

  const navigate = useNavigate();

  // Función para limpiar sesión
  const clearSession = () => {
    localStorage.removeItem("token");
    Cookies.remove("authToken", { path: "/" });
    setUser(null);
    setAuthCokie(null);
  };

  // Logout con useCallback
  const logout = useCallback(() => {
    const logoutUser = async () => {
      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        console.error("Error durante el logout:", error);
      } finally {
        clearSession();
        navigate("/");
        toast.success("Sesión cerrada correctamente");
      }
    };
    logoutUser();
  }, [API_URL, navigate]);

  // Función de login
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setAuthCokie(data.token);

        const decodedPayload = JSON.parse(atob(data.token.split(".")[1]));
        setUser({
          id: decodedPayload.id,
          userType: decodedPayload.userType,
        });

        toast.success("Inicio de sesión exitoso");

        // Redireccionar según el tipo de usuario
        switch (decodedPayload.userType) {
          case "admin":
            navigate("/employees-private");
            break;
          case "employee":
            navigate("/employees-private");
            break;
          case "customer":
            navigate("/");
            break;
          default:
            navigate("/");
        }

        return true;
      } else {
        toast.error(data.message || "Error al iniciar sesión");
        return false;
      }
    } catch (error) {
      console.error("Error en login:", error);
      toast.error("Error de conexión con el servidor");
      return false;
    }
  };

  // Validar sesión en montaje
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const cookieToken = Cookies.get("authToken");

        if (token || cookieToken) {
          const response = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token || cookieToken}`,
            },
            credentials: "include",
          });

          if (response.ok) {
            try {
              const tokenParts = (token || cookieToken).split(".");
              if (tokenParts.length === 3) {
                const payload = JSON.parse(atob(tokenParts[1]));
                setUser({
                  id: payload.id,
                  userType: payload.userType,
                });
                setAuthCokie(token || cookieToken);
              }
            } catch (e) {
              console.error("Error al decodificar token:", e);
              clearSession();
            }
          } else {
            clearSession();
          }
        } else {
          clearSession();
        }
      } catch (error) {
        console.error("Error al validar sesión:", error);
        clearSession();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [API_URL]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authCokie,
        loading,
        login,
        logout,
        API: API_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};