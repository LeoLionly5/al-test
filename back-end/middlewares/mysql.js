const mysql = require('mysql');
require('dotenv').config();

const sqlConfig = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

var dbConnection = function(){
    let connection = mysql.createConnection(sqlConfig)
    connection.connect()
    connection.on('error',err=>{
        console.log('Re-connecting lost connection: ');
        connection = mysql.createConnection(sqlConfig)

    })
    return function(){
        return connection
    }
}

module.exports = dbConnection;
