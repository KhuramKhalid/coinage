import { combineReducers } from 'redux';

import countData from './countData';

const CurrenciesReducer = combineReducers(
    {
        countData
    }
);

export default CurrenciesReducer;