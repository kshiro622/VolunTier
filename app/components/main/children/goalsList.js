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
    updateGoals: function () {
        goalsListHelper.getSavedGoals(this.props.userId).then(function (response) {
            this.setState({ goals: response })
        }.bind(this));
    },
    render: function () {
        return (
            < span >
                {/*if the user doesn't have goals already, display an empty Goal*/}
                {!this.state.goals &&
                    (
                        <Goal key={''} goalText={''} updateGoals={this.updateGoals} />
                    )
                }
                {this.state.goals.map(function (element, index) {
                    return (
                        <Goal key={element._id} goalText={element} updateGoals={this.updateGoals} />
                    )
                }, this)}
            </span >
        )
    }
});

module.exports = GoalsList;