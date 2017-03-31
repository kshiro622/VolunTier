var React = require("react");
var eventHelper = require("../../../utils/eventsHelper.js");
var moment = require('moment');
var dateInputPolyfill = require("date-input-polyfill");


var EventModal = React.createClass({
    getInitialState: function () {
        return { start: '', end: '' };
    },
    startChange: function (event) {
        this.setState({ start: event.target.value });
    },
    endChange: function (event) {
        this.setState({ end: event.target.value });
    },
    handleDelete: function (event) {
        event.preventDefault();
        if (window.confirm('Are you sure you want to cancel this event? This cannot be undone.')) {
            $('#event-update-modal-' + this.props._id).modal('hide');
            const userId = sessionStorage.getItem('do_good_id');
            eventHelper.deleteEvent(this.props._id, userId);
            this.props.updateEvents();
        }
    },
    updateEvent: function (event) {
        event.preventDefault();
        $('#event-update-modal-' + this.props._id).modal('hide');
        var newStart = (this.state.start === '' ? this.props.start : this.state.start);
        var newEnd = (this.state.end === '' ? this.props.end : this.state.end);
        var eventDetails = {
            start: newStart,
            end: newEnd
        };
        eventHelper.updateEvent(this.props._id, eventDetails);
        this.props.updateEvents();
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
