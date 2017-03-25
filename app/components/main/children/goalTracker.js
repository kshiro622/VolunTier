// Include the Main React Dependency
var React = require("react");
var axios = require("axios");

// Creating the Register component
var GoalTracker = React.createClass({

    componentDidMount: function () {
        var gaugeOptions = {

            chart: {
                type: 'solidgauge'
            },

            title: null,

            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            tooltip: {
                enabled: false
            },

            // the value axis
            yAxis: {
                stops: [
                    [0.3, '#DF5353'], // red
                    [0.6, '#DDDF0D'], // yellow
                    [0.99, '#55BF3B'], // green
                    [1, '#DAA520'] // gold
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };

        // The goals gauge
        var chartGoals = Highcharts.chart('container-goal', Highcharts.merge(gaugeOptions, {
            yAxis: {
                // max from DB query
                min: 0,
                max: 50,
                title: {
                    text: 'Goal'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Goal',
                // this value is the users current progess towards the goal (DB query)
                data: [50],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">hours</span></div>'
                },
                tooltip: {
                    valueSuffix: 'hours'
                }
            }]

        }));



        // Bring life to the dials
        setInterval(function () {
            var point;

            point = chartGoals.series[0].points[0];
            point.update(point);

        }, 60000);
    },

    // Here we render the function
    render: function () {
        return (
            <span>
                <div className="panel panel-default panel-margin-bottom">
                    <div className="panel-heading">
                        <p className="panel-title">
                            <i className="fa fa-sliders fa-fw"></i> Goal Tracker</p>
                        </div>
                    <div className="panel-body">
                        <p>Track the number of hours you want to volunteer this month.</p>
                        <div className="highchart-div">
                            <div id="container-goal" className="highchart-div-nest"></div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
});


// Export the component back for use in other files
module.exports = GoalTracker;