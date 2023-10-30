import tipoAccesoCtrl from "../controllers/tipo-acceso.controller.js";
import express from "express";
const router = express.Router();

router.get("/acceso", tipoAccesoCtrl.getAllAcceso);
router.get("/acceso/:id", tipoAccesoCtrl.getAccesoById);
router.post("/acceso", tipoAccesoCtrl.createAcceso);
router.put("/acceso/:id", tipoAccesoCtrl.updateAcceso);
router.delete("/acceso/:id", tipoAccesoCtrl.deleteAcceso);

export default router;
