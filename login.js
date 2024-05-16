     // Add an event listener to the button
     document.querySelector('#loginForm button').addEventListener('click', function (event) {
        // Prevent the form from being submitted
        event.preventDefault();
        // Call the showAlert function
        showAlert();
    });

    // Function to show an alert when the form is submitted
    function showAlert() {
        alert("Login Successful");
    }