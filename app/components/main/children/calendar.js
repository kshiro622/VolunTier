var React = require("react");

var Calendar = React.createClass({
    getInitialState: function () {
        return {
            currentDate: ""
        };
    },
    componentWillMount: function () {
        var MyDate = new Date();
        MyDate.setDate(MyDate.getDate());

        var newDate = ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2);
        this.setState({
            currentDate: newDate
        });
    },

    render: function () {
        return (
            < span >
                <div className="row">
                    <div className="col-sm-3">
                        <div className="panel panel-default dash-panel-margin-top">
                            <h5 className="today-is">
                                <i className="fa fa-sun-o fa-fw"></i>
                                Today is <span id="date">{this.state.currentDate}</span>
                            </h5>
                        </div>
                    </div>
                    <div className="col-sm-7"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="panel-title">
                                    <i className="fa fa-calendar fa-fw"></i>
                                    Calendar
                        </p>
                            </div>
                            <div className="panel-body">
                                <div id="calendar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = Calendar;