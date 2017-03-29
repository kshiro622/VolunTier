// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
var eventHelper = require("../../utils/eventsHelper.js")



// Include children components
var Calendar = require("./children/calendar");
var Search = require("./children/search");
var GoalsList = require("./children/goalsList");
var GoalTracker = require("./children/goalTracker");
var Today = require("./children/today");
var CurrentGoal = require("./children/currentGoal");
var VolunteerLevel = require("./children/volunteerLevel");

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
                events: eventsArr
            });
        }.bind(this));
    },

    componentDidMount: function () {
        // what to do when the component mounts
    },


    componentDidUpdate: function () {
        // what to do when component updates    
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
        console.log('updating events');
        eventHelper.getSavedEvents(currentUser).then(function (response) {
            this.setState({ events: response.data.events });
            var eventsArr = this.state.events;
            $('#calendar').fullCalendar('removeEvents');
            $('#calendar').fullCalendar('addEventSource', eventsArr);
            $('#calendar').fullCalendar('rerenderEvents');
        }.bind(this));
    },

    updateTracker: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                this.setState({

                });
            }.bind(this))
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
                        <ul className="nav navbar-top-links navbar-right">
                            <li>
                                Hi {this.state.first_name} {this.state.last_name}!
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-user fa-fw white-icon"></i> <i className="fa fa-caret-down white-icon"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
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

                <div className="main-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <Today />
                            </div>
                            <div className="col-md-6"></div>
                            <div className="col-md-4">
                                <div className="row">
                                    <CurrentGoal />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <Calendar />
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <GoalTracker />
                                </div>
                                <div className="row">
                                    <VolunteerLevel />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <Search updateEvents={this.updateEvents} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <GoalsList />
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

Main.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Main;