// ===== Reveal on scroll =====
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('on');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Projects data (EDÍTAME) =====
const PROJECTS = [
  {
    title: 'AI-Powered Career Toolkit',
    cat: 'AI/ML',
    year: 2024,
    status: 'Completed',
    summary: 'Plataforma full-stack para CVs e entrevistas con IA.',
    stack: ['React', 'Django', 'OpenAI API'],
    ctas: [{ label: 'Live', href: '#' }, { label: 'Code', href: '#' }]
  },
  {
    title: 'WFM Scheduling Optimizer',
    cat: 'Full-Stack',
    year: 2025,
    status: 'Completed',
    summary: 'Generador de turnos con validación de cobertura y metaheurísticas.',
    stack: ['Python', 'OR-Tools', 'Streamlit'],
    ctas: [{ label: 'Demo', href: '#' }]
  },
  {
    title: 'CX KPI Dashboards',
    cat: 'Dashboards',
    year: 2024,
    status: 'In progress',
    summary: 'Suite de tableros en Looker Studio para SLA y experiencia.',
    stack: ['Looker Studio', 'BigQuery'],
    ctas: [{ label: 'View', href: '#' }]
  }
];

// ===== Render projects =====
const grid = document.getElementById('projects');
function renderProjects(list) {
  grid.innerHTML = list.map(project => `
    <article class="card pad project" data-cat="${project.cat}">
      <header><span class="pill">${project.cat}</span><span class="pill">${project.status}</span><span class="year">${project.year}</span></header>
      <h3>${project.title}</h3>
      <p class="muted">${project.summary}</p>
      <div class="stack">${project.stack.map(tech => `<span>${tech}</span>`).join('')}</div>
      <div class="actions">${project.ctas.map(cta => `<a class="btn" href="${cta.href}" target="_blank" rel="noopener">${cta.label}</a>`).join('')}</div>
    </article>
  `).join('');
}
renderProjects(PROJECTS);

// ===== Filters =====
document.querySelectorAll('.filters [data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.project').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
    });
  });
});

// ===== i18n (ES/EN) =====
const i18n = {
  es: {
    'nav.home': 'Inicio', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos', 'nav.cv': 'CV', 'nav.contact': 'Contacto',
    'hero.kicker': 'Workforce & IA para CX',
    'hero.title': 'Estrategias y automatizaciones que elevan la experiencia del cliente y el rendimiento operativo',
    'hero.subtitle': 'Disponible para proyectos remotos e híbridos en LATAM y Norteamérica.',
    'cta.resume': 'Descargar CV', 'cta.meeting': 'Agendar una reunión',
    'm.years': 'Años liderando WFM', 'm.projects': 'Proyectos de optimización', 'm.sla': 'SLA de cumplimiento',
    'sec.services': 'Qué puedo aportar',
    'feat.dash': 'Indicadores accionables y storytelling visual para equipos no técnicos.',
    'feat.auto': 'Bots y flujos que reducen tiempos operativos y errores.',
    'feat.forecast': 'Pronósticos claros con supuestos explícitos para tomar decisiones.',
    'feat.cx': 'Modelos de cobertura y calidad enfocados en impacto de negocio.',
    'sec.cv': 'Currículum', 'cv.text': 'Descarga mi CV actualizado y conoce experiencia, formación y herramientas.',
    'sec.contact': 'Conectemos', 'form.name': 'Nombre', 'form.msg': 'Mensaje', 'form.send': 'Enviar',
    'filter.all': 'Todos'
  },
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.cv': 'Resume', 'nav.contact': 'Contact',
    'hero.kicker': 'Workforce & AI for CX',
    'hero.title': 'Strategies & automations that elevate customer experience and operational performance',
    'hero.subtitle': 'Open to remote/hybrid projects in LATAM & North America.',
    'cta.resume': 'Download Resume', 'cta.meeting': 'Schedule a meeting',
    'm.years': 'Years leading WFM', 'm.projects': 'Optimization projects', 'm.sla': 'SLA achievement',
    'sec.services': 'What I bring',
    'feat.dash': 'Actionable KPIs and visual storytelling for non-technical teams.',
    'feat.auto': 'Bots and flows that reduce operational time and errors.',
    'feat.forecast': 'Clear forecasts with explicit assumptions for decisions.',
    'feat.cx': 'Coverage & quality models focused on business impact.',
    'sec.cv': 'Resume', 'cv.text': 'Download my updated resume with experience, education and tools.',
    'sec.contact': 'Let’s connect', 'form.name': 'Name', 'form.msg': 'Message', 'form.send': 'Send',
    'filter.all': 'All'
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}
setLang(localStorage.getItem('lang') || 'es');

document.getElementById('lang-toggle').addEventListener('click', () => {
  const next = (document.documentElement.lang === 'es') ? 'en' : 'es';
  setLang(next);
});

// ===== Smooth scroll fallback (Safari viejo) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const id = anchor.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
