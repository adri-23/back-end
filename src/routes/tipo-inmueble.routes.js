import tipoInmuebleCtrl from "../controllers/tipo-inmueble.controller.js";
import express from "express";
const router = express.Router();

router.get("/tipoInmueble", tipoInmuebleCtrl.getAlltipoInmueble);
router.get("/tipoInmueble/:id", tipoInmuebleCtrl.getTipoInmuebleById);
router.post("/tipoInmueble/:create", tipoInmuebleCtrl.createTipoInmueble);
router.put("/tipoInmueble/:update", tipoInmuebleCtrl.updateTipoInmueble);
router.delete("/tipoInmueble/:delete", tipoInmuebleCtrl.deleteTipoInmueble);

export default router;
