import pool from "../database/database.js";
import sql from "mssql";

const usuarioModel = {
  login: async (NOMBRE, CONTRASENA) => {
    try {
      const query =
        "SELECT * FROM cat_usuario WHERE NOMBRE = ? AND CONTRASENA = ?";
      const [rows, fields] = await pool.execute(query, [NOMBRE, CONTRASENA]);
      //pool.end();
      return rows;
    } catch (err) {
      console.error("Error al realizar el login", err);
      throw new Error("Error al realizar el login");
    }
  },

  insert: async (user) => {
    try {
      const query =
        "CALL pa_insert_Usuario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        user.ID_USUARIO,
        user.NOMBRE,
        user.AP_PATERNO,
        user.AP_MATERNO,
        user.CURP,
        user.RFC,
        user.FECHA_NACIMIENTO,
        user.TELEFONO,
        user.EMAIL,
        user.USUARIO,
        user.CONTRASENA,
        user.ESTATUS,
        user.FECHA_ALTA,
        user.FECHA_BAJA,
        user.ID_ALTA,
        user.ID_BAJA,
        user.FECHA_VIGENCIA,
        user.ID_PERFIL,
      ];
      const [rows] = await pool.execute(query, values);
      pool.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    } finally {
    }
  },
};

export default usuarioModel;
