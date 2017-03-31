// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

// Helper Functions
var helper = {
    // retrieves saved Goals from server
    getSavedGoals: function (userId) {
        return axios.get('/api/goals/'+userId);
    },
    // adds Goal to database
    addGoal: function (goal, userId) {
        return axios.post('/api/goals/'+userId, {'goalText':goal});
    },
    //deletes Goal from db
    deleteGoal: function (goalId, userId) {
        return axios.delete('/api/goals/'+userId + '/' + goalId );
    },
    //update Goal
    updateGoals: function (userId, goals) {
        return axios.put('/api/goals/' + userId, goals);
    }

};

// export helper to use elsewhere
module.exports = helper;