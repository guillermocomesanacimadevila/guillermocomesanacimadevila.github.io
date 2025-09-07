// ————— Theme (system-pref + toggle) —————
const root = document.documentElement;
const themeToggle = document.getElementById('dark-mode-toggle');
const storedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

root.dataset.theme = storedTheme || (systemDark ? 'dark' : 'light');
themeToggle.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙';
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ————— Smooth scroll for in-page links with focus management —————
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Move focus for accessibility
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

// ————— Reveal on scroll (IntersectionObserver) —————
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ————— Dynamic year —————
document.getElementById('year').textContent = new Date().getFullYear();

// ————— Projects data & rendering —————
const projects = [
  {
    title: "MR-CoPe: Automated Mendelian Randomisation Engine",
    desc: "A comprehensive toolkit for automated Mendelian Randomisation analysis, designed to streamline causal inference in genetic epidemiology.",
    tags: ["ml","genetics","infra"],
    repo: "https://github.com/guillermocomesanacimadevila/MR-CoPe",
    docs: "https://github.com/guillermocomesanacimadevila/MR-CoPe#readme"
  },
  {
    title: "PA-Predict: Machine Learning Pipeline to Diagnose Pernicious Anaemia",
    desc: "A robust machine learning pipeline to support the diagnosis of Pernicious Anaemia from clinical and laboratory data.",
    tags: ["ml"],
    repo: "https://github.com/guillermocomesanacimadevila/PA-Predict",
    docs: "https://github.com/guillermocomesanacimadevila/PA-Predict#readme"
  },
  {
    title: "ENIGMA-Pipeline: Working Memory Prediction from sMRI Data",
    desc: "Machine learning for predicting working memory outcomes from structural MRI data in schizophrenia research. (Internal academic project)",
    tags: ["ml"],
    repo: "#",
    docs: "#"
  },
  {
    title: "EDITS: Deep Learning for Live-cell Microscopy",
    desc: "Self-supervised representation learning and U-Net classifier for identifying apoptosis and mitosis from spatiotemporal live-cell microscopy.",
    tags: ["ml","infra"],
    repo: "https://github.com/guillermocomesanacimadevila/EDITS",
    docs: "https://github.com/guillermocomesanacimadevila/EDITS#readme"
  }
];

const grid = document.getElementById('projects-grid');
const tpl = document.getElementById('project-card-template');

function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  projects
    .filter(p => filter === 'all' || p.tags.includes(filter))
    .forEach(p => {
      const node = tpl.content.cloneNode(true);
      node.querySelector('.project-title').textContent = p.title;
      node.querySelector('.project-desc').textContent = p.desc;
      const [repoBtn, docsBtn] = node.querySelectorAll('.project-actions a');
      repoBtn.href = p.repo;
      repoBtn.textContent = p.repo === '#' ? 'Private' : 'Repo';
      docsBtn.href = p.docs;
      grid.appendChild(node);
    });
}
renderProjects();

// Filters
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    renderProjects(chip.dataset.filter);
  });
});
