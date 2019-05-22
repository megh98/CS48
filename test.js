  
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

