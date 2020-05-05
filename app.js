
const express =require('express'),
    routes = require('./routes/routes.js'),
    http = require('http'),
    path = require('path'),
    app = express(),
    request = require('request'),
    bodyParser = require('body-parser');
    flash = require('express-flash'); //used for flashing error messages(CHRIS)
    session = require('express-session'); //used for (CHRIS)
    passport = require('passport');// used for login authentication(CHRIS)
    methodOverride = require('method-override'); //override post/get method (CHRIS)

    checkAuthenticated = require('./component/login_component/checkAuthenticated'); //if user is not authenticated, not allow to access pages other than login, register, index pages(CHRIS)
    checkNotAuthenticated = require('./component/login_component/checkNotAuthenticated');//if user is authenticated, redirect to home page if user go to /login page(CHRIS)

app.use(
	bodyParser.urlencoded({
    	extended: true,
	})
);

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//End Mysql connector

//Routes
app.get('/', routes.home);
app.get('/testQuery', routes.testQuery);
app.get('/test', routes.test);
app.get('/getBackValue', routes.backValue);
app.get('/viewSchedule', routes.viewSchedule);
app.get('/viewTutorSchedule', routes.viewTutorSchedule);
app.get("/createdb", routes.createdb);

// Start Server
http.createServer(app).listen(app.get("port"), "0.0.0.0", function () {
	console.log("Express server listening on port " + app.get("port"));
});