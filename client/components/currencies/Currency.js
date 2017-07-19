/* core imports */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Currency extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextConfig) {
        var updating = false;
        var nextUpdating = false;
        var data = {};
        var nextdata = {};

        try {
            updating = this.props.currency.busy;
        } catch (exception) { /* ignore */ }

        try {
            nextUpdating = nextProps.currency.busy;
        } catch (exception) { /* ignore */ }

        try {
            data = this.props.currency.data;
        } catch (exception) { /* ignore */ }

        try {
            nextdata = nextProps.currency.data;
        } catch (exception) { /* ignore */ }

        return updating !== nextUpdating || JSON.stringify(data) !== JSON.stringify(nextdata);
    }

    componentDidMount() {
        this.props.getTicker(this.props.currency.currency, this.props.index);
    }

    render() {

        var currency = this.props.currency;

        var busy = currency.busy;

        var data = currency.data;

        var currency = '';
        var marketCap = '';
        var price = '';
        var change = '';

        if (data) {
            currency = data.name + ' (' + data.symbol + ')';
            marketCap = '$' + data.market_cap.usd;
            price = '$' + data.price.usd;
            change = data.change + '%';
        }

        return (
            <tr>
                <td className="highlight"> 
                    {busy ? <span></span> : <div className="warning"></div>}
                    {busy ? <CircularProgress size={16} thickness={2} color="grey" /> : <a href="">{this.props.index + 1}</a>}
                </td>
                <td> {currency} </td>
                <td> {marketCap} </td>
                <td> {price} </td>
                <td> {change} </td>
                <td onClick={() => this.props.removeCurrencyFromConfig(data.symbol)}> <span className="btn btn-icon-only font-red-soft"><i className="fa fa-times"></i></span> </td>
            </tr>
        )
    }
}

export default Currency;