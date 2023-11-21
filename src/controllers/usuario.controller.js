import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import usuarioModel from "../models/usuario.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const usuarioCtrl = {
  loginUsuario: async (req, res) => {
    const { username, password } = req.body;

    try {
      const usuario = await usuarioModel.login(username, password);
      res.status(200).json({
        code: 200,
        message: "success",
        message_details: "Login exitoso",
        data: usuario,
      });
    } catch (err) {
      console.error("Error en el login", err);
      res.status(401).json({ error: "Credenciales incorrectas" });
    }
  },
};

export default usuarioCtrl;
