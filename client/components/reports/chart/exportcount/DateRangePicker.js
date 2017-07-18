/* core imports */
import React from 'react';

class DateRangePicker extends React.PureComponent {

    componentDidMount() {
        this._initDateRangePickers();
    }

    _initDateRangePickers() {
        var self = this;
        var props = this.props;
        $('#tx_media_export_count_range_picker').daterangepicker({
                opens: 'left',
                startDate: moment().startOf('month'),
                endDate: moment().endOf('month'),
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                ranges: {
                    'Today': [moment(), moment()],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                    'Last 3 Months': [moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                buttonClasses: ['btn'],
                applyClass: 'blue-madison',
                cancelClass: 'default',
                format: 'DD/MM/YYYY',
                separator: ' to ',
                locale: {
                    applyLabel: 'Apply',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom Range',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            },
            function (start, end) {
                props.getMediaExportCountData(start, end);
                $('#tx_media_export_count_range_picker span').html(start.format('D MMM, YYYY') + ' - ' + end.format('D MMM, YYYY'));
            }
        );

        /* Set the initial state of the picker label */
        $('#tx_media_export_count_range_picker span').html(moment().startOf('month').format('D MMM, YYYY')
            + ' - ' + moment().endOf('month').format('D MMM, YYYY'));
    }

    render() {
        return (
            <div id="tx_media_export_count_range_picker" className="btn default">
                <i className="fa fa-calendar"></i> &nbsp; <span> </span><b className="fa fa-angle-down"></b>
            </div>
        );
    }
}

export default DateRangePicker;