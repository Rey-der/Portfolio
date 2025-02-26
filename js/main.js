"use strict";
import form from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});

document.addEventListener("DOMContentLoaded", function() {
  // Select all project boxes
  const projectBoxes = document.querySelectorAll('.project-box');
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-content');
  const closeBtn = modal.querySelector('.close');

  // When a project box is clicked, open the modal and display its extra content
  projectBoxes.forEach(box => {
    box.addEventListener('click', function(e) {
      e.preventDefault();
      // Retrieve the hidden extra content
      const extraContent = this.querySelector('.project-extra').innerHTML;
      // Insert extra content into the modal content (keeping the close button)
      modalContent.innerHTML = '<span class="close">&times;</span>' + extraContent;
      // Show the modal
      modal.style.display = "block";

      // Reattach close event to the new close button (because innerHTML reset it)
      modal.querySelector('.close').addEventListener('click', function() {
        modal.style.display = "none";
      });
    });
  });

  // Close modal if user clicks outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contactForm');
  if (contactForm) {
    // Hier kannst du sicher mit dem contactForm-Element arbeiten
    console.log("Kontaktformular gefunden:", contactForm);
  } else {
    console.error("Kontaktformular nicht gefunden!");
  }
});

