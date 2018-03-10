// 
var ask = require("readline-sync")

var plaYTheGAME = function( {
   var playerName = ask.question("Hey whats your name?");
    console.log("Thanks" + playerName + "It is so nice to meet you")
    if (playerName === "Ben") {
        console.log("go away ben");
        keepPlaying = false
    }

}


while (true) {
    // do the thing
    playTheGame();
}