import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const estadoCtrl = {
  getAllEstado: async (req, res) => {
    try {
      res.json({
        code: 200,
        message: "succes",
        message_details: "Obtencion exitosa de estado",
        data,
      });
    } catch (err) {
      console.error("Error al obtener los estados", err);
      res.status(500).json({ error: "Error al obtener el estado" });
    }
  },

  getEstadoById: async (req, res) => {
    const { id } = req.params;

    try {
      if (estado) {
        res.status(200).json(estado);
      } else {
        res.status(400).json({ error: "Estado no encontrado" });
      }
    } catch (err) {
      console.error("Error alobtener el estado por ID", err);
      res.status(500).json({ error: "Error al obtener el estado por ID" });
    }
  },

  createEstado: async (req, res) => {
    const nuevoEstado = req.body;

    try {
      const estadoId = await create(nuevoEstado);
      res
        .status(201)
        .json({ id: estadoId, message: "Estado creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el estado", err);
      res.status(500).json({ error: "Error al crear el estado" });
    }
  },

  updateEstado: async (req, res) => {
    const { id } = req.param;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await Estado.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res.status(201).json({ message: "Estado actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Estado no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el estado");
      res.status(500).json({ error: "Error al actualizar el estado" });
    }
  },

  deleteEstado: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await Estado.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Estado elimando exitosamente" });
      } else {
        res.status(404).json({ error: "Estado no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el estado", err);
      res.status(500).json({ error: "Error al eliminar el esatdo" });
    }
  },
};

export default estadoCtrl;
