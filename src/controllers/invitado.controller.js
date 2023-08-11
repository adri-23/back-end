import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const invitadoCtrl = {
  getAllInvitado: async (req, res) => {
    try {
      //const invitado = await invitadoModel.getAllInvitado();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de invitados",
        data,
      });
    } catch (err) {
      console.error("Error al obtener los invitados", err);
      res.status(500).json({ error: "Error al obtener los invitados" });
    }
  },

  getInvitadoById: async (req, res) => {
    const { id } = req.params;

    try {
      //const invitado = await invitadoModel.getInvitadoById(id);

      if (invitado) {
        res.status(200).json(invitado);
      } else {
        res.status(404).json({ error: "Invitado no encontrado" });
      }
    } catch (err) {
      console.error("Error al obtener el invitado por ID", err);
      res.status(500).json({ error: "Error al obtener el invitado por ID" });
    }
  },

  createInvitado: async (req, res) => {
    const nuevoInvitado = req.body;

    try {
      const invitadoId = await create(nuevoInvitado);
      res
        .status(201)
        .json({ id: invitadoId, message: "Invitado creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el invitado", err);
      res.status(500).json({ error: "Error al crear el invitado" });
    }
  },

  updateInvitado: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await Invitado.update(id, datosActualizados);

      if (filasAfectadas > 0) {
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
      const filasAfectadas = await Invitado.remove(id);

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
