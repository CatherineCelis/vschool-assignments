




   


function genPwd(pwdLength){
    // store a string of potential characters
    var characterList = "bfaejgfaguf461386451BVFDSGF!!!!!";
    var password = "";
    // jfhdghdhydghd etc.

    // ÷do the following pwdLegth amount of times:
    for (var i = 0; i < pwdlength; i++){
        // randomly select and store an index from the potential list
        var randomIndex = Math.floor(Math.random() * cgaracterList.length);
        // add the chosen character from the index password
        passowrd += charactersList.charAt(randomIndex);


    }
    // return the new string
    return password;
}
console.log(genPwd(8));

// this example was apply the ascii table information please study the meaning of "ascii table"

function genPwdAscii(pwdlength) {
    var password = "";
    for (var i = 0; i < pwdLength; i++) {
        // pick a random number between 33 and 126 inclusively
        var genPwdAscii = Math.florr(Math.random() * (126 - 33)) + 33;
        // convert that number to a character and add it to the passweord
        password += String.fromCharCode(asciiCode);
    }
    return password;
}
console.log(genPwdAscii(5));



