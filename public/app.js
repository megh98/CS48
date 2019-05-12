const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
const showcase = document.getElementById("display-profile");
const http = new EasyHTTP;

searchClub.addEventListener('click', addClub);

function addClub() {
  const userInput = clubInput.value;
  console.log(userInput);
  showProfile(userInput);
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

  

// Get Users
http.get('https://api.github.com/users')
  // .then(data => console.log(data))
  .then(function(data){
    console.log(data);
  })
  .catch(err => console.log(err));
}