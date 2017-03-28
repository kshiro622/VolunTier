var React = require("react");

var Goal = React.createClass({
    getInitialState: function () {
        return { goalText: '', id: '' };
    },
    componentDidMount: function () {
        this.setState({ goalText: this.props.goalText, id: this.props.id });
    },
    handleDelete: function (event) {
        event.preventDefault();
        this.props.deleteGoalAndUpdate(this.state.id);
    },
    render: function () {
        return (
            <div className="goal-item grow">
                <span><i className="fa fa-circle-o" aria-hidden="true"></i><strong> {this.state.goalText} </strong></span>
                <button className="btn btn-default" type="button" onClick={this.handleDelete}> <i className="fa fa-trash"></i>
                </button>
            </div>
        )
    }
});

module.exports = Goal;