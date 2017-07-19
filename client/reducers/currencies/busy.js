function busy(state = false, action) {
    switch (action.type) {

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_REQUEST':
            return true;

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_SUCCESS':
            return false;

        case 'SEARCH_FOR_CURRENCY_BY_SYMBOL_FAILURE':
            return false;
        
        /* no change */
        default: return state;
    }
}

export default busy;