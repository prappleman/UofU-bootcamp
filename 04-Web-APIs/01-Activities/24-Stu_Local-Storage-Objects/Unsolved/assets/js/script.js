var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var signup = {
    firstNameInput: firstNameInput.value,
    lastNameInput: lastNameInput.value,
    email: email.value,
    password: password.value
  }

  // TODO: Set new submission to local storage 
  localStorage.setItem("info", JSON.stringify(signup));

});
