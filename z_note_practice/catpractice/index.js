// Loop through the following array, and log to the console 
// "hooray" for every party there is.

// var eventsAtWork = ["work", "pretend to work", 
// "party", "work", "meeting",
//  "party", "daily grind", "work", "party"]  

//  for (var i=0; i < eventsAtWork.length; i++) {
//      if (eventsAtWork[i] === "party") {
//          console.log("horray");
//      }
//  }

// Loop through the following array, 
// and count how many "trues" there are.


// var booleans = 
// [true, true, false, true, false, false, false]


// function countItemsTrue() {
//     var count = 0;
//     for (var i = 0; i < booleans.length; i++) {
//         if (booleans[i] === true) {
//             count++
//         } if (booleans[i] === false) {
//             count++
//         }
        
//    }
//    return count;

// }
// console.log(countItemsTrue(false));



// Add an isAdmin property to each of the users in this array.

// var users = [  
//   {
//     name: "Sophie",
//     age: 12
//   },
//   {
//     name: "Larry",
//     age: 32
//   },
//   {
//     name: "Cathy",
//     age: 40
//   }
// ]

// function addAdminProp() {
//   for (var i = 0; i < users.length; i++) {
//       users[i].isAdmin=false;
//   }
// }
// addAdminProp();
// console.log(users);

// users.isAdmin = ["null"];
// console.log(users);


// function addAdminProp() {
//     for (var i = 0; i < users.length; i++) {
//         var add = users.length + "isAdmin";
//         return add;
//     }
//     return add;
// }

// console.log(addAdminProp)








// functions in class review
// a function is a stored procedure
// two parts:
//     1) definition
//         define all the necessary steps and ingredients
//     2) execution
//         perform the procedure when called decodeURIComponent


// var person = {  
//   fullName: 'Tommy Boy',
//   age: 26,
//   weight: 306,
//   friends: ['Richard', 'Michelle']
//  };

//  console.log(person.age);  
// console.log(person['age']); 


// var person = {name: 'Frodo', age: 33};  
// var newPerson = person;

// newPerson.name = 'Sam';

// console.log(person.name);  
// console.log(newPerson.name);

// var person = {  
//   name: 'The Joker',
//   type: 'evil',
//   enemy: 'Batman',
//   speak: function () {
//       console.log('Why so serious?');
//   }
// };

// console.log(person.speak);
// person.speak();

// var person = {  
//   name: 'The Joker',
//   type: 'evil',
//   enemy: 'Batman',
//   speak: function () {
//       console.log('My name is ' + this.name);
//       console.log('I am ' + this.type + ' and my enemy is ' + this.enemy);
//   }
// };

// person.speak();




// var person = {  
//   name: 'Harry',
//   age: 11,
//   birthday: function () {
//       this.age++;
//   }
// };

// console.log(person.age);  
// person.birthday(); 
// console.log(person.age);

function Car(myModel, myMake, myColor, myYear) {  
  this.model = myModel;
  this.make = myMake;
  this.color = myColor;
  this.year = myYear;
};

var car1 = new Car('Camry', 'Toyota', 'Silver', 2003);  
var car2 = new Car('Model S', 'Tesla', 'Black', 2018);

Car();

// console.log(car1.make);    
// console.log(car2.make);    



