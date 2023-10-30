import inmuebleCtrl from "../controllers/inmueble.controller.js";
import express from "express";
const router = express.Router();

router.get("/inmuebles", inmuebleCtrl.getAllInmuebles);
router.get("/inmuebles/:id", inmuebleCtrl.getInmuebleById);
router.post("/inmueble", inmuebleCtrl.createInmueble);
router.put("/inmueble/:id", inmuebleCtrl.updateInmueble);
router.delete("/inmueble/:id", inmuebleCtrl.deleteInmueble);

export default router;
