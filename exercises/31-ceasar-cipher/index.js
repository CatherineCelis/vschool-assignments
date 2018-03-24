// caesar cipher help... trying to make…

var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

var shift = parseInt(readline.question('How many letters would you like to shift? '));

var result = "";

for (var i = 0; i < input.length; i++) {
   result += input.charAt[i] = (String.fromCharCode(input.charCodeAt(i) + shift));
}

   console.log(result.replace('"', " "));

// ...begin looping back through char codes 97-122 again if the shift number pushes the (i) past the lowercase letter char code values