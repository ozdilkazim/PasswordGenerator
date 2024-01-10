// Array of special characters to be included in password
var specialCharacters = [
  `@`,
  `%`,
  `+`,
  `\\`,
  `/`,
  "`",
  `!`,
  `#`,
  `$`,
  `^`,
  `?`,
  `:`,
  `,`,
  `)`,
  `(`,
  `}`,
  `{`,
  `]`,
  `[`,
  `~`,
  `-`,
  `_`,
  `.`
];

// Array of numeric characters to be included in password
var numericCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
  `G`,
  `H`,
  `I`,
  `J`,
  `K`,
  `L`,
  `M`,
  `N`,
  `O`,
  `P`,
  `Q`,
  `R`,
  `S`,
  `T`,
  `U`,
  `V`,
  `W`,
  `X`,
  `Y`,
  `Z`
];
var passwordOptions = {
  numberOfChars : 0,
  lowercase : false,
  uppercase : false,
  numeric : false,
  special : false,
  criteria: [],
  p : [], 
}

// Function to prompt user for password options
function getPasswordOptions() {
 
  // Ask character lenght
  passwordOptions.numberOfChars = prompt(`How many characters would you like the passwoord? (min:8 and max:128)`);
  // Check if character lenght satisfies requirements.
  while (passwordOptions.numberOfChars < 8 || passwordOptions.numberOfChars > 128) {  
    alert(`Please enter a valid value!`);
    passwordOptions.numberOfChars = prompt(`How many characters would you like the passwoord? (min:8 and max:128)`);
  }
 
  // Ask if it includes lowercase 
  passwordOptions.lowercase = confirm(`Your password includes LOWERCASE characters?`);
  // Ask if it includes uppercase 
  passwordOptions.uppercase = confirm(`Your password includes UPPERCASE characters?`);
  // Ask if it includes numeric 
  passwordOptions.numeric = confirm(`Your password includes NUMERIC characters?`);
  // Ask if it includes special 
  passwordOptions.special = confirm(`Your password includes SPECIAL characters?`);
 
  // Check if at least one selection is made.
  while (!passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numeric && !passwordOptions.special) {
      alert(`Please select at least one option!`);
     
      // Ask if it includes lowercase 
      passwordOptions.lowercase = confirm(`Your password includes LOWERCASE characters?`);
      // Ask if it includes uppercase 
      passwordOptions.uppercase = confirm(`Your password includes UPPERCASE characters?`);
      // Ask if it includes numeric 
      passwordOptions.numeric = confirm(`Your password includes NUMERIC characters?`);
      // Ask if it includes special 
      passwordOptions.special = confirm(`Your password includes SPECIAL characters?`);
  }
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom() {
 
  // 3 criteria
  if (passwordOptions.lowercase && passwordOptions.uppercase && passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters,  specialCharacters);  
  } else if (passwordOptions.lowercase && !passwordOptions.uppercase && passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(numericCharacters,  specialCharacters);  
  } else if (passwordOptions.lowercase && passwordOptions.uppercase && !passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(upperCasedCharacters,  specialCharacters);  
  } else if (passwordOptions.lowercase && passwordOptions.uppercase && passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(upperCasedCharacters,  numericCharacters);  
  } else if (!passwordOptions.lowercase && passwordOptions.uppercase && passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = upperCasedCharacters.concat(numericCharacters, specialCharacters);  
  
  // 2 criteria
  } else if (passwordOptions.lowercase && passwordOptions.uppercase && !passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(upperCasedCharacters);  
  } else if (passwordOptions.lowercase && !passwordOptions.uppercase && passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(numericCharacters);  
  } else if (passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters.concat(specialCharacters);  
  } else if (!passwordOptions.lowercase && passwordOptions.uppercase && passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = upperCasedCharacters.concat(numericCharacters);  
  } else if (!passwordOptions.lowercase && passwordOptions.uppercase && !passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = upperCasedCharacters.concat(specialCharacters);  
  } else if (!passwordOptions.lowercase && !passwordOptions.uppercase && passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = numericCharacters.concat(specialCharacters);  
  
  // 1 criteria
  } else if (passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = lowerCasedCharacters;
  } else if (!passwordOptions.lowercase && passwordOptions.uppercase && !passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = upperCasedCharacters;
  } else if (!passwordOptions.lowercase && !passwordOptions.uppercase && passwordOptions.numeric && !passwordOptions.special) {
    passwordOptions.criteria = numericCharacters;
  } else if (!passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numeric && passwordOptions.special) {
    passwordOptions.criteria = specialCharacters;
  }
}
getRandom();

// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i < passwordOptions.numberOfChars; i++) {
    passwordOptions.p += passwordOptions.criteria[Math.floor(Math.random() * passwordOptions.criteria.length)];
  }
  return passwordOptions.p;
}

// Get references to the #generate element
var generateBtn = document.querySelector(`#generate`);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);