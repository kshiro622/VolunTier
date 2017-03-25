// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

const userId= sessionStorage.getItem('do_good_id');
// Helper Functions
var helper = {
    // retrieves saved Goals from server
    getSavedGoals: function () {
        return axios.get('/api/goals/'+userId);
    },
    // adds Goal to database
    addGoal: function (goal) {
        return axios.post('/api/goals/'+userId, {'goalText':goal});
    },
    //deletes Goal from db
    deleteGoal: function (goalId) {
        return axios.delete('/api/goals/'+userId + '/' + goalId );
    },
    //update Goal
    updateGoal: function (goalId) {
        return axios.update('/api/goals/' + goalId);
    }

};

// export helper to use elsewhere
module.exports = helper;