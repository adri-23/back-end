import perfilCtrl from "../controllers/perfil.controller.js";
import express from "express";
const router = express.Router();

router.get("/perfil", perfilCtrl.getAllPerfil);
router.get("/perfil/:id", perfilCtrl.getPerfilById);
router.post("/perfil", perfilCtrl.createPerfil);
router.put("/perfil/:id", perfilCtrl.updatePerfil);
router.delete("/perfil/:id", perfilCtrl.deletePerfil);

export default router;
