// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

// Helper Functions
var helper = {
    // retrieves saved Goals from server
    getSavedGoals: function (userId) {
        return axios.get('/api/goals/' + userId);
    },
    // adds Goal to database
    addGoal: function (goal, userId) {
        return axios.post('/api/goals/' + userId, goal);
    },
    //deletes Goal from db
    deleteGoal: function (goalId, userId) {
        return axios.delete('/api/saved/' + goalId + '/' + userId);
    }

};

// export helper to use elsewhere
module.exports = helper;