// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2
// var crep = ["aaacodebbb", "codexxcode", "cozexxcope"]
// function countCode() {
//     var rep = crep.replace["d", "n"];
//     return rep;
// }
// console.log(countCode());

function countCode(str) {
    var count = str.match(/co.e/gi).length;
    return count;       
}
console.log(countCode("codexxcode"));
// bens example below

function countCode(str) {
    var count = 0;
    var regEx = /co\we/g;
    while(regEx.exec(str)){
        count++;
    } 
    return count++;     
}
console.log(countCode("codexxcode"));

    // below code explains how to use regular expression eaasily to search a string

var regEx = /abc/;
// = /\w/
// check for anything that is a word character, letter or number
//  /co\we/

console.log(regEx.test("blablac"));
console.log(regEx.exec("blablac"));
// prints the patern, the start index and the searched string itself.

    // hint:
    // console.log(str.match(/co.e/gi).length);

    // regular expression
    // g = global to find all instances
    // i = case insensitive to find lowercae and caps


    // find code in the string = example

    var countCode = function(str) {
        var count = 0;
        for (var i = 0; i < str.length; i++){
            if (str[i] === "c") {
                if (str[i+1] === "o") {
                    }    if (str[i+3] === "e") {
                    return count++;
                    }
                }    
            }
        }
        return count;
    }

    console.log(countCode(str));

    // the above code is longhand the below is attempted shorthand regurgitation

    var countCode = function(str) {
        var count = 0;
        for (var i = 0; i < str.length; i++){
            // combine it all together to make code dry
            if (str[i] + str[i+1] + str[i+3]  === "coe") {
                    return count++;
                    }
                }    
            }
        }
        return count;
    }

    console.log(countCode(str));



