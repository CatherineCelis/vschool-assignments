// Create a function that:
// allows the user to enter new words and saves them into your object (be sure to pass the object in as a parameter). Does not allow duplicate words to be stored in the dictionary. This includes case-sensitivity.
// Allows the user to look up words in the dictionary and see the definition of that word.



// make sure to pass in the dictionary object
function lookItUp(word, dictionary, def) {
    if(dictionary.hasOwnProperty(word)){
        // if(dictionary[word] !== undefined)
        // we want word to be the variable
        return dictionary[word];
    } else {
        dictionary[word] = def;
        return true;
    }
}

var dictionaryEng = {};

console.log(lookItUp("absquatulate", dictionaryEng, "verb: To leave abruptly"));
console.log(lookItUp("absquatulate", dictionaryEng));

// console.log(dictionaryEng.absquatulate);

// ----------second example--------
// var Dictionary = function(language) {
//     this.language = language;
//     this.content = {}
// }

// Dictionary.prototype.addWord = function (word, def) {
//     word = word.toLowerCase();
//     if (this.content.hasOwnProperty(word)) {
//         throw "That word already exisits";
//     } else {
//         this.content[word] = def;
//     }
// }




