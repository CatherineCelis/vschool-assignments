function eat(){
    console.log("food");
}
eat()

function eat(thisisredundant){
    console.log(thisisredundant);
}

eat("gucamole");
eat("shoes");

// TO CAPITALIZE THE FIRST LETTER IN A STRING

function capitalize(str){
    if(str.length) str = str[0].toUpperCase() + str.substr(1);
    return str;
}
console.log(capitalize("pinneapple"));

function add(num1,num2){
    return num1 + num2;
}
console.log(add("blue", "green"));
// var total = add(3,5);

function add(shit,stank){
    return shit + stank;
}
console.log(add("necro", "pile"));

var pit = [1,2,3,4,5,6,7];
var eight = 8;
var neck = " plus a blasted one " + eight;
function add(shit,stank){
    return shit + stank;
}
console.log(add(pit, neck));

function coolBeans(){
    console.log(coolBeans);
    return b;
}
var b = coolBeans();

function bison(){
    return "Buffalo";
}
var result = bison();
console.log(result);

// -------Recursion--factorial-----------

function factorial(clownshoes) {
    if(clownshoes === 0) return 1;
    return clownshoes * factorial(clownshoes-1);
}
console.log(factorial(6));
// call factorial1()  
//   call factorial2()
//     call factorial3()
//     return factorial3()
//   return factorial2()
// return factorial1()


// function global(){
//     return global();
// }  
// function daft(){
//     // return local();
// }

// function main(){
//     function local(){
//         // return local();
//     }
//     console.log("main says: " + global() + "," + local() + "," + daft());
// }

// main();




function notBroken(a,b){
    var add = a + b;
    return add;
}

console.log(add(2,3));



