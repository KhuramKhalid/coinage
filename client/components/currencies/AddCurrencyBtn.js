/* core imports */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';

class AddCurrencyBtn extends React.PureComponent {

    constructor() {
        super();
        this._addCurrency = this._addCurrency.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        var busy = false;
        var nextBusy = false;
        var searchedCurrency = {};
        var nextSearchedCurrency = {};

        try {
            busy = this.props.currencies.busy;
            searchedCurrency = this.props.currencies.searchedCurrency;
        } catch (exception) { /* ignore */ }

        try {
            nextBusy = nextProps.currencies.busy;
            nextSearchedCurrency = nextProps.currencies.searchedCurrency;
        } catch (exception) { /* ignore */ }

        return busy !== nextBusy;
    }

    _addCurrency() {
        this.props.addCurrencyToConfig();
    }

    render() {

        var busy = this.props.currencies.busy;

        var searchedCurrency = this.props.currencies.searchedCurrency;

        if (Object.keys(searchedCurrency).length > 0) {
            return (
                <button type="submit" className="btn btn-circle btn-sm green-soft" onClick={() => this._addCurrency()}> 
                    <i className="icon-credit-card"></i> Add {searchedCurrency.name} Currency
                </button>
            )
        } else {
            return (
                <button type="submit" disabled={true} className="btn btn-circle btn-sm green-soft" onClick={() => this._addCurrency()}> 
                    {busy ? <CircularProgress size={14} thickness={2} color="white" /> : <i className="icon-credit-card"></i>} Add Currency
                </button>
            )
        }
    }
}

export default AddCurrencyBtn;