// Include React
var React = require("react");
var axios = require("axios");

// Creating the Form component
var Login = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            email: "",
            password: "",
            message: "Login"
        };
    },

    handleEmailChange: function (event) {
        this.setState({
            email: event.target.value
        });

    },
    handlePasswordChange: function (event) {
        this.setState({
            password: event.target.value
        });

    },

    //needs to be moved to the Resgister page-------------------------------
    handleRegisterSubmit: function (event) {
        event.preventDefault();
        if (this.state.email != "" && this.state.password != "") {
            console.log('working');
            var cred = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post('/register', cred)
                .then(function (response) {
                    this.setState({
                        email: "",
                        password: "",
                        message: "Registering..."
                    })
                }.bind(this))
        } else {
            this.setState({
                error: "All fields are required"
            })
        }
    },

    handleLoginSubmit: function (event) {
        event.preventDefault();
        if (this.state.email != "" && this.state.password != "") {
            this.setState({
                message: "Registering..."
            })
            var cred = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post('/login', cred)
                .then(function (response) {

                }.bind(this))
        } else {
            this.setState({
                error: "All fields are required"
            })
        }
    },

    render: function () {
        return (
            <span>
                <li className="dropdown">
                    <a className="dropdown-toggle green-link" data-toggle="dropdown" href="#">
                        Login <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu login-drop-width">
                        <li>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="login-panel panel panel-default login-panel-margin">
                                            <div className="panel-heading">
                                                <h3 className="panel-title">Please Sign In</h3>
                                            </div>
                                            <div className="panel-body">
                                                <form role="form" onSubmit={this.handleLoginSubmit}>
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <input className="form-control" placeholder="E-mail" name="email" type="email" value={this.state.email} onChange={this.handleEmailChange} autoFocus />
                                                        </div>
                                                        <div className="form-group">
                                                            <input className="form-control" placeholder="Password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                                                        </div>
                                                        <button href="index.html" className="btn btn-lg btn-success btn-block">{this.state.message}</button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </span>
        );
    }
});

// Export the component back for use in other files
module.exports = Login;
