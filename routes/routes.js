var db = require('../mySqlConnector.js');
var testBack = require('../testbackEnd.js');

exports.home = function(req, res) {
    console.log("AHHHHHHHHHHHHHHHH");
    res.render('index.html');
};

exports.testQuery = function(req, res) { //this test can be called with localhost:8081/testQuery?email=theemail@emailplace.com
    db.testQuery(req,res);
};

exports.backValue = function(req, res) {
    console.log("wowza");
    let data = {};
    data.backValue = testBack.backValue;
    res.send(data);
};

exports.viewSchedule = function(req, res) {
    res.render('ViewSchedule.html')
};

exports.viewTutorSchedule = function(req, res) {
    res.render('ViewTutorSchedule.html')
};

exports.test = function(req, res) {
    res.render('test.html');
};
