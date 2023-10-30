import pool from "../database/database.js";
import sql from "mssql";

const tipoAccesoModel = {
  getAllAcessos: async () => {
    try {
      const query = "CALL pa_select_tipoAcceso";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getTipoAccesoById: async (id) => {
    try {
      const query = "SELECT * FROM cat_tipo_acceso  WHERE ID_TIPO_ACCESO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createTipoAcceso: async (data) => {
    try {
      const query = "CALL pa_insert_tipoAcceso(?, ?)";
      const values = [data.ID_TIPO_ACCESO, data.NOMBRE];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateTipoAcceso: async (ID_TIPO_ACCESO, data) => {
    try {
      const query = "CALL pa_update_tipoAcceso(?, ?)";
      const values = [ID_TIPO_ACCESO, data.NOMBRE];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      //console.log(rows);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  deleteTipoAcceso: async (id) => {
    try {
      const query = "CALL pa_delete_tipoAcceso(?)";
      const [rows] = await pool.execute(query, [id]);
      pool.end();
      return rows.affectedRows;
    } catch (err) {
      console.log(err);
      return [];
    } finally {
    }
  },
};

export default tipoAccesoModel;
