// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
var eventHelper = require("../../utils/eventsHelper.js");
import { Link } from 'react-router'

// Include children components
var Calendar = require("./children/calendar");
var Search = require("./children/search");
var GoalsList = require("./children/goalsList");
var GoalTracker = require("./children/goalTracker");
var VolunteerLevel = require("./children/volunteerLevel");
var EventModal = require("./children/eventModal");
var InfoModal = require("./children/infoModal");

// Creating the Main component
var Main = React.createClass({

    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            first_name: "",
            last_name: "",
            events: [],
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        if (currentUser === null) {
            this.context.router.push('/');
        }

        var userRoute = '/user/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name
                });
            }.bind(this));

        eventHelper.getSavedEvents(currentUser).then(function (response) {
            this.setState({ events: response.data.events });
            var eventsArr = this.state.events;
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'agendaDay,agendaWeek,month,listWeek'
                },
                events: eventsArr,
                eventClick: function (calEvent, jsEvent, view) {
                    $('#event-update-modal-' + calEvent._id).modal('show');
                    if (calEvent.url) {
                        return false;
                    }
                }
            });
        }.bind(this));

        var userId = {
            id: currentUser
        }
        axios.put('/resetcheck', userId).then(function (response) {

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

    updateEvents: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        eventHelper.getSavedEvents(currentUser).then(function (response) {
            this.setState({ events: response.data.events });
            var eventsArr = this.state.events;
            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', eventsArr);
            $('#calendar').fullCalendar('rerenderEvents');
        }.bind(this));
    },

    // Here we render the function
    render: function () {
        return (
            <span>
                <nav className="main-nav navbar navbar-default navbar-fixed-top" role="navigation" >
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
                            <li>
                                Hi {this.state.first_name} {this.state.last_name}!
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-user fa-fw white-icon"></i> <i className="fa fa-caret-down white-icon"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li>
                                        <Link to="/profile" className="scroll-link">
                                            <i className="fa fa-user fa-fw"></i>
                                            Profile
                                         </Link>
                                    </li>
                                    <li>
                                        <a data-toggle="modal" data-target="#infoModal"><i className="fa fa-question-circle fa-fw" aria-hidden="true"></i> Help</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li><a onClick={this.logout}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="main-background">
                    <InfoModal />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                {this.state.events.map(function (element, index) {
                                    return (
                                        <EventModal key={index} _id={element._id} modalId={'event-update-modal-' + element._id} title={element.title} url={element.url} start={element.start} end={element.end} updateEvents={this.updateEvents} />
                                    );
                                }, this)}
                                <Calendar />
                            </div>
                            <div className="col-sm-4">
                                <GoalTracker />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <Search updateEvents={this.updateEvents} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row padding-right-fix">
                                    <VolunteerLevel />
                                </div>
                                <div className="row padding-right-fix">
                                    <GoalsList />
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

Main.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Main;