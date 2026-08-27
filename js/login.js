document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginform");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("email").value.trim();
      const passwordInput = document.getElementById("password").value.trim();

      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");

      emailError.textContent = "";
      passwordError.textContent = "";

      let isValid = true;

      if (!emailInput || !emailInput.includes("@")) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
      }

      if (passwordInput.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
      }

      if (isValid) {
        const users = JSON.parse(localStorage.getItem("Users")) || [];

        const foundUser = users.find(
          (user) => user.email === emailInput && user.password === passwordInput
        );

        if (foundUser) {
          localStorage.setItem("recentUser", JSON.stringify(foundUser));
          alert("Login successful!");

          setTimeout(() => {
            window.location.href = "index.html";
          }, 1000);
        } else {
          passwordError.textContent = "Invalid email or password";
        }
      }
    });
  }
});