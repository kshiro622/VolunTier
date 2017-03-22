var React = require("react");
var goalsListHelper = require("../../../../utils/goalsListHelper.js")

var Goal = React.createClass({
    getInitialState: function () {
        return { goalText: '', id: '' };
    },
    componentDidMount: function () {
        this.setState({ goalText: this.props.goalText, id: this.props.key });
    },
    handleChange: function (event) {
        this.setState({ goalText: event.target.value })
    },
    handleDelete: function (event) {
        event.preventDefault();
        goalsListHelper.deleteGoal(this.state.id);
        this.props.updateGoals();
    },
    handleSubmit: function (event) {
        // prevent html from submitting form and refreshing page
        event.preventDefault();
        if (this.state.id !== '') {
            goalsListHelper.addGoal(this.state.goalText).then(function () {
                this.props.updateGoals();
            });
        }
        else {
            goalsListHelper.updateGoal(this.state.id).then(function () {
                this.props.updateGoals();
            });
        }
    },
    render: function () {
        return (
            <form role="form" onSubmit={this.handleSubmit}>
                <div className="form-group input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.goalText}
                        id={this.props.key}
                        onChange={this.handleChange}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={this.handleDelete}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </span>
                </div>
            </form>
        )
    }
});

module.exports = Goal;