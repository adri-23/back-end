import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import tipoAccesoModel from "../models/tipo-acceso.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const tipoAccesoCtrl = {
  getAllAcceso: async (req, res) => {
    try {
      const acceso = await tipoAccesoModel.getAllAcessos();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa al acceso",
        data: acceso,
      });
    } catch (err) {
      console.error("Error al obtener el acceso");
      res.status(500).json({ error: "Error al obtener el acceso" });
    }
  },

  getAccesoById: async (req, res) => {
    const { id } = req.params;

    try {
      const acceso = await tipoAccesoModel.getTipoAccesoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de acceso por ID",
        data: acceso,
      });
    } catch (err) {
      console.error("Error al obtener el acceso por ID", err);
      res.status(500).json({ error: "Error al obtener el acceso por ID" });
    }
  },

  createAcceso: async (req, res) => {
    const { ID_TIPO_ACCESO, NOMBRE } = req.body;

    try {
      const acceso = await tipoAccesoModel.createTipoAcceso({
        ID_TIPO_ACCESO,
        NOMBRE,
      });
      res
        .status(201)
        .json({ id: acceso, message: "Acceso creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el acceso", err);
      res.status(500).json({ error: "Error al crear el acceso" });
    }
  },

  updateAcceso: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await tipoAccesoModel.updateTipoAcceso(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({ message: " Acceso actualizado exitosamente" });
      } else {
        res.status(400).json({ error: "Acceso no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el acceso", err);
      res.status(500).json({ error: "Error al actualizar el acceso" });
    }
  },

  deleteAcceso: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await tipoAccesoModel.deleteTipoAcceso(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Acceso eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Acceso no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el acceso", err);
      res.status(500).json({ error: "Error al eliminar el acceso" });
    }
  },
};

export default tipoAccesoCtrl;
