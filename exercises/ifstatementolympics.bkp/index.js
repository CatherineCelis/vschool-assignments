// var animals = ["cat", "dog", "goldfish", "alligator"]

// for (var i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }
// supposed to console.log("horray") everytime the loop hits party in the array.
var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]  
for (var i = 0; i < eventsAtWork.length; i++) {
    if (i === "party") {
    console.log(eventsAtWork.indexOf("party"));
    }
}
