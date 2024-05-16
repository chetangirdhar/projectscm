// Add your registration logic here
document.querySelector('#registerForm button').addEventListener('click', function (event) {
    event.preventDefault();
    // Your registration logic here
    showRegistrationAlert();
});

function showRegistrationAlert() {
    alert("Registration Successful");
}
