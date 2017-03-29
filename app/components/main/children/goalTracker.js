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
            add_hours: "",
            current_goal: "",
            week_hour_goal: ""
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
                    year_goal_current: response.data.goal_year_goal,
                    current_goal: response.data.goal_week_goal
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

    handleEdit: function (event) {
        event.preventDefault();
        $('#edit-hours').modal('show');
    },

    handleGoalChange: function (event) {
        this.setState({ current_goal: event.target.value });
    },

    editHours: function (event) {

        event.preventDefault();

        const userId = sessionStorage.getItem('do_good_id');
        var userRoute = 'goalupdate/' + userId;
        var updatedGoal = {
            user: userId,
            newGoal: this.state.current_goal,
        }

        axios.put(userRoute, updatedGoal)
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
                $('#edit-hours').modal('hide');
            }.bind(this));
    },

    render: function () {
        return (
            < span >
                <div className="row">
                    <div className="col-sm-12 padding-fix">
                        <div className="panel panel-default dash-panel-margin-top">
                            <h5 className="your-weekly-goal">
                                <i className="fa fa-star fa-fw"></i>
                                My goal is <span id="goal">{this.state.current_goal} hours</span> per week
                    </h5>
                            <button className="btn btn-xs btn-edit pull-right" onClick={this.handleEdit}><i className="fa fa-edit fa-fw"></i></button>
                        </div>
                        <div className="modal fade" id="edit-hours">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit Weekly Goal</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.editHours}>
                                            <div className="formGroup row">
                                                <div className="col-sm-12 margin-top-10">
                                                    <label htmlFor="" className="margin-right-10">New Goal:&nbsp;</label>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        onChange={this.handleGoalChange}
                                                        value={this.state.current_goal}
                                                        required />
                                                    <p className="inline">&nbsp;hrs/week </p>
                                                </div>
                                            </div>
                                            <button className="btn modal-save-btn" type="submit">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 padding-fix">
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
                                        <div className="text-center tracker-text">{this.state.week_goal_current} <div>hrs/week</div></div>
                                        <CircularProgressbar percentage={this.state.week_goal_current_percent} classForPercentage={(percentage) => {
                                            return percentage === 100 ? 'complete' : 'incomplete';
                                        }} />
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="text-center tracker-text">{this.state.month_goal_current} <div>hrs/month</div></div>
                                        <CircularProgressbar percentage={this.state.month_goal_current_percent} classForPercentage={(percentage) => {
                                            return percentage === 100 ? 'complete' : 'incomplete';
                                        }} />
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="text-center tracker-text">{this.state.year_goal_current} <div>hrs/year</div></div>
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
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = GoalTracker;