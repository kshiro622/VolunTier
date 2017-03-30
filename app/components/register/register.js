// Include the Main React Dependency
var React = require("react");
var axios = require("axios");
import { Link } from 'react-router'

// Include children components
var Login = require("./../landing/children/Login");

// Creating the Register component
var Register = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            username: "",
            password: "",
            confirmPassword: "",
            first_name: "",
            last_name: "",
            image_url: "",
            bio: "",
            interest1: "",
            interest2: "",
            interest3: "",
            goal_week: "",
            message: "Submit",
            error: ""
        };
    },

    handleUsernameChange: function (event) {
        this.setState({
            username: event.target.value
        });

    },
    handlePasswordChange: function (event) {
        this.setState({
            password: event.target.value
        });

    },
    handleFirst_NameChange: function (event) {
        this.setState({
            first_name: event.target.value
        });

    },
    handleConfirmPasswordChange: function (event) {
        this.setState({
            confirmPassword: event.target.value
        });

    },
    handleLast_NameChange: function (event) {
        this.setState({
            last_name: event.target.value
        });

    },
    handleBioChange: function (event) {
        this.setState({
            bio: event.target.value
        });

    },
    handleImageUrlChange: function (event) {
        this.setState({
            image_url: event.target.value
        });

    },
    handleInterest1Change: function (event) {
        this.setState({
            interest1: event.target.value
        });

    },
    handleInterest2Change: function (event) {
        this.setState({
            interest2: event.target.value
        });

    },
    handleInterest3Change: function (event) {
        this.setState({
            interest3: event.target.value
        });

    },
    handleGoalChange: function (event) {
        this.setState({
            goal_week: event.target.value
        });

    },

    handleRegisterSubmit: function (event) {
        event.preventDefault();
        if (this.state.password != this.state.confirmPassword) {
            this.setState({
                password: "",
                confirmPassword: "",
                error: "Passwords do not match, please try again"
            })
        } else if (this.state.password.length < 6) {
            this.setState({
                password: "",
                confirmPassword: "",
                error: "Password must be at least 6 characters, please try again"
            })
        } else {
            this.setState({
                message: "Registering..."
            });

            var usrInterests = [];
            usrInterests.push(this.state.interest1);
            usrInterests.push(this.state.interest2);
            usrInterests.push(this.state.interest3);

            var cred = {
                username: this.state.username,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                bio: this.state.bio,
                image_url: this.state.image_url,
                goal_week: this.state.goal_week,
                interests: usrInterests,
            }
            axios.post('/register', cred)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data === "User already exists") {
                        this.setState({
                            error: "User already exists, please select a new username or login"
                        })
                    } else {
                        sessionStorage.setItem('do_good_id', response.data);
                        this.context.router.push('main');
                    }
                }.bind(this))
        }
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

                <div id="register-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-sm-12 col-md-10">
                                <div className="login-panel panel panel-default semi-opaque">
                                    <div className="panel-heading">
                                        <h1 className="panel-title text-center large-h1 ">Start VolunTiering</h1>
                                    </div>
                                    <div className="panel-body">
                                        <form role="form" onSubmit={this.handleRegisterSubmit} data-toggle="validator">
                                            <fieldset>
                                                {this.state.error}
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <div htmlFor="first_name">First Name</div>
                                                        <input className="form-control" placeholder="" name="first_name" type="text" value={this.state.first_name} onChange={this.handleFirst_NameChange} autoFocus required />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div htmlFor="last_name">Last Name</div>
                                                        <input className="form-control" placeholder="" name="last_name" type="text" value={this.state.last_name} onChange={this.handleLast_NameChange} required />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <div htmlFor="username">Username</div>
                                                        <input className="form-control" placeholder="" name="username" type="username" value={this.state.username} onChange={this.handleUsernameChange} required />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div htmlFor="last_name">Goal (hr/week)</div>
                                                        <input className="form-control" placeholder="" name="goal_week" type="number" value={this.state.goal_week} onChange={this.handleGoalChange} data-toggle="tooltip" data-placement="bottom" title="How many hours/week are you looking to volunteer? We use this for goal tracking purposes." required />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12">
                                                        <div htmlFor="bio">Bio</div>
                                                        <textarea className="form-control" rows="4" placeholder="" name="bio" type="text" value={this.state.bio} onChange={this.handleBioChange} data-toggle="tooltip" data-placement="bottom" title="Who are you as a volunteer? This information will be displayed on your profile page to be shared with others." required />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12">
                                                        <div htmlFor="interests">Interests</div>
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <input className="form-control"
                                                                    placeholder=""
                                                                    name="interest1"
                                                                    type="text"
                                                                    value={this.state.interest1}
                                                                    onChange={this.handleInterest1Change}
                                                                    required
                                                                    data-toggle="tooltip"
                                                                    data-placement="bottom"
                                                                    title="What are your interests in volunteering?" />
                                                            </div>
                                                            <div className="col-sm-4"><input
                                                                className="form-control"
                                                                placeholder=""
                                                                name="interest2"
                                                                type="text"
                                                                value={this.state.interest2}
                                                                onChange={this.handleInterest2Change}
                                                                required />
                                                            </div>
                                                            <div className="col-sm-4"><input
                                                                className="form-control"
                                                                placeholder=""
                                                                name="interest3"
                                                                type="text"
                                                                value={this.state.interest3}
                                                                onChange={this.handleInterest3Change}
                                                                required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12">
                                                        <div htmlFor="image_url">Image URL</div>
                                                        <input className="form-control" placeholder="" name="image_url" type="text" value={this.state.image_url} onChange={this.handleImageUrlChange} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <div htmlFor="password">Password</div>
                                                        <input data-minlength="6" className="form-control form-password" placeholder="" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} required />
                                                        <div className="help-block">Minimum of 6 characters</div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-6">
                                                        <div htmlFor="password">Confirm Password</div>
                                                        <input data-minlength="6" className="form-control" placeholder="" name="confirm-password" type="password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} required />
                                                    </div>
                                                </div>
                                                <button href="#" className="btn btn-lg btn-info btn-block">{this.state.message}</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
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
                                    <img src="assets/images/GitHub_logo.png" alt="GitHub" className="connect-img" />
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

Register.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Register;