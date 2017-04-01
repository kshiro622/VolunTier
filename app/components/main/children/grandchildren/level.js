var React = require("react");

var Level = React.createClass({
    render: function () {
        var currentLevel = null;
        if (this.props.level === 0) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Beginner Level</h2>
                    <img src="assets/images/tier0.png" height="150px" className="margin-top-20" alt="Level 0 badge" />
                    <h5 className="level-text">Start getting some hours in!</h5>
                </div>
            );
        } else if (1 <= this.props.level && this.props.level < 10) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Level 1</h2>
                    <p>1-9 hours</p>
                    <img src="assets/images/tier1.png" height="150px" className="margin-top-20" alt="Level 1 badge" />
                    <h5 className="level-text">Great start! You are already making a difference. Every hour counts!</h5>
                </div>
            );
        } else if (10 <= this.props.level && this.props.level < 20) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Level 2</h2>
                    <p>10-19 hours</p>
                    <img src="assets/images/tier2.png" height="150px" className="margin-top-20" alt="Level 2 badge" />
                    <h5 className="level-text">You are really making an impact!</h5>
                </div>
            );
        } else if (20 <= this.props.level && this.props.level < 50) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Level 3</h2>
                    <p>20-49 hours</p>
                    <img src="assets/images/tier3.png" height="150px" className="margin-top-20" alt="Level 3 badge" />
                    <h5 className="level-text">Now you can really start to see what you have accomplished!</h5>
                </div>
            );
        } else if (50 <= this.props.level && this.props.level < 100) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Level 4</h2>
                    <p>50-99 hours</p>
                    <img src="assets/images/tier4.png" height="150px" className="margin-top-20" alt="Level 4 badge" />
                    <h5 className="level-text">What an amazing feat, you are almost to the top!</h5>
                </div>
            );
        } else if (100 <= this.props.level) {
            currentLevel = (
                <div>
                    <h2 className="level-title">Level 5</h2>
                    <p>100 hours or more</p>
                    <img src="assets/images/tier5.png" height="150px" className="margin-top-20" alt="Level 5 badge" />
                    <h5 className="level-text">You have reached the top! The world is a better place because of you!</h5>
                </div>
            );
        }

        return (
            <span>
                {currentLevel}
            </span>
        )
    }
});

module.exports = Level;