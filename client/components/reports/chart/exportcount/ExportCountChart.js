/* core imports */
import React from 'react';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
import CircularProgress from 'material-ui/CircularProgress';

import DateRangePicker from './DateRangePicker';

class ExportCountChart extends React.PureComponent {

    constructor() {
        super();
        this._initChart = this._initChart.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        var chartData = {};
        var nextChartData = {};
        var busy = false;
        var nextBusy = false;

        try {
            chartData = this.props.reports.countData.data;
            busy = this.props.reports.countData.busy;
        } catch (exception) { /* ignore */ }

        try {
            nextChartData = nextProps.reports.countData.data;
            nextBusy = nextProps.reports.countData.busy;
        } catch (exception) { /* ignore */ }

        var changed = JSON.stringify(chartData) !== JSON.stringify(nextChartData);

        /* data changed - re-init chart */
        if (changed) { this._initChart(nextChartData); }

        return changed || busy !== nextBusy;
    }

    componentDidMount() {
        this.props.getMediaExportCountData(moment().startOf('month'), moment().endOf('month'));
    }

    _initChart(data) {

        /* process data */
        var cats = Object.keys(data);
        var dataSeries = { HD: { name:'HD', data: []}, SD43: { name:'SD(4:3)', data: []}, SD169: { name:'SD(16:9)', data: []} };
        cats.forEach(function(c) {
            var p = data[c];
            if (p["HD"]) { dataSeries.HD.data.push(p.HD) }
            if (p["SD(4:3)"]) { dataSeries.SD43.data.push(p["SD(4:3)"]) }
            if (p["SD(16:9)"]) { dataSeries.SD169.data.push(p["SD(16:9)"]) }
        });

        /* render chart */
        Highcharts.chart('media_export_count_chart', {
            chart : {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: cats,
                crosshair: true
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Media exports for the given time period'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<span class="text-center"><b>' + this.point.y + '</b><br/><i>' + this.series.name + '</i></span>';
                }
            },
            credits: {
                enabled: false
            },
            series: [dataSeries.HD, dataSeries.SD43, dataSeries.SD169]
        });
    }

    render() {
        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        {this.props.reports.countData.busy ? 
                        <CircularProgress size={15} thickness={2} color="grey" /> :
                        <i className="icon-bar-chart"></i> } TX Media Export Report
                    </div>
                    <div className="actions">
                        {/* date range picker for chart */}
                        <DateRangePicker {...this.props} />
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="media_export_count_chart" style={{height: 500}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExportCountChart;