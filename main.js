// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

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
