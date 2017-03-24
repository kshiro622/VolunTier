// Include React
var React = require("react");
var axios = require("axios");

// Creating the Form component
var Login = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            username: "",
            password: "",
            message: "Login"
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

    handleLoginSubmit: function (event) {
        event.preventDefault();
        if (this.state.username != "" && this.state.password != "") {
            this.setState({
                message: "Logging In..."
            })
            var cred = {
                username: this.state.username,
                password: this.state.password
            }
            axios.post('/login', cred)
                .then(function (response) {
                    if (response.data === "INVALID LOGIN") {
                        this.setState({
                            error: "Invalid Login",
                            username: "",
                            password: "",
                            message: "Login"
                        })
                    } else {
                        console.log("RESPONSE:" + response);
                        console.log(response.data);
                        sessionStorage.setItem('do_good_id', response.data);
                        this.context.router.push('main');
                    }
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
                                                <h3 className="panel-title">Please login</h3>
                                            </div>
                                            <div className="panel-body">
                                                <form role="form" onSubmit={this.handleLoginSubmit}>
                                                    <fieldset>
                                                        {this.state.error}
                                                        <div className="form-group">
                                                            <input className="form-control" placeholder="Username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} autoFocus />
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

Login.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Login;
