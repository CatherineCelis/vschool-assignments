var form = document.getElementById("airline");
// var submit = document.getElementById("submit");
// var query = document.querySelector;


function formAlert() {
    event.preventDefault;
    // prevetns the reload of our page
    // below we must assign each input field a variable name to access it easier later on in our code.
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    // var age = form.age.value;
    var age = form["age"].value;
    // var gender = form.gender.value
    var gender = form["gender"].value;
    var location = form["travel-location"].value;
    // all of the above are accessing the element in the form by its name=""
    var diet = [];
    // created a new variable of an empty array to push our users data into it to use later for the alert.

    if (form.vegan.checked) {
        diet.push(form.vegan.value);
    }
    if (form.gluten.checked) {
        diet.push(form.gluten.value);
    }
    if (form.paleo.checked) {
        diet.push(form.paleo.value);
    }
    // if statements to determined which boxes were checked
    // and if so to push that data into our data [] that we created earlier.

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet.join(', ') + "\nAwesome, now if you die, it won't be an accident..");
    // our alert function will be placed inside of our main function because we want it to appear simultaneously when our event listener is acctivated.
}
// adding an event listener to the forms button "submit" id.
// built in variable to the button if it is insdie a form it knows it is a submit button I think.
form.addEventListener("submit", formAlert);

