(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
// console.log(userInput);
console.log("HI");
searchClub.addEventListener('click', action);


function returnResult(finalstring) {
  console.log(finalstring);
  sessionStorage.setItem('club', JSON.stringify(finalstring));
  window.location.href = "search-result.html";
  
};







function action() {
  const userInput = clubInput.value;
  console.log(userInput);
  matchclub(userInput);

}







async function getClub(userInput) {
  var rating = 0;
  var keyword = "Error";
  var clubinfo;
  //var firebase = require('firebase');
  //var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");
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
  
  //Go to the database in firebase
  var db = firebase.app().database();

  //Go to the first node in the database
  var ref = db.ref('clubselector-2394a');

  var clubbool;
  clubbool = false;

  var finalstring;

  var clubnoexist;
  clubnoexist = "Club doesn't exist" + '</br>';

 for (i = 0; i < userInput.size; i++) {
       var currentclubbool;
       currentclubbool = false;
        var refTest = firebase.app().database().ref().child('clubs').child(userInput[i]);
  
        var refTestprime = refTest.child('Rating');


        var snapshot = await refTestprime.once('value');

        if(snapshot.exists()) {
          clubbool = true;
            currentclubbool = true;
            rating = snapshot.val();
        }
        else {
            console.log("club doesn't exist");
            rating = -5;
        }

        var refTestprime = refTest.child('Keywords').child('Keyword');
  
        var snapshot = await refTestprime.once('value');

        if(snapshot.exists()) {
            clubbool = true;
            currentclubbool = true;
            keyword = snapshot.val();
        }
        else {
            keyword = "poo";
        }



        var refTestprime = refTest.child('ClubInfo');

        var snapshot = await refTestprime.once('value');

        if(snapshot.exists()) {
            clubinfo = snapshot.val();
        }
        else {
            clubinfo = "you suck";
        }


        console.log(clubbool);

      //console.log("Into false");
        console.log(rating);
        if (currentclubbbool = true) {
          finalstring = finalstring + "Club Title: " + userInput[i] + '</br>' + "Rating: " + rating + '</br>' + "Keyword: " + keyword + '</br>' + "Clubinfo: " + clubinfo + '</br>';
        }
       //return finalstring;
       //console.msg("poo");
    }
    if (clubbool = false) {
        finalstring = clubnoexist;
    }
    returnResult(finalstring);

  
  return;
}

 
  
  async function matchclub(input) {
    var iskeyword;
    iskeyword = false;
    input = '"' + input + '"';
       var rating = 0;
        var keyword = "Error";
        var clubinfo;
        //var firebase = require('firebase');
        //var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");
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
        var final = [];


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
        for (i = 0; i < counts.length; i++) {
            //console.log(counts[i]);
            var l = counts[i];
            for (var k in l) {
                //console.log(k);
                var string;
                string = JSON.stringify(k);
                if (string == input) {
                  iskeyword = true;
                  output.push(i);
                }
                else {
                  continue;
                }
            }
  
        }
        if (iskeyword == true) {
            for (i = 0; i < output.length; i++) {
                    final.push(JSON.stringify(title[output[i]]));
                    getclub(final);
            }
        }
        else {
            final.push(input);
            getClub(input);
        }
        
            
      return;
  }



 

},{}]},{},[1]);
