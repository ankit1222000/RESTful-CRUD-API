var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "nodeuser@1234",
  database: "node"
});

con.connect(function(err){
if(err) console.log(err);
var sqlinsert="INSERT INTO CUSTOMER(email,name,active) VALUES ('ejfej@gmail.com','Rahul',0)";
var sqlselect="Select * from CUSTOMER";
var values = [
    ['John@gmail.com', 'Highway 71',1],
    ['Peter', 'Lowstreet 4',1],
    ['Amy', 'Apple st 652',1],
    ['Hannah', 'Mountain 21',1],
    ['Michael', 'Valley 345',1],
    ['Sandy', 'Ocean blvd 2',1],
    ['Betty', 'Green Grass 1',1],
    ['Richard', 'Sky st 331',1],
    ['Susan', 'One way 98',1],
    ['Vicky', 'Yellow Garden 2',0],
    ['Ben', 'Park Lane 38',0],
    ['William', 'Central st 954',0],
    ['Chuck', 'Main Road 989',0],
    ['Viola', 'Sideway 1633',0]
  ];
con.query("TRUNCATE TABLE CUSTOMER",(err,result,fields)=>{
if(err) console.log(err);
console.log(result);
//console.log(result.insertId);
});
});