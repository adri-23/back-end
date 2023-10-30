import pool from "../database/database.js";
import sql from "mssql";

const invitacionModel = {
  getAllInvitacion: async () => {
    try {
      const query = "CALL pa_select_Invitacion";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getInvitacionById: async (id) => {
    try {
      const query = "SELECT * FROM ctrl_invitacion  WHERE ID_INVITADO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createInvitacion: async (data) => {
    try {
      const query = "CALL pa_insert_Invitacion(?, ?, ?)";
      const values = [data.ID_INVITADO, data.ID_EVENTO, data.CODIGO_ACCESO];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateInvitacion: async (ID_INVITADO, data) => {
    try {
      const query = "CALL pa_update_Invitacion(?, ?, ?)";
      const values = [ID_INVITADO, data.ID_EVENTO, data.CODIGO_ACCESO];
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

  deleteInvitacion: async (id) => {
    try {
      const query = "CALL pa_delete_Invitacion(?)";
      const [rows] = await pool.execute(query, [id]);
      //pool.end();
      return rows.affectedRows;
    } catch (err) {
      console.log(err);
      return [];
    } finally {
    }
  },
};

export default invitacionModel;
