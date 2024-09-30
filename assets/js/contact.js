// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For demonstration purposes, we'll log the values
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Display a response message
    document.getElementById('responseMessage').textContent = 'Thank you for your message! We will get back to you soon.';

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});



const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
