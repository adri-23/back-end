import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const invitacionCtrl = {
  getAllInvitacion: async (req, res) => {
    try {
      //const invitacion = await invitacionModel.getAllInvitacion();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de invitaciones",
        data,
      });
    } catch (err) {
      console.error("Error al obtener las invitaciones", err);
      res.status(500).json({ error: "Error al obtener las invitaciones" });
    }
  },

  getInvitacionById: async (req, res) => {
    const { id } = req.params;

    try {
      //const invitacion = await invitacionModel.getInvitacionById(id);

      if (invitacion) {
        res.status(200).json(invitacion);
      } else {
        res.status(404).json({ error: "Invitacion no encontrado" });
      }
    } catch (err) {
      console.error("Error al obtener la invitacion por ID", err);
      res.status(500).json({ error: "Error al obtener la invitacion por ID" });
    }
  },

  createInvitacion: async (req, res) => {
    const nuevaInvitacion = req.body;

    try {
      const invitacionId = await create(nuevaInvitacion);
      res
        .status(201)
        .json({ id: invitacionId, message: "Invitacion creada exitosamente" });
    } catch (err) {
      console.error("Error al crear la invitacion", err);
      res.status(500).json({ error: "Error al crear la invitacion" });
    }
  },

  updateInvitacion: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await Invitacion.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Invitacion actualizada exitosamente" });
      } else {
        res.status(404).json({ error: "Invitacion no encontrada" });
      }
    } catch (err) {
      console.error("Error al actualizar la invitacion", err);
      res.status(500).json({ error: "Error al actualizar la invitacion" });
    }
  },

  deleteInvitacion: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await Invitacion.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Invitacion eliminada exitosamente" });
      } else {
        res.status(404).json({ error: "Invitacion no encontrada" });
      }
    } catch (err) {
      console.error("Error al eliminar la invitacion", err);
      res.status(500).json({ error: "Error al eliminar la invitacion" });
    }
  },
};

export default invitacionCtrl;
