document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  document.getElementById('theme-toggle').textContent = isLight ? '🌙' : '☀️';
});
