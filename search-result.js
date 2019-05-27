const showcase = document.getElementById("display-profile");
const club = JSON.parse(sessionStorage.getItem('club'));



function showProfile(userInput,rating, keyword, clubinfo) {
    console.log("printing rating");
    console.log(rating);
    if (rating == -5) {
        showcase.innerHTML += `
        <div class="return-title">
             <h1>Club Not Found</h1>
        </div>
        `;
    }
    else {
        showcase.innerHTML += 
       `<div class = "club-card">
            <div class="club-header">
                <div class="club-name">
                    <h1> ${userInput}  </h1>
                </div>
                <div class="club-rating">
                    <h1> The rating is: ${rating} </h1>
                </div>
            </div>
            <div class="club-keyword">
                <h1>Key Word: ${keyword} </h1>
            </div>
            <div class="club-info">
                Club info is: ${clubinfo} </p> 
            </div>
        </div>
       `;
    }
}
var i;
for (i = 0; i < club.length; i++) {
    console.log("printed in loop");
    window.showProfile(club[i][0],club[i][1],club[i][2],club[i][3]);
}
