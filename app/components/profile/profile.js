// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
import { Link } from 'react-router'

// Include children components
var Login = require("../landing/children/Login");

// Creating the Profile component
var Profile = React.createClass({

    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            // initial state variables (page load)
        };
    },

    componentWillMount: function () {
        // if (sessionStorage.getItem('do_good_id') != null) {
        //     this.context.router.push('/main');
        // }
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
                {/*Nav*/}
                <nav className="landing-nav navbar navbar-default navbar-fixed-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img src="assets/images/icon.png" id="icon" height="30px" alt="Icon" />
                            <a className="navbar-brand" id="nav-brand" href="#">Noble</a>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="dropdown">
                                <Link to="/register" className="green-link">
                                    Register
                            </Link>
                            </li>
                            <Login />
                        </ul>
                    </div>
                </nav>

                {/*User Profile*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">User Information</h3>
                                </div>
                                <div className="panel-body">
                                    Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Footer*/}
                <footer className="navbar navbar-default navbar-static-bottom footer" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 footer-txt">
                                Made by&nbsp;&nbsp;
                                <a target="_blank" className="green-link" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="green-link" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="green-link" href="https://github.com/kshiro622">Katie Shiro</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="green-link" href="https://github.com/hadicodes">Hadi Yousufi</a>
                                <span className="pull-right">Noble &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span>
        );
    }
});

Profile.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Profile;