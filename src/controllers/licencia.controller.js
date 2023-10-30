import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import licenciaModel from "../models/licencia.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const licenciaCtrl = {
  getAllLicencia: async (req, res) => {
    try {
      const licencia = await licenciaModel.getAllLicencia();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de licencias",
        data: licencia,
      });
    } catch (err) {
      console.error("Error al obtener las licencias");
      res.status(500).json({ error: "Error al obtener las licencias" });
    }
  },

  getLicenciaById: async (req, res) => {
    const { id } = req.params;

    try {
      const licencia = await licenciaModel.getLicenciaById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de licencia por ID",
        data: licencia,
      });
    } catch (err) {
      console.error("Error al obtener la licencia por ID", err);
      res.status(500).json({ error: "Error al obtener licencia por ID" });
    }
  },

  createLicencia: async (req, res) => {
    const {
      ID_LICENCIA,
      FECHA_PAGO,
      VIGENCIA,
      TIPO_PAGO,
      PENALIZACION,
      REFERENCIA_PAGO,
      ID_USUARIO,
    } = req.body;

    try {
      const licencia = await licenciaModel.createLicencia({
        ID_LICENCIA,
        FECHA_PAGO,
        VIGENCIA,
        TIPO_PAGO,
        PENALIZACION,
        REFERENCIA_PAGO,
        ID_USUARIO,
      });
      res
        .status(201)
        .json({ id: licencia, message: "licencia creada exitosamente" });
    } catch (err) {
      console.error("Error al crear la licencia", err);
      res.status(500).json({ error: "Error al crear la licencia" });
    }
  },
  // aqui me quede
  updateLicencia: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await licenciaModel.updateLicencia(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
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
      const filasAfectadas = await licenciaModel.deleteLicencia(id);

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
