// Write a function that generates a completely random password including uppercase, lowercase, numeric, and symbol characters. The function should accept one argument, an integer defining how long the password should be.
// -------------------------------
    // store a string of potential characters
    // jfhdghdhydghd etc.
    // ÷do the following pwdLegth amount of times:
    // randomly select and store an index from the potential list
    // add the chosen character from the index password
    // return the new string
var characterList = "bfaejgfaguf461386451BVFDSGF!!!!!";

function genPwd(pwdLength) {
    var password = "";
    for (var i = 0; i < pwdLength; i++){
        var randomIndex = Math.floor(Math.random() * characterList.length);
        password += characterList.charAt(randomIndex);
    }
    return password;
}
console.log(genPwd(8));

// The example below was to apply the ascii table information please study the meaning of "ascii table"
// pick a random number between 33 and 126 inclusively
// convert that number to a character and add it to the password
function genPwdAscii(pwdLength) {
    var password = "";
    for (var i = 0; i < pwdLength; i++) {
        
        var genPwdAscii = Math.floor(Math.random() * (126 - 33)) + 33;
        
        password += String.fromCharCode(genPwdAscii);
    }
    return password;
}
console.log(genPwdAscii(10));



