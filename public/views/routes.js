/**
 * Simple setup by Huynh
 * Heavily edited by whole team for their own pages.
 */
const bcrypt = require('bcrypt');
const passport = require('passport')

var db = require('../mySqlConnector.js');
var testBack = require('../testbackEnd.js');
const initializePassport = require('../component/login_component/passport-config');

initializePassport(passport, 
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
);

const users = [];


exports.index = function(req, res) {
    
    res.render('index.ejs');
};

exports.home = function(req, res) {

    res.render('home.ejs',{username: req.user.username});
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

exports.test = function(req, res) {
    res.render('test.html');
};

exports.renderLoginPage = (req, res) => {
    res.render('login.ejs');
};

exports.renderSignupPage =  (req, res) => {
    res.render('signup.ejs');
};

exports.handleRegisterForm = async (req, res) => {
    console.log(req.body);
     try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isTutor: req.body.option
        })
        res.redirect('/login');
     } 
     catch {
        res.redirect('/register');
     }
     console.log(users);
};

exports.handleLoginForm = passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
});

exports.logout = (req, res) => {
    req.logOut();
    res.redirect('/');
};

