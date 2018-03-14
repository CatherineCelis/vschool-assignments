// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){  
//     //   //check data types first and throw error
//         if(typeof x !== "number" || typeof y !== "number") {
//             throw "Input must be a number";
//         }
//         return x + y;
//     }
//     console.log(typeof "this is a string");

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// function sum(x, y){  
//   //check data types first and throw error
//     if(typeof x !== "number" || typeof y !== "number") {
//         throw "Input must be a number";
//     }
//     return x + y;
// }
// console.log(typeof "this is a string");

// try {
//     sum("1", "4");
// } catch(err) {
//     console.log(err);
// }













// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};  


function logIn(username, password) {
    // x = "sam";
    // y = "123abc";
    if(user.username !== username || user.password !== password) {
        // console.log("Login successful!");
        throw "username and password do not match!";
    } 
    return "login successful!"
}




// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

try {
    console.log(logIn("sam", "123abc"));
} catch (err) {
    console.log(err);
}

















// try {
//     var myName = "John Doe";  
// console.log(name);  


// } catch(err) {
//     console.log(err);

// }

// we need to fix the name because it reads undefined
// change to myName which is defined. 





// ========================================
// function movieCheck(age) {  
//   if(age < 0) {
//     throw "Error cannot be less than 0";
//   } else if(age <= 12) {
//     console.log("You can see PG movies");
//   } else if(age >= 13 && age < 18) {
//     console.log("You can see PG-13 movies");
//   } else if(age >= 18) {
//     console.log("You can see R rated movies");
//   }
// }


// try {
// movieCheck(1);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log(err);
// } 

// code runs correctly, only prints a predefined throw error which tells us that the age parameter passed cannot be less than 0.
// --------------------------------------------belowmexamplefromreading----
// var input = "";

// try {  
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }