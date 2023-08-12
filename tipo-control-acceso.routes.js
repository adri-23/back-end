import tipoControlAccesoCtrl from "../controllers/tipo-control-acceso.controller.js";
import tipoControlAcceso from "../controllers/tipo-control-acceso.controller.js";
import express from "express";
const router = express.Router();


router.get("/tipoControlAcceso", tipoControlAcceso.getAllTipoControlAcceso);
router.get("/tipoControlAcceso/:id", tipoControlAccesoCtrl.getTipoControlAccesoById);
router.post("/tipoControlAcceso/:create", tipoControlAccesoCtrl.createTipoControlAcceso);
router.put("/tipoControlAcceso/:update", tipoControlAccesoCtrl.updateTipoControlAcceso);
router.delete("/tipoControlAcceso/:delete", tipoControlAccesoCtrl.deleteTipoControlAcceso);

export default router;