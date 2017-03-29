// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
import { Link } from 'react-router'

// Include children components
var Login = require("./../landing/children/Login");

// Creating the Register component
var Profile = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {

        };
    },

    componentWillMount: function () {

    },


    // Here we render the function
    render: function () {
        return (
            <span>
                <nav className="main-nav navbar navbar-default navbar-static-top" role="navigation" >
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img src="assets/images/icon.png" id="icon" height="30px" alt="Icon" />
                            <a className="navbar-brand" href="#">VolunTier</a>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="dropdown">
                                <Link to="/" className="scroll-link">
                                    Home
                                </Link>
                            </li>
                            <Login />
                        </ul>
                    </div>
                </nav>

                <div className="profile-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="assets/images/defaultuser.png" className="img-circle margin-top-50" height="200px" alt="" />
                            </div>
                            <div className="col-md-9">
                                <h1 className="margin-top-80">Name</h1>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h4 className="text-orange">username</h4>
                                        <h4>Location:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Weekly Goal:</h4>
                                        <h4>Progress:</h4>
                                        <h4>Total hours this year:</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <h4>Interests:</h4>
                                        <h6>Interest1</h6>
                                        <h6>Interest2</h6>
                                        <h6>Interest3</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-body margin-top-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        About:
                                        </div>
                                    <div className="panel-body">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Level
                                    </div>
                                    <div className="panel-body">
                                        <p>Level info here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Past Events
                                    </div>
                                    <div className="panel-body">
                                        <p>Past events here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Upcoming Events
                                    </div>
                                    <div className="panel-body">
                                        <p>Upcoming events here</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <footer className="navbar navbar-default navbar-static-bottom footer" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="row footer-top">
                        <div className="container">
                            <div className="col-md-4">
                                <h4 className="footer-top-text">Made By</h4>
                            </div>
                            <div className="col-md-4">
                                <div className="row top-link">
                                    <a target="_blank" className="footer-link" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                </div>
                                <div className="row bottom-link">
                                    <a target="_blank" className="footer-link" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row top-link">
                                    <a target="_blank" className="footer-link" href="https://github.com/kshiro622">Katie Shiro</a>
                                </div>
                                <div className="row bottom-link">
                                    <a target="_blank" className="footer-link" href="https://github.com/hadicodes">Hadi Yousufi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="container">
                            <div className="col-sm-12 footer-txt">
                                Join The Discussion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="email" id="email" placeholder="&nbsp;Email" />
                                <span className="pull-right">VolunTier &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span >
        );
    }
});

Profile.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Profile;