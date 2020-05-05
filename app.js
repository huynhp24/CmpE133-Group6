// .env (CHRIS)
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}


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


app.set('port', 8081);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/public/style')));
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:  false,
  saveUninitialized: false
}));
app.use(passport.initialize()); // for login(CHRIS)
app.use(passport.session()); //for login(CHRIS)
app.use(methodOverride('_method')); //for logout(CHRIS)

//End Mysql connector

//Routes
app.get('/', routes.index);//Introduction page (CHRIS)
app.get('/home',checkAuthenticated, routes.home);// home page that authenticated user will see right after login(CHRIS)
app.get('/login',checkNotAuthenticated, routes.renderLoginPage); // render login page(CHRIS)
app.get('/register',checkNotAuthenticated, routes.renderSignupPage); // render register page(CHRIS)
app.post('/register',checkNotAuthenticated, routes.handleRegisterForm); // handle registration form data(CHRIS)
app.post('/login',checkNotAuthenticated, routes.handleLoginForm);// handle login form data(CHRIS)
app.delete('/logout',routes.logout);// logout(CHRIS)
app.get('/testQuery', routes.testQuery);
app.get('/test', routes.test);
app.get('/getBackValue', routes.backValue); 


// Start Server
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});