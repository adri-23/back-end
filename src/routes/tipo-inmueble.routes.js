import tipoInmuebleCtrl from "../controllers/tipo-inmueble.controller.js";
import express from "express";
const router = express.Router();

router.get("/tipoInmueble", tipoInmuebleCtrl.getAlltipoInmueble);
router.get("/tipoInmueble/:id", tipoInmuebleCtrl.getTipoInmuebleById);
router.post("/tipoInmueble", tipoInmuebleCtrl.createTipoInmueble);
router.put("/tipoInmueble/:id", tipoInmuebleCtrl.updateTipoInmueble);
router.delete("/tipoInmueble/:id", tipoInmuebleCtrl.deleteTipoInmueble);

export default router;
