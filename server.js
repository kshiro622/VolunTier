// Requires various packages, makes express app.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var PORT = process.env.PORT || 8080;

// Connects to the MongoDB.
mongoose.connect('mongodb://heroku_wwnw1cmk:585iovp2klnp8hc99lk1aacejo@ds147080.mlab.com:47080/heroku_wwnw1cmk');

var user = require('./models/user.js')

// Prints to the console when the connection is complete.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB connected");
});


// Middleware to parse the body of the request from the client side and middleware to
// set the path to static files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(require('connect-multiparty')());
app.use(session({
    secret: 'super-secret'
}));
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));
app.use(passport.initialize());
app.use(passport.session());

passport.use(user.createStrategy());
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// Requires the routes from the controller.js file and sets the middleware
// to use these routes.
var routes = require("./controllers/controller.js");
app.use("/", routes);

// Starts listening to an enviromental port or local port 8080.
app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
});
