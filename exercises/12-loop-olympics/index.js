// will log 0-9

for (var i = 0; i < 10; i++){
    console.log(i);
}

// will log 9-0

for (var i = 9; i > 0; i--){
    console.log(i);
}

// print these fruits to the console

var fruits = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// all of the above are preliminaries
// --------------------------------------------------
// bronze #1-3

// Write a for loop that will push the numbers 0 through 9 to an array.
var arr = []
for (var i = 0; i < 10; i++) {
    arr.push(i)
}
console.log(arr);

// Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i < 101; i+= 2) {
    console.log(i);
}

// Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var arr = [];
var i = 0;
while (i < fruit.length) {
    console.log(fruit[i])
    i+=2;
}
// bottom line adds every other one
// ---------------------------------------------------
// silver

// Write a loop that will print out all the names of the people of the people array

// ?


// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// ?
// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  var names = [];
  var occupations = [];
  for (var i = 0; i < peopleArray.length; i++) {
      if (i % 2 === 0) {
          names.push(peopleArray[i].name);
      } else {
          occupations.push(peopleArray[i].occupation);
      }
  }
  console.log(names);
  console.log(occupations);
// ----------------------------------------------

// GOLD

// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

var gridArray = [];
for (var h = 0; h < 3; h++) {
    gridArray.push([]);
    for (var i = 0; i < 3; i++) {
        gridArray[h][i] = 0;
    }
}
console.log(gridArray);


// 2.Create an array that mimics a grid like the following using for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = h;
    }
}
console.log(gridArray);

// 3.Create an array that mimics a grid like the following using for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = i;
    }
}
console.log(gridArray);

// Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...],  
//             [0, ...], 
//             [0,...], ...] 

var gridArray= [];
for(var h=0;h<3;h++) {
    gridArray.push([]);
    for(var i=0;i<3;i++){
        gridArray[h][i] = "x";
    }
}
console.log(gridArray);



















