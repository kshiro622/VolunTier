var express = require("express");
var router = express.Router();
var User = require('./../models/user.js');
var Goal = require('./../models/goal.js');

// get all goals by user id
router.get("/api/goals/:userId", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the
    // matching one in our db...
    User.findOne({ "_id": req.params.userId })
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
    Goal.create(req.body, function (error, doc) {
        // Log any errors
        if (error) {
            console.log(error// Otherwise
            );
        } else {
            // Use the User id to find and update it's goal
            User.findOneAndUpdate({
                "_id": req.params.userId
            }, {
                    $push: {
                        "goal": doc._id
                    }
                }, {
                    safe: true,
                    upsert: true,
                    new: true
                })
                // Execute the above query
                .exec(function (err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    } else {
                    }
                });
        }
    });

});

router.delete("/api/goals/:userId/:goalId", function (req, res) {
    Goal.findByIdAndRemove(req.params.goalId, function (error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        } else {
            console.log(doc);
            User.findOneAndUpdate({
                "_id": req.params.userId
            }, {
                    $pull: {
                        "comment": doc._id
                    }
                })
                // Execute the above query
                .exec(function (err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    }
                });
        }
    });
});

router.put("/api/goals/:goalId", function (req, res) {
    Goal.findByIdAndUpdate(req.param.goalId, { $set: req.body }, function (error, doc) {
        if (error) {
            console.log(error);
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
