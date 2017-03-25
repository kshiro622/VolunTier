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
                <div className="panel panel-default cal-panel-margin-top">
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
            </span >
        )
    }
});

module.exports = Calendar;