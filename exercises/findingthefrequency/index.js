// look at each letter of the input string
// add each letter to an object. If it's not already there
// if it's already there, increase it's count
// print the object to the console
function letterFreq(str) {
    var output = {};
    for (var i = 0;i < str.length; i++) {
        if (output.hasOwnProperty(str[i])) {
            output[str[i]]++;
        } else {
            output[str[i]] = 1;
        }
    }
    return output;
}

var phrase = "slimy smelly solution";

console.log(letterFreq(phrase));

// this is called the greedy algorithium(the greedy approach)

        
    
