import pool from "../database/database.js";
import sql from "mssql";

const menuUsuarioModel = {
  getAllMenuUsuario: async () => {
    try {
      const query = "CALL pa_select_menuUsuario";
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
      const query = "SELECT * FROM ctrl_menu_usuario  WHERE ID_PERFIL = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createMenuUsuario: async (data) => {
    try {
      const query = "CALL pa_insert_menuUsuario(?, ?)";
      const values = [data.ID_PERFIL, data.ID_MENU_HIJO];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateMenuUsuario: async (ID_PERFIL, data) => {
    try {
      const query = "CALL pa_update_menuUsuario(?, ?)";
      const values = [ID_PERFIL, data.ID_MENU_HIJO];
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
      const query = "CALL pa_delete_menuUsuario(?)";
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

export default menuUsuarioModel;
