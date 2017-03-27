var React = require("react");
var axios = require("axios");

var VolunteerLevel = React.createClass({
    getInitialState: function () {
        return {
            level: ""
        };
    },

    componentWillMount: function () {
        var currentUser = sessionStorage.getItem('do_good_id');
        var userRoute = '/user/goaltracker/' + currentUser;

        axios.get(userRoute)
            .then(function (response) {
                var totalHoursThisYear = response.data.goal_year_current;
                console.log(totalHoursThisYear);

                this.setState({
                    level: totalHoursThisYear
                });

            }.bind(this));
    },

    render: function () {

        var tier = this.state.level;

        var currentLevel = null;
        if (tier === 0) {
            currentLevel = (<div><h2>Beginner Level</h2><img src="assets/images/tier0.png" height="130px" alt="Level 0 badge" /><p>Start getting some hours in!</p></div>);
        } else if (1 <= tier && tier < 10) {
            currentLevel = (<div><h2>Level 1</h2><p>1-9 hours</p><img src="assets/images/tier1.png" height="130px" alt="Level 1 badge" /> <h5 className="level-text">Great start! You're already making a difference. Every hour counts!</h5></div>);
        } else if (10 <= tier && tier < 20) {
            currentLevel = (<div><h2>Level 2</h2><p>10-19 hours</p> <img src="assets/images/tier2.png" height="130px" alt="Level 2 badge" /><h5 className="level-text">You're really making an impact!</h5></div>);
        } else if (20 <= tier && tier < 50) {
            currentLevel = (<div><h2>Level 3</h2><p>20-49 hours</p> <img src="assets/images/tier3.png" height="130px" alt="Level 3 badge" /><h5 className="level-text">Now you can really start to see what you've accomplished!</h5></div>);
        } else if (50 <= tier && tier < 100) {
            currentLevel = (<div><h2>Level 4</h2><p>50-99 hours</p> <img src="assets/images/tier4.png" height="130px" alt="Level 4 badge" /><h5 className="level-text">What an amazing feat, you're almost to the top!</h5></div>);
        } else if (100 <= tier) {
            currentLevel = (<div><h2>Level 5</h2><p>100 hours or more</p> <img src="assets/images/tier5.png" height="130px" alt="Level 5 badge" /><h5 className="level-text">You've reached the top! The world is a better place because of you!</h5></div>);
        }

        return (
            <span>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-heart-o fa-fw inline"></i>
                        <h3 className="panel-title inline">My Impact</h3>
                    </div>
                    <div className="panel-body level-panel">
                        {currentLevel}
                    </div>
                </div>
            </span>
        )
    }
});

module.exports = VolunteerLevel;