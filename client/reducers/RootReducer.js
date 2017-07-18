import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currencies from './currencies/CurrenciesReducer';

const RootReducer = combineReducers({ currencies, routing: routerReducer});

export default RootReducer;