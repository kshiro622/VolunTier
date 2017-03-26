var React = require("react");
var goalsListHelper = require("../../../utils/goalsListHelper.js");
var GoalsForm = require("./grandchildren/goalsForm");
var Goal = require('./grandchildren/goal.js');

var GoalsList = React.createClass({
    getInitialState: function () {
        return { goals: [] };
    },
    componentDidMount: function () {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.getSavedGoals(userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
    },
    deleteGoalAndUpdate: function (deletedGoal) {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.deleteGoal(deletedGoal, userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
    },
    addGoal: function (newGoal) {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.addGoal(newGoal, userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <p className="panel-title">My Goals List</p>
                </div>
                <div className="panel-body">
                    <GoalsForm addGoal={this.addGoal} />
                    <hr />
                    {
                        this.state.goals.length === 0 &&
                        (
                            <div>
                                <p><em>No goals yet!</em></p>
                                <p><em>Examples: </em></p>
                                <p><em> - Volunteer 40 hours this month</em></p>
                                <p><em> - Feed 100 people</em></p>
                            </div>
                        )
                    }
                    {
                        this.state.goals &&
                        this.state.goals.map(function (element, index) {
                            return (
                                <Goal key={index}
                                    goalText={element.goalText}
                                    id={element._id}
                                    deleteGoalAndUpdate={this.deleteGoalAndUpdate} />
                            );
                        }, this)
                    }
                </div >
            </div>
        )
    }
});

module.exports = GoalsList;