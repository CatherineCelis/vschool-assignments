// PRELIMINARIES
//1-Write an if statement that prints "is greater than" if 5 is greater than 3
if (5 > 3){
    console.log("is greater than");
}
//2-Write an if statement that prints "is the length" if the length of "cat" is 3
var cat = "cat"
if (cat.length = 3){
    console.log("is the length");
}
//3-Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

if ("cat" === "dog"){
    console.log("equal");
} else {
    console.log("not the same");
}
// -----------------------------------------------------------------------
//BRONZE MEDAL
//1-Write an if statement that prints <theNameOfThePerson> + 
// is allowed to go to the movie if they are old enough, 
// and the opposite if they are not older than 18.
// var person = {  
//     name: "Bobby",
//     age: 12
//   }
var person = {  
        name: "Bobby",
         age: 12
}
if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie, he is old enough");
} else if (person.age < 18) {
    console.log(person.name + " is not allowed to go to the movie, he is not old enough");
} 
// -------------------------------------------------------------------------------------------------------- 
// 1-Using that same object, only allow them into the movie if their name starts with "B"
var person = {  
    name: "Bobby",
     age: 12
}
if (person.name.indexOf[0] = "B") {
console.log(person.name  + " is allowed to go to the movie, he is old enough");
} else if (person.age > 18) {
console.log(person.name + " is not allowed to go to the movie, he is not old enough");
}  
// ---------------------------------------------------------------------------------------------------------------
// 1-Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
var person = {  
    name: "Bobby",
     age: 12
}
if (person.name.indexOf[0] === "B" && person.age > 18) {
console.log(person.name  + " is allowed to go to the movie, he is old enough");
} else if (person.age > 18) {
console.log(person.name + " is not allowed to go to the movie, he is not old enough");
}  
// ----------------------------------------------------------------------------------------------------------
// SILVER MEDAL
// 1-Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
// 2-Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!!
// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
// ---------------------------------------------------------------------------------------------------
// GOLD MEDAL
// Gold may take some googling! 
// 1. Write an if statement that checks to see if "dog" is a string 
// 2. Write an if statement that checks to see if "true" is a boolean 
// 3. Write an if statement that checks to see if a variable has been defined or not 
// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12? 
// 5. Write a ternary statement that console.logs whether a number is odd or even. For example:

// var myNum = 10;  
// // Write your ternary here to log if `myNum` is odd or even.
// (It should continue to work correctly even if myNum changes to a different number).




