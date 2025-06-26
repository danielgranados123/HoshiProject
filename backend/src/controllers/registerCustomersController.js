import customersModel from "../models/Customers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerCustomersController = {};

registerCustomersController.register = async (req, res) => {
  const {
    name,
    lastName,
    dni,
    email,
    phone,
    username,
    password
  } = req.body;

  try {
    // 1. Verificar si el cliente ya existe por correo o usuario
    const existingEmail = await customersModel.findOne({ email });
    const existingUsername = await customersModel.findOne({ username });

    if (existingEmail || existingUsername) {
      return res.status(400).json({ message: "El cliente ya existe con ese correo o usuario." });
    }

    // 2. Encriptar contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // 3. Crear nuevo cliente
    const newCustomer = new customersModel({
      name,
      lastName,
      dni,
      email,
      phone,
      username,
      password: passwordHash
    });

    // 4. Guardar en base de datos
    await newCustomer.save();

    // 5. Crear token y guardarlo en cookie
    jsonwebtoken.sign(
      { id: newCustomer._id, userType: "customer" },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.log("Error generando token:", error);
          return res.status(500).json({ message: "Error al generar el token." });
        }

        res.cookie("authToken", token);
        res.status(201).json({ message: "Cliente registrado correctamente." });
      }
    );
  } catch (error) {
    console.error("Error al registrar cliente:", error);
    res.status(500).json({ message: "Error al registrar el cliente." });
  }
};

export default registerCustomersController;
