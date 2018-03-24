// Write a function that accepts two numbers as parameters, and returns the sum.

// function addNums(num1,num2){
//     var add = num1 + num2;
//     return add;
// }
// console.log(addNums(3,7));

// function addTwoNums(first, second){
//     var add = first + second;
//     return add;
// }
// console.log(addTwoNums(10000, 7000));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function addThree(first,second,third){
//     if(first > second || first > third){
//         return first;
//     }
//         if(second > first || second > third){
//             return second;
//         }
//             else {
//                 return third;
//             }
// }
// console.log(addThree(4,7,9));

var questionThree = function(number) {
    // Your code goes here!
    if (((number/2) - Math.floor(number/2)) === 0) {
        return "even";
        } else {
            return "odd";
        };
  }; 
  console.log(questionThree(6));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.















// function add(num1, num2){
//     var add = num1 + num2
//     return add;
// }
// console.log(add(num1, num2));

// Write a function that accepts three numbers 
// as parameters, and returns the largest of those
//  numbers.
// function numberSet(num1, num2, num3) {
//     if (num1 > num2) {
//         if (num1 > num3) {
//             return num1;
//         }
//         return num3;

//     } else {
//         if (num2 > num3) {
//             return num2;
//         }
    
//         return num3;   
//     } 
// }
// console.log(numberSet(5, 7, 9));

// Write a function that accepts one number 
// as a parameter, and returns whether that 
// number is even or odd. (Return the string "even"  or "odd");

// function oddEven(num1) {
//     var even = "even";
//     var odd = "odd";
//     if (num1 % 2 === 0) {
//         return even;
            
//     } else {
//         return odd;
//     }
// }

// console.log(oddEven(3));


// Write a function that accepts a string as 
// a parameter. If the length of the string is 
// less than or equal to twenty characters long,
//  return the string concatenated with itself 
//  (string + string). If the string is more than 
//  twenty characters long, return the first half of the string.

// var arr = [" "]
// function charLength(arr) {
//     if (arr.length <= 20) {
//         return(arr.concat(arr));
//     } else if (arr.length > 20) {
        // var lastIndexOf = arr.length;
        // var half = arr.split(0, lastIndexOf);
        // return half;
    // }

// }
// console.log(charLength("uhygtfrehjikjhgfdserty"));


