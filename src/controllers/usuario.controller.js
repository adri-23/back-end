import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import usuarioModel from "../models/usuario.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const usuarioCtrl = {
  loginUsuario: async (req, res) => {
    const { NOMBRE, CONTRASENA } = req.body;

    try {
      const usuarioEncontrado = await usuarioModel.login(NOMBRE, CONTRASENA);
      if (usuarioEncontrado) {
        res.json({
          code: 200,
          message: "success",
          message_details: "Inicio de sesión exitoso",
          data: usuarioEncontrado,
        });
      } else {
        res.status(401).json({ error: "Credenciales incorrectas" });
      }
    } catch (err) {
      console.error("Error al realizar el login", err);
      res.status(500).json({ error: "Error al realizar el login" });
    }
  },
};

export default usuarioCtrl;
