// ==== Typing animation effect ====
const typingElement = document.querySelector('.typing');
const titles = ["Welcome to My Portfolio", "I am a Tech Enthusiast", "I am a Tech Explorer"];
let charIndex = 0;
let titleIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  const visibleText = isDeleting
    ? currentTitle.slice(0, --charIndex)
    : currentTitle.slice(0, ++charIndex);

  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 120);
  }
}

// ==== Smooth scrolling for nav links ====
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});

// ==== Skill bar animation on scroll ====
const skillBars = document.querySelectorAll('.bar');

function animateSkills() {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) bar.classList.add('animate');
  });
}

// ==== Highlight active sidebar link ====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav a');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

// ==== Initialize after DOM loads ====
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  animateSkills();
  highlightNav();
  document.getElementById('year').textContent = new Date().getFullYear();
});

window.addEventListener('scroll', () => {
  animateSkills();
  highlightNav();
});
