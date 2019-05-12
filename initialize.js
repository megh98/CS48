var firebase = require('firebase');

var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-1792a43ff3.json");

firebase.initializeApp(
{
        apiKey: "AIzaSyDrtl3qnLx_ZfdgxpUVy5XFvkXR4_f6_VU",                             // Auth / General Use
        authDomain: "Clubselector.firebaseapp.com",         // Auth with popup/redirect
        databaseURL: "https://clubselector-2394a.firebaseio.com/", // Realtime Database
        storageBucket: "Clubselector.appspot.com",          // Storage
        messagingSenderId: "1039301954159" 

    }
);

var db = firebase.app().database();


if (firebase.apps.length === 0) {
    var msg = 'didnt connect';
    console.log(msg);
}

var ref = db.ref('clubselector-2394a');

var refTest = firebase.app().database().ref().child('rootNode');
refTest.set({
    Node1: 'Orange'
})
/*function writeNewUser(userId, name) {
    firebase.database().ref('users' + userId).set({
        username: name
    });
    
}*/

/*ref.once(‘value’).then(
        function (snap) 
        {
            console.log(‘snap.val()’, snap.val());
        }
 );*/

var msg = 'connection was successful';

console.log(msg);

/* var usersRef = ref.child('Node1’);
// Create a new ref and log it’s push key
var userRef = usersRef.push();
console.log(‘user key’, userRef.key);
// Create a new ref and save data to it in one step
var userRef = usersRef.push({
 name: ‘Christopher’,
 description: ‘I eat too much ice cream’
});*/

//var usersRef = ref.child('Node1');
/*firebase.database().ref('users/'+ Node1).set(
    {
        Jake: {
            Name: 'Orange'
        }
   }
   );*/
//writeNewUser(Jake, 'orange');
var msg = 'change successful';

console.log(msg);

//firebase.database().goOffline()





