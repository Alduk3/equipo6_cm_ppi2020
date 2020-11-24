var mysql = require('mysql')
const util = require('util')
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.DB_Host,
  user     : process.env.DB_User,
  password : process.env.DB_Password,
  database : process.env.DB_Database
});

pool.on('release', function (connection) {
  console.log('Connection %d released',
  connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports = {connection: pool}
