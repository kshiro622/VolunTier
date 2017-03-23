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
    username: String,
    password: String,
    bio: String,
    interests: Array,
    connections: Array,
    events: Array,
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    goals: [{
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }]
});

userSchema.plugin(passportLocalMongoose, {
    usernameLowerCase: true
});

// Model
var User = mongoose.model("User", userSchema);

// Export
module.exports = User;