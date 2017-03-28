var React = require("react");

var Today = React.createClass({
    getInitialState: function () {
        return {
            currentDate: ""
        };
    },

    componentDidMount: function () {
        var MyDate = new Date();
        MyDate.setDate(MyDate.getDate());

        var newDate = ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2);
        this.setState({
            currentDate: newDate
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