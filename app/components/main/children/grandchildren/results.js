// Include React
var React = require("react");

var Result = require('./greatgrandchildren/result');

var Results = React.createClass({
    render: function () {
        const numResults = (this.props.results.length);
        return (
            <span>
                    {/*If there are no results, display message*/}
                    {numResults === 0 &&
                        (
                            <div>
                                <em>
                                    There are no results to display. Enter a new search to see some results.
                                </em>
                                <img className="fit-img" src="/assets/images/volunteerhands.png" alt="Volunteer hands" />
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
                            />
                        );
                    })}
                </span>
        );
    }
});

module.exports = Results;