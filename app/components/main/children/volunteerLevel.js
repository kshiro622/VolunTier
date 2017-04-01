var React = require("react");
var axios = require("axios");
var Level = require("./grandchildren/level.js");

var VolunteerLevel = React.createClass({

    render: function () {
        return (
            <span>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-heart-o fa-fw inline"></i>
                        <h3 className="panel-title inline">My Impact</h3>
                    </div>
                    <div className="panel-body level-panel">
                        <Level level={this.props.level}/>
                    </div>
                </div>
            </span>
        )
    }
});

module.exports = VolunteerLevel;
