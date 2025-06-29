document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const errorMessage = document.getElementById("error-message");

  // Dummy credentials
  const validUsername = "admin";
  const validPassword = "password123";

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    errorMessage.textContent = "";
    // You could redirect here with: window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
