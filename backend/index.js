// backend/index.js
import dotenv from "dotenv";
dotenv.config();

// Conecta a MongoDB (ajusta la ruta si database.js está en otra carpeta)
import "./database.js";

import express from "express";
import cors from "cors";
import customersRoutes from "./src/routes/customers.js";

const app = express();

// Parseo de JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Rutas de customers
app.use("/api/customers", customersRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API is running");
});

// Arranque del servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
