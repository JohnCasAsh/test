document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Sign Up Successful!");
});

document.getElementById("show-password").addEventListener("change", function() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");
    const type = this.checked ? "text" : "password";
    password.type = type;
    confirmPassword.type = type;
});
