import mysql from "mysql2/promise";
const pool = async () => {
  try {
    const connection = await mysql.createPool({
      host: "localhost",
      user: "root",
      port: "3000",
      password: "23101993",
      database: "quickaccess",
      debug: false,
      waitForConnections: true,
      multipleStatements: true,
    });
    console.log("Conexión exitosa a la base de datos");
    return connection;
  } catch (error) {
    // console.error('Error al conectar a la base de datos:', error.message);
    console.error("Error al conectar a la base de datos");
    process.exit(1); // Terminar la aplicación si no se puede conectar a la base de datos
  }
};

export default pool;
