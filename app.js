const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
// console.log(userInput);
console.log("HI");
searchClub.addEventListener('click', returnResult);

function returnResult(rating, keyword, clubinfo) {
  var clubArray = new Array();
  console.log("Before userInput in returnResult");
  const userInput = clubInput.value;
  console.log(userInput);
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


function getClub(userInput) {
  console.log(userInput);
  var rating = 0;
  var keyword = "Error";
  var clubinfo;

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

  var refTest = firebase.app().database().ref().child('clubs').child(userInput);
  var refTestprime = refTest.child('Rating');


  var clubbool;
  clubbool = false;

  var clubnoexist;
  clubnoexist = "Club doesn't exist" + '</br>';

  

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

  var refTestprime = refTest.child('Keywords').child('Keyword');
  
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

  var refTestprime = refTest.child('ClubInfo');

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

  console.log(clubbool);
  if (clubbool == false) {
       var finalstring;
       finalstring = "Club Title: " + userInput + '</br>' + "Rating: " + rating + '</br>' + "Keyword: " + keyword + '</br>' + "Clubinfo: " + clubinfo + '</br>';
       returnResult(rating,keyword,clubinfo);
       return;
  }
  else {
    return clubnoexist;
  }
 
}