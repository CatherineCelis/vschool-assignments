console.log(5+5);

function sum(x, y) {
    return x + y;
}

console.log(sum())


// CONDITIONALS PRACTICE



//true
//false


if(true){
    //do this code-it will run because true is always true
    console.log("true is true");

}

if(false)
// this code will not run
console.log("true is true");

// EVERYTHING INSIDE OF THE PARENTHESIS MUST BE SIMPLIFIED TO A BOOLEAN TRUE OR FALSE!!
var didBobEatBreakfast = false;
if (didBobEatBreakfast) {
    console.log("I am fullof yogurt")
}
// code will not run but if you change it to true then it will run

// Comparison Operators < > <= >= === == ! !==

var myAge = 29;

if(myAge >= 21) {
    console.log("BEER!!")
}
// CODE WILL RUN AND THEN IF WE CHANGE IT TO 18 IT WILL NOT RUN,
// 
var myAge = 29;

if (myAge >= 18) {
    console.log("Welcome to friday the 13th!")
} else if (myAge >= 13) {
    console.log("Welcome to black panther")
} else if(myAge >= 0) {
    console.log("Welcome to toy story"); 
} else {
    console.log("Bro you are from the future");
}
// make sure to order your code so that when it is run it will be in a nice tree structure, try not to be redundant depending on the program written
var height = 5
var age = 16;

//logical operartors && ||

// and gate (&&) = if both inputs are true only then will the code run

// x  y | output
// true true   | true
// true false  | true
// false false | false
// false true  | true

// or gate (||) = only one input has to be true in order for the code to run

// truthy falsey

var name = "Ben"

if(name){

}
// this code will be run as true
// there is a table in this readings to review list of what is truthy 



