NODE PROJECT MANAGER-NPM:

* Node lets us run our .js files outside of our browser and inside our terminal.
* Configuration file that will understand what I want it to do, when I input commands.
* You can publich packages with this.
* really streamline to use this package as a huge shortcut.
* You will want to install NPM on every computer that you get.
* Uses the terminal to interact with the user.
* Confined within our own computer.
* Object that I can interface with in JavaScript files.
* Many methods are built into readline-sync.
* 

<!-- DEFINE: NPM CALLED LEFT PAD?????RESEARCH -->
<!-- DEFINE: reline sink?? please research to learn term -->
<!-- DEFINE: NPM CALLED LEFT PAD?????RESEARCH -->
<!-- open source provide a simple interface??? please reasearch to learn term -->

HOW TO SET UP THE NODE APP:

1. from terminal window: npm init -y

2. then the terminal says: package.json{}?
 which creates your package.json

3. To install node modules type into terminal: 

npm install --save readline-sync

4. Node module folder created and called node modules.
<!-- node modules are the files filled with code examples that random people wrote,  -->

5. To acces the node modules files from your JAVASCRIPT FILE type in:

var readlineSync = require("readline-sync");

<!-- require is a built in method from node -->



 <!-- configuration file that will understand what i want it to do when i tell it commands -->
 0. WHAT WE DID

 1. npm install --save readline-sync(name of file)
 <!-- hit enter -->

 2. IMPORT IT

 3. USE IT

 

 <!-- input this fuction inside your js


 

 purpose????????

 


 publish a package:

 uploads your code to npm to store and then for next time you wont have to rewrite everything..and then it will also be avalible for others to acces of of NPM..


 



 
 DEFINE: RPG GAMES: WHICH IS ENTIRELY IN THE TERMINAL

 
 USEFUL FOR:
    GAMES
    ACCESING READLINE-SYNC LIBRARY
    PROMPT A USER IN TERMINAL USE READLINE-SYNC


readline-sync 3 most common methods used:

question = METHOD IS USED TO PROMPT USER
keyInSelect = METHOD IS USED TO select from an array
keyInYN = METHOD IS USED TO

Reference to remember: npmjs.com



    










 


 

 
 v


var rs = require("redline-sync");


i am importing an interface, an object is the perfect way to do that.

so this importss a module which is an interface which is an object....which has a lot of different properties that  we can tailor to our request.



------------------------here down------------------------
var rs = require("readline-sync)

please refernece readline sync page


prompts:
1. get one number
2. Use the: var num1 = readLineSync.question("pick an integer")
3. get another number
4. Use the: var num2 = readLineSync.question("pick another integer")
5. choose operation
6. var operations = ["+", "-", "*", "/"];
var index = readLineSync.keyInSelect(operations, "Choose the operation you wish to perform");

chooser function:
1. selects which arithmitic function to perform, and calls it using numbers as arguments.

arithmitic funtion:
1.add
2.subtract
3.multiply
4.divide








