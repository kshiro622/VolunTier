var express = require("express");
var router = express.Router();
var passport = require('passport');
var user = require('./../models/user.js');
var Goal = require('./../models/goal.js');


// =======================================================
// Passport routes
// =======================================================
// routes go here
router.post('/register', function (req, res) {
    user.register(new user({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        bio: req.body.bio,
        goal_week: req.body.goal_week,
        interests: req.body.interests
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.send('User already exists')
        } else {
            res.send(user._id);
        }
    });
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (!user) res.send("INVALID LOGIN");
        if (user) res.send(user._id);
    })(req, res, next);
});


router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.send('done');
    });
});

// =======================================================
// GoalsList routes
// =======================================================

// get all goals by user id
router.get("/api/goals/:userId", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the
    // matching one in our db...
    user.findOne({ "_id": req.params.userId })
        // ..and populate all of the goals associated with it
        .populate("goals")
        // now, execute our query
        .exec(function (error, doc) {
            // Log any errors
            if (error) {
                console.log(error);
            } else {
                // Otherwise, send the doc to the browser as a json object
                res.json(doc);
            }
        });
});

// Create a new goal
router.post("/api/goals/:userId", function (req, res) {
    // Create a new Goal and pass the req.body to the entry
    var createGoal = Goal.create(req.body, function (error, goalDoc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
    });
    createGoal.then(function (response) {
        // Use the User id to find and update it's goal
        user.findOneAndUpdate({
            "_id": req.params.userId
        }, {
                $push: {
                    "goals": response._id
                }
            }, {
                safe: true,
                upsert: true,
                new: true
            })
            // ..and populate all of the goals associated with it
            .populate("goals")
            // Execute the above query
            .exec(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                } else {
                    res.json(doc);
                }
            });
    });
});

router.delete("/api/goals/:userId/:goalId", function (req, res) {
    Goal.findByIdAndRemove(req.params.goalId, function (error, goalDoc) {
        // Log any errors
        if (error) {
            console.log(error);
        } else {
            user.findOneAndUpdate({
                "_id": req.params.userId
            }, {
                    $pull: {
                        "goals": goalDoc._id
                    }
                }, {
                    safe: true,
                    new: true
                })
                // ..and populate all of the goals associated with it
                .populate("goals")
                // Execute the above query
                .exec(function (err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json(doc);
                    }
                });
        }
    });
});

// router.put("/api/goals/:goalId", function (req, res) {
//     Goal.findByIdAndUpdate(req.param.goalId, { $set: req.body }, function (error, doc) {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// =======================================================
// Main routes
// =======================================================
router.get("/user/:id", function (req, res) {
    user.findOne({ '_id': req.params.id }, function (err, user) {
        if (err) return handleError(err);
        console.log(user);
        res.send(user);
    })
});

// =======================================================
// Upcoming Events routes
// =======================================================
// get all events by user id
router.get("/api/events/:userId", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the
    // matching one in our db...
    user.findOne({ "_id": req.params.userId })
        // ..and populate all of the events associated with it
        .populate("events")
        // now, execute our query
        .exec(function (error, doc) {
            // Log any errors
            if (error) {
                console.log(error);
            } else {
                // Otherwise, send the doc to the browser as a json object
                res.json(doc);
            }
        });
});

// Create a new Event
router.post("/api/events/:userId", function (req, res) {
    // Create a new Event and pass the req.body to the entry
    var createEvent = Event.create(req.body, function (error, eventDoc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
    });
    createEvent.then(function (response) {
        // Use the User id to find and update it's Event
        user.findOneAndUpdate({
            "_id": req.params.userId
        }, {
                $push: {
                    "events": response._id
                }
            }, {
                safe: true,
                upsert: true,
                new: true
            })
            // ..and populate all of the events associated with it
            .populate("events")
            // Execute the above query
            .exec(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                } else {
                    res.json(doc);
                }
            });
    });
});

router.delete("/api/events/:userId/:eventId", function (req, res) {
    Event.findByIdAndRemove(req.params.eventId, function (error, eventDoc) {
        // Log any errors
        if (error) {
            console.log(error);
        } else {
            user.findOneAndUpdate({
                "_id": req.params.userId
            }, {
                    $pull: {
                        "events": eventDoc._id
                    }
                }, {
                    safe: true,
                    new: true
                })
                // ..and populate all of the events associated with it
                .populate("events")
                // Execute the above query
                .exec(function (err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json(doc);
                    }
                });
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
