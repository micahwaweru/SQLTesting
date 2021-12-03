const mysql = require('mysql2');
//require('dotenv').config();

const db = new mysql.createConnection(
    {  
      host: 'localhost',
      user: 'root',
      password:'passwordhere',
      database:'sequel_db',
      port: 3306


    }
);

module.exports=db;