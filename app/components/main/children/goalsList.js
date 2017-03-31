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
        $(".sortable").sortable({
                axis: 'y',
                containment: "#goals-containment"
            }).disableSelection();
        $( ".sortable" ).on( "sortupdate", function( event, ui ) {
            var goalsArr = $('.sortable>li').map(function(index, element){
                return $(element).data('id');
            }).toArray();
            this.updateGoalsArray(goalsArr);
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
    updateGoalsArray: function(goalsArr){
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
                        <div className="col-sm-12">
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