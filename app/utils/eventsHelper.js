// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

// Helper Functions
var helper = {
    // retrieves saved Events from server
    getSavedEvents: function (userId) {
        return axios.get('/api/events/'+userId);
    },
    // adds event to database
    addEvent: function (event, userId) {
        return axios.post('/api/events/'+userId, event);
    },
    //deletes event from db
    deleteEvent: function (eventId, userId) {
        return axios.delete('/api/events/'+userId + '/' + eventId );
    },
    //update event
    updateEvent: function (eventId, eventDetails) {
        return axios.put('/api/events/' + eventId, eventDetails);
    }

};

// export helper to use elsewhere
module.exports = helper;