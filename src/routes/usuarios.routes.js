import usuarioCtrl from "../controllers/usuario.controller.js";
import express from "express";
const router = express.Router();

router.post("/login", usuarioCtrl.loginUsuario);
router.post("/usuarios", usuarioCtrl.createUsuario);

export default router;
