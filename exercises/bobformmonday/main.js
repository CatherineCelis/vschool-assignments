var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(dogpoops) {
    dogpoops.preventDefault();
    // var person = {
    //     firstName: contactForm.firstName.value,
    //     lastName: contactForm.lastName.value,
    //     email: contactForm.email.value,
    // }
    // var firstName = 
    var lastName = contactForm.lirstName.value;
    var email = contactForm.email.value;
    alert("First Name:" + contactForm.firstName.value);
});
// var firstName = contactForm.firstName.value;

var todoForm = document.getElementById("todo-form");
contactForm.addEventListener("submit", function(dogpoops) {
    dogpoops.preventDefault();
    var newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value
    }
axios.post("https. todo list api link here", tod));
