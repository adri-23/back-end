import ctrlSuministro from "../controllers/suministro.controller.js";
import md_auth from "../middleware/authenticated.js";
import express from 'express';

const suministro = express.Router();
suministro.post('/Suministro/Recepcion',md_auth.ensureAuth,ctrlSuministro.postRecepcion);
suministro.post('/Suministro/getRecepcion',md_auth.ensureAuth,ctrlSuministro.getOficios);
suministro.post('/Suministro/getSuministro',md_auth.ensureAuth,ctrlSuministro.getSuministros);
suministro.post('/Suministro/getPaquetes',md_auth.ensureAuth,ctrlSuministro.getPaquetes);
suministro.post('/Suministro/Paquete',md_auth.ensureAuth,ctrlSuministro.postPaquetes);
suministro.post('/Suministro/EntregaFoliosTecnico',md_auth.ensureAuth,ctrlSuministro.postManageEntregaFoliosTecnico);
suministro.post('/Suministro/getEntregaFoliosTecnico',md_auth.ensureAuth,ctrlSuministro.getEntregaFoliosTecnico);
suministro.post('/Suministro/DotacionFoliosCajero',md_auth.ensureAuth,ctrlSuministro.postDotacionFoliosCajero);
suministro.post('/Suministro/getDotacionFoliosCajero',md_auth.ensureAuth,ctrlSuministro.getDotacionFoliosCajero);
suministro.post('/Suministro/LiberaDotacionCajero',md_auth.ensureAuth,ctrlSuministro.LiberaDotacionCajero);
export default suministro;

