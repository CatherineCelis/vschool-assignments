var sncBlu = "Sonic the head chog was a bright blue ball of fire who's radiance spanned the universe, sweeping over the untouched abyss's and shady fortresses of the under world, leaving behind a magical blue sparkly shimmer dust!!!!";

// .indexOf()

var red = function(){
    var useMethodHere = sncBlu.indexOf("s");
    return useMethodHere;
}
console.log(red(sncBlu));

// .toUpperCase()
// .substr()


function capitalize(str){
    if(str.length) str = str[5].toUpperCase() + str.substr(6);
    return str;
}
console.log(capitalize("pinneapple"));


// .concat()

function makeTogether(){
    var bird = "cardinal";
    var cat = " wiskers";   
    var met = bird.concat(cat);
    return met;
}

console.log(makeTogether());


// .slice()
// .toLowerCase()

var low = function(str){
    if(str.length) str = str.toLowerCase() + str.slice("b");
    return str;
}

console.log(low("BCHAJGCUAGUCVAVJAbbbBVRHIGHRGIJRB"));


// .replace()

var orange = function(str){
    return str.replace(/b/gi, "%");
}
console.log(orange(sncBlu));


// .match()

var purple = function(str){
    return str.match(/b.u/g);
}
console.log(purple(sncBlu));


// .split()

var green = function(str) {
    return str.split("");
}
console.log(green(sncBlu));



