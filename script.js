//function to create password
function generatePassword() {
  //get input for characters needed
  var charLim = '';
  charLim = window.prompt('How many characters do you need for your password? (8 minimum - 128 maximum)');

  //checks for blank input, too few, or too many characters requested
  while (charLim < 8 || charLim > 128 || charLim === '' || charLim === null) {
    charLim = window.prompt('Your input is invalid. 8 to 128 characters only. Try again.');

    //if input is valid then it gets turned into an integer for later loops
    if (charLim >= 8 && charLim <= 128) {
      charLim = parseInt(charLim);
    }
  }
  console.log("You'll need " + charLim + ' characters for this password.');

  //initialize criteria category and appropriate character pool
  var critSel = [
    {
      name: 'lowercase letters',
      pool: 'abcdefghijklmnopqrstuvwxyz'
    },
    {
      name: 'uppercase letters',
      pool: ''
    },
    {
      name: 'numbers',
      pool: '0123456789'
    },
    {
      name: 'special characters',
      pool: ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~\\' + "'"
    }
  ];

  //very roundabout way to set uppercase's pool by cloning lowercase's character pool and converting them to uppercase letters (I just wanted to practice this, really.)
  var upperCon = critSel[0].pool
  upperCon = upperCon.toUpperCase();
  critSel[1].pool = upperCon;

  //loop to get criteria for characters
  var comPool = '';
  for (var i = 0; i < critSel.length; i++) {
    //get input for character type
    var optSel = window.confirm('Do you need ' + critSel[i].name + '?');
    //check for confirm and add characters needed for final output
    if (optSel == true) {
      comPool += (critSel[i].pool);
      console.log("You'll need " + critSel[i].name + '.');
    }
  }

  //loop to output randomized password
  var password = '';
  //output a random character from the final pool for the number of characters needed
  for (var i = 0; i < charLim; i++) {
    password += comPool.charAt(Math.random() * comPool.length);
  }

  //return password output for html id display
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
