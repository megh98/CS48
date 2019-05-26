    async function matchclub(input) {
    input = '"' + input + '"';
       var rating = 0;
        var keyword = "Error";
        var clubinfo;
        var firebase = require('firebase');
        var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");
        if (firebase.apps.length === 0) {
      //IF firebase is not connected, then connect
                  firebase.initializeApp (
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


        var returnArr = [];
        var counts = [];
        var output = [];
        var title = [];



        await ref.once('value', function(snap) {
            snap.forEach(function(item) {
                  var itemVal = item.val();
                  returnArr.push(itemVal);
            }
        ); 
      });
        for (i = 0; i < returnArr.length; i++) {
           counts.push((returnArr[i]).Keywords);
           title.push((returnArr[i]).Clubname);
           //title.push((returnArr[i]).Clubname);
        }
        //console.log(input);
        //console.log(counts.length);
        for (i = 0; i < counts.length; i++) {
            //console.log(counts[i]);
            var l = counts[i];
            for (var k in l) {
                //console.log(k);
                var string;
                string = JSON.stringify(k);
                //console.log(string);
                if (string == input) {
                  //console.log("found");
                  output.push(i);
                }
                else {
                  //console.log("not found");
                }
            }
            //console.log(keys);
            //console.log(keys.length);
            /*
            for (i = 0; i < keys.length; i++) {
              if (keys[i] == input) {
                //console.log("found");
              }
              else {
                //console.log("Not found");
              }
            }
            */
        }
        for (i = 0; i < output.length; i++) {
           var entry;
           entry = JSON.stringify(title[output[i]]);
           console.log(entry);
        }
            
      return;
  }


  
  matchclub("Powerful");



 