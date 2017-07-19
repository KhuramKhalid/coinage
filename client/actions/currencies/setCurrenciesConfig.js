import * as firebase from 'firebase';
import Logger from '../../Logger';

export function setCurrenciesConfig(config = [{ currency:'btc' }]) { 
    return dispatch => {

        try {

            firebase.database().ref('currencies').set(config);

        } catch (exception) {

            /* log exception */
            Logger.log(exception);
        }
    }
}