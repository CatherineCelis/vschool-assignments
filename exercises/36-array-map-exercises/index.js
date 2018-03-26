// Use the built-in .map() method on arrays to solve all of these problems

// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){

}

doubleNumbers([2, 5, 100]); [4, 10, 200] 


// 2) Take an array of numbers and make them strings
// function stringItUp(arr){

// }

// stringItUp([2, 5, 100]); // ["2", "5", "100"]  
// 3) Capitalize each of an array of names
// function capitalizeNames(arr){

// }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
// function namesOnly(arr){

// }

// namesOnly([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){

// }

// makeStrings([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
// 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){

// }
// readyToPutInTheDOM([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

// #1
function doubleNumbers(arr) {
    return arr.map(function (num) {
        return num * 2;
    })
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// #2
function stringItUp(arr) {
    return arr.map(function (num) {
        return num.toString();
    })
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]  


// #3
function capitalizeNames(arr) {
    return arr.map(function(str) {
        return str.split(" ").map(function (item) {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }).join(" ");
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// ["John", "Jacob", "Jingleheimer", "Schmidt"]


// #4
function namesOnly(arr){
    return arr.map(function(obj) {
        return obj.name;
    })
}

var testArray = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

console.log(namesOnly(testArray));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// #5
// at least 18 to see The Matrix
function makeStrings(arr) {
    return arr.map(function(obj) {
        if (obj.age > 17) {
            return `${obj.name} can go to The Matrix`;
        } else return `${obj.name} is under age!!`;
    })
}

console.log(makeStrings(testArray));
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


// #6
function readyToPutInTheDOM(arr){
    return arr.map(function(obj) {
        return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
    })
}

console.log(readyToPutInTheDOM(testArray));


/* 
* Review - What questions do we have?
* How to keep track of what goes where and why and where it comes from and when
* Basically WTF
*/

function higherOrder(callback) {
    callback();
}

function woooo() {
    console.log("WOOOO!!!");
}

higherOrder(woooo);


// double the number if its index is even, else return the number
function doubleNumEvenIndex(numb, i) {
    if (i % 2 === 0) {
        return numb * 2
    } else {
        return numb;
    }
}


// this is what Array.map() is doing under the hood.
function myMap(arr, callback) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        // push into the output array the return value of callback with the current item as an argument
        output.push(callback(arr[i], i));
    }
    return output;
}

var numTest = [1, 2, 3, 4, 5];
console.log(myMap(numTest, doubleNumEvenIndex));

// in real life, use .map this way: 
numTest.map(doubleNumEvenIndex);
