var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

// Remove the last item from the vegetable array.
var removeLast = vegetables.pop();
console.log(vegetables);
// Remove the first item from the fruit array.
var reomveFirst = fruit.shift();
console.log(fruit);
// Find the index of "orange."
var findIn = fruit.indexOf("orange");
console.log(findIn);
// Add that number to the end of the fruit array.
fruit.push(1);
console.log(fruit);


// Use the length property to find the length of the vegetable array. Log that to the console.
console.log(vegetables.length);
// Add that number to the end of the vegetable array.
vegetables.push(3);
console.log(vegetables);
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food);
// Remove 2 elements from your new array starting at index 4 with one method.
var removed2 = food.splice(4,2);
console.log(food);
// Reverse your array.
console.log(food.reverse());

// Log your array as a string to the console.
console.log(food.join());
// If you've done everything correctly, the last step should print the following to the console

// 3,pepper,1,watermelon,orange,apple