/*==================== Toggle Icon Navbar ====================*/
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/*==================== Scroll Sections Active Link ====================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });

  /*==================== Sticky Navbar ====================*/
  const header = document.querySelector("header");
  header.classList.toggle("sticky", scrollPosition > 100);

  /*==================== Remove Toggle Icon and Navbar on Scroll ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

/*==================== Scroll Reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== Typed.js for Animated Text ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Full Stack Graphic Designer",
    "Illustration Expert",
    "Photoshop Expert",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  startDelay: 1000,
  loop: true,
  loopDelay: 1000,
});

document.getElementById("read-more").addEventListener("click", function () {
  document.querySelector(".full-description").style.display = "block";
  document.getElementById("read-more").style.display = "none";
});
