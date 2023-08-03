import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();
const monitoreoModel = {
    getMonitoreo: async (ID_PROYECTO) => {
        try {
            let result = await pool.request()
            .input('ID_PROYECTO', sql.Int, ID_PROYECTO)
            .query("select * from getMonitoreo where ID_PROYECTO=@ID_PROYECTO");
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    },
}

export default monitoreoModel;