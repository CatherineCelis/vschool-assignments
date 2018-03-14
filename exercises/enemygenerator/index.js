// we cpould literally make 100 objects

// write a construtor function which makes an object withh 3 properties:
// type, hitpoints, defense.


var Enemy = function(){
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}
    
function getRandomType(){
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randomIndex = Math.floor(Math.random() * enemyTypes.length)
    return enemyTypes[randomIndex];
}
// we must randomly select a type from the list of three.

Enemy.prototype.genHitPoints = function () {
    // console.log(this.type);
    switch(this.type){
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Prowler":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}



var enemy = new Enemy();
console.log(enemy);

// function printEnemies(){
//     var output = [];
//     for(var i = 0; i < 100; i++) {
//         console.log(new Enemy());
//     }
// }


    
   