import React, { Component } from 'react';
import { hashHistory } from 'react-router';

/**
 * If we are redirected to NoRoute then this means user requested an invalid path. 
 * So we can here safely redirect user to a default path based on their authority
 * level.
 */
class NoRoute extends Component {

    componentWillMount() {
        hashHistory.push('/reports');
    }

    render() { return ( <span></span> ); }
}

export default NoRoute;