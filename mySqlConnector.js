//MySql connector
var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbname',
  multipleStatements: true
})

con.connect(function (err) {
  if (err) //throw err;
    console.log("Database connection failed")
  else
  console.log("Connected!");
});

function theActualTestQuery(req, res){
    let params = req.query;
    let email = params.email;
    con.query(`SELECT * 
               FROM User
               WHERE email = "${email}"`, function (error, results, fields) {
      if (error) throw error;
      else {
        console.log(results);
        return res.json({
          data: results
        })
      };
    });
}

module.exports = {
    testQuery: function(req,res){
        theActualTestQuery(req,res);
    },
}