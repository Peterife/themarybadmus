document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  toggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('.has-children > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.nextElementSibling.classList.toggle('open');
      }
    });
  });
});

