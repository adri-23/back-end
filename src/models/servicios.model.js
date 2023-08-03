import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();

const servicioModel = {
    getServiciosByCajero: async (numCajero, idProyecto) => {
        try {
            let result = await pool.request()
            .input('cajero', sql.Int, numCajero)
            .input('id_proyecto',sql.Int,idProyecto)
            .query("SELECT * FROM getServiciosActivos WHERE NUMERO = @cajero and ID_PROYECTO=@id_proyecto");
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    },
    getServicios: async(ID_PROYECTO) => {
        try {
            let result = await pool.request()
            .input('id_proyecto',sql.Int,ID_PROYECTO)
            .query("SELECT * FROM getServicios WHERE ID_PROYECTO=@id_proyecto");
            return result
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    inServicio: async(servicio) =>{
        try {
            let result = await pool.request()
            .input("NUM_SERVICIO",servicio.NUM_SERVICIO)
            .input("ID_PROYECTO",servicio.ID_PROYECTO)
            .input("DESC_SERVICIO",servicio.DESC_SERVICIO)
            .input("CLAVE_CLIENTE",servicio.CLAVE_CLIENTE)
            .input("PRECIO_SERVICIO",servicio.PRECIO_SERVICIO)
            .input("VIGENCIA",servicio.VIGENCIA)
            .execute("InsertServicio");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    updateServicio: async(servicio) =>{
        try {
            let result = await pool.request()
            .input("ID_SERVICIO",servicio.ID_SERVICIO)
            .input("NUM_SERVICIO",servicio.NUM_SERVICIO)
            .input("ID_PROYECTO",servicio.ID_PROYECTO)
            .input("DESC_SERVICIO",servicio.DESC_SERVICIO)
            .input("CLAVE_CLIENTE",servicio.CLAVE_CLIENTE)
            .input("PRECIO_SERVICIO",servicio.PRECIO_SERVICIO)
            .input("ESTATUS",servicio.ESTATUS)
            .input("VIGENCIA",servicio.VIGENCIA)
            .execute("UpdateServicio");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    updateServicioActivo: async(servicioActivo)=>{
        try {
            let result = await pool.request()
            .input("NUMSERVICIO",servicioActivo.servicio.NUMSERVICIO)
            .input("NUM_CAJERO",servicioActivo.numCajero)
            .input("ESTATUS",servicioActivo.servicio.ESTATUS)
            .execute("UpdateServicioActivo");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    updateBloqueo: async(servicioActivo)=>{
        try {
            let result = await pool.request()
            .input("NUMSERVICIO",servicioActivo.servicio.NUMSERVICIO)
            .input("NUM_CAJERO",servicioActivo.num_cajero)
            .input("ESTATUS",servicioActivo.servicio.ESTATUS)
            .execute("UpdateServicioBloqueo");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}

export default servicioModel;