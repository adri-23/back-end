import pool from "../database/database.js";
import sql from "mssql";

const tipoControlAccesoModel = {
  getAllTipoControlAcceso: async () => {
    try {
      const query = "CALL pa_select_tipoControlAcceso";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getTipoControlAccesoById: async (id) => {
    try {
      const query =
        "SELECT * FROM cat_tipo_control_acceso  WHERE ID_TIPO_CONTROL_ACCESO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createTipoControlAcceso: async (data) => {
    try {
      const query = "CALL pa_insert_tipoControlAcceso(?, ?, ?)";
      const values = [data.ID_TIPO_CONTROL_ACCESO, data.NOMBRE, data.STATUS];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateTipoControlAcceso: async (ID_TIPO_CONTROL_ACCESO, data) => {
    try {
      const query = "CALL pa_update_tipoControlAcceso(?, ?, ?)";
      const values = [ID_TIPO_CONTROL_ACCESO, data.NOMBRE, data.STATUS];
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

  deleteTipoControlAcceso: async (id) => {
    try {
      const query = "CALL pa_delete_tipoControlAcceso(?)";
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

export default tipoControlAccesoModel;
