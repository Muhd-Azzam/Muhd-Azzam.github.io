//Javascript untuk Form Validation . .  . . . .

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    if(name.value == "" || email.value == "" || subject.value == "" || message.value == "") {
        alert("All fields must be filled out");
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Form submitted successfully");
    return true;
});
