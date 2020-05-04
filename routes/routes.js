var db = require('../mySqlConnector.js');
var testBack = require('../testbackEnd.js');

exports.home = function(req, res) {
    console.log("AHHHHHHHHHHHHHHHH");
    res.render('index.html');
    // db.createdb(req, res);
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

exports.createdb = function(req, res) {
    db.createdb(req, res);
};