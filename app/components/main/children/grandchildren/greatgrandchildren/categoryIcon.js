var React = require("react");

var CategoryIcon = React.createClass({
    componentDidMount: function () {
    },
    // renders a different font awesome icon based on category id
    render: function () {
        switch(this.props.number){
            case 23:
                return <i className="category-fa purple-txt fa fa-heart" aria-hidden="true"> </i>;
                break;
            case 30:
                return <i className="category-fa purple-txt fa fa-paw" aria-hidden="true"> </i>;
                break;
            case 24:
                return <i className="category-fa purple-txt fa fa-paint-brush" aria-hidden="true"> </i>;
                break;
            case 22: 
                return <i className="category-fa purple-txt fa fa-child" aria-hidden="true"> </i>;
                break;
            case 25:
                return <i className="category-fa purple-txt fa fa-users" aria-hidden="true"> </i>;
                break;
            case 37:
                return <i className="category-fa purple-txt fa fa-laptop" aria-hidden="true"> </i>;
                break;
            case 14: 
                return <i className="category-fa purple-txt fa fa-life-ring" aria-hidden="true"> </i>;
                break;
            case 17:
                return <i className="category-fa purple-txt fa fa-wheelchair" aria-hidden="true"> </i>;
                break;
            case 42:
                return <i className="category-fa purple-txt fa fa-cloud" aria-hidden="true"> </i>;
                break;
            case 15: 
                return <i className="category-fa purple-txt fa fa-book" aria-hidden="true"> </i>;
                break;
            case 28:
                return <i className="category-fa purple-txt fa fa-medkit" aria-hidden="true"> </i>;
                break;
            case 27:
                return <i className="category-fa purple-txt fa fa-leaf" aria-hidden="true"> </i>;
                break;
            case 11:
                return <i className="category-fa purple-txt fa fa-user-md" aria-hidden="true"> </i>;
                break;
            case 7:
                return <i className="category-fa purple-txt fa fa-home" aria-hidden="true"> </i>;
                break;
            case 39:
                return <i className="category-fa purple-txt fa fa-cutlery" aria-hidden="true"> </i>;
                break;
            case 41:
                return <i className="category-fa purple-txt fa fa-briefcase" aria-hidden="true"> </i>;
                break;
            case 29:
                return <i className="category-fa purple-txt fa fa-globe" aria-hidden="true"> </i>;
                break;
            case 5:
                return <i className="category-fa purple-txt fa fa-gavel" aria-hidden="true"> </i>;
                break;
            case 40:
                return <i className="category-fa purple-txt fa fa-microphone" aria-hidden="true"> </i>;
                break;
            case 6:
                return <i className="category-fa purple-txt fa fa-university" aria-hidden="true"> </i>;
                break;
            case 33:
                return <i className="category-fa purple-txt fa fa-handshake-o" aria-hidden="true"> </i>;
                break;
            case 36:
                return <i className="category-fa purple-txt fa fa-plus" aria-hidden="true"> </i>;
                break;
            case 12:
                return <i className="category-fa purple-txt fa fa-blind" aria-hidden="true"> </i>;
                break;
            case 19:
                return <i className="category-fa purple-txt fa fa-futbol-o" aria-hidden="true"> </i>;
                break;
            case 43:
                return <i className="category-fa purple-txt fa fa-star" aria-hidden="true"> </i>;
                break;
            case 3:
                return <i className="category-fa purple-txt fa fa-female" aria-hidden="true"> </i>;
                break;
            default:
                return null;
        }
    }
});

module.exports = CategoryIcon;
