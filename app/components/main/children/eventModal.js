var React = require("react");
var eventHelper = require("../../../utils/eventsHelper.js");
var moment = require('moment');
var dateInputPolyfill = require("date-input-polyfill");


var EventModal = React.createClass({
    // sets the state for the start date and end date of an event
    getInitialState: function () {
        return { start: '', end: '' };
    },
    // sets the start to the input value
    startChange: function (event) {
        this.setState({ start: event.target.value });
    },
    // sets the start to the input value    
    endChange: function (event) {
        this.setState({ end: event.target.value });
    },
    // deletes an event from the db and updates the calendar
    handleDelete: function (event) {
        event.preventDefault();
        // if confirmed is true
        if (window.confirm('Are you sure you want to cancel this event? This cannot be undone.')) {
            // hides the event modal
            $('#event-update-modal-' + this.props._id).modal('hide');
            const userId = sessionStorage.getItem('do_good_id');
            eventHelper.deleteEvent(this.props._id, userId).then(function(){
                this.props.updateEvents();
            }.bind(this));
        }
    },
    // updates the timings for an event
    updateEvent: function (event) {
        event.preventDefault();
        // hides the event modal
        $('#event-update-modal-' + this.props._id).modal('hide');
        // if the user entered a new date, update to the new date otherwise keep the old date
        var newStart = (this.state.start === '' ? this.props.start : this.state.start);
        var newEnd = (this.state.end === '' ? this.props.end : this.state.end);
        var eventDetails = {
            start: newStart,
            end: newEnd
        };
        // updates the event in the db
        eventHelper.updateEvent(this.props._id, eventDetails).then(function(){
            this.props.updateEvents();
        });
    },
    render: function () {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.modalId}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            <br />
                            <p><a href={this.props.url} target="_blank" className="purple-txt pointer-link bold">Apply Now</a></p>
                            <p>Scheduled from {moment(this.props.start).format("dddd, MMMM Do YYYY, h:mm a")} to {moment(this.props.end).format("dddd, MMMM Do YYYY, h:mm a")}.</p>
                            <form onSubmit={this.updateEvent}>
                                <div className="formGroup row">
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">Update Start</label>
                                        <input
                                            type="datetime-local"
                                            onChange={this.startChange}
                                            value={this.state.start}
                                            required />
                                    </div>
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">Update End</label>
                                        <input
                                            type="datetime-local"
                                            onChange={this.endChange}
                                            value={this.state.end}
                                            required />
                                    </div>
                                </div>
                                <button className="btn modal-save-btn" type="submit">Update Event</button>
                                <button className="btn btn-default cancel-event-btn" type="button" onClick={this.handleDelete}>Cancel Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = EventModal;
