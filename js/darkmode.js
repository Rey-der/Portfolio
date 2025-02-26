let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode(): disableDarkmode()
})

document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
  
    themeSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode"); // You might need to implement dark mode styling separately
  
      if (document.body.classList.contains("dark-mode")) {
        sunIcon.style.opacity = "0";
        moonIcon.style.opacity = "1";
      } else {
        sunIcon.style.opacity = "1";
        moonIcon.style.opacity = "0";
      }
    });
  });
  