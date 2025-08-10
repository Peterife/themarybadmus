// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  document.getElementById('theme-toggle').textContent = isLight ? '🌙' : '☀️';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
