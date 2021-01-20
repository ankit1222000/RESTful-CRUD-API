const mysql=require('mysql');
const dbConfig=require('../configration/database.config.js');

const connection=mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.NAME,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});

/*const connection=mysql.createConnection({
host: "localhost",
user: "nodeuser",
password: "nodeuser@1234",
database: "node"
});*/

connection.connect(function(error){
if(error) console.log(error);
console.log("Successfully Connected to Database");
});

module.exports=connection;