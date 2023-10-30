import licenciaCtrl from "../controllers/licencia.controller.js";
import express from "express";
const router = express.Router();

router.get("/licencia", licenciaCtrl.getAllLicencia);
router.get("/licencia/:id", licenciaCtrl.getLicenciaById);
router.post("/licencia", licenciaCtrl.createLicencia);
router.put("/licencia/:id", licenciaCtrl.updateLicencia);
router.delete("/licencia/:id", licenciaCtrl.deleteLicencia);

export default router;
