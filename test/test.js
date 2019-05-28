//You can run these unit tests by running "npm test" inside the uppercase/functions directory.

//Chai is a commonly used library for creating unit test suites. It is easily extended with plugins.
const chai = require('chai');
const assert = chai.assert;

//Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');

// Require firebase-admin so we can stub out some of its methods.
const admin = require('firebase-admin');
// Require and initialize firebase-functions-test. Since we are not passing in any parameters, it will
// be initialized in an "offline mode", which means we have to stub out all the methods that interact
// with Firebase services.
const test = require('firebase-functions-test')();

// after firebase-functions-test has been initialized
const getClub = require('../app').getClub; // relative path to functions code

describe('App', function(){
  it('search clubs by name', function(){
    let result = getClub();
    assert.equal(result, 'hello');
  });
})


















 /*
  var rating = 0;
  var keyword = "Error";
  var clubinfo;
  var firebase = require('firebase');
  var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");
 if (firebase.apps.length === 0)
 {
      //IF firebase is not connected, then connect
      firebase.initializeApp
      (
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
  }


  var ref = firebase.app().database().ref().child('clubs');

  var output;

  ref.on(
      'value', (snapshot) => {
          snapshot.forEach(
                function(child) {
                    var ref;
                    ref = child.key;
                     console.log(ref, child.val());
                      //this.intVal.push(child.val());
                      //console.log("intVal",this.intVal);
                }
          );
      }
    )
  return;

*/
