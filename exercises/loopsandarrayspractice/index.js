// #1
// Loop through the following array and count
// how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer",
//  "desk", "lamp", "computer", "lamp", "stapler",
//   "computer",  "computer"] 
// function checkOfficeItems(arr) {
//     var numOfComp = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "computer") {
//             numOfComp++
//         }
//     }
//     return numOfComp;
// } 
// console.log(checkOfficeItems(officeItems));


// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [  
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 

function oldEnough(arr) {
    var text = []
    for (var i =0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            text.push(`${arr[i].name} is old enough.`)
        } else {
            text.push(`${arr[i].name} is not old enough`)
        }
    }
    return text;
}
console.log(oldEnough(peopleWhoWantToSeeMadMaxFuryRoad));
