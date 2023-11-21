import menuUsuarioCtrl from "../controllers/menu-usuario.controller.js";
import express from "express";
const router = express.Router();

router.get("/menuUsuario", menuUsuarioCtrl.getAllMenuUsuario);
router.get("/menuUsuario/:id", menuUsuarioCtrl.getMenuUsuarioById);
router.post("/menuUsuario", menuUsuarioCtrl.createMenuUsuario);
router.put("/menuUsuario/:id", menuUsuarioCtrl.updateMenuUsuario);
router.delete("/menuUsuario/:id", menuUsuarioCtrl.deleteMenuUsuario);

export default router;
