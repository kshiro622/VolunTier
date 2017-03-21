var React = require("react");

var Calendar = React.createClass({
    componentDidMount: function () {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'agendaDay,agendaWeek,month'
            }
        });
    },

    render: function () {
        return (
            < span >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <i className="fa fa-calendar fa-fw"></i> Calendar
                                 </div>
                                <div className="panel-body">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </span >
        )
    }
});

module.exports = Calendar;