// Include React
var React = require("react");
var eventHelper = require("../../../../../utils/eventsHelper.js");
var dateInputPolyfill = require("date-input-polyfill");


var Result = React.createClass({
    getInitialState: function () {
        return { 
            url: '', 
            title: '', 
            organization: '', 
            description: '', 
            availability: {}, 
            startDate: '', 
            startTime: '', 
            endDate: '', 
            endTime: '' 
        };
    },
    componentDidMount: function () {
        // this.setState({
        //     url: this.props.url,
        //     title: this.props.title,
        //     description: this.props.description,
        //     organization: this.props.organization,
        //     availability: this.props.availability
        // });
        // if(this.props.availability.startDate!==null){
        //     this.setState({startDate: this.props.availability.startDate});
        // }
        // else{
        //     this.setState({startDate: ''});
        // }
        // if(this.props.availability.endDate!==null){
        //     this.setState({endDate: this.props.availability.endDate});
        // }
        // else{
        //     this.setState({startDate: ''});
        // }
        // if(this.props.availability.startTime!==null){
        //     this.setState({startTime: this.props.availability.startTime});
        // }
        // else{
        //     this.setState({startDate: ''});
        // }
        // if(this.props.availability.endTime!==null){
        //     this.setState({endTime: this.props.availability.endTime});
        // }
        // else{
        //     this.setState({startDate: ''});
        // }
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
                                                type="text"
                                                onChange={this.startDateChange}
                                                value={this.state.startDate}
                                                required />
                                        </div>
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">Start Time</label>
                                            <input
                                                type="text"
                                                onChange={this.startTimeChange}
                                                value={this.state.startTime}
                                                required />
                                        </div>
                                    </div>
                                    <div className="formGroup row">
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">End Date</label>
                                            <input
                                                type="text"
                                                onChange={this.endDateChange}
                                                value={this.state.endDate}
                                                required />
                                        </div>
                                        <div className="col-sm-6 margin-top-10">
                                            <label htmlFor="" className="margin-right-10">End Time</label>
                                            <input
                                                type="text"
                                                onChange={this.endTimeChange}
                                                value={this.state.endTime}
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
                    <h4>{this.props.organization}</h4>
                    <a href={this.props.url} target="_blank"><p>{this.props.title}</p></a>
                    <p>{this.props.description}</p>
                    <hr />
                </div>
            </div>
        );
    }
});

module.exports = Result;