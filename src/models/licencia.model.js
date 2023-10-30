import pool from "../database/database.js";
import sql from "mssql";

const licenciaModel = {
  getAllLicencia: async () => {
    try {
      const query = "CALL pa_select_Licencia";
      const [rows] = await pool.execute(query);
      console.log(rows);
      //pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  getLicenciaById: async (id) => {
    try {
      const query = "SELECT * FROM cat_licencia  WHERE ID_LICENCIA = ?";
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },

  createLicencia: async (data) => {
    try {
      const query = "CALL pa_insert_Licencia(?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.ID_LICENCIA,
        data.FECHA_PAGO,
        data.VIGENCIA,
        data.TIPO_PAGO,
        data.PENALIZACION,
        data.REFERENCIA_PAGO,
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

  updateLicencia: async (ID_LICENCIA, data) => {
    try {
      const query = "CALL pa_update_Licencia(?, ?, ?, ?, ?, ?, ?)";
      const values = [
        ID_LICENCIA,
        data.FECHA_PAGO,
        data.VIGENCIA,
        data.TIPO_PAGO,
        data.PENALIZACION,
        data.REFERENCIA_PAGO,
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

  deleteLicencia: async (id) => {
    try {
      const query = "CALL pa_delete_Licencia(?)";
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

export default licenciaModel;
