import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import tipoEventoModel from "../models/tipo-evento.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const tipoEventoCtrl = {
  getAllTipoEvento: async (req, res) => {
    try {
      const tipoEvento = await tipoEventoModel.getAllTipoEvento();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de tipos de Eventos",
        data: tipoEvento,
      });
    } catch (err) {
      console.error("Error al obtener los tipos de eventos", err);
      res.status(500).json({ error: "Error al obtener los tipos de eventos" });
    }
  },

  getTipoEventoById: async (req, res) => {
    const { id } = req.params;

    try {
      const tipoEvento = await tipoEventoModel.getTipoEventoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de tipo de evento por ID",
        data: tipoEvento,
      });
    } catch (err) {
      console.error("Error al obtener el tipo de evento por ID", err);
      res
        .status(500)
        .json({ error: "Error al obtener el tipo de evento por ID" });
    }
  },

  createTipoEvento: async (req, res) => {
    const { ID_TIPO_EVENTO, TIPO } = req.body;

    try {
      const tipoEvento = await tipoEventoModel.createTipoEvento({
        ID_TIPO_EVENTO,
        TIPO,
      });
      res.status(201).json({
        id: tipoEvento,
        message: "Tipo de evento creado exitosamente",
      });
    } catch (err) {
      console.error("Error al crear el tipo de evento", err);
      res.status(500).json({ error: "Error al crear el tipo de evento" });
    }
  },

  updateTipoEvento: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await tipoEventoModel.updateTipoEvento(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res
          .status(200)
          .json({ message: "Tipo de evento actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "tipo de evento no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el tipo de evento", err);
      res.status(500).json({ error: "Error al actualizar el tipo de evento" });
    }
  },

  deleteTipoEvento: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await tipoEventoModel.deleteTipoEvento(id);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Tipo de evento eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Tipo  de evento no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el tipo de evento", err);
      res.status(500).json({ error: "Error al eliminar el tipo de evento" });
    }
  },
};

export default tipoEventoCtrl;
