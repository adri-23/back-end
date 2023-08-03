import Dashboard from '../controllers/dashboard.controller.js';
import md_auth from "../middleware/authenticated.js";
import express, { Router } from 'express';

const router = express.Router();

router.get('/Dashboard/:ID_PROYECTO',md_auth.ensureAuth,Dashboard.getDashboardIncidencias);


export default router;