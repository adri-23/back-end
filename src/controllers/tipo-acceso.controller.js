import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const accesoCtrl = {
    getAllAcceso: async (req, res) => {
        try {
            res.json({
                code:200,
                message: "success",
                message_details: "Obtencion exitosa al acceso",
                data,

            });
        } catch (err) {
            console.error("Error al obtener el acceso");
            res.status(500).json({ error: "Error al obtener el acceso"});
        }
    },


    getAccesoById: async (req, res) => {
        const { id } = req.params;

        try {

            if (acceso) {
                res.status(200).json(acceso);
            } else {
                res.status(404).json({ error: "Error al obtener el acceso por ID"});
            }
        } catch (err) {
            console.error("Error al obtener el acceso por ID", err);
            res.status(500).json({ error: "Error al obtener el acceso por ID"});
        } 
    },

    createAcceso: async (req, res) => {
        const nuevoAcceso = req.body;

        try {
            const accesoId = await create(nuevoAcceso);
            res
               .status(201)
               .json({ id: accesoId, message: "Acceso creado exitosamente" });
        }  catch (err) {
            console.error("Error al crear el acceso", err);
            res.status(500).json({error: "Error al crear el acceso"});
        }
    },

    updateAcceso: async (req, res) => {
        const { id } = req.params;
        const datosActualizados = req.body;

        try {
            const filasAfectadas = await acceso.update(id, datosActualizados );

            if (filasAfectadas > 0){
                res.status(200).json({message: " Acceso actualizado exitosamente"});
            } else {
                res.status(400).json({error: "Acceso no encontrado"});
            } 
        } catch (err) {
            console.error("Error al actualizar el acceso", err);
            res.status(500).json({error: "Error al actualizar el acceso"});
        }
    },


    deleteAcceso: async (req, res) => {
        const { id } = req.params;
        try {
            const filasAfectadas = await acceso.remove(id);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Acceso eliminado exitosamente"});
            } else {
                res.status(404).json({error: "Acceso no encontrado"});
            }
        } catch (err) {
            console.error("Error al eliminar el acceso", err);
            res.status(500).json({ error: "Error al eliminar el acceso"});

        }
    },
};

export default accesoCtrl;