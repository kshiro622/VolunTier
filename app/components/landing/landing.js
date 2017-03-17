// Include the Main React Dependency
var React = require("react");
var axios = require("axios");

// Include children components
var Login = require("./children/Login");

// Creating the Main component
var Landing = React.createClass({

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
            <span>
                <Login />
            </span>
        );
    }
});

// Export the component back for use in other files
module.exports = Landing;