    var firebase = require('firebase');

    var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");

    firebase.initializeApp(
        {
            apiKey: "AIzaSyDrtl3qnLx_ZfdgxpUVy5XFvkXR4_f6_VU",
            authDomain: "clubselector-2394a.firebaseapp.com",
            databaseURL: "https://clubselector-2394a.firebaseio.com",
            projectId: "clubselector-2394a",
            storageBucket: "clubselector-2394a.appspot.com",
            messagingSenderId: "1039301954159",
            appId: "1:1039301954159:web:e458dc98ecad8303"
        }
    );

    var db = firebase.app().database();

    var ref = db.ref('clubselector-2394a');


    if (firebase.apps.length === 0) {
        var msg = 'didnt connect';
        console.log(msg);
    }
    var refTest = firebase.app().database().ref().child('clubs').child('CASTRE');
    refTest.update(
        {
            Clubname: 'CASTRE',
            Keyword: 'Hyper',
            Rating: 10
         
        }
    )
    var refTestprime = refTest.child('Rating');
    refTestprime.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
 
