// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
import { Link } from 'react-router'

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
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Do Good</a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <Link to="/register">
                                Register
                            </Link>
                        </li>
                        <Login />
                    </ul>
                </nav>

                <footer className="navbar navbar-default navbar-fixed-bottom" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 footer-txt">
                                Made by&nbsp;&nbsp;
                                <a target="_blank" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/kshiro622">Katie Shiro</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/hadicodes">Hadi</a>
                                <span className="pull-right">The Do Good App &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span>
        );
    }
});

// Export the component back for use in other files
module.exports = Landing;