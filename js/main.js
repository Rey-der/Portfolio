// main.js
"use strict";
import form from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    once: true,
  });
  form();

  // Hamburger menu logic
  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  // Scroll and sticky header logic
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  window.addEventListener("scroll", () => {
    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });

  // Active link highlight on scroll
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
          document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        });
      }
    });
  };

  // Modal functionality for project boxes
  const projectBoxes = document.querySelectorAll('.project-box');
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-content');
  const closeBtn = modal.querySelector('.close');

  projectBoxes.forEach(box => {
    box.addEventListener('click', function(e) {
      e.preventDefault();
      const extraContent = this.querySelector('.project-extra').innerHTML;
      modalContent.innerHTML = '<span class="close">&times;</span>' + extraContent;
      modal.style.display = "block";

      modal.querySelector('.close').addEventListener('click', function() {
        modal.style.display = "none";
      });
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Contact form debugging
  const contactForm = document.querySelector('.contactForm');
  if (contactForm) {
    console.log("Kontaktformular gefunden:", contactForm);
  } else {
    console.error("Kontaktformular nicht gefunden!");
  }
});
