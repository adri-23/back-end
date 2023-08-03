import Servicios from '../controllers/servicios.controller.js';
import monitoreoCtrl from '../controllers/monitoreo.controller.js';
import md_auth from "../middleware/authenticated.js";
import express, { Router } from 'express';

const router = express.Router();

router.get('/Servicios/:ID_PROYECTO',md_auth.ensureAuth,Servicios.getServicios);
router.post('/Servicios',md_auth.ensureAuth,Servicios.inServicio);
router.put('/Servicios',md_auth.ensureAuth,Servicios.updateServicio);
router.get('/ServiciosActivos/:ID_PROYECTO/:NUM_CAJERO',md_auth.ensureAuth,Servicios.getServiciosActivos);
router.put('/ServiciosActivos',md_auth.ensureAuth,Servicios.updateServicioActivo);

export default router;