import { combineReducers } from 'redux';

import currenciesConfig from './currenciesConfig';
import busy from './busy';
import searchedCurrency from './searchedCurrency';

const CurrenciesReducer = combineReducers(
    {
        currenciesConfig,
        busy,
        searchedCurrency
    }
);

export default CurrenciesReducer;