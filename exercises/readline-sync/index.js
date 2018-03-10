var readlineSync = require("readline-sync");

var myName = readlineSync.question("What is your name?");

console.log("Welcome, " + myName.toUpperCase() + "!");

console.log("You entered: " + myName.length + "Characters")

var name = myName;
var welcome = (" Welcome again Mr./Mrs. ");
console.log(welcome.concat(name));

var message = readlineSync.quetion (" type your message here")

function usersInput() {
  while (input.length < 20) {
    message = readlineSync.quetion (" PLease enter more than 20 characters")
  }
  var half = message.splice(0, message.length/2)
  var rev = half.reverse()
  console.log(rev)


    // slice insert somewhere here
    
  
// this is what we had before we learned that we should use a while loop
//   if (message.length >= 20) {
//     // slice insert somewhere here
//     return message;
//   } else {
//     console.log("Please enter more than 20 characters!")
//     var message = readLineSync.question("Type your message here")
//   }

// }
// use3 slice method to cut out half of the message.
// use a while loop




   

