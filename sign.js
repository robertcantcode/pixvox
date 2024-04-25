// Array to store user objects
var users = [];

// Function to validate form and sign up user
function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm").value;

    // Check if username length is between 4 and 19 characters and contains only letters, numbers, or _
    var usernameRegex = /^[a-zA-Z0-9_]{4,19}$/;
    if (!usernameRegex.test(username)) {
        // Show the warning text
        document.getElementById("warningText").style.display = "block";
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false; // Prevent form submission
    }

    // Create user object
    var user = {
        username: username,
        password: password
        // Add other user details here if needed
    };

    // Add user object to the array
    users.push(user);

    // Optional: You can save the user data to local storage for persistence
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to home page after signup
    window.location.href = "home.html";

    return true; // Allow form submission
}