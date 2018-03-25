// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.
// Game start:
// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door
// They can't open the door unless they find the key first. 
// They die if they put their hand in the hole.

var rs = require("readline-sync");
function playTheGame() {  
    var name = rs.question("Welcome to the escape room!\n I hope you enjoy your time here with us and remeber 1 thing....\n NO ONE CAN HEAR YOU SCREAM!!!!!!!\nThese walls were built to hold the loudest cases of fear!\n No one has ever been able to escape this chamber before.\n What is your name new prisoner? ");
    console.log("Well then " + name.toUpperCase() + " let us begin the dreaded challenge,\n we are happy to have you.")
    var options = ["Put head in hole ", "Find the key ", "Open the door"];
    var choice = rs.keyInSelect(options, "You have three options to choose from.\n Your choice will determine your future.\n And remember,\n nothing is as it seems.\n Choose wisely!");
    var result = "";
    var conPlay = true;

    // our entire game is contained within one function, started off with the variable name to get the players name and console log a greeting with background story. var choice prompts our player of their three options to choose from refering back to the var options to spell those out specifically. rs.keyInSelct turns those options into keyboard funtions of one,two, and three in their respected order of apperance in the var options. We then move into our while loop, which conditional is the var conPlay. Var conPlay is set to the boolean true. ("I am tired I will finish this lesson later...zzzz")
    while(conPlay) {
        switch (choice) {
            case 0:
                console.log("Wrong answer, your head just got chopped off by a booby trapped swinging axe!!!!!TOO BAD!GAME OVER!");
                conPlay = false;
                break;
            case 1:
                result = "2";
                choice = rs.keyInSelect(options,"You've found the key! Making progress I see! What is your next plan of action?");
                conPlay = true;
                break;
            case 2:
                if (result === "2") {
                    conPlay = false;
                    console.log("THE DOOR!! YOU HAVE FOUND THE DOOR!!YOU ARE FREE NOW FREE TO ROAM!!!!GAME OVER!")
                    break;
                } else {
                choice = rs.keyInSelect(options,"This door is unfortunately locked.\n What is your next choice?");
                }
                conPlay = true;
                break;
        }

    }
};

playTheGame();

