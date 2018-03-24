var shopper = {
    firstName: "Linda",
    lastName: "Snider",
    age: 54,
    hairColorBlonde: true,
    groceryCart: ["Milk", "Bananas", "Soda", "Vodka",],
    concat: function() {
        return shopper.firstName + " " + shopper.lastName; 
    }
}

console.log(shopper.concat());
