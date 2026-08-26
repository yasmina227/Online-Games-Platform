const saveBtn = document.querySelector("#saveBtn");

// ------------------ PROFILE ----------------
// profile inputs var 
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const bio = document.querySelector("#bio");

// ------------------ NOTIFICATION ----------------
const pushNotif = document.querySelector("#pushNotif");
const friendReq = document.querySelector("#friendReq");
const achieveAlerts = document.querySelector("#achieveAlerts");
//----------------------- appearance ----------------
let selectedTheme;
//----------------------- audio -----------------
const masterVolume =document.querySelector("#masterVolume");
const autoPlay = document.querySelector("#autoPlay");
//------------------- APPEARNCE -----------------
document.addEventListener("DOMContentLoaded", function () {
  const themeBtns = document.querySelectorAll(".theme-btn");

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {

      const selectedBtn = e.target.closest(".theme-btn");
      

      themeBtns.forEach((b) => b.classList.remove("active"));
      selectedBtn.classList.add("active");


       selectedTheme = selectedBtn.getAttribute("data-theme");


      document.body.classList.remove("theme-cyan", "theme-purple", "theme-lime");
      document.body.classList.add(`theme-${selectedTheme}`);
    });
  });
});

// Initialization 
document.addEventListener("DOMContentLoaded", () => {
  let recentUser = JSON.parse(localStorage.getItem("recentUser"));
  let usersList = JSON.parse(localStorage.getItem("Users")) || [];

  if (!recentUser) {
    recentUser = CreateUserSchema(); 
    usersList.push(recentUser);

    localStorage.setItem("recentUser", JSON.stringify(recentUser));
    localStorage.setItem("Users", JSON.stringify(usersList));
  }

  populateForm(recentUser);
});

// set input field data
function populateForm(user) {
  if (userName) userName.value = user.username || "guest";
  if (email) email.value = user.email || "";
  if (bio) bio.value = user.profile?.bio || "";
  
  if (pushNotif) pushNotif.checked = Boolean(user.settings?.notification?.pushNotif);
  if (friendReq) friendReq.checked = Boolean(user.settings?.notification?.friendReq);
  if (achieveAlerts) achieveAlerts.checked = Boolean(user.settings?.notification?.achieveAlerts);

  const currentTheme = user.profile?.theme || "cyan";
  selectedTheme = currentTheme;
  document.body.classList.remove("theme-cyan", "theme-purple", "theme-lime");
  document.body.classList.add(`theme-${currentTheme}`);

  const themeBtns = document.querySelectorAll(".theme-btn");
  const activeBtn = document.querySelector(`.theme-btn[data-theme="${currentTheme}"]`);
  themeBtns.forEach((b) => b.classList.remove("active"));
  if (activeBtn) activeBtn.classList.add("active");

  masterVolume.value=user.settings.audio.masterVolume ||60;

  if(autoPlay) autoPlay.checked = Boolean(user.settings?.gamePlay?.autoPlay);
}

// save data
saveBtn.addEventListener("click", () => {
  let user = JSON.parse(localStorage.getItem("recentUser"));
  let usersList = JSON.parse(localStorage.getItem("Users")) || [];
  if (!user) return;

  user.username = userName.value;
  user.email = email.value;
  
  if (!user.profile) user.profile = {};
  user.profile.bio = bio.value;

  if (!user.settings) user.settings = {};
  if (!user.settings.notification) user.settings.notification = {};

  user.settings.notification.pushNotif = pushNotif.checked;
  user.settings.notification.friendReq = friendReq.checked;
  user.settings.notification.achieveAlerts = achieveAlerts.checked;

  user.profile.theme = selectedTheme;

  user.settings.audio.masterVolume = masterVolume.value;

  if (!user.settings.gameplay) user.settings.gameplay = {};
user.settings.gameplay.autoPlay = autoPlay.checked;
  // update user data in users array 
  const userIndex = usersList.findIndex((u) => u._id === user._id);
  if (userIndex !== -1) {
    usersList[userIndex] = user;
  }

  localStorage.setItem("recentUser", JSON.stringify(user));
  localStorage.setItem("Users", JSON.stringify(usersList));
     alert("data saved successfully!")
  console.log("data saved successfully");
});




// ------------------ AUDIO ----------------
