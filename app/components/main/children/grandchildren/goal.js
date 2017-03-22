var React = require("react");
var goalsListHelper = require("../../../../utils/goalsListHelper.js")

var Goal = React.createClass({
    getInitialState: function () {
        return { goalText: '' };
    },
    componentDidMount: function () {
        this.setState({ goalText: this.props.goalText });
    },
    handleChange: function () { },
    onDelete: function () { },
    render: function () {
        return (
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
                        onClick={this.onDelete}>
                        <i className="fa fa-trash"></i>
                    </button>
                </span>
            </div>
        )
    }
});

module.exports = Goal;