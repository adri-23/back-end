import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import menuUsuarioModel from "../models/menu-usuario.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const menuUsuarioCtrl = {
  getAllMenuUsuario: async (req, res) => {
    try {
      const menuUsuario = await menuUsuarioModel.getAllMenuUsuario();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de menu usuarios",
        data: menuUsuario,
      });
    } catch (err) {
      console.error("Error al obtener menu usuarios", err);
      res.status(500).json({ error: "Error al obtener menu usuarios" });
    }
  },

  getMenuUsuarioById: async (req, res) => {
    const { id } = req.params;
    try {
      const menuUsuario = await menuUsuarioModel.getMenuUsuarioById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de menu usuario por ID",
        data: menuUsuario,
      });
    } catch (err) {
      console.error("Error al obtener menu usuario por ID", err);
      res.status(500).json({ error: "Error al obtener menu usuario por ID" });
    }
  },

  createMenuUsuario: async (req, res) => {
    const { ID_PERFIL, ID_MENU_HIJO } = req.body;

    try {
      const menuUsuario = await menuUsuarioModel.createMenuUsuario({
        ID_PERFIL,
        ID_MENU_HIJO,
      });
      res
        .status(201)
        .json({ id: menuUsuario, message: "Menu usuario creado exitosamente" });
    } catch (err) {
      console.error("Error al crear menu usuario", err);
      res.status(500).json({ error: "Error al crear menu usuario" });
    }
  },

  updateMenuUsuario: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await menuUsuarioModel.updateMenuUsuario(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res
          .status(200)
          .json({ message: "Menu usuario actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Menu usuario no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar menu usuario", err);
      res.status(500).json({ error: "Error al actualizar menu usuario" });
    }
  },

  deleteMenuUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await menuUsuarioModel.deleteMenuUsuario(id);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Menu usuario eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Menu usuario no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar menu usuario", err);
      res.status(500).json({ error: "Error al eliminar menu usuario" });
    }
  },
};

export default menuUsuarioCtrl;
