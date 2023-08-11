import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const menuPadreCtrl = {
  getAllMenuPadre: async (req, res) => {
    try {
      const menuPadre = await menuPadreModel.getAllMenuPadre();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de menu padre",
        data,
      });
    } catch (err) {
      console.error("Error al obtener los menu padre", err);
      res.status(500).json({ error: "Error al obtener los menu padre" });
    }
  },

  getMenuPadreById: async (req, res) => {
    const { id } = req.params;

    try {
      const menuPadre = await menuPadreModel.getMenuPadreById(id);

      if (menuPadre) {
        res.status(200).json(menuPadre);
      } else {
        res.status(404).json({ error: "menu padre no encontrado" });
      }
    } catch (err) {
      console.error("Error al obtener el menu padre por ID", err);
      res.status(500).json({ error: "Error al obtener el menu padre por ID" });
    }
  },

  createMenuPadre: async (req, res) => {
    const nuevomenuPadre = req.body;

    try {
      const menuPadreId = await create(nuevomenuPadre);
      res
        .status(201)
        .json({ id: menuPadreId, message: "menu padre creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el menu padre", err);
      res.status(500).json({ error: "Error al crear el menu padre" });
    }
  },

  updateMenuPadre: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await menuPadre.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "menu padre actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "menu padre no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el menu padre", err);
      res.status(500).json({ error: "Error al actualizar el menu padre" });
    }
  },

  deleteMenuPadre: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await menuPadre.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "menu padre eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "menu padre no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el menu padre", err);
      res.status(500).json({ error: "Error al eliminar el menu padre" });
    }
  },
};

export default menuPadreCtrl;
