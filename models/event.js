// Require mongoose
var mongoose = require("mongoose");
// Create a schema object constructor
var Schema = mongoose.Schema;

// Create the Event schema
var EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#F8F78B'
    },
    textColor: {
        type: String,
        default: 'black'
    }

});

// Create the Event model with the EventSchema
var Event = mongoose.model("Event", EventSchema);

// Exports the Goal model
module.exports = Event;
