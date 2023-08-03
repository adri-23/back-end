import axios from "axios";
import PDFDocument from 'pdfkit'
import moment from 'moment'
import Utils from "../models/utils.model.js";
import Servicios from "../models/servicios.model.js";
import validator from "../middleware/validator.js";


const functions =
{
    getPdf: async (data, url) => {
        try {
            const Acta = await axios.post(url, data);
            return Acta.data;
        }
        catch (err) {
            console.log(err);
        }
    },
    getCatalogos: async (req, res) => {
        try {
            let estados = await Utils.getEstados();
            let municipios = await Utils.getMunicipios();
            let estatus = await Utils.getEstatus();
            let formas = await Utils.getFormas();
            let tipos = await Utils.getTipos();
            let bancos = await Utils.getBancos();
            let tiposIncidencias = await Utils.getTiposIncidencias();
            let estatusIncidencias = await Utils.getEstatusIncidencias();
            res.json({
                code: 200,
                message: "success",
                message_details: "Consulta de informacion exitosaa",
                data: {
                    Estados: estados.recordset,
                    Municipios: municipios.recordset,
                    Estatus: estatus.recordset,
                    Formas_Deposito: formas.recordset,
                    Tipo_Deposito: tipos.recordset,
                    Bancos: bancos.recordset,
                    Tipo_Incidencias: tiposIncidencias.recordset,
                    Estatus_Incidencias: estatusIncidencias.recordset

                }
            })
        }
        catch (err) {
            res.json({
                code: 501,
                message: "error",
                message_details: "Error al consultar informacion",
                data: err
            })
        }
    },
    getPDFEntregaFolios: async (req, res) => {
        try {
            let cajas = [];
            let asignaciones = await Utils.getPDFEntregaFolios(req.body);
            for (let index = 0; index < asignaciones.length; index++) {
                if (cajas.indexOf(asignaciones[index].NO_CAJA) == -1) {
                    cajas.push(asignaciones[index]);
                }
            }
            let nombreArchivo = new moment().format('YYYY-MM-DD') + "_" + req.body.ID_ASIGNACION;
            const doc = new PDFDocument({ size: 'Letter', bufferPages: true, });
            const stream = res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-disposition': 'attachment;filename=' + nombreArchivo + '.pdf',
            });
            var folio_final = asignaciones.recordset[asignaciones.recordset.length - 1].FOLIO_FINAL;
            var total_folios = asignaciones.recordset.reduce((acc, next) => acc + next.TOTAL_FOLIOS, 0);
            doc.on('data', (chunk) => stream.write(chunk));
            doc.on('end', () => stream.end());
            doc.image('./src/assets/images/OFICIO_ENTREGA_FORMAS_VALORADAS-1.png', 0, 0, { width: doc.page.width, height: doc.page.height });
            doc.font('./src/assets/images/verdana.ttf', 9).text('Oaxaca, México a ' + (new Date()).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }), 340, 100, { width: 200, height: 20, align: 'justify' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text('FORMATO UNICO DEL REGISTRO CIVIL DEL ESTADO DE OAXACA', 22, 319, { width: 200, height: 20, align: 'center' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(total_folios, 135, 323, { width: 200, height: 20, align: 'center' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignaciones.recordset[0].FOLIO_INICIAL, 250, 323, { width: 200, height: 20, align: 'center' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(folio_final, 410, 323, { width: 200, height: 20, align: 'center' });
            let y = 387;
            let y1 = 422;
            let current_caja = asignaciones.recordset[0].NO_CAJA;
            for await (let asignacion of asignaciones.recordset) {
                y += 15;
                if (current_caja != asignacion.NO_CAJA) {
                    current_caja = asignacion.NO_CAJA
                    y += 27;
                    y1 += 55;
                }
                doc.font('./src/assets/images/verdana.ttf', 7.5).text(current_caja, 20, y1, { width: 200, height: 20, align: 'center' })
                doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignacion.ID_PAQUETE, 155, y, { width: 20, height: 20 })
                doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignacion.FOLIO_INICIAL, 190, y, { width: 40, height: 20 })
                doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignacion.FOLIO_FINAL, 245, y, { width: 40, height: 20 })
                doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignacion.TOTAL_FOLIOS, 310, y, { width: 40, height: 20 })
            }
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignaciones.recordset[0].TECNICO, 105, 673, y1, { width: 200, height: 20, align: 'center' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignaciones.recordset[0].USUARIO_ENTREGA, 240, 673, y1, { width: 200, height: 20, align: 'center' });
            doc.font('./src/assets/images/verdana.ttf', 7.5).text(asignaciones.recordset[0].USUARIO_RESPONSABLE, 385, 673, y1, { width: 200, height: 20, align: 'center' });
            doc.end();
        } catch (err) {
            res.json({
                code: 501,
                message: "error",
                message_details: "Error al crear el PDF",
                data: err
            });
        }
    },
    getValidaFolios: async (req, res) => {
        try {
            let val = validator.Validate(req.body, "folios");
            if (val === null) {
                let folios = await Utils.getValidaFolios(req.body);
                if (folios.recordset[0].result == 1) {
                    res.json({
                        code: 200,
                        message: "success",
                        message_details: "Información validada exitosamente",
                        data: true
                    })
                } else {
                    res.json({
                        code: 501,
                        message: "!error!",
                        message_details: "No se pudo validar la información",
                        data: false
                    })
                }
            } else {
                res.json({
                    code: 501,
                    message: "!error!",
                    message_details: "input json no contine el formato esperado",
                    data: null,
                    errors: val
                })
            }
        } catch (err) {
            res.json({
                code: 501,
                message: "error",
                message_details: "Error al consultar información",
                data: err
            });
        }
    },
    getTxt: async (req, res) => {
        res.json({
            code: 200,
            message: "Encuesta guardada correctamente",
            data: null,
        });
     
    }
};


export default functions;
