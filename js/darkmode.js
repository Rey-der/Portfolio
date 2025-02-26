// darkmode.js
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById('theme-switch');
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  let darkmode = localStorage.getItem('darkmode');

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
  };

  // Set dark mode on page load if it's in localStorage
  if (darkmode === "active") enableDarkmode();

  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });
});
