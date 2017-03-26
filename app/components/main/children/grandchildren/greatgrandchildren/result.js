// Include React
var React = require("react");
var eventHelper = require("../../../../../utils/eventsHelper.js");
var dateInputPolyfill = require("date-input-polyfill");


var Result = React.createClass({
    getInitialState: function () {
        return { url: '', title: '', organization: '', description: '', availability: {}, startDate: '', startTime: '', endDate: '', endTime: '' };
    },
    componentDidMount: function () {
        this.setState({
            url: this.props.url,
            title: this.props.title,
            description: this.props.description,
            organization: this.props.organization,
            availability: this.props.availability,
            startDate: this.props.availability.startDate,
            startTime: this.props.availability.startTime,
            endDate: this.props.availability.endDate,
            endTime: this.props.availability.endTime
        });
    },
    startDateChange: function () {
        this.setState({ startDate: event.target.value });
    },
    startTimeChange: function () {
        this.setState({ startTime: event.target.value });
    },
    endDateChange: function () {
        this.setState({ endDate: event.target.value });
    },
    endTimeChange: function () {
        this.setState({ endTime: event.target.value });
    },
    // Saves oppportunity and shows alert
    handleSave: function (event) {
        event.preventDefault();
        $('#' + this.props.modalId).modal('show');
        // this.showAlert();
    },
    saveEvent: function (event) {
        event.preventDefault();
        const userId = sessionStorage.getItem('do_good_id');
        var startDateTime = this.state.startDate + 'T' + this.state.startTime;
        var endDateTime = this.state.endDate + 'T' + this.state.endTime;
        var event = {
            title: this.state.title,
            start: startDateTime,
            end: endDateTime,
            url: this.state.url
        };
        eventHelper.addEvent(event, userId);
        $('#' + this.props.modalId).modal('hide');
    },
    showAlert: function () {
        var alert = '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You added an opportunity!</div>';
        // $('#alert-area').append(alert);
        // $(".alert").alert();
    },
    render: function () {
        return (
            <div>
                <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.modalId}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">When will you go to this event?</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.saveEvent}>
                                    <div className="formGroup row">
                                        <div className="col-sm-6">
                                            <label htmlFor="">Start Date</label>
                                            <input
                                                type="date"
                                                onChange={this.startDateChange}
                                                value={this.state.availability.startDate ? this.state.availability.startDate : ''}
                                                required />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="">Start Time</label>
                                            <input
                                                type="time"
                                                onChange={this.startTimeChange}
                                                value={this.state.availability.startTime ? this.state.availability.startTime : ''}
                                                required />
                                        </div>
                                    </div>
                                    <div className="formGroup row">
                                        <div className="col-sm-6">
                                            <label htmlFor="">End Date</label>
                                            <input
                                                type="date"
                                                onChange={this.endDateChange}
                                                value={this.state.availability.endDate ? this.state.availability.endDate : ''}
                                                required />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="">End Time</label>
                                            <input
                                                type="time"
                                                onChange={this.endTimeChange}
                                                value={this.state.availability.endTime ? this.state.availability.endTime : ''}
                                                required />
                                        </div>
                                    </div>
                                    <button className="btn" type="submit">Save Event</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Add to Event</button>
                    <h4>{this.state.organization}</h4>
                    <a href={this.state.url} target="_blank"><p>{this.state.title}</p></a>
                    <p>{this.state.description}</p>
                    <hr />
                </div>
            </div>
        );
    }
});

module.exports = Result;