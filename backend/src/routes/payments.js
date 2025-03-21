import express from "express";
import paymentController from "../controllers/paymentController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(paymentController.getPayment)
.post(paymentController.createPayment)

router.route("/:id")
.put(paymentController.updatePayment)
.delete(paymentController.deletePayment)

export default router;
