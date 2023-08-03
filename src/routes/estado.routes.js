import estadoCtrl from "../controllers/estado.controller.js";
import express from "express";
const router = express.Router();

router.get("/estado", estadoCtrl.getAllEstado);
router.get("/estado/:id", estadoCtrl.getEstadoById);
router.post("/estado/:create", estadoCtrl.createEstado);
router.put("/estado/:update", estadoCtrl.updateEstado);
router.delete("/estado/:delete", estadoCtrl.deleteEstado);

export default router;
