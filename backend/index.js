// backend/index.js
import dotenv from "dotenv";
dotenv.config();

import "./database.js";

import express from "express";
import cors from "cors";
import customersRoutes from "./src/routes/customers.js";
import EmployeesRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js"
import brandsRoutes from "./src/routes/brands.js"
import carsRoutes from "./src/routes/cars.js"
import installmentsRoutes from "./src/routes/installments.js"
import modelsRoutes from "./src/routes/models.js"
import paymentsRoutes from "./src/routes/payments.js"
import ordersRoutes from "./src/routes/orders.js"
import reviewsRoutes from "./src/routes/reviews.js"
import chatsRoutes from "./src/routes/chats.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import registerEmployeesRoutes from "./src/routes/registerEmployees.js"
import registerCustomersRoutes from "./src/routes/registerCustomers.js"

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
app.use("/api/employees", EmployeesRoutes)
app.use("/api/registerEmployees", registerEmployeesRoutes)
app.use("/api/registerCustomers", registerCustomersRoutes)
app.use("/api/branches", branchesRoutes)
app.use("/api/brands", brandsRoutes)
app.use("/api/cars", carsRoutes)
app.use("/api/installments", installmentsRoutes)
app.use("/api/models", modelsRoutes)
app.use("/api/payments", paymentsRoutes)
app.use("/api/orders", ordersRoutes)
app.use("/api/reviews", reviewsRoutes)
app.use("/api/chats", chatsRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)

// Ruta base
app.get("/", (req, res) => {
  res.send("API is running");
});

// Arranque del servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
