import express from "express";
import modelsController from "../controllers/modelsController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(modelsController.getModels)
.post(modelsController.createModels) 

router.route("/:id")
.put(modelsController.updateModels)
.delete(modelsController.deleteModels)

export default router;