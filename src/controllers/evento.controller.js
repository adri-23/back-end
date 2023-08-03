import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const eventoCtrl = {
  getAllevento: async (req, res) => {
    try {
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de evento",
        data,
      });
    } catch (err) {
      console.error("Error al obtener el evento");
      res.status(500).json({ error: "Error al obtener el evento" });
    }
  },

  getEventoById: async (req, res) => {
    const { id } = req.params;

    try {
      if (tipoEvento) {
        res.status(200).json(tipoEvento);
      } else {
        res.status(404).json({ error: "Error al obtener tipo de evento" });
      }
    } catch (err) {
      console.error("Error al obtener tipo de evento por ID", err);
      res.status(500).json({ error: "Error al obtener el evento ID" });
    }
  },

  createEvento: async (req, res) => {
    const nuevoEvento = req.body;

    try {
      const eventoId = await create(nuevoEvento);
      res
        .status(201)
        .json({ id: eventoId, message: "Evento creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el de evento", err);
      res.status(500).json({ error: "Error al crear el evento" });
    }
  },

  updateEvento: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await evento.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: " Evento actualizado exitosamente" });
      } else {
        res.status(400).json({ error: "Evento no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el evento", err);
      res.status(500).json({ error: "Error al actualizar el evento" });
    }
  },

  deleteEvento: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await evento.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Evento eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "evento no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el evento", err);
      res.status(500).json({ error: "Error al eliminar el inmueble" });
    }
  },
};

export default eventoCtrl;
