// Requires various packages, makes express app.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8080;

// Connects to the MongoDB.
mongoose.connect('mongodb://localhost/do_good');

// Prints to the console when the connection is complete.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("MongoDB connected");
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static(__dirname + '/public/assets'));


// Requires the routes from the controller.js file and sets the middleware
// to use these routes.
var routes = require("./controllers/controller.js");
app.use("/", routes);

// Starts listening to an enviromental port or local port 8080.
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
