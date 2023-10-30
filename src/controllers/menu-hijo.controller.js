import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import menuHijoModel from "../models/menu-hijo.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const menuHijoCtrl = {
  getAllMenuHijo: async (req, res) => {
    try {
      const menuHijo = await menuHijoModel.getAllMenuHijo();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de menu hijos",
        data: menuHijo,
      });
    } catch (err) {
      console.error("Error al obtener menu hijos", err);
      res.status(500).json({ error: "Error al obtener menu hijos" });
    }
  },

  getMenuHijoById: async (req, res) => {
    const { id } = req.params;

    try {
      const menuHijo = await menuHijoModel.getMenuHijoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de menu hijo por ID",
        data: menuHijo,
      });
    } catch (err) {
      console.error("Error al obtener menu hijo por ID", err);
      res.status(500).json({ error: "Error al obtener menu hijo por ID" });
    }
  },

  createMenuHijo: async (req, res) => {
    const { ID_MENU_HIJO, URL, NOMBRE, ICONO, STATUS, ID_MENU_PADRE } =
      req.body;

    try {
      const menuHijo = await menuHijoModel.createMenuHijo({
        ID_MENU_HIJO,
        URL,
        NOMBRE,
        ICONO,
        STATUS,
        ID_MENU_PADRE,
      });
      res
        .status(201)
        .json({ id: menuHijo, message: "Menu hijo creado exitosamente" });
    } catch (err) {
      console.error("Error al crear Menu hijo", err);
      res.status(500).json({ error: "Error al crear Menu hijo" });
    }
  },

  updateMenuHijo: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await menuHijoModel.updateMenuHijo(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({ message: "Menu hijo actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Menu hijo no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar Menu hijo", err);
      res.status(500).json({ error: "Error al actualizar Menu hijo" });
    }
  },

  deleteMenuHijo: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await menuHijoModel.deleteMenuHijo(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Menu hijo eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Menu hijo no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar menu hijo", err);
      res.status(500).json({ error: "Error al eliminar menu hijo" });
    }
  },
};

export default menuHijoCtrl;
