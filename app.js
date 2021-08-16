var express = require('express');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const https = require("https");
const fs = require("fs");
const app = express();
const monk = require('monk');
const db = monk('127.0.0.1:27017/oCV');

app.set('port', process.env.PORT || 3000);
//SSL key authentication
const privateKey = fs.readFileSync('/etc/letsencrypt/live/jdvivian.co.uk-0001/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/jdvivian.co.uk-0001/fullchain.pem', 'utf8');
const credentials = {
    key: privateKey,
    cert: certificate
};

const server = https.createServer(credentials, app).listen(443, () => console.log("Listening on HTTPS on port " + app.get('port')));

//Statics
app.use('/styles', express.static('styles'));
app.use('/images', express.static('images'));
app.use('/scripts', express.static('scripts'));
app.use('/pages', express.static('pages'));
app.use('/files', express.static('files'));

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');


//BodyParser
app.use(express.urlencoded({ extended: false }));


//app.use(express.static('public')); //ignore to allow for / route
app.use(express.json({ limit: '1mb' }));

//Routes
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);





module.exports = app;
