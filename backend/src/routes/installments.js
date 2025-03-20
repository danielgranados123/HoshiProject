import express from "express";
import installmentsController from "../controllers/installmentsController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(installmentsController.getInstallments)
.post(installmentsController.createInstallments) 

router.route("/:id")
.put(installmentsController.updateInstallments)
.delete(installmentsController.deleteInstallments)

export default router;