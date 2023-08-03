import userModel from "../models/user.model.js";
import jwt from "../services/jwt.js"; //generador de tokens
import config from "../../config.js"; // variable de nuestro puerto
import bcrypt from "bcrypt"; //hash de contraseñas
import validator from "../middleware/validator.js";
const userCtrl = {
  // constante
  login: async (req, res) => {
    try {
      let user = await userModel.login(req.body);
      var sPassword = req.body.password;
      if (user.length) {
        let isPassword = bcrypt.compareSync(sPassword, user[0].CONTRASENA);
        delete user[0].CONTRASENA;
        let validity = new Date(user[0].FECHA_VIGENCIA)
          .toISOString()
          .slice(0, 10);
        let today = new Date().toISOString().slice(0, 10);
        var isValidity = today <= validity ? true : false;
        if (isPassword && isValidity && user[0].ESTATUS === 1) {
          let id_perfil = user[0].ID_PERFIL;
          let id_user = user[0].ID_USUARIO;
          let username = user[0].USUARIO;
          var params = {
            username: username,
            id_user: id_user,
            id_perfil: id_perfil,
          };

          var hash = null;
          var data = null;

          // let permisos = await userModel.getUsuarioPermisos(id_user);
          // let menu = await userModel.getUsuarioMenu(id_user);
          if (req.body.getHash) {
            hash = jwt.createToken(params);
            data = {
              token: hash,
            };
          } else {
            data = {
              user: user[0],
              menu: null,
              permisos: null,
              inmuebles: null,
            };
          }

          res.json({
            code: 200,
            message: "success",
            message_details: "inicio de sesión exitoso",
            data,
          });
        } else {
          res.json({
            code: 400,
            message: "¡warning!",
            message_details:
              "Revisa tu contraseña/vigencia contacta a tu adminstrador de proyecto",
            data: null,
          });
        }
      } else {
        res.json({
          code: 400,
          message: "¡warning!",
          message_details: "El usuario no existe",
          data: null,
        });
      }
    } catch (err) {
      console.log(err);
      res.json({
        code: 501,
        message: "error",
        message_details: err.message,
        data: null,
      });
    }
  },
  validity: async (req, res) => {
    try {
      var token = req.body.token;
      if (!jwt.validateToken(token)) {
        return res.status(200).send({
          code: 2,
          message: "Token ha expirado",
          data: { tokenExpired: true },
        });
      } else {
        return res.status(200).send({
          code: 0,
          message: "Token vigente",
          data: { tokenExpired: false },
        });
      }
    } catch (ex) {
      console.log(ex);
      return res.status(200).send({
        code: 3,
        message: "Token no válido",
        data: { tokenExpired: true },
      });
    }
  },
  users: async (req, res) => {
    try {
      let users = await userModel.getUsers(req.body);
      if (users.recordset.length) {
        res.json({
          code: 200,
          message: "success",
          message_details: "Consulta de información exitosa",
          data: users.recordset,
        });
      } else {
        res.json({
          code: 400,
          message: "¡warning!",
          message_details: "sin registros en base de datos",
          data: null,
        });
      }
    } catch (err) {
      res.json({
        code: 501,
        message: "error",
        message_details: err.message,
        data: null,
      });
    }
  },
  update: async (req, res) => {},
  delete: async (req, res) => {},
  insert: async (req, res) => {
    try {
      var user_in = req.body;
      let val = validator.Validate(req.body, "user");
      if (val === null) {
        var sEmail = user_in.EMAIL.trim().toLowerCase();
        if (user_in.CONTRASENA) {
          var sPassword = bcrypt.hashSync(user_in.CONTRASENA.trim(), 10);
          user_in.CONTRASENA = sPassword;
        }

        var usuario = { username: user_in.USUARIO.trim().toLowerCase() };

        user_in.EMAIL = sEmail;
        let users = await userModel.insert(user_in);
        console.log(users);
        if (users.length) {
          res.json({
            code: 200,
            message: "success",
            message_details: "transaccion exitosa.",
            data: users[0][0],
          });
        } else {
          res.json({
            code: 501,
            message: "!error!",
            message_details: "No se inserto correctamente la información",
            data: null,
          });
        }
      } else {
        res.json({
          code: 501,
          message: "!error!",
          message_details: "input json no contine el formato esperado",
          data: null,
          errors: val,
        });
      }
    } catch (err) {
      res.json({
        code: 501,
        message: "error",
        message_details: err.message,
        data: null,
      });
    }
  },
  postMenuUser: async (req, res) => {
    try {
      var params = req.body.userMenu;
      let val = validator.Validate(params, "menu");
      var registrados = [];
      if (val === null) {
        for (const index in params) {
          let menu = await userModel.manageMenuUser(params[index]);
          if (menu.recordset.length > 0) {
            registrados.push(menu.recordset[0]);
          }
        }
        if (registrados.length > 0) {
          res.json({
            code: 200,
            message: "success",
            message_details: "Registro de información exitosa",
            data: registrados,
          });
        } else {
          res.json({
            code: 501,
            message: "!error!",
            message_details: "No se insertó correctamente la información",
            data: null,
          });
        }
      } else {
        res.json({
          code: 501,
          message: "!error!",
          message_details: "input json no contine el formato esperado",
          data: null,
          errors: val,
        });
      }
    } catch (err) {
      res.json({
        code: 501,
        message: "error",
        message_details: err.message,
        data: null,
      });
    }
  },
};
export default userCtrl;
