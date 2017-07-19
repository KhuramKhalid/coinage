/* core imports */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';

import AddCurrencyBtn from './AddCurrencyBtn';

class AddCurrency extends React.PureComponent {

    constructor() {
        super();
        this.state = { currencyInputValue: '' };
        this._onInputChange = this._onInputChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        var input = '';
        var nextInput = '';
        var busy = false;
        var nextBusy = false;

        try {
            input = this.state.currencyInputValue;
            busy = this.props.currencies.busy;
        } catch (exception) { /* ignore */ }

        try {
            nextInput = nextState.currencyInputValue;
            nextBusy = nextProps.currencies.busy;
        } catch (exception) { /* ignore */ }

        return input !== nextInput || busy !== nextBusy;
    }

    _onInputChange(e) {

        var input = e.target.value;

        this.setState({currencyInputValue:input});

        this.props.searchForCurrencyBySymbol(input);
    }

    _onSubmit(e) { e.preventDefault(); }

    render() {
        return (
            <div className="portlet light">
                <div className="portlet-body">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form onSubmit={this._onSubmit}>
                                <div className="form-group form-md-line-input">
                                    <div className="input-group">
                                        <div className="input-group-control">
                                            <TextField value={this.state.currencyInputValue} hintText="Currency Symbol (eth)" onChange={this._onInputChange} />
                                        </div>
                                        <span className="input-group-btn btn-left">
                                            <AddCurrencyBtn {...this.props} currencyInputValue={this.state.currencyInputValue} />
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCurrency;