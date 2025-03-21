import express from "express";
import chatsController from "../controllers/chatsController.js";
// Router() nos ayuda a colocar los mètodos que tendrà mi ruta
const router = express.Router();

router.route("/")
.get(chatsController.getChats)
.post(chatsController.createChats) 

router.route("/:id")
.put(chatsController.updateChats)
.delete(chatsController.deleteChats)

export default router;