import express from "express";
import carsController from "../controllers/carsController.js";
import multer from "multer"
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

//Configurar una carpeta local que guarde el registro de las imgs subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(carsController.getCars)
.post(upload.single("image"), carsController.createCars)

router.route("/:id")
.put(carsController.updateCars)
.delete(carsController.deleteCars)

export default router;