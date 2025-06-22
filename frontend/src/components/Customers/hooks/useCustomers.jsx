import { useState, useEffect, useCallback } from "react";

export default function useCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/customers");
      if (!res.ok) throw new Error("Error al cargar clientes");
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCustomer = useCallback(
    async (id) => {
      if (!window.confirm("¿Seguro que quieres eliminar este cliente?")) return;
      try {
        const res = await fetch(`/api/customers/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Error al eliminar cliente");
        await fetchCustomers();
      } catch (err) {
        console.error(err);
        alert(err.message || "No se pudo eliminar el cliente");
      }
    },
    [fetchCustomers]
  );

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return { customers, loading, error, refetch: fetchCustomers, deleteCustomer };
}
