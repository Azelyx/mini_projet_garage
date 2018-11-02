var mysql = require('mysql');
var connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '12345678',
	database: 'garage',
});
module.exports = connection;
