import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

const useDataEmployees = () => {
  const ApiRegister = "http://localhost:4000/api/registerEmployees";
  const ApiEmployees = "http://localhost:4000/api/employees";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [errorEmpleado, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const cleanData = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setRole("");
    setSalary("");
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !LastName ||
      !email ||
      !password ||
      !phone ||
      !role ||
      !salary
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newEmployee = {
        name,
        LastName,
        email,
        password,
        phone,
        role,
        salary,
      };

     console.log(newEmployee, "datos nuevo empleado");
    
          const response = await fetch(ApiRegister, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmployee),
          });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el empleado");
      }

      const data = await response.json();
      toast.success("Empleado registrado");
      setEmployees(data);
      setSuccess("Empleado registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
       alert("Error", "Ocurrió un error al registrar el empleado");
      toast.error("Ocurrió un error al registrar el empleado");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ApiEmployees);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data)
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      await response.json();
      toast.success("Empleado eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const updateEmployee = (dataEmployee) => {
    setId(dataEmployee._id);
    setName(dataEmployee.name);
    setLastName(dataEmployee.lastName);
    setEmail(dataEmployee.email);
    setPhone(dataEmployee.phone);
    setRole(dataEmployee.role);
    setSalary(dataEmployee.salary);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedEmployee = {
        name,
        LastName,
        email,
        password,
        phone,
        role,
        salary,
      };

      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el empleado");
      }

      toast.success("Empleado actualizado");
      setSuccess("Empleado actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el empleado");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    LastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    role,
    setRole,
    salary,
    setSalary,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  };
};

export default useDataEmployees;
