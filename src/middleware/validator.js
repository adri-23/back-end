import Ajv from "ajv"
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const api_dotacionfolioscajero = {
    type: "array",
    items: {
        additionalProperties: true,
        required: ["NUM_CAJERO", "ID_PAQUETE", "FOLIO_INICIAL", "FOLIO_ACTUAL", "FOLIO_FINAL", "ESTATUS", "ID_PROYECTO", "OPERACION"],
        properties: {
            NUM_CAJERO: { type: "number" },
            ID_PAQUETE: { type: "number" },
            FOLIO_INICIAL: { type: "number" },
            FOLIO_ACTUAL: { type: "number" },
            FOLIO_FINAL: { type: "number" },
            ESTATUS: { type: "number" },
            ID_PROYECTO: { type: "number" },
            ESTATUS: { type: "number" },
            OPERACION: { type: "number" },
        }
    },
};
const api_entregafoliostecnico = {
    type: "array",
    items: {
        additionalProperties: true,
        required: ["FOLIO_INICIAL", "FOLIO_FINAL", "TOTAL_FOLIOS", "FECHA_ENTREGA", "ID_PAQUETE", "ID_USUARIO", "ID_USUARIO_ENTREGA", "ID_USUARIO_RESPONSABLE", "ESTATUS", "OPERACION", "ID_ASIGNACION", "ID_PROYECTO"],
        properties: {
            FOLIO_INICIAL: { type: "number" },
            FOLIO_FINAL: { type: "number" },
            TOTAL_FOLIOS: { type: "number" },
            FECHA_ENTREGA: { type: "string" },
            ID_PAQUETE: { type: "number" },
            ID_USUARIO: { type: "number" },
            ID_USUARIO_ENTREGA: { type: "number" },
            ID_USUARIO_RESPONSABLE: { type: "number" },
            ESTATUS: { type: "number" },
            OPERACION: { type: "number" },
            ID_ASIGNACION: { type: "string" },
            ID_PROYECTO: { type: "number" }
        }
    },
};

const api_user = {
    type: "object",
    additionalProperties: true,
    required: ["NOMBRES", "AP_PATERNO", "TELEFONO", "USUARIO", "ESTATUS", "ID_PERFIL", "EMAIL"],
    properties: {
        NOMBRES: { type: "string" },
        AP_PATERNO: { type: "string" },
        TELEFONO: { type: "string" },
        USUARIO: { type: "string" },
        ESTATUS: { type: "number" },
        ID_PERFIL: { type: "number" },
        EMAIL: { type: "string" }
    },
};
const api_menuuser = {
    type: "array",
    items: {
        additionalProperties: false,
        required: ["ID_USUARIO", "ID_MENU", "ESTATUS"],
        properties: {
            ID_USUARIO: { type: "number" },
            ID_MENU: { type: "number" },
            ESTATUS: { type: "number" }
        }
    },
};

const api_cajerouser = {
    type: "array",
    items: {
        additionalProperties: false,
        required: ["NUM_CAJERO", "ID_TECNICO", "OPERACION"],
        properties: {
            NUM_CAJERO: { type: "number" },
            ID_TECNICO: { type: "number" },
            OPERACION: { type: "number" }
        }
    },
};
const atm_cajero = {
    type: "object",
    required: ["numero_cajero", "getHash", "id_proyecto"],
    properties: {
        numero_cajero: { type: "number" },
        id_proyecto: { type: "number" },
        getHash: { type: "boolean" }
    },
}
const api_login = {
    type: "object",
    required: ["username", "password", "getHash"],
    properties: {
        username: { type: "string" },
        password: { type: "string" },
        getHash: { type: "boolean" }
    },
};
const json_folios = {
    type: "object",
    required:["FOLIO_INICIAL","FOLIO_FINAL","NUM_CAJERO","ID_PROYECTO","SERIE"],
    properties:{
        FOLIO_INICIAL:{type: "number"},
        FOLIO_FINAL: { type: "number" },
        NUM_CAJERO: { type: "number" },
        ID_PROYECTO: { type: "number" },
        SERIE: { type: "string" }
    },
};
const json_servicio = {
    type: "object",
    required:["NUM_SERVICIO","ID_PROYECTO","DESC_SERVICIO","CLAVE_CLIENTE","PRECIO_SERVICIO","VIGENCIA"],
    properties:{
        NUM_SERVICIO:{type: "number"},
        ID_PROYECTO: { type: "number" },
        DESC_SERVICIO: { type: "string" },
        CLAVE_CLIENTE: { type: "string" },
        PRECIO_SERVICIO: { type: "number" },
        VIGENCIA: { type: "string" }
    },
};
const json_detalle_menu = {
    type: "object",
    required:["ID_USUARIO","ID_MENU","ESTATUS","ID_PROYECTO"],
    properties:{
        ID_USUARIO:{type: "number"},
        ID_MENU: { type: "number" },
        ESTATUS: { type: "number" },
        ID_PROYECTO: { type: "number" }
    },
};

const json_paquetes = {
    type: "object",
    required: ["NO_CAJA", "FOLIO_INICIAL", "FOLIO_FINAL", "TOTAL_FOLIOS", "ID_USUARIO", "ID_RECEPCION"],
    properties: {
        NO_CAJA: { type: "number" },
        FOLIO_INICIAL: { type: "number" },
        FOLIO_FINAL: { type: "number" },
        TOTAL_FOLIOS: { type: "number" },
        ID_USUARIO: { type: "number" },
        ID_RECEPCION: { type: "number" },
    },
};
const json_recepcion = {
    type: "object",
    required: ["NUMERO_OFICIO", "FECHA_RECEPCION", "SERIE", "FOLIO_INICIAL", "FOLIO_FINAL", "TOTAL_FOLIOS", "PERSONA_RECIBIO", "PERSONA_ENTREGO", "IMAGE", "ID_USUARIO", "ID_SUMINISTRO", "CAJA_INICIA", "ID_PROYECTO"],
    properties: {
        NUMERO_OFICIO: { type: "string" },
        FECHA_RECEPCION: { type: "string" },
        SERIE: { type: "string" },
        FOLIO_INICIAL: { type: "number" },
        FOLIO_FINAL: { type: "number" },
        TOTAL_FOLIOS: { type: "number" },
        PERSONA_RECIBIO: { type: "string" },
        PERSONA_ENTREGO: { type: "string" },
        IMAGE: { type: "string" },
        ID_USUARIO: { type: "number" },
        ID_SUMINISTRO: { type: "number" },
        CAJA_INICIA: { type: "number" },
        ID_PROYECTO: { type: "number" }
    },
};

const api_post_cajero = {
    type: "object",
    additionalProperties: true,
    required: ["NUM_SERIE", "NUMERO", "UBICACION_FISICA", "CALLE", "NUM_EXT", "NUM_INT", "COLONIA", "CP", "REFERENCIA", "MAC_ADDRESS", "ID_TEAMVIEWER", "PW_TEAMVIEWER", "LATITUD", "LONGITUD", "ID_PROYECTO", "ID_ESTADO", "ID_MUNICIPIO", "ID_TECNICO", "OPERACION"],
    properties: {
        NUM_SERIE: { type: "string" },
        NUMERO: { type: "number" },
        UBICACION_FISICA: { type: "string" },
        CALLE: { type: "string" },
        NUM_EXT: { type: "string" },
        NUM_INT: { type: "string" },
        COLONIA: { type: "string" },
        CP: { type: "number" },
        REFERENCIA: { type: "string" },
        MAC_ADDRESS: { type: "string" },
        ID_TEAMVIEWER: { type: "string" },
        PW_TEAMVIEWER: { type: "string" },
        LATITUD: { type: "string" },
        LONGITUD: { type: "string" },
        ID_ESTATUS: { type: "number" },
        ID_PROYECTO: { type: "number" },
        ID_ESTADO: { type: "number" },
        ID_MUNICIPIO: { type: "number" },
        ID_TECNICO: { type: "number" },
        OPERACION: { type: "number" },
    },
};
export default {
    ensureValidate: (req, res, next) => {
        var schema = null;
        if (req.originalUrl === "/atm/cajero") {
            schema = atm_cajero;
        } else if (req.originalUrl === "/api/login") {
            schema = api_login;
        }
        try {
            const validate = ajv.compile(schema);
            const valid = validate(req.body);
            if (!valid) {
                return res.status(401).send(
                    {
                        code: 400,
                        message: "error",
                        message_details: validate.errors,
                        data: null
                    });
            }
            next();
        } catch (ex) {
            return res.status(401).send(
                {
                    code: 400,
                    message: "error",
                    message_details: ex,
                    data: null
                });
        }
    },
    Validate: (json, schema_val) => {
        var schema = null;
        var result = null;
        if (schema_val === "paquete") {
            schema = json_paquetes;
        } 
        else if (schema_val === "recepcion") {
            schema = json_recepcion;
        }
        else if (schema_val === "menu") {
            schema = api_menuuser;
        }
        else if (schema_val === "cajerouser") {
            schema = api_cajerouser;
        }
        else if (schema_val === "user") {
            schema = api_user;
        }
        else if (schema_val === "entregafoliostecnico") {
            schema = api_entregafoliostecnico;
        }
        else if (schema_val === "dotacionfolioscajero") {
            schema = api_dotacionfolioscajero;
        } else if (schema_val === "postmanagecajero") {
            schema = api_post_cajero;
        } else if(schema_val === "folios"){
            schema = json_folios;
        } else if (schema_val === "servicio") {
            schema = json_servicio;
        } else if (schema_val === "inDetalleMenu") {
            schema = json_detalle_menu;
        }
        
        try {
            const validate = ajv.compile(schema);
            const valid = validate(json);
            if (!valid) {
                result = {
                    message_details: validate.errors
                }
            }
        } catch (ex) {
            result = {
                message_details: ex,
            }
        }
        finally {
            return result;
        }
    }
};