import CoinageResource from '../../api/CoinageResource';
import Logger from '../../Logger';

export function searchForCurrencyBySymbol(symbol) { 
    return dispatch => {

        dispatch({ type:'SEARCH_FOR_CURRENCY_BY_SYMBOL_REQUEST' });

        CoinageResource.getTicker(symbol).then(function(data) {

            if (data.error) {
                dispatch({ type:'SEARCH_FOR_CURRENCY_BY_SYMBOL_FAILURE' });
            }

            else {
                dispatch({ type:'SEARCH_FOR_CURRENCY_BY_SYMBOL_SUCCESS', data });
            }

        }).catch(function(exception) {

            /* log exception */
            Logger.log(exception);

            dispatch({ type:'SEARCH_FOR_CURRENCY_BY_SYMBOL_FAILURE' });
        });
    }
}