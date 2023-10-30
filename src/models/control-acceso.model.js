import pool from "../database/database.js";
import sql from "mssql";

const controlAccesoModel = {
  getControlAcceso: async () => {
    try {
      const query = "CALL pa_select_controlAcceso";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getControlAccesoById: async (id) => {
    try {
      const query =
        "SELECT * FROM ctrl_control_acceso  WHERE ID_CONTROL_ACCESO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createControlAcceso: async (data) => {
    try {
      const query = "CALL pa_insert_ControlAcceso(?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_CONTROL_ACCESO,
        data.FECHA_HORA,
        data.OBSERVACION,
        data.ID_INMUEBLE,
        data.ID_USUARIO,
        data.ID_TIPO_CONTROL_ACCESO,
        data.ID_INVITADO,
        data.ID_TIPO_ACCESO,
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

  updateControlAcceso: async (ID_CONTROL_ACCESO, data) => {
    try {
      const query = "CALL pa_update_controlAcceso(?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        ID_CONTROL_ACCESO,
        data.FECHA_HORA,
        data.OBSERVACION,
        data.ID_INMUEBLE,
        data.ID_USUARIO,
        data.ID_TIPO_CONTROL_ACCESO,
        data.ID_INVITADO,
        data.ID_TIPO_ACCESO,
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

  deleteControlAcceso: async (id) => {
    try {
      const query = "CALL pa_delete_controlAcceso(?)";
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

export default controlAccesoModel;
