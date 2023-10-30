import pool from "../database/database.js";
import sql from "mssql";

const menuHijoModel = {
  getAllMenuHijo: async () => {
    try {
      const query = "CALL pa_select_menuHijo";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getMenuHijoById: async (id) => {
    try {
      const query = "SELECT * FROM cat_menuhijo  WHERE ID_MENU_HIJO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createMenuHijo: async (data) => {
    try {
      const query = "CALL pa_insert_menuHijo(?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_MENU_HIJO,
        data.URL,
        data.NOMBRE,
        data.ICONO,
        data.STATUS,
        data.ID_MENU_PADRE,
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

  updateMenuHijo: async (ID_MENU_HIJO, data) => {
    try {
      const query = "CALL pa_update_menuHijo(?, ?, ?, ?, ?, ?)";
      const values = [
        ID_MENU_HIJO,
        data.URL,
        data.NOMBRE,
        data.ICONO,
        data.STATUS,
        data.ID_MENU_PADRE,
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

  deleteMenuHijo: async (id) => {
    try {
      const query = "CALL pa_delete_menuHijo(?)";
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

export default menuHijoModel;
