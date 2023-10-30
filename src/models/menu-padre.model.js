import pool from "../database/database.js";
import sql from "mssql";

const menuPadreModel = {
  getAllMenuPadre: async () => {
    try {
      const query = "CALL pa_select_menupadre";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getMenuPadreById: async (id) => {
    try {
      const query = "SELECT * FROM cat_menupadre  WHERE ID_MENU_PADRE = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createMenuPadre: async (data) => {
    try {
      const query = "CALL pa_insert_menuPadre(?, ?, ?, ?)";
      const values = [data.ID_MENU_PADRE, data.NOMBRE, data.ICONO, data.STATUS];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateMenuPadre: async (ID_MENU_PADRE, data) => {
    try {
      const query = "CALL pa_update_menupadre(?, ?, ?, ?)";
      const values = [ID_MENU_PADRE, data.NOMBRE, data.ICONO, data.STATUS];
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

  deleteMenuPadre: async (id) => {
    try {
      const query = "CALL pa_delete_menupadre(?)";
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

export default menuPadreModel;
