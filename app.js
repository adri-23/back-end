"use strict";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import users_routes from "./src/routes/user.routes.js";
import prueba_routers from "./src/routes/prueba.routes.js";
import inmueble_routes from "./src/routes/inmueble.routes.js";

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
app.use("/api/", prueba_routers);
app.use("/api/", inmueble_routes);

export default app;
