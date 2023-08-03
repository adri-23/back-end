import db from '../database/db_actas.js';
const nacimientos = {
    byCurpForanea: async (params) => {
        try {
            let rows = await db.awaitQuery("INSERT INTO cirr_ta07_or_pe_impfor(TA07_E_CURP ,TA07_E_ESTADODEST,TA07_E_ESTADOORIG ,ta07_e_tipo,ta07_e_busqueda,ta07_e_estatus,TA07_E_SOLICITARIMAGEN) VALUES('" + params.Curp + "'," + params.Estado + ",70,1,1,0,1);");
            return rows;
        }
        catch (err) {
            console.log('ERROR => ' + err);
            return err;
        }
    },
    byDatosForanea: async (params) => {
        try {
            return await db.awaitQuery("INSERT INTO cirr_ta07_or_pe_impfor(TA07_C_PATERNO,TA07_C_MATERNO,TA07_C_NOMBRES,TA07_F_NACIMIENTO,TA07_C_SEXO,TA07_E_ESTADODEST,TA07_E_ESTADOORIG,ta07_e_tipo,ta07_e_busqueda,ta07_e_estatus,TA07_E_SOLICITARIMAGEN) VALUES('" + params.apPaterno + "','" + params.apMaterno + "','" + params.Nombre + "','" + params.fechaNacimiento + "','" + params.Sexo + "'," + params.Estado + ",70,1,1,0,1);");
        }
        catch (err) {
            console.log('ERROR => ' + err);
            return err;
        }
    },
    getActaForanea: async (id) => {
        try {
            const rows = await db.awaitQuery("SELECT TA10_B_IMAGEN,TA10_C_CADENA FROM cirr_ta10_or_re_impfor WHERE TA10_E_OIDORIGEN='" + id + "'");
            return rows;
        }
        catch (err) {
            console.log('ERROR => ' + err);
            return err;
        }
    }
};

export default nacimientos;