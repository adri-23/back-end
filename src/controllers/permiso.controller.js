import jwt from "../services/jwt.js"; //generador de token
import config from "../../config.js"; //lleva las variables del puerto
import bcrypt from "bcrypt"; //encriptacion de contraseñas
import validator from "../middleware/validator.js"; //para hecer peticiones seguras

const permisoCtrl = {
    getAllPermiso: async (req, res) => {
        try {
            res.json({
                code:200,
                message: "success",
                message_details: "Obtencion exitosa de permiso",
                data,
            });
        } catch (err) {
            console.error("Error al obtener el permiso");
            res.status(500).json({error: "Error al obtener el permiso"});
        }
    },
    
    getPermisoById: async (req, res,) => {
        const { id } = req.params;

        try {
            
            if (tipoPermiso) {
                res.status(200).json(tipoPermiso);
            } else {
                res.status(400).json({error: "Error al obtener el permiso"});
            }
        } catch (err) {
            console.error("Error al obtener el permiso por ID", err);
            res.status(500).json({error: "Error al obtener el permiso por ID"});
        }
    },

    createPermiso: async (req, res) => {
        const nuevoPermiso = req.body;

        try {
            const PermisoId = await create(nuevoPermiso);
            res
               .status(201)
               .json({id: PermisoId, message: "Permiso creado exitosamente"});
        } catch (err) {
            console.error("Error al crear el permiso", err);
            res.status(500).json({error: "Error al crear el permiso"});
        }
    },


    updatePermiso: async (req, res) => {
        const { id } = req.params;
        const datosActualizados = req.body;

        try {
            const filasAfectadas = await permiso.update(id, datosActualizados);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Permiso actualizado exitosamente"});
            } else {
                res.status(400).json({error: "Permiso no encontrado"});
            }
        } catch (err) {
            console.error("Error al actualizar el permiso");
            res.status(500).json({error: "Error al actualizar el permiso"});
        }
    },


    deletePermiso: async (req, res) => {
        const { id } = req.params;

        try {
            const filasAfectadas = await permiso.remove(id);

            if (filasAfectadas > 0) {
                res.status(200).json({message: "Permiso eliminado exitosamente"});
            } else {
                res.status(400).json({error: "Error al eliminar el premiso"});
            }
        } catch (err) {
            console.error("Error al eliminar el permiso");
            res.status(500).json({error: "Error al eliminar el permiso"});
        }
    },
};


export default permisoCtrl; 