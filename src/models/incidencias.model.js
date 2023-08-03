import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();
const incidenciasModel = {
    // getIncidencias: async(id_proyecto,id_perfil,id_usuario) =>{
    getIncidencias: async(data) =>{
        try {
            
            let result;
            if (data.ID_PERFIL == 4) {
                if (data.ID_USUARIO != 0) {
                    result = await pool.request()
                   .input('id_proyecto', data.ID_PROYECTO)
                   .input('id_usuario', data.ID_USUARIO)
                   .input('fecha_inicial', data.FECHA_INICIAL)
                   .input('fecha_final', data.FECHA_FINAL)
                   .query("select * from getIncidencias where ID_PROYECTO=@id_proyecto AND ID_TECNICO = @id_usuario AND FECHA BETWEEN @fecha_inicial AND @fecha_final");
                }
            }else{
                result = await pool.request()
                .input('id_proyecto',  data.ID_PROYECTO)
                .input('fecha_inicial', data.FECHA_INICIAL)
                .input('fecha_final', data.FECHA_FINAL)
                .query("select * from getIncidencias where ID_PROYECTO=@id_proyecto AND FECHA BETWEEN @fecha_inicial AND @fecha_final");
            }
            
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getIncidenciasTecnico: async(data)=>{
        try {
            let result = await pool.request()
            .input('id_proyecto', data.ID_PROYECTO)
            .input('id_usuario', data.ID_USUARIO)
            .query("select * from getIncidencias where ID_PROYECTO=@id_proyecto AND ID_TECNICO = @id_usuario AND ESTATUS IN (2,3)");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    inIncidencia: async(incidencia) => {
        try {
            let result = await pool.request()
            .input("FOLIO_CONTROL",incidencia.FOLIO_CONTROL)
            .input("ID_PROYECTO",incidencia.ID_PROYECTO)
            .input("ID_SERVICIO",incidencia.ID_SERVICIO)
            .input("NUM_CAJERO",incidencia.NUM_CAJERO)
            .input("FECHA",incidencia.FECHA)
            .input("HORA",incidencia.HORA)
            .input("INCIDENCIA",incidencia.INCIDENCIA)
            .input("TOTAL_NO_DEVUELTO",incidencia.TOTAL_NO_DEVUELTO)
            .input("EVIDENCIA",incidencia.EVIDENCIA)
            .input("ID_TECNICO",incidencia.ID_TECNICO)
            .input("NOMBRE_CONTRIBUYENTE",incidencia.NOMBRE_CONTRIBUYENTE)
            .input("TELEFONO",incidencia.TELEFONO)
            .input("EMAIL",incidencia.EMAIL)
            .input("OBSERVACIONES",incidencia.OBSERVACIONES)
            .execute("InsertIncidencia");
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }   
    },
    updateIncidencia: async(incidencia) => {
        let result = await pool.request()
            .input("ID_INCIDENCIA",incidencia.ID_INCIDENCIA)
            .input("FOLIO_CONTROL",incidencia.FOLIO_CONTROL)
            .input("ID_PROYECTO",incidencia.ID_PROYECTO)
            .input("ID_SERVICIO",incidencia.ID_SERVICIO)
            .input("NUM_CAJERO",incidencia.NUM_CAJERO)
            .input("FECHA",incidencia.FECHA)
            .input("HORA",incidencia.HORA)
            .input("INCIDENCIA",incidencia.INCIDENCIA)
            .input("TOTAL_NO_DEVUELTO",incidencia.TOTAL_NO_DEVUELTO)
            .input("EVIDENCIA",incidencia.EVIDENCIA)
            .input("ID_TECNICO",incidencia.ID_TECNICO)
            .input("NOMBRE_CONTRIBUYENTE",incidencia.NOMBRE_CONTRIBUYENTE)
            .input("TELEFONO",incidencia.TELEFONO)
            .input("EMAIL",incidencia.EMAIL)
            .input("OBSERVACIONES",incidencia.OBSERVACIONES)
            .input("ESTATUS",incidencia.ESTATUS)
            .execute("UpdateIncidencia");
            return result;
    }
};

export default incidenciasModel;