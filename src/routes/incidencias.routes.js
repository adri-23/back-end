import Incidencias from '../controllers/incidencias.controller.js';
import md_auth from "../middleware/authenticated.js";
import express, { Router } from 'express';

const router = express.Router();

router.post('/Incidencias/',md_auth.ensureAuth,Incidencias.getIncidencias);
router.post('/IncidenciasTecnico',md_auth.ensureAuth,Incidencias.getIncidenciasTecnico);
router.post('/Incidencias',md_auth.ensureAuth,Incidencias.inIncidencia);
router.put('/Incidencias',md_auth.ensureAuth,Incidencias.updateIncidencia); 

export default router;