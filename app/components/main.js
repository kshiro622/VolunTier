// Include the Main React Dependency
var React = require("react");
var axios = require("axios");

// Include children components


// Creating the Main component
var Main = React.createClass({

    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            // initial state variables (page load)
        };
    },

    componentDidMount: function () {
        // what to do when the component mounts
    },


    componentDidUpdate: function () {
        // what to do when component updates    
    },

    // Here we render the function
    render: function () {
        return (
            // what to render
        );
    }
});

// Export the component back for use in other files
module.exports = Main;