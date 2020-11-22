var mysql = require('mysql')
const util = require('util')
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'bzl6esb6ucotzupjuagz-mysql.services.clever-cloud.com',
  user     : 'upvspmpazsfbrbtk',
  password : 'ubsp0imz4MWDMhDpncqB',
  database : 'bzl6esb6ucotzupjuagz'
});

pool.on('release', function (connection) {
  console.log('Connection %d released',
  connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports = {connection: pool}
