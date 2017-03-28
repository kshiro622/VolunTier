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
    getInitialState: function () {
        return { results: [] };
    },
    // a search term was entered
    searchVM: function (options) {
        //run the query for the search term
        helpers.searchOpportunities(options).then(function (response) {
            if (response !== this.state.results) {
                this.setState({ results: response.data.opportunities });
            }
        }.bind(this));
        this.setState({ results: [] });
    },
    render: function () {
        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p className="panel-title"><i className="fa fa-search fa-fw" ></i>I want to help</p>
                    </div>
                    <div className="panel-body">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active"><a href="#search-pane" aria-controls="search-pane" role="tab" data-toggle="tab">Search</a></li>
                            <li role="presentation"><a href="#matches-pane" aria-controls="matches-pane" role="tab" data-toggle="tab">Matches</a></li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="search-pane">
                                <Form searchVM={this.searchVM} />
                            </div>
                            <div role="tabpanel" className="tab-pane" id="matches-pane">
                                <div className="scrollbox">
                                    <Results results={this.state.results} updateEvents={this.props.updateEvents}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;