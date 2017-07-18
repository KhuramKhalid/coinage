/*
    Coinage
 */

/* core imports */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Logger from './Logger';

/* Object.assign() polyfill for IE */
require('es6-object-assign/auto');

/* metronic imports */
import './assets/global/fonts/open_sans.css';
import './assets/global/fonts/droid_arabic_kufi.css';
import './assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js';
import './assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js';
import './assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css';
import './assets/global/plugins/font-awesome/css/font-awesome.min.css';
import './assets/global/plugins/simple-line-icons/simple-line-icons.min.css';
import './assets/apps/css/todo-2.min.css';
import './assets/global/css/components-rounded.min.css';
import './assets/global/css/plugins.min.css';
import './assets/layouts/layout4/css/layout.min.css';
import './assets/layouts/layout4/css/themes/light.min.css';
import './assets/layouts/layout4/css/custom.min.css';

/* material-ui theme */
import MUIThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* helper components */
import AppBinder from './AppBinder';
import NoRoute from './components/NoRoute'

/* coinage components */
import Currencies from './components/currencies/Currencies';
import CoinageStore, { history } from './CoinageStore';

/* initialize client logging */
Logger.initialize();

/* Needed for onTouchTap */
/* http://stackoverflow.com/a/34015469/988941 */
injectTapEventPlugin();

/* txmedia routes */
const router = (
    <MUIThemeProvider>
        <Provider store={CoinageStore}>
            <Router history={history}>
                <Route path="/" component={AppBinder}>
                    <IndexRoute component={NoRoute} />
                    <Route path="/currencies" component={Currencies} />
                    <Route path="*" component={NoRoute}/>
                </Route>
            </Router>
        </Provider>
    </MUIThemeProvider>
)

/* txmedia renderer */
render(router, document.getElementById('root'));