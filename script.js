// Martin07 Tech — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {
  // Play the hero sketch animation once the page has loaded
  const sketch = document.querySelector('.sketch-wrap');
  if (sketch) {
    requestAnimationFrame(() => sketch.classList.add('play'));
  }

  // Highlight the current page in the nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });

  // Contact form: basic client-side handling (no backend wired up yet)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = form.querySelector('#name').value.trim();
      if (!name) {
        status.textContent = 'Please add your name before sending.';
        status.style.color = '#E8A33D';
        return;
      }
      status.textContent = `Thanks, ${name} — replace this with a real submit handler to send it on.`;
      status.style.color = '#6FA98A';
      form.reset();
    });
  }
});
