var readline = require("readline-sync");
// Console must greet player with a fun message
// Console must ask for the player's name and store it
var playerName = readline.question("Welcome to The Under Water Pirates Sea Adventure!\n What is your name mate?\n \n \n");

console.log("Well " + playerName.toUpperCase() + " lucky for you it seems you've gotten a second chance!\n Those pirates up above must have made you walk the plank this morning,\n I came along and found you almost out of air and decided to enter you into\nThe Merpeoples Sea Adventure Challenge!\n \nYou see mate,\n this is your chance to get back up to the surface and start a new,\n but only if you succeed.\n \nIn this challenge you have to swim around looking for sea monsters to banish.\nYou see us merpeople are those sea monsters favorite snack.\n When you encounter a sea monster you can choose to either\n fight like a shark, or run away like a shrimp.\n \n You must kill three sea monsters in order to win this challenge. \nThe game is over if you run out of your alloted 100 hitpoints before your task is complete. \n \nHAPPY HUNTING " + playerName.toUpperCase() + " !\n\n\n");

var player = {
    name: playerName,
    hitPoints: 100,
    enemiesKilled: 0,
    inventory: []
}


// enemy functions
// we need a constructor enemy function to generate a new enemy each time that we run into an enemy
// 



// Enemy.prototype.genDamage = function(){
//     switch(this.type){
//         case "Ancient Blue Sea Dragon":
//             return Math.floor(Math.random()* 2) + 80;
//             break;
//         case "Red Devil Squid":
//             return Math.floor(Math.random()* 3) + 50;
//             break;
//         case "Bloody Lantern Fish":
//             return Math.floor(Math.random()* 4) + 20;
        
//     }
// }

startHunting();

function startHunting() {
    var playerTask = readline.keyIn(" To begin water walking to search for sea monsters press 'w'.\n To print your player stats press 'p'.\n \n ");
    if(playerTask === "w"){
        console.log("Here Monsters, Monsters, Monsters.....Come out Come out where ever you are.....")
        // function randomAttck();
        randomAttack();
    }else if(playerTask === "p"){
        // print stats
        console.log(player);
    }else{
        console.log("You can't float here all day. Let's find those monsters!");
        startHunting();
        } 
// when walk option is selected call the function that will determine if the player gets attacked
    //make it chance a player gets attacked when walking a 1 in 4 chance
    //if random number picked is 3 call the function for choosing a random enemy
    // // run algorithm to see if a monster appears.
    function randomAttack() {
        var ranChance = Math.floor(Math.random()* 100);
        if(ranChance > 50 && ranChance <= 75){
// create a function that chooses a random enemy from the enemy array
            console.log("A sea monster has jumped out of the Blue!!It will try to attack you!\n \n ");
            randEnemy();
        }else{
            console.log("I don't see any monsters here, let's keep on swimming around until we kill them all.\n\n")
            startHunting();
        }
    }

    var Enemy = function(){
            this.type = randEnemy();
            this.damage = this.genDamage();
            this.enemyItem = this.genEnemyItem();
        }

    function randEnemy(){
        var enemyTypes = ["Ancient Blue Sea Dragon", "Red Devil Squid",
    "Bloody Lantern Fish"];
        var randomEnemyIndex = Math.floor(Math.random()* enemyTypes.length)
        return enemyTypes[randomEnemyIndex];
    }
    
    
        
        while(player.hitPoints > 0 && player.enemiesKilled < 3){
            startHunting();
        }
    } 









// function beginHunt() {
//     while(player.hitPoints > 0 && player.enemiesKilled < 3){
//         var playerTask = readline.keyIn(" To begin water walking to search for sea monsters press 'w'.\n To print your player stats press 'p'.\n \n ");
//             if(playerTask === "w"){
//             // run algorithym to see if a monster appears
//                 if(Math.floor(Math.random()* 100) > 75){
//                     // link to a function to make a random enemy appear in the console
//                     console.log("A sea monster has jumped out of the Blue!!It will try to attack you!\n \n ");
//                     var enemyAppear = new Enemy;
//                     enemyAppear;
//                     var runOrFight = readline.keyIn("Do you want to fight like a shark or run like a shrimp???\nThe next monster might be scarier.\n \n Press 'f' to fight or 'r' to run.");
//                         if(runOrFight === "f"){
//                             playerFight();
//                         }else if(runOrFight === "r"){
//                             playerRun();
//                         }
//                 }else{
//                     console.log("I don't see anything here, let's look somewhere else!\n \n");
//                 }    
//             }else if(playerTask === "p"){
//                 // print playerstats to the console
//                 console.log(player);
//             }
//     }

// }





