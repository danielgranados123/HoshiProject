// src/components/Customers/hooks/useRegisterCustomer.jsx
import { useState } from "react";

export default function useRegisterCustomer() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const register = async (customer) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...customer, lastName: "" })
      });
      if (!res.ok) throw new Error("Error al crear cliente");
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}
