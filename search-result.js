const showcase = document.getElementById("display-profile");
const club = JSON.parse(sessionStorage.getItem('club'));
const club2 = JSON.parse(sessionStorage.getItem('club2'));

function showProfile2(input) {
        showcase.innerHTML = `
   
        <h1> ${input}  <\h1>
        <p>  ${input} <\p>  


        `;
}

    


function showProfile(userInput,rating, keyword, clubinfo) {
    if(rating == -5) {
        showcase.innerHTML = `
        <h1> ${userInput} <\h1>
        <p> Club doesn't exist <\p>`;
    }
    else {
        showcase.innerHTML = `
   
        <h1> ${userInput}  <\h1>
        <p> Club rating: ${rating} </br> Keyword(s): ${keyword} </br> Club Info: ${clubinfo} <\p>  
 
        <h1> ${userInput}  <\h1>
        <p> Advisor:  Mrs. Kleinknecht- Seventh and eighth graders who loved Battle of the Books 
        in 6th grade can continue the fun with this reading club that meets once a week during lunc
        h from about January to May. Students form teams of four to six members and choose to read 
        books from an assigned list. After some practice battles, the real competi
        tion begins. The top team in each grade goes on a field trip to compete against other s
        chools. If you love to read, this is the club for you. <\p>  


        <h1> ${userInput}  <\h1>
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

    
}

window.showProfile(club[0],club[1],club[2],club[3]);

console.log(club2);
