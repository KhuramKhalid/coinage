import { hashHistory } from 'react-router';
import axios from 'axios';
import CoinageAPICommons from './CoinageAPICommons';
import CoinageResourceException from '../exceptions/CoinageResourceException';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class CoinageResource {

    getTicker(limit, convert) {

        const queryParams = $.param({ limit, convert });

        const url = CoinageAPICommons.API_BASE + '/ticker?' + queryParams;

        return axios.get(url).then(function(response) {
            if (response.status === 200) { return response.data; }
            else { throw new CoinageResourceException(response.status + ' - getTicker - ' + response.statusText); }
        });

        // return fetch(CoinageAPICommons.API_BASE + '/ticker?' + queryParams, 
        //     { method: 'GET', mode:'cors', headers:  { 'Access-Control-Allow-Origin':'*' }, credentials: 'include' }).then(function(response) {
        //     if (response.ok) { return response.json(); } 
        //     else { throw new CoinageResourceException(response.status + ' - getTicker - ' + response.statusText); }
        // });
    }
}

export default new CoinageResource();