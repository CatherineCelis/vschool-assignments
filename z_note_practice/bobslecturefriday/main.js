// library for making http requests
// we will intall most packages per project, because projects are always getting updates.
// var axios = require("axios");
// var people;
axios.get("https://swapi.co/api/people").then(function(response) {
    var todoList = document.getElement('todos');
    todoList.innnerHTML += "li" 
    // people = response.data;
    // console.log(response).data;
});

// while(people)

// for(var i = 0; i < 10; i++) {
//     console.log()
// }