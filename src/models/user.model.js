import pool from "../database/database.js";

const userModel = {
  login: async (user) => {
    try {
      const query = "SELECT * FROM cat_usuario WHERE USUARIO= ?";
      const [rows, fields] = await pool.execute(query, [user.username]);
      //console.log(rows);
      pool.end(); // Cerrar la conexión después de ejecutar la consulta
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  // getUsers: async (data) => {
  //     try {
  //         let result = await pool.request()
  //         .input('id_proyecto',data.ID_PROYECTO)
  //         .query("select * from getUsers WHERE ID_PROYECTO = @id_proyecto");
  //         return result;
  //     } catch (err) {
  //         console.log(err);
  //         return [];
  //     }

  // },
  insert: async (user) => {
    const connection = await pool();
    try {
      const query = "CALL ManageUser(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        user.NOMBRES,
        user.AP_PATERNO,
        user.AP_MATERNO,
        user.CURP,
        user.FECHA_NACIMIENTO,
        user.TELEFONO,
        user.EMAIL,
        user.USUARIO,
        user.CONTRASENA,
        user.ID_PERFIL,
        user.ID_USUARIO,
        user.FECHA_VIGENCIA,
        user.ESTATUS,
        user.OPERACION,
      ];
      const [rows] = await connection.execute(query, values);
      connection.end();
      return rows;
    } catch (err) {
      console.log(err);
      return [];
    } finally {
    }
  },
  // getUsuario: async () => {
  // },
  // getUsuarioPermisos: async (id_user) => {
  //     try {
  //         let result = await pool.request()
  //             .input('id_user', sql.Int, id_user)
  //             .query("SELECT CREAR,ELIMINAR,ACTUALIZAR,CONSULTAR FROM CTRL_USUARIOS_PERMISOS where ID_USUARIO = @id_user ");
  //         return result;
  //     } catch (err) {
  //         console.log(err);
  //         return [];
  //     }
  // },
  // getUsuarioMenu: async (id_user) => {
  //     try {
  //         let result = await pool.request()
  //             .input('id_user', sql.Int, id_user)
  //             .query("SELECT * from getDataMenu where ID_USUARIO = @id_user AND ESTATUS = 1");
  //         return result;
  //     } catch (err) {
  //         console.log(err);
  //         return [];
  //     }
  // },
  // manageMenuUser: async (menu) => {
  //     try {
  //         let result = await pool.request()
  //             .input('ID_USUARIO', menu.ID_USUARIO)
  //             .input('ID_MENU', menu.ID_MENU)
  //             .input('ESTATUS', menu.ESTATUS)
  //             // .input('OPERACION',menu.OPERACION)
  //             .execute("ManageMenuUsuario");
  //         return result;
  //     } catch (err) {
  //         console.log(err);
  //         return [];
  //     }
  // }
};

export default userModel;
