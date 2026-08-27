const username = document.querySelector(".user-name");
const usertag = document.querySelector(".user-tag");
const rankbage = document.querySelector(".rank-badge");
const email = document.querySelector("#email");
const joineddate = document.querySelector("#joineddate");

let user = JSON.parse(localStorage.getItem("recentUser"));

username.innerHTML = user.username;
usertag.innerHTML = "@" + user.username;
rankbage.innerHTML = user.profile.rank;
email.innerHTML = user.email;
joineddate.innerHTML = user.createdAt;

const logoutbtn = document.querySelector(".logout-btn");

logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("recentUser");
  window.location.href = "login.html";
});
