const saveBtn=document.querySelector("#saveBtn");
// ------------------ PROFILE ----------------

// Initialization 
document.addEventListener("DOMContentLoaded", () => {
  let recentUser = JSON.parse(localStorage.getItem("recetnUser"));
  let usersList = JSON.parse(localStorage.getItem("Users")) || [];

  if (!recentUser) {
    recentUser = CreateUserSchema(); 
    usersList.push(recentUser);

    localStorage.setItem("recentUser", JSON.stringify(recentUser));
    localStorage.setItem("Users", JSON.stringify(usersList));
  }

 
  populateForm(recentUser);
});

// profile inputs var 
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const bio = document.querySelector("#bio");

// set input field data
function populateForm(user) {
  

  if (userName) userName.value = user.username || "guest";
  if (email) email.value = user.email || "";
  if (bio) bio.value = user.profile?.bio || "";
}




// save data
saveBtn.addEventListener("click",()=>{
  let user =JSON.parse(localStorage.getItem("recentUser"));
  let usersList = JSON.parse(localStorage.getItem("Users")) || [];
  if (!user) return;

  
  user.username = userName.value;
  user.email = email.value;
  user.profile.bio = bio.value;

  // update user data in users array 
  const userIndex = usersList.findIndex((u) => u._id === user._id);
  if (userIndex !== -1) {
    usersList[userIndex] = user;
  }

  localStorage.setItem("recentUser", JSON.stringify(user));
  localStorage.setItem("Users", JSON.stringify(usersList));

  console.log("data saved successfully")
});

// ------------------ NOTIFICATION ----------------


//------------------- APPEARNCE -----------------
document.addEventListener("DOMContentLoaded", function () {
  const themeBtns = document.querySelectorAll(".theme-btn");

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {

      const selectedBtn = e.target.closest(".theme-btn");
      

      themeBtns.forEach((b) => b.classList.remove("active"));
      selectedBtn.classList.add("active");


      const selectedTheme = selectedBtn.getAttribute("data-theme");


      document.body.classList.remove("theme-cyan", "theme-purple", "theme-lime");
      document.body.classList.add(`theme-${selectedTheme}`);
    });
  });
});
// ------------------ AUDIO ----------------
