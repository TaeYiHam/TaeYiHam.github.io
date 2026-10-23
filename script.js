const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
if (nav && toggle && links) {
  nav.classList.add('enhanced');
  function closeMenu(restoreFocus = false) {
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) closeMenu();
  });
  // Never leave keyboard focus inside a menu that disappears at a breakpoint.
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => {
    const focusWasInLinks = links.contains(document.activeElement);
    closeMenu(focusWasInLinks && window.matchMedia('(max-width: 760px)').matches);
  });
}
document.getElementById('print-case')?.addEventListener('click', () => window.print());
const copyButton = document.querySelector('[data-copy-link]');
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const url = document.querySelector('link[rel="canonical"]')?.href || location.href;
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(url);
      copyButton.textContent = 'Link copied ✓';
      status.textContent = 'Project link copied to clipboard.';
      setTimeout(() => { copyButton.textContent = 'Copy project link'; }, 2500);
    } catch {
      status.textContent = 'Copy the project URL from your browser address bar.';
      copyButton.textContent = 'Use browser address to copy';
    }
  });
}
document.querySelectorAll('.toc-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    const details = link.closest('details');
    details.open = false;
    const heading = document.querySelector(link.hash)?.querySelector('h2');
    if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({preventScroll: true}); }
  });
});
const sectionLinks = [...document.querySelectorAll('.contents a')];
if (sectionLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      sectionLinks.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-15% 0px -65% 0px'});
  document.querySelectorAll('.case-section').forEach(section => observer.observe(section));
}
