import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();
const Utils = { 
    getEstados: async () => {
        try {
            let result = await pool.request()
            .query("select * from getEstados");
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    },
    getMunicipios: async () => {
        try {
            let result = await pool.request()
            .query("select * from getMunicipios");
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }       
    },
    getEstatus: async () => {
        try {
            let result = await pool.request()
            .query("select * from getEstatus");
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }       
    },
    getFormas: async() =>{
        try {
            let result = await pool.request()
            .query("select * from getFormasDeposito");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getTipos: async() =>{
        try {
            let result = await pool.request()
            .query("select * from getTiposDeposito");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getBancos: async() =>{
        try {
            let result = await pool.request()
            .query("select * from getBancosDeposito");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getTiposIncidencias: async() =>{
        try {
            let result = await pool.request()
            .query("select * from getTipoIncidencias");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getEstatusIncidencias: async() =>{
        try {
            let result = await pool.request()
            .query("select * from getEstatusIncidencias");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getValidaFolios: async (Folios) => {
        try{
            let result = await pool.request()
                .input('FOLIO_INICIAL',Folios.FOLIO_INICIAL)
                .input('FOLIO_FINAL',Folios.FOLIO_FINAL)
                .input('NUM_CAJERO',Folios.NUM_CAJERO)
                .input('ID_PROYECTO',Folios.ID_PROYECTO)
                .input('SERIE',Folios.SERIE)
                .execute("ValidaFolios");
                return result;
        }catch(err) {
            console.log(err.originalError.info);
            return [];
        }
        
    },
    getPDFEntregaFolios:async(data) =>{
        try {
            let result = await pool.request()
            .input('id_asignacion',sql.BigInt,data.ID_ASIGNACION)
            .query("SELECT * FROM getDotacion where ID_ASIGNACION = @id_asignacion");
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    getServiciosActivos:async(data) =>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,data.ID_PROYECTO)
            .query("SELECT * FROM getServiciosActivos WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    getReportexServicios: async(data) =>{
        try {
            let result = await pool.request()
            .input('ID_PROYECTO',data.ID_PROYECTO)
            .input('FECHA_INICIAL',data.FECHA_INICIAL)
            .input('FECHA_FINAL',data.FECHA_FINAL)
            .execute('getReportexServicios');
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    }
};


export default Utils;