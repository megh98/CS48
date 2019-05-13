const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
const showcase = document.getElementById("display-profile");
//const http = new EasyHTTP;

searchClub.addEventListener('click', addClub);

function addClub() {
  const userInput = clubInput.value;
  //getClub(userInput);
  console.log(userInput);
  console.log("THIS IS" + getClub(userInput));
  showProfile(getClub(userInput));
};



function showProfile(USERINPUT) {
  showcase.innerHTML = `<h1> ${USERINPUT}  <\h1>
  <p> qwriuqbefiebfojnvjsldvnsvkjsd vkjv vk vkv dvkd vdskjvsdkjndlkcndlvndslvnsdlvndsvnd
  dvlndvldvlkdvlksdvlksdvndsklvndslkvnsklv ejg ewv djv wj lvnwklgvnwrklgnlkegnlknwv
  dlkvkndlvnlvknklvnrklvnrlkvnklrvnrlkvnklvnkldvn klvqlkevnqlkvnqeklvnqlkvnqlkvnq               
  dvlndvldvlkdvlksdvlksdvndsklvndslkvnsklv ejg ewv djv wj lvnwklgvnwrklgnlkegnlknwv
  dlkvkndlvnlvknklvnrklvnrlkvnklrvnrlkvnklvnkldvn klvqlkevnqlkvnqeklvnqlkvnqlkvnq               
  dvlndvldvlkdvlksdvlksdvndsklvndslkvnsklv ejg ewv djv wj lvnwklgvnwrklgnlkegnlknwv
  dlkvkndlvnlvknklvnrklvnrlkvnklrvnrlkvnklvnkldvn klvqlkevnqlkvnqeklvnqlkvnqlkvnq               
  dvlndvldvlkdvlksdvlksdvndsklvndslkvnsklv ejg ewv djv wj lvnwklgvnwrklgnlkegnlknwv
  dlkvkndlvnlvknklvnrklvnrlkvnklrvnrlkvnklvnkldvn klvqlkevnqlkvnqeklvnqlkvnqlkvnq  <\p>             
  `;
}

  function getClub(USERINPUT) {
    console.log(USERINPUT);
  	var rating;
  	var keyword;
  	//var firebase = require('firebase');
   // var serviceAccount = require("./clubselector-2394a-firebase-adminsdk-oc2gl-21c4ff87c9.json");
   if (firebase.apps.length === 0) {
        //var msg = 'didnt connect';
        //console.log(msg);
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
    }
    

    var db = firebase.app().database();

    var ref = db.ref('clubselector-2394a');


    if (firebase.apps.length === 0) {
        var msg = 'didnt connect';
        console.log(msg);
    }
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
    var refTest = firebase.app().database().ref().child('clubs').child(USERINPUT);
    /*refTest.update(
        {
            Clubname: 'CASTRE',
            Keyword: 'Hyper',
            Rating: 10
         
        }
    )
    */
    var refTestprime = refTest.child('Rating');


    var clubbool;
    clubbool = false;

    var clubnoexist;
    clubnoexist = "Club doesn't exist" + '</br>';

    refTestprime.on(
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
    var refTestprime = refTest.child('Keyword');
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
    console.log(clubbool);
    if (clubbool == false) {
        //console.log("Into false");
         var finalstring;
          finalstring = "Rating: " + rating + '</br>' + "Keyword: " + keyword + '</br>';
          return finalstring;
    }
    else {
      return clubnoexist;
    }
  
    //catch(e) {
    //}
     //try {
        
    //}
   
}

  

  /*

// Get Users
http.get('https://api.github.com/users')
  // .then(data => console.log(data))
  .then(function(data){
    console.log(data);
  })
  .catch(err => console.log(err));
}
*/