import { setCurrenciesConfig } from './setCurrenciesConfig';

export function addCurrencyToConfig(currency) { 
    return (dispatch, getState) => {

        const state = getState();

        var currencies = state.currencies.currenciesConfig;

        var searchedCurrency = state.currencies.searchedCurrency;

        var newCurrencies = [];

        /* add currency currencies */
        currencies.forEach(function(c) {
            newCurrencies.push({ currency: c.currency });
        });

        /* add new currency */
        newCurrencies.push({ currency: searchedCurrency.symbol });

        /* update currencies config */
        dispatch(setCurrenciesConfig(newCurrencies));
    }
}