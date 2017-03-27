var React = require("react");
var axios = require("axios");
import CircularProgressbar from 'react-circular-progressbar';

function checkMax(num) {
    if (num > 100) {
        return 100;
    } else {
        return num;
    };
}

var GoalTracker = React.createClass({
    getInitialState: function () {
        return {
            week_goal_current_percent: "",
            month_goal_current_percent: "",
            year_goal_current_percent: "",
            week_goal_current: "",
            month_goal_current: "",
            year_goal_current: ""
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/goaltracker/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                var userWeekGoal = checkMax(Math.floor((response.data.goal_week_current / response.data.goal_week_goal) * 100));
                var userMonthGoal = checkMax(Math.floor((response.data.goal_month_current / response.data.goal_month_goal) * 100));
                var userYearGoal = checkMax(Math.floor((response.data.goal_year_current / response.data.goal_year_goal) * 100));
                var currentWeekGoal = response.data.goal_week_goal;
                var currentMonthGoal = response.data.goal_month_goal;
                var currentYearGoal = response.data.goal_year_goal;


                this.setState({
                    week_goal_current_percent: userWeekGoal,
                    month_goal_current_percent: userMonthGoal,
                    year_goal_current_percent: userYearGoal,
                    week_goal_current: currentWeekGoal,
                    month_goal_current: currentMonthGoal,
                    year_goal_current: currentYearGoal
                });

            }.bind(this));
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
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="text-center tracker-text">{this.state.week_goal_current} hrs/week</div>
                                <CircularProgressbar percentage={this.state.week_goal_current_percent} classForPercentage={(percentage) => {
                                    return percentage === 100 ? 'complete' : 'incomplete';
                                }} />
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center tracker-text">{this.state.month_goal_current} hrs/month</div>
                                <CircularProgressbar percentage={this.state.month_goal_current_percent} classForPercentage={(percentage) => {
                                    return percentage === 100 ? 'complete' : 'incomplete';
                                }} />
                            </div>
                            <div className="col-sm-4">
                                <div className="text-center tracker-text">{this.state.year_goal_current} hrs/year</div>
                                <CircularProgressbar percentage={this.state.year_goal_current_percent} classForPercentage={(percentage) => {
                                    return percentage === 100 ? 'complete' : 'incomplete';
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = GoalTracker;