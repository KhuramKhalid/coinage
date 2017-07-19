/* core imports */
import React from 'react';

import Currency from './Currency';

class CurrenciesTable extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        var config = this.props.currencies.currenciesConfig;
        var nextConfig = nextProps.currencies.currenciesConfig;

        return JSON.stringify(config) !== JSON.stringify(nextConfig) || true;
    }

    render() {

        var currencies = this.props.currencies.currenciesConfig;

        var props = this.props;

        return (
            <div className="portlet light">
                <div className="portlet-title">
                    <div className="caption">
                        <i className="fa fa-money"></i>
                        <span className="caption-subject bold uppercase"> Currencies </span>
                        <span className="caption-helper"> The currencies you follow </span>
                    </div>
                </div>
                <div className="portlet-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-scrollable table-scrollable-borderless">
                                <table className="table table-advance table-hover">
                                    <thead>
                                        <tr>
                                            <th> <i className="icon-list"></i> </th>
                                            <th> <i className="icon-credit-card"></i> Currency </th>
                                            <th> <i className="icon-basket-loaded"></i> Market Cap </th>
                                            <th> <i className="icon-home"></i> Price </th>
                                            <th> <i className="icon-equalizer"></i> Change </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currencies.map(function(currency, ii) {
                                            return <Currency key={ii} index={ii} currency={currency} {...props}></Currency>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrenciesTable;