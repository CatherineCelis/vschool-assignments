var shopper = {
    firstName: "Linda",
    lastName: "Snider",
    age: 54,
    hairColorBlonde: true,
    groceryCart: ["Milk", "Bananas", "Soda", "Vodka",],
    concat: function() {
        var a = shopper.firstName + " " + shopper.lastName;
        return a; 
    }
}

console.log(shopper.concat());
