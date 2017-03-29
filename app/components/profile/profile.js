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
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                <img src="" className="" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="container">
                                    {/*Name*/}
                                    {/*Location*/}
                                    {/*Interests*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-body">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="container">
                                {/*Bio*/}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="container">
                                {/*Hour Goal*/}
                                {/*Progress on goal*/}
                                {/*Total Lifetime hours*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-contact">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="container">
                                {/*Past Events*/}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                {/*Upcoming Events*/}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                {/*Level*/}
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