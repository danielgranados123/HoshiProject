import express from "express";
import carsController from "../controllers/carsController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(carsController.getCars)
.post(carsController.createCars) 

router.route("/:id")
.put(carsController.updateCars)
.delete(carsController.deleteCars)

export default router;