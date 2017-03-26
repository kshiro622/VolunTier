var React = require("react");

var GoalTracker = React.createClass({
    componentWillMount: function () {
        // db query
    },

    render: function () {
        return (
            < span >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p className="panel-title">
                            <i className="fa fa-sliders fa-fw"></i>
                            Goal Tracker
                        </p>
                    </div>
                    <div className="panel-body">
                        <div className="text-center">Week</div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: "80%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                        <div className="text-center">Month</div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: "30%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                        <div className="text-center">Year</div>
                        <div className="progress progress-striped">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: "5%" }}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = GoalTracker;