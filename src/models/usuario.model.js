import pool from "../database/database.js";
import sql from "mssql";

const usuarioModel = {
  login: async (NOMBRE, CONTRASENA) => {
    try {
      const query =
        "SELECT * FROM cat_usuario WHERE NOMBRE = ? AND CONTRASENA = ?";
      const [rows, fields] = await pool.execute(query, [NOMBRE, CONTRASENA]);
      pool.end();
      return rows;
    } catch (err) {
      console.error("Error al realizar el login", err);
      throw new Error("Error al realizar el login");
    }
  },
};

export default usuarioModel;
