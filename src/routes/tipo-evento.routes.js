import tipoEventoCtrl from "../controllers/tipo-evento.controller.js";
import express from "express";
const router = express.Router();

router.get("/tipoEvento", tipoEventoCtrl.getAllTipoEvento);
router.get("/tipoEvento/:id", tipoEventoCtrl.getTipoEventoById);
router.post("/tipoEvento", tipoEventoCtrl.createTipoEvento);
router.put("/tipoEvento/:id", tipoEventoCtrl.updateTipoEvento);
router.delete("/tipoEvento/:id", tipoEventoCtrl.deleteTipoEvento);

export default router;
