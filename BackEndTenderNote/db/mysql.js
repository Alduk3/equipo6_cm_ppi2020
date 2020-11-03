const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'b6bicqhnjaiodzzvxzly-mysql.services.clever-cloud.com',
  user     : 'udegptirclrzilmx',
  password : 'YO5qnn89LCRROHkyZbVe',
  database : 'b6bicqhnjaiodzzvxzly'
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