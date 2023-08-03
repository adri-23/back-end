import db from '../database/database.js';

import sql from 'mssql';
const pool = await db.connectDb();

const suministroModel = {
    spRecepcion: async (Recepcion) => {
        try {
            let result = await pool.request()
                .input('NUMERO_OFICIO', Recepcion.NUMERO_OFICIO)
                .input('FECHA_RECEPCION', Recepcion.FECHA_RECEPCION)
                .input('SERIE', Recepcion.SERIE)
                .input('FOLIO_INICIAL', Recepcion.FOLIO_INICIAL)
                .input('FOLIO_FINAL', Recepcion.FOLIO_FINAL)
                .input('TOTAL_FOLIOS', Recepcion.TOTAL_FOLIOS)
                .input('TOTAL_REGISTRADOS', Recepcion.TOTAL_REGISTRADOS)
                .input('PERSONA_RECIBIO', Recepcion.PERSONA_RECIBIO)
                .input('PERSONA_ENTREGO', Recepcion.PERSONA_ENTREGO)
                .input('IMAGE', Recepcion.IMAGE)
                .input('ID_USUARIO', Recepcion.ID_USUARIO)
                .input('ID_SUMINISTRO', Recepcion.ID_SUMINISTRO)
                .input('ID_PROYECTO', Recepcion.ID_PROYECTO)
                .input('CAJA_INICIA', Recepcion.CAJA_INICIA)
                .execute("CreateRecibeFolios");
            return result;
        }
        catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    spPaquete: async (Paquete) => {
        try {
            let result = await pool.request()
                .input('NO_CAJA', Paquete.NO_CAJA)
                .input('FOLIO_INICIAL', Paquete.FOLIO_INICIAL)
                .input('FOLIO_FINAL', Paquete.FOLIO_FINAL)
                .input('TOTAL_FOLIOS', Paquete.TOTAL_FOLIOS)
                .input('ID_USUARIO', Paquete.ID_USUARIO)
                .input('ID_RECEPCION', Paquete.ID_RECEPCION)
                .input('ID_PROYECTO', Paquete.ID_PROYECTO)
                .execute("CreateDetPaquetes");
            return result;
        }
        catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    spManageEntregaFoliosTecnico: async (FoliosTecnico) => {
        try {
            let result = await pool.request()
                .input('ID_ENTREGA', FoliosTecnico.ID_ENTREGA)
                .input('FOLIO_INICIAL', FoliosTecnico.FOLIO_INICIAL)
                .input('FOLIO_FINAL', FoliosTecnico.FOLIO_FINAL)
                .input('TOTAL_FOLIOS', FoliosTecnico.TOTAL_FOLIOS)
                .input('FECHA_ENTREGA', FoliosTecnico.FECHA_ENTREGA)
                .input('ID_PAQUETE', FoliosTecnico.ID_PAQUETE)
                .input('ID_USUARIO', FoliosTecnico.ID_USUARIO)
                .input('ID_USUARIO_ENTREGA', FoliosTecnico.ID_USUARIO_ENTREGA)
                .input('ID_USUARIO_RESPONSABLE', FoliosTecnico.ID_USUARIO_RESPONSABLE)
                .input('ID_PROYECTO', FoliosTecnico.ID_PROYECTO)
                .input('ESTATUS', FoliosTecnico.ESTATUS)
                .input('OPERACION', FoliosTecnico.OPERACION)

                .input('ID_ASIGNACION', FoliosTecnico.ID_ASIGNACION)
                .execute("ManageEntregaFoliosTecnico");
            return result;
        }
        catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    viewOficios: async (id_proyecto) => {
        try {
            let result = await pool.request()
                .input('id_proyecto', sql.Int, id_proyecto)
                .query("select * from getRecepcionFolios where ID_PROYECTO=@id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    catSuministros: async (id_proyecto) => {
        try {
            let result = await pool.request()
                .input('id_proyecto', sql.Int, id_proyecto)
                .query("select * from CAT_SUMINISTROS where ID_PROYECTO=@id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    viewPaquetes: async (id_proyecto) => {
        try {
            let result = await pool.request()
                .input('id_proyecto', sql.Int, id_proyecto)
                .query("select * from getPaquetes where ID_PROYECTO=@id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    spDotacionFoliosCajero: async (folios) => {
        try {
            let result = await pool.request()
                .input('ID_DOTACION',folios.ID_DOTACION)
                .input('NUM_CAJERO', folios.NUM_CAJERO)
                .input('ID_PAQUETE', folios.ID_PAQUETE)
                .input('FOLIO_INICIAL', folios.FOLIO_INICIAL)
                .input('FOLIO_ACTUAL', folios.FOLIO_ACTUAL)
                .input('FOLIO_FINAL', folios.FOLIO_FINAL)
                .input('OBSERVACIONES', folios.OBSERVACIONES)
                .input('ESTATUS', folios.ESTATUS)
                .input('ID_PROYECTO', folios.ID_PROYECTO)
                .input('OPERACION', folios.OPERACION)
                .execute("ManageDotacionFolios");
            return result;
        }
        catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    viewEntregaFoliosTecnico: async (params) => {
        try {
            var result = [];
            if (params.ID_PROYECTO > 0 && params.ID_USUARIO > 0) {
                result = await pool.request()
                    .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                    .input('ID_USUARIO', sql.Int, params.ID_USUARIO)
                    .query("select * from getDotacion WHERE ID_PROYECTO=@ID_PROYECTO AND ID_USUARIO = @ID_USUARIO ");
            } else {
                result = await pool.request()
                    .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                    .query("select * from getDotacion WHERE ID_PROYECTO=@ID_PROYECTO");
            }

            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    viewDotacionCajero: async (params) => {
        try {
            var result = [];
            if (params.ID_PROYECTO > 0 && params.ID_PAQUETE > 0) {
                result = await pool.request()
                    .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                    .input('ID_PAQUETE', sql.Int, params.ID_PAQUETE)
                    .query("SELECT * FROM getDotacionCajero WHERE ID_PROYECTO=@ID_PROYECTO AND ID_PAQUETE = @ID_PAQUETE");
            } else {
                result = await pool.request()
                    .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                    .query("SELECT * FROM getDotacionCajero WHERE ID_PROYECTO = @ID_PROYECTO");
            }

            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
}
export default suministroModel;