// Include React
var React = require("react");

// var Result = require('./greatgrandchildren/result');

var Results = React.createClass({
    render: function(){
        const numResults = (this.props.results.length);
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body">
                    {/*If there are no results, display message*/}
                    {numResults===0 &&
                        <em>
                        There are no results to display. Enter a new search to see some results.
                        </em>
                    }
                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.props.results.map(function(element, index) {
                        console.log(element);
                        return (
                            {/*<Result key={index} />*/}
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Results;