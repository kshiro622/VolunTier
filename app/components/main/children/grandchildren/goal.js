var React = require("react");

var Goal = React.createClass({
    // deletes a goal accoding to the id
    handleDelete: function (event) {
        event.preventDefault();
        this.props.deleteGoalAndUpdate(this.props.id);
    },
    render: function () {
        return (
            <li className="list-group-item goal-item grow" data-id={this.props.id}>
                <span>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <strong> {this.props.goalText}</strong>
                    <button className="btn btn-default" type="button" onClick={this.handleDelete}> <i className="fa fa-trash"></i></button>
                </span>

            </li >
        )
    }
});

module.exports = Goal;
