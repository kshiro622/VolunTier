// Include React
var React = require("react");

// Creating the Form component
var Login = React.createClass({
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

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                Login <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-messages">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-4 col-md-offset-4">
                                                <div className="login-panel panel panel-default">
                                                    <div className="panel-heading">
                                                        <h3 className="panel-title">Please Sign In</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <form role="form">
                                                            <fieldset>
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                                                </div>
                                                                <button href="index.html" className="btn btn-lg btn-success btn-block">Login</button>
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
                    </ul>
                </nav>



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

// Export the component back for use in other files
module.exports = Login;
