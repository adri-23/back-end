import pool from "../database/database.js";
import sql from "mssql";

const estadoModel = {
  getAllEstados: async () => {
    try {
      const query = "CALL pa_select_Estado";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getEstadoById: async (id) => {
    try {
      const query = "SELECT * FROM cat_estado  WHERE ID_ESTADO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createEstado: async (data) => {
    try {
      const query = "CALL pa_insert_Estado(?, ?, ?)";
      const values = [data.ID_ESTADO, data.NOMBRE, data.PAIS];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateEstado: async (ID_ESTADO, data) => {
    try {
      const query = "CALL pa_update_Estado(?, ?, ?)";
      const values = [ID_ESTADO, data.NOMBRE, data.PAIS];
      //console.log(ID_ESTADO, "///");
      const [rows] = await pool.execute(query, values);
      //console.log(rows);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  deleteEstado: async (id) => {
    try {
      const query = "CALL pa_delete_Estado(?)";
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

export default estadoModel;
