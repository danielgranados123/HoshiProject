import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

const useDataEmployees = () => {
  const ApiRegister = "http://localhost:4000/api/registerEmployees";
  const ApiEmployees = "http://localhost:4000/api/employees";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
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

    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const phoneRegex = /^\d{8}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (
      !name ||
      !lastName ||
      !email ||
      !password ||
      !phone ||
      !role ||
      salary === ""
    ) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (!nameRegex.test(name)) {
      toast.error("El nombre solo debe contener letras");
      return;
    }

    if (!nameRegex.test(lastName)) {
      toast.error("El apellido solo debe contener letras");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("El correo electrónico no es válido");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("El teléfono debe tener exactamente 8 dígitos");
      return;
    }

    if (isNaN(parseFloat(salary)) || parseFloat(salary) < 365) {
      toast.error("El salario debe ser mayor o igual a $365");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      setLoading(true);

      const newEmployee = {
        name,
        lastName,
        email,
        password,
        phone,
        role,
        salary: parseFloat(salary),
      };

      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok)
        throw new Error("Hubo un error al registrar el empleado");

      toast.success("Empleado registrado");
      cleanData();
      fetchData();
      
    } catch (error) {
      toast.error("Ocurrió un error al registrar el empleado");
      setError(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ApiEmployees);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
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
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción eliminará permanentemente al empleado.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  });

  if (!result.isConfirmed) {
    Swal.fire("Cancelado", "No se eliminó al empleado.", "info");
    return;
  }

  try {
    const response = await fetch(`${ApiEmployees}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el empleado");

    Swal.fire("¡Eliminado!", "El empleado ha sido eliminado.", "success");
    fetchData();
  } catch (error) {
    console.error("Error deleting employee:", error);
    Swal.fire("Error", "Ocurrió un error al eliminar el empleado.", "error");
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
    setPassword("");
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const phoneRegex = /^\d{8}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!name || !lastName || !email || !phone || !role || salary === "") {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (!nameRegex.test(name)) {
      toast.error("El nombre solo debe contener letras");
      return;
    }

    if (!nameRegex.test(lastName)) {
      toast.error("El apellido solo debe contener letras");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("El correo electrónico no es válido");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("El teléfono debe tener exactamente 8 dígitos");
      return;
    }

    if (isNaN(parseFloat(salary)) || parseFloat(salary) < 365) {
      toast.error("El salario debe ser mayor o igual a $365");
      return;
    }

    if (password && password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      setLoading(true);

      const updatedEmployee = {
        name,
        lastName,
        email,
        phone,
        role,
        salary: parseFloat(salary),
      };

      if (password.trim() !== "") {
        updatedEmployee.password = password;
      }

      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) throw new Error("Error al actualizar el empleado");

      toast.success("Empleado actualizado");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      toast.error("Error al actualizar el empleado");
      setError(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    lastName,
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
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  };
};

export default useDataEmployees;
