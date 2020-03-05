var db = require('../mySqlConnector.js');

exports.home = function(req, res) {
    console.log("AHHHHHHHHHHHHHHHH");
    res.render('navbar.html');
};

exports.testQuery = function(req, res) { //this test can be called with localhost:8081/testQuery?email=theemail@emailplace.com
    db.testQuery(req,res);
};
