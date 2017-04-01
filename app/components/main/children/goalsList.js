var React = require("react");
var goalsListHelper = require("../../../utils/goalsListHelper.js");
var GoalsForm = require("./grandchildren/goalsForm");
var Goal = require('./grandchildren/goal.js');

var GoalsList = React.createClass({
    getInitialState: function () {
        return { goals: [] };
    },
    // gets the goals from the db according to the userid
    componentDidMount: function () {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.getSavedGoals(userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
        // jQuueryUI sortable allows sorting of the goals
        $(".sortable").sortable({
            axis: 'y',
            containment: "#goals-containment"
        }).disableSelection();
        // when the goals are sorted in the list, the new array gets saved and sent to the db
        // so that when the user refreshes the screen, the same sorted order is kept
        $(".sortable").on("sortupdate", function (event, ui) {
            var goalsArr = $('.sortable>li').map(function (index, element) {
                return $(element).data('id');
            }).toArray();
            this.updateGoalsArray(goalsArr);
        }.bind(this));

    },
    // deletes a goal from the list and then sets the state to the new list of goals
    deleteGoalAndUpdate: function (deletedGoal) {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.deleteGoal(deletedGoal, userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
    },
    // adds a goal to the list and then sets the state to the new list of goals    
    addGoal: function (newGoal) {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.addGoal(newGoal, userId).then(function (response) {
            this.setState({ goals: response.data.goals });
        }.bind(this));
    },
    // sends the new array of goals to the db
    updateGoalsArray: function (goalsArr) {
        const userId = sessionStorage.getItem('do_good_id');
        goalsListHelper.updateGoals(userId, goalsArr);
    },
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <p className="panel-title"><i className="fa fa-list-alt" aria-hidden="true"></i>  My Goals List</p>
                </div>
                <div className="panel-body">
                    <GoalsForm addGoal={this.addGoal} />
                    {/*if no goals exist for the user, displays a defualt message*/}
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
                    <div className="row" id="goals-containment">
                        <div className="col-sm-12 scrollbox-goal">
                            <ul className="sortable">
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
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
});

module.exports = GoalsList;