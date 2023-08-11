import menuHijoCtrl from "../controllers/menu-hijo.controller.js";
import express from "express";
const router = express.Router();

router.get("/menuHijo", menuHijoCtrl.getAllMenuHijo);
router.get("/menuHijo/:id", menuHijoCtrl.getMenuHijoById);
router.post("/menuHijo", menuHijoCtrl.createMenuHijo);
router.put("/menuHijo/:id", menuHijoCtrl.updateMenuHijo);
router.delete("/menuHijo/:id", menuHijoCtrl.deleteMenuHijo);

export default router;
