// Dependencies
var mongoose = require("mongoose");

// Schema
var Schema = mongoose.Schema;

// Rules
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    hash: String,
    salt: String,
    bio: String,
    interests: Array,
    connections: Array,
    events: Array,
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now }
});

// Model
var User = mongoose.model("User", userSchema);

// Export
module.exports = User;