import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const licenciaCtrl = {
  getAllLicencia: async (req, res) => {
    try {
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de licencia",
        data,
      });
    } catch (err) {
      console.error("Error al obtener la licencia");
      res.status(500).json({ error: "Error al obtener la licencia" });
    }
  },

  getLicenciaById: async (req, res) => {
    const { id } = req.params;

    try {
      if (tipoLicencia) {
        res.status(200).json(tipoLicencia);
      } else {
        res.status(400).json({ error: "Error al obtener la licencia" });
      }
    } catch (err) {
      console.error("Error al obtener la licencia por ID", err);
      res.status(500).json({ error: "Error al obtener licencia por ID" });
    }
  },

  createLicencia: async (req, res) => {
    const nuevaLicencia = req.body;

    try {
      const licenciaId = await create(nuevaLicencia);
      res
        .status(201)
        .json({ id: licenciaId, message: "licencia creada exitosamente" });
    } catch (err) {
      console.error("Error al crear la licencia", err);
      res.status(500).json({ error: "Error al crear la licencia" });
    }
  },

  updateLicencia: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await evento.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Licencia actualizada eitosamente " });
      } else {
        res.status(400).json({ error: "Licencia no encontrada" });
      }
    } catch (err) {
      console.error("Error al actualizar la licencia");
      res.status(500).json({ error: "Error al actualizar la licencia" });
    }
  },

  deleteLicencia: async (req, res) => {
    const { id } = req.params;

    try {
      const filasAfectadas = await evento.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Licencia eliminada exitosamente" });
      } else {
        res.status(400).json({ error: "Error al eliminar la licencia " });
      }
    } catch (err) {
      console.error("Error al eliminar la licencia", err);
      res.status(500).json({ error: "Error al eliminar la licencia " });
    }
  },
};

export default licenciaCtrl;
