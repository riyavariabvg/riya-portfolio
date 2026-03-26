// =====================================================
// RIYA VARIA PORTFOLIO — main.js
// =====================================================

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Intersection observer for scroll-reveal
const revealEls = document.querySelectorAll('.project-card, .award-group, .skill-block, .contact-inner');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // When .visible is added, animate in
  const style = document.createElement('style');
  style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  // Handle project images: if src is missing/placeholder, show placeholder overlay
  document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('error', () => {
      img.closest('.project-image-wrap').classList.add('no-image');
    });
    // If no real src set (just placeholder), treat as no image
    if (!img.src || img.src.includes('via.placeholder')) {
      img.closest('.project-image-wrap').classList.add('no-image');
    }
  });
});