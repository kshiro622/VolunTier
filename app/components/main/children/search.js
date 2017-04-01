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
        return { results: [], options:'' };
    },
    // a search term was entered
    searchVM: function (options) {
        //run the query for the search term
        helpers.searchOpportunities(options).then(function (response) {
            if (response !== this.state.results) {
                this.setState({ results: response.data.opportunities });
            }
            // switch tabs
            $('#matches-tab').tab('show');
            // scroll to the top of the results
            $( "div.scrollbox" ).scrollTop( 0 )
        }.bind(this));
    },
    // collects the options from the form component
    setOptions: function(optionsTxt){
        this.setState({options: optionsTxt});
    },
    render: function () {
        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p className="panel-title"><i className="fa fa-search fa-fw" ></i>I want to help</p>
                    </div>
                    <div className="panel-body">
                        <ul className="nav nav-pills" role="tablist">
                            <li role="presentation" className="active"><a href="#search-pane" aria-controls="search-pane" role="tab" data-toggle="pill" id="search-tab">Search</a></li>
                            <li role="presentation"><a href="#matches-pane" aria-controls="matches-pane" role="tab" data-toggle="pill" id="matches-tab">Matches</a></li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="search-pane">
                                <Form searchVM={this.searchVM} setOptions={this.setOptions}/>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="matches-pane">
                                <Results results={this.state.results} updateEvents={this.props.updateEvents} options={this.state.options} searchVM={this.searchVM} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;