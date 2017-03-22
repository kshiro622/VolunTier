// Require mongoose
var mongoose = require("mongoose");
// Create a schema object constructor
var Schema = mongoose.Schema;

// Create the Goal schema
var GoalSchema = new Schema({
    // goalText is a string that's required
    goalText: {
        type: String,
        required: true
    }
});

// Create the Goal model with the GoalSchema
var Goal = mongoose.model("Goal", GoalSchema);

// Exports the Goal model
module.exports = Goal;
