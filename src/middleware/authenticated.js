import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../../config.js';
let secret = config.app.secret_word;

export default {
    ensureAuth: (req, res, next) => {
        let today = moment().format();
        console.log("the last interaction : "+today);
        if (!req.headers.authorization) {
            return res.status(401).send({ code: 1, message: "La petición no tiene la cabecera de autenticación", data: null });
        }
        try {
            var token = req.headers.authorization.replace(/['"]+/g, '');
            var payload = jwt.decode(token, secret, true);
            if (payload.exp <= moment().unix()) {
                return res.status(401).send({ code: 2, message: "Token ha expirado", data: null });
            }
        }
        catch (ex) {
            console.log(ex);
            return res.status(401).send({ code: 3, message: "Token no válido", data: null });
        }
        req.user = payload;
        next();
    }
};
