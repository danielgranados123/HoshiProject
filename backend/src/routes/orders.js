import express from "express";
import ordersController from "../controllers/ordersController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(ordersController.getOrders)
.post(ordersController.createOrders) 

router.route("/:id")
.put(ordersController.updateOrders)
.delete(ordersController.deleteOrders)

export default router;