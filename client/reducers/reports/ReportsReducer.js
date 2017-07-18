import { combineReducers } from 'redux';

import countData from './countData';

const ReportsReducer = combineReducers(
    {
        countData
    }
);

export default ReportsReducer;