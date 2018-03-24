var rs = require("readline-sync");

var favDino = rs.question("What is the name of your favorite dinosaur?");
console.log("WOW!!! " + favDino.toUpperCase() + " is the coolest of allll time!!!!!");

var findLength = rs.question("What is the longest word that you have ever heard of?")
console.log("That IS a long, long word. It is made up of " + findLength.length + " letters!!!!");

var firstName = rs.question("What is your first name?");
console.log("Hello " + firstName + " it is soo very nice to meet you!");

var lastName = rs.question("What is your last name?");
console.log("HA HA! Your full name smashed together is " + firstName.concat(lastName) + "!");

var longGuy = rs.question("Will you give me some good life advice that is at least 25 characters long please?");
console.log(longGuy.slice(longGuy.length/2, longGuy.length));

var repeatBack = rs.question("Thank you for the advice, it was very helpful. \n What part of the advice do you think I should remember the most, \n please type in the number ORDER of the first character, \n beginning with your specific advice, so I can remember it better.")
console.log(longGuy.slice((repeatBack - 1), longGuy.length));

// First you need to install install readline sync locally by typing : npm init -y  : inside the terminal
// then you type: npm install --save readline-sync : inside the terminal
// Make sure to store all input from the user in
//  a variable using the question method of the readline-sync package.
// like this: var rs = require("readline-sync");


