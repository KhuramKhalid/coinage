/* core imports */
import Raven from 'raven-js';
import ClientException from './exceptions/ClientException';

var projectPackage = require('../package.json');

module.exports = {

    /* init Sentry client logger */
    initialize:function() {

        console.log('Coinage v' + projectPackage.version);

        Raven.config('https://7a091009186446b1b6e62ef87bcc27aa@sentry.io/192754', {
            release: projectPackage.version
        }).install();

        /* catch uncaught errors */
        window && window.addEventListener('error', function(e) {
            window.console && console.error && console.error('UncaughtError|' + e);
        });
    },

    /* tell Sentry to associate errors with user data */
    setUserContext:function(context = {}) {
        Raven.setUserContext(context);
    },

    /* log client exception with optional feedback form & context */
    log:function(exception, showUserFeedback = false, context = {}) {

        Raven.captureException(exception, {
            extra: context
        });

        /* show user feedback if asked */
        if(showUserFeedback) { Raven.showReportDialog(); }

        var logTimestamp = moment().format('DD-MM-YYYY_HH:mm:ss');

        /* log to console */
        window && window.console && console.error && console.error(logTimestamp + "|" + exception.name + "|" + exception.message);
    },

    /* log to console only */
    console:function(errorMessage) {
        var logTimestamp = moment().format('DD-MM-YYYY_HH:mm:ss');
        window && window.console && console.error && console.error(logTimestamp + "|" + errorMessage);
    },

    /* log exception without writing to console */
    logSilent:function(message = "") {
        Raven.captureMessage(message);
    },

    /* Breadcrumbs are browser and application lifecycle events that are helpful in understanding the state of the application leading up to a crash */
    captureBreadcrumb:function(message, category, data = {}) {
        Raven.captureBreadcrumb({message, category, data});
    }
}