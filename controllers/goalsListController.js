var express = require("express");
var router = express.Router();
var user = require('./../models/user.js');

// get all goals by user id
app.get("/api/goals/:id", function (req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the
    // matching one in our db...
    User.findOne({ "_id": req.params.id })
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
app.post("/api/goals/:id", function (req, res) {
    // Use the article id to find and update it's comment
    User.findOneAndUpdate({
        "_id": req.params.id
    }, {
            $push: {
                "goals": req.body.goal
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

});

app.delete("/api/goals/:goal/:id", function (req, res) {
    User.findOneAndUpdate({
        "_id": req.params.id
    }, {
            $pull: {
                "goals": req.params.goal
            }
        })
        // Execute the above query
        .exec(function (err, doc) {
            // Log any errors
            if (err) {
                console.log(err);
            }
        });
});



// Export routes for server.js to use.
module.exports = router;
