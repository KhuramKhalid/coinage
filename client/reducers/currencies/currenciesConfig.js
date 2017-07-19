function currenciesConfig(state = [], action) {
    switch (action.type) {

        case 'UPDATE_CURRENCIES_CONFIG':
            return action.currencies;

        case 'GET_TICKER_REQUEST':
            var currency = Object.assign({}, state[action.index], { busy:true });
            return [...state.slice(0, action.index), currency, ...state.slice(action.index + 1)];

        case 'GET_TICKER_SUCCESS':
            var currency = Object.assign({}, state[action.index], { busy:false, data:action.data });
            return [...state.slice(0, action.index), currency, ...state.slice(action.index + 1)];

        case 'GET_TICKER_FAILURE':
            var currency = Object.assign({}, state[action.index], { busy:false });
            return [...state.slice(0, action.index), currency, ...state.slice(action.index + 1)];
        
        /* no change */
        default: return state;
    }
}

export default currenciesConfig;