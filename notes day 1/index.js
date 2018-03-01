console.log(window)

var myFavNum = 29;
// string
var favoriteFood = "Pad Thai";
// booleans
true
false

// array
var febClass = ["matt", "matt", "shafiq", "morgan"]

// literal values shown below
var matt = {
    name: "matt",
    birthday: "Jan 15",
    height: 6,
    hobbies: ["sleeping", "coding", "spinning",]
    pets: [{
        name: "max",
        type: "dog",
        age: 3
    }]
}
console.log(matt.pets[1].name)

// Operators

// ARITHMATIC
// +-*/%
// COMPARISON OPERATORS
// <><=>= === ==
// LOGICAL OPERATORS
// && ||

// FUNCTIONS
function unnamedFunc(){};
// defining

var printName = function(){
    // executable code goes here
    console.log("Ben");
    // return statement
    return "Ben";
};
// referencing
printName;
// executing(being called)
printName();
// function example

var bakePie = function (recipe) {
    var pie = followRecipe(recipe);
    return pie;
}

var thanksgivingDesert = bakePie(pierecipe);



