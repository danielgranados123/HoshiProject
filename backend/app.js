// Importo todo lo de la libreria de Express
import express from "express";
import branchesRoutes from "./src/routes/branches.js"
import brandsRoutes from "./src/routes/brands.js"
import carsRoutes from "./src/routes/cars.js"
import customersRoutes from "./src/routes/customers.js"
import employeesRoutes from "./src/routes/employees.js"
import installmentsRoutes from "./src/routes/installments.js"
import modelsRoutes from "./src/routes/models.js"
import paymentsRoutes from "./src/routes/payments.js"
import ordersRoutes from "./src/routes/orders.js"
import reviewsRoutes from "./src/routes/reviews.js"
import chatsRoutes from "./src/routes/chats.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"

// Creo una constante que es igual a la liberia que importé
const app = express();

// Que acepte datos de json
app.use(express.json());

// Definir las rutas de las funciones que tendrà la pàgina web
app.use("/api/branches", branchesRoutes)
app.use("/api/brands", brandsRoutes)
app.use("/api/cars", carsRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/employees", employeesRoutes)
app.use("/api/installments", installmentsRoutes)
app.use("/api/models", modelsRoutes)
app.use("/api/payments", paymentsRoutes)
app.use("/api/orders", ordersRoutes)
app.use("/api/reviews", reviewsRoutes)
app.use("/api/chats", chatsRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/logout", logoutRoutes)



// Exporto la constante para poder usar express en otros archivos
export default app;