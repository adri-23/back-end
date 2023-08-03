import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../../config.js';
let secret = config.app.secret_word;
export default {
    createToken: (data) => {
        let payload = {
            username: data.username,
            id_user: data.id_user,
            id_perfil: data.id_perfil,
            iat: moment().unix(),
            exp: moment().add(1, 'days').unix(),
        };
        return jwt.encode(payload, secret);
    },
    validateToken: (token) => {
        try {
            let payload = jwt.decode(token, config.app.secret_word, true);
            if (payload.exp <= moment().unix()) {
                return false;
            }
            else {
                return true;
            }
        } catch (err) {
            return false;
        }
    },
    decodeToken: (token) => {
        let payload = jwt.decode(token, config.app.secret_word, true);
        return payload;
    }
}

