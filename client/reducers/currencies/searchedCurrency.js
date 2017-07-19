function searchedCurrency(state = {}, action) {
    switch (action.type) {

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_REQUEST':
            return {};

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_SUCCESS':
            return action.data;

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_FAILURE':
            return {};

        case 'UPDATE_CURRENCIES_CONFIG':
            return {};
        
        /* no change */
        default: return state;
    }
}

export default searchedCurrency;