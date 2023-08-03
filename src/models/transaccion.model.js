import db from '../database/database.js';
import sql from 'mssql';
const pool = await db.connectDb();

const transaccionModel = {
    insert: async (data) => {
        try {
            console.log(JSON.stringify(data));
            let transaccion = data.transaccion_detalle.transaccion;
            let stock = data.transaccion_detalle.stock;
            let vending = data.transaccion_detalle.vending;
            let factura = data.transaccion_detalle.facturacion;

            let result = await pool.request()
                .input('FECHA_OPERACION', data.transaccion_detalle.FECHA_OPERACION)
                .input('NUM_CAJERO', data.transaccion_detalle.NUM_CAJERO)
                .input('FOLIO_CONTROL', data.transaccion_detalle.FOLIO_CONTROL)
                .input('ID_PROYECTO', data.transaccion_detalle.ID_PROYECTO)
                .input('OPERACION', data.transaccion_detalle.OPERACION)
                .input('ID_SERVICIO', transaccion.ID_SERVICIO)
                .input('ESTATUS_PAGO', transaccion.ESTATUS_PAGO)
                .input('IMPORTE_PAGADO', transaccion.IMPORTE_PAGADO)
                .input('DESC_SERVICIO', transaccion.DESC_SERVICIO)
                .input('CONTRIBUYENTE', transaccion.CONTRIBUYENTE)
                .input('CVE_DOCTO', transaccion.CVE_DOCTO)
                .input('FOLIO_DOCTO', transaccion.FOLIO_DOCTO)
                .input('OBSERVACIONES', transaccion.OBSERVACIONES)
                .input('REFERENCIA_PAGO', transaccion.REFERENCIA_PAGO)
                .input('ACTUALIZADO', transaccion.ACTUALIZADO)
                .input('AUTH_OR_TOKEN', transaccion.AUTH_OR_TOKEN)
                .input('C_FORMAPAGO', data.transaccion_detalle.C_FORMAPAGO)

                .input('STOCK_MON1P', stock.STOCK_MON1P)
                .input('STOCK_MON5P', stock.STOCK_MON5P)
                .input('STOCK_MON10P', stock.STOCK_MON10P)
                .input('STOCK_BILL50P', stock.STOCK_BILL50P)
                .input('VERSION_APP', stock.VERSION_APP)
                .input('FOLIO_ACTUAL_HOJAS_BANDEJA1', stock.FOLIO_ACTUAL_HOJAS_BANDEJA1)
                .input('FOLIO_ACTUAL_HOJAS_BANDEJA2', stock.FOLIO_ACTUAL_HOJAS_BANDEJA2)
                .input('ImporteCobrar', vending.ImporteCobrar)
                .input('TotalCobrado', vending.TotalCobrado)
                .input('TotalCambio', vending.TotalCambio)
                .input('TotalNoDevuelto', vending.TotalNoDevuelto)
                .input('InMon1P', vending.InMon1P)
                .input('InMon2P', vending.InMon2P)
                .input('InMon5P', vending.InMon5P)
                .input('InMon10P', vending.InMon10P)
                .input('InMon20P', vending.InMon20P)
                .input('InBill20P', vending.InBill20P)
                .input('InBill50P', vending.InBill50P)
                .input('InBill100P', vending.InBill100P)
                .input('InBill200P', vending.InBill200P)
                .input('InBill500P', vending.InBill500P)
                .input('InBill1000P', vending.InBill1000P)
                .input('OutMon1P', vending.OutMon1P)
                .input('OutMon5P', vending.OutMon5P)
                .input('OutMon10P', vending.OutMon10P)
                .input('OutBill50P', vending.OutBill50P)

                .input('RFC',factura.RFC)
                .input('CP',factura.CP)
                .input('NOMBRE',factura.Nombre)
                .input('AP_PATERNO',factura.apPaterno)
                .input('AP_MATERNO',factura.apMaterno)
                .execute("ManageTransaccion");
            return result;
            
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    select: async (params) => {
        try {
            var result = [];

            if (params.ID_PROYECTO > 0 &&  typeof params.FECHA_INICIO !== "undefined" && typeof params.FECHA_FIN !== "undefined") {
                result = await pool.request()
                    .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                    .input('FECHA_INICIO',sql.Date, params.FECHA_INICIO)
                    .input('FECHA_FIN',sql.Date, params.FECHA_FIN)
                    .query("select * from getTransaccion where ID_PROYECTO=@ID_PROYECTO AND convert(varchar,FECHA_PAGO,23) BETWEEN @FECHA_INICIO AND @FECHA_FIN ORDER BY FECHA_PAGO ASC; ");
            }
            else
            {
                result = await pool.request()
                .input('ID_PROYECTO', sql.Int, params.ID_PROYECTO)
                .query("select * from getTransaccion where ID_PROYECTO=@ID_PROYECTO");
            }
            return result;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    },
    getReportexServicios: async(data) =>{
        try {
            let result = await pool.request()
            .input('ID_PROYECTO',data.ID_PROYECTO)
            .input('FECHA_INICIAL',data.FECHA_INICIAL)
            .input('FECHA_FINAL',data.FECHA_FINAL)
            .execute('getReportexServicios');
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    getReporteVentaxPaquete: async(data) =>{
        console.log(data);
        try {
            let result = await pool.request()
            .input('ID_PROYECTO',data.ID_PROYECTO)
            .input('ID_PAQUETE',data.ID_PAQUETE)
            .input('SERIE',data.SERIE)
            .query("select * from getReporteVentaxPaquete where ID_PROYECTO=@ID_PROYECTO AND ID_PAQUETE = @ID_PAQUETE AND CVE_DOCTO = @SERIE");
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    getVentaxCajero: async(data) =>{
        try {
            let result = await pool.request()
            .input('ID_PROYECTO',data.ID_PROYECTO)
            .input('FECHA_INICIAL',data.FECHA_INICIAL)
            .input('FECHA_FINAL',data.FECHA_FINAL)
            .execute("getVentaxCajero");
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    },
    EncuestaCaritas: async(data) =>{
        try {
            let result = await pool.request()
            .input('FOLIO_CONTROL',data.FOLIO_CONTROL)
            .input('RESPUESTA',data.RESPUESTA)
            .execute("InsertEncuesta");
            return result;
        } catch (err) {
            console.log(err.originalError.info);
            return [];
        }
    }
}

export default transaccionModel;