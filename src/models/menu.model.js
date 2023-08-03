import db from '../database/database.js';
import sql from 'mssql';
const pool = await db.connectDb();

const menuModel = {
    getMenu: async(ID_PROYECTO) => {//falta agregar ID_PROYECTO a la tabla CAT_MENU
        try {
            let result = await pool.request().query(`select * from getMenu`);
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getUsuarioMenu: async(id_user) => {
        try {
            let result = await pool.request()
                .input('id_user', sql.Int, id_user)
                .query("SELECT * from getDataMenu where ID_USUARIO = @id_user ");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    inDetalleMenu: async(params)=>{
        try {
            let result = await pool.request()
            .input("ID_USUARIO",params.ID_USUARIO) 
            .input("ID_MENU",params.ID_MENU)
            .input("ESTATUS",params.ESTATUS)
            .execute("ManageMenuUsuario"); 
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}

export default menuModel;