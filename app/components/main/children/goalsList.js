var React = require("react");
var Goal = require('./grandchildren/goal.js');
var goalsListHelper = require("../../../utils/goalsListHelper.js")

var GoalsList = React.createClass({
    getInitialState: function () {
        return { goals: [] };
    },
    componentDidMount: function () {
        goalsListHelper.getSavedGoals(this.props.userId).then(function (response) {
            this.setState({ goals: response })
        }.bind(this));
    },
    newGoalAdded: function () {
        goalsListHelper.getSavedGoals(this.props.userId).then(function (response) {
            this.setState({ goals: response })
        }.bind(this));
    },
    render: function () {
        return (
            < span >
                <form role="form">
                    {this.state.goals.map(function (element, index) {
                        return (
                            <Goal key={index} goalText={element} />
                        )
                    })}
                </form>
            </span >
        )
    }
});

module.exports = GoalsList;