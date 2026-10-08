// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav menu
const nav = document.querySelector('.nav');
const toggle = nav && nav.querySelector('.nav-toggle');
if (toggle) {
  const setOpen = (open) => {
    nav.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.hidden = false;
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('nav-open')));
  nav.querySelectorAll('.nav-menu a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 641px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

// Join form: submit to Formspree without leaving the page
const form = document.querySelector('.join-form');
if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.textContent = 'Signups open soon. Follow us on Instagram for updates.';
      return;
    }

    button.disabled = true;
    status.textContent = 'Sending...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        status.textContent = 'Welcome to the tribe! Check your inbox soon.';
      } else {
        status.textContent = 'Something went wrong. Please try again.';
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
    } finally {
      button.disabled = false;
    }
  });
}
