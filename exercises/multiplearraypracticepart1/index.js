// Return a list of everyone older than 18 sorted alphabetically by last name
var data = ([  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{ 
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]);
// to call a callback function it will always return a boolean datatype
function isOldEnough(person){
    return person.age >= 18;
}
function byAlpha(person1, person2){
    var ln1 = person1.lastname;
    var ln2 = person2.lastname;
    return ln1.localeCompare(ln2);
    // return age2 -age1;(then delete above line??)
}
// sort method compare two items and return a negitive number a positive number or a zero.
function sortedOfAge(arr){
    return arr.filter(isOldEnough).sort()
}

console.log(sortedOfAge(data));

// Using the same array from the problem above, return a sorted list, youngest to oldest, of People in <li>s


// transform eachn number in the sorted array into a <li> string.
function byAge(person1, person2){
    var age1 = person1.age;
    var age2 = person2.age;
    return age2 - age1;
    // you can reverse the line above to switch your order of things
}

function toLi(person){
    return "<li>" + person.firstName + " " + person.lastName + "is" + person.age + "<li>";
}

// arrange by age first using sort

function ageSortLi(arr){
    return arr.sort(byAge).map(toLi);
}

console.log(ageSortLi(data));










    // var i = sortedOfAge.filter;
//     if(sortedOfAge.age >= 18) {
//         return i; 
//     } else {
//         console.log("Not Old Enough!!");
//     }
    
// }
// console.log(sortedOfAge(data));

// filter out the objects with age property >= 18
// sort the result by last name alphebetically 

// var aleteen = function(sortedOfAge) {
//     var i = sortedOfAge[name].filter;
//     if(sortedOfAge.age >= 18) {
//         return i; 
//     } else {
//         console.log("Not Old Enough!!");
//     }
// }
// console.log(aleteen());


// function aleteen(num) {
//     sortedOfAge.filter
//         return num > 2;
//     }).sort()
// }


// Using the same array from the problem above, return a sorted list, youngest to oldest, of People in <li>s