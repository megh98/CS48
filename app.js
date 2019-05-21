const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
// console.log(userInput);
console.log("HI");
searchClub.addEventListener('click', getClub);

function returnResult(userInput,rating, keyword, clubinfo) {
  var clubArray = new Array();
  console.log("Before userInput in returnResult");
  
  //console.log(userInput);
  clubArray.push(userInput);
  clubArray.push(rating);
  console.log(rating);
  clubArray.push(keyword);
  clubArray.push(clubinfo);

  console.log("After pushing everything");
  console.log(clubArray);
  
  sessionStorage.setItem('club', JSON.stringify(clubArray));
  window.location.href = "search-result.html";
};






async function getClub() {
  const userInput = clubInput.value;
  console.log(userInput);
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


  // if (firebase.apps.length === 0) {
  //     var msg = 'didnt connect';
  //     console.log(msg);
  // }
/* 
ref.child(input1).once('value', function(snapshot) {
  if (snapshot.exists()) {
      console.log("doesn't exist");
  }
else {
  console.log("exists");
  return;
}
});
*/
  //Go the club's child which has value == userInput
  var refTest = firebase.app().database().ref().child('clubs').child(userInput);
  /*refTest.update(
      {
          Clubname: 'CASTRE',
          Keyword: 'Hyper',
          Rating: 10
       
      }
  )
  */

  //refTestprime points to rating of the club
  var refTestprime = refTest.child('Rating');


  var clubbool;
  clubbool = false;

  var clubnoexist;
  clubnoexist = "Club doesn't exist" + '</br>';

  var snapshot = await refTestprime.once('value');

  if(snapshot.exists()) {
    rating = snapshot.val();
  }
  else {
    clubbool = true;
    rating = -5;
  }
/*
  refTestprime.once
  (
      "value").then(function(snapshot) {
          console.log("check to" + snapshot.exists());
          if (snapshot.val() == null) {
              clubbool = true;
              console.log("doesn't exist");
              return clubnoexist;
          }  
          else {
              console.log(snapshot.val());
              rating = snapshot.val();
          }
      }, 
      function (error) {
          console.log("Error: " + error.code);
      }
  );


  refTestprime.on
  (
      "value", function(snapshot) {
          console.log("check to" + snapshot.exists());
          if (snapshot.val() == null) {
              clubbool = true;
              console.log("doesn't exist");
              return clubnoexist;
          }  
          else {
              console.log(snapshot.val());
              rating = snapshot.val();
          }
      }, 
      function (error) {
          console.log("Error: " + error.code);
      }
  );
  
*/
  var refTestprime = refTest.child('Keywords').child('Keyword');
  
  var snapshot = await refTestprime.once('value');

  if(snapshot.exists()) {
    keyword = snapshot.val();
  }
  else {
    clubbool = true;
    keyword = "poo";
  }
/*
  refTestprime.on(
      "value", function(snapshot) {
          if (snapshot.val() == null) {
              return;
          }
          else {
              console.log(snapshot.val());
              keyword = snapshot.val();
          }
      }, 
      function (error) {
          console.log("Error: " + error.code);
      }
  );
*/


  var refTestprime = refTest.child('ClubInfo');

  var snapshot = await refTestprime.once('value');

  if(snapshot.exists()) {
    clubinfo = snapshot.val();
  }
  else {
    clubbool = true;
    clubinfo = "you suck";
  }
/*
  refTestprime.on(
      "value", function(snapshot) {
          if (snapshot.val() == null) {
              return;
          }
          else {
              console.log(snapshot.val());
              clubinfo = snapshot.val();
          }
      }, 
      function (error) {
          console.log("Error: " + error.code);
      }
  );
  */

  console.log(clubbool);
  if (clubbool == false) {
      //console.log("Into false");
       var finalstring;
       console.log(rating);
       finalstring = "Club Title: " + userInput + '</br>' + "Rating: " + rating + '</br>' + "Keyword: " + keyword + '</br>' + "Clubinfo: " + clubinfo + '</br>';
       //return finalstring;
       //console.msg("poo");
       returnResult(userInput,rating,keyword,clubinfo);
       return;
  }
  else {
    return clubnoexist;
  }

  //catch(e) {
  //}
   //try {
      
  //}
 
}