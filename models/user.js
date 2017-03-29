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
    image_url: String,
    bio: String,
    goal_week_current: { type: Number, default: 0 },
    goal_month_current: { type: Number, default: 0 },
    goal_year_current: { type: Number, default: 0 },
    week_goal_last_update: Number,
    month_goal_last_update: Number,
    year_goal_last_update: Number,
    goal_week_goal: Number,
    goal_month_goal: Number,
    goal_year_goal: Number,
    interests: Array,
    connections: Array,
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    goals: [{
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }]
});

userSchema.plugin(passportLocalMongoose, {
    usernameLowerCase: true
});

// Model
var User = mongoose.model("User", userSchema);

// Export
module.exports = User;