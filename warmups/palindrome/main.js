function isPalindrome(str) {
    // a is code 97
    // z is code 122
    // ascii code
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // lowercase all letters
    str = str.toLowerCase();
    // remover any symbols
    // remove any spaces
    // str = str.replace(/\w+/g, "");
    var normalized = "";
    for (var i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) !== -1) {
            normalized += str[i];
            // alphabet.includes also passes
            // if (normalized.charCodeAt(i) >= 97 && noramlized.charCodeAt(i <= 122) {
                normalized += str[i];
            })

        }
    }

    var reversedStr = "";
    for (var j = normalized.length -1; j >= 0; j--) {
        reverseStr += normalized[j];
    }
    // normalized.split('').reverse().join('')
    console.log(str);

    return normalized === reverseStr;
    // as long as the conditions of an if else stsatement are only the two true falase boolean options then it can just be written as above line instead of typing out the entire
        
    }
    
    // reverse original string
    // check if reversed string is same as old string
    // if so, true
    // else false
}
isPalindrome("");

module.exports = isPalindrome;

// in order to run it through our mocha test we just type mocha in our terminal and just press enter