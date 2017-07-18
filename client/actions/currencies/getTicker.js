import CoinageResource from '../../api/CoinageResource';
import Logger from '../../Logger';

export function getTicker(currency = 'btc', index) { 
    return dispatch => {

        dispatch({ type:'GET_TICKER_REQUEST', index });

        CoinageResource.getTicker(currency).then(function(data) {

            dispatch({ type:'GET_TICKER_SUCCESS', index, data });

        }).catch(function(exception) {

            /* log exception */
            Logger.log(exception);

            dispatch({ type:'GET_TICKER_FAILURE', index });
        });
    }
}