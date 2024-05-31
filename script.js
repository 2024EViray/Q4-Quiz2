    document.getElementById('loginform').addEventListener('submit', function(event) {
        event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === "dummytest@gmail.com" && password === "pass123") {
         window.location.href = "mainpage.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});