// ------------------ Notification ----------------
//------------------- appearance -----------------
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