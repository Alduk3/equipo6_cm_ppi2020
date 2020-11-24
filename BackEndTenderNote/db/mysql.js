const mysql      = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
  host     : process.env.DB_Host,
  user     : process.env.DB_User,
  password : process.env.DB_Password,
  database : process.env.DB_Database,
  multipleStatements: true
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}