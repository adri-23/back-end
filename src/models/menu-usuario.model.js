import pool from "../database/database.js";
import sql from "mssql";

const menuUsuarioModel = {
  getAllMenuUsuario: async () => {
    try {
      const query = "CALL pa_select_inmueble";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getMenuUsuarioById: async (id) => {
    try {
      const query = "SELECT * FROM ctrl_inmueble  WHERE ID_INMUEBLE = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createMenuUsuario: async (data) => {
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
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateMenuUsuario: async (ID_INMUEBLE, data) => {
    try {
      const query = "CALL pa_update_inmueble(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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

  deleteMenuUsuario: async (id) => {
    try {
      const query = "CALL pa_delete_inmueble(?)";
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

export default menuUsuarioModel;
