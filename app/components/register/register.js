// Include the Main React Dependency
var React = require("react");
var axios = require("axios");



// Creating the Main component
var Register = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            email: "",
            password: "",
            message: "Register"
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
    handleRegisterSubmit: function (event) {
        event.preventDefault();
        this.setState({
            message: "Registering..."
        })
        if (this.state.email != "" && this.state.password != "") {
            var cred = {
                email: this.state.email,
                password: this.state.password
            }
            axios.post('/register', cred)
                .then(function (response) {
                    sessionStorage.setItem('do_good_id', response.data);
                    this.context.router.push('main');
                }.bind(this))
        } else {
            this.setState({
                error: "All fields are required"
            })
        }
    },
    // Here we render the function
    render: function () {
        return (
            <span>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Do Good</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="login-panel panel panel-default login-panel-margin">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please Register</h3>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={this.handleRegisterSubmit}>
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

                <footer className="navbar navbar-default navbar-fixed-bottom" role="navigation" style={{ marginBottom: 0 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 footer-txt">
                                Made by&nbsp;&nbsp;
                                <a target="_blank" href="https://github.com/JustinRyanCarlson">Justin Carlson</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/aishaprograms">Aisha Ahmad</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/kshiro622">Katie Shiro</a>
                                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a target="_blank" href="https://github.com/hadicodes">Hadi</a>
                                <span className="pull-right">The Do Good App &copy; 2017</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </span>
        );
    }
});

Register.contextTypes = {
    router: React.PropTypes.any
};

// Export the component back for use in other files
module.exports = Register;