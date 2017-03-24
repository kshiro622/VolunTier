// Include React
var React = require("react");
// Helper for making AJAX requests to VolunteerMatch API
var helpers = require("../../../utils/vmHelper");

// Form component
var Form = require('./grandchildren/form');
// Results component
var Results = require('./grandchildren/results');

var Search = React.createClass({
    // initial state
    getInitialState: function() {
        return {results: []};
    },
    // a search term was entered
    searchVM: function(options){
        //run the query for the search term
        helpers.searchOpportunities(options).then(function(response) {
        if (response !== this.state.results) {
            this.setState({results: response});
        }
        }.bind(this));
        this.setState({results:[]});
    },
    render: function(){
        return(
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-center">Volunteer Opportunities</h1>
                        <p>Search for volunteering opportunities.</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Form searchVM={this.searchVM} />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div id="alert-area"></div>
                        <Results results={this.state.results} />
                    </div>
                </div>
        );
    }
});

module.exports = Search;