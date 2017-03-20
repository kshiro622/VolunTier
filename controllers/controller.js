var express = require("express");
var router = express.Router();
var passport = require('passport');
var user = require('./../models/user.js');


// routes go here
router.post('/register', function (req, res) {
    user.register(new user({ email: req.body.email }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.send('User already exists')
        } else {
            console.log('success');
        }
    });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log(res);
});


// Export routes for server.js to use.
module.exports = router;
