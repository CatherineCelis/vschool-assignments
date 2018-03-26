// caesar cipher help...

// this problem i am confused about...??????

// var rs = require('readline-sync');  
// var input = rs.question('What phrase would you like to encrypt? ').toLowerCase();  
// var shift = parseInt(rs.question('How many letters would you like to shift? '));  
// var alpha = "abcdefghijklmnopqrstuvwyz"



// var result = "";

// for (var i = 0; i < input.length; i++) {
//    result += input.charAt[i] = (String.fromCharCode(input.charCodeAt(i) + shift));
// }

//    console.log(result.replace('"', " "));

// ...begin looping back through char codes 97-122 again if the shift number pushes the (i) past the lowercase letter char code values

var ask = require("readline-sync");
var caeserShift = function (str, num) {
    var data = "";
   // var alpfa = "abcdefghijklmnopqrstuvwxyz".split('');

    for (var i = 0; i < str.length; i++) {
        var c
        if (str.charCodeAt(i) !== 32) {
            if (str.charCodeAt(i) + num > 122) {
                c = str.charCodeAt(i) - 26;
            } else {
                c = str.charCodeAt(i);
            }
            var n = String.fromCharCode(c + num);
            data += n;
        } else {data+=" "}

    }

    return `\n${data}\n`;
}
var input = ask.question('\nWhat phrase would you like to encrypt?\n').toLowerCase();  
var shift = parseInt(ask.question('\nHow many letters would you like to shift?\n')); 

console.log(caeserShift(input, shift))