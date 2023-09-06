import pool from "../database/database.js";
import sql from "mssql";

const inmuebleModel = {
  getAllInmuebles: async () => {
    try {
      const query = "SELECT * FROM ctrl_inmueble";
      const [rows] = await pool.execute(query);
      console.log(rows);
      pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getInmuebleById: async (id) => {
    try {
      let result = await pool
        .getConnection()
        .input("ID_INMUEBLE", id.ID_INMUEBLE)
        .query("SELECT * FROM ctrl_inmueble  WHERE ID_INMUEBLE = @ID_INMUEBLE");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  create: async (data) => {
    const connection = await pool();
    try {
      const query = "CALL pa_insert_inmueble(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_INMUEBLE,
        data.NUM_CONTRATO,
        data.CALLE,
        data.NUMERO_EXTERIOR,
        data.NUMERO_INTERIOR,
        data.CODIGO_POSTAL,
        data.NOMBRE_INMUEBLE,
        data.OBSERVACION,
        data.ID_COLONIA,
        data.ID_TIPO_INMUEBLE,
        data.ID_USUARIO,
      ];
      const [rows] = await pool.execute(query, values);
      connection.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  update: async (ID_INMUEBLE, data) => {
    try {
      await pool.query(
        "CALL pa_update_inmueble(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
      );
      const values = [
        ID_INMUEBLE,
        data.NUM_CONTRATO,
        data.CALLE,
        data.NUMERO_EXTERIOR,
        data.NUMERO_INTERIOR,
        data.CODIGO_POSTAL,
        data.NOMBRE_INMUEBLE,
        data.OBSERVACION,
        data.ID_COLONIA,
        data.ID_TIPO_INMUEBLE,
        data.ID_USUARIO,
      ];
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  delete: async (id) => {
    try {
      await pool.query("CALL ctrl_inmueble(?)", [id]);
    } catch (err) {
      console.log(err);
      return [];
    } finally {
    }
  },
};

export default inmuebleModel;
