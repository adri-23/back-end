import perfilCtrl from "../controllers/perfil.controller.js"
import express from "express";
const router = express.Router();


router.get("/perfil", perfilCtrl.getAllPerfil);
router.get("/perfil/:id", perfilCtrl.updatePerfil);
router.post("/perfil/:create", perfilCtrl.createPerfil);
router.put("/perfil/:update", perfilCtrl.updatePerfil);
router.delete("/perfil/:delete", perfilCtrl.deletePerfil);


export default router;