// Include the Main React Dependency
var React = require("react");
var axios = require("axios");


// Include children components
var Calendar = require("./children/calendar");
var Search = require("./children/search");
var GoalsList = require("./children/goalsList");
var Upcoming = require("./children/upcoming");

// Creating the Main component
var Main = React.createClass({

    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            // initial state variables (page load)
        };
    },

    componentWillMount: function () {
        if (sessionStorage.getItem('do_good_id') === null) {
            this.context.router.push('/');
        }
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
                            <a className="navbar-brand" id="nav-brand" href="#">VolunTier</a>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-tasks fa-fw white-icon"></i> <i className="fa fa-caret-down white-icon"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-tasks">
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Task 1</strong>
                                                    <span className="pull-right text-muted">40% Complete</span>
                                                </p>
                                                <div className="progress progress-striped active">
                                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                                        style={{ width: "40%" }}>
                                                        <span className="sr-only">40% Complete (success)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Task 2</strong>
                                                    <span className="pull-right text-muted">20% Complete</span>
                                                </p>
                                                <div className="progress progress-striped active">
                                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span className="sr-only">20% Complete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Task 3</strong>
                                                    <span className="pull-right text-muted">60% Complete</span>
                                                </p>
                                                <div className="progress progress-striped active">
                                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                        style={{ width: "60%" }}>
                                                        <span className="sr-only">60% Complete (warning)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <div>
                                                <p>
                                                    <strong>Task 4</strong>
                                                    <span className="pull-right text-muted">80% Complete</span>
                                                </p>
                                                <div className="progress progress-striped active">
                                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                        style={{ width: "80%" }}>
                                                        <span className="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a className="text-center" href="#">
                                            <strong>See All Tasks</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
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
                            <div className="col-md-8">
                                <Calendar />
                            </div>
                            <div className="col-md-4">
                                <Upcoming />
                            </div>
                        </div>
                        <Search />
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <GoalsList />
                            </div>
                        </div>

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

Main.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Main;