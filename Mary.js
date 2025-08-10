document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-toggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
