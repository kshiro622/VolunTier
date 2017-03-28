var React = require("react");

var Calendar = React.createClass({

    render: function () {
        return (
            < span >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p className="panel-title">
                            <i className="fa fa-calendar fa-fw"></i>
                            Calendar
                        </p>
                    </div>
                    <div className="panel-body">
                        <div id="calendar"></div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = Calendar;