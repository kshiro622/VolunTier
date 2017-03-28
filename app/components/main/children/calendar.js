var React = require("react");
var eventHelper = require("../../../utils/eventsHelper.js")

var Calendar = React.createClass({

    getInitialState: function () {
        return { events: [] };
    },

    componentDidMount: function () {
        const userId = sessionStorage.getItem('do_good_id');
        eventHelper.getSavedEvents(userId).then(function (response) {
            this.setState({ events: response.data.events });
            var eventsArr = this.state.events;
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'agendaDay,agendaWeek,month,listWeek'
                },
                events: eventsArr
            });
        }.bind(this));
    },

    render: function () {
        return (
            < span >
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
            </span >
        )
    }
});

module.exports = Calendar;