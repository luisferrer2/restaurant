// ── Inicializar íconos Lucide ──
lucide.createIcons();

// ── Nav: sombra al hacer scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Hamburger menú móvil ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Cerrar menú móvil al hacer clic en un link
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Tabs del menú ──
const tabs = document.querySelectorAll('.tab');
const menuCards = document.querySelectorAll('.menu-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Activar tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const cat = tab.dataset.cat;

    // Filtrar cards
    menuCards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-right').forEach(el => observer.observe(el));

// ── Formulario de pedido ──
const orderBtn = document.getElementById('orderBtn');

orderBtn.addEventListener('click', () => {
  const name  = document.querySelector('.order-form input[type="text"]').value.trim();
  const phone = document.querySelector('.order-form input[type="tel"]').value.trim();
  const order = document.querySelector('.order-form textarea').value.trim();

  if (!name || !phone || !order) {
    alert('Please fill in your name, phone and order details.');
    return;
  }

  alert(`Order received, ${name}! 🌴\nWe'll contact you at ${phone} to confirm your order.\n\nEstimated time: 30 minutes.`);

  // Limpiar formulario
  document.querySelector('.order-form input[type="text"]').value = '';
  document.querySelector('.order-form input[type="tel"]').value = '';
  document.querySelector('.order-form textarea').value = '';
});

// ── Nav activo según sección ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.style.color = isActive ? 'var(--green)' : '';
    a.style.fontWeight = isActive ? '700' : '';
  });
});