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

  // Contact form: builds a pre-filled WhatsApp message and opens it
  const WHATSAPP_NUMBER = '27603525772'; // Martin07 Tech — 060 352 5772

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const pkg = form.querySelector('#package').value;
      const message = form.querySelector('#message').value.trim();

      if (!name || !email) {
        status.textContent = 'Please add your name and email before sending.';
        status.style.color = '#E8A33D';
        return;
      }

      const lines = [
        `Hi Martin07 Tech, my name is ${name}.`,
        `Email: ${email}`,
        `Package: ${pkg}`,
        message ? `Message: ${message}` : null
      ].filter(Boolean);

      const text = encodeURIComponent(lines.join('\n'));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      status.textContent = 'Opening WhatsApp…';
      status.style.color = '#6FA98A';
      window.open(url, '_blank', 'noopener');
      form.reset();
    });
  }
});
