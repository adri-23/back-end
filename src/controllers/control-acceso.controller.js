import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import controlAccesoModel from "../models/control-acceso.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const controlAccesoCtrl = {
  getAllControlAcceso: async (req, res) => {
    try {
      const controlAcceso = await controlAccesoModel.getControlAcceso();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de control de accesos",
        data: controlAcceso,
      });
    } catch (err) {
      console.error("Error al obtener control de accesos", err);
      res.status(500).json({ error: "Error al obtener control de accesos" });
    }
  },

  getControlAccesoById: async (req, res) => {
    const { id } = req.params;

    try {
      const controlAcceso = await controlAccesoModel.getControlAccesoById(id);
      res.json({
        code: 200,
        message_details: "Obtencion exitosa de control de acceso por ID",
        data: controlAcceso,
      });
    } catch (err) {
      console.error("Error al obtener el control de acceso por ID", err);
      res
        .status(500)
        .json({ error: "Error al obtener el control de acceso por ID" });
    }
  },

  createControlAcceso: async (req, res) => {
    const {
      ID_CONTROL_ACCESO,
      FECHA_HORA,
      OBSERVACION,
      ID_INMUEBLE,
      ID_USUARIO,
      ID_TIPO_CONTROL_ACCESO,
      ID_INVITADO,
      ID_TIPO_ACCESO,
    } = req.body;

    try {
      const controlAcceso = await controlAccesoModel.createControlAcceso({
        ID_CONTROL_ACCESO,
        FECHA_HORA,
        OBSERVACION,
        ID_INMUEBLE,
        ID_USUARIO,
        ID_TIPO_CONTROL_ACCESO,
        ID_INVITADO,
        ID_TIPO_ACCESO,
      });
      res.status(201).json({
        id: controlAcceso,
        message: "Control de acceso creado exitosamente",
      });
    } catch (err) {
      console.error("Error al crear  control de acceso", err);
      res.status(500).json({ error: "Error al crear control de acceso" });
    }
  },

  updateControlAcceso: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await controlAccesoModel.updateControlAcceso(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res
          .status(200)
          .json({ message: "Control de acceso actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Control de acceso no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el control de acceso", err);
      res
        .status(500)
        .json({ error: "Error al actualizar el control de acceso" });
    }
  },

  deleteControlAcceso: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await controlAccesoModel.deleteControlAcceso(id);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Control de acceso eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Control de acceso no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar control de acceso", err);
      res.status(500).json({ error: "Error al eliminar control de acceso" });
    }
  },
};

export default controlAccesoCtrl;
