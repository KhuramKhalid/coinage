import { setCurrenciesConfig } from './setCurrenciesConfig';

export function removeCurrencyFromConfig(currency) { 
    return (dispatch, getState) => {

        const state = getState();

        var currencies = state.currencies.currenciesConfig;

        var newCurrencies = [];

        /* add currencies apart from the deleted one */
        currencies.forEach(function(c) {
            if (c.currency !== currency) {
                newCurrencies.push({ currency: c.currency });
            }
        });

        /* update currencies config */
        dispatch(setCurrenciesConfig(newCurrencies));
    }
}