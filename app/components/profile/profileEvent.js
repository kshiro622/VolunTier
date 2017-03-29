var React = require("react");

var ProfileEvent = React.createClass({
    getInitialState: function () {
        return { title: '' };
    },
    componentDidMount: function () {
        this.setState({ title: this.props.object.title });
    },
    render: function () {
        return (
            <li>{this.state.title}</li>
        );
    }
});

module.exports = ProfileEvent;