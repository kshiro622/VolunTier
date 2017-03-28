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
            <span>
                <div className="col-sm-12">
                    <div className="row">
                        <form role="form" onSubmit={this.handleSubmit} className="form-group">
                            <div className="form-group">
                                <input
                                    placeholder="My new goal is..."
                                    type="text"
                                    className="form-control form-control-goal"
                                    id="newGoal"
                                    value={this.state.goalInput}
                                    onChange={this.handleChange}
                                    required
                                />
                                <span><button
                                    className="btn btn-default green-btn pull-left margin-top-10 margin-bottom-20"
                                    type="submit">Submit</button></span>
                            </div>
                        </form>
                    </div>
                </div>
            </span>
        )
    }
});

module.exports = GoalsForm;