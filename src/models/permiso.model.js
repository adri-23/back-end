import pool from "../database/database.js";
import sql from "mssql";

const permisoModel = {
  getAllPermisos: async () => {
    try {
      const query = "CALL pa_select_permiso";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getPermisoById: async (id) => {
    try {
      const query = "SELECT * FROM cat_permiso  WHERE ID_PERMISO = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createPermiso: async (data) => {
    try {
      const query = "CALL pa_insert_permiso(?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_PERMISO,
        data.CREAR,
        data.ACTUALIZAR,
        data.BORRAR,
        data.VER,
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

  updatePermiso: async (ID_PERMISO, data) => {
    try {
      const query = "CALL pa_update_permiso(?, ?, ?, ?, ?, ?)";
      const values = [
        ID_PERMISO,
        data.CREAR,
        data.ACTUALIZAR,
        data.BORRAR,
        data.VER,
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

  deletePermiso: async (id) => {
    try {
      const query = "CALL pa_delete_permiso(?)";
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

export default permisoModel;
