import eventoCtrl from "../controllers/evento.controller.js";
import express from "express";
import tipoInmuebleCtrl from "../controllers/tipo-inmueble.controller.js";
const router = express.Router();

router.get("/Evento", eventoCtrl.getAllevento);
router.get("/evento/:id", eventoCtrl.getEventoById);
router.post("/evento/:create", eventoCtrl.createEvento);
router.put("/evento/:update", eventoCtrl.updateEvento);
router.delete("/evento/:delete", eventoCtrl.deleteEvento);

export default router;
