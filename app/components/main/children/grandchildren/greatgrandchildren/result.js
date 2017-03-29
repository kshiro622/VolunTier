// Include React
var React = require("react");
var eventHelper = require("../../../../../utils/eventsHelper.js");
var dateInputPolyfill = require("date-input-polyfill");
var lineClamp = require('line-clamp');

var Result = React.createClass({
    getInitialState: function () {
        return { 
            startDate: '', 
            startTime: '', 
            endDate: '', 
            endTime: '' 
        };
    },
    componentDidMount: function () {
        let collapsableId = this.props.collapsableId;
        $('#'+collapsableId).on('shown.bs.collapse', function () {
            $('#'+collapsableId+'-button').text('Show less');
        });
        $('#'+collapsableId).on('hidden.bs.collapse', function () {
            $('#'+collapsableId+'-button').text('See more');
        });
    },
    startDateChange: function (event) {
        this.setState({ startDate: event.target.value });
    },
    startTimeChange: function (event) {
        this.setState({ startTime: event.target.value });
    },
    endDateChange: function (event) {
        this.setState({ endDate: event.target.value });
    },
    endTimeChange: function (event) {
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
        var startDateTime = (this.state.startDate===''? this.props.availability.startDate : this.state.startDate) + 'T' + (this.state.startTime===''? this.props.availability.startTime : this.state.startTime);
        var endDateTime = (this.state.endDate===''? this.props.availability.endDate : this.state.endDate) + 'T' + (this.state.endTime===''? this.props.availability.endTime : this.state.endTime);
        var event = {
            title: this.props.title,
            start: startDateTime,
            end: endDateTime,
            url: this.props.url
        };
        eventHelper.addEvent(event, userId);
        $('#' + this.props.modalId).modal('hide');
        this.props.updateEvents();
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
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">Start Date</label>
                                            <input
                                                type="date"
                                                onChange={this.startDateChange}
                                                value={this.props.availability.startDate ? this.props.availability.startDate : this.state.startDate}
                                                required />
                                        </div>
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">Start Time</label>
                                            <input
                                                type="time"
                                                onChange={this.startTimeChange}
                                                value={this.props.availability.startTime ? this.props.availability.startTime : this.state.startTime}
                                                required />
                                        </div>
                                    </div>
                                    <div className="formGroup row">
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">End Date</label>
                                            <input
                                                type="date"
                                                onChange={this.endDateChange}
                                                value={this.props.availability.endDate ? this.props.availability.endDate : this.state.endDate}
                                                required />
                                        </div>
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">End Time</label>
                                            <input
                                                type="time"
                                                onChange={this.endTimeChange}
                                                value={this.props.availability.endTime ? this.props.availability.endTime : this.state.endTime}
                                                required />
                                        </div>
                                    </div>
                                    <button className="btn modal-save-btn" type="submit">Save Event</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn light-orange-btn btn-xs pull-right" onClick={this.handleSave}><i className="fa fa-plus fa-fw"></i>Add Event</button>
                    <h4>{this.props.title}</h4>
                    <a data-toggle="collapse" href={'#'+this.props.collapsableId} aria-expanded="false" aria-controls="collapseExample" id={this.props.collapsableId+'-button'} className="gray-txt pointer-link">
                        See more
                    </a>
                    <div className="collapse" id={this.props.collapsableId}>
                    <div className="card card-block">
                        <a href={this.props.url} target="_blank" className="purple-txt pointer-link">Read about this opportunity on Volunteer Match.</a>
                        <h5>Organization: {this.props.organization}</h5>
                        <p>Description: {this.props.description}</p>
                    </div>
                    </div>
                    <hr className="green"/>
                </div>
            </div>
        );
    }
});

module.exports = Result;