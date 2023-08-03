import db from "../database/database.js";
import sql from "mssql";
//const pool = await db.connectDb();

const inmuebleModel = {
  getAllInmuebles: async () => {
    try {
      let result = await pool.request().query("select * from ctrl_inmueble");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  /*
getById: async (id, callback) => {
    const query = "SELECT * FROM inmueble WHERE ID_INMUEBLE = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  }

  static create(newInmueble, callback) {
    const query = "INSERT INTO inmueble SET ?";
    db.query(query, [newInmueble], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.insertId);
      }
    });
  }

  static update(id, updatedInmueble, callback) {
    const query = "UPDATE inmueble SET ? WHERE ID_INMUEBLE = ?";
    db.query(query, [updatedInmueble, id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.affectedRows);
      }
    });
  }

  static delete(id, callback) {
    const query = "DELETE FROM inmueble WHERE ID_INMUEBLE = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results.affectedRows);
      }
    });
  } */
};

export default inmuebleModel;
