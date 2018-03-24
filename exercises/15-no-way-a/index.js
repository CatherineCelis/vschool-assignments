// Make a function that takes a string and returns 
// that string with all instances of the letter 'a' 
// removed. Must handle lowercase and uppercase letters.
var gator = "aligator"
function removeA(gator) {
    return gator.replace(/a/gi, "");
}
console.log(removeA(gator));
