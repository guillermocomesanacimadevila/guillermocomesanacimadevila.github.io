// --- Smooth scroll for nav links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- Dark mode toggle ---
const toggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;
toggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  if (theme === 'dark') {
    html.removeAttribute('data-theme');
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute('data-theme', 'dark');
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
// Load theme from localStorage
if(localStorage.getItem('theme') === 'dark') {
  html.setAttribute('data-theme', 'dark');
  toggle.textContent = "☀️";
}

// --- Fade-in/reveal animation on scroll ---
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.17 });
document.querySelectorAll('.project-card, .section').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
// Add these styles to CSS:

