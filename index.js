"use strict";
import app from "./app.js";
import { createServer } from "http";
// import { Server as WebSocketServer } from "socket.io";
// import Sockets  from './src/middleware/socket.js'
import config from "./config.js";
import https from "https";
import fs from "fs";
import { compareSync } from "bcrypt";
import moment from "moment";
//import inmuebleModel from "./src/models/inmueble.model.js";
//import userModel from "./src/models/user.model.js";

const httpServer = createServer(app);

httpServer.listen(config.app.app_port, function (err) {
  if (err) console.log("Error in server setup");
  let today = moment().format();
  console.log("server up at : " + today);
  console.log("Server listening on Port", config.app.app_port);
  //inmuebleModel.getAllInmuebles();
  //userModel.login({ username: "Juan" });
});

// const io = new WebSocketServer(httpServer,{
//   cors: {
//     origin: "*"
//   }
// });
// Sockets(io);
