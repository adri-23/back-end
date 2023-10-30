import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import perfilModel from "../models/perfil.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const perfilCtrl = {
  getAllPerfil: async (req, res) => {
    try {
      const perfil = await perfilModel.getAllPerfil();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de perfiles",
        data: perfil,
      });
    } catch (err) {
      console.error("Error al obtener el perfil");
      res.status(500).json({ error: "Error al obtener el perfil" });
    }
  },

  getPerfilById: async (req, res) => {
    const { id } = req.params;

    try {
      const perfil = await perfilModel.getPerfilById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de inmueble por ID",
        data: perfil,
      });
    } catch (err) {
      console.error("Error al obtener el perfil por ID", err);
      res.status(500).json({ error: "Error al obtener el perfil por ID" });
    }
  },

  createPerfil: async (req, res) => {
    const { ID_PERFIL, PERFIL, ESTATUS } = req.body;

    try {
      const perfil = await perfilModel.createPerfil({
        ID_PERFIL,
        PERFIL,
        ESTATUS,
      });
      res
        .status(201)
        .json({ id: perfil, message: "Perfil creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el perfil", err);
      res.status(500).json({ error: "Error al crear el perfil" });
    }
  },

  updatePerfil: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await perfilModel.updatePerfil(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({ message: "Perfil actualizado exitosamente" });
      } else {
        res.status(400).json({ error: "Perfil no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el perfil");
      res.status(500).json({ error: "Error al actualizar el perfil" });
    }
  },

  deletePerfil: async (req, res) => {
    const { id } = req.params;

    try {
      const filasAfectadas = await perfilModel.deletePerfil(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Perfil eliminado exitosamente" });
      } else {
        res.status(400).json({ error: "Error al eliminar el perfil" });
      }
    } catch (err) {
      console.error("Error al eliminar el perfil");
      res.status(500).json({ error: "Error al eliminar el perfil" });
    }
  },
};

export default perfilCtrl;
