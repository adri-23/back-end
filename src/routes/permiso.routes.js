import permisoCtrl from "../controllers/permiso.controller.js";
import express from "express";
const router = express.Router();


router.get("/permiso", permisoCtrl.getAllPermiso);
router.get("/permiso/:id", permisoCtrl.getPermisoById);
router.post("/permiso/:create", permisoCtrl.createPermiso);
router.put("/permiso/:update", permisoCtrl.updatePermiso);
router.delete("/permiso/:delete", permisoCtrl.deletePermiso);


export default router;