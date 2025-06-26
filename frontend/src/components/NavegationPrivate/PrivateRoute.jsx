import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = () => {
  const { authCokie, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return authCokie ? <Outlet /> : <Navigate to="/login" />;
};