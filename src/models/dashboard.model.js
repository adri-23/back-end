import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();
const dashboardModel = {
    incidenciasTotales: async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getTotalIncidencias WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    incidenciasResueltas:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getIncidenciasResueltas WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },incidenciasNoResueltas:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getIncidenciasNoResueltas WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    incidenciasCambioNoDevuelto:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getCambioNoDevuelto WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    incidenciasCambioDevuelto:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getCambioDevuelto WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },incidenciasResueltasxTecnico:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getIncidenciasXTecnicoResuletas WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },incidenciasNoResueltasxTecnico:async(id_proyecto)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,id_proyecto)
            .query("SELECT * FROM getIncidenciasXTecnicoNoResuletas WHERE ID_PROYECTO = @id_proyecto");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
};

export default dashboardModel;