// script.js - Portfolio interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for navbar links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash && document.querySelector(this.hash)) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Gallery modal image preview
  const galleryCards = document.querySelectorAll('.gallery-card');
  const modalImage = document.getElementById('modalImage');
  galleryCards.forEach(card => {
    card.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-img');
      modalImage.src = imgSrc;
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting!');
      contactForm.reset();
    });
  }

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.display = 'inline-block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Light/Dark theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', function () {
    const body = document.body;
    const isDark = body.getAttribute('data-bs-theme') === 'dark';
    body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
    this.innerHTML = isDark ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-bs-theme', 'dark');
    themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
  }

  // (Optional) Remember contact form inputs
  ['name', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.value = localStorage.getItem('form_' + id) || '';
      input.addEventListener('input', function () {
        localStorage.setItem('form_' + id, this.value);
      });
    }
  });

  // Gallery slider: pause on click, resume on mouse leave
  const galleryCarousel = document.getElementById('galleryCarousel');
  if (galleryCarousel) {
    const carousel = new bootstrap.Carousel(galleryCarousel, {
      interval: 5000,
      ride: 'carousel',
      pause: false
    });
    let isPaused = false;
    galleryCarousel.addEventListener('click', function () {
      if (!isPaused) {
        carousel.pause();
        isPaused = true;
      }
    });
    galleryCarousel.addEventListener('mouseleave', function () {
      if (isPaused) {
        carousel.cycle();
        isPaused = false;
      }
    });
  }

  // Animate sections on scroll
  function animateOnScroll() {
    const sections = document.querySelectorAll('.section-animate');
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('resize', animateOnScroll);
  document.addEventListener('DOMContentLoaded', animateOnScroll);
});
