import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import invitadoModel from "../models/invitado.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const invitadoCtrl = {
  getAllInvitados: async (req, res) => {
    try {
      const invitado = await invitadoModel.getAllInvitado();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de invitados",
        data: invitado,
      });
    } catch (err) {
      console.error("Error al obtener los invitados", err);
      res.status(500).json({ error: "Error al obtener los invitados" });
    }
  },

  getInvitadoById: async (req, res) => {
    const { id } = req.params;

    try {
      const invitado = await invitadoModel.getInvitadoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de invitado por ID",
        data: invitado,
      });
    } catch (err) {
      console.error("Error al obtener el invitado por ID", err);
      res.status(500).json({ error: "Error al obtener el invitado por ID" });
    }
  },

  createInvitado: async (req, res) => {
    const {
      ID_INVITADO,
      NOMBRE,
      APELLIDO_PATERNO,
      APELLIDO_MATERNO,
      PLACA,
      PERSONA_ADICIONAL,
      INFORMACION_ADICIONAL,
    } = req.body;

    try {
      const invitado = await invitadoModel.createIvitado({
        ID_INVITADO,
        NOMBRE,
        APELLIDO_PATERNO,
        APELLIDO_MATERNO,
        PLACA,
        PERSONA_ADICIONAL,
        INFORMACION_ADICIONAL,
      });
      res
        .status(201)
        .json({ id: invitado, message: "Invitado creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el invitado", err);
      res.status(500).json({ error: "Error al crear el invitado" });
    }
  },

  updateInvitado: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await invitadoModel.updateInvitado(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({ message: "Invitado actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Invitado no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el invitado", err);
      res.status(500).json({ error: "Error al actualizar el invitado" });
    }
  },

  deleteInvitado: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await invitadoModel.deleteInvitado(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Invitado eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Invitado no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el invitado", err);
      res.status(500).json({ error: "Error al eliminar el invitado" });
    }
  },
};

export default invitadoCtrl;
