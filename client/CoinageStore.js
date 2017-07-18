import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

var { Map, List } = require('immutable');

import RootReducer from './reducers/RootReducer';

const defaultState = {
    currencies: {
        currenciesConfig: [ { currency:'btc', busy:false } ]
    }
};

const CoinageStore = createStore(RootReducer, defaultState, composeWithDevTools(applyMiddleware(thunk, createLogger())));

export const history = syncHistoryWithStore(hashHistory, CoinageStore);

/* DEV - module hot reload */
if (module.hot) {
    module.hot.accept('./reducers/RootReducer', () => {
        const nextRootReducer = require('./reducers/RootReducer').default;
        CoinageStore.replaceReducer(nextRootReducer);
    })
}

export default CoinageStore;