var React = require("react");
var goalsListHelper = require("../../../../utils/goalsListHelper.js")

var GoalsForm = React.createClass({
    getInitialState: function () {
        return { goalInput: '' };
    },
    handleChange: function (event) {
        this.setState({ goalInput: event.target.value })
    },
    handleSubmit: function (event) {
        // prevent html from submitting form and refreshing page
        event.preventDefault();
        this.props.addGoal(this.state.goalInput);
    },
    render: function () {
        return (
            <div>
                <form role="form" onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                        <input
                            placeholder="My new goal is..."
                            type="text"
                            className="form-control"
                            id="newGoal"
                            value={this.state.goalInput}
                            onChange={this.handleChange}
                            required
                        />
                        <button
                            className="btn btn-default green-btn"
                            type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = GoalsForm;