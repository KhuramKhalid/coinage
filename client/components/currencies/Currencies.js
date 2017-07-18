/* core imports */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import Currency from './Currency';

class Currencies extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        var config = this.props.currencies.currenciesConfig;
        var nextConfig = nextProps.currencies.currenciesConfig;

        return JSON.stringify(config) !== JSON.stringify(nextConfig);
    }

    render() {

        var currencies = this.props.currencies.currenciesConfig;

        var props = this.props;

        return (
            <div className="table-scrollable table-scrollable-borderless">
                <table className="table table-advance table-hover">
                    <thead>
                        <tr>
                            <th> <i className="icon-list"></i> </th>
                            <th> <i className="icon-credit-card"></i> Currency </th>
                            <th> <i className="icon-basket-loaded"></i> Market Cap </th>
                            <th> <i className="icon-home"></i> Price </th>
                            <th> <i className="icon-equalizer"></i> Change </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currencies.map(function(currency, ii) {
                            return <Currency key={ii} index={ii} currency={currency} {...props}></Currency>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Currencies;