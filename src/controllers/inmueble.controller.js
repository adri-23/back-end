import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import inmuebleModel from "../models/inmueble.model.js";
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const inmuebleCtrl = {
  getAllInmuebles: async (req, res) => {
    try {
      const inmueble = await inmuebleModel.getAll();
      res.json({
        code: 200,
        message: "success",
        message_details: "Obtencion exitosa de inmuebles",
        data: inmueble,
      });
    } catch (err) {
      console.error("Error al obtener los inmuebles", err);
      res.status(500).json({ error: "Error al obtener los inmuebles" });
    }
  },

  getInmuebleById: async (req, res) => {
    const { id } = req.params;

    try {
      //const inmueble = await Inmueble.getById(id);

      if (inmueble) {
        res.status(200).json(inmueble);
      } else {
        res.status(404).json({ error: "Inmueble no encontrado" });
      }
    } catch (err) {
      console.error("Error al obtener el inmueble por ID", err);
      res.status(500).json({ error: "Error al obtener el inmueble por ID" });
    }
  },

  createInmueble: async (req, res) => {
    const nuevoInmueble = req.body;

    try {
      const inmuebleId = await create(nuevoInmueble);
      res
        .status(201)
        .json({ id: inmuebleId, message: "Inmueble creado exitosamente" });
    } catch (err) {
      console.error("Error al crear el inmueble", err);
      res.status(500).json({ error: "Error al crear el inmueble" });
    }
  },

  updateInmueble: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await Inmueble.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Inmueble actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "Inmueble no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el inmueble", err);
      res.status(500).json({ error: "Error al actualizar el inmueble" });
    }
  },

  deleteInmueble: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await Inmueble.remove(id);

      if (filasAfectadas > 0) {
        res.status(200).json({ message: "Inmueble eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Inmueble no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el inmueble", err);
      res.status(500).json({ error: "Error al eliminar el inmueble" });
    }
  },
};

export default inmuebleCtrl;
