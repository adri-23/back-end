import eventoCtrl from "../controllers/evento.controller.js";
import express from "express";
import tipoInmuebleCtrl from "../controllers/tipo-inmueble.controller.js";
const router = express.Router();

router.get("/evento", eventoCtrl.getAllevento);
router.get("/evento/:id", eventoCtrl.getEventoById);
router.post("/evento", eventoCtrl.createEvento);
router.put("/evento/:id", eventoCtrl.updateEvento);
router.delete("/evento/:id", eventoCtrl.deleteEvento);

export default router;
