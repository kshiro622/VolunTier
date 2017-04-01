// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
var Level = require("../main/children/grandchildren/level.js");
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
            past_events: [],
            upcoming_events: [],
            interest1: "",
            interest2: "",
            interest3: "",
            goal_week: "",
            goal_week_current: "",
            goal_year_current: "",
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/goaltracker/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                var name = response.data.first_name + " " + response.data.last_name;

                this.setState({
                    name: name,
                    username: response.data.username,
                    image_url: response.data.image_url,
                    bio: response.data.bio,
                    interest1: response.data.interests[0],
                    interest2: response.data.interests[1],
                    interest3: response.data.interests[2],
                    goal_week: response.data.goal_week_goal,
                    goal_week_current: response.data.goal_week_current,
                    goal_year_current: response.data.goal_year_current,
                });

            }.bind(this));

        eventHelper.getSavedEvents(currentUser).then(function (response) {

            // get current date
            var MyDate = new Date();
            MyDate.setDate(MyDate.getDate());
            var todaysMonth = parseInt(('0' + (MyDate.getMonth() + 1)).slice(-2));
            var todaysDay = parseInt(('0' + MyDate.getDate()).slice(-2));

            // separate events into past and upcoming
            var pastEvents = [];
            var upcomingEvents = [];
            var eventsArr = response.data.events;

            for (var i = 0; i < eventsArr.length; i++) {
                var eventDay = parseInt(eventsArr[i].start.slice(8, 10));
                var eventMonth = parseInt(eventsArr[i].start.slice(5, 7));
                var event = { title: eventsArr[i].title, url: eventsArr[i].url };
                if (eventMonth < todaysMonth) {
                    pastEvents.push(event);
                } else if (eventMonth > todaysMonth) {
                    upcomingEvents.push(event);
                } else {
                    if (eventDay <= todaysDay) {
                        pastEvents.push(event);
                    } else if (eventDay > todaysDay) {
                        upcomingEvents.push(event);
                    }
                }
            }
            this.setState({ past_events: pastEvents, upcoming_events: upcomingEvents });
        }.bind(this));
    },

    logout: function () {
        event.preventDefault();
        sessionStorage.clear();
        axios.get('/logout')
            .then(function (response) {
                this.context.router.push('/');
            }.bind(this))
    },

    // Here we render the function
    render: function () {

        // set user image to default if no url exists
        var userImage;
        if (this.state.image_url !== "") {
            userImage = <img src={this.state.image_url} className="img-circle margin-top-50 user-img" height="200px" alt="user image" />
        } else {
            userImage = <img src="http://wpshowdown.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" className="img-circle margin-top-50 user-img" height="200px" alt="default image" />
        }

        // component to be rendered
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
                        <ul className="nav navbar-top-links navbar-right pad-top">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-user fa-fw white-icon"></i> <i className="fa fa-caret-down white-icon"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li>
                                        <Link to="/" className="scroll-link">
                                            <i className="fa fa-dashboard fa-fw"></i>
                                            &nbsp;Dashboard
                                         </Link>
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
                            <div className="col-md-4">
                                {userImage}
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <h1 className="margin-top-80 profile-name-text">{this.state.name}</h1>
                                </div>
                                <div className="row">
                                    <div className="panel panel-default user-info">
                                        <div className="user-panel-body panel-body">
                                            <div className="col-md-6">
                                                <h4 className="text-orange">{this.state.username}</h4>
                                                <h4>Interests: <span className="interest-font">{this.state.interest1}, {this.state.interest2}, {this.state.interest3}</span></h4>
                                            </div>
                                            <div className="col-md-6">
                                                <h4>Weekly Goal: <span className="text-orange">{this.state.goal_week}</span> hrs</h4>
                                                <h4>Goal Progress: <span className="text-orange">{this.state.goal_week_current}</span> hrs</h4>
                                                <h4>Total Hours This Year: <span className="text-orange">{this.state.goal_year_current}</span> hrs</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-body margin-top-20-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="panel panel-default panel-height-profile1">
                                    <div className="panel-heading">
                                        <i className="fa fa-user fa-fw"></i>
                                        About:
                                        </div>
                                    <div className="panel-body about-panel">
                                        <p className="vertical-mid">{this.state.bio}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="panel panel-default panel-height-profile1">
                                    <div className="panel-heading">
                                        <i className="fa fa-heart-o fa-fw"></i>
                                        Level
                                    </div>
                                    <div className="panel-body center-align">
                                        <Level />
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
                                <div className="panel panel-default panel-height-profile2">
                                    <div className="panel-heading">
                                        <i className="fa fa-calendar-o fa-fw"></i>
                                        Past Events
                                    </div>
                                    <div className="panel-body scrollbox-events">
                                        {
                                            this.state.past_events.length === 0 &&
                                            (<div>No Past Events</div>)

                                        }
                                        {
                                            this.state.past_events &&
                                            this.state.past_events.map(function (event, index) {
                                                return <li key={index}><a href={event.url} target="blank" className="event-link">{event.title}</a></li>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default panel-height-profile2">
                                    <div className="panel-heading">
                                        <i className="fa fa-calendar fa-fw"></i>
                                        Upcoming Events
                                    </div>
                                    <div className="panel-body scrollbox-events">
                                        {
                                            this.state.upcoming_events.length === 0 &&
                                            (<div>No Upcoming Events</div>)

                                        }
                                        {
                                            this.state.upcoming_events &&
                                            this.state.upcoming_events.map(function (event, index) {
                                                return <li key={index}><a href={event.url} target="blank" className="event-link">{event.title}</a></li>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <footer className="navbar navbar-default navbar-static-bottom footer" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="row footer-top">
                        <div className="container">
                            <div className="col-md-2">
                                <h4 className="footer-top-text">Made By</h4>
                            </div>
                            <div className="col-md-3">
                                <div className="row top-link">
                                    <p>Aisha Ahmad&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://github.com/aishaprograms">
                                            <img src="assets/images/githubicon.png" alt="GitHub" className="connect-img" />
                                        </a>&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://www.linkedin.com/in/aisha-ahmad/">
                                            <img src="assets/images/linkedinicon.png" alt="LinkedIn" className="connect-img" />
                                        </a>
                                    </p>
                                </div>
                                <div className="row bottom-link">
                                    <p>Justin Carlson&nbsp;&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://github.com/JustinRyanCarlson">
                                            <img src="assets/images/githubicon.png" alt="GitHub" className="connect-img" />
                                        </a>&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://www.linkedin.com/in/justinryancarlson/">
                                            <img src="assets/images/linkedinicon.png" alt="LinkedIn" className="connect-img" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row top-link">
                                    <p>Katie Shiro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://github.com/kshiro622">
                                            <img src="assets/images/githubicon.png" alt="GitHub" className="connect-img" />
                                        </a>&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://www.linkedin.com/in/katie-shiro/">
                                            <img src="assets/images/linkedinicon.png" alt="LinkedIn" className="connect-img" />
                                        </a>
                                    </p>
                                </div>
                                <div className="row bottom-link">
                                    <p>Hadi Yousufi&nbsp;&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://github.com/hadicodes">
                                            <img src="assets/images/githubicon.png" alt="GitHub" className="connect-img" />
                                        </a>&nbsp;&nbsp;
                                        <a target="_blank" className="footer-link" href="https://www.linkedin.com/in/hadiyousufi/">
                                            <img src="assets/images/linkedinicon.png" alt="LinkedIn" className="connect-img" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="container">
                            <div className="col-sm-12 footer-txt">
                                Join The Discussion&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a target="_blank" className="footer-link" href="https://github.com/kshiro622/do-good-app">
                                    <img src="assets/images/gh.png" alt="GitHub" className="connect-img" />
                                </a>
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