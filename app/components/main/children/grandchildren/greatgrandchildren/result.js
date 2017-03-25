// Include React
var React = require("react");


var Result = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', description:'', organization:'', availability:''};
    },
    // Saves oppportunity and shows alert
    handleSave: function(event){
        event.preventDefault();
        // var oppportunity = {
        //     title: this.state.title,
        //     url: this.state.url,
        // };
        // helpers.addSavedOppportunities(oppportunity);
        // this.showAlert();
    },
    showAlert: function(){
        var alert = '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You added an opportunity!</div>';
        // $('#alert-area').append(alert);
        // $(".alert").alert();
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, description:this.props.description, organization:this.props.organization, availability:this.props.availability});
    },
    render: function(){
        return (
            <div>
                {/*<button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Save</button>*/}
                <h4>{this.state.organization}</h4>
                <a href={this.state.url} target="_blank"><p>{this.state.title}</p></a>
                <p>{this.state.description}</p>
                <hr />
            </div>
        );
    }
});

module.exports = Result;