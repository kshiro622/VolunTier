// Include the Main React Dependency
var React = require("react");
var axios = require("axios");



// Creating the Register component
var Register = React.createClass({
    // Sets the initial state of the component.
    getInitialState: function () {
        return {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            bio: "",
            interest1: "",
            interest2: "",
            interest3: "",
            message: "Register",
            error: ""
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
    handleFirst_NameChange: function (event) {
        this.setState({
            first_name: event.target.value
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

    handleRegisterSubmit: function (event) {
        event.preventDefault();
        this.setState({
            message: "Registering..."
        });

        var usrInterests = [];
        usrInterests.push(this.state.interest1);
        usrInterests.push(this.state.interest2);
        usrInterests.push(this.state.interest3);

        if (this.state.email != "" && this.state.password != "") {
            var cred = {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                bio: this.state.bio,
                interests: usrInterests
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
                        <div className="col-md-12">
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Registration</h3>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={this.handleRegisterSubmit}>
                                        <fieldset>
                                            {this.state.error}
                                            <div className="form-group">
                                                <label htmlFor="first_name">First Name</label>
                                                <input className="form-control" placeholder="" name="first_name" type="text" value={this.state.first_name} onChange={this.handleFirst_NameChange} autoFocus />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="last_name">Last Name</label>
                                                <input className="form-control" placeholder="" name="last_name" type="text" value={this.state.last_name} onChange={this.handleLast_NameChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="bio">Bio</label>
                                                <textarea className="form-control" rows="4" placeholder="" name="bio" type="text" value={this.state.bio} onChange={this.handleBioChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="interests">Interests</label>
                                                <div className="row">
                                                    <div className="col-sm-4"><input className="form-control" placeholder="" name="interest1" type="text" value={this.state.interest1} onChange={this.handleInterest1Change} /></div>
                                                    <div className="col-sm-4"><input className="form-control" placeholder="" name="interest2" type="text" value={this.state.interest2} onChange={this.handleInterest2Change} /></div>
                                                    <div className="col-sm-4"><input className="form-control" placeholder="" name="interest3" type="text" value={this.state.interest3} onChange={this.handleInterest3Change} /></div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input className="form-control" placeholder="" name="email" type="email" value={this.state.email} onChange={this.handleEmailChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input className="form-control" placeholder="" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
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