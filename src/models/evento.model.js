import pool from "../database/database.js";
import sql from "mssql";

const eventoModel = {
  getAllEventos: async () => {
    try {
      const query = "CALL pa_select_Evento";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getEventoById: async (id) => {
    try {
      const query = "SELECT * FROM ctrl_evento  WHERE ID_EVENTO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createEvento: async (data) => {
    try {
      const query = "CALL pa_insert_Evento(?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_EVENTO,
        data.NOMBRE,
        data.OBSERVACION,
        data.FECHA_HORA_INICIO,
        data.FECHA_HORA_FIN,
        data.STATUS,
        data.ID_TIPO_EVENTO,
        data.ID_USUARIO,
      ];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      //pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateEvento: async (ID_EVENTO, data) => {
    try {
      const query = "CALL pa_update_Evento(?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        ID_EVENTO,
        data.NOMBRE,
        data.OBSERVACION,
        data.FECHA_HORA_INICIO,
        data.FECHA_HORA_FIN,
        data.STATUS,
        data.ID_TIPO_EVENTO,
        data.ID_USUARIO,
      ];
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

  deleteEvento: async (id) => {
    try {
      const query = "CALL pa_delete_Evento(?)";
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

export default eventoModel;
