// document( represents the whole html
// console.dir(document);
// method-function that is part of an object: getElementById
// there is also a getElemenyByTag
// document is an object below
var headers = document.getElementById("hi")
console.dir(headers[0]);

// dir is so that you can pull up you log in dev tools for teaching purposes

// id,class,style are attributes

// event.target research: we will use this more in React in the near future.
// define mean dev..-
event.preventDefault

// event.which to use in djjs for the switch colors?

// jquery

// calling event listeners

// you have to declare the function before calling it

var button = document.getElementById("button");
// function below means unanomous 
// <button id=


button.addEventListener("click"), function(event) {  
    console.log("button was clicked");
});

document.getElementById("button".addEventListener("click", function() {

};

// study event.which for djjs


// addEventListener is only for the user interaction

// inner html and textContent

// textContent-yu can grab the textContext of an element with this


// study compiler concepts



// CSS POSITIONING

{/* <form id="travel-form">
    <input name="firstname" type="text" placeholder="first name">
    <button>submit</button> = submit button
    <input type="submit" */}




var formElement = document.getElementById("travel-form");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    // insert variables of input data here within the function because we don't have any value yet until the user enters something.
    alert('firstname' + firstName + "/nlastname:" + lastname)
    // the backslash must be inside of the string but will not print out 
    formElement.requestFullscreen()
});


// formElement.firstname.value
// .value 


where can you find documentation about what the event object mean(or other objects like the input element?

    search for: properties of html event objects


















