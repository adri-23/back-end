import pool from "../database/database.js";
import sql from "mssql";

const perfilModel = {
  getAllPerfil: async () => {
    try {
      const query = "CALL pa_select_perfil";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getPerfilById: async (id) => {
    try {
      const query = "SELECT * FROM cat_perfil  WHERE ID_PERFIL = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createPerfil: async (data) => {
    try {
      const query = "CALL pa_insert_perfil(?, ?, ?)";
      const values = [data.ID_PERFIL, data.PERFIL, data.ESTATUS];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updatePerfil: async (ID_PERFIL, data) => {
    try {
      const query = "CALL pa_update_perfil(?, ?, ?)";
      const values = [ID_PERFIL, data.PERFIL, data.ESTATUS];
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

  deletePerfil: async (id) => {
    try {
      const query = "CALL pa_delete_perfil(?)";
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

export default perfilModel;
