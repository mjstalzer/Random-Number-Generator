// All possible characters for random passwords broken into 4 strings \\
var big = "QWERTYUIOPASDFGHJKLZXCVBNM"
var little = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "1234567890"
        var numb = numbers.match(/\d/g);
        numbChar = numb.join("");
var special = "`~!@#$%^&*()-_=+[{]};:'/?"

// This variable targets the red button on the webpage \\
var generateBtn = document.querySelector("#generate");

function writePassword() {
// Questions users answer -- stored in variables \\
var upperCase = confirm ("Do you want uppercase letters?");
var lowerCase = confirm ("Do you want lowercase letters?");
var numbers = confirm ("Do you want numbers?");
var specialChar = confirm ("Do you want to include special characters?");
var length = prompt ("How many characters do you want this random password to be?")

if (length >= 8 && length <= 126){

// This variable is an empty string that grows depending on user input \\
        let passwordChars = ""

// This is another blank variable that ends up being the generated password at the end of the for loop \\
        let randomPassword = ""


// these if statements track which answers the user gives and combines each respective character set together \\

            if (upperCase) {
                passwordChars += big
                            }

            if (lowerCase){
                passwordChars += little
                            }

            if (numbers) {
                passwordChars += numbChar
                            }

            if (specialChar) {
                passwordChars += special
                            }
        
        for ( var i = 0; i < length; i++) {
        randomPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length))};
            
        var passwordText = document.querySelector("#password");

        passwordText.value = randomPassword;}  
        
        else {
        alert("Please choose between 8 and 126 characters.")
            }}


// Finally, this event listener allows the function writePassword to run when the user clicks the red button \\ 
generateBtn.addEventListener("click", writePassword);
 

