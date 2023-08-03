import transaccionCtrl from "../controllers/transaccion.controller.js";
import md_auth from "../middleware/authenticated.js";
import express from 'express';

const transaccion = express.Router();
transaccion.post('/ReporteTransaccion',md_auth.ensureAuth,transaccionCtrl.select); 
transaccion.post('/ReporteServicios',md_auth.ensureAuth,transaccionCtrl.getReportexServicios);
transaccion.post('/ReporteCajeros',md_auth.ensureAuth,transaccionCtrl.getReportexCajero);
transaccion.post('/ReportePaquete',md_auth.ensureAuth,transaccionCtrl.getReporteVentaxPaquete);
transaccion.post('/EncuestaSatisfaccion',transaccionCtrl.EncuestaCaritas);
export default transaccion;