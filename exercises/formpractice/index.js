// do something with thew data that we have collected from the form with an object
// these are the form input elements
// we can ask 
var nameInput = document.getElementById("firstName");
var form = document.getElementById("submit");
var pollenBox = document.getElementById("pollen");
var wheatBox = document.getElementById("wheat");
var peanutBox = document.getElementById("peanuts");
// askk heaven what she was talking about putting it in a box


// this is just an object to store user input data
// we define it as what is meaning full to us as humans
var data = {
    firstName: "",
    alergies: []
}

// these event listeners, simply track the user activity and add the data to the appropriate part of the data object. (as the user is literally in putting their data)
nameInput.addEventListener("input", function (event) {
    data.firstName = event.target.value; 
    // above line explains that as the data is being typed the fuction is being run
    // console.log(data);to check if what we wrote so far is working correctly 

});

// so when a certain allergy is checkmarked it  should be added to AN ARRAY, WHEN IT IS NOT CHECKED IT IS OUT OF THE ARRAY

function setAllergy(event){
    // user clicks on check box
    // if checked add to the array
    console.log(event.target.checked);
    // if not checked , remove from the array
    // checked is the name of the event we are waiting for
    // target is the element of which the event occcurs??
    console.log(event.target.name);    
    if (event.target.checked){
        data.allergies.push(event.target.name);
    } else {
        // if the box is not checked, remove from array
        // find where the string is
        var index = data.allergies.indexOf(event.target.name)
        // splice the string out of the array from the index

        data.allergies.splice(index, 1);

    } 
    console.log(data.alergies);   
}        // name is refering to the input tags property name.
        // will console log what is checked in the boxes


pollenBox.addEventListener("change", setAllergy) 
wheatBox.addEventListener("change", setAllergy)
peanutBox.addEventListener("change", setAllergy)
// 




// send of the information now that it has been collected
form.addEventListener("submit", function(){
    alert("First Name: " + data.firstName + "\n" + 
    data.allergies.join(", "));
});





// input is the event that gets triggered when it detects a change in the values
