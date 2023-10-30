import pool from "../database/database.js";
import sql from "mssql";

const coloniaModel = {
  getAllColonia: async () => {
    try {
      const query = "CALL pa_select_Colonia";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getColoniaId: async (id) => {
    try {
      const query = "SELECT * FROM cat_colonia  WHERE ID_COLONIA = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createColonia: async (data) => {
    try {
      const query = "CALL pa_insert_Colonia(?, ?, ?, ?)";
      const values = [
        data.ID_COLONIA,
        data.NOMBRE,
        data.CODIGO_POSTAL,
        data.ID_MUNICIPIO,
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

  updateColonia: async (ID_COLONIA, data) => {
    try {
      const query = "CALL pa_update_Colonia(?, ?, ?, ?)";
      const values = [
        ID_COLONIA,
        data.NOMBRE,
        data.CODIGO_POSTAL,
        data.ID_MUNICIPIO,
      ];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      //console.log(rows);
      //pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  deleteColonia: async (id) => {
    try {
      const query = "CALL pa_delete_Colonia(?)";
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

export default coloniaModel;
