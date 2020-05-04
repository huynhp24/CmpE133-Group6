//MySql connector
var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'TUTORING',
  multipleStatements: true
})

con.connect(function (err) {
  if (!!err) 
    { console.log(err)
      console.log("Database connection failed");}
  else
  {console.log("Connected!");}
});


app.get('/', function(req, resp) {
  con.query("SELECT * FROM users", function(error, rows, fields){
  if (!!err) {
    console.log("Database connection failed");
  }
  else{
    console.log("Connected!");
    }
  });
})

app.listen(3306);

