var express = require("express");
var router = express.Router();
var passport = require('passport');
var user = require('./../models/user.js');
var Goal = require('./../models/goal.js');
var Event = require('./../models/event.js');
var moment = require('moment');
// moment().format();

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
        image_url: req.body.image_url,
        goal_week_goal: req.body.goal_week,
        goal_month_goal: req.body.goal_week * 4,
        goal_year_goal: req.body.goal_week * 52,
        interests: req.body.interests,
        week_goal_last_update: moment().format('x'),
        month_goal_last_update: moment().format('x'),
        year_goal_last_update: moment().format('x'),
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

router.put('/resetcheck', function (req, res) {

    user.findOne({ '_id': req.body.id }, function (err, respon) {
        if (err) return handleError(err);

        var thisMoment = moment().format('x');

        var weekDiff = Math.floor((thisMoment - respon.week_goal_last_update) / 86400000);
        console.log(Math.floor((thisMoment - respon.week_goal_last_update) / 86400000));
        var monthDiff = Math.floor((thisMoment - respon.month_goal_last_update) / 86400000);
        var yearDiff = Math.floor((thisMoment - respon.year_goal_last_update) / 86400000);

        if (weekDiff >= 7) {
            user.findOneAndUpdate({ _id: req.body.id }, {
                $set: {
                    week_goal_last_update: moment().format('x'),
                    goal_week_current: 0
                }
            }, function (err, respon) {
                if (err) console.log(err);
            });
        }
        if (monthDiff >= 31) {
            user.findOneAndUpdate({ _id: req.body.id }, {
                $set: {
                    month_goal_last_update: moment().format('x'),
                    goal_month_current: 0
                }
            }, function (err, respon) {
                if (err) console.log(err);
            });
        }
        if (yearDiff >= 365) {
            user.findOneAndUpdate({ _id: req.body.id }, {
                $set: {
                    year_goal_last_update: moment().format('x'),
                    goal_year_current: 0
                }
            }, function (err, respon) {
                if (err) console.log(err);
            });
        }
        res.send('check completed');
    })
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

router.put("/api/goals/:userId", function (req, res) {
    user.findByIdAndUpdate(req.params.userId, { $set: { goals: req.body } }, { safe: true, new: true })
        .populate('goals')
        .exec(function (error, doc) {
            if (error) {
                console.log(error);
            }
            else {
                res.json(doc);
            }
        });
});

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

router.get("/user/goaltracker/:id", function (req, res) {
    user.findOne({ '_id': req.params.id }, function (err, user) {
        if (err) return handleError(err);
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

router.put("/api/events/:eventId", function (req, res) {
    Event.findByIdAndUpdate(req.params.eventId, {
        $set: {
            start: req.body.start,
            end: req.body.end
        }
    }, function (error, doc) {
        if (error) {
            console.log(error);
        }
    });
});


// =======================================================
// Goal Tracker routes
// =======================================================

router.put('/goalupdate/:id', function (req, res) {
    console.log(req.body);
    user.findOneAndUpdate({ _id: req.body.user }, {
        $set: {
            goal_week_goal: req.body.newGoal,
            goal_month_goal: req.body.newGoal * 4,
            goal_year_goal: req.body.newGoal * 52
        }
    }, function (err, respon) {
        if (err) console.log(err);
        user.findOne({ '_id': req.body.user }, function (err, user) {
            if (err) return handleError(err);
            res.send(user);
        })
    });
});

router.post('/addhours', function (req, res) {
    user.findOneAndUpdate({ _id: req.body.id }, {
        $set: {
            goal_week_current: Number(req.body.current_week) + Number(req.body.hours),
            goal_month_current: Number(req.body.current_month) + Number(req.body.hours),
            goal_year_current: Number(req.body.current_year) + Number(req.body.hours)
        }
    }, function (err, respon) {
        if (err) console.log(err);
        user.findOne({ '_id': req.body.id }, function (err, user) {
            if (err) return handleError(err);
            res.send(user);
        })
    });
});

router.post('/delhours', function (req, res) {
    var week = Number(req.body.current_week) - Number(req.body.hours);
    var month = Number(req.body.current_month) - Number(req.body.hours);
    var year = Number(req.body.current_year) - Number(req.body.hours);

    if (week < 0) {
        week = 0;
    }
    if (month < 0) {
        month = 0;
    }
    if (year < 0) {
        year = 0;
    }

    user.findOneAndUpdate({ _id: req.body.id }, {
        $set: {
            goal_week_current: week,
            goal_month_current: month,
            goal_year_current: year
        }
    }, function (err, respon) {
        if (err) console.log(err);
        user.findOne({ '_id': req.body.id }, function (err, user) {
            if (err) return handleError(err);
            res.send(user);
        })
    });
});

// Export routes for server.js to use.
module.exports = router;