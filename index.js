'use strict'
import app from "./app.js";
import { createServer } from "http";
// import { Server as WebSocketServer } from "socket.io";
// import Sockets  from './src/middleware/socket.js'
import config from './config.js'
import https from 'https'
import fs from 'fs'
import { compareSync } from 'bcrypt'
import moment from 'moment';
const httpServer = createServer(app);

httpServer.listen(config.app.app_port, function (err) {
  if (err) console.log("Error in server setup")
  let today = moment().format();
  console.log("server up at : " + today);
  console.log("Server listening on Port", config.app.app_port);
})

// const io = new WebSocketServer(httpServer,{
//   cors: {
//     origin: "*"
//   }
// });
// Sockets(io);



