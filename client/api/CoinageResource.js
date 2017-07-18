import { hashHistory } from 'react-router';
import CoinageAPICommons from './CoinageAPICommons';
import CoinageResourceException from '../exceptions/CoinageResourceException';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class CoinageResource {

    getCoinage() {

        const queryParams = $.param({ });

        return fetch(CoinageAPICommons.API_BASE + '/api/coinage?' + queryParams, 
            { method: 'GET' }).then(function(response) {
            if (response.ok) { return response.json(); } 
            else { throw new CoinageResourceException(response.status + ' - getCoinage - ' + response.statusText); }
        });
    }
}

export default new CoinageResource();