import Depositos from '../controllers/depositos.controller.js';
import md_auth from "../middleware/authenticated.js";
import express, { Router } from 'express';

const router = express.Router();

router.get('/Depositos/:ID_PROYECTO/:ID_PAQUETE',md_auth.ensureAuth,Depositos.getDepositos);
router.post('/Depositos',md_auth.ensureAuth,Depositos.inDeposito);
router.put('/Depositos',md_auth.ensureAuth,Depositos.updateDeposito);
router.delete('/Depositos/:ID_DEPOSITO',md_auth.ensureAuth,Depositos.deleteDeposito);

export default router;