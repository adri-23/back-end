import estadoCtrl from "../controllers/estado.controller.js";
import express from "express";
const router = express.Router();

router.get("/estado", estadoCtrl.getAllEstado);
router.get("/estado/:id", estadoCtrl.getEstadoById);
router.post("/estado", estadoCtrl.createEstado);
router.put("/estado/:id", estadoCtrl.updateEstado);
router.delete("/estado/:id", estadoCtrl.deleteEstado);

export default router;
