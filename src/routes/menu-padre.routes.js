import menuPadreCtrl from "../controllers/menu-padre.controller.js";
import express from "express";
const router = express.Router();

router.get("/menuPadre", menuPadreCtrl.getAllMenuPadre);
router.get("/menuPadre/:id", menuPadreCtrl.getMenuPadreById);
router.post("/menuPadre", menuPadreCtrl.createMenuPadre);
router.put("/menuPadre/:id", menuPadreCtrl.updateMenuPadre);
router.delete("/menuPadre/:id", menuPadreCtrl.deleteMenuPadre);

export default router;
