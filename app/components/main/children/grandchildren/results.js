// Include React
var React = require("react");

var Result = require('./greatgrandchildren/result');

var Results = React.createClass({
    render: function () {
        const numResults = (this.props.results.length);
        return (
            <span>
                <br />
                {/*If there are no results, display message*/}
                {numResults === 0 &&
                    (
                        <div>
                           <p><small className="gray-txt">No matches have been found for your search.</small></p>
                            <p><small className="gray-txt"> - Try a different location</small></p>
                            <p><small className="gray-txt"> - Enter a new keyword</small></p>
                            <p><small className="gray-txt"> - Select a different category</small></p>
                            <img className="fit-img" src="/assets/images/volunteerhands2.png" alt="Volunteer hands" />
                        </div>
                    )
                }
                {/* Here we use a map function to loop through an array in JSX */}
                {this.props.results.map(function (element, index) {
                    return (
                        <Result key={index}
                            title={element.title}
                            url={decodeURIComponent(element.vmUrl)}
                            description={element.plaintextDescription}
                            organization={element.parentOrg.name}
                            availability={element.availability}
                            modalId={'id-' + index}
                            updateEvents={this.props.updateEvents}
                        />
                    );
                }, this)}
            </span>
        );
    }
});

module.exports = Results;