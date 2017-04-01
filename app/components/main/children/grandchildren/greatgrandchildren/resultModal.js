var React = require("react");
var eventHelper = require("../../../../../utils/eventsHelper.js");
var dateInputPolyfill = require("date-input-polyfill");


var ResultModal = React.createClass({
    getInitialState: function () {
        return { 
            startDate: '', 
            startTime: '', 
            endDate: '', 
            endTime: '' 
        };
    },
    // changes state to user input
    startDateChange: function (event) {
        this.setState({ startDate: event.target.value });
    },
    // changes state to user input    
    startTimeChange: function (event) {
        this.setState({ startTime: event.target.value });
    },
    // changes state to user input    
    endDateChange: function (event) {
        this.setState({ endDate: event.target.value });
    },
    // changes state to user input    
    endTimeChange: function (event) {
        this.setState({ endTime: event.target.value });
    },
    // saves the event
    saveEvent: function (event) {
        event.preventDefault();
        const userId = sessionStorage.getItem('do_good_id');
         // sets the start and dates according to the api data if it exists
         // or to the user input
        var startDateTime = (this.state.startDate===''? this.props.availability.startDate : this.state.startDate) + 'T' + (this.state.startTime===''? this.props.availability.startTime : this.state.startTime);
        var endDateTime = (this.state.endDate===''? this.props.availability.endDate : this.state.endDate) + 'T' + (this.state.endTime===''? this.props.availability.endTime : this.state.endTime);
        var event = {
            title: this.props.title,
            start: startDateTime,
            end: endDateTime,
            url: this.props.url
        };
        // updates events and rerenders the calendar
        eventHelper.addEvent(event, userId).then(function(){
            $('#' + this.props.modalId).modal('hide');
            this.props.updateEvents();
        }.bind(this));
        
    },
    render: function () {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.modalId}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">When will you go to this event?</h4>
                        </div>
                        <div className="modal-body">
                            {/*this form is populated with API dates and times if they exist otherwise the user inputs it
                            if the api gives the data, the user cannot change it*/}
                            <form onSubmit={this.saveEvent}>
                                <div className="form-group row">
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">Start Date</label>
                                        <input
                                            type="date"
                                            onChange={this.startDateChange}
                                            value={this.props.availability.startDate && this.props.availability.singleDayOpportunity ? this.props.availability.startDate : this.state.startDate}
                                            required />
                                    </div>
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">Start Time</label>
                                        <input
                                            type="time"
                                            onChange={this.startTimeChange}
                                            value={this.props.availability.startTime && this.props.availability.singleDayOpportunity ? this.props.availability.startTime : this.state.startTime}
                                            required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">End Date</label>
                                        <input
                                            type="date"
                                            onChange={this.endDateChange}
                                            value={this.props.availability.endDate && this.props.availability.singleDayOpportunity ? this.props.availability.endDate : this.state.endDate}
                                            required />
                                    </div>
                                    <div className="col-sm-6 margin-top-10">
                                        <label htmlFor="" className="margin-right-10">End Time</label>
                                        <input
                                            type="time"
                                            onChange={this.endTimeChange}
                                            value={this.props.availability.endTime  && this.props.availability.singleDayOpportunity? this.props.availability.endTime : this.state.endTime}
                                            required />
                                    </div>
                                </div>
                                <button className="btn modal-save-btn" type="submit">Save Event</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ResultModal;
