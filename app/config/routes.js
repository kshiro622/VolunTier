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


// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

            {/* ROUTES HERE */}

            {/* If user selects any other path... we get the Info Route */}
            <IndexRoute component={Main} />

        </Route>
    </Router>

);
