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

exports.helpMe = function(req, res) {
    res.render('helpMe/helpMe');
};

exports.chooseTutor = (req, res) => {
    db.getTutorsBySubjects(req, res); 
    // res.render('helpMe/chooseTutor'); 
}; 

exports.helpMePost = function(req, res) {
    console.log("There was post of data!"); 
    db.insertQuestion(req, res); 
};

exports.helpMeData = function(req, res) {
    
    db.getQuestions(req, res); 
};

exports.createdb = function(req, res) {
    db.createdb(req, res);
};