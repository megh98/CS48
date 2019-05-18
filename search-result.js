const showcase = document.getElementById("display-profile");
const USERINPUT = sessionStorage.getItem('clubname');


function addClub(rating,keyword,clubinfo) {
  //const userInput = clubInput.value;
  //getClub(userInput);
  //console.log(userInput);
  //console.log("THIS IS" + getClub(userInput));
  showProfile(rating,keyword,clubinfo);
};




function showProfile(rating,keyword,clubinfo) {
    showcase.innerHTML = `
   
    <h1> ${USERINPUT}  <\h1>

    <p> ${clubinfo}  <\p>  

 
    <h1> ${USERINPUT}  <\h1>
    <p> Advisor:  Mrs. Kleinknecht- Seventh and eighth graders who loved Battle of the Books 
    in 6th grade can continue the fun with this reading club that meets once a week during lunc
    h from about January to May. Students form teams of four to six members and choose to read 
    books from an assigned list. After some practice battles, the real competi
    tion begins. The top team in each grade goes on a field trip to compete against other s
    chools. If you love to read, this is the club for you. <\p>  


    <h1> ${USERINPUT}  <\h1>
    <p> 
    Advisors:  Mrs. Albano & Mr. Michalowski  All students are invited to be a part of the
     Spring Musical. Auditions typically take place in November/December with performances
     in March/April. All students who audition are cast in the show and can participate.
     Rehearsals are after school from 3:10-5:00 however times and days vary based upon 
     roles. Students will have the opportunity to learn basic skills in acting, voice, 
     choreography and scenic design. We perform in our auditorium to standing-room-only 
     crowds!
    <\p>  


     `;
    
     }

//window.showProfile(getClub(USERINPUT));

function getClub(USERINPUT) {
    console.log(USERINPUT);
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
    //Go the club's child which has value == USERINPUT
    var refTest = firebase.app().database().ref().child('clubs').child(USERINPUT);
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
        //console.log("Into false");
         var finalstring;
         finalstring = "Club Title: " + USERINPUT + '</br>' + "Rating: " + rating + '</br>' + "Keyword: " + keyword + '</br>' + "Clubinfo: " + clubinfo + '</br>';
         //return finalstring;
         //console.msg("poo");
         showProfile(rating,keyword,clubinfo);
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