import pool from "../database/database.js";
import sql from "mssql";

const tipoInmuebleModel = {
  getAllTipoInmueble: async () => {
    try {
      const query = "CALL pa_select_tipoInmueble";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getTipoInmuebleById: async (id) => {
    try {
      const query =
        "SELECT * FROM cat_tipo_inmueble  WHERE ID_TIPO_INMUEBLE = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createTipoInmueble: async (data) => {
    try {
      const query = "CALL pa_insert_tipoInmueble(?, ?)";
      const values = [data.ID_TIPO_INMUEBLE, data.TIPO];
      //console.log(data, "///");
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  updateTipoInmueble: async (ID_TIPO_INMUEBLE, data) => {
    try {
      const query = "CALL pa_update_tipoInmueble(?, ?)";
      const values = [ID_TIPO_INMUEBLE, data.TIPO];
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

  deleteTipoInmueble: async (id) => {
    try {
      const query = "CALL pa_delete_tipoInmueble(?)";
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

export default tipoInmuebleModel;
