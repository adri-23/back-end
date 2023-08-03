import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const tipoInmuebleCtrl = {
  getAlltipoInmueble: async (req, res) => {
    try {
      res.json({
        code: 200,
        message: "success",
        message_details: "obtencion exitosa de tipo de inmuebles",
        data,
      });
    } catch (err) {
      console.error("Error al obtener los tipos de inmuebles");
      res
        .status(500)
        .json({ error: "Error al obtener los tipos de inmuebles" });
    }
  },

  getTipoInmuebleById: async (req, res) => {
    const { id } = req.param;

    try {
      //const tipoInmueble = await tipoInmueble.getById(id);

      if (tipoInmueble) {
        res.status(200).json(tipoInmueble);
      } else {
        res.status(404).json({ erro: "Error al obtener tipos de inmuebles" });
      }
    } catch (err) {
      console.error("Error al obtener tipos de inmuebles por ID", err);
      res.status(500).json({ error: "Error al obtener el inmueble por ID" });
    }
  },

  createTipoInmueble: async (req, res) => {
    const nuevoTipoInmueble = req.body;

    try {
      const TipoInmueble = await create(nuevoTipoInmueble);
      res
        .status(201)
        .json({
          id: tipoInmuebleId,
          message: "Tipo de inmueble creado exitosamente ",
        });
    } catch (err) {
      console.error("Error al crear el Tipo de Inmueble", err);
      res.status(500).json({ error: "Error al crear tipo de inmueble" });
    }
  },

  updateTipoInmueble: async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    try {
      const filasAfectadas = await tipoInmueble.update(id, datosActualizados);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Tipo de Inmueble actualizado exitosamente" });
      } else {
        res.status(400).json({ error: "Tipo de Inmueble no encontrado" });
      }
    } catch (err) {
      console.error("Error al actualizar el tipo de inmueble", err);
      res
        .status(500)
        .json({ error: "Error al actualizar el tipo de inmueble" });
    }
  },

  deleteTipoInmueble: async (req, res) => {
    const { id } = req.params;
    try {
      const filasAfectadas = await tipoInmueble.remove(id);

      if (filasAfectadas > 0) {
        res
          .status(200)
          .json({ message: "Tipo de inmueble eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Tipo de inmueble no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar el tipo de inmueble", err);
      res.status(500).json({ error: "Error al eliminar el tipo de inmueble" });
    }
  },
};

export default tipoInmuebleCtrl;
