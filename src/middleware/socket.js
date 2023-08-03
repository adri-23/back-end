import jwt from '../services/jwt.js';
// import transaccionCtrl from '../controllers/transaccion.controller.js'
// import serviciosCtrl from '../controllers/servicios.controller.js'
export default (io)  => {
    let pool = [];
    // var socketList = [];
    io.use(function (socket, next) {
        if (!socket.handshake.headers.authorization) {
            return next(new Error(`es necesario contar con token`));
        } else {
            const token = socket.handshake.headers.authorization;
            if (jwt.validateToken(token))
                next();
            else {
                return next(new Error(`El token no es valido`));
            }
        }
    }).on("connection", (socket) => {
        console.log(socket.handshake.headers.authorization);
        // var token = jwt.decodeToken(socket.handshake.headers.authorization);
        // let client = {num_cajero:token.username,id:socket.id};
        // pool.push(client);
        // console.log("num_cajero: "+token.username);
        // console.log("nuevo cliente connectado:", socket.id);
        
        // socket.on("transaccion", async (data) => {
        //     if (token.username === 7020) {
        //         console.log(data);
        //     }
        //     let resp = await transaccionCtrl.insert(data);   
        //     console.log(resp);        
        //     global.io.to(socket.id).emit("response", resp);
        //     if (data.length == 1) {
        //         if (data[0].transaccion_detalle.transaccion.ACTUALIZADO == 1) {
        //             global.io.emit("monitoreo",data);
        //         }
        //     }
        // });
        // socket.on("ActivarServicio",(data) =>{
        //     let obj = pool.find(dt => dt.num_cajero == data.num_cajero)
        //     if (obj) {
        //         global.io.to(obj.id).emit("ActivarServicio",{from:token.username,servicio:data.servicio}); 
        //     }else{
        //         // console.log("cajero no conectado");
        //         socket.emit("ServicioActivado",{message:"ERR_"+ data.servicio.NUM_SERVICIO+":El cajero no se encuentra conectado"});
        //     }
        // });
        // socket.on("ServicioActivado",(data)=>{
        //     // console.log(data);
        //     let servicio = serviciosCtrl.updateServicioActivo(data);
        //     let obj = pool.find(dt => dt.num_cajero == data.origin)
        //     global.io.to(obj.id).emit("ServicioActivado",data);
        // });
        // socket.on("BloquearCajero", async(data) =>{
        //     let update = await serviciosCtrl.updateBloqueo(data);
        // });
        // socket.on("disconnect", () => {
        //     let index = pool.findIndex(x => x.num_cajero == token.username);
        //     pool.splice(index,1);
        //     console.log(socket.id, "disconnected");
        // });
    });
    global.io = io;
}