// keeping track of what gos where and where it comes from and when basically WTF
// takes a function as an argument and can call them at will
// function higherOrder(callback){
//     callback();
// }

// var wooo = function(){
//     console.log("wooooooooo")
// }

// higherOrder(function);
// -------------------------------------number 1 of map exercise----------------

// function doubleNumbers(numbers){
//     return numbers.map(function(number){
//         return number * 2;
//     })
// }
// function doubleNum(number, i){
//     if(i % 2 === 0) {
//         return number * 2;
//     } else {
//         return number;
//     }
// }

// console.log(map([1,2,3,4], doubleNum));
// // in real life
// var numbers = [1,2,3,4,5,]
// numbers.map(doubleNum);




// // bellow is just what the map magically does under the hood in javascript
// function map(arr,callback){
//     var output = [];
//     for(var i =0; i<arr.length; i++){
//         // push into the output array the return value of the callback with the current item as an argument.
//         output.push(callback(arr[i], i));
//     }
//     return output;
// }


// // --------------------------------------------------------------------
// FILTER
// 
// function fiveAndGreaterOnly(numbers) {
//     return numbers.filter(function(num){
//         return num >= 5;  
//     })

// }

// fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]  

// REDUCE
// HELPFUL WHEN YOU WANT TO FIND THE AVERAGE OF SOMETHING
// IF YOU WANT TO FIND THE HIGHEST NUMBER IN A SET
// GOES THROUGH A WHOLE ARRAY AND RETURNS A SINGLE VALUE
// under the hood
function reduce(arr, callback, initialVal){
    var total = initialVal || arr[0];
    for(var i =0; i<arr.length; i++){
        total = callback(total, arr[i]);
    }
    return total;

    // reduce needs to have a starting value
    // loop through a whole bunch pf values and tacking them together

}

function addTogether(total, val){
    return total + val;
}
var numbers = [1,2,3,4,5];
console.log(reduce(numbers, addTogether)-1);

// numbers.reduce(addTogether);


// SORT-------------------------------------------------






