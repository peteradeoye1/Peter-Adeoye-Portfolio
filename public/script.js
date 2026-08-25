const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const projectToggles = document.querySelectorAll('.project-toggle');

projectToggles.forEach((button) => {
  const card = button.closest('.project-card');
  const fullDetails = card ? card.querySelector('.project-full') : null;
  const toolList = card ? card.querySelector('.project-tools') : null;

  if (!fullDetails) return;

  button.addEventListener('click', () => {
    const isExpanded = button.dataset.expanded === 'true';
    const nextExpanded = !isExpanded;

    button.dataset.expanded = String(nextExpanded);
    button.setAttribute('aria-expanded', String(nextExpanded));
    fullDetails.classList.toggle('is-open', nextExpanded);

    if (toolList) {
      toolList.classList.toggle('is-hidden', nextExpanded);
    }

    button.textContent = nextExpanded ? 'Show less' : 'Learn more';
  });
});
