import controlAccesoCtrl from "../controllers/control-acceso.controller.js";
import express from "express";
const router = express.Router();

router.get("/controlAcceso", controlAccesoCtrl.getAllControlAcceso);
router.get("/controlAcceso/:id", controlAccesoCtrl.getControlAccesoById);
router.post("/controlAcceso", controlAccesoCtrl.createControlAcceso);
router.put("/controlAcceso/:id", controlAccesoCtrl.updateControlAcceso);
router.delete("/controlAcceso/:id", controlAccesoCtrl.deleteControlAcceso);

export default router;
