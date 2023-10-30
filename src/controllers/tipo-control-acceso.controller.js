import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import tipoControlAccesoModel from "../models/tipo-control-acceso.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const tipoControlAccesoCtrl = {
  getAllTipoControlAcceso: async (req, res) => {
    try {
      const tipoControlAcceso =
        await tipoControlAccesoModel.getAllTipoControlAcceso();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa al tipo control de acceso",
        data: tipoControlAcceso,
      });
    } catch (err) {
      console.error("Error al obtener el tipo control de acceso");
      res
        .status(500)
        .json({ error: "Error al obtener el tipo control de acceso" });
    }
  },

  getTipoControlAccesoById: async (req, res) => {
    const { id } = req.params;

    try {
      const tipoControlAcceso =
        await tipoControlAccesoModel.getTipoControlAccesoById(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de tipo control acceso por ID",
        data: tipoControlAcceso,
      });
    } catch (err) {
      console.error("Error al obtener el tipo de control acceso por ID", err);
      res
        .status(500)
        .json({ error: "Error al obtener el tipo de control acceso por ID" });
    }
  },

  createTipoControlAcceso: async (req, res) => {
    const { ID_TIPO_CONTROL_ACCESO, NOMBRE, STATUS } = req.body;

    try {
      const tipoControlAcceso =
        await tipoControlAccesoModel.createTipoControlAcceso({
          ID_TIPO_CONTROL_ACCESO,
          NOMBRE,
          STATUS,
        });
      res.status(201).json({
        id: tipoControlAcceso,
        message: "Tipo de control de acceso creado exitosamente",
      });
    } catch (err) {
      console.error("Error al crear el tipo de control de acceso", err);
      res
        .status(500)
        .json({ error: "Error al crear el tipo de control de acceso" });
    }
  },

  updateTipoControlAcceso: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas =
        await tipoControlAccesoModel.updateTipoControlAcceso(
          id,
          datosActualizados
        );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({
          message: "Tipo de control de acceso actualizado exitosamente",
        });
      } else {
        res
          .status(400)
          .json({ error: "Tipo de control de acceso no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el tipo de control de acceso", err);
      res
        .status(500)
        .json({ error: "Error al actualizar el tipo de control de acceso" });
    }
  },

  deleteTipoControlAcceso: async (req, res) => {
    const { id } = req.params;

    try {
      const filasAfectadas =
        await tipoControlAccesoModel.deleteTipoControlAcceso(id);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({
            message: "Tipo de control de acceso eliminado exitosamente",
          });
      } else {
        res
          .status(404)
          .json({ error: "Tipo de control de acceso no enconrtrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el tipo de control de acceso", err);
      res
        .status(500)
        .json({ error: "Error al eliminar el tipo de control de acceso" });
    }
  },
};

export default tipoControlAccesoCtrl;
