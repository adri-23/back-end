"use strict";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import users_routes from "./src/routes/user.routes.js";
import inmueble_routes from "./src/routes/inmueble.routes.js";
import controlAcceso_routes from "./src/routes/control-acceso.routes.js";
import colonia_routes from "./src/routes/colonia.routes.js";
import estado_routes from "./src/routes/estado.routes.js";
import evento_routes from "./src/routes/evento.routes.js";
import invitacion_routes from "./src/routes/invitacion.routes.js";
import invitado_routes from "./src/routes/invitado.routes.js";
import licencia_routes from "./src/routes/licencia.routes.js";
import menuHijo_routes from "./src/routes/menu-hijo.routes.js";
import menuPadre_routes from "./src/routes/menu-padre.routes.js";
import perfil_routes from "./src/routes/perfil.routes.js";
import permiso_routes from "./src/routes/permiso.routes.js";
import tipoAcceso_routes from "./src/routes/tipo-acceso.routes.js";
import tipoControlAcceso_routes from "./src/routes/tipo-control-acceso.routes.js";
import tipoEvento_routes from "./src/routes/tipo-evento.routes.js";
import tipoInmueble_routes from "./src/routes/tipo-inmueble.routes.js";
import menuUsuarios_routes from "./src/routes/menu-usuario.routes.js";
import usuario_routes from "./src/routes/usuarios.routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, "./src/");

var app = express();
app.use(express.static(publicDirectoryPath));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.urlencoded({ extended: false, limit: "1024mb" }));
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(function (req, res, next) {
  next();
});
app.set("views", publicDirectoryPath + "/views");
app.set("view engine", "ejs");
app.use("/api/", users_routes);
app.use("/api/", inmueble_routes);
app.use("/api/", controlAcceso_routes);
app.use("/api/", colonia_routes);
app.use("/api/", estado_routes);
app.use("/api/", evento_routes);
app.use("/api/", invitacion_routes);
app.use("/api/", invitado_routes);
app.use("/api/", licencia_routes);
app.use("/api/", menuHijo_routes);
app.use("/api/", menuPadre_routes);
app.use("/api/", perfil_routes);
app.use("/api/", permiso_routes);
app.use("/api/", tipoAcceso_routes);
app.use("/api/", tipoControlAcceso_routes);
app.use("/api/", tipoEvento_routes);
app.use("/api/", tipoInmueble_routes);
app.use("/api/", menuUsuarios_routes);
app.use("/api", usuario_routes);

export default app;
