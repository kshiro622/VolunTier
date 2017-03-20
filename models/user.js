// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

// Schema
var Schema = mongoose.Schema;

// Rules
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    bio: String,
    interests: Array,
    connections: Array,
    events: Array,
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

// Model
var User = mongoose.model("User", userSchema);

// Export
module.exports = User;