// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
// will need to add more as we add components
var Main = require("../components/main/Main");
var Landing = require("../components/landing/Landing");
var Register = require("../components/register/register.js");
var Profile = require("../components/profile/profile.js");



// Export the Routes
module.exports = (
    <Router history={hashHistory}>
        <Route path="/" component={Landing}>
            <IndexRoute component={Landing} />
        </Route>
        <Route path="/main" component={Main}>
            <IndexRoute component={Main} />
        </Route>
        <Route path="/register" component={Register}>
            <IndexRoute component={Register} />
        </Route>
        <Route path="/profile" component={Profile}>
            <IndexRoute component={Profile} />
        </Route>
    </Router>
);
