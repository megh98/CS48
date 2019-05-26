const showcase = document.getElementById("display-profile");
const club = JSON.parse(sessionStorage.getItem('club'));



    


function showProfile(userInput) {
        console.log(userInput);
        showcase.innerHTML = `
   
        <h1> ${userInput}  <\h1>
 
     

        `;
}

    


window.showProfile(club[0]);

