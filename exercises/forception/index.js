var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
// create a function that will create a new array
// inside this array,each index of the people array will be followed by a colin
// then followed by the entire alphabet string after each colin.
// loop within a loop, make sure to return our new array
// console.log our function and pass in the correct parameters




function forception(arr, str) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + ":");
        for (var j = 0; j < str.length; i++) {
            newArr.push(str[j]);
        }
    }
    return newArr;
}
console.log(forception(people,alphabet));