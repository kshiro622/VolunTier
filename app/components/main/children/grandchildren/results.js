// Include React
var React = require("react");

var Result = require('./greatgrandchildren/result');

var Results = React.createClass({
    getInitialState: function(){
        return {pageNumber:1};
    },
    // returns to the search tab
    searchAgain: function(){
        $('#search-tab').tab('show');
    },
    // runs the same search again but passing in the second page
    seeMore: function(){
        var optionsObj = JSON.parse(this.props.options);
        optionsObj['pageNumber'] = this.state.pageNumber +1;
        this.setState({pageNumber: optionsObj.pageNumber});
        this.props.searchVM(optionsObj);
    },
    // runs the same search again but sorted on a certain filter
    sortMatches:function(event){
        if(event.target.value!==''){
            var optionsObj = JSON.parse(this.props.options);
            optionsObj['sortCriteria']= event.target.value;
            this.props.searchVM(optionsObj);
        }
    },
    render: function () {
        const numResults = (this.props.results.length);
        return (
            <span>
                <br />
                {/*If there are no results, display message*/}
                {numResults === 0 &&
                    (
                        <div>
                           <p><small className="gray-txt">You have not entered the right search terms or no matches have been found for your search.</small></p>
                            <p><small className="gray-txt"> - Try a different location</small></p>
                            <p><small className="gray-txt"> - Enter a new keyword</small></p>
                            <p><small className="gray-txt"> - Select a different category</small></p>
                            <img className="fit-img" src="/assets/images/volunteerhands2.png" alt="Volunteer hands" />
                        </div>
                    )
                }
                {/* Here we use a map function to loop through an array in JSX */}
                {numResults > 0 &&
                    (
                        <div>
                            <div className="row margin-left-10 margin-right-10">
                                <form role="form" id="sort-form">
                                    <div className="form-group">
                                        {/*filters/ sorts the results*/}
                                        <label htmlFor="sortSelect">Sort By: </label>
                                        <select className="form-control form-control-sm " id="sortSelect" onChange={this.sortMatches}>
                                            <option></option>
                                            <option value="distance">Distance</option>
                                            <option value="eventDate">Event Date</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="scrollbox">
                                {/*maps through the results and creates a dynamic Result component for each one*/}
                                {this.props.results.map(function (element, index) {
                                    return (
                                        <Result key={index}
                                            title={element.title}
                                            url={decodeURIComponent(element.vmUrl)}
                                            description={element.plaintextDescription}
                                            organization={element.parentOrg.name}
                                            availability={element.availability}
                                            categoryIds = {element.categoryIds}
                                            location = {element.location}
                                            tags = {element.tags}
                                            modalId={'id-' + index}
                                            collapsableId = {'id-collapsable-' + index}
                                            updateEvents={this.props.updateEvents}
                                        />
                                    );
                                }, this)}
                                {/*refreshes the results with a second, third, etc page of results*/}
                                <a className="pointer-link purple-txt bold pull-left" onClick={this.seeMore}>See Different Matches... </a>
                                {/*takes the suer back to the search tab*/}
                                <a className="pointer-link purple-txt bold pull-right" onClick={this.searchAgain}>Search Again</a>
                            </div>
                        </div>
                )
                }
            </span>
        );
    }
});

module.exports = Results;