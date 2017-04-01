// Include React
var React = require("react");
var eventHelper = require("../../../../../utils/eventsHelper.js");
var ResultModal = require("./resultModal");
var CategoryIcon =require('./categoryIcon');
var moment = require("moment");


var Result = React.createClass({
    // switches the See More text for each Result to Show Less when the collapsible is shown and vice versa
    componentDidMount: function () {
        let collapsableId = this.props.collapsableId;
        $('#'+collapsableId).on('shown.bs.collapse', function () {
            $('#'+collapsableId+'-button').text('Show less');
        });
        $('#'+collapsableId).on('hidden.bs.collapse', function () {
            $('#'+collapsableId+'-button').text('See more');
        });
    },
    // Saves oppportunity
    handleSave: function (event) {
        event.preventDefault();
        // shows the modal to save the event
        $('#' + this.props.modalId).modal('show');
    },

    render: function () {
        return (
            <div>
                <ResultModal modalId={this.props.modalId} availability={this.props.availability} updateEvents={this.props.updateEvents} url={this.props.url} title={this.props.title} />
                <div>
                    <button className="btn light-orange-btn btn-xs pull-right margin-left-10" onClick={this.handleSave}><i className="fa fa-plus fa-fw"></i>Add Event</button>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.categoryIds.length !==0 &&
                        this.props.categoryIds.map(function(element, index){
                            return (<CategoryIcon key={index} number= {element} />);
                        })
                    }</p>
                    {/*if the data exists (meaning not null), then show it*/}
                    {this.props.location && this.props.location.city && (
                        <p>{this.props.location.city}, {this.props.location.region}, {this.props.location.country}</p>
                    )}
                    {/*if the data exists (meaning not null), then show it*/}
                    
                    {this.props.availability.ongoing && (
                        <p><em className="gray-txt">This is an ongoing opportunity.</em></p>
                    )}
                    {/*if the data exists (meaning not null), then show it*/}                    
                    {this.props.availability.singleDayOpportunity && (
                        <p><em className="gray-txt">This is a single day opportunity occuring on {moment(this.props.availability.startDate).format('dddd, MMMM Do YYYY')}.</em></p>
                    )}
                    <p><a data-toggle="collapse" href={'#'+this.props.collapsableId} aria-expanded="false" aria-controls="collapseExample" id={this.props.collapsableId+'-button'} className="purple-txt pointer-link">
                        See more
                    </a></p>
                    <div className="collapse" id={this.props.collapsableId}>
                    <div className="card card-block">
                        <a href={this.props.url} target="_blank" className="purple-txt pointer-link bold">Apply Now</a>
                        <h5>Organization: {this.props.organization}</h5>
                        <p>Description: {this.props.description}</p>
                        {/*if the data exists (meaning not null), then show it*/}                        
                        {this.props.tags && (
                            <p>Tags: {this.props.tags}</p>
                        )}
                    </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
});

module.exports = Result;