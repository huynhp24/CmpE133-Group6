
var express =require('express'),
    routes = require('./routes/routes.js'),
    http = require('http'),
    path = require('path'),
    app = express(),
    request = require('request'),
    bodyParser = require('body-parser');
    

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

//End Mysql connector

//Routes
app.get('/', routes.home);
app.get('/testQuery', routes.testQuery);
app.get('/test', routes.test);
app.get('/getBackValue', routes.backValue);
app.get('/viewSchedule', routes.viewSchedule);


// Start Server
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});