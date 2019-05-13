const searchClub = document.querySelector('.search-btn');
const clubInput = document.querySelector('.search-txt');
const showcase = document.getElementById('.display-profile');
const http = new EasyHTTP;

searchClub.addEventListener('click', returnResult);

function returnResult() {
  const userInput = clubInput.value;
  console.log(userInput);
  sessionStorage.setItem('clubname', userInput)
  window.location.href = "search-result.html";
  showProfile(userInput);
  // Call backend
  // - backend -> html (include corresponding info)
  // window.location.href = "search-result.html";
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