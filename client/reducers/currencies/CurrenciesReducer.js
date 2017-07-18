import { combineReducers } from 'redux';

import currenciesConfig from './currenciesConfig';

const CurrenciesReducer = combineReducers(
    {
        currenciesConfig
    }
);

export default CurrenciesReducer;