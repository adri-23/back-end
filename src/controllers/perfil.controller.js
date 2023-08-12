import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const perfilCtrl = {
    getAllPerfil: async (req, res) => {
        try {
            res.json({
                code:200,
                message: "success",
                message_details: "Obtencion exitosa de perfil",
                data,
            });
        } catch (err) {
            console.error("Error al obtener el perfil");
            res.status(500).json({error: "Error al obtener el perfil"});
        }
    },
    
    getPerfilById: async (req, res,) => {
        const { id } = req.params;

        try {
            
            if (tipoPerfil) {
                res.status(200).json(tipoPerfil);
            } else {
                res.status(400).json({error: "Error al obtener el perfil"});
            }
        } catch (err) {
            console.error("Error al obtener el perfil por ID", err);
            res.status(500).json({error: "Error al obtener el perfil por ID"});
        }
    },

    createPerfil: async (req, res) => {
        const nuevoPerfil = req.body;

        try {
            const perfilId = await create(nuevoPerfil);
            res
               .status(201)
               .json({id: perfilId, message: "Perfil creado exitosamente"});
        } catch (err) {
            console.error("Error al crear el perfil", err);
            res.status(500).json({error: "Error al crear el perfil"});
        }
    },


    updatePerfil: async (req, res) => {
        const { id } = req.params;
        const datosActualizados = req.body;

        try {
            const filasAfectadas = await perfil.update(id, datosActualizados);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Perfil actualizado exitosamente"});
            } else {
                res.status(400).json({error: "Perfil no encontrado"});
            }
        } catch (err) {
            console.error("Error al actualizar el perfil");
            res.status(500).json({error: "Error al actualizar el perfil"});
        }
    },


    deletePerfil: async (req, res) => {
        const { id } = req.params;

        try {
            const filasAfectadas = await perfil.remove(id);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Perfil eliminado exitosamente"});
            } else {
                res.status(400).json({error: "Error al eliminar el perfil"});
            }
        } catch (err) {
            console.error("Error al eliminar el perfil");
            res.status(500).json({error: "Error al eliminar el perfil"});
        }
    },
};


export default perfilCtrl; 