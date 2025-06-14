// Mobile Menu Toggle
const menubar = document.querySelector("#menu");
const Navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  Navbar.classList.toggle("active");
};

// Active Section Detection and Animation Trigger
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // Section animation and nav link highlighting
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      // Add animation class to section
      sec.classList.add("start-animation");

      // Update active nav link
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  // Sticky Header
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close mobile menu when scrolling
  menubar.classList.remove("bx-x");
  Navbar.classList.remove("active");
};

// Initialize animations for the first section on page load
document.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector("section");
  if (firstSection) {
    firstSection.classList.add("start-animation");
  }

  // Set first nav link as active by default
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }
});

// Project card animation delays
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, index) => {
  card.style.setProperty("--i", index);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Form submission handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Back to top button functionality
const topBtn = document.querySelector(".top-btn");
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "flex";
    } else {
      topBtn.style.display = "none";
    }
  });
}
