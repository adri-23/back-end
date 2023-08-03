import Utils from '../controllers/utils.controller.js';
import monitoreoCtrl from '../controllers/monitoreo.controller.js';
import md_auth from "../middleware/authenticated.js";
import express, { Router } from 'express';


const router = express.Router();
router.post('/Catalogos',md_auth.ensureAuth, Utils.getCatalogos);
router.post('/Monitoreo',md_auth.ensureAuth,monitoreoCtrl.getMonitoreo);
router.post('/PDFEntregaFolios',md_auth.ensureAuth,Utils.getPDFEntregaFolios);
router.get('/GetTxt',Utils.getTxt);




export default router;