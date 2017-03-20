// Include React
var React = require("react");

// Creating the Form component
var Login = React.createClass({
    render: function () {
        return (
            <span>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
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
