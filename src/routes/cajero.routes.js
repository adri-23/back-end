import cajeroCtrl from '../controllers/cajero.controller.js';
import Utils from '../controllers/utils.controller.js';
import md_auth from "../middleware/authenticated.js";
import express from 'express';


const router = express.Router();
router.post('/cajero', cajeroCtrl.getCajeroByNumero)
router.post('/manageCajero',md_auth.ensureAuth, cajeroCtrl.postManageCajero)
router.post('/cajerosTecnico',md_auth.ensureAuth,cajeroCtrl.getCajeroByTecnico);
router.post('/cajeros', md_auth.ensureAuth, cajeroCtrl.getCajero)
router.post('/ValidaFolios',Utils.getValidaFolios);
router.post('/CancelaFolio',cajeroCtrl.cancelaFolio);

export default router;