var React = require("react");
var axios = require("axios");

var CurrentGoal = React.createClass({
    getInitialState: function () {
        return {
            week_goal_current: "",
            week_hour_goal: ""
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/goaltracker/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                var currentWeekGoal = response.data.goal_week_goal;

                this.setState({
                    week_goal_current: currentWeekGoal
                });

            }.bind(this));
    },

    handleEdit: function (event) {
        event.preventDefault();
        $('#edit-hours').modal('show');
    },

    handleChange: function (event) {
        this.setState({ week_hour_goal: event.target.value });
    },

    editHours: function (event) {

        event.preventDefault();

        const userId = sessionStorage.getItem('do_good_id');
        var userRoute = 'goalupdate/' + userId;
        var updatedGoal = {
            user: userId,
            newGoal: this.state.week_hour_goal,
        }

        axios.put(userRoute, updatedGoal)
            .then(function (response) {
                this.setState({
                    week_goal_current: this.state.week_hour_goal
                });
                $('#edit-hours').modal('hide');
            }.bind(this));
    },

    render: function () {
        return (
            <span>
                <div className="panel panel-default dash-panel-margin-top">
                    <h5 className="your-weekly-goal">
                        <i className="fa fa-star fa-fw"></i>
                        My goal is <span id="goal">{this.state.week_goal_current} hours</span> per week
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
                                                onChange={this.handleChange}
                                                value={this.state.week_hour_goal}
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
            </span>
        )
    }
});

module.exports = CurrentGoal;