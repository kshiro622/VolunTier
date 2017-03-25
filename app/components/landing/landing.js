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

    componentWillMount: function () {
        if (sessionStorage.getItem('do_good_id') != null) {
            this.context.router.push('/main');
        }
    },

    componentDidUpdate: function () {
        // what to do when component updates    
    },

    registerPageClick: function () {
        this.context.router.push('register');
    },

    // Here we render the function
    render: function () {
        return (
            <span>
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
                            <a className="navbar-brand" id="nav-brand" href="#">Volun<span id="nav-brand-2">Tier</span></a>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="dropdown">
                                <Link to="/register" className="scroll-link">
                                    Register
                                </Link>
                            </li>
                            <Login />
                        </ul>
                    </div>
                </nav>
                {/*Top Banner*/}
                <div id="top-banner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-220 large-h1"> VolunTier </h1>
                            <hr />
                            <h4> Measuring your impact made easy. </h4>
                            <button type="button" className="btn btn-lg btn-outline-success margin-top-50" onClick={this.registerPageClick}>Get Started</button>
                        </div>
                    </div>
                </div>
                {/*About*/}
                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="assets/images/chart-light.jpg" height="450px" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h1 className="margin-top-130">Helping You Give Back</h1>
                                <h4 className="text-orange">Set goals. Track your progress. Showcase your profile.</h4>
                                <h5>VolunTier helps you give back when you have an hour or two to spare. Volunteer on your schedule and track your progress. Share your profile with others and make connections.</h5>
                                <button type="button" className="btn btn-lg orange-btn margin-top-50" onClick={this.registerPageClick}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*How it works*/}
                <div id="how-it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="margin-top-90">How it Works</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src="assets/images/search.jpg" className="img-circle" height="180px" alt="" />
                                <h4 className="text-green">Search for Events</h4>
                                <p>Browse upcoming events in any area and add them to your volunteer calendar.</p>
                            </div>
                            <div className="col-md-4">
                                {/*<i className="fa fa-wrench fa-fw text-green"></i>*/}
                                <img src="assets/images/volunteers2.jpg" className="img-circle" height="180px" alt="" />
                                <h4 className="text-green">Volunteer</h4>
                                <p>Attend events to meet your volunteer hour goal.</p>
                            </div>
                            <div className="col-md-4">
                                <img src="assets/images/laptop3.jpg" className="img-circle" height="180px" alt="" />
                                <h4 className="text-green">Track Progress</h4>
                                <p>Visualize your impact with our trackers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="beyond-tracking">
                    <div className="container">
                        <div className="row">
                            <h1 className="margin-top-90">Beyond Tracking</h1>
                            <div className="col-md-6">
                                <i className="fa fa-globe fa-fw text-orange"></i>
                                <h3>Showcase Your Profile.</h3>
                                <p>Your impact will be visible to others on your profile. Whether you're a student or a professional, show others the work you've put in. </p>
                                <button type="button" className="btn btn-lg orange-btn margin-top-50" onClick={this.registerPageClick}>Create Profile</button>
                            </div>
                            <div className="col-md-6">
                                <i className="fa fa-comments fa-fw text-orange"></i>
                                <h3>Connect with Others</h3>
                                <p>Find others with similar interests and locations. Connecting with other volunteers can help make giving back even better.</p>
                                <button type="button" className="btn btn-lg orange-btn margin-top-50">Find Connections</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Extra Features*/}
                <div id="features">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="margin-top-90">What People Are Saying</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <h5 className="italic">"VolunTier keeps me motivated to meet my goal of giving back to the community 5 hours a month!"</h5>
                        </div>
                        <div className="col-md-5">
                            <h5 className="italic">"Because of VolunTier, I can fit doing my part into my schedule and see my impact."</h5>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

                <footer className="navbar navbar-default navbar-static-bottom footer" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="row footer-top">
                        <div className="container">
                            <div className="col-md-4">
                                <h4 className="footer-top-text">Help Us Grow</h4>
                            </div>
                            <div className="col-md-4">
                                <h4 className="footer-top-text">Join The Discussion</h4>
                            </div>
                            <div className="col-md-4">
                                <h4 className="footer-top-text">Connect</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="container">
                            <div className="col-sm-12 footer-txt">
                                Made by&nbsp;&nbsp;
                                <a target="_blank" className="footer-link" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="footer-link" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="footer-link" href="https://github.com/kshiro622">Katie Shiro</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" className="footer-link" href="https://github.com/hadicodes">Hadi Yousufi</a>
                                <span className="pull-right">VolunTier &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span >
        );
    }
});

Landing.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Landing;