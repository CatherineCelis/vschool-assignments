// 1.Remove the last item from the vegetable array.
var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

function remLast() {
    vegetables.pop()
}

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// 2.Remove the first item from the fruit array.
// var fruit = ["banana", "apple", "orange", "watermelon"];  
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

// var removeFirstItem = fruit.shift()

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);
// 3.Find the index of "orange."
// var fruit = ["banana", "apple", "orange", "watermelon"];  
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

// var arrLength = fruit.indexOf("orange");

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);
// 4.Add that number to the end of the fruit array.
// 5.Use the length property to find the length of the vegetable array. Log that to the console.
// 6.Add that number to the end of the vegetable array.
// 7.Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8.Remove 2 elements from your new array starting at index 4 with one method.
// 9.Reverse your array.
// 10.Log your array as a string to the console.



// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables); 

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables); 

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables); 

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.  
var rm1= vegetables.pop();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Remove the first item from the fruit array. 
var rm2 = fruit.shift();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Find the index of "orange."  
var ind3 = fruit.indexOf("orange");
console.log(ind3);

// Add that number to the end of the fruit array.
fruit.push(ind3);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Use the length property to find the length of the vegetable array. Log that to the console.
var vegLen = vegetables.length;
console.log(vegLen);

// Add that number to the end of the vegetable array.
vegetables.push(vegLen);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log("food: ", food);

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2)
console.log("food: ", food);

// Reverse your array.
food.reverse()
console.log("food: ", food);

// Log your array as a string to the console.
console.log("food: ", food);

