//Importamos los modelos
import customersModel from "../models/Customers.js";
import employeesModel from "../models/Employees.js";
import bcryptjs from "bcryptjs"; // Encriptar
import jsonwebtoken from "jsonwebtoken"; // generar token
import { config } from "../config.js";

// Array de funciones
const loginController = {};

loginController.login = async (req, res) => {
  //Pedimos las cosas
  const { email, password } = req.body;

  try {
    //Validamos los 3 posibles niveles
    // 1. Admin, 2. Empleado, 3. Cliente

    let userFound; //Guarda el usuario encontrado
    let userType; //Guarda el tipo de usuario encontrado

    //1. Admin
    if (
      email === config.ADMIN.emailAdmin &&
      password === config.ADMIN.password
    ) {
      userType = "admin";
      userFound = { _id: "admin" };
    } else {
      //2. Empleados
      userFound = await employeesModel.findOne({ email });
      userType = "employee";
      if (!userFound) {
        //3. Cliente
        userFound = await customersModel.findOne({ email });
        userType = "customer";
      }
    }

    //Si no encontramos a ningun usuario con esas credenciales
    if (!userFound) {
      return res.json({ message: "User not found" });
    }

    // Validar la contraseña
    // SOLO SI NO ES ADMIN
    if (userType !== "admin") {
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {
        return res.json({ message: "Invalid password" });
      }
    }

    //// TOKEN
    //Para validar que inició sesión
    jsonwebtoken.sign(
  { id: userFound._id, userType },
  config.JWT.secret,
  { expiresIn: config.JWT.expiresIn },
  (error, token) => {
    if (error) {
      console.log("error" + error);
      return res.status(500).json({ message: "Error generating token" });
    }
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(200).json({ message: "Login successful", userType, token });
  }
);
  } catch (error) {
    console.log("error" + error);
  }
};

export default loginController;
