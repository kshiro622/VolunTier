// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
var eventHelper = require("../../utils/eventsHelper.js");
import { Link } from 'react-router'

// Include children components
var Login = require("./../landing/children/Login");

// Creating the Register component
var Profile = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            username: "",
            name: "",
            image_url: "",
            bio: "",
            past_events: "",
            upcoming_events: "",
            interest1: "",
            interest2: "",
            interest3: "",
            goal_week: "",
            goal_week_current: "",
            goal_year_current: "",
            level: "",
            events: ""
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/goaltracker/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                var name = response.data.first_name + " " + response.data.last_name;
                var totalHoursThisYear = response.data.goal_year_current;

                this.setState({
                    name: name,
                    username: response.data.username,
                    image_url: response.data.image_url,
                    bio: response.data.bio,
                    past_events: pastEvents,
                    upcoming_events: upcomingEvents,
                    interest1: response.data.interests[0],
                    interest2: response.data.interests[1],
                    interest3: response.data.interests[2],
                    goal_week: response.data.goal_week_goal,
                    goal_week_current: response.data.goal_week_current,
                    goal_year_current: response.data.goal_year_current,
                    level: totalHoursThisYear
                });

            }.bind(this));

        eventHelper.getSavedEvents(currentUser).then(function (response) {
            var pastEvents;
            var upcomingEvents;
            this.setState({ events: response.data.events });
        }.bind(this));
    },

    // Here we render the function
    render: function () {
        var tier = this.state.level;

        var currentLevel = null;
        if (tier === 0) {
            currentLevel = (
                <div>
                    <h2>Beginner Level</h2>
                    <img src="assets/images/tier0.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 0 badge" />
                    <p>Start getting some hours in!</p>
                </div>
            );
        } else if (1 <= tier && tier < 10) {
            currentLevel = (
                <div>
                    <h2>Level 1</h2>
                    <p>1-9 hours</p>
                    <img src="assets/images/tier1.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 1 badge" />
                    <h5 className="level-text">Great start! You are already making a difference. Every hour counts!</h5>
                </div>
            );
        } else if (10 <= tier && tier < 20) {
            currentLevel = (
                <div>
                    <h2>Level 2</h2>
                    <p>10-19 hours</p>
                    <img src="assets/images/tier2.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 2 badge" />
                    <h5 className="level-text">You are really making an impact!</h5>
                </div>
            );
        } else if (20 <= tier && tier < 50) {
            currentLevel = (
                <div>
                    <h2>Level 3</h2>
                    <p>20-49 hours</p>
                    <img src="assets/images/tier3.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 3 badge" />
                    <h5 className="level-text">Now you can really start to see what you have accomplished!</h5>
                </div>
            );
        } else if (50 <= tier && tier < 100) {
            currentLevel = (
                <div>
                    <h2>Level 4</h2>
                    <p>50-99 hours</p>
                    <img src="assets/images/tier4.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 4 badge" />
                    <h5 className="level-text">What an amazing feat, you are almost to the top!</h5>
                </div>
            );
        } else if (100 <= tier) {
            currentLevel = (
                <div>
                    <h2>Level 5</h2>
                    <p>100 hours or more</p>
                    <img src="assets/images/tier5.png" height="150px" className="margin-bottom-30 margin-top-20" alt="Level 5 badge" />
                    <h5 className="level-text">You have reached the top! The world is a better place because of you!</h5>
                </div>
            );
        }

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
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-user fa-fw white-icon"></i> <i className="fa fa-caret-down white-icon"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li>
                                        <Link to="/" className="scroll-link">
                                            <i className="fa fa-dashboard fa-fw"></i>
                                            Dashboard
                                         </Link>
                                    </li>
                                    <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li><a onClick={this.logout}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                                    </li>
                                </ul>
                            </li>
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
                                <h1 className="margin-top-80">{this.state.name}</h1>
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4 className="text-orange">{this.state.username}</h4>
                                    </div>
                                    <div className="col-md-5">
                                        <h4>Weekly Goal: {this.state.goal_week} hrs</h4>
                                        <h4>Goal Progress: {this.state.goal_week_current} hrs</h4>
                                        <h4>Total Hours This Year: {this.state.goal_year_current} hrs</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <h4>Interests:</h4>
                                        <h6>{this.state.interest1}</h6>
                                        <h6>{this.state.interest2}</h6>
                                        <h6>{this.state.interest3}</h6>
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
                                        <p>{this.state.bio}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Level
                                    </div>
                                    <div className="panel-body center-align">
                                        {currentLevel}
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