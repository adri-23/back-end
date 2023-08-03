import licenciaCtrl from "../controllers/licencia.controller.js";
import express from "express";
const router = express.Router();

router.get("/licencia", licenciaCtrl.getAllLicencia);
router.get("/licencia/:id", licenciaCtrl.getLicenciaById);
router.post("/licencia/:create", licenciaCtrl.createLicencia);
router.put("/licencia/:update", licenciaCtrl.updateLicencia);
router.delete("/licencia/:delete", licenciaCtrl.deleteLicencia);

export default router;
