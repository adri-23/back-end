import pool from "../database/database.js";
import sql from "mssql";

const invitadoModel = {
  getAllInvitado: async () => {
    try {
      const query = "CALL pa_select_Invitado";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getInvitadoById: async (id) => {
    try {
      const query = "SELECT * FROM ctrl_invitado  WHERE ID_INVITADO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createIvitado: async (data) => {
    try {
      const query = "CALL pa_insert_Invitado(?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_INVITADO,
        data.NOMBRE,
        data.APELLIDO_PATERNO,
        data.APELLIDO_MATERNO,
        data.PLACA,
        data.PERSONA_ADICIONAL,
        data.INFORMACION_ADICIONAL,
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

  updateInvitado: async (ID_INVITADO, data) => {
    try {
      const query = "CALL pa_update_Invitado(?, ?, ?, ?, ?, ?, ?)";
      const values = [
        ID_INVITADO,
        data.NOMBRE,
        data.APELLIDO_PATERNO,
        data.APELLIDO_MATERNO,
        data.PLACA,
        data.PERSONA_ADICIONAL,
        data.INFORMACION_ADICIONAL,
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

  deleteInvitado: async (id) => {
    try {
      const query = "CALL pa_delete_Invitado(?)";
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

export default invitadoModel;
