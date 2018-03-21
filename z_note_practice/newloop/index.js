var favoriteThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woollen mittens"]

for(var i = 0; i < favoriteThings.length;i++) 
console.log(favoriteThings[i]);

var likesRaisins = prompt("Do you like raisins? Type 'yes' or 'no':");

while(likesRaisins !== "yes" || likesRaisins !== "no"){  
    likesRaisins = prompt("Please only type 'yes' or 'no'. Do you like raisins?");
}

console.log("You said '" + likesRaisins + "' to my question.")  

for(var i = 0; i < arr.length; i++) {  
    if (arr[i] === true) {
        console.log("We found a true!");
        break;
    }
}

for (var i = 0; i <= 10; i++) {  
    if (i === 7) {
        continue;
    }
    console.log(i);
}