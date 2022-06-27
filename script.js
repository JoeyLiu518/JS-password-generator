// To start this assignment, I am going to create a Var for everything that is required of the password

var generateBtn = document.querySelector("#generate");
// var lowercase = "abcdefghijklmnopqrstuvwxyz"
// var uppercase = lowercase.toUpperCase()
// var number = "1234567890"
// var special = "!#$%&()+,/:;=<>@[]|_-`~"
// var password = ""
// I moved the following variables above because I realized these were set as global variables. MOVED TO THE function criteria

// Here I will be creating the functions needed to complete this assignment.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// In order for the password to be created, it needs to be between 8 and 128 characters. I am going to start with this function

function length() {
  var passwordLength = prompt("Please select a length for your password between 8 and 128 characters.")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a length between 8 and 128")
      passwordLength = length()
    }
    return passwordLength
}

// Next I am creating a function that will prompt the user to set the criteria for his password.
function criteria() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = lowercase.toUpperCase() 
  var number = "1234567890" 
  var special = "!#$%&()+,/:;=<>@[]|_-`~"
  var password = ""
  if (confirm("Press Ok if you would like your password to have lower case letters")) {
    password = password.concat(lowercase)
  }
  if (confirm("Press Ok if you would like your password to have capitalized letters")) {
    password = password.concat(uppercase)
  }
  if (confirm("Press Ok if you would like your password to have numbers")){
    password = password.concat(number)
  }
  if (confirm("Press Ok if you would like your password to have special characters")) {
    password = password.concat(special)
  }
  return password
}
// Finally, I am creating the function that will allow the password to be created.
function generatePassword() {
  var passwordLength = length()
  var passcriteria = criteria()
  var password = ""
  
  for (i = 0; i < passwordLength; i++) {
    var randomizer = Math.floor(passcriteria.length * Math.random())
    password = password + passcriteria[randomizer]
  }
  return password
}
// realized my code was not running because I had math.floor and not Math.floor.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
