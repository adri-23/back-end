import tipoEventoCtrl from "../controllers/tipo-evento.controller.js";
import express from "express";
const router = express.Router();

router.get("/tiposEventos", tipoEventoCtrl.getAllTipoEvento);
router.get("/tiposEventos/:id", tipoEventoCtrl.getTipoEventoById);
router.post("/tipoEvento", tipoEventoCtrl.createTipoEvento);
router.put("/tipoEvento/:id", tipoEventoCtrl.updateTipoEvento);
router.delete("/tipoEvento/:id", tipoEventoCtrl.deleteTipoEvento);

export default router;
