import CoinageResource from '../../api/CoinageResource';
import Logger from '../../Logger';

export function getTicker(limit = 20, convert = 'EUR') { 
    return dispatch => {

        CoinageResource.getTicker(limit, convert).then(function(response) {

            console.log(response);

        }).catch(function(exception) {

            /* log exception */
            Logger.log(exception);
        });
    }
}