// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // set search keyword state
  getInitialState: function () {
    return { keyword: "", category: "", location: "" };
  },
  // This function will respond to the user input
  handleKeywordChange: function (event) {
    this.setState({ keyword: event.target.value });
  },
  // This function will respond to the user input
  handleCategoryChange: function (event) {
    this.setState({ category: parseInt(event.target.value) });
  },
  // This function will respond to the user input
  handleLocationChange: function (event) {
    this.setState({ location: event.target.value });
  },
  // When a user submits...
  handleSubmit: function (event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    let optionsObj = {};
    optionsObj["keywords"] = [this.state.keyword];
    optionsObj["categoryIds"] = [this.state.category];
    optionsObj["location"] = this.state.location;
    optionsObj["numberOfResults"] = 5;
    this.props.searchVM(optionsObj);
    this.setState({ keyword: "", category: "", location: "" });
  },
  // Here we describe this component's render method
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <p className="panel-title">I want to help</p>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/*Location is required*/}
              <label htmlFor="location">Location</label>
              <input
                value={this.state.location}
                type="text"
                className="form-control"
                id="location"
                onChange={this.handleLocationChange}
                required
              />
              {/*Search by keyword*/}
              <label htmlFor="searchkeyword">Search</label>
              <input
                value={this.state.keyword}
                type="text"
                className="form-control"
                id="searchkeyword"
                onChange={this.handleKeywordChange}
                required
              />
              <label htmlFor="category">Browse</label>
              <select
                className="form-control"
                size="7"
                id="category"
                onChange={this.handleCategoryChange}
                required
              >
                <option value="23">Advocacy & Human Rights</option>
                <option value="30">Animals</option>
                <option value="34">Arts & Culture</option>
                <option value="22">Children & Youth</option>
                <option value="37">Computers & Technology</option>
                <option value="14">Crisis Support</option>
                <option value="17">Disabled</option>
                <option value="42">Disaster Relief</option>
                <option value="15">Education & Literacy</option>
                <option value="28">Emergency & Safety</option>
                <option value="13">Environment</option>
                <option value="11">Health & Medicine</option>
                <option value="7">Homeless & Housing</option>
                <option value="39">Hunger</option>
                <option value="41">Immigrants & Refugees</option>
                <option value="29">International</option>
                <option value="5">Justice & Legal</option>
                <option value="40">Media & Broadcasting</option>
                <option value="6">Politics</option>
                <option value="33">Race & Ethnicity</option>
                <option value="36">Religion</option>
                <option value="12">Seniors</option>
                <option value="19">Sports & Recreation</option>
                <option value="43">Veterans & Military Families</option>
                <option value="3">Women</option>
              </select>
              <br />
              <button
                className="btn green-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <a>Search for virtual opportunities.</a>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
