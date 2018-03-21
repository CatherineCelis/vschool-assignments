
// so we just need to define a variable and set it equal to what we are trying to accomplish with our built inn string method
// = acces our string then apply the method
// then console.log the variable we assigned the built in method too.

// .toUpperCase()

var str = "hellllllo";
var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// .concat()

var pig = "pink yellow orange brown and muddy as hell";
var cow = " loud and fat and happy and leaks out chocolate milk";

var fullPigCow = pig.concat(cow);
console.log(fullPigCow);

// .indexOf()
// this will give the first instance's index number position of the letter "t" indexof
var ant = "small, black, and little";
var antIndx = ant.indexOf("t");
console.log(antIndx);
// with strings the index count starts at 0
var spoon = "round and silver with decoration";
var spnIndx = spoon.indexOf("o", 10);
console.log(spnIndx);

// .slice()
// removes a section of a string and returns a new string

var str = "hello world";
var newStr = str.slice(6);
//  so starting at the index of 6, the rest of the string will be returned to us as a new string 
console.log(newStr);

// or you can just grab a middle section with .slice

var strip = "Hello World";
var newStrip = strip.slice(4,7);
console.log(newStrip);


// or you can go from the back of the string and take

var strip = "Hello World";
var newStrip = strip.slice(-5);
console.log(newStrip);

// .split()
// splits a string into an array of strings by separating the string into substrings



var str = 'hello I am john, I am a real human being';  
var words = str.split(' '); // splits by every space  
var lines = str.split(','); // splits by every ,  
var allChar = str.split(''); // splits by every character

console.log(words);//prints[ 'hello', 'I', 'am', 'john,', 'I', 'am', 'real' ]  
console.log(lines);//prints[ 'hello I am john', ' I am real' ]  
console.log(allChar);//prints[ 'h','e','l','l','o',' ','I',' ','a','m',' ','j','o','h','n',',',' ','I',' ','a','m',' ','r','e','a','l' ] 

// .toLowerCase()

// Returns the string changed to lower case

var str = 'HelLo WorlD';  
var lowStr = str.toLowerCase();  
console.log(lowStr); // prints 'hello world' 








