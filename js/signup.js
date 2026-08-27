let Users = JSON.parse(localStorage.getItem("Users")) || [];

function RegisterUser({ username, email, password, ageCategory }) {
  const newUser = CreateUserSchema({
    username: username,
    email: email,
    password: password,
    ageCategory: ageCategory,
  });

  Users.push(newUser);

  localStorage.setItem("Users", JSON.stringify(Users));
  localStorage.setItem("recentUser", JSON.stringify(newUser));

  console.log("User registered successfully!", newUser);
}

//---------------------------------------------------------------------------------------------
const signupForm = document.getElementById("signupform");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullnameInput = document.getElementById("fullname").value.trim();
  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const ageCategoryInput = document.getElementById("age-category").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const ageError = document.getElementById("ageError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  ageError.textContent = "";

  let isValid = true;

  if (!fullnameInput) {
    nameError.textContent = "Full name is required";
    isValid = false;
  }
  if (!emailInput) {
    emailError.textContent = "Email address is required";
    isValid = false;
  }
  if (!passwordInput) {
    passwordError.textContent = "Password is required";
    isValid = false;
  }
  if (!ageCategoryInput) {
    ageError.textContent = "Please select your age category";
    isValid = false;
  }

  if (isValid) {
    RegisterUser({
      username: fullnameInput,
      email: emailInput,
      password: passwordInput,
      ageCategory: ageCategoryInput,
    });

    signupForm.reset();
    alert("Account created successfully!");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
});
