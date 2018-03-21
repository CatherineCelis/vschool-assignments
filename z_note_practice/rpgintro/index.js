console.log("Welcome to my game");
var playerName = rs.question("What is your name?");
// ask yourself what is the win con and what is the loose con
// while loop continues as long as my hp is greater than one, or my wincon + loose con is not meet.

// we have a player and we have enemies
// do all configurations up here first
// define functions etc.
// the game while loop itself is not really going to be that long

var player = {
    name: playerName,
    hp: 100,
    attack: undefined
    enemiesKilled = 0
}

var Enemy = function() {
    this.attack: Math.floor(Math.random()* 20)+ 10;
    this.hp = 50;
    // etc etc
}
// our game loop is below
while(player.hp > 0 && player.enemiesKilled < 3){

}

if(your less than 0)
    console.log("Sorry you are dead, go away.")