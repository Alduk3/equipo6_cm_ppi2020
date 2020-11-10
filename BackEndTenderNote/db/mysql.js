const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bgwnlflev2g5vo80asja-mysql.services.clever-cloud.com',
  user     : 'uqqm9uvyvmbyc2vs',
  password : 'AKLMiuj7auE5aGQ1OsXh',
  database : 'bgwnlflev2g5vo80asja'
});

/*connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});*/

module.exports =  {connection: connection}