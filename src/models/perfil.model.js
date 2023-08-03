import db from '../database/database.js';
import sql from 'mssql';
const pool = await db.connectDb();

const perfilModel = {
    getAllPerfil: async () => {
        try {
            let result = await pool.request()
                .query("SELECT * FROM Cat_Perfiles");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    getAllProyecto: async()=>{        
        try {
            let result = await pool.request()
                .query("SELECT * FROM CAT_PROYECTOS");
            return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}
export default perfilModel;