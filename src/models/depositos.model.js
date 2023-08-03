import db from '../database/database.js';
import sql from 'mssql';
const pool = await  db.connectDb();
const depositosModel = {
    getDepositos: async(id_proyecto,id_paquete) =>{
        try {
            let result = await pool.request()
            .input('id_proyecto', sql.Int, id_proyecto)
            .input('id_paquete', sql.Int, id_paquete)
            .query("select * from getDepositos where ID_PROYECTO=@id_proyecto AND ID_PAQUETE = @id_paquete");
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    inDeposito: async(deposito) =>{
        try {
            let result = await pool.request()
            .input("ID_BANCO",deposito.ID_BANCO)
            .input("NUM_SUCURSAL",deposito.NUM_SUCURSAL)
            .input("SUCURSAL",deposito.SUCURSAL)
            .input("FOLIO",deposito.FOLIO)
            .input("NUM_AUTORIZACION",deposito.NUM_AUTORIZACION)
            .input("FECHA_DEPOSITO",deposito.FECHA_DEPOSITO)
            .input("TIPO_DEPOSITO",deposito.TIPO_DEPOSITO)
            .input("FORMA_DEPOSITO",deposito.FORMA_DEPOSITO)
            .input("CUENTA_CLAVE",deposito.CUENTA_CLAVE)
            .input("MONTO_DEPOSITO",deposito.MONTO_DEPOSITO)
            .input("IMAGEN_DEPOSITO",deposito.IMAGEN_DEPOSITO)
            .input("ID_PAQUETE",deposito.ID_PAQUETE)
            .input("ID_USUARIO",deposito.ID_USUARIO)
            .input("ID_PROYECTO",deposito.ID_PROYECTO)
            .input("OBSERVACIONES",deposito.OBSERVACIONES)
            .execute("InsertDeposito");
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    updateDeposito: async(deposito)=>{
        try {
            let result = await pool.request()
            .input("ID_DEPOSITO",deposito.ID_DEPOSITO)
            .input("ID_BANCO",deposito.ID_BANCO)
            .input("NUM_SUCURSAL",deposito.NUM_SUCURSAL)
            .input("SUCURSAL",deposito.SUCURSAL)
            .input("FOLIO",deposito.FOLIO)
            .input("NUM_AUTORIZACION",deposito.NUM_AUTORIZACION)
            .input("FECHA_DEPOSITO",deposito.FECHA_DEPOSITO)
            .input("TIPO_DEPOSITO",deposito.TIPO_DEPOSITO)
            .input("FORMA_DEPOSITO",deposito.FORMA_DEPOSITO)
            .input("CUENTA_CLAVE",deposito.CUENTA_CLAVE)
            .input("MONTO_DEPOSITO",deposito.MONTO_DEPOSITO)
            .input("IMAGEN_DEPOSITO",deposito.IMAGEN_DEPOSITO)
            .input("ID_PAQUETE",deposito.ID_PAQUETE)
            .input("ID_USUARIO",deposito.ID_USUARIO)
            .input("ID_PROYECTO",deposito.ID_PROYECTO)
            .input("OBSERVACIONES",deposito.OBSERVACIONES)
            .execute("UpdateDeposito");
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    deleteDeposito: async(id_deposito)=>{
        try {
            let result = await pool.request()
            .input("ID_DEPOSITO",id_deposito)
            .execute("DeleteDeposito");
        return result;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
};

export default depositosModel;