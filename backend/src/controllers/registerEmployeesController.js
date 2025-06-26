import employeesModel from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    phone,
    role,
    salary
  } = req.body;

  try {
    // 1. Verificar si el empleado ya existe por correo
    const existEmployee = await employeesModel.findOne({ email });
    if (existEmployee) {
      return res.status(400).json({ message: "El empleado ya existe." });
    }

    // 2. Encriptar contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // 3. Crear nuevo empleado
    const newEmployee = new employeesModel({
      name,
      lastName,
      email,
      password: passwordHash,
      phone,
      role,
      salary
    });

    // 4. Guardar en la base de datos
    await newEmployee.save();

    // 5. Crear y enviar token
    jsonwebtoken.sign(
      { id: newEmployee._id },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.log("Token Error: " + error);
          return res.status(500).json({ message: "Error generando el token." });
        }

        res.cookie("authToken", token);
        res.status(201).json({ message: "Empleado registrado correctamente." });
      }
    );

  } catch (error) {
    console.error("Error al guardar empleado:", error);
    res.status(500).json({ message: "Error al registrar el empleado." });
  }
};

export default registerEmployeesController;