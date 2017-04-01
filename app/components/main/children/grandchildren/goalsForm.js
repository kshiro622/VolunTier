var React = require("react");
var goalsListHelper = require("../../../../utils/goalsListHelper.js")

var GoalsForm = React.createClass({
    getInitialState: function () {
        return { goalInput: '' };
    },
    // sets the state to the user's input
    handleChange: function (event) {
        this.setState({ goalInput: event.target.value })
    },
    // adds a goal to the db from user input
    handleSubmit: function (event) {
        // prevent html from submitting form and refreshing page
        event.preventDefault();
        this.props.addGoal(this.state.goalInput);
        this.setState({ goalInput: '' });
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <form role="form" onSubmit={this.handleSubmit} className="form-group margin-right-10 margin-left-10">
                            <div className="form-group">
                                <input
                                    placeholder="My new goal is..."
                                    type="text"
                                    className="form-control form-control-goal"
                                    id="newGoal"
                                    value={this.state.goalInput}
                                    onChange={this.handleChange}
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Add a new goal here. You can move the goal in its list to reorder your goals as you like."
                                    required
                                />
                                <span><button
                                    className="btn btn-default green-btn pull-left margin-top-10 margin-bottom-20"
                                    type="submit">Submit</button></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = GoalsForm;