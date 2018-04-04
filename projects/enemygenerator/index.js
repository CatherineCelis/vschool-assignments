var rs = require("readline-sync");

// let playGame = function(){
    console.log('Welcome to Under Water Pirates Sea Adventure!!!!');
    let playerName = rs.question('What is your name mate?');
    console.log("Well" + playerName.toUpperCase() + "lucky for you it seems you've gotten a second chance!\n Those pirates up above must have made you walk the plank this morning,\n I came along and found you almost out of air\n and decided to enter you into\nthe merpeoples sea adventure challenge! \nYou see mate,\n this is your chance to get back up to the surface and start a new,\n but only if you succeed. \nIn this challenge you have to swim around looking for sea monsters to banish.\nYou see us merpeople are those sea monsters favorite snack.\n When you encounter a sea monster you can choose to either\n fight like a shark,\n or \nswim away like a shrimp.\n You must kill three sea monsters in order to win this challenge. \nThe game is over if you run out\n of your alloted 100 hitpoints before your task is complete. \nHappy Hunting" + playerName.toUpperCase() + "\n\n\n");


    // let playerStats = {
    //     name: playerName,
    //     hp: 500,
    //     enemiesKilled: 0,
    //     inventory: []
    // }

    // while(playerStats.hp > 0 && playerStats.enemiesKilled < 3) {
    //     let playerSwimOrChill  = rs.keyIn("Enter ('s') on your keyboard to start swimming or ('i') to view your current player stats: ");
    //     if(playerSwimOrChill === "s"){
    //         if(Math.floor(Math.random()* 200) > 150) {
    //             let newEnemy = new Enemy;
    //             console.log("What a quiet part of the ocean.....\nOh wait I spoke too soon, an enemy has appeared!!!!\n Name: " + newEnemy.type + ", \n ")

                // new variable we must use to define elsewhere in our code then provide a call back function named  sharkOrShrimp 


                // let chooseNextMove  = rs.question("\n Do you choose to fight like a shark ('f'), or run like a shrimp ('r') ?");


                // depending on what they choose, sharkOrShrimp function will define the fight or run parameters
                // we need to create this function elsewhere


//                 sharkShrimpPrint(chooseNextMove);
//             }
//         }else if (playerSwimOrChill === "i"){
//             // print currrent player data
//             sharkShrimpStats("i");
//         }else{
//             console.log("You can't float here all day.\n Please choose ('s') to swim or ('i') to view current player stats.");
//         }   
//     }
// }


 
// Console must ask for the player's name and store it



// Walking: 
// The console will ask the user to enter a "w" to walk

// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

// If a wild enemy appears: 
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, you will choose a random attack power between a min and max
// If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// If the enemy kills the player the console prints an cool death message and the game ends
// Inventory 
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory

// var keepPlaying = true;


// var Enemy = function(){
//     this.type = getRandomType();
//     this.hitPoints = this.genHitPoints();
//     this.defense = this.hitPoints * 3;
// }
    
// function getRandomType(){
//     var enemyTypes = ["Ancient Blue Sea Dragon", "Red Devil Squid", "Bloody Lantern Fish"];
//     var randomIndex = Math.floor(Math.random() * enemyTypes.length)
//     return enemyTypes[randomIndex];
// }
// we must randomly select a type from the list of three.

// Enemy.prototype.genHitPoints = function () {


    // console.log(this.type);


//     switch(this.type){
//         case "Ancient Blue Sea Dragon":
//             return Math.floor(Math.random() * 21) + 80;
//         case "Red Devil Squid":
//             return Math.floor(Math.random() * 30) + 50;
//         case "Bloody Lantern Fish":
//             return Math.floor(Math.random() * 30) + 20;
//     }
// }


// function printEnemies(){
//     var output = [];
//     for(var i = 0; i < 100; i++) {
//         console.log(new Enemy());
//     }
// }

// we could literally make 100 objects

// write a construtor function which makes an object with 3 properties:
// type, hitpoints, defense.

