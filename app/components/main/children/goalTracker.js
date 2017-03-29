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
            user_current_week: "",
            user_current_month: "",
            user_current_year: "",
            week_goal_current_percent: "",
            month_goal_current_percent: "",
            year_goal_current_percent: "",
            week_goal_current: "",
            month_goal_current: "",
            year_goal_current: "",
            add_hours: ""
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


                this.setState({
                    user_current_week: response.data.goal_week_current,
                    user_current_month: response.data.goal_month_current,
                    user_current_year: response.data.goal_year_current,
                    week_goal_current_percent: userWeekGoal,
                    month_goal_current_percent: userMonthGoal,
                    year_goal_current_percent: userYearGoal,
                    week_goal_current: response.data.goal_week_goal,
                    month_goal_current: response.data.goal_month_goal,
                    year_goal_current: response.data.goal_year_goal
                });

            }.bind(this));
    },

    handleChange: function (event) {
        this.setState({ add_hours: event.target.value });
    },

    addHours: function (event) {
        event.preventDefault();

        var addedHours = {
            hours: this.state.add_hours,
            id: sessionStorage.getItem('do_good_id'),
            current_week: this.state.user_current_week,
            current_month: this.state.user_current_month,
            current_year: this.state.user_current_year
        }

        axios.post('/addhours', addedHours)
            .then(function (response) {
                var userWeekGoal = checkMax(Math.floor((response.data.goal_week_current / response.data.goal_week_goal) * 100));
                var userMonthGoal = checkMax(Math.floor((response.data.goal_month_current / response.data.goal_month_goal) * 100));
                var userYearGoal = checkMax(Math.floor((response.data.goal_year_current / response.data.goal_year_goal) * 100));


                this.setState({
                    user_current_week: response.data.goal_week_current,
                    user_current_month: response.data.goal_month_current,
                    user_current_year: response.data.goal_year_current,
                    week_goal_current_percent: userWeekGoal,
                    month_goal_current_percent: userMonthGoal,
                    year_goal_current_percent: userYearGoal,
                    week_goal_current: response.data.goal_week_goal,
                    month_goal_current: response.data.goal_month_goal,
                    year_goal_current: response.data.goal_year_goal,
                    add_hours: ""
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
                        <div className="row hours-input-margin">
                            <div className="col-sm-12">
                                <form onSubmit={this.addHours}>
                                    <div className="formGroup">
                                        <label className="add-label-margin" htmlFor="">Add hours:&nbsp;</label>
                                        <input
                                            className="add-input-margin"
                                            type="number"
                                            min="0"
                                            onChange={this.handleChange}
                                            value={this.state.add_hours}
                                            required />
                                        <button className="btn modal-update-btn pull-right" type="submit">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = GoalTracker;