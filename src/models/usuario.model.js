import pool from "../database/database.js";
import sql from "mssql";

const usuarioModel = {
  login: async (username, password) => {
    try {
      const query =
        "SELECT * FROM cat_usuario WHERE ID_USUARIO = ? AND CONTRASENA = ? AND ESTATUS = 1245";
      const result = await db.query(query, [username, password]);

      if (result.length > 0) {
        return result[0];
      } else {
        throw new Error("Credenciales incorrectas");
      }
    } catch (err) {
      throw new Error("Error en el proceso de login");
    }
  },
};

export default usuarioModel;
