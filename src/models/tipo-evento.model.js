import pool from "../database/database.js";
import sql from "mssql";

const tipoEventoModel = {
  getAllTipoEvento: async () => {
    try {
      const query = "CALL pa_select_tipoEvento";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getTipoEventoById: async (id) => {
    try {
      const query = "SELECT * FROM cat_tipo_evento  WHERE ID_TIPO_EVENTO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createTipoEvento: async (data) => {
    try {
      const query = "CALL pa_insert_tipoEvento(?, ?)";
      const values = [data.ID_TIPO_EVENTO, data.TIPO];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateTipoEvento: async (ID_TIPO_EVENTO, data) => {
    try {
      const query = "CALL pa_update_tipoEvento(?, ?)";
      const values = [ID_TIPO_EVENTO, data.TIPO];
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

  deleteTipoEvento: async (id) => {
    try {
      const query = "CALL pa_delete_tipoEvento(?)";
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

export default tipoEventoModel;
