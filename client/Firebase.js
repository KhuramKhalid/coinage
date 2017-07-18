import * as firebase from 'firebase';
import Logger from './Logger';

module.exports = {

    /* init Firebase client */
    initialize:function(props) {

        try {
            firebase.initializeApp({
                apiKey: "AIzaSyCqLwPeZP_jTgZSnmYGFgeKS1m5laZ7N3U",
                authDomain: "coinage-f8162.firebaseapp.com",
                databaseURL: "https://coinage-f8162.firebaseio.com",
                projectId: "coinage-f8162",
                storageBucket: "coinage-f8162.appspot.com",
                messagingSenderId: "478819659237"
            });
        } catch (exception) {
            console.error(exception);
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { Logger.setUserContext(user); }
        });

        firebase.auth().signInAnonymously().catch(function(error) {
            console.error(error.message);
        });

        this.listenForData(props);
    },

    listenForData:function(props) {

        var database = firebase.database();

        const currencies = database.ref('currencies');

        currencies.on('value', function(snapshot) {
            props.updateCurrenciesConfig(snapshot.val());
        });
    }
}