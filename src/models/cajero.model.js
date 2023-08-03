import db from "../database/database.js";
import sql from "mssql";
const pool = await db.connectDb();

const cajeroModel = {
  getCajeroByNumero: async (numero_cajero, id_proyecto) => {
    try {
      let result = await pool
        .request()
        .input("cajero", sql.Int, numero_cajero)
        .input("id_proyecto", sql.Int, id_proyecto)
        .query(
          "select * from getInfoCajeros where NUMERO = @cajero and ID_PROYECTO=@id_proyecto"
        );
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getCajerosByTecnico: async (tecnico, id_proyecto) => {
    try {
      let result = await pool
        .request()
        .input("ID_TECNICO", sql.Int, tecnico)
        .input("id_proyecto", sql.Int, id_proyecto)
        .query(
          "select * from getInfoCajeros where ID_TECNICO = @ID_TECNICO AND ID_PROYECTO=@id_proyecto"
        );
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getCajero: async (id_proyecto) => {
    try {
      let result = await pool
        .request()
        .input("id_proyecto", sql.Int, id_proyecto)
        .query("select * from getInfoCajeros where ID_PROYECTO=@id_proyecto");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  manageCajero: async (cajero) => {
    try {
      let result = await pool
        .request()
        .input("NUM_SERIE", cajero.NUM_SERIE)
        .input("NUMERO", cajero.NUMERO)
        .input("UBICACION_FISICA", cajero.UBICACION_FISICA)
        .input("CALLE", cajero.CALLE)
        .input("NUM_EXT", cajero.NUM_EXT)
        .input("NUM_INT", cajero.NUM_INT)
        .input("COLONIA", cajero.COLONIA)
        .input("CP", cajero.CP)
        .input("REFERENCIA", cajero.REFERENCIA)
        .input("MAC_ADDRESS", cajero.MAC_ADDRESS)
        .input("ID_TEAMVIEWER", cajero.ID_TEAMVIEWER)
        .input("PW_TEAMVIEWER", cajero.PW_TEAMVIEWER)
        .input("LATITUD", cajero.LATITUD)
        .input("LONGITUD", cajero.LONGITUD)
        .input("ID_ESTATUS", cajero.ID_ESTATUS)
        .input("ID_PROYECTO", cajero.ID_PROYECTO)
        .input("ID_ESTADO", cajero.ID_ESTADO)
        .input("ID_MUNICIPIO", cajero.ID_MUNICIPIO)
        .input("ID_TECNICO", cajero.ID_TECNICO)
        .input("OPERACION", cajero.OPERACION)
        .execute("ManageCajero");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  cancelaFolio: async (folio) => {
    try {
      let result = await pool
        .request()
        .input("FOLIO_CONTROL", folio)
        .execute("CancelaFolio");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};

export default cajeroModel;
