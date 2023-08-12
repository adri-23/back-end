import accesoCtrl from "../controllers/tipo-acceso.controller.js";
import express from "express";
const router = express.Router();


router.get("/acceso", accesoCtrl.getAllAcceso);
router.get("/acceso/:id", accesoCtrl.getAccesoById);
router.post("/acceso/:create", accesoCtrl.createAcceso);
router.put("/acceso/:update", accesoCtrl.updateAcceso);
router.delete("/acceso/:delete", accesoCtrl.deleteAcceso);


export default router;