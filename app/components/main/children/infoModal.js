var React = require("react");

var InfoModal = React.createClass({
    render: function () {
        return (
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" id="infoModal">
            <div className="modal-dialog  modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLongTitle">How to VolunTier</h1>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="assets/images/calendar.png" alt="Calendar screenshot" className="fit-img info-img"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>Start Here: Your Calendar</h2>
                            <p>This is where you will see your past events and your upcoming events. Click on a calendar event to see more information about it, update the event, or cancel the event.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                           <h2>Search for Opportunities</h2>
                            <p>Here you will be able to search for opportunities by your location (required field), and narrow down the searches by keyword, category, or date range.</p>
                            <p>Need to help remotely? Then searching for virtual opportunities is for you.</p>
                        </div>
                        <div className="col-sm-6">
                             <img src="assets/images/search.png" alt="Search screenshot" className="fit-img info-img"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="assets/images/results.png" alt="Results screenshot" className="fit-img info-img"/>
                        </div>
                        <div className="col-sm-6">
                            <h2>Add New Events</h2>
                            <p>Once you've figured out what you're looking for, consider your matches. You can see the title, organization name, description, categories, and, most importantly, the link to VolunteerMatch where you can apply for the position.</p>
                            <p>After you've submitted your application, go ahead and save the event to your calendar. Plans might change? No worries. You can always go back and edit your timings later.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                           <h2>Keep Track of Your Goals</h2>
                            <p>Add new goals, delete completed ones, and rearrange them according to what matters to you the most.</p>
                        </div>
                        <div className="col-sm-4">
                             <img src="assets/images/goals.png" alt="Goals screenshot" className="fit-img info-img"/>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-sm-4">
                            <img src="assets/images/tracker.png" alt="Tracker screenshot" className="fit-img info-img"/>
                        </div>
                        <div className="col-sm-8">
                            <h2>Track Your Hours</h2>
                            <p>Woot! You helped out the world. Keep track of your hours and try meeting your weekly, monthly, and yearly goals.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>Earn Badges</h2>
                            <p>You deserve it. Proudly earn your badges as you complete your volunteering hour goals. You're on your way to becoming a VolunTier aficionado!</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="assets/images/badge.png" alt="Badge screenshot" className="fit-img info-img"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">I got this!</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
});

module.exports = InfoModal;