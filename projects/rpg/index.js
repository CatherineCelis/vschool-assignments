var readline = require("readline-sync");
// Console must greet player with a fun message
// Console must ask for the player's name and store it
startHunting();

function startHunting() {

    var playerName = readline.question("Welcome to Under Water Pirates Sea Adventure!\n What is your name mate?\n \n \n");

    console.log("Well " + playerName.toUpperCase() + " lucky for you it seems you've gotten a second chance!\n Those pirates up above must have made you walk the plank this morning,\n I came along and found you almost out of air and decided to enter you into\nThe Merpeoples Sea Adventure Challenge!\n \nYou see mate,\n this is your chance to get back up to the surface and start a new,\n but only if you succeed.\n \nIn this challenge you have to swim around looking for sea monsters to banish.\nYou see us merpeople are those sea monsters favorite snack.\n When you encounter a sea monster you can choose to either\n fight like a shark, or run away like a shrimp.\n \n You must kill three sea monsters in order to win this challenge. \nThe game is over if you run out of your alloted 100 hitpoints before your task is complete. \n \nHAPPY HUNTING " + playerName.toUpperCase() + " !\n\n\n");

    var player = {
        name: playerName,
        hp: 100,
        inventory: []
    }
    
    var enemiesKilled = 0;
    
    var enemy = [{
           name: "Ancient Blue Sea Dragon",
           value: 10,
           inventory: ["Blue Saphire Chain Linked Armor"]
       },
       {
           name: "Red Devil Squid",
           value: 20,
           inventory: ["Red Diamond Machete"]
       },
       {
           name: "Bloody Lantern Fish",
           value: 30,
           inventory: ["Glowing Gold Sheild"]
       }
    ]
    
    var enemyIs;
    walking();
    function walking(){
    var playerTask = readline.keyIn(" To begin water walking in search of sea monsters press 'w'.\n To print your player stats press 'p'.\n \n ");
    if(playerTask === "w"){
        console.log("Here Monsters, Monsters, Monsters.....Come out Come out where ever you are.....\n\n")
        // function randomAttck();
        randomAttack();
    }else if(playerTask === "p"){
        // print stats
        console.log(player);
        walking();
    }else{
        console.log("You can't float here all day. Let's find those monsters!");
        walking();
        } 
    }
// when walk option is selected call the function that will determine if the player gets attacked
    //1 in 4 chance of being attacked
    // // run algorithm to see if a monster appears.
    function randomAttack() {
        // the below algorithm works just fine
        var ranChance = Math.floor(Math.random()* 100);
        if(ranChance > 50 && ranChance <= 75){
// create a function that chooses a random enemy from the enemy array
            console.log("A sea monster has jumped out of the Blue!!It will try to attack you!\n \n ");
            genRandEnemy();
            // what do i write here in order to print enemythat appears to the console?????
        }else{
            console.log("I don't see any monsters here, let's keep on swimming around until we kill them all.\n\n")
            walking();
        }
    }

    function genRandEnemy() {
        //create empty variable that will store the result of the random pick
        //set the empty variable to the enemies name based on a specific conditions
        // can we just return a random enemy out of the enemy array of objects?
        var ranNum = Math.floor(Math.random() * 20);
        if (ranNum <= 5) {
            enemyIs = enemy[0].name
            console.log("The " + enemyIs + " has appeared!It is worth 10 points and carrys Blue Saphire Chain Linked Armor!!!! ");
            fightOrRun();
        } else if (ranNum > 5 && ranNum <= 10) {
            enemyIs = enemy[1].name;
            console.log("The " + enemyIs + " has appeared!It is worth 20 points and carrys a Red Diamond Machete!!!! ");
            fightOrRun();
        } else if (ranNum > 10 && ranNum <= 20) {
            enemyIs = enemy[2].name;
            console.log("The " + enemyIs + " has appeared!It is worth 30 points and carrys a Glowing Gold Sheild!!!! ");
            fightOrRun();
        }
    }

    //set the player choices available for when an enemy does decide to attack
    //create a variable set to an ask.keyInSelect(might have to set as an integer) to pick which action they' like 
    //set conditions for each choice and provide a new message for each that calls a function reflecting the players decision
    function fightOrRun() {
        var choices = ["Run", "Fight"];
        var askPlayer = parseInt(readline.keyInSelect(choices, "Do you want to fight like a shark or run like a shrimp???\nThe next monster might be scarier.\n \n What are you going to do? Press 1 to run...Press 2 to fight."));
        if (choices === 1) {
            //call the function for deciding to run        
            run();
        } else {
            //call the function for deciding to fight
            console.log('You decided to fight, bring it on!!.');
            fight();
        }
    }
    
    //set random number variable to a 50/50 chance of dying for deciding to run
    function run() {
        var numPicked;
        var randNum = Math.floor(Math.random() * 2);
        numPicked = randNum;
        //create conditions that need to be met for player to continue playing
        //deduct a set number of players hp to be subtracted upon choosing to run
        // call beginning function again
        if (numPicked === 2 && player.hp > 0) {
            player.hp -= 20;
            console.log("You used up 20 hp running away into the shadows. You have only " + player.hp + " hp remaining!!!!!");
            walking();
        } else {
            //set players hp to 0 and provide GAME OVER message
            player.hp = 0;
            console.log("You wern't quick enough and got eaten by the sea monster!Game Over.!!!!!!");
        }
    }
    //create an attack/fight function that gives player a 50/50 chance of winning
    //create conditions for the results 
    //if player wins call the winning function
    //if player loses  set player hp to 0, and create a GAMEOVER message
    function fight() {
        var whoWins;
        var winningNum = Math.floor(Math.random() * 2);
        whoWins = winningNum;
        if (whoWins === 1 && player.hp > 0) {
            console.log("You killed the sea monster!!")
            youWon();
            getItem();
        } else {
            player.hp = 0;
            console.log("ohh no!It was a good fight but not good enough.YOU GOT EATEN! Game Over.");
        }
    }

    //set a variable called winner to equal true
    //deduct 30 player hp for fighting
    //add one to the players enemiesKilled count
    //call function that puts the enemies inventory item into players empty array for winning
    function youWon() {
        var winner = true;
        player.hp -= 30;
        enemiesKilled++;
        getItem();
        //check to see if the  total amount of enemies to be killed(4) has been met
        //if so display a winning message and set the players hp to equal zero to stop the while loop and end game
        if (player.hp > 0 && enemiesKilled >= 4) {
            console.log("You Won! Now the Merpeople will have less enemies to swallow them whole");
            player.hp = 0;
            // getItem();
        } else {
            //if total amount of enemies hasnt been met call the beginning function again.
            if (player.hp > 0 && winner === true) {
                console.log("You are alive and lucky at that");
                getItem();
            }
        }
        //create a function that checks is player is the winner and players hp are more than 0
        // if conditions are met push the item in the losing enemies inventory to the players empty array
        function getItem() {
            if (player.hp > 0 && enemyIs === enemy[0]) {
                player.inventory.push(enemy[0].inventory++);
                console.log("That monster must have dropped this Blue Saphire Chain Linked Armor, it's yours now!");
                walking();
            } else if (player.hp > 0 && enemyIs === enemy[1]) {
                player.inventory.push(enemy[1].inventory++);
                console.log("That monster must have dropped this Red Diamond Machete, it's yours now!");
                walking();
            } else if (player.hp > 0 && enemyIs === enemy[2]) {
                player.inventory.push(enemy[2].inventory++);
                console.log("That monster must have dropped this Glowing Gold Sheild, it's yours now!")
                walking();
            } else {
                walking();
            }
        }

        while(player.hp > 0 && player.enemiesKilled < 3){
            startHunting();
        }
    } 
}

    // function genRandEnemy(){
    //     var rand = Math.floor(Math.random() * enemy.length);
    // return enemy[rand];
    // }

    // var Enemy = function(){
    //         this.type = randEnemy();
    //         this.damage = this.genDamage();
    //         this.enemyItem = this.genEnemyItem();
    //     }
// random enemy fuction to choose a random one out of an array of enemies.
    // function randEnemy(){
    //     var enemyTypes = ["Ancient Blue Sea Dragon", "Red Devil Squid",
    // "Bloody Lantern Fish"];
    //     var randomEnemyIndex = Math.floor(Math.random()* enemyTypes.length)
    //     return enemyTypes[randomEnemyIndex];
    // }

    // "Red Devil Squid":
    //             return "Red Diamond Machete";
    //             break;
    //         case "Bloody Lantern Fish":
    //             return "Glowing Gold Sheild"
    //             breakEnemy.prototype.genDamage = function(){
    //         switch(this.type){
    //             case "Ancient Blue Sea Dragon":
    //                 return Math.floor(Math.random()* 2) + 80;
    //                 break;
    //             case "Red Devil Squid":
    //                 return Math.floor(Math.random()* 3) + 50;
    //                 break;
    //             case "Bloody Lantern Fish":
    //                 return Math.floor(Math.random()* 4) + 20;
    //                 break;
    //         }
    //     }
    // Enemy.prototype.genEnemyItem = function(){
    //     switch(this.type){
    //         case "Ancient Blue Sea Dragon":
    //             return "Blue Saphire Chainlink Armor";
    //             break;
    //         case ;
    //     }
    // }











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





