var React = require("react");

var Today = React.createClass({
    getInitialState: function () {
        return {
            currentDate: ""
        };
    },

    componentDidMount: function () {
        var newDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        var monthDay = newDate.slice(5, 10);
        this.setState({
            currentDate: monthDay
        });
    },

    render: function () {
        return (
            <span>
                <div className="panel panel-default dash-panel-margin-top">
                    <h5 className="today-is">
                        <i className="fa fa-sun-o fa-fw"></i>
                        Today is <span id="date">{this.state.currentDate}</span>
                    </h5>
                </div>
            </span>
        );
    }
});

module.exports = Today;