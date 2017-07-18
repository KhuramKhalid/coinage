import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reports from './reports/ReportsReducer';

const RootReducer = combineReducers({ reports, routing: routerReducer});

export default RootReducer;