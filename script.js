<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Guillermo Comesaña | Data Science & Biostatistics</title>
  <meta name="description" content="PhD student in Data Science & Biostatistics at Cardiff University. Research at the intersection of machine learning, human genetics, and disease." />
  <meta name="author" content="Guillermo Comesaña" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Guillermo Comesaña | Data Science & Biostatistics" />
  <meta property="og:description" content="PhD student at Cardiff University, focusing on machine learning for genetics and disease." />
  <meta property="og:url" content="https://guillermocomesana.github.io/" />
  <meta property="og:image" content="images/og-card.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#0f172a" />

  <link rel="stylesheet" href="style.css" />
  <!-- Optional favicons -->
  <!-- <link rel="icon" href="images/favicon.png" sizes="32x32"> -->
  <noscript><style>.reveal,.fade-in{opacity:1;transform:none}</style></noscript>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header" role="banner">
    <nav class="navbar" aria-label="Primary">
      <a class="logo" href="/" aria-label="Home">Guillermo Comesaña</a>
      <button id="dark-mode-toggle" class="icon-btn" aria-label="Toggle dark mode" title="Toggle dark mode">🌙</button>
      <ul class="nav-links">
        <li><a href="#about" tabindex="1">About Me</a></li>
        <li><a href="#projects" tabindex="2">Projects</a></li>
        <li><a href="#contact" tabindex="3">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main">
    <!-- HERO -->
    <section class="hero fade-in" aria-labelledby="hero-title">
      <div class="hero-inner">
        <h1 id="hero-title">Machine learning × human genetics × disease</h1>
        <p class="lead">
          I’m <strong>Guillermo Comesaña</strong>, a PhD researcher in Data Science &amp; Biostatistics at Cardiff University.
          I build tools for causal inference and predictive modelling in genetic epidemiology.
        </p>
        <div class="hero-actions">
          <a class="btn primary" href="#projects">View Projects</a>
          <a class="btn" href="mailto:gcc@bath.ac.uk">Email me</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stop-color="var(--accent)" />
              <stop offset="1" stop-color="var(--accent-2)" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="80" r="60" fill="url(#g1)" />
          <circle cx="520" cy="320" r="90" fill="url(#g1)" opacity="0.6" />
          <rect x="240" y="120" width="160" height="160" rx="24" fill="url(#g1)" opacity="0.35" />
        </svg>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section about reveal" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <p>
        I am a <strong>PhD student in Data Science and Biostatistics at Cardiff University</strong>, passionate about the intersection
        of machine learning, human genetics, and disease. Welcome to my professional website—find my latest research projects,
        academic history, and how to contact me.
      </p>
      <div class="unis" aria-label="Universities">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener" title="Cardiff University">
          <img src="images/cardiff.png" alt="Cardiff University Logo" class="uni-logo" loading="lazy" decoding="async" />
        </a>
        <a href="https://www.bath.ac.uk/" target="_blank" rel="noopener" title="University of Bath">
          <img src="images/bath.png" alt="University of Bath Logo" class="uni-logo" loading="lazy" decoding="async" />
        </a>
        <a href="https://www.surrey.ac.uk/" target="_blank" rel="noopener" title="University of Surrey">
          <img src="images/surrey.png" alt="University of Surrey Logo" class="uni-logo" loading="lazy" decoding="async" />
        </a>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section projects reveal" aria-labelledby="projects-title">
      <h2 id="projects-title">Featured Projects</h2>
      <div class="filters" role="group" aria-label="Filter projects">
        <button class="chip is-active" data-filter="all">All</button>
        <button class="chip" data-filter="ml">ML</button>
        <button class="chip" data-filter="genetics">Genetics</button>
        <button class="chip" data-filter="infra">Tooling</button>
      </div>

      <div class="projects-list" id="projects-grid">
        <!-- Cards will be rendered by script.js -->
      </div>

      <template id="project-card-template">
        <article class="project-card" tabindex="0">
          <div class="project-kicker"></div>
          <h3 class="project-title"></h3>
          <p class="project-desc"></p>
          <div class="project-actions">
            <a class="btn small" target="_blank" rel="noopener">Repo</a>
            <a class="btn small outline" target="_blank" rel="noopener">Docs</a>
          </div>
        </article>
      </template>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section contact reveal" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Me</h2>
      <p>
        The best way to reach me is by email:
        <a href="mailto:gcc@bath.ac.uk">gcc@bath.ac.uk</a>
      </p>
      <!-- Add LinkedIn / Scholar if you like -->
    </section>
  </main>

  <footer class="site-footer">
    <p>© <span id="year"></span> Guillermo Comesaña. All rights reserved.</p>
    <nav aria-label="Footer">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </footer>

  <script src="script.js" type="module"></script>
</body>
</html>
