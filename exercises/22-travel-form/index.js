var submit = document.getElementById("submit")

var x = document.getElementById("destination").selectedIndex;
var y = document.getElementById("destination").options;

submit.addEventListener("click", function(e){
    alert("First Name: " + document.travelform.firstName.value + "\n"
    + "Last Name: " + document.travelform.lastname.value + "\n"
    + "Age: " + document.travelform.age.value + "\n"
    + "Gender: " + document.travelform.gender.value + "\n"
    + "Location: " + y[x].text + "\n" 
    + "Dietary Restrictions: "
    )
    }
)

