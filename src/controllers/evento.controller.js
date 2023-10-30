import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import eventoModel from "../models/evento.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const eventoCtrl = {
  getAllevento: async (req, res) => {
    try {
      const evento = await eventoModel.getAllEventos();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de evento",
        data: evento,
      });
    } catch (err) {
      console.error("Error al obtener el evento");
      res.status(500).json({ error: "Error al obtener el evento" });
    }
  },

  getEventoById: async (req, res) => {
    const { id } = req.params;

    try {
      const evento = await eventoModel.getEventoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de Evento por ID",
        data: evento,
      });
    } catch (err) {
      console.error("Error al obtener tipo de evento por ID", err);
      res.status(500).json({ error: "Error al obtener el evento ID" });
    }
  },

  createEvento: async (req, res) => {
    const {
      ID_EVENTO,
      NOMBRE,
      OBSERVACION,
      FECHA_HORA_INICIO,
      FECHA_HORA_FIN,
      STATUS,
      ID_TIPO_EVENTO,
      ID_USUARIO,
    } = req.body;

    try {
      const evento = await eventoModel.createEvento({
        ID_EVENTO,
        NOMBRE,
        OBSERVACION,
        FECHA_HORA_INICIO,
        FECHA_HORA_FIN,
        STATUS,
        ID_TIPO_EVENTO,
        ID_USUARIO,
      });
      res
        .status(201)
        .json({ id: evento, message: "Evento creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el de evento", err);
      res.status(500).json({ error: "Error al crear el evento" });
    }
  },

  updateEvento: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await eventoModel.updateEvento(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
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
      const filasAfectadas = await eventoModel.deleteEvento(id);

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
