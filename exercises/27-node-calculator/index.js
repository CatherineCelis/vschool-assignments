var rs = require("readline-sync");
var num1 = Number(rs.question("Please pick a number\n"));
var num2 = Number(rs.question("Please pick a number\n"));
var operations = ["+", "-", "*", "/"];
var operator = parseInt(rs.keyInSelect(operations, "Please choose the mathematical operation\n you wish to perform with the two numbers selected") + 1);

function answer(num1, num2, operator) {
    switch(operator) {
    case 1:
        add(num1, num2);
        break;
    case 2:
        sub(num1, num2);
        break;
    case 3:
        mul(num1, num2);
        break;
    case 4:
        divide(num1, num2);
    }
}

answer(num1, num2, operator);     

function add(num1, num2) {
console.log("The result is: ", num1 + num2);
}

function sub(num1, num2) {
console.log("The result is: ", num1 - num2);
}

function mul(num1, num2) {
console.log("The result is: ", num1 * num2);
}

function divide(num1, num2) {
console.log("The result is: ", num1 / num2);
}


// Your script must have:
// A function that adds two numbers and returns the result
// A function that multiplies two numbers and returns the result
// A function that divides two numbers and returns the result
// A function that subtracts two numbers and returns the result
// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]
// -------------------------------------
// get num1
// get num2
//var to choose operation
//chooser funciton
//selects which function to perform, and calls it using the numbers as arguements
//create all of the arithmetic functions needed
