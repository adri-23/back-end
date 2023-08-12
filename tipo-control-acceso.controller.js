import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const tipoControlAccesoCtrl = {
    getAllTipoControlAcceso: async (req, res) => {
        try {
            res.json({
                code:200,
                message: "success",
                message_details: "Obtencion exitosa al tipo de acceso",
                data,
            });
        } catch (err) {
            console.error("Error al obtener el tipo de acceso");
            res.status(500).json({error: "Error al obtener el tipo de acceso"});
        }
    },


    getTipoControlAccesoById: async (req, res) => {
        const { id } = req.params;

        try {

            if (tipoControlAcceso) {
                res.status(200).json(tipoControlAcceso);
            } else {
                res.status(404).json({ error: "Error al obtener el tipo de acceso por ID"});
            }
        } catch (err) {
            console.error("Error al obtener el tipo de acceso por ID", err);
            res.status(500).json({ error: "Error al obtener el tipod e acceso por ID"});
        }
    },

    createTipoControlAcceso: async ( req, res) => {
        const nuevoTipoControlAcceso = req.body;

        try {
            const tipoControlAccesoId = await create(nuevoTipoControlAcceso);
            res
               .status(201)
               .json({id: tipoControlAccesoId, message : "Tipo de acceso creado exitosamente"});
        } catch (err) {
            console.error("Error al crear el tipo de acceso", err);
            res.status(500).json({error: "Error al crear el tipo de acceso"});
        }
    },

    updateTipoControlAcceso: async (req, res) => {
        const { id } = req.params;
        const datosActualizados = req.body;

        try {
            const filasAfectadas = await tipoControlAcceso.update(id, datosActualizados);

            if (filasAfectadas > 0){
                res.status(200).json({message: "Tipo de acceso actualizado exitosamente"});
            } else {
                res.status(400).json({error: "Tipo de acceso no encontrado"});
            }
        } catch (err) {
            console.error("Error al actualizar el tipo de acceso", err);
            res.status(500).json({error: "Error al actualizar el tipo de acceso"});

        }
    },


    deleteTipoControlAcceso: async (req, res) => {
        const { id } = req.params;

        try {
            const filasAfectadas = await tipoAcceso.remove(id);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Tipo de acceso eliminado exitosamente"});
            } else {
                res.status(404).json({error: "Tipode acceso no enconrtrado"});
            }
        } catch (err) {
            console.error("Error al eliminar el tipo de acceso", err);
            res.status(500).json({ error: "Error al eliminar el tipo de acceso"});
        }
    },
};

export default tipoControlAccesoCtrl;