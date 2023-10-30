import permisoCtrl from "../controllers/permiso.controller.js";
import express from "express";
const router = express.Router();

router.get("/permiso", permisoCtrl.getAllPermiso);
router.get("/permiso/:id", permisoCtrl.getPermisoById);
router.post("/permiso", permisoCtrl.createPermiso);
router.put("/permiso/:id", permisoCtrl.updatePermiso);
router.delete("/permiso/:id", permisoCtrl.deletePermiso);

export default router;
