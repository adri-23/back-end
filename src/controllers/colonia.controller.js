import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import coloniaModel from "../models/colonia.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const coloniaCtrl = {
  getAllColonia: async (req, res) => {
    try {
      const colonia = await coloniaModel.getAllColonia();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de las colonias",
        data: colonia,
      });
    } catch (err) {
      console.error("Error al obtener las colonias", err);
      res.status(500).json({ error: "Error al obtener las colonias" });
    }
  },

  getColoniaById: async (req, res) => {
    const { id } = req.params;
    try {
      const colonia = await coloniaModel.getColoniaId(id);
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de inmuebles por ID",
        data: colonia,
      });
    } catch (err) {
      console.error("Error al obtener el inmueble por ID", err);
      res.status(500).json({ error: "Error al obtener el inmueble por ID" });
    }
  },

  createColonia: async (req, res) => {
    const { ID_COLONIA, NOMBRE, CODIGO_POSTAL, ID_MUNICIPIO } = req.body;

    try {
      const coloniaId = await coloniaModel.createColonia({
        ID_COLONIA,
        NOMBRE,
        CODIGO_POSTAL,
        ID_MUNICIPIO,
      });
      res
        .status(201)
        .json({ id: coloniaId, message: "colonia creada exitosamente" });
    } catch (err) {
      console.error("Error al crear la colonia", err);
      res.status(500).json({ error: "Error al crear la colonia" });
    }
  },

  updateColonia: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await coloniaModel.updateColonia(
        id,
        datosActualizados
      );

      if (filasAfectadas.affectedRows > 0) {
        res.status(200).json({ message: "Colonia actualizada exitosamente" });
      } else {
        res.status(404).json({ error: "Colonia no actualizada" });
      }
    } catch (err) {
      console.error("Error al actualizar la colonia", err);
      res.status(500).json({ error: "Error al actualizar la colonia" });
    }
  },

  deleteColonia: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await coloniaModel.deleteColonia(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Colonia eliminada exitosamente" });
      } else {
        res.status(404).json({ error: "Colonia no encontrada" });
      }
    } catch (err) {
      console.error("Error al eliminar la colonia", err);
      res.status(500).json({ error: "Erorr al eliminar la colonia" });
    }
  },
};

export default coloniaCtrl;
