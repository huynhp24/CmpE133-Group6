//MySql connector
var express = require('express');
var mysql = require('mysql');

var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'zcj5948405',
    database: 'TUTORING',
	multipleStatements: true
})

con.connect((err) => {
	if (err) {
		console.log('Not connected!');
  }
  else{
    console.log('Connected sucessfully');
  }
	
});

con.query('SELECT * FROM USERS', function (error, results, fields) {
    if (error)
        throw error;
    results.forEach(result => {
        console.log(result);
    });
});

module.exports = {
	createdb: function (req, res) {
		createdbTest(req, res);
  },
  insertQuestion: (req, res) =>{
    var description = req.body.questionDescInput;
    console.log(description +  " A Descrptions"); 

    var keyword = req.body.questionKeyInput;
    var title = req.body.questionTitleInput;
    var username = 'yesterday1965'; 
    con.query("insert into questions (username, title, description, keyword) values(?,?,?,?) ", [username, title, description, keyword], function(err, results, fields) {
      if (err) throw err;
      console.log(results); 
      res.redirect('/helpMe');
      });
    },getQuestions: (req, res) => {
      var username = 'yesterday1965'; 
  
      con.query('SELECT * FROM questions WHERE username = ?', [username], function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.json(result);
      }); 
    }, 
    getTutorsBySubjects: (req, res) => {
      var keyword = req.params.subject; 
      
      var questionId = req.params.questionid; 
      console.log("Logging some thing!")
      console.log(req.params);
      console.log(keyword);
      con.query('select u.name, q.keyword from users u inner join questions q on u.username = q.username where q.keyword = ? ', [keyword], function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.render('helpMe/chooseTutor', {databaseresults: result} );
      }); 

    }
  }


function createdbTest(req, res) {
    let sql = 'source tutoringSchema.sql';
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created');
	});
}
// app.post('/auth', function(req, res) {
// 	var username = req.body.username;
// 	var password = req.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = MD5(?)', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.username = username;
// 				res.redirect('/home');
// 			} else {
// 				res.send('Incorrect Username and/or Password!');
// 			}			
// 			res.end();
// 		});
// 	} else {
// 		res.send('Please enter Username and Password!');
// 		res.end();
// 	}
// });
