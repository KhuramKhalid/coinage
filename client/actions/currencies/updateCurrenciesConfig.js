export function updateCurrenciesConfig(currencies = []) { 
    return (dispatch, getState) => {

        const state = getState();

        var currentCurrencies = state.currencies.currenciesConfig;

        var shouldUpdate = false;

        currencies.forEach(function(currency) {

            var sym = currency.currency;

            var found = false;

            currentCurrencies.forEach(function(cc) {
                if (cc.currency === sym) {
                    found = true;
                }
            });

            shouldUpdate = !found;
        });

        if (shouldUpdate) {
            dispatch({type:'UPDATE_CURRENCIES_CONFIG', currencies});
        }
    }
}