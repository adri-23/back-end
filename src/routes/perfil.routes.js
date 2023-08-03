import perfilCtrl from '../controllers/perfil.controller.js'
import md_auth from "../middleware/authenticated.js";
import express from 'express';
const router = express.Router();

router.get('/perfil', md_auth.ensureAuth, perfilCtrl.getPerfil);
router.get('/proyecto', md_auth.ensureAuth, perfilCtrl.getProyecto);
export default router;