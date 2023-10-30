import coloniaCtrl from "../controllers/colonia.controller.js";
import express from "express";
const router = express.Router();

router.get("/colonia", coloniaCtrl.getAllColonia);
router.get("/colonia/:id", coloniaCtrl.getColoniaById);
router.post("/colonia", coloniaCtrl.createColonia);
router.put("/colonia/:id", coloniaCtrl.updateColonia);
router.delete("/colonia/:id", coloniaCtrl.deleteColonia);

export default router;
